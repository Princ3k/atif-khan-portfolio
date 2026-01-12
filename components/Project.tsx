
import React from 'react';
import profileData from '../profile.json';
import { Capybara } from './Capybara';

const Project: React.FC = () => {
  const { featuredProject, secondaryProjects } = profileData;

  return (
    <section id="projects" className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Featured Project - Impact OS */}
      <div className="relative">
        {/* Hero Banner with Clean Background */}
        <div
          className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden"
        >
          {/* Banner Content */}
          <div className="relative z-10 text-center px-4 space-y-4 sm:space-y-6">
            {/* Capybara Mascot */}
            <div className="flex justify-center">
              <Capybara mood="proud" size={140} />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900">
                Impact OS
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium">
                {featuredProject.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
            {/* Header */}
            <div className="text-center space-y-3 sm:space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Featured Project
              </h3>
              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
                {featuredProject.description}
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                    {featuredProject.name}
                  </h4>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                    As {featuredProject.role.toLowerCase()}, I built Impact OS — a work tracking tool that helps professionals document their daily contributions and generate AI-powered impact reports.
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-2 sm:space-y-3">
                  <h5 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                    <i className="fas fa-sparkles text-yellow-400"></i> Key Features
                  </h5>
                  <ul className="space-y-1.5 sm:space-y-2 text-slate-300 text-sm sm:text-base">
                    {featuredProject.keyFeatures.map((feature, idx) => {
                      const [title, description] = feature.split(' - ');
                      return (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <i className="fas fa-check text-green-400 mt-1 flex-shrink-0 text-xs sm:text-sm"></i>
                          <span><strong>{title}</strong> — {description}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-slate-700">
                  <h5 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                    <i className="fas fa-code text-blue-400"></i> Built With
                  </h5>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 text-blue-300 rounded-full text-xs sm:text-sm font-medium hover:border-blue-400/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={featuredProject.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-sm sm:text-base rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 mt-4 sm:mt-6"
                >
                  <i className="fas fa-arrow-up-right"></i>
                  Visit Impact OS
                </a>
              </div>

              {/* Right Side - Visual Stats */}
              <div className="space-y-4 sm:space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {[
                     { icon: '🚀', label: 'Launch Year', value: featuredProject.stats.launchYear, color: 'from-blue-600 to-cyan-600' },
                     { icon: '⚡', label: 'Features', value: featuredProject.stats.features, color: 'from-yellow-600 to-orange-600' },
                     { icon: '🛠️', label: 'Tech Stack', value: featuredProject.stats.techStack, color: 'from-purple-600 to-pink-600' },
                     { icon: '🌐', label: 'Status', value: 'Live', color: 'from-green-600 to-emerald-600' },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className={`bg-gradient-to-br ${stat.color} p-3 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
                    >
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
                      <p className="text-slate-200 text-xs sm:text-sm font-medium">{stat.label}</p>
                      <p className="text-white text-xl sm:text-3xl font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Project Highlights */}
                <div className="bg-slate-700/50 border border-slate-600/50 p-4 sm:p-6 rounded-xl space-y-3 sm:space-y-4">
                  <h5 className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
                    <i className="fas fa-lightbulb text-yellow-400 text-sm sm:text-base"></i> Why Impact OS?
                  </h5>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    We spend hours doing great work, but when it's time to share updates with managers, we struggle to remember what we did. <strong>Impact OS</strong> solves this by making it effortless to log daily work and generate professional reports instantly.
                  </p>
                  <div className="pt-2 sm:pt-3 border-t border-slate-600 space-y-2">
                    <p className="text-slate-400 text-xs sm:text-sm flex items-start gap-2">
                      <i className="fas fa-quote-left text-indigo-400 flex-shrink-0 text-xs sm:text-sm"></i>
                      <span className="italic">"Track daily. Report weekly. Show impact effortlessly."</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center pt-6 sm:pt-8 border-t border-slate-700">
              <p className="text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">Ready to showcase your impact?</p>
              <a
                href={featuredProject.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white font-bold text-base sm:text-lg rounded-full hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-110 group"
              >
                <span>Explore Impact OS</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Projects Section */}
      {secondaryProjects && secondaryProjects.length > 0 && (
        <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 border-t border-slate-700/50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent">
              More Projects
            </h3>

            <div className="grid md:grid-cols-1 gap-6 sm:gap-8">
              {secondaryProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50"
                >
                  <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                    {/* Left - Project Info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                          🌙 {project.name}
                        </h4>
                        <p className="text-slate-400 text-sm sm:text-base mb-3">
                          {project.role}
                        </p>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-full text-xs sm:text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium text-sm rounded-lg transition-all duration-300"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Visit Project
                      </a>
                    </div>

                    {/* Right - Stats */}
                    {project.stats && (
                      <div className="md:w-64 grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-3">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div
                            key={key}
                            className="bg-slate-700/30 border border-slate-600/30 p-3 sm:p-4 rounded-lg text-center"
                          >
                            <p className="text-slate-400 text-xs font-medium capitalize mb-1">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </p>
                            <p className="text-white text-lg sm:text-xl font-bold">{value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
