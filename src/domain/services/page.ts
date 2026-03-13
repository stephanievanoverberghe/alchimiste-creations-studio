import type { ServiceSlug } from '@/domain/services/types';

export type ServicesPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    highlights: string[];
  };
  selector: {
    eyebrow: string;
    title: string;
    description: string;
  };
  offers: {
    eyebrow: string;
    title: string;
    description: string;
  };
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    rows: {
      id: string;
      label: string;
      values: Record<ServiceSlug, string>;
    }[];
  };
  details: {
    eyebrow: string;
    title: string;
    description: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
    meta: string;
  };
};
