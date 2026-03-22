import type { PortfolioPreviewCtaItem } from '@/domain/portfolio/types';
import type { PortfolioProjectSlug } from '@/domain/portfolio/types';
import { secondaryContactCtaLabel } from '@/content/site/messaging';

export const portfolioPreviewSectionContent = {
  eyebrow: 'Projets sélectionnés',
  title: 'Des réalisations qui transforment la perception d’une activité.',
  description:
    'Chaque projet illustre la même priorité : rendre l’offre plus lisible, renforcer la crédibilité et faciliter la prise de contact.',
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
    'Si votre site ne reflète pas encore votre niveau, nous pouvons créer une présence plus claire, plus crédible et plus persuasive.',
  href: '/contact',
  ctaLabel: secondaryContactCtaLabel,
};
