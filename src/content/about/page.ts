import type { AboutPageContent } from '@/domain/about/page';
import { secondaryContactCtaLabel, trustCallMeta } from '@/content/site/messaging';

export const aboutPageContent: AboutPageContent = {
  hero: {
    eyebrow: 'À propos',
    title: 'Créer des sites qui rendent une activité plus claire, plus crédible et plus désirable.',
    description:
      'Alchimiste Créations est un studio web indépendant pensé pour les entrepreneurs, créateurs et indépendants qui veulent une présence en ligne plus juste, plus structurée et plus convaincante.',
    highlights: [
      'Design premium',
      'Clarté du message',
      'Approche orientée conversion',
      'Développement moderne',
    ],
    aside: {
      eyebrow: 'Studio indépendant',
      title: 'Une approche pensée pour mieux traduire la qualité réelle d’une activité.',
      description:
        'Chaque projet cherche un point d’équilibre entre perception, lisibilité, structure et expérience utilisateur.',
      items: [
        {
          id: 'design',
          label: 'Design',
          value: 'Premium et lisible',
        },
        {
          id: 'message',
          label: 'Message',
          value: 'Plus clair et plus juste',
        },
        {
          id: 'experience',
          label: 'Expérience',
          value: 'Fluide et cohérente',
        },
        {
          id: 'goal',
          label: 'Finalité',
          value: 'Mieux convaincre',
        },
      ],
    },
  },

  intro: {
    eyebrow: 'Présentation',
    title: 'Une approche à la croisée du design, du message et de l’expérience.',
    paragraphs: [
      'Je conçois des sites web pour les activités qui ont besoin d’être mieux perçues, mieux comprises et mieux présentées.',
      'Mon travail ne consiste pas seulement à produire une interface esthétique. Il consiste à clarifier une offre, structurer une expérience et construire une présence digitale cohérente avec le niveau réel de l’activité.',
      'Chaque projet est pensé comme un outil de perception, de crédibilité et de développement.',
    ],
  },

  vision: {
    eyebrow: 'Vision',
    title: 'Un site web ne devrait pas seulement exister. Il devrait soutenir l’activité.',
    description:
      'Un site n’est pas une vitrine figée. C’est un point de contact stratégique. Il influence la manière dont une activité est perçue, comprise et jugée dès les premières secondes.',
    points: [
      {
        id: 'clarity',
        title: 'Clarifier avant de décorer',
        description:
          'Un beau site qui reste flou ne sert pas l’activité. La clarté du message passe avant l’effet visuel.',
      },
      {
        id: 'perception',
        title: 'Travailler la valeur perçue',
        description:
          'Le design, la structure et le rythme visuel doivent renforcer immédiatement la sensation de qualité.',
      },
      {
        id: 'utility',
        title: 'Créer un outil utile',
        description:
          'L’objectif final n’est pas d’avoir un site “joli”, mais un site qui accompagne une vraie intention business.',
      },
    ],
  },

  values: {
    eyebrow: 'Valeurs',
    title: 'Une manière de travailler exigeante, lisible et cohérente.',
    description:
      'Chaque projet repose sur des principes simples : ne pas surcharger, ne pas compliquer inutilement, et toujours chercher le point juste entre élégance et efficacité.',
    items: [
      {
        id: 'coherence',
        title: 'Cohérence',
        description:
          'L’image, le message et la structure doivent raconter la même chose sans contradiction.',
      },
      {
        id: 'clarity',
        title: 'Clarté',
        description:
          'Une activité bien présentée se comprend plus vite, rassure davantage et convertit mieux.',
      },
      {
        id: 'quality',
        title: 'Exigence',
        description:
          'Le détail compte. La perception d’un site se joue souvent dans ce qui semble presque invisible.',
      },
      {
        id: 'simplicity',
        title: 'Simplicité utile',
        description:
          'Le but n’est pas d’en faire plus. Le but est de faire ce qu’il faut, au bon endroit, avec justesse.',
      },
    ],
  },

  journey: {
    eyebrow: 'Parcours',
    title: 'Une évolution construite autour du regard, de la structure et du numérique.',
    description:
      'Mon parcours m’a amenée à développer une sensibilité forte à la fois pour l’esthétique, l’organisation de l’information et la qualité d’exécution.',
    steps: [
      {
        id: 'observe',
        title: 'Observer',
        description:
          'Comprendre ce qui bloque la perception d’une activité, ce qui crée du doute et ce qui freine la prise de contact.',
      },
      {
        id: 'design',
        title: 'Concevoir',
        description:
          'Imaginer des interfaces plus lisibles, plus cohérentes et plus alignées avec le niveau réel de l’offre.',
      },
      {
        id: 'build',
        title: 'Développer',
        description:
          'Transformer cette intention en un site moderne, responsive et durable, capable de soutenir l’activité dans le temps.',
      },
    ],
  },

  finalCta: {
    eyebrow: 'Démarrer un projet',
    title: 'Vous souhaitez une présence en ligne plus claire et plus crédible ?',
    description:
      'Nous pouvons construire un site pensé pour mieux traduire la qualité de votre activité.',
    buttonLabel: secondaryContactCtaLabel,
    buttonHref: '/contact',
    meta: trustCallMeta,
  },
};
