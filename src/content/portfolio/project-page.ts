import type { PortfolioProjectPageContent } from '@/domain/portfolio/page';
import { primaryContactCtaLabel, trustCallMeta } from '@/content/site/messaging';

export const portfolioProjectPageContent: PortfolioProjectPageContent = {
  backLabel: 'Retour au portfolio',
  caseStudyLabel: 'Étude de cas',
  liveSiteLabel: 'Voir le site en ligne',
  contactLabel: 'Parler d’un projet',
  transformationLabel: 'Transformation',
  projectOverviewLabel: 'Vue d’ensemble du projet',
  contextLabel: 'Contexte',
  objectiveLabel: 'Objectif',
  problemLabel: 'Problème',
  solutionLabel: 'Solution',
  resultLabel: 'Résultat',
  beforeAfterTitle: 'Avant / Après',
  beforeAfterHeadingTitle: 'Une transformation pensée pour renforcer la perception.',
  beforeAfterHeadingDescription:
    'Chaque projet présenté ici cherche à rendre l’activité plus lisible, plus cohérente et plus convaincante.',
  beforeLabel: 'Avant',
  afterLabel: 'Après',
  gallery: {
    eyebrow: 'Galerie',
    title: 'Desktop et mobile, pensés comme une seule expérience.',
    description:
      'Une lecture principale sur desktop, avec une déclinaison mobile cohérente et maîtrisée.',
    desktopLabel: 'Desktop',
    mobileLabel: 'Mobile',
  },
  nextProjectLabel: 'Projet suivant',
  finalCta: {
    eyebrow: 'Votre projet',
    title: 'Vous voulez un site pensé avec le même niveau d’exigence ?',
    description:
      'Nous pouvons construire une présence en ligne plus claire, plus cohérente et plus convaincante pour votre activité.',
    buttonLabel: primaryContactCtaLabel,
    buttonHref: '/contact',
    meta: trustCallMeta,
  },
};
