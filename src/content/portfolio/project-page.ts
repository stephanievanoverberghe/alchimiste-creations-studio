import type { PortfolioProjectPageContent } from '@/domain/portfolio/page';
import { primaryContactCtaLabel } from '@/content/site/messaging';

export const portfolioProjectPageContent: PortfolioProjectPageContent = {
  backLabel: 'Retour au portfolio',
  caseStudyLabel: 'Étude de cas',
  liveSiteLabel: 'Voir le site en ligne',
  projectOverviewLabel: 'Vue d’ensemble du projet',
  objectiveLabel: 'Objectif',
  problemLabel: 'Problème',
  solutionLabel: 'Solution',
  resultLabel: 'Résultat',
  beforeAfterTitle: 'Avant / Après',
  nextProjectLabel: 'Projet suivant',
  finalCta: {
    eyebrow: 'Votre projet',
    title: 'Vous voulez un site pensé avec le même niveau d’exigence ?',
    description:
      'Nous pouvons construire une présence en ligne plus claire, plus cohérente et plus convaincante pour votre activité.',
    buttonLabel: primaryContactCtaLabel,
    buttonHref: '/contact',
  },
};
