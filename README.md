# Atif Khan's Portfolio

> **Full Stack Engineer × Builder × Travel Enthusiast**
> 
> A dynamic, AI-powered personal portfolio showcasing my journey from Starbucks barista to enterprise systems architect. Built with intention, designed with personality.

---

## 🌟 About Me

I'm a **22-year-old Pakistani-Canadian engineer** from Toronto, building systems with purpose. My journey spans:

- **DevSecOps** at Intact Financial Corporation
- **Automation & ADAS Testing** at General Motors  
- **Enterprise Microservices** at Criteo
- **Airport Operations** at Porter Airlines
- **Community Tech** through the [Niyyah App](https://theniyyahapp.com)

I believe in **Niyyah** (clear intention), **Barakah** (sustainable growth), and quiet, consistent execution. My goal is to create waves, not ripples.

---

## 🚀 Live Portfolio

**[atif-khan-portfolio.com](https://princ3k.github.io/atif-khan-portfolio/)** (Coming soon)

**Local Development:**
```bash
npm run dev
```
Then visit `http://localhost:5173`

---

## 💻 Tech Stack

### Frontend
- **React 18** with **TypeScript** for type-safe, scalable components
- **Vite** for lightning-fast builds and HMR
- **Tailwind CSS** for modern, responsive design
- **Font Awesome** for beautiful iconography

### Backend & Services
- **Google Gemini API** for AI-powered chatbot
- **Node.js** for runtime environment

### Deployment & DevOps
- **GitHub Pages** for hosting
- **GitHub Actions** for CI/CD (planned)

### Architecture Highlights
- ✅ Single-page application (SPA) with smooth navigation
- ✅ Dark/Light mode toggle with persistent user preference
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ AI chatbot with dynamic system prompts
- ✅ Accessibility-first approach (ARIA labels, semantic HTML)
- ✅ Performance optimized (lazy loading, image optimization)

---

## 📂 Project Structure

```
atif-khan-portfolio/
├── components/              # React components
│   ├── Header.tsx          # Navigation & theme toggle
│   ├── Hero.tsx            # Introduction section
│   ├── Skills.tsx          # Skills showcase
│   ├── Experience.tsx      # Professional timeline
│   ├── Project.tsx         # Featured projects (Niyyah)
│   ├── Travel.tsx          # Travel & lifestyle
│   ├── Contact.tsx         # Contact & social links
│   └── Chatbot.tsx         # AI assistant widget
├── services/
│   └── geminiService.ts    # Google Gemini API integration
├── public/
│   ├── images/             # Logos, banners, travel photos
│   └── resume.pdf          # My resume
├── profile.json            # Centralized personal data
├── types.ts                # TypeScript interfaces
├── App.tsx                 # Main app component
├── index.html              # HTML entry point
├── index.tsx               # React entry point
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies & scripts
```

---

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** or **yarn**

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Princ3k/atif-khan-portfolio.git
   cd atif-khan-portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   echo "VITE_GEMINI_API_KEY=your_api_key_here" > .env.local
   ```
   
   Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start dev server with HMR

# Production
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally

# Quality
npm run lint         # Run ESLint
npm run type-check   # Type-check TypeScript
```

---

## 🎨 Features

### ✨ Smart Theme Toggle
- Auto-detects system preference (light/dark mode)
- Persists user choice in `localStorage`
- Smooth transitions across all components

### 🤖 AI Chatbot Assistant
- **Powered by**: Google Gemini API
- **Personality**: Authentic representation of my values and voice
- **Context**: Trained on resume, LinkedIn, and personal data
- **Availability**: 24/7 conversational AI

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

### 🌈 Smooth Animations
- Fade-in effects on component load
- Hover states and transitions
- Pulse animations for CTAs
- Parallax scrolling effects

---

## 🔐 Security Best Practices

- ✅ API keys stored in `.env.local` (never committed)
- ✅ `.env.local` added to `.gitignore`
- ✅ No sensitive data in version control
- ✅ HTTPS-ready for production

---

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Commit and Push**
   ```bash
   git add .
   git commit -m "Deploy: Update portfolio"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select `main` branch as source
   - Your site will be live in minutes!

---

## 📊 Performance

- **Lighthouse Scores** (Target)
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 90+
  - SEO: 100

- **Bundle Size**
  - Minified: ~450KB
  - Gzipped: ~114KB

---

## 🤝 Contributing

Found a bug or have a suggestion? I'd love to hear it!

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

---

## 📚 Key Files

| File | Purpose |
|------|---------|
| `profile.json` | Centralized personal data for AI context |
| `vite.config.ts` | Vite build configuration & aliases |
| `tsconfig.json` | TypeScript compiler options |
| `.env.local` | Secure API keys (git-ignored) |

---

## 🎯 Future Enhancements

- [ ] Blog section with articles on tech & travel
- [ ] Project showcase with detailed case studies
- [ ] Newsletter signup integration
- [ ] Analytics dashboard
- [ ] Multiple language support
- [ ] E2E tests with Cypress

---

## 💬 Let's Connect!

- **Email**: [atifkhan308@icloud.com](mailto:atifkhan308@icloud.com)
- **LinkedIn**: [@atif-khan3](https://linkedin.com/in/atif-khan3)
- **GitHub**: [@Princ3k](https://github.com/Princ3k)
- **Instagram**: [@_atifkkhan](https://instagram.com/_atifkkhan)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Google Gemini API for powering the chatbot
- [Tailwind CSS](https://tailwindcss.com) for beautiful styling
- [Font Awesome](https://fontawesome.com) for icons
- All my mentors, colleagues, and community who shaped my journey

---

<div align="center">

**Built with** ❤️ **and** 💻 **| Niyyah × Barakah × Execution**

*"Create waves, not ripples"*

</div>
