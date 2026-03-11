export type HeroMockupImage = {
  src: string;
  alt: string;
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
  mockup: {
    browserLabel: string;
    desktop: HeroMockupImage;
    mobile: HeroMockupImage;
  };
};
