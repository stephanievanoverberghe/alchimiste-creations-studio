export type PortfolioPreviewProjectItem = {
  id: string;
  type: 'project';
  title: string;
  category: string;
  description: string;
  context: string;
  result: string;
  href: string;
  ctaLabel: string;
  image: {
    src: string;
    alt: string;
  };
};

export type PortfolioPreviewCtaItem = {
  id: string;
  type: 'cta';
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export type PortfolioPreviewItem = PortfolioPreviewProjectItem | PortfolioPreviewCtaItem;

export type PortfolioPreviewContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: PortfolioPreviewItem[];
};
