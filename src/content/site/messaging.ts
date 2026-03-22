export const primaryContactCtaLabel = 'Réserver un appel découverte';
export const secondaryContactCtaLabel = 'Parler de votre projet';

export const trustCallMeta = 'Sans engagement • Réponse sous 24h • Échange de 30 minutes';

export const coreValuePromise =
  'Un site qui explique clairement votre offre, inspire confiance dès les premières secondes et transforme vos visites en prises de contact qualifiées.';

export const messagingCore = {
  audience:
    'Entrepreneurs, créateurs et indépendants qui veulent une présence en ligne à la hauteur de leur travail.',
  transformation: {
    before: 'Une présence floue, peu convaincante ou difficile à comprendre.',
    after:
      'Un site clair, crédible et structuré pour faciliter la décision et donner envie de vous contacter.',
  },
  differentiators: [
    'Un interlocuteur unique du cadrage à la mise en ligne',
    'Un équilibre entre clarté du message, design et résultat business',
    'Des offres cadrées avec périmètre, délai et priorité explicites',
  ],
  reassurance: [
    'Méthode claire à chaque étape',
    'Décisions guidées pour éviter les allers-retours inutiles',
    'Approche orientée lisibilité, confiance et conversion',
  ],
  ctas: {
    primary: primaryContactCtaLabel,
    secondary: secondaryContactCtaLabel,
    portfolio: 'Voir des projets',
  },
} as const;

export const microcopy = {
  transitionToContact: 'Vous voulez savoir quelle offre est la plus adaptée à votre situation ? ',
  transitionToServices: 'Choisissez le format qui correspond à votre priorité actuelle.',
  reassuranceShort: 'Vous repartez avec une direction claire, même sans engagement.',
} as const;
