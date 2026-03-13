import type { PortfolioPageContent, PortfolioProjectPageContent } from '@/domain/portfolio/page';
import { primaryContactCtaLabel, secondaryContactCtaLabel } from '@/content/site/messaging';

export const portfolioPageContent: PortfolioPageContent = {
  hero: {
    eyebrow: 'Portfolio',
    title:
      'Des projets conçus pour clarifier un message, renforcer une image et améliorer la conversion.',
    description:
      'Chaque projet présenté ici répond à un objectif concret : mieux présenter une activité, rendre une offre plus lisible et créer une présence plus crédible.',
  },
  grid: {
    eyebrow: 'Projets sélectionnés',
    title: 'Quelques exemples de projets pensés pour la perception et la clarté.',
    description:
      'Ces projets montrent comment une meilleure structure, un design plus juste et une hiérarchie plus claire peuvent transformer l’expérience.',
  },
  process: {
    eyebrow: 'Approche',
    title: 'Chaque projet suit une logique simple : comprendre, structurer, valoriser.',
    description:
      'Avant de penser interface, l’objectif est d’abord de clarifier le message, le parcours et ce qui doit être perçu dès les premières secondes.',
    steps: [
      {
        id: 'clarify',
        title: 'Clarifier',
        description:
          'Comprendre le positionnement, l’offre et ce qui bloque la perception actuelle.',
      },
      {
        id: 'structure',
        title: 'Structurer',
        description:
          'Organiser l’information, le parcours et les points de contact de manière plus lisible.',
      },
      {
        id: 'elevate',
        title: 'Valoriser',
        description:
          'Créer une présence plus cohérente, plus crédible et plus agréable à parcourir.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Démarrer un projet',
    title: 'Vous souhaitez créer une présence en ligne plus claire et plus crédible ?',
    description:
      'Nous pouvons cadrer votre besoin, clarifier votre priorité et définir la meilleure approche pour votre site.',
    buttonLabel: secondaryContactCtaLabel,
    buttonHref: '/contact',
  },
};

export const portfolioProjectPageContent: PortfolioProjectPageContent = {
  backLabel: 'Retour au portfolio',
  caseStudyLabel: 'Étude de cas',
  objectiveLabel: 'Objectif',
  problemLabel: 'Problème',
  solutionLabel: 'Solution',
  resultLabel: 'Résultat',
  beforeAfterTitle: 'Avant / Après',
  nextProjectLabel: 'Projet suivant',
  finalCta: {
    eyebrow: 'Créer votre projet',
    title: 'Vous voulez le même niveau de clarté pour votre site ?',
    description:
      'Nous pouvons construire une présence plus lisible, plus élégante et plus convaincante pour votre activité.',
    buttonLabel: primaryContactCtaLabel,
    buttonHref: '/contact',
  },
};
