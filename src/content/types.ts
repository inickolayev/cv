export interface NavCopy {
  approach: string;
  impact: string;
  experience: string;
  systems: string;
  contact: string;
  downloadCv: string;
  switchToOther: string;
  toggleTheme: string;
  themeLight: string;
  themeDark: string;
}

export interface HeroCopy {
  version: string;
  status: string;
  name: string;
  role: string;
  location: string;
  tagline: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  scrollHint: string;
}

export interface ApproachItem {
  index: string;
  title: string;
  body: string;
}

export interface ApproachCopy {
  eyebrow: string;
  heading: string;
  lead: string;
  items: ApproachItem[];
}

export interface ImpactMetric {
  value: string;
  unit?: string;
  label: string;
  hint?: string;
}

export interface ImpactCopy {
  eyebrow: string;
  heading: string;
  lead: string;
  metrics: ImpactMetric[];
}

export interface ExperienceRole {
  company: string;
  role: string;
  dates: string;
  context: string;
  bullets: string[];
}

export interface ExperienceCopy {
  eyebrow: string;
  heading: string;
  lead: string;
  roles: ExperienceRole[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  body: string;
}

export interface HowIWorkCopy {
  eyebrow: string;
  heading: string;
  lead: string;
  principles: PrincipleItem[];
}

export interface SystemCard {
  name: string;
  tags: string[];
  description: string;
  stats: string[];
}

export interface SystemsCopy {
  eyebrow: string;
  heading: string;
  lead: string;
  systems: SystemCard[];
}

export interface ContactCopy {
  eyebrow: string;
  heading: string;
  lead: string;
  emailLabel: string;
  linkedinLabel: string;
  cvLabel: string;
}

export interface FooterCopy {
  copy: string;
  hint: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: NavCopy;
  hero: HeroCopy;
  approach: ApproachCopy;
  impact: ImpactCopy;
  experience: ExperienceCopy;
  howIWork: HowIWorkCopy;
  systems: SystemsCopy;
  contact: ContactCopy;
  footer: FooterCopy;
}
