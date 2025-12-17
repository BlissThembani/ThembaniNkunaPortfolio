import React from 'react';
import { ABOUT_ME, CAREER_OBJECTIVE, EXPERIENCES, EDUCATIONS } from '../constants';
import { Briefcase, GraduationCap, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-blue-200 dark:to-cyan-200">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Bio & Objective */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-blue-400/50 dark:hover:border-blue-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-200 dark:group-hover:bg-blue-600/20 transition-all"></div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400"><Target className="w-5 h-5" /></span>
                Who I Am
              </h3>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg">
                {ABOUT_ME}
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-400/50 dark:hover:border-cyan-500/30 transition-all duration-500">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-100 dark:bg-cyan-600/10 rounded-full blur-2xl group-hover:bg-cyan-200 dark:group-hover:bg-cyan-600/20 transition-all"></div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-cyan-100 dark:bg-cyan-500/20 rounded-lg text-cyan-600 dark:text-cyan-400"><Target className="w-5 h-5" /></span>
                Career Objective
              </h3>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg">
                {CAREER_OBJECTIVE}
              </p>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                <span className="p-2 bg-purple-100 dark:bg-purple-500/20 rounded-lg text-purple-600 dark:text-purple-400"><Briefcase className="w-5 h-5" /></span>
                Experience
              </h3>
              <div className="space-y-8 border-l-2 border-slate-200 dark:border-white/10 pl-8 ml-3">
                {EXPERIENCES.map((exp, index) => (
                  <div key={index} className="relative">
                    <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-[#0B0D17] bg-blue-500"></span>
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-white">{exp.role}</h4>
                    <p className="text-blue-600 dark:text-cyan-400 font-medium">{exp.company}</p>
                    <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">{exp.type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                <span className="p-2 bg-green-100 dark:bg-green-500/20 rounded-lg text-green-600 dark:text-green-400"><GraduationCap className="w-5 h-5" /></span>
                Education
              </h3>
              <div className="space-y-8 border-l-2 border-slate-200 dark:border-white/10 pl-8 ml-3">
                {EDUCATIONS.map((edu, index) => (
                  <div key={index} className="relative">
                     <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-[#0B0D17] bg-green-500"></span>
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-white">{edu.title}</h4>
                    <p className="text-blue-600 dark:text-cyan-400 font-medium">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;