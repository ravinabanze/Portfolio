import type { IconProps } from './components/icons';
import type * as React from 'react';

export interface Project {
  title: string;
  period: string;
  role: string;
  description: string;
  achievements: string[];
  tools: string[];
}

export interface SkillCategory {
  name:string;
  icon: React.FC<IconProps>;
  keywords: string[];
}

export interface KnowherFeature {
  name: string;
  description: string;
  icon: React.FC<IconProps>;
}

export interface ExperienceItem {
  role: string;
  org: string;
  dates: string;
  highlights: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: React.ReactNode;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}