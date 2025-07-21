export interface Project {
  title: string;
  role: string;
  description: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string[];
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
