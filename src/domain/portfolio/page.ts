export type PortfolioPageContent = {
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
  featuredProject: {
    eyebrow: string;
    title: string;
    description: string;
    contextLabel: string;
    objectiveLabel: string;
    problemLabel: string;
    solutionLabel: string;
    resultLabel: string;
    caseStudyLabel: string;
    caseStudyDescription: string;
  };
  projectsGrid: {
    eyebrow: string;
    title: string;
    description: string;
  };
  approach: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      id: string;
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

export type PortfolioProjectPageContent = {
  backLabel: string;
  caseStudyLabel: string;
  liveSiteLabel: string;
  contactLabel: string;
  transformationLabel: string;
  projectOverviewLabel: string;
  contextLabel: string;
  objectiveLabel: string;
  problemLabel: string;
  solutionLabel: string;
  resultLabel: string;
  beforeAfterTitle: string;
  beforeAfterHeadingTitle: string;
  beforeAfterHeadingDescription: string;
  beforeLabel: string;
  afterLabel: string;
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    desktopLabel: string;
    mobileLabel: string;
  };
  nextProjectLabel: string;
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};
