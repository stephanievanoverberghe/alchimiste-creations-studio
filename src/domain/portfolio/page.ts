export type PortfolioPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  grid: {
    eyebrow: string;
    title: string;
    description: string;
  };
  process: {
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

export type PortfolioProjectPageContent = {
  backLabel: string;
  caseStudyLabel: string;
  objectiveLabel: string;
  problemLabel: string;
  solutionLabel: string;
  resultLabel: string;
  beforeAfterTitle: string;
  nextProjectLabel: string;
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};
