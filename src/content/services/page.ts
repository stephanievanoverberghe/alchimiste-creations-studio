import type { ServicesPageContent } from '@/domain/services/page';
import {
  primaryContactCtaLabel,
  secondaryContactCtaLabel,
  trustCallMeta,
} from '@/content/site/messaging';

export const servicesPageContent: ServicesPageContent = {
  hero: {
    eyebrow: 'Services',
    title:
      'Des offres cadrées pour choisir vite, lancer sereinement et obtenir un résultat concret.',
    description:
      'Chaque offre précise ce qui est inclus, ce qui ne l’est pas et le résultat visé. Vous avancez sans ambiguïté sur le budget, le délai et la priorité.',
    primaryCta: {
      label: secondaryContactCtaLabel,
      href: '/contact',
    },
    secondaryCta: {
      label: 'Voir des projets',
      href: '/portfolio',
    },
    highlights: [
      'Périmètre explicite',
      'Design sur mesure',
      'Production responsive',
      'Objectif contact',
    ],
    featuredCard: {
      badge: 'Offre la plus demandée',
      title: 'Site vitrine',
      description:
        'Pour présenter votre activité avec une structure claire, une image professionnelle et une base solide pour évoluer ensuite.',
      priceLabel: 'Investissement',
      priceValue: 'À partir de 1 800 €',
      timeline: 'Délai habituel : 3 à 5 semaines',
      detailSlug: 'site-vitrine',
      detailLabel: 'Voir le détail de l’offre',
      points: [
        {
          id: 'scope',
          icon: 'layers3',
          label: 'Périmètre',
          value: 'Clair dès le départ',
        },
        {
          id: 'timeline',
          icon: 'timer',
          label: 'Délais',
          value: 'Réalisme et visibilité',
        },
        {
          id: 'goal',
          icon: 'shieldCheck',
          label: 'Finalité',
          value: 'Mieux convaincre en ligne',
        },
      ],
    },
  },

  problemStrip: {
    items: [
      {
        id: 'launch',
        icon: 'rocket',
        title: 'Lancer rapidement une offre',
        text: 'Quand vous avez besoin d’une présence propre et efficace, sans projet trop lourd à démarrer.',
      },
      {
        id: 'structure',
        icon: 'compass',
        title: 'Structurer une activité installée',
        text: 'Quand il faut clarifier votre positionnement et présenter vos services avec plus de cohérence.',
      },
      {
        id: 'refresh',
        icon: 'refreshCcw',
        title: 'Remettre à niveau un site existant',
        text: 'Quand votre site ne reflète plus la qualité réelle de votre travail ni vos ambitions.',
      },
    ],
  },

  process: {
    eyebrow: 'Méthode',
    title: 'Un cadre simple, sans complexité inutile.',
    description:
      'Le process est là pour fluidifier les décisions : vous savez ce que nous faisons, pourquoi et dans quel ordre.',
    steps: [
      {
        number: '01',
        title: 'Échange initial',
        text: 'Nous clarifions votre besoin, votre priorité et le format le plus pertinent.',
      },
      {
        number: '02',
        title: 'Structure & direction',
        text: 'Nous posons une base claire pour votre message, vos pages et votre objectif de conversion.',
      },
      {
        number: '03',
        title: 'Design & développement',
        text: 'Je produis un site lisible, élégant et fiable sur tous les écrans.',
      },
      {
        number: '04',
        title: 'Livraison & mise en ligne',
        text: 'Vous recevez un site prêt à être utilisé, avec une mise en ligne propre et contrôlée.',
      },
    ],
  },

  offers: {
    eyebrow: 'Les offres',
    title: 'Trois formats, trois objectifs clairs.',
    description:
      'Chaque offre correspond à une situation précise pour éviter les prestations trop floues ou surdimensionnées.',
    investmentLabel: 'Investissement',
    startingFromLabel: 'À partir de',
    timelineLabel: 'Délai',
    idealForLabel: 'Idéal pour',
    expectedResultLabel: 'Résultat recherché',
    expectedResultDescription:
      'Une présence en ligne plus lisible, plus crédible et plus orientée prise de contact.',
    detailsLabel: 'Voir le détail complet',
    detailsDescription: 'inclus, livrables, options et périmètre',
    fallbackResult: 'Mieux présenter votre activité et convertir plus facilement',
    defaultOfferBadge: 'Offre',
    featuredOfferBadge: 'Offre signature',
  },

  comparison: {
    eyebrow: 'Comparaison',
    title: 'Le bon format en un coup d’œil.',
    description:
      'Comparez les offres selon votre besoin, votre timing et votre budget pour décider plus sereinement.',
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
    title: 'Un niveau de précision qui aide à décider.',
    description:
      'Pour chaque offre : objectifs, inclusions, livrables, options et limites pour avancer en confiance.',
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
    title: 'Vous hésitez entre plusieurs offres ?',
    description:
      'Un appel découverte permet d’identifier rapidement le format adapté à votre activité, votre priorité et votre budget.',
    buttonLabel: primaryContactCtaLabel,
    buttonHref: '/contact',
    meta: trustCallMeta,
  },
};
