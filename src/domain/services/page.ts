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
    startingFromLabel: string;
    idealForLabel: string;
    expectedResultLabel: string;
    expectedResultDescription: string;
    detailsLabel: string;
    detailsDescription: string;
    fallbackResult: string;
    defaultOfferBadge: string;
    featuredOfferBadge: string;
  };

  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    defaultOfferBadge: string;
    startingFromLabel: string;
    timelineLabel: string;
    formatRowId: string;
    timelineRowId: string;
    priceRowId: string;
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
    defaultOfferBadge: string;
    summaryTitle: string;
    investmentLabel: string;
    timelineLabel: string;
    idealForLabel: string;
    sections: {
      objectives: {
        label: string;
        eyebrow: string;
        title: string;
      };
      includes: {
        label: string;
        eyebrow: string;
        title: string;
      };
      deliverables: {
        label: string;
        eyebrow: string;
        title: string;
      };
      possibleContent: {
        label: string;
        eyebrow: string;
        title: string;
      };
      options: {
        label: string;
        eyebrow: string;
        title: string;
      };
    };
    fallbackPossibleContent: string;
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
