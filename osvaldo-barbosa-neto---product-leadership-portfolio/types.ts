export type Language = 'pt' | 'en';

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  context: string;
  complexity: string;
  role: string;
  decisions: string[];
  result: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: string; // e.g., "Expert", "Avançado", "Advanced"
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export interface ContentData {
  hero: {
    headline: string;
    subheadline: string;
    context: string;
    cards: {
      title: string;
      description: string;
    }[];
    cta: string;
    stats: {
      label: string;
      value: string;
    }[];
  };
  about: {
    label: string;
    headline: string;
    description: string[];
    quote: string;
  };
  experience: {
    title: string;
    items: TimelineItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: CaseStudy[];
  };
  skills: {
    title: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  education: {
    sectionTitle: string;
    labels: {
      certifications: string;
      academic: string;
    };
    academic: EducationItem[];
    certifications: EducationItem[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    email: string;
    linkedin: string;
    linkedinLabel: string;
  };
}