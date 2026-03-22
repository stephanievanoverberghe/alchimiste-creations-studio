import type { AboutPageContent } from '@/domain/about/page';
import { secondaryContactCtaLabel, trustCallMeta } from '@/content/site/messaging';

export const aboutPageContent: AboutPageContent = {
  hero: {
    eyebrow: 'À propos',
    title: 'Rendre votre activité plus lisible, plus crédible et plus facile à choisir.',
    description:
      'Alchimiste Créations accompagne les entrepreneurs, créateurs et indépendants qui veulent une présence en ligne alignée avec la qualité réelle de leur travail.',
    highlights: [
      'Design soigné',
      'Message clarifié',
      'Expérience fluide',
      'Approche orientée contact',
    ],
    aside: {
      eyebrow: 'Studio indépendant',
      title: 'Une approche complète, avec un seul interlocuteur.',
      description:
        'Chaque projet combine cadrage, design et développement pour produire un site cohérent dans le fond comme dans la forme.',
      items: [
        {
          id: 'design',
          label: 'Design',
          value: 'Sobre, élégant, rassurant',
        },
        {
          id: 'message',
          label: 'Message',
          value: 'Clair et orienté client',
        },
        {
          id: 'experience',
          label: 'Expérience',
          value: 'Fluide sur tous les écrans',
        },
        {
          id: 'goal',
          label: 'Objectif',
          value: 'Obtenir plus de demandes qualifiées',
        },
      ],
    },
  },

  intro: {
    eyebrow: 'Présentation',
    title: 'Une vision simple : un site doit aider à décider.',
    paragraphs: [
      'Je crée des sites pour les activités qui ont besoin d’être mieux comprises et mieux perçues.',
      'Le travail ne se limite pas à “faire joli” : il s’agit d’organiser le message, de structurer l’expérience et de donner un cadre clair à la décision.',
      'Chaque projet est pensé comme un outil commercial : crédible, utile et durable.',
    ],
  },

  vision: {
    eyebrow: 'Vision',
    title: 'Un site n’est pas une simple vitrine : c’est un levier de confiance.',
    description:
      'En quelques secondes, vos visiteurs jugent votre sérieux, la clarté de votre offre et la facilité à travailler avec vous. Le site doit servir cette première décision.',
    points: [
      {
        id: 'clarity',
        title: 'Clarifier avant de styliser',
        description: 'Sans message clair, même un beau design ne suffit pas à convaincre.',
      },
      {
        id: 'perception',
        title: 'Soigner la perception',
        description:
          'Le détail visuel, la hiérarchie et le ton construisent la sensation de qualité.',
      },
      {
        id: 'utility',
        title: 'Rester utile et concret',
        description:
          'Le vrai objectif est d’aider vos prospects à comprendre, vous faire confiance et vous contacter.',
      },
    ],
  },

  values: {
    eyebrow: 'Valeurs',
    title: 'Une manière de travailler claire et exigeante.',
    description:
      'Chaque projet suit les mêmes principes : pertinence, lisibilité et cohérence, sans complexité inutile.',
    items: [
      {
        id: 'coherence',
        title: 'Cohérence',
        description: 'Le fond, la forme et le parcours doivent raconter la même chose.',
      },
      {
        id: 'clarity',
        title: 'Clarté',
        description: 'Un site compréhensible inspire confiance et accélère la décision.',
      },
      {
        id: 'quality',
        title: 'Exigence',
        description: 'La qualité perçue se joue dans les détails visibles et invisibles.',
      },
      {
        id: 'simplicity',
        title: 'Simplicité utile',
        description: 'Éviter le superflu pour renforcer ce qui compte vraiment.',
      },
    ],
  },

  journey: {
    eyebrow: 'Parcours',
    title: 'Du regard créatif à une méthode orientée résultats.',
    description:
      'Le studio s’est construit autour d’un même fil conducteur : mieux présenter les activités qui apportent une vraie valeur.',
    steps: [
      {
        id: 'observe',
        title: 'Observer',
        description: 'Identifier ce qui crée du doute et ce qui freine la prise de contact.',
      },
      {
        id: 'design',
        title: 'Concevoir',
        description: 'Créer une expérience lisible, cohérente et alignée avec votre niveau.',
      },
      {
        id: 'build',
        title: 'Développer',
        description: 'Livrer un site fiable, performant et prêt à soutenir votre activité.',
      },
    ],
  },

  finalCta: {
    eyebrow: 'Démarrer un projet',
    title: 'Vous voulez une présence en ligne plus juste et plus convaincante ?',
    description: 'Discutons de votre contexte et de la meilleure façon d’avancer.',
    buttonLabel: secondaryContactCtaLabel,
    buttonHref: '/contact',
    meta: trustCallMeta,
  },
};
