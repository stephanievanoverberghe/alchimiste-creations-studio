import type { PortfolioPageContent } from '@/domain/portfolio/page';
import {
  primaryContactCtaLabel,
  secondaryContactCtaLabel,
  trustCallMeta,
} from '@/content/site/messaging';

export const portfolioPageContent: PortfolioPageContent = {
  hero: {
    eyebrow: 'Portfolio',
    title: 'Des projets pensés pour clarifier une activité et renforcer sa crédibilité.',
    description:
      'Chaque projet présenté ici montre une même intention : structurer le message, soigner la perception et créer une expérience plus claire, plus crédible et plus engageante.',
    primaryCta: {
      label: primaryContactCtaLabel,
      href: '/contact',
    },
    secondaryCta: {
      label: secondaryContactCtaLabel,
      href: '/services',
    },
    highlights: [
      'Clarté du message',
      'Hiérarchie visuelle',
      'Perception premium',
      'Expérience utilisateur',
    ],
  },

  featuredProject: {
    eyebrow: 'Projet en vedette',
    title: 'Un projet mis en avant pour montrer la démarche plus en profondeur.',
    description:
      'Au-delà du rendu visuel, chaque projet est pensé comme une réponse à un problème de lisibilité, de perception ou de positionnement.',
  },

  projectsGrid: {
    eyebrow: 'Autres projets',
    title: 'Une sélection de projets pour montrer différentes approches.',
    description:
      'Sites vitrines, portfolios, expériences plus éditoriales ou immersives : chaque projet reflète une intention claire et un niveau de finition assumé.',
  },

  approach: {
    eyebrow: 'Approche',
    title: 'Chaque projet suit la même exigence de clarté, de cohérence et de perception.',
    description:
      'L’objectif n’est pas seulement de produire une belle interface, mais de construire une présence en ligne lisible, crédible et adaptée au projet.',
    items: [
      {
        id: 'message',
        title: 'Clarifier le message',
        text: 'Faire comprendre rapidement l’activité, l’offre et la valeur apportée.',
      },
      {
        id: 'hierarchy',
        title: 'Structurer la lecture',
        text: 'Créer un parcours visuel fluide, lisible et orienté vers l’essentiel.',
      },
      {
        id: 'perception',
        title: 'Renforcer la perception',
        text: 'Donner au projet une image plus cohérente, plus crédible et plus premium.',
      },
    ],
  },

  finalCta: {
    eyebrow: 'Votre projet',
    title: 'Vous voulez un site qui donne une impression plus claire et plus professionnelle ?',
    description:
      'Nous pouvons construire une présence en ligne pensée pour mieux présenter votre activité et inspirer confiance dès les premières secondes.',
    buttonLabel: primaryContactCtaLabel,
    buttonHref: '/contact',
    meta: trustCallMeta,
  },
};
