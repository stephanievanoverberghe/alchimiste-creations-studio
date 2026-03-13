export type AboutPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
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
      id: string;
      title: string;
      description: string;
    }[];
  };
  values: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  journey: {
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      id: string;
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
  };
};
