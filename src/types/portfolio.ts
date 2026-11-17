import type { LucideIcon } from 'lucide-react';

export type Activity = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  date: string;
  url: string;
};

export type TechCategory = {
  icon: LucideIcon;
  title: string;
  skills: string[];
  accent: string;
};

export type Project = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  image?: string;
  detail?: ProjectDetail;
  role?: string;
  repo?: string;
  tags: string[];
  slug: string;
};

export type ProjectDetail = {
  overview: string | string[];
  responsibilities: string[];
  implementations: string[];
  techStack: string[];
  lessons?: string;
};

export type ProjectGroup = {
  title: string;
  icon: LucideIcon;
  accent: string;
  projects: Project[];
};

export type WorkingStyle = {
  icon: LucideIcon;
  title: string;
  description: string;
};

