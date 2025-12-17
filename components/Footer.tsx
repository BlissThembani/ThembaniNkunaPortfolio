import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-8 border-t border-slate-200 dark:border-white/5 bg-white/50 dark:bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-gray-500">
           <p>Built with React + Tailwind + Cosmic Energy 🚀</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;