import { Service } from '@/domain/services/types';

const servicesData: Service[] = [
  {
    slug: 'landing-page',
    title: 'Landing Page',

    shortDescription:
      'Une page stratégique pour présenter une offre clairement et amener vos visiteurs vers une action précise.',

    description:
      'Un format ciblé pour lancer une offre, une campagne ou un service avec un message clair et une conversion directe.',

    target: [
      'entrepreneurs qui lancent une offre',
      'coachs et thérapeutes',
      'créateurs et indépendants',
      'projets qui ont besoin d’une page unique efficace',
    ],

    objectives: [
      'présenter une offre sans dispersion',
      'expliquer rapidement la valeur proposée',
      'rassurer avec les éléments clés',
      'encourager la prise de contact',
    ],

    includes: [
      '1 page complète',
      'structure éditoriale',
      'design sur mesure',
      'développement responsive',
      'formulaire de contact',
      'optimisation performance',
      'mise en ligne',
    ],

    possibleContent: [
      'hero orienté promesse',
      'présentation de l’offre',
      'points de différenciation',
      'preuves de confiance',
      'présentation du porteur de projet',
      'appel à l’action principal',
      'formulaire de contact',
    ],

    deliverables: [
      'structure de page validée',
      'maquette finale',
      'développement intégré',
      'optimisations de base',
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

    highlightLabel: 'Idéal pour démarrer',
    order: 1,
  },

  {
    slug: 'site-vitrine',
    title: 'Site vitrine',

    shortDescription:
      'Un site complet pour présenter votre activité, vos services et votre différence avec une image professionnelle.',

    description:
      'Le format recommandé pour structurer durablement votre présence en ligne et soutenir votre développement commercial.',

    target: ['entrepreneurs', 'coachs', 'thérapeutes', 'artistes', 'photographes', 'indépendants'],

    objectives: [
      'présenter clairement votre activité',
      'rendre vos services faciles à comprendre',
      'renforcer la confiance grâce à une image cohérente',
      'faciliter la prise de contact',
    ],

    includes: [
      'jusqu’à 5 pages',
      'structure du site',
      'design sur mesure',
      'développement responsive',
      'optimisation performance',
      'formulaire de contact',
      'SEO de base',
      'mise en ligne',
    ],

    deliverables: [
      'arborescence validée',
      'maquettes des pages clés',
      'développement complet',
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

    highlightLabel: 'Le plus demandé',
    featured: true,
    order: 2,
  },

  {
    slug: 'refonte-site',
    title: 'Refonte de site',

    shortDescription:
      'Une refonte ciblée pour moderniser l’image, clarifier le message et retrouver un site qui soutient vraiment votre activité.',

    description:
      'Nous conservons ce qui mérite de l’être et améliorons le reste pour obtenir un site plus cohérent, plus lisible et plus convaincant.',

    target: [
      'entrepreneurs qui ont déjà un site',
      'sites devenus datés',
      'projets dont le site ne reflète plus le niveau réel',
    ],

    objectives: [
      'remettre à niveau la perception globale',
      'clarifier les contenus stratégiques',
      'améliorer l’expérience utilisateur',
      'renforcer la conversion',
    ],

    includes: [
      'audit du site existant',
      'nouvelle structure priorisée',
      'redesign ciblé',
      'développement moderne',
      'optimisation performance',
      'mise en ligne',
    ],

    deliverables: [
      'audit et recommandations',
      'nouveau plan de pages',
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

    highlightLabel: 'Moderniser l’existant',
    order: 3,
  },
];

export const services = [...servicesData].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
