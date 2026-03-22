import type { SocialProofContent } from '@/domain/home/social-proof';

export const socialProofContent: SocialProofContent = {
  eyebrow: 'Standard de qualité',

  quote:
    'Un site utile ne cherche pas à impressionner pour impressionner. Il aide les bonnes personnes à comprendre votre valeur, à vous faire confiance et à passer à l’action.',

  author: 'Alchimiste Créations',
  role: 'Approche du studio',

  stats: [
    {
      id: 'timeline',
      value: '2 à 6 semaines',
      label: 'Du cadrage à la livraison',
    },
    {
      id: 'method',
      value: 'Méthode en 4 axes',
      label: 'Message, structure, design, conversion',
    },
    {
      id: 'business-focus',
      value: 'Objectif contact',
      label: 'Une présence pensée pour générer des demandes qualifiées',
    },
  ],
};
