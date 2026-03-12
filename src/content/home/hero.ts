import type { HeroContent } from '@/domain/home/hero';

export const heroContent: HeroContent = {
  eyebrow: 'Studio web indépendant — design, clarté, conversion',
  title: 'Attirez des prospects plus qualifiés avec un site clair, crédible et orienté conversion.',
  description:
    'Je conçois des sites premium pour entrepreneurs et indépendants qui veulent mieux présenter leur valeur, rassurer plus vite et générer davantage de prises de contact utiles.',
  primaryCta: {
    label: 'Réserver un appel découverte',
    href: '/contact',
  },
  secondaryCta: {
    label: 'Voir des résultats',
    href: '/portfolio',
  },
  highlights: [
    'Positionnement clarifié',
    'Parcours pensé conversion',
    'Next.js rapide et évolutif',
  ],
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
