export interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveDemo?: string;
  github?: string;
  biasReport?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
}

export interface Education {
  title: string;
  institution: string;
}
