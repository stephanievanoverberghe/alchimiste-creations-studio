import type { LucideIcon } from 'lucide-react';

export type ServicesPreviewItem = {
  id: string;
  title: string;
  description: string;
  idealFor: string;
  timeline: string;
  startingPrice: string;
  icon: LucideIcon;
  href: string;
  ctaLabel: string;
  highlightLabel?: string;
};

export type ServicesPreviewContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServicesPreviewItem[];
};
