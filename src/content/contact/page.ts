import type { ContactPageContent } from '@/domain/contact/page';

export const contactPageContent: ContactPageContent = {
  hero: {
    eyebrow: 'Premier échange',
    title: 'Parlons de votre projet et de la meilleure prochaine étape, sans perdre de temps.',
    description:
      'Vous recevez un premier retour sous 24 à 48h ouvrées avec : niveau de fit, proposition de suite et délai réaliste selon votre priorité.',
    highlights: [
      'Réponse sous 24 à 48h',
      'Échange sans engagement',
      'Approche claire et structurée',
      'Projets sélectionnés avec attention',
    ],
  },

  guidelines: {
    eyebrow: 'Avant de me contacter',
    title: 'Quelques repères pour cadrer le projet dès le départ.',
    description:
      'Le but n’est pas de compliquer la prise de contact, mais de créer un premier échange plus utile, plus fluide et mieux qualifié.',
    cards: [
      {
        id: 'projects',
        title: 'Types de projets accompagnés',
        description:
          'J’accompagne principalement les entrepreneurs, indépendants et créateurs qui ont besoin d’une présence en ligne plus claire et plus crédible.',
        points: ['Landing page', 'Site vitrine', 'Refonte de site existant'],
      },
      {
        id: 'budget',
        title: 'Budget de départ',
        description:
          'Les projets sont cadrés selon le niveau d’accompagnement, le format du site et la complexité du besoin.',
        points: [
          'Landing page : à partir de 900 €',
          'Site vitrine : à partir de 1 800 €',
          'Refonte : à partir de 1 500 €',
        ],
      },
      {
        id: 'readiness',
        title: 'Ce qu’il est utile d’avoir',
        description:
          'Votre projet n’a pas besoin d’être parfaitement défini, mais certains éléments rendent l’échange plus pertinent.',
        points: [
          'Une activité déjà posée',
          'Un besoin identifié',
          'Quelques idées, contenus ou références',
        ],
      },
      {
        id: 'fit',
        title: 'Ce qui fait un bon fit',
        description:
          'Je peux vraiment vous aider si votre priorité est business : mieux vous positionner, rassurer plus vite et augmenter les demandes qualifiées.',
        points: [
          'Vous cherchez un site utile, pas juste esthétique',
          'Vous êtes prêt à valider des décisions rapidement',
          'Vous visez un impact mesurable (contacts, rendez-vous, ventes)',
        ],
      },
    ],
  },

  form: {
    eyebrow: 'Formulaire',
    title: 'Décrivez votre projet',
    description:
      'Quelques informations suffisent pour obtenir un retour utile : faisabilité, fit, ordre de grandeur et prochaine étape recommandée.',
    aside: {
      eyebrow: 'Premier échange',
      title: 'Ce que vous obtenez après envoi.',
      description:
        'Le formulaire sert à vous répondre concrètement, pas à rallonger le process. Vous savez rapidement si l’on peut avancer ensemble, et comment.',
      cards: [
        {
          id: 'qualification',
          title: '1) Vérification de fit',
          text: 'Je vérifie si le projet correspond au périmètre du studio (type de besoin, budget, délai, niveau d’urgence).',
        },
        {
          id: 'response-time',
          title: '2) Retour sous 24–48h',
          text: 'Vous recevez un retour clair : faisabilité, niveau de priorité et proposition de suite (appel, cadrage ou orientation).',
        },
        {
          id: 'frictionless',
          title: '3) Option urgence',
          text: 'Si votre besoin est urgent, indiquez-le : je propose une alternative rapide (créneau court ou réponse email priorisée) selon disponibilités.',
        },
      ],
      noteLabel: 'Bon à savoir',
      note: 'Un message précis sur votre contexte, votre objectif et votre échéance permet un diagnostic plus fiable dès le premier retour.',
    },
    helper:
      'Votre demande est lue personnellement. Si ce n’est pas un bon fit, vous repartez quand même avec une recommandation utile.',
    submitLabel: 'Recevoir mon premier retour',
    successMessage:
      'Demande envoyée. Vous recevrez un retour sous 24 à 48h ouvrées avec la meilleure suite possible pour votre projet.',
    errorMessage:
      'Une erreur est survenue pendant l’envoi. Vous pouvez réessayer ou m’écrire directement.',
    fields: {
      firstNameLabel: 'Prénom',
      lastNameLabel: 'Nom',
      emailLabel: 'Email',
      projectTypeLabel: 'Type de projet',
      budgetLabel: 'Budget estimé',
      timelineLabel: 'Délai souhaité',
      websiteLabel: 'Site existant (optionnel)',
      messageLabel: 'Votre message',
    },
    placeholders: {
      firstName: 'Votre prénom',
      lastName: 'Votre nom',
      email: 'vous@exemple.com',
      website: 'www.votresite.fr',
      message:
        'Expliquez votre activité, votre besoin, votre échéance, vos contraintes et le résultat attendu.',
    },
    options: {
      projectTypes: [],
      budgets: [
        { value: 'less-than-1000', label: 'Moins de 1 000 €' },
        { value: '1000-2000', label: '1 000 € à 2 000 €' },
        { value: '2000-4000', label: '2 000 € à 4 000 €' },
        { value: '4000-plus', label: '4 000 € et plus' },
        { value: 'undecided', label: 'À définir' },
      ],
      timelines: [
        { value: 'asap', label: 'Dès que possible' },
        { value: 'less-than-1-month', label: 'Moins d’un mois' },
        { value: '1-to-2-months', label: '1 à 2 mois' },
        { value: '2-to-3-months', label: '2 à 3 mois' },
        { value: 'flexible', label: 'Flexible' },
      ],
    },
    emptyOptionLabel: 'Sélectionnez une option',
  },

  alternativeContact: {
    eyebrow: 'Autre possibilité',
    title: 'Vous préférez un contact plus direct ?',
    description:
      'Si vous avez déjà un brief clair ou une question rapide, vous pouvez aussi me contacter directement par email.',
    emailLabel: 'Email direct',
    email: 'bonjour@alchimiste-creations.fr',
    responseTimeLabel: 'Délai de réponse',
    responseTime: 'En général sous 24 à 48h ouvrées',
    availabilityLabel: 'Disponibilité',
    availability: 'Nouveaux projets sélectionnés avec attention',
    note: 'Même si tout n’est pas encore parfaitement cadré, vous pouvez écrire. L’important est d’expliquer votre contexte et votre besoin.',
  },

  process: {
    eyebrow: 'Comment ça se passe',
    title: 'Un processus simple, fluide et rassurant.',
    description:
      'Le premier contact sert à comprendre votre besoin, clarifier les priorités et identifier la meilleure suite possible.',
    steps: [
      {
        id: 'message',
        title: 'Vous envoyez votre demande',
        description:
          'Vous partagez les éléments essentiels sur votre activité, votre besoin et le contexte du projet.',
      },
      {
        id: 'review',
        title: 'Je fais une première lecture',
        description:
          'J’analyse la demande pour comprendre les enjeux, la maturité du projet et le niveau d’accompagnement attendu.',
      },
      {
        id: 'call',
        title: 'Nous échangeons si le fit est bon',
        description:
          'Si le projet correspond bien au cadre du studio, je vous propose un échange pour approfondir.',
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
