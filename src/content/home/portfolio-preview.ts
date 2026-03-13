import type { PortfolioPreviewCtaItem } from '@/domain/portfolio/types';

export const portfolioPreviewSectionContent = {
  eyebrow: 'Projets sélectionnés',
  title: 'Des projets pensés pour améliorer la perception et la conversion.',
  description:
    'Chaque réalisation présentée ici combine direction visuelle, clarté du message et structure orientée résultat pour transformer les visites en demandes qualifiées.',
};
export const portfolioPreviewProjectOrder = ['studio-lumen', 'rivage-photo', 'explorart'] as const;

export const portfolioPreviewCtaContent: PortfolioPreviewCtaItem = {
  id: 'your-project',
  type: 'cta',
  title: 'Et si le prochain projet était le vôtre ?',
  description:
    'Si votre site n’exprime pas encore votre vraie valeur, nous pouvons construire une présence plus claire, plus élégante et plus convaincante.',
  href: '/contact',
  ctaLabel: 'Parler de votre projet',
};
