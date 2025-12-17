import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, FileSearch, Star } from 'lucide-react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; isFeatured: boolean }> = ({ project, isFeatured }) => {
  return (
    <div className={`glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 flex flex-col group ${isFeatured ? 'border-blue-400/50 dark:border-blue-500/30' : 'border-slate-200 dark:border-white/10'}`}>
      
      {/* Header Gradient */}
      <div className={`h-2 w-full ${isFeatured ? 'bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600' : 'bg-slate-100 dark:bg-white/10 group-hover:bg-blue-400 dark:group-hover:bg-blue-500/50 transition-colors'}`}></div>
      
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-mono text-blue-700 dark:text-cyan-400 tracking-wider uppercase bg-blue-100 dark:bg-cyan-900/20 px-2 py-1 rounded">
              {project.category}
            </span>
            <h3 className={`font-bold mt-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
              {project.title}
            </h3>
          </div>
          {isFeatured && <Star className="text-yellow-500 dark:text-yellow-400 fill-yellow-500 dark:fill-yellow-400 w-6 h-6 animate-pulse" />}
        </div>

        <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6 flex-1 text-sm md:text-base">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-200 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/30 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-white/5">
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
              <Github className="w-4 h-4" /> Code
            </a>
          )}
          {project.biasReport && (
            <a href={project.biasReport} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 transition-colors ml-auto">
              <FileSearch className="w-4 h-4" /> Bias Report
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative z-10 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-blue-200 dark:to-cyan-200">
            Featured Projects
          </span>
        </h2>
        <p className="text-center text-slate-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Highlighting my journey in AI/ML and Data Engineering through practical, production-ready applications.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
                <div key={index} className={index === 0 ? "lg:col-span-2" : ""}>
                    <ProjectCard project={project} isFeatured={true} />
                </div>
            ))}
        </div>

        <h3 className="text-3xl font-bold mb-10 text-center text-slate-800 dark:text-white/90">
          More Innovative Work
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} isFeatured={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;