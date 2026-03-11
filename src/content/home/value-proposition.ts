import { Gauge, Palette, Sparkles } from 'lucide-react';

import type { ValuePropositionContent } from '@/domain/home/value-proposition';

export const valuePropositionContent: ValuePropositionContent = {
  eyebrow: 'Ce que je crée',
  title: 'Un site qui ne fait pas que présenter votre activité.',
  description:
    'Chaque projet est pensé pour clarifier votre message, renforcer votre image professionnelle et créer une présence en ligne capable de convaincre les bonnes personnes.',
  items: [
    {
      id: 'branding-digital',
      title: 'Branding digital',
      description:
        'Un univers visuel cohérent pour donner à votre activité une présence plus forte, plus crédible et plus mémorable.',
      icon: Palette,
    },
    {
      id: 'nextjs-performance',
      title: 'Sites Next.js performants',
      description:
        'Des interfaces modernes, rapides et responsive, construites avec une stack solide pour une expérience fluide sur tous les écrans.',
      icon: Gauge,
    },
    {
      id: 'conversion-optimization',
      title: 'Optimisation conversion',
      description:
        'Une structure claire, des messages précis et des appels à l’action visibles pour transformer davantage de visiteurs en prises de contact.',
      icon: Sparkles,
    },
  ],
};
