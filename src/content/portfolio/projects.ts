import type { PortfolioProject } from '@/domain/portfolio/project.types';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'studio-lumen',
    slug: 'studio-lumen',
    title: 'Studio Lumen',
    category: 'Site vitrine premium',
    description:
      'Une présence plus éditoriale et plus crédible pour mieux présenter l’offre dès la première visite.',
    objective: 'Clarifier l’offre et renforcer immédiatement la valeur perçue.',
    problem:
      'Le positionnement était trop flou et le site ne reflétait pas réellement le niveau de service.',
    solution:
      'Une refonte orientée message, structure et perception premium pour rendre la prise de contact plus naturelle.',
    context:
      'Contexte : Activité premium avec un positionnement peu lisible et un site qui ne portait pas le niveau de service.',
    result: 'Résultat : Message clarifié, parcours simplifié et prises de contact plus qualifiées.',
    beforeLabel: 'Avant : positionnement flou',
    afterLabel: 'Après : présence claire et crédible',
    ctaLabel: 'Voir le projet',
    image: {
      src: '/images/portfolio/studio-lumen-template-home.webp',
      alt: 'Aperçu du projet Studio Lumen',
    },
  },
  {
    id: 'rivage-photo',
    slug: 'rivage-photo',
    title: 'Rivage Photo',
    category: 'Portfolio visuel',
    description:
      'Un portfolio immersif mais structuré pour valoriser le travail visuel sans sacrifier la clarté.',
    objective: 'Mieux valoriser l’univers visuel tout en rendant l’offre plus lisible.',
    problem:
      'Le contenu visuel était riche, mais la navigation freinait la découverte des prestations.',
    solution:
      'Une structure plus fluide, un meilleur rythme visuel et une lecture plus claire des services.',
    context:
      'Contexte : Beaucoup de contenu visuel, mais une navigation qui freinait la découverte des prestations.',
    result:
      'Résultat : Expérience plus fluide, offre mieux comprise et échanges clients mieux orientés.',
    beforeLabel: 'Avant : navigation dispersée',
    afterLabel: 'Après : parcours plus fluide',
    ctaLabel: 'Découvrir le projet',
    image: {
      src: '/images/portfolio/rivage-photo-template-home.webp',
      alt: 'Aperçu du projet Rivage Photo',
    },
  },
  {
    id: 'explorart',
    slug: 'explorart',
    title: 'Explorart',
    category: 'Plateforme éditoriale',
    description:
      'Une expérience de lecture plus structurée pour transmettre un univers riche sans perdre en clarté ni en lisibilité.',
    objective: 'Rendre un univers éditorial dense plus accessible et plus agréable à parcourir.',
    problem:
      'Le volume de contenu et la richesse du projet rendaient l’ensemble difficile à structurer.',
    solution:
      'Une architecture éditoriale plus nette, pensée pour guider la lecture et mieux hiérarchiser la matière.',
    context:
      'Contexte : Un projet éditorial ambitieux avec beaucoup de contenus, de piliers et de matière à organiser.',
    result:
      'Résultat : Architecture plus claire, navigation plus intuitive et contenu mieux mis en valeur.',
    beforeLabel: 'Avant : contenu difficile à parcourir',
    afterLabel: 'Après : lecture plus structurée',
    ctaLabel: 'Voir le projet',
    image: {
      src: '/images/portfolio/explorart-template-home.webp',
      alt: 'Aperçu du projet Explorart',
    },
  },
];
