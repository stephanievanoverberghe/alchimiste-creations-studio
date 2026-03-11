export type HeroFloatingNote = {
  title: string;
  description: string;
};

export type HeroMockupImage = {
  src: string;
  alt: string;
};

export type HeroMockupContent = {
  browserLabel: string;
  desktop: HeroMockupImage;
  tablet: HeroMockupImage;
  mobile: HeroMockupImage;
  floatingNotes: {
    desktop: [HeroFloatingNote, HeroFloatingNote];
    mobile: [HeroFloatingNote, HeroFloatingNote];
  };
};

export type HeroContent = {
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
  mockup: HeroMockupContent;
};
