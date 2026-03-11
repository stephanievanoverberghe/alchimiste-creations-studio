import { Gauge, Palette, Sparkles } from 'lucide-react';

import type { ValuePropositionContent } from '@/domain/home/value-proposition';

export const valuePropositionContent: ValuePropositionContent = {
  eyebrow: 'Méthode Alchimiste',
  title: 'Un site conçu comme un levier de crédibilité et de développement.',
  description:
    'Chaque projet combine direction créative, structure UX et implémentation technique pour transformer votre présence en ligne en un véritable outil au service de votre activité.',

  items: [
    {
      id: 'branding-digital',
      title: 'Direction visuelle crédible et soignée',
      description:
        'Un univers digital cohérent, élégant et professionnel qui valorise votre activité et renforce immédiatement la confiance de vos visiteurs.',
      icon: Palette,
    },
    {
      id: 'nextjs-performance',
      title: 'Technologie moderne et performances élevées',
      description:
        'Un site rapide, stable et optimisé construit avec Next.js pour offrir une expérience fluide et fiable sur mobile comme sur desktop.',
      icon: Gauge,
    },
    {
      id: 'conversion-optimization',
      title: 'Structure pensée pour générer des contacts',
      description:
        'Une hiérarchie claire, un message lisible et des appels à l’action bien placés pour transformer plus de visiteurs en prospects.',
      icon: Sparkles,
    },
  ],
};
