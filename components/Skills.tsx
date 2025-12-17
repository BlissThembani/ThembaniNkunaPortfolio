import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Code, Brain, Database, Cloud, Layout, Wrench } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Code": <Code className="w-6 h-6" />,
  "Brain": <Brain className="w-6 h-6" />,
  "Database": <Database className="w-6 h-6" />,
  "Cloud": <Cloud className="w-6 h-6" />,
  "Layout": <Layout className="w-6 h-6" />,
  "Wrench": <Wrench className="w-6 h-6" />,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative z-10 bg-slate-100/50 dark:bg-black/20 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-blue-200 dark:to-cyan-200">
            Technical Arsenal
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl hover:bg-white/80 dark:hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                  {iconMap[category.icon]}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-200 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 dark:hover:border-cyan-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;