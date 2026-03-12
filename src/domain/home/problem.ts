export type ProblemItem = {
  id: string;
  title: string;
  consequence: string;
};

export type ProblemContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ProblemItem[];
};
