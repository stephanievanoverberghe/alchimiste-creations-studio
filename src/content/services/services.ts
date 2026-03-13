import { Service } from '@/domain/services/service.types';

export const services: Service[] = [
  {
    slug: 'landing-page',
    title: 'Landing Page',

    shortDescription:
      'Une page stratégique pour présenter une offre unique, capter l’attention rapidement et diriger l’utilisateur vers une action claire.',

    description:
      'La landing page permet de créer rapidement une présence en ligne professionnelle pour présenter une activité ou une offre spécifique.',

    target: [
      'entrepreneurs qui lancent une activité',
      'coachs et thérapeutes',
      'créateurs',
      'indépendants',
      'projets ayant besoin d’une page claire',
    ],

    objectives: [
      'présenter une activité',
      'expliquer une offre',
      'inspirer confiance',
      'encourager la prise de contact',
    ],

    includes: [
      '1 page complète',
      'design personnalisé',
      'structure optimisée',
      'développement responsive',
      'formulaire de contact',
      'optimisation performance',
      'mise en ligne',
    ],

    possibleContent: [
      'hero',
      'présentation de l’activité',
      'explication de l’offre',
      'éléments de confiance',
      'présentation du créateur',
      'appel à l’action',
      'formulaire de contact',
    ],

    deliverables: [
      'structure de la page',
      'design moderne et responsive',
      'développement du site',
      'optimisation des performances',
      'mise en ligne',
    ],

    timeline: '2 à 3 semaines',

    startingPrice: '900 €',

    options: [
      { name: 'Section supplémentaire', price: '100 €' },
      { name: 'Formulaire avancé', price: '150 €' },
      { name: 'Animation légère', price: '100 €' },
      { name: 'SEO avancé', price: '200 €' },
    ],
  },

  {
    slug: 'site-vitrine',
    title: 'Site vitrine',

    shortDescription:
      'Un site complet pour présenter votre activité, vos services et votre différence avec une structure claire, crédible et pensée pour durer.',

    description:
      'Le site vitrine constitue la base d’une présence en ligne professionnelle et permet de présenter clairement une activité.',

    target: ['entrepreneurs', 'coachs', 'thérapeutes', 'artistes', 'photographes', 'indépendants'],

    objectives: [
      'présenter une activité',
      'expliquer les services',
      'montrer des réalisations',
      'inspirer confiance',
      'attirer des clients',
    ],

    includes: [
      'jusqu’à 5 pages',
      'design personnalisé',
      'développement responsive',
      'optimisation performance',
      'formulaire de contact',
      'SEO de base',
      'mise en ligne',
    ],

    deliverables: [
      'structure du site',
      'design personnalisé',
      'développement responsive',
      'optimisation SEO de base',
      'mise en ligne',
    ],

    timeline: '3 à 5 semaines',

    startingPrice: '1 800 €',

    options: [
      { name: 'Page supplémentaire', price: '150 €' },
      { name: 'Blog', price: '400 €' },
      { name: 'SEO avancé', price: '300 €' },
      { name: 'Animations avancées', price: '200 €' },
      { name: 'Intégration outil marketing', price: '200 €' },
    ],
  },

  {
    slug: 'refonte-site',
    title: 'Refonte de site',

    shortDescription:
      'Une refonte ciblée pour clarifier le message, moderniser l’image et améliorer les performances de conversion sans repartir de zéro inutilement.',

    description:
      'La refonte consiste à transformer un site existant afin de le rendre plus moderne, clair et performant.',

    target: [
      'entrepreneurs ayant déjà un site',
      'sites dépassés',
      'sites qui ne reflètent plus l’activité',
    ],

    objectives: [
      'améliorer le design',
      'clarifier le contenu',
      'moderniser la technologie',
      'améliorer l’expérience utilisateur',
    ],

    includes: [
      'audit du site existant',
      'nouvelle structure',
      'redesign',
      'développement moderne',
      'optimisation performance',
      'mise en ligne',
    ],

    deliverables: [
      'audit et analyse du site',
      'nouvelle structure',
      'design modernisé',
      'développement performant',
      'mise en ligne',
    ],

    timeline: '3 à 6 semaines',

    startingPrice: '1 500 €',

    options: [
      { name: 'Migration contenu', price: '200 – 600 €' },
      { name: 'Page supplémentaire', price: '150 €' },
      { name: 'SEO avancé', price: '300 €' },
      { name: 'Blog', price: '400 €' },
    ],
  },
];
