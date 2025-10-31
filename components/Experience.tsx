
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Criteo",
      role: "Full Stack Software Engineer Intern",
      duration: "May 2025 - Present",
      description: "Architecting a full-stack dataset generation platform",
      achievements: [
        { metric: "70%", label: "Throughput Improvement", icon: "fa-rocket" },
        { metric: ".NET 8", label: "Modern Tech Stack", icon: "fa-code" },
        { metric: "AWS", label: "Cloud Infrastructure", icon: "fa-cloud" }
      ],
      details: "Building enterprise-scale systems with microservices architecture. Designed distributed systems improving throughput by 70% and increasing reliability under high load.",
      logo: "/images/criteo.png",
      gradient: "from-blue-500 to-indigo-600",
      position: "current"
    },
    {
      company: "General Motors",
      role: "Software Test Engineer",
      duration: "Jan 2024 - Oct 2024",
      description: "Automated ADAS (Super Cruise) testing",
      achievements: [
        { metric: "200+", label: "Hours Saved/Release", icon: "fa-hourglass-end" },
        { metric: "60%", label: "Manual Testing Reduced", icon: "fa-chart-line" },
        { metric: "Python", label: "Telemetry Pipelines", icon: "fa-database" }
      ],
      details: "Automated regression testing for Advanced Driver Assistance Systems. Reduced manual testing by 60% and saved 200+ engineering hours per release.",
      logo: "/images/gm.png",
      gradient: "from-green-500 to-emerald-600",
      position: "middle"
    },
    {
      company: "Intact Financial Corporation",
      role: "DevSecOps Intern",
      duration: "May 2023 - Jan 2024",
      description: "CI/CD pipelines & security automation",
      achievements: [
        { metric: "26+", label: "CI/CD Pipelines", icon: "fa-code-branch" },
        { metric: "35%", label: "Deployment Reliability", icon: "fa-shield" },
        { metric: "25%", label: "CVE Exposure Reduced", icon: "fa-lock" }
      ],
      details: "Engineered and maintained 26+ CI/CD pipelines using Jenkins and Terraform. Improved deployment reliability by 35% and reduced CVE exposure by 25%.",
      logo: "/images/intact.png",
      gradient: "from-amber-500 to-orange-600",
      position: "past"
    }
  ];

  return (
    <section id="experience" className="relative bg-white dark:bg-gray-900 py-20 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-30 -mr-48"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-30 -ml-48"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            From foundations to enterprise scale — building real impact at every step
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-green-500 to-orange-500 opacity-20"></div>

          {/* Experiences */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.company} className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:ml-1/2'}`}>
                
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 bg-gradient-to-r ${exp.gradient} rounded-full shadow-lg`}></div>
                  <div className={`absolute inset-0 w-4 h-4 bg-gradient-to-r ${exp.gradient} rounded-full animate-pulse opacity-75`}></div>
                </div>

                {/* Card */}
                <div className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700`}>
                  
                  {/* Gradient Header */}
                  <div className={`h-1.5 bg-gradient-to-r ${exp.gradient}`}></div>

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    {/* Company & Logo */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg p-2 flex items-center justify-center overflow-hidden">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain dark:invert-[0.8] dark:brightness-200" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">{exp.duration}</p>
                      </div>
                      {/* Position Badge */}
                      {exp.position === 'current' && (
                        <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full flex items-center gap-1">
                          <i className="fas fa-circle text-xs animate-pulse"></i>
                          Current
                        </div>
                      )}
                    </div>

                    {/* Role & Description */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.role}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {exp.details}
                      </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200 dark:border-gray-700">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-1`}>
                            {achievement.metric}
                          </div>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {achievement.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mt-6">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-3">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.role === "Full Stack Software Engineer Intern" && (
                          <>
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full">.NET 8</span>
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full">Angular</span>
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full">AWS</span>
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full">Microservices</span>
                          </>
                        )}
                        {exp.role === "Software Test Engineer" && (
                          <>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">Python</span>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">Automation</span>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">Testing</span>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">ADAS</span>
                          </>
                        )}
                        {exp.role === "DevSecOps Intern" && (
                          <>
                            <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium rounded-full">Jenkins</span>
                            <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium rounded-full">Terraform</span>
                            <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium rounded-full">CI/CD</span>
                            <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium rounded-full">Security</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn more</span>
                      <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Statement */}
        <div className="mt-20 md:mt-28 p-8 md:p-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
          <div className="flex gap-4 items-start">
            <i className="fas fa-chart-line text-2xl text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"></i>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                From Foundations to Enterprise Scale
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Each role taught me something critical: <span className="font-semibold">customer service at Starbucks</span> taught empathy, 
                <span className="font-semibold"> enterprise at Intact</span> taught systems thinking, 
                <span className="font-semibold"> autonomy at GM</span> taught precision, and 
                <span className="font-semibold"> enterprise architecture at Criteo</span> taught scale. 
                I'm not just collecting roles—I'm building a foundation for impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
