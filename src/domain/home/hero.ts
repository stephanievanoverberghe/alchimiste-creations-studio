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
};
