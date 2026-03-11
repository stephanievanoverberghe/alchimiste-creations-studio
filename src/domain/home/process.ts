export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type ProcessContent = {
  eyebrow: string;
  title: string;
  description: string;
  steps: ProcessStep[];
};
