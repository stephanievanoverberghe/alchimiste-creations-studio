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
}
