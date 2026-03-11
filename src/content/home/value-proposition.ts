import { Gauge, Palette, Sparkles } from 'lucide-react';

import type { ValuePropositionContent } from '@/domain/home/value-proposition';

export const valuePropositionContent: ValuePropositionContent = {
  eyebrow: 'Méthode Alchimiste',
  title: 'Un site pensé comme un levier de crédibilité et de développement.',
  description:
    'Chaque projet combine direction créative, structure UX et implémentation technique pour transformer votre présence en ligne en outil utile pour votre activité.',
  items: [
    {
      id: 'branding-digital',
      title: 'Direction visuelle premium',
      description:
        'Un univers digital cohérent qui reflète votre niveau d’exigence et positionne votre activité de façon plus professionnelle.',
      icon: Palette,
    },
    {
      id: 'nextjs-performance',
      title: 'Expérience rapide et maîtrisée',
      description:
        'Un front-end moderne construit avec Next.js pour offrir un site fluide, stable et lisible sur mobile comme sur desktop.',
      icon: Gauge,
    },
    {
      id: 'conversion-optimization',
      title: 'Parcours orienté prise de contact',
      description:
        'Une hiérarchie claire, des messages précis et des CTA visibles pour convertir plus de visiteurs en prospects qualifiés.',
      icon: Sparkles,
    },
  ],
};
