import type { HeroContent } from '@/domain/home/hero';

export const heroContent: HeroContent = {
  eyebrow: 'Studio web indépendant — design, clarté, conversion',
  title: 'Transformez votre activité en une présence web crédible qui attire les bons clients.',
  description:
    'J’accompagne entrepreneurs, créateurs et indépendants pour passer d’un site flou ou inexistant à une vitrine premium, structurée et performante qui inspire confiance dès les premières secondes.',
  primaryCta: {
    label: 'Réserver un appel découverte',
    href: '/contact',
  },
  secondaryCta: {
    label: 'Voir les projets',
    href: '/portfolio',
  },
  highlights: [
    'Du doute à la confiance',
    'Structure pensée conversion',
    'Next.js moderne et rapide',
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
