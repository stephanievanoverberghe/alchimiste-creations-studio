import type { SocialProofContent } from '@/domain/home/social-proof';

export const socialProofContent: SocialProofContent = {
  eyebrow: 'Méthode & standards',

  quote:
    'Un site premium ne doit pas seulement être esthétique. Il doit clarifier votre positionnement, renforcer la valeur perçue et transformer l’intérêt en prise de contact.',

  author: 'Alchimiste Créations',
  role: 'Approche de conception',

  stats: [
    {
      id: 'delivery',
      value: '2–6 semaines',
      label:
        'Un rythme de production clair et structuré pour avancer efficacement sans sacrifier la qualité.',
    },
    {
      id: 'mobile',
      value: 'Mobile-first',
      label: 'Une expérience pensée d’abord pour la lisibilité et la fluidité sur tous les écrans.',
    },
    {
      id: 'core-web',
      value: 'Next.js',
      label:
        'Une base technique moderne, performante et évolutive pour construire des sites rapides et durables.',
    },
  ],
};
