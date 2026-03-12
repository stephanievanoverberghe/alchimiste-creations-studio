import type { HeroContent } from '@/domain/home/hero';

export const heroContent: HeroContent = {
  eyebrow: 'Studio web indépendant — design, clarté, conversion',
  title: 'Un site clair, crédible et orienté conversion pour attirer plus de prospects qualifiés.',
  description:
    'Je conçois des sites premium pour entrepreneurs et indépendants qui veulent mieux présenter leur valeur, rassurer plus vite et générer davantage de prises de contact utiles.',
  trustIndicators: [
    {
      id: 'timeline',
      value: '2 à 6 semaines',
      label: 'De la stratégie au déploiement',
    },
    {
      id: 'mobile-first',
      value: 'Mobile-first',
      label: 'Pensé pour convertir sur tous les écrans',
    },
    {
      id: 'nextjs-stack',
      value: 'Next.js & perf',
      label: 'Base technique rapide, propre et évolutive',
    },
  ],
  primaryCta: {
    label: 'Réserver un appel découverte',
    href: '/contact',
  },
  secondaryCta: {
    label: 'Voir des résultats',
    href: '/portfolio',
  },
  mockup: {
    browserLabel: 'alchimiste-creations.fr/projet',
    desktop: {
      src: '/images/mockups/hero-desktop.webp',
      alt: 'Aperçu desktop d’un site premium conçu par Alchimiste Créations',
    },
    mobile: {
      src: '/images/mockups/hero-mobile.webp',
      alt: 'Aperçu mobile d’un site premium conçu par Alchimiste Créations',
    },
  },
};
