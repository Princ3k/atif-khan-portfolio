import React, { useState, useRef, useEffect } from 'react';
import type { Message } from '../types';
import { getChatResponse } from '../services/geminiService';

// Animated Avatar Component
const AnimatedAvatar: React.FC = () => {
  return (
    <div className="relative w-16 h-16">
      {/* Outer glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
      
      {/* Avatar circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
        {/* Inner content - animated initials */}
        <div className="text-center">
          <div className="text-2xl font-bold text-white animate-bounce" style={{animationDuration: '2s'}}>
            A
          </div>
          <div className="text-xs text-blue-100 font-semibold">KI</div>
        </div>
      </div>
      
      {/* Orbiting dots animation */}
      <div className="absolute inset-0 rounded-full">
        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full -translate-x-1/2 animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute right-0 top-1/2 w-1.5 h-1.5 bg-indigo-300 rounded-full -translate-y-1/2 animate-pulse" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-purple-300 rounded-full -translate-x-1/2 animate-pulse" style={{animationDelay: '0.6s'}}></div>
        <div className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full -translate-y-1/2 animate-pulse" style={{animationDelay: '0.9s'}}></div>
      </div>
    </div>
  );
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hey there! 👋 I'm Atif's AI assistant. Ask me anything about my experience, skills, projects, or even my thoughts on faith, travel, and building with purpose. What's on your mind?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponseText = await getChatResponse(input);
      const aiMessage: Message = { id: (Date.now() + 1).toString(), text: aiResponseText, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting response from Gemini:", error);
      const errorMessage: Message = { id: (Date.now() + 1).toString(), text: "Sorry, I'm having trouble connecting right now. Please try again later.", sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button - Floating Action Button */}
      <div className={`fixed bottom-8 right-8 transition-all duration-300 z-40 ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl hover:shadow-blue-500/50 hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
          aria-label="Open chat"
        >
          <AnimatedAvatar />
        </button>
      </div>

      {/* Chat Window */}
      <div className={`fixed bottom-8 right-8 w-[90vw] max-w-md h-[70vh] max-h-[650px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right z-50 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} border border-slate-700/50`}>
        
        {/* Header */}
        <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-blue-600/10 to-indigo-600/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">AK</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Chat with Atif</h3>
                <p className="text-xs text-slate-400">Always happy to chat</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-400 hover:text-white hover:bg-slate-700/50 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200" 
              aria-label="Close chat"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 scroll-smooth scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-end gap-2 animate-fade-in ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xs">AK</span>
                </div>
              )}
              <div className={`max-w-xs md:max-w-sm rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-lg ${
                msg.sender === 'user' 
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-sm' 
                  : 'bg-slate-700/80 text-slate-100 rounded-bl-sm border border-slate-600/50'
              }`}>
                <p className="whitespace-pre-wrap break-words">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-2 justify-start">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">AK</span>
              </div>
              <div className="max-w-xs md:max-w-sm rounded-2xl px-4 py-2 bg-slate-700/80 border border-slate-600/50 rounded-bl-sm">
                <div className="flex items-center justify-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-800/30">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tell me something..."
              className="flex-1 bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-full py-2.5 px-4 transition-all duration-200 focus:bg-slate-700 text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || input.trim() === ''}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 disabled:hover:shadow-none"
              aria-label="Send message"
            >
              <i className="fas fa-arrow-up text-sm"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop to close chat */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Chatbot;
