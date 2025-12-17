import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle function passed to Navbar
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // The 'dark' class enables Tailwind's dark mode styles for children
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen relative font-sans selection:bg-cyan-500/30`}>
      {/* 
        Main Page Background Wrapper 
        Dark Mode: #0B0D17 (Space)
        Light Mode: #F0F9FF (Light Sky)
      */}
      <div className="fixed inset-0 transition-colors duration-500 bg-slate-50 dark:bg-[#0B0D17] -z-20"></div>

      <StarBackground isDarkMode={isDarkMode} />
      
      <div className="relative z-10 flex flex-col text-slate-900 dark:text-slate-200 transition-colors duration-300">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;