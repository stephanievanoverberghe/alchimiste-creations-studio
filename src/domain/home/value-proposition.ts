import type { LucideIcon } from 'lucide-react';

export type ValuePropositionItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ValuePropositionContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ValuePropositionItem[];
};
