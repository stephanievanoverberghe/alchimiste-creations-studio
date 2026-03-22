import type { HeroContent } from '@/domain/home/hero';
import { primaryContactCtaLabel } from '@/content/site/messaging';

export const heroContent: HeroContent = {
  eyebrow: 'Studio web indépendant — stratégie, design, résultats mesurables',
  title: 'Un site pensé pour décrocher plus de demandes qualifiées en 2 à 6 semaines.',
  description:
    'Chaque projet suit une méthode en 4 étapes (positionnement, maquettes, développement, optimisation) pour transformer votre expertise en pages qui répondent aux objections et poussent à l’action.',
  trustIndicators: [
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
  primaryCta: {
    label: primaryContactCtaLabel,
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
