
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import Travel from './components/Travel';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);
    
    console.log('Initializing theme:', shouldBeDark ? 'dark' : 'light');
    setIsDarkMode(shouldBeDark);
  }, []);

  // Apply theme changes
  useEffect(() => {
    console.log('Applying theme:', isDarkMode ? 'dark' : 'light');
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#111827'; // dark bg
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff'; // light bg
    }
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    console.log('Toggle clicked! Switching from', isDarkMode ? 'dark' : 'light', 'to', !isDarkMode ? 'dark' : 'light');
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="overflow-x-hidden">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="w-full">
        <Hero />
        <Skills />
        <Experience />
        <Project />
        <Travel />
        <Contact />
      </main>
      <Chatbot />
    </div>
  );
};

export default App;
