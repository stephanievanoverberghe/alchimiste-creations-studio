export type AboutVisionPointId = 'clarity' | 'perception' | 'utility';
export type AboutValueId = 'coherence' | 'clarity' | 'quality' | 'simplicity';
export type AboutJourneyStepId = 'observe' | 'design' | 'build';

export type AboutPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
    aside: {
      eyebrow: string;
      title: string;
      description: string;
      items: {
        id: string;
        label: string;
        value: string;
      }[];
    };
  };
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  vision: {
    eyebrow: string;
    title: string;
    description: string;
    points: {
      id: AboutVisionPointId;
      title: string;
      description: string;
    }[];
  };
  values: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      id: AboutValueId;
      title: string;
      description: string;
    }[];
  };
  journey: {
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      id: AboutJourneyStepId;
      title: string;
      description: string;
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
