import type { LucideIcon } from 'lucide-react';

export type ServicesPreviewItem = {
  id: string;
  title: string;
  description: string;
  idealFor: string;
  icon: LucideIcon;
  href: string;
  ctaLabel: string;
};

export type ServicesPreviewContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServicesPreviewItem[];
};
