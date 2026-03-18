import type { HomeHumanSectionContent } from '@/domain/home/human';

export const homeHumanSectionContent: HomeHumanSectionContent = {
  eyebrow: 'La personne derrière le studio',
  title: 'Une approche humaine, exigeante et orientée résultat.',
  description:
    'Je pilote chaque projet de A à Z pour garder une direction claire, un haut niveau d’exigence et une exécution cohérente.',
  paragraphs: [
    'Alchimiste Créations est un studio indépendant : vous échangez directement avec la personne qui conçoit, structure et développe votre site.',
    'Mon objectif est simple : traduire la qualité réelle de votre activité en une présence en ligne claire, crédible et convaincante.',
  ],
  metrics: [
    {
      id: 'projects',
      label: 'Formats accompagnés',
      value: 'Landing, vitrine, refonte',
    },
    {
      id: 'timeline',
      label: 'Cadence habituelle',
      value: '2 à 6 semaines',
    },
    {
      id: 'approach',
      label: 'Méthode',
      value: 'Clarté • Design • Conversion',
    },
  ],
};
