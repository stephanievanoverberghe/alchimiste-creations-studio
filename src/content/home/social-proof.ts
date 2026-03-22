import type { SocialProofContent } from '@/domain/home/social-proof';

export const socialProofContent: SocialProofContent = {
  eyebrow: 'Standards de conception',

  quote:
    'Un site premium ne doit pas seulement être esthétique. Il doit clarifier votre positionnement, renforcer votre valeur perçue et rendre la prise de contact plus naturelle.',

  author: 'Alchimiste Créations',
  role: 'Méthode de conception',

  stats: [
    {
      id: 'timeline',
      value: '2 à 6 semaines',
      label: 'Cadrage, production et mise en ligne inclus',
    },
    {
      id: 'method',
      value: 'Méthode en 4 étapes',
      label: 'Brief guidé, structure des pages, design, itérations',
    },
    {
      id: 'business-focus',
      value: 'Piloté business',
      label: 'Objectifs de contact, lisibilité mobile et vitesse',
    },
  ],
};
