import type { ContactPageContent } from '@/domain/contact/page';

export const contactPageContent: ContactPageContent = {
  hero: {
    eyebrow: 'Contact',
    title: 'Parlons de votre projet.',
    description:
      'Expliquez-moi votre activité, votre besoin et votre priorité. Je vous répondrai avec une première lecture claire de la meilleure approche possible.',
    highlights: [
      'Réponse sous 24h',
      'Échange sans engagement',
      'Cadrage clair',
      'Approche personnalisée',
    ],
  },

  form: {
    title: 'Décrivez votre besoin',
    description:
      'Vous n’avez pas besoin d’avoir tout cadré. Quelques éléments suffisent pour démarrer une première discussion utile.',
    fields: {
      nameLabel: 'Nom',
      emailLabel: 'Email',
      companyLabel: 'Activité / entreprise',
      serviceLabel: 'Type de projet',
      budgetLabel: 'Budget estimatif',
      messageLabel: 'Votre message',
    },
    placeholders: {
      name: 'Votre nom',
      email: 'vous@exemple.com',
      company: 'Nom de votre activité',
      service: 'Site vitrine, refonte, landing page...',
      budget: 'Ex. 1500 € à 3000 €',
      message:
        'Décrivez votre projet, votre besoin actuel, votre objectif et ce qui vous bloque aujourd’hui.',
    },
    submitLabel: 'Envoyer ma demande',
    helper:
      'Pas de spam, pas de pression. Juste un premier échange clair pour voir si nous pouvons travailler ensemble.',
  },

  sidebar: {
    eyebrow: 'Avant de commencer',
    title: 'Ce que vous pouvez me confier',
    description:
      'Je conçois des sites pensés pour clarifier votre image, mieux présenter votre offre et améliorer la qualité des prises de contact.',
    points: [
      'Création de landing page',
      'Création de site vitrine',
      'Refonte de site existant',
      'Clarification du message',
      'Amélioration de la perception et de la crédibilité',
      'Optimisation responsive et performance',
    ],
  },

  process: {
    eyebrow: 'Comment ça se passe',
    title: 'Un processus simple et rassurant.',
    description:
      'L’objectif du premier contact est de comprendre votre besoin, clarifier votre priorité et identifier la meilleure suite.',
    steps: [
      {
        id: 'message',
        title: 'Vous envoyez votre demande',
        description:
          'Vous me donnez les éléments essentiels sur votre activité, votre projet et votre besoin actuel.',
      },
      {
        id: 'reply',
        title: 'Je vous réponds rapidement',
        description:
          'Je reviens vers vous avec une première lecture du besoin et, si pertinent, une proposition d’échange.',
      },
      {
        id: 'call',
        title: 'Nous cadrons le projet',
        description:
          'Nous échangeons sur vos objectifs, votre contexte et l’offre la plus adaptée.',
      },
      {
        id: 'next-step',
        title: 'Vous avancez avec clarté',
        description:
          'Vous repartez avec une direction claire, qu’il s’agisse d’une proposition ou d’une prochaine étape.',
      },
    ],
  },
};
