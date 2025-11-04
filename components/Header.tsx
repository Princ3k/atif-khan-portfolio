
import React, { useState } from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-3 sm:py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          AK.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm lg:text-base">
            Skills
          </a>
          <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm lg:text-base">
            Experience
          </a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm lg:text-base">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm lg:text-base">
            Contact
          </a>
        </div>

        {/* Right Side: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="px-2.5 sm:px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? 'Light' : 'Dark'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 active:scale-95"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'} text-base sm:text-lg`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 space-y-2 shadow-lg">
          <a 
            href="#skills" 
            onClick={handleNavClick}
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Skills
          </a>
          <a 
            href="#experience" 
            onClick={handleNavClick}
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            onClick={handleNavClick}
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={handleNavClick}
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
