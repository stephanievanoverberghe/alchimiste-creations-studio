import type { PortfolioPreviewCtaItem } from '@/domain/portfolio/types';
import type { PortfolioProjectSlug } from '@/domain/portfolio/types';
import { secondaryContactCtaLabel } from '@/content/site/messaging';

export const portfolioPreviewSectionContent = {
  eyebrow: 'Projets sélectionnés',
  title: 'Des projets pensés pour améliorer la perception et la conversion.',
  description:
    'Chaque réalisation présentée ici combine direction visuelle, clarté du message et structure orientée résultat pour transformer les visites en demandes qualifiées.',
  uiLabels: {
    signatureProjectBadge: 'Projet signature',
    caseStudyLabel: 'Étude de cas',
    objectiveLabel: 'Objectif',
    problemLabel: 'Problème',
    solutionLabel: 'Solution',
    resultLabel: 'Résultat',
    calloutBadgeLabel: 'À votre tour',
  },
};
export const portfolioPreviewProjectOrder: PortfolioProjectSlug[] = [
  'studio-lumen',
  'rivage-photo',
  'explorart',
];

export const portfolioPreviewCtaContent: PortfolioPreviewCtaItem = {
  id: 'your-project',
  type: 'cta',
  title: 'Et si le prochain projet était le vôtre ?',
  description:
    'Si votre site n’exprime pas encore votre vraie valeur, nous pouvons construire une présence plus claire, plus élégante et plus convaincante.',
  href: '/contact',
  ctaLabel: secondaryContactCtaLabel,
};
