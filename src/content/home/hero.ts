import type { HeroContent } from '@/domain/home/hero';
import { messagingCore, primaryContactCtaLabel } from '@/content/site/messaging';

export const heroContent: HeroContent = {
  eyebrow: 'Studio web indépendant — design, clarté, conversion',
  title: 'Votre expertise mérite un site qui donne confiance et déclenche des prises de contact.',
  description:
    'Nous transformons un projet parfois flou en pages claires, élégantes et convaincantes. Objectif : aider vos futurs clients à comprendre votre valeur et passer à l’action.',
  trustIndicators: [
    {
      id: 'timeline',
      value: '2 à 6 semaines',
      label: 'Du cadrage à la mise en ligne',
    },
    {
      id: 'method',
      value: 'Méthode guidée',
      label: 'Objectifs, structure, design, livraison',
    },
    {
      id: 'business-focus',
      value: 'Priorité business',
      label: 'Compréhension rapide, crédibilité forte, CTA clairs',
    },
  ],
  primaryCta: {
    label: primaryContactCtaLabel,
    href: '/contact',
  },
  secondaryCta: {
    label: messagingCore.ctas.portfolio,
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
