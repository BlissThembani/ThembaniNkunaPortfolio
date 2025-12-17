import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLDivElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center">
        
        {/* Profile Image with Glowing Effect */}
        <div className="relative mb-8 group animate-float">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-white/10 ring-4 ring-blue-500/20 bg-gray-100 dark:bg-gray-900 shadow-xl">
            <img 
              src={PERSONAL_INFO.profileImage} 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'text-4xl', 'font-bold', 'text-slate-800', 'dark:text-white');
                target.parentElement!.innerText = "TN";
              }}
            />
          </div>
        </div>

        {/* Titles */}
        <div className="space-y-4 max-w-4xl">
          <h2 className="text-blue-600 dark:text-cyan-400 font-mono text-lg md:text-xl tracking-widest uppercase mb-2 font-bold">
            Hello, I am
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-slate-800 dark:from-white dark:via-blue-100 dark:to-slate-300">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-blue-200/80 mt-4">
            {PERSONAL_INFO.title}
          </h3>
          <p className="text-lg md:text-xl text-slate-500 dark:text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            {PERSONAL_INFO.location}
          </p>
        </div>

        {/* Social Actions */}
        <div className="flex items-center gap-6 mt-10">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-full hover:bg-white/50 dark:hover:bg-white/10 hover:scale-110 text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-full hover:bg-white/50 dark:hover:bg-white/10 hover:scale-110 text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-3 glass-card rounded-full hover:bg-white/50 dark:hover:bg-white/10 hover:scale-110 text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="mt-12 flex gap-4">
           <a 
             href="#projects" 
             onClick={(e) => scrollToSection(e, '#projects')}
             className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:-translate-y-1 cursor-pointer"
           >
             View Work
           </a>
           <a 
             href="#about" 
             onClick={(e) => scrollToSection(e, '#about')}
             className="px-8 py-3 glass-card text-slate-800 dark:text-white rounded-full font-semibold hover:bg-white/50 dark:hover:bg-white/10 transition-all hover:-translate-y-1 cursor-pointer"
           >
             About Me
           </a>
        </div>

        {/* Scroll Indicator */}
        <div 
          onClick={(e) => scrollToSection(e, '#about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 cursor-pointer hover:opacity-100 transition-opacity"
        >
          <ChevronDown className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;