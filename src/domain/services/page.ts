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
    featuredCard: {
      badge: string;
      title: string;
      description: string;
      priceLabel: string;
      priceValue: string;
      timeline: string;
      detailSlug: ServiceSlug;
      detailLabel: string;
      points: {
        id: string;
        icon: 'layers3' | 'timer' | 'shieldCheck';
        label: string;
        value: string;
      }[];
    };
  };

  problemStrip: {
    items: {
      id: string;
      icon: 'rocket' | 'compass' | 'refreshCcw';
      title: string;
      text: string;
    }[];
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

  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      text: string;
    }[];
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
