import type { ContactPageContent } from '@/domain/contact/page';

export const contactPageContent: ContactPageContent = {
  hero: {
    eyebrow: 'Premier échange',
    title: 'Parlons de votre projet simplement, avec des réponses claires dès le départ.',
    description:
      'Sous 24 à 48h ouvrées, vous recevez un retour concret : niveau de fit, prochaine étape et délai réaliste selon votre priorité.',
    highlights: [
      'Réponse sous 24 à 48h',
      'Échange sans engagement',
      'Retour clair et structuré',
      'Projets sélectionnés avec attention',
    ],
  },

  guidelines: {
    eyebrow: 'Avant de me contacter',
    title: 'Quelques repères pour gagner du temps des deux côtés.',
    description:
      'Ces éléments ne sont pas là pour compliquer le contact, mais pour vous donner une réponse plus juste dès le premier échange.',
    cards: [
      {
        id: 'projects',
        title: 'Projets accompagnés',
        description:
          'Le studio travaille surtout avec des entrepreneurs, créateurs et indépendants qui veulent une présence en ligne plus crédible et plus efficace.',
        points: ['Landing page', 'Site vitrine', 'Refonte de site existant'],
      },
      {
        id: 'budget',
        title: 'Budget de départ',
        description:
          'Le budget dépend du format, du niveau d’accompagnement et de la complexité du projet.',
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
          'Votre projet n’a pas besoin d’être finalisé. Quelques informations clés suffisent pour bien cadrer le premier retour.',
        points: [
          'Une activité ou une offre identifiée',
          'Un besoin prioritaire',
          'Des références ou contenus déjà disponibles (même partiels)',
        ],
      },
      {
        id: 'fit',
        title: 'Ce qui fait un bon fit',
        description:
          'La collaboration fonctionne le mieux quand l’objectif est clair : mieux présenter votre valeur et obtenir plus de demandes qualifiées.',
        points: [
          'Vous cherchez un site utile, pas seulement esthétique',
          'Vous êtes prêt à prendre des décisions au fil du projet',
          'Vous voulez un résultat concret (contacts, rendez-vous, opportunités)',
        ],
      },
    ],
  },

  form: {
    eyebrow: 'Formulaire',
    title: 'Décrivez votre projet',
    description:
      'Quelques informations suffisent pour recevoir un premier diagnostic utile et une recommandation de prochaine étape.',
    aside: {
      eyebrow: 'Après envoi',
      title: 'Ce que vous recevez concrètement.',
      description:
        'Le formulaire sert à vous orienter rapidement, pas à rallonger le process. Vous savez vite si nous pouvons avancer ensemble.',
      cards: [
        {
          id: 'qualification',
          title: '1) Vérification de fit',
          text: 'Je vérifie l’alignement avec le périmètre du studio : besoin, budget, délai et niveau d’urgence.',
        },
        {
          id: 'response-time',
          title: '2) Retour sous 24–48h',
          text: 'Vous recevez une réponse claire : faisabilité, priorité et proposition de suite.',
        },
        {
          id: 'frictionless',
          title: '3) Option urgence',
          text: 'En cas de contrainte forte, indiquez-le : je propose une option de réponse accélérée selon disponibilités.',
        },
      ],
      noteLabel: 'Bon à savoir',
      note: 'Plus votre message est concret (contexte, objectif, échéance), plus le retour sera précis.',
    },
    helper:
      'Chaque demande est lue personnellement. Si le projet n’est pas un bon fit, vous repartez avec une orientation utile.',
    submitLabel: 'Envoyer',
    successMessage:
      'Demande envoyée. Vous recevrez un retour sous 24 à 48h ouvrées avec la suite recommandée pour votre projet.',
    errorMessage:
      'Une erreur est survenue pendant l’envoi. Vous pouvez réessayer ou écrire directement par email.',
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
        'Présentez votre activité, votre objectif principal, votre échéance et ce que vous attendez du futur site.',
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
    title: 'Vous préférez un contact direct ?',
    description:
      'Si vous avez déjà un brief ou une question ciblée, vous pouvez aussi écrire directement par email.',
    emailLabel: 'Email direct',
    email: 'bonjour@alchimiste-creations.fr',
    responseTimeLabel: 'Délai de réponse',
    responseTime: 'En général sous 24 à 48h ouvrées',
    availabilityLabel: 'Disponibilité',
    availability: 'Nouveaux projets sélectionnés avec attention',
    note: 'Même si votre besoin n’est pas parfaitement cadré, décrivez votre contexte : je vous aiderai à clarifier la suite.',
  },

  process: {
    eyebrow: 'Comment ça se passe',
    title: 'Un premier contact simple et sans friction.',
    description:
      'L’objectif est de clarifier votre situation rapidement pour décider de la suite la plus pertinente.',
    steps: [
      {
        id: 'message',
        title: 'Vous envoyez votre demande',
        description: 'Vous partagez l’essentiel : activité, besoin, contexte et priorité.',
      },
      {
        id: 'review',
        title: 'Je l’analyse',
        description: 'Je vérifie les enjeux du projet et le niveau d’accompagnement nécessaire.',
      },
      {
        id: 'call',
        title: 'Nous échangeons si le fit est bon',
        description:
          'Si le projet correspond au cadre du studio, je vous propose un appel pour cadrer la suite.',
      },
      {
        id: 'next-step',
        title: 'Vous avancez avec visibilité',
        description:
          'Vous repartez avec une direction claire : proposition, plan d’action ou recommandation utile.',
      },
    ],
  },
};
