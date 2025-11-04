
import React from 'react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      title: 'Email',
      value: 'atifkhan308@icloud.com',
      href: 'mailto:atifkhan308@icloud.com',
      icon: 'fas fa-envelope',
      color: 'from-red-500 to-pink-500',
      description: 'Send me an email anytime',
      borderColor: 'border-red-500/30'
    },
    {
      title: 'LinkedIn',
      value: 'atif-khan3',
      href: 'https://linkedin.com/in/atif-khan3',
      icon: 'fab fa-linkedin',
      color: 'from-blue-500 to-blue-600',
      description: 'Connect professionally',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'GitHub',
      value: 'Princ3k',
      href: 'https://github.com/Princ3k',
      icon: 'fab fa-github',
      color: 'from-gray-600 to-gray-700',
      description: 'Check out my projects',
      borderColor: 'border-gray-600/30'
    },
    {
      title: 'Instagram',
      value: '@_atifkkhan',
      href: 'https://www.instagram.com/_atifkkhan/',
      icon: 'fab fa-instagram',
      color: 'from-pink-500 via-red-500 to-yellow-500',
      description: 'Follow my journey',
      borderColor: 'border-pink-500/30'
    },
  ];

  return (
    <section id="contact" className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 text-center space-y-4 sm:space-y-6 max-w-5xl mx-auto">
        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h3>
          <p className="text-base sm:text-xl text-slate-300">
            I'm always interested in hearing from builders, founders, and curious minds.
          </p>
        </div>
        <p className="text-sm sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Whether you want to collaborate on a project, discuss ideas, talk about faith and tech, or just say hi — feel free to reach out! I'm most responsive on email and LinkedIn.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-xl border ${method.borderColor} bg-slate-700/50 p-4 sm:p-6 hover:bg-slate-700/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10 space-y-2 sm:space-y-3">
                  {/* Icon + Title */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-white">{method.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400">{method.description}</p>
                    </div>
                    <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-white text-sm sm:text-lg shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 flex-shrink-0`}>
                      <i className={`${method.icon} text-white text-xs sm:text-base`}></i>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center gap-2 text-slate-300 group-hover:text-white transition-colors duration-300">
                    <span className="text-xs sm:text-sm font-mono break-all">{method.value}</span>
                    <i className="fas fa-arrow-right opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 text-xs flex-shrink-0"></i>
                  </div>

                  {/* Bottom accent */}
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${method.color} transition-all duration-300 rounded-full`}></div>
                </div>
              </a>
            ))}
          </div>

          {/* Alternative Contact Method */}
          <div className="bg-slate-700/50 border border-indigo-500/30 rounded-xl p-6 sm:p-8 text-center space-y-3 sm:space-y-4 hover:bg-slate-700/80 transition-all duration-300">
            <h4 className="text-lg sm:text-2xl font-bold text-white flex items-center justify-center gap-2">
              <i className="fas fa-comments text-indigo-400 text-lg sm:text-2xl"></i>
              Quick Chat
            </h4>
            <p className="text-slate-300 text-sm sm:text-base">
              Prefer a quick conversation? Use the AI chatbot below right — it knows all about me!
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Available 24/7 to answer questions about my experience, projects, and ideas.
            </p>
          </div>
        </div>
      </div>

      {/* Social Links Summary */}
      <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 sm:space-y-8">
            <h4 className="text-2xl sm:text-3xl font-bold text-white">Follow My Journey</h4>
            
            {/* Icon Row */}
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg hover:shadow-2xl hover:scale-125 transition-all duration-300 group`}
                  aria-label={method.title}
                >
                  <i className={`${method.icon} text-white text-lg sm:text-2xl group-hover:rotate-12 transition-transform`}></i>
                </a>
              ))}
            </div>

            {/* CTA Text */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-slate-400 text-sm sm:text-base">
                Let's build something meaningful together.
              </p>
              <div className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm sm:text-base">
                <span>Looking forward to connecting</span>
                <i className="fas fa-handshake text-sm sm:text-base"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 text-center border-t border-slate-700/50">
        <p className="text-slate-500 text-xs sm:text-sm">
          I usually respond within 24 hours. Let's start a conversation! 🚀
        </p>
      </div>
    </section>
  );
};

export default Contact;
