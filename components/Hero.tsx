
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 px-6 md:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-32 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 -right-32 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm aspect-square">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>

              {/* Image container */}
              <img 
                src="/images/profile.jpg" 
                alt="Atif Khan" 
                className="relative w-full h-full rounded-2xl object-cover shadow-2xl border-2 border-white dark:border-gray-800"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-5">
            {/* Greeting */}
            <div className="text-lg text-blue-400 font-semibold tracking-wide">
              👋 HEY, I'M
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Atif Khan
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              Full Stack Engineer × Builder × Travel Enthusiast
            </p>

            {/* Main description */}
            <div className="space-y-3 text-slate-300 leading-relaxed text-base md:text-lg">
              <p>
                I'm a <span className="font-semibold text-white">22-year-old Pakistani-Canadian-American</span> from Toronto. I build systems with purpose—whether that's microservices at Criteo, automation at General Motors, or the Niyyah app serving the community and <span className="font-semibold">LOVE TO TRAVEL.</span>
              </p>
              <p>
                My journey: from Starbucks barista → Enterprise CSR → Airport operations → now architecting enterprise systems at companies like Criteo.
              </p>
              <p className="italic text-slate-400">
                I believe in <span className="font-semibold text-slate-300">Niyyah</span> (clear intention), <span className="font-semibold text-slate-300">Barakah</span> (sustainable growth), and quiet, consistent execution. My goal is to create waves not just ripples.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a 
                href="mailto:atifkhan308@icloud.com" 
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg text-sm md:text-base"
              >
                <i className="fas fa-envelope"></i>
                <span>Let's Talk</span>
              </a>
              
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 text-sm md:text-base"
              >
                <i className="fas fa-arrow-down"></i>
                <span>See My Work</span>
              </a>

              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 text-sm md:text-base"
              >
                <i className="fas fa-file-pdf"></i>
                <span>Resume</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex gap-5 pt-4">
              <a href="https://linkedin.com/in/atif-khan3" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Princ3k" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-xl">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/_atifkkhan/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors text-xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
