
import React from 'react';

const Project: React.FC = () => {
  return (
    <section id="projects" className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Banner with Background Image */}
      <div 
        className="relative h-80 md:h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/niyyah-banner.jpg)',
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        
        {/* Banner Content */}
        <div className="relative z-10 text-center px-4 space-y-4">
          <div className="text-6xl md:text-7xl font-light text-yellow-300 drop-shadow-lg">
            🌙 Niyyah
          </div>
          <p className="text-xl md:text-2xl text-gray-100 font-light tracking-wide">
            Renew your intentions, elevate your actions.
          </p>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Featured Project
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Building technology with purpose. A platform that brings intention-setting to the digital age.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  AI-Powered Intentions Tracker
                </h4>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  As founder, I designed and built Niyyah — an AI-powered app that helps users set and track daily intentions. It's built on the belief that tracking intentions is just as important as tracking habits.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h5 className="text-xl font-semibold text-white flex items-center gap-2">
                  <i className="fas fa-sparkles text-yellow-400"></i> Key Features
                </h5>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1 flex-shrink-0"></i>
                    <span><strong>Ask Hikmah</strong> — AI spiritual guide for daily wisdom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1 flex-shrink-0"></i>
                    <span><strong>Daily Intention Tracker</strong> — Track, reflect, and progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1 flex-shrink-0"></i>
                    <span><strong>Map-Based Locator</strong> — Connect with community globally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1 flex-shrink-0"></i>
                    <span><strong>100+ Active Users</strong> — Growing community of builders</span>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3 pt-4 border-t border-slate-700">
                <h5 className="text-xl font-semibold text-white flex items-center gap-2">
                  <i className="fas fa-code text-blue-400"></i> Built With
                </h5>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'Node.js', 'Supabase', 'AWS Lambda', 'AI/ML'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-medium hover:border-blue-400/50 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a 
                href="https://theniyyahapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 mt-6"
              >
                <i className="fas fa-arrow-up-right"></i>
                Visit Niyyah
              </a>
            </div>

            {/* Right Side - Visual Stats */}
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                   { icon: '👥', label: 'Active Users', value: '100+', color: 'from-purple-600 to-pink-600' },
                   { icon: '🚀', label: 'Launch Year', value: '2025', color: 'from-blue-600 to-cyan-600' },
                   { icon: '⚡', label: 'Features', value: '10+', color: 'from-yellow-600 to-orange-600' },
                   { icon: '🌍', label: 'Countries', value: '5+', color: 'from-green-600 to-emerald-600' },
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className={`bg-gradient-to-br ${stat.color} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <p className="text-slate-200 text-sm font-medium">{stat.label}</p>
                    <p className="text-white text-3xl font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Project Highlights */}
              <div className="bg-slate-700/50 border border-slate-600/50 p-6 rounded-xl space-y-4">
                <h5 className="text-white font-semibold flex items-center gap-2">
                  <i className="fas fa-lightbulb text-yellow-400"></i> Why Niyyah?
                </h5>
                <p className="text-slate-300 leading-relaxed">
                  We track everything in life — workouts, calories, steps. But we never track our <strong>intentions</strong>. Niyyah fills that gap, combining ancient Islamic wisdom with modern AI technology.
                </p>
                <div className="pt-2 border-t border-slate-600 space-y-2">
                  <p className="text-slate-400 text-sm flex items-start gap-2">
                    <i className="fas fa-quote-left text-indigo-400 flex-shrink-0"></i>
                    <span className="italic">"Clear intention, better execution, lasting impact."</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8 border-t border-slate-700">
            <p className="text-slate-400 mb-6">Ready to track your intentions?</p>
            <a 
              href="https://theniyyahapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-110 group"
            >
              <span>Explore Niyyah</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
