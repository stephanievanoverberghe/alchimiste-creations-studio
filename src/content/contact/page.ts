import type { ContactPageContent } from '@/domain/contact/page';

export const contactPageContent: ContactPageContent = {
  hero: {
    eyebrow: 'Premier échange',
    title: 'Parlons d’un projet clair, sérieux et pensé pour convertir.',
    description:
      'Décrivez votre activité, votre besoin et votre contexte. Je vous réponds avec un premier retour clair pour voir si une collaboration a du sens.',
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
          'Les meilleures collaborations commencent quand la clarté, la perception et la qualité du site sont de vraies priorités.',
        points: [
          'Vous cherchez plus qu’un site “joli”',
          'Vous voulez mieux présenter votre offre',
          'Vous accordez de l’importance au détail',
        ],
      },
    ],
  },

  form: {
    eyebrow: 'Formulaire',
    title: 'Décrivez votre projet',
    description:
      'Quelques informations bien choisies suffisent pour préparer un premier échange utile. Vous pouvez rester simple et direct.',
    aside: {
      eyebrow: 'Premier échange',
      title: 'Un cadre simple, clair et sérieux.',
      description:
        'Quelques informations bien choisies suffisent pour préparer un échange utile. Le but n’est pas de vous faire remplir un long dossier, mais de comprendre le projet avec justesse.',
      cards: [
        {
          id: 'qualification',
          title: 'Demande qualifiée',
          text: 'Le formulaire aide à cadrer le besoin, le budget et le niveau de maturité du projet.',
        },
        {
          id: 'response-time',
          title: 'Réponse rapide',
          text: 'Je reviens généralement vers vous sous 24 à 48h ouvrées avec une première lecture claire.',
        },
        {
          id: 'frictionless',
          title: 'Échange sans friction',
          text: 'Vous pouvez rester simple. L’important est surtout d’expliquer votre contexte et votre objectif.',
        },
      ],
      noteLabel: 'Bon à savoir',
      note: 'Plus votre message est précis sur votre activité, votre besoin actuel et ce que vous cherchez à améliorer, plus ma réponse pourra être utile dès le premier retour.',
    },
    helper:
      'Pas de spam, pas de pression. Juste un premier échange clair pour voir si votre projet entre dans le bon cadre.',
    submitLabel: 'Envoyer ma demande',
    successMessage:
      'Votre demande a bien été envoyée. Je reviens vers vous rapidement avec une première lecture du projet.',
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
        'Expliquez votre activité, votre besoin actuel, votre objectif et ce que vous attendez du projet.',
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
