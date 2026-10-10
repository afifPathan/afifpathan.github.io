export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  period: string;
  category: 'Mobile' | 'Web & Cloud' | 'Systems & AI' | 'SDK & Architecture';
  featured: boolean;
  problem: string;
  architecture: string;
  contributions: string[];
  technologies: string[];
  metrics?: string;
  links: {
    github?: string;
    live?: string;
    playStore?: string;
    appStore?: string;
    package?: string;
  };
  architectureLayers?: {
    presentation: string;
    domain: string;
    data: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  year: string;
  location: string;
  partner?: string;
  responsibilities: string[];
  technologies: string[];
  links?: {
    playStore?: string;
    appStore?: string;
    package?: string;
    repo?: string;
    live?: string;
  };
  highlight?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Primary Expertise", "Production Grade", "System Core"
    context: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
}
