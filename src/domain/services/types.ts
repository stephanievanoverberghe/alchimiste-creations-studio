import type { LucideIcon } from 'lucide-react';

export type ServiceSlug = 'landing-page' | 'site-vitrine' | 'refonte-site';

export interface ServiceOption {
  name: string;
  price: string;
}

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  description: string;
  target: string[];
  objectives: string[];
  includes: string[];
  possibleContent?: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  options?: ServiceOption[];

  // Ajouts non cassants
  highlightLabel?: string;
  featured?: boolean;
  order?: number;
}

export type ServicePreviewSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ServicePreviewOverrides = {
  idealFor: string;
  ctaLabel: string;
  icon: LucideIcon;
  highlightLabel?: string;
};

export type ServicePreviewItem = {
  id: ServiceSlug;
  title: string;
  description: string;
  idealFor: string;
  timeline: string;
  startingPrice: string;
  icon: LucideIcon;
  href: string;
  ctaLabel: string;
  highlightLabel?: string;
};

export type ServicesPreviewContent = ServicePreviewSectionContent & {
  items: ServicePreviewItem[];
};
