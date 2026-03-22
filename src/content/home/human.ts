import type { HomeHumanSectionContent } from '@/domain/home/human';

export const homeHumanSectionContent: HomeHumanSectionContent = {
  eyebrow: 'La personne derrière le studio',
  title: 'Un accompagnement direct, du premier échange à la mise en ligne.',
  description:
    'Vous avancez avec un interlocuteur unique, une méthode claire et des décisions guidées à chaque étape.',
  paragraphs: [
    'Alchimiste Créations est un studio indépendant : vous échangez avec la personne qui cadre, conçoit et développe votre site.',
    'Cette proximité permet d’aller à l’essentiel, de garder le cap et de livrer un site aligné avec vos enjeux réels.',
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
      label: 'Fil conducteur',
      value: 'Clarté • Crédibilité • Conversion',
    },
  ],
};
