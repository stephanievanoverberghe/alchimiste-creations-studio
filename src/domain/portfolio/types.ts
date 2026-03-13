export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  objective: string;
  problem: string;
  solution: string;
  context: string;
  result: string;
  beforeLabel: string;
  afterLabel: string;
  ctaLabel: string;
  image: {
    src: string;
    alt: string;
  };
};

export type PortfolioPreviewProjectItem = PortfolioProject & {
  type: 'project';
  href: string;
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
