export type ContactPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
  };
  form: {
    title: string;
    description: string;
    fields: {
      nameLabel: string;
      emailLabel: string;
      companyLabel: string;
      serviceLabel: string;
      budgetLabel: string;
      messageLabel: string;
    };
    placeholders: {
      name: string;
      email: string;
      company: string;
      service: string;
      budget: string;
      message: string;
    };
    submitLabel: string;
    helper: string;
  };
  sidebar: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
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
};
