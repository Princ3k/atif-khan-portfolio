
import React from 'react';

const skillsData = [
  { title: "Languages", content: "Python, C#, JavaScript, TypeScript, SQL, Bash" },
  { title: "Frameworks", content: "React, Angular, Node.js, .NET Core, Express, React Native" },
  { title: "Cloud & DevOps", content: "AWS, GCP, Terraform, Docker, Kubernetes, Jenkins" },
];

const SkillCard: React.FC<{ title: string; content: string; }> = ({ title, content }) => (
  <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
    <h4 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-blue-600 dark:text-blue-400">{title}</h4>
    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{content}</p>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900 text-center">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-10 text-gray-900 dark:text-white">Skills & Expertise</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
        {skillsData.map(skill => (
          <SkillCard key={skill.title} title={skill.title} content={skill.content} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
