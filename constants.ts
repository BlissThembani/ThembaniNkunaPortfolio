import { Project, SkillCategory, Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: "Thembani Nkuna",
  title: "Data Engineer | AI/ML Specialist",
  location: "Johannesburg, South Africa",
  email: "nkunate@yahoo.com",
  emailAlt: "thembanieulendankuna@gmail.com",
  linkedin: "https://www.linkedin.com/in/thembani-nkuna-1aa58523b",
  github: "https://github.com/BlissThembani",
  // Updated to direct image source (GitHub Avatar) as the provided Instasize link is a webpage, not an image file.
  profileImage: "https://github.com/BlissThembani.png",
};

export const ABOUT_ME = "I'm a passionate Data Engineer with a strong foundation in software development, specializing in building end-to-end AI/ML solutions. I combine data engineering expertise with practical machine learning implementations to create impactful, intelligent applications.";

export const CAREER_OBJECTIVE = "Currently seeking Data Engineer and AI/ML Engineering roles where I can leverage my skills in Python, machine learning, and cloud technologies to solve complex problems and drive innovation.";

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "Reslocate",
    type: "Internship"
  },
  {
    role: "Salesforce Developer Learnership",
    company: "Reverside",
    type: "Work-Integrated Learning"
  }
];

export const EDUCATIONS: Education[] = [
  {
    title: "AI Bootcamp",
    institution: "Coursera"
  },
  {
    title: "Self-Driven ML Projects",
    institution: "Independent Research & Development"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "FraudGuard AI",
    category: "End-to-End AI Solution",
    description: "Intelligent multi-modal security dashboard for banking fraud prevention using Gemini AI. Features voice verification, receipt scanning, and real-time transaction analysis. Built on serverless architecture combining Gemini AI (Vision, Text/Reasoning, Live), Firebase, and Google Maps. Solves false declines and receipt fraud with context-aware security.",
    techStack: ["Gemini AI", "Firebase", "React", "Next.js", "Google Maps API"],
    liveDemo: "https://fraudguard-ochre.vercel.app/",
    github: "https://github.com/BlissThembani/fraudguard",
    biasReport: "https://colab.research.google.com/drive/1ov4C_uOhK9CCbck0EtP4CFmD1XApknY7",
    featured: true
  },
  {
    title: "ResuMate (AI Resume Builder)",
    category: "AI Resume Builder",
    description: "AI-powered resume builder with ATS optimization. Features smart bullet points generation, action verb suggestions, impact quantification, and keyword optimization powered by Gemini AI. Includes multiple professional templates.",
    techStack: ["React", "TypeScript", "Gemini AI", "Tailwind CSS", "Vite", "React-PDF"],
    liveDemo: "https://resumate-eight-tan.vercel.app/",
    github: "https://github.com/BlissThembani/ResuMate",
    featured: true
  },
  {
    title: "SentraMind",
    category: "Sentiment Analysis Dashboard",
    description: "Real-time sentiment analysis platform with interactive visualizations. Features multi-class classification, confidence scoring, emotion mapping, trend analysis, and batch processing using advanced NLP.",
    techStack: ["React", "TypeScript", "Gemini AI", "Recharts", "NLP", "Vite"],
    liveDemo: "https://sentiment-analysis-dashboard-pi.vercel.app/",
    github: "https://github.com/BlissThembani/sentramindnewupdate",
    featured: true
  },
  {
    title: "InfiniteAI Chatbot",
    category: "Conversational AI",
    description: "Intelligent chatbot built with Botpress for automated customer interactions and natural language conversations.",
    techStack: ["Botpress", "NLP", "Conversational AI"],
    liveDemo: "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/15/09/20251015090512-3NKILXXF.json",
    featured: false
  },
  {
    title: "SizaQueue",
    category: "UX/UI Prototype",
    description: "Mobile app prototype for queue management system designed in Figma with modern UI/UX principles.",
    techStack: ["Figma", "UI/UX Design", "Prototyping"],
    liveDemo: "https://www.figma.com/design/aMLG3C9fsGLU66kk00NYll/SizaQueue-2?node-id=0-1&p=f",
    featured: false
  },
  {
    title: "EduGen",
    category: "Educational Platform",
    description: "Educational platform interface designed with focus on user experience and accessibility.",
    techStack: ["Figma", "Web Design", "UI/UX"],
    liveDemo: "https://strata-chant-89267935.figma.site/",
    featured: false
  },
  {
    title: "Bias Audit Report",
    category: "ML Ethics & Fairness",
    description: "Comprehensive bias detection and fairness analysis for machine learning models with demographic parity metrics and equalized odds analysis.",
    techStack: ["Python", "scikit-learn", "Jupyter", "Data Analysis"],
    liveDemo: "https://colab.research.google.com/drive/1ov4C_uOhK9CCbck0EtP4CFmD1XApknY7",
    featured: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java"],
    icon: "Code"
  },
  {
    title: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "NLP", "Computer Vision", "Gemini AI"],
    icon: "Brain"
  },
  {
    title: "Data Engineering",
    skills: ["Pandas", "NumPy", "Apache Spark", "ETL Pipelines", "Data Warehousing"],
    icon: "Database"
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Firebase", "Docker", "Git", "CI/CD", "Vercel"],
    icon: "Cloud"
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Streamlit", "Express.js"],
    icon: "Layout"
  },
  {
    title: "Other Tools",
    skills: ["Figma", "Botpress", "Salesforce", "Google Maps API", "Vite"],
    icon: "Wrench"
  }
];