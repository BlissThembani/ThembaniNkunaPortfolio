import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    alert(`Copied ${email} to clipboard!`);
  };

  return (
    <section id="contact" className="py-24 relative z-10 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="glass-card p-12 rounded-3xl border border-blue-200 dark:border-blue-500/20 shadow-xl dark:shadow-[0_0_50px_rgba(37,99,235,0.1)]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Let's Build the Future
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            I'm currently open to opportunities in Data Engineering and AI/ML. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white font-bold text-lg hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 glass-card rounded-full text-slate-800 dark:text-white font-bold text-lg hover:bg-white/50 dark:hover:bg-white/10 transition-all hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-gray-400 uppercase tracking-widest">Alternative Contacts</p>
            <div className="flex flex-col md:flex-row gap-4">
               <button 
                  onClick={() => handleCopyEmail(PERSONAL_INFO.email)}
                  className="flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors text-sm"
               >
                 {PERSONAL_INFO.email} <Copy className="w-3 h-3" />
               </button>
               <button 
                  onClick={() => handleCopyEmail(PERSONAL_INFO.emailAlt)}
                  className="flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors text-sm"
               >
                 {PERSONAL_INFO.emailAlt} <Copy className="w-3 h-3" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;