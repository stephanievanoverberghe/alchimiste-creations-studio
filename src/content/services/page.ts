import type { ServicesPageContent } from '@/domain/services/page';
import {
  primaryContactCtaLabel,
  secondaryContactCtaLabel,
  trustCallMeta,
} from '@/content/site/messaging';

export const servicesPageContent: ServicesPageContent = {
  hero: {
    eyebrow: 'Services',
    title: 'Des offres pensées pour clarifier votre présence en ligne et mieux convertir.',
    description:
      'Chaque offre répond à un besoin précis : lancer une présence crédible, structurer un site durable ou refondre un existant devenu moins efficace.',
    primaryCta: {
      label: secondaryContactCtaLabel,
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
    featuredCard: {
      badge: 'Offre la plus demandée',
      title: 'Site vitrine',
      description:
        'Pour présenter votre activité avec une structure claire, un design crédible et une base suffisamment solide pour évoluer.',
      priceLabel: 'Investissement',
      priceValue: 'À partir de 1 800 €',
      timeline: 'Délai habituel : 3 à 5 semaines',
      detailSlug: 'site-vitrine',
      detailLabel: 'Voir le détail de l’offre',
      points: [
        {
          id: 'scope',
          icon: 'layers3',
          label: 'Offres cadrées',
          value: 'Périmètre clair',
        },
        {
          id: 'timeline',
          icon: 'timer',
          label: 'Délais réalistes',
          value: '2 à 6 semaines',
        },
        {
          id: 'goal',
          icon: 'shieldCheck',
          label: 'Objectif',
          value: 'Clarté + crédibilité',
        },
      ],
    },
  },

  problemStrip: {
    items: [
      {
        id: 'launch',
        icon: 'rocket',
        title: 'Lancer une présence crédible',
        text: 'Quand il faut présenter une offre clairement sans partir sur un site trop lourd.',
      },
      {
        id: 'structure',
        icon: 'compass',
        title: 'Structurer une activité durable',
        text: 'Quand votre activité mérite un site complet, cohérent et professionnel.',
      },
      {
        id: 'refresh',
        icon: 'refreshCcw',
        title: 'Moderniser un existant',
        text: 'Quand votre site ne reflète plus votre niveau, votre image ou votre ambition.',
      },
    ],
  },

  process: {
    eyebrow: 'Méthode',
    title: 'Un cadre clair, du premier échange à la mise en ligne.',
    description:
      'L’objectif n’est pas de vous noyer dans un process complexe, mais de rendre la collaboration simple, lisible et rassurante.',
    steps: [
      {
        number: '01',
        title: 'Échange initial',
        text: 'Comprendre votre activité, votre priorité et le format le plus adapté.',
      },
      {
        number: '02',
        title: 'Structure & direction',
        text: 'Définir une base claire, crédible et alignée avec votre objectif.',
      },
      {
        number: '03',
        title: 'Design & développement',
        text: 'Créer un site moderne, responsive et cohérent dans les détails.',
      },
      {
        number: '04',
        title: 'Livraison & mise en ligne',
        text: 'Finaliser, vérifier et mettre en ligne une version prête à être utilisée.',
      },
    ],
  },

  offers: {
    eyebrow: 'Les offres',
    title: 'Trois formats pour lancer, structurer ou améliorer votre site.',
    description:
      'Chaque offre est conçue pour répondre à un contexte précis avec un périmètre clair, une logique cohérente et un objectif concret.',
    startingFromLabel: 'À partir de',
    idealForLabel: 'Idéal pour',
    expectedResultLabel: 'Résultat recherché',
    expectedResultDescription:
      'Une offre cadrée pour aller à l’essentiel sans sacrifier la qualité perçue.',
    detailsLabel: 'Voir le détail complet',
    detailsDescription: 'inclus, livrables, options et périmètre',
    fallbackResult: 'Créer une présence claire et crédible',
    defaultOfferBadge: 'Offre',
    featuredOfferBadge: 'Offre signature',
  },

  comparison: {
    eyebrow: 'Comparaison',
    title: 'Comparer les offres en un coup d’œil.',
    description:
      'Ce comparatif permet d’identifier rapidement le bon format selon votre besoin, votre niveau de maturité et votre budget de départ.',
    defaultOfferBadge: 'Offre',
    startingFromLabel: 'À partir de',
    timelineLabel: 'Délai',
    formatRowId: 'format',
    timelineRowId: 'timeline',
    priceRowId: 'price',
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
    defaultOfferBadge: 'Offre',
    featuredOfferBadge: 'Populaire',
    summaryTitle: 'En bref',
    investmentLabel: 'Investissement',
    startingFromLabel: 'À partir de',
    timelineLabel: 'Délai habituel',
    timelineValueLabel: 'Délai',
    summaryMetaSeparator: '•',
    idealForLabel: 'Idéal pour',
    sections: {
      objectives: {
        label: 'Objectifs',
        eyebrow: 'Ce que vise cette offre',
        title: 'Objectifs',
      },
      includes: {
        label: 'Inclus',
        eyebrow: 'Ce qui est prévu',
        title: 'Inclus dans la prestation',
      },
      deliverables: {
        label: 'Livrables',
        eyebrow: 'Ce que vous recevez',
        title: 'Livrables',
      },
      possibleContent: {
        label: 'Contenu',
        eyebrow: 'Selon votre projet',
        title: 'Contenu possible',
      },
      options: {
        label: 'Options',
        eyebrow: 'Pour aller plus loin',
        title: 'Options possibles',
      },
    },
    fallbackPossibleContent: 'Selon le projet',
  },

  finalCta: {
    eyebrow: 'Démarrer un projet',
    title: 'Vous hésitez entre plusieurs formats ?',
    description:
      'Nous pouvons clarifier ensemble la solution la plus adaptée à votre activité, votre priorité et votre budget.',
    buttonLabel: primaryContactCtaLabel,
    buttonHref: '/contact',
    meta: trustCallMeta,
  },
};
