import type { HeroContent } from '@/domain/home/hero';

export const heroContent: HeroContent = {
  eyebrow: 'Studio web freelance premium',
  title: 'Des sites web modernes qui inspirent confiance et attirent les bons clients.',
  description:
    'J’aide les entrepreneurs, créateurs et indépendants à clarifier leur présence en ligne avec des sites élégants, performants et pensés pour soutenir leur développement.',
  primaryCta: {
    label: 'Réserver un appel découverte',
    href: '/contact',
  },
  secondaryCta: {
    label: 'Voir les projets',
    href: '/portfolio',
  },
  highlights: ['Design clair', 'Next.js performant', 'Pensé pour la conversion'],
};
