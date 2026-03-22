import { Gauge, Palette, Sparkles } from 'lucide-react';

import type { ValuePropositionContent } from '@/domain/home/value-proposition';

export const valuePropositionContent: ValuePropositionContent = {
  eyebrow: 'Ce qui fait la différence',
  title: 'Pas seulement “un site en ligne” : un site qui travaille pour votre activité.',
  description:
    'Chaque décision sert un objectif concret : mieux expliquer votre offre, rassurer plus vite et faciliter la prise de contact.',

  items: [
    {
      id: 'branding-digital',
      title: 'Une image qui reflète votre niveau',
      description:
        'Un design soigné et cohérent pour donner une impression de sérieux dès la première visite.',
      icon: Palette,
    },
    {
      id: 'nextjs-performance',
      title: 'Une base fiable et rapide',
      description:
        'Un site fluide sur mobile comme sur desktop pour éviter la frustration et garder l’attention.',
      icon: Gauge,
    },
    {
      id: 'conversion-optimization',
      title: 'Un parcours pensé pour décider',
      description:
        'Un message clair, des preuves bien placées et des appels à l’action visibles pour générer de meilleurs contacts.',
      icon: Sparkles,
    },
  ],
};
