import type { ServicesPageContent } from '@/domain/services/page';

export const servicesPageContent: ServicesPageContent = {
  hero: {
    eyebrow: 'Services',
    title: 'Des offres pensées pour clarifier votre présence en ligne et mieux convertir.',
    description:
      'Chaque offre répond à un besoin précis : lancer une présence crédible, structurer un site durable ou refondre un existant devenu moins efficace.',
    primaryCta: {
      label: 'Parler de votre projet',
      href: '/contact',
    },
    secondaryCta: {
      label: 'Voir des projets',
      href: '/portfolio',
    },
    highlights: [
      'Design sur mesure',
      'Développement responsive',
      'Performance optimisée',
      'Approche orientée conversion',
    ],
  },

  selector: {
    eyebrow: 'Choisir la bonne offre',
    title: 'Une offre différente selon votre stade et votre objectif.',
    description:
      'L’idée n’est pas de vendre plus que nécessaire, mais de proposer le format le plus pertinent selon votre activité, votre besoin actuel et votre objectif de conversion.',
  },

  offers: {
    eyebrow: 'Les offres',
    title: 'Trois formats pour lancer, structurer ou améliorer votre site.',
    description:
      'Chaque offre est conçue pour répondre à un contexte précis avec un périmètre clair, une logique cohérente et un objectif concret.',
  },

  comparison: {
    eyebrow: 'Comparaison',
    title: 'Comparer les offres en un coup d’œil.',
    description:
      'Ce comparatif permet d’identifier rapidement le bon format selon votre besoin, votre niveau de maturité et votre budget de départ.',
    rows: [
      {
        id: 'format',
        label: 'Format',
        values: {
          'landing-page': '1 page',
          'site-vitrine': 'jusqu’à 5 pages',
          'refonte-site': 'variable',
        },
      },
      {
        id: 'design',
        label: 'Design sur mesure',
        values: {
          'landing-page': 'Oui',
          'site-vitrine': 'Oui',
          'refonte-site': 'Oui',
        },
      },
      {
        id: 'responsive',
        label: 'Responsive',
        values: {
          'landing-page': 'Oui',
          'site-vitrine': 'Oui',
          'refonte-site': 'Oui',
        },
      },
      {
        id: 'seo',
        label: 'SEO de base',
        values: {
          'landing-page': 'Oui',
          'site-vitrine': 'Oui',
          'refonte-site': 'Selon périmètre',
        },
      },
      {
        id: 'timeline',
        label: 'Délai',
        values: {
          'landing-page': '2 à 3 semaines',
          'site-vitrine': '3 à 5 semaines',
          'refonte-site': '3 à 6 semaines',
        },
      },
      {
        id: 'price',
        label: 'À partir de',
        values: {
          'landing-page': '900 €',
          'site-vitrine': '1 800 €',
          'refonte-site': '1 500 €',
        },
      },
    ],
  },

  details: {
    eyebrow: 'Détail des offres',
    title: 'Un cadre clair pour savoir ce que vous achetez réellement.',
    description:
      'Chaque offre est présentée de manière transparente : objectifs, inclusions, livrables, contenu possible et options selon votre besoin.',
  },

  finalCta: {
    eyebrow: 'Démarrer un projet',
    title: 'Vous hésitez entre plusieurs formats ?',
    description:
      'Nous pouvons clarifier ensemble la solution la plus adaptée à votre activité, votre priorité et votre budget.',
    buttonLabel: 'Réserver un appel découverte',
    buttonHref: '/contact',
    meta: 'Sans engagement • Réponse sous 24h • Échange de 30 minutes',
  },
};
