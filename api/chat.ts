import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

// Rate limiting store (in-memory - resets on cold start)
// For production with high traffic, consider Upstash Redis
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  maxRequests: 10,      // Max requests per window
  windowMs: 60 * 1000,  // 1 minute window
};

// Response cache for common questions
const responseCache = new Map<string, { response: string; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Compressed system prompt (~70% smaller than original)
const SYSTEM_PROMPT = `You are Atif Khan - a 22-year-old Pakistani-Canadian software engineer from Toronto.

CORE IDENTITY:
- UofT Computer Science student (graduating 2026)
- Muslim, grounded, intentional, calm builder
- Values: niyyah (intentions first), barakah over burnout, quiet consistency

CURRENT ROLE: Criteo - Full Stack Engineer Intern
- Building dataset generation platform (.NET 8, Angular, AWS)
- 70% throughput improvement via microservices

PAST EXPERIENCE:
- General Motors: ADAS/Super Cruise automation, saved 200+ hours/release
- Intact Financial: 26+ CI/CD pipelines, 35% deployment reliability improvement

PROJECTS:
1. Impact OS (https://getimpactos.com) - Work tracking & AI-powered reports
2. Niyyah (https://theniyyahapp.com) - Intentions tracker, 100+ users

TECH SKILLS: Python, TypeScript, C#, React, Angular, Node.js, .NET, AWS, Docker, K8s

SPEAKING STYLE:
- Simple, sincere, thoughtful
- Confident but humble
- Use phrases like "still early - building brick by brick", "one step at a time"
- Avoid hustle-bro energy, corporate tone, or fake enthusiasm

TOPICS YOU ENJOY: coffee/chai culture, aviation/travel, faith, building with purpose

For coffee/chai discussions, warmly invite them to connect: atifkhan308@icloud.com or LinkedIn @atif-khan3

Keep responses concise (2-4 sentences for simple questions). Be genuine and real.`;

function getClientIP(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown';
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return { allowed: true, remaining: RATE_LIMIT.maxRequests - 1 };
  }

  if (record.count >= RATE_LIMIT.maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT.maxRequests - record.count };
}

function normalizeMessage(message: string): string {
  return message.toLowerCase().trim().replace(/[^\w\s]/g, '');
}

function getCachedResponse(message: string): string | null {
  const normalized = normalizeMessage(message);
  const cached = responseCache.get(normalized);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.response;
  }

  return null;
}

function cacheResponse(message: string, response: string): void {
  const normalized = normalizeMessage(message);
  responseCache.set(normalized, { response, timestamp: Date.now() });

  // Limit cache size to prevent memory issues
  if (responseCache.size > 100) {
    const firstKey = responseCache.keys().next().value;
    if (firstKey) responseCache.delete(firstKey);
  }
}

// Chat session store per IP (limited history)
const chatSessions = new Map<string, { history: Array<{ role: string; parts: Array<{ text: string }> }>; lastAccess: number }>();
const MAX_HISTORY_LENGTH = 6; // Keep last 3 exchanges (6 messages)
const SESSION_TTL = 30 * 60 * 1000; // 30 minutes

function getOrCreateSession(ip: string) {
  const session = chatSessions.get(ip);
  const now = Date.now();

  if (session && now - session.lastAccess < SESSION_TTL) {
    session.lastAccess = now;
    return session.history;
  }

  const newHistory: Array<{ role: string; parts: Array<{ text: string }> }> = [];
  chatSessions.set(ip, { history: newHistory, lastAccess: now });

  // Clean up old sessions periodically
  if (chatSessions.size > 1000) {
    for (const [key, val] of chatSessions) {
      if (now - val.lastAccess > SESSION_TTL) {
        chatSessions.delete(key);
      }
    }
  }

  return newHistory;
}

function addToHistory(ip: string, userMessage: string, aiResponse: string) {
  const history = getOrCreateSession(ip);

  history.push({ role: 'user', parts: [{ text: userMessage }] });
  history.push({ role: 'model', parts: [{ text: aiResponse }] });

  // Trim history to prevent token bloat
  while (history.length > MAX_HISTORY_LENGTH) {
    history.shift();
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const clientIP = getClientIP(req);

  // Check rate limit
  const rateLimit = checkRateLimit(clientIP);
  res.setHeader('X-RateLimit-Remaining', rateLimit.remaining.toString());

  if (!rateLimit.allowed) {
    return res.status(429).json({
      error: 'Rate limit exceeded. Please wait a moment before sending more messages.',
      retryAfter: 60
    });
  }

  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Limit message length
  if (message.length > 500) {
    return res.status(400).json({ error: 'Message too long. Please keep it under 500 characters.' });
  }

  // Check cache first
  const cachedResponse = getCachedResponse(message);
  if (cachedResponse) {
    return res.status(200).json({ response: cachedResponse, cached: true });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const history = getOrCreateSession(clientIP);

    // Use gemini-2.0-flash-lite for cost efficiency (cheapest option)
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-lite',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: 300, // Limit response length
        temperature: 0.7,
      },
    });

    const responseText = response.text || "I'm having trouble responding right now. Please try again.";

    // Update session history
    addToHistory(clientIP, message, responseText);

    // Cache the response
    cacheResponse(message, responseText);

    return res.status(200).json({ response: responseText });
  } catch (error) {
    console.error('Gemini API error:', error);
    return res.status(500).json({
      error: "I'm having trouble processing that right now. Please try again in a moment."
    });
  }
}
