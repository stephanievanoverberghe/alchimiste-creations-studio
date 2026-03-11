import type { ProcessContent } from '@/domain/home/process';

export const processContent: ProcessContent = {
  eyebrow: 'Process',
  title: 'Une méthode claire pour transformer une idée en présence digitale aboutie.',
  description:
    'Chaque projet suit un cadre précis pour garder de la clarté, avancer sereinement et construire un site cohérent, crédible et durable.',
  steps: [
    {
      id: 'discovery',
      number: '01',
      title: 'Découverte',
      description:
        'Nous clarifions votre activité, vos objectifs, votre positionnement et ce que votre site doit réellement soutenir dans votre développement.',
    },
    {
      id: 'strategy',
      number: '02',
      title: 'Stratégie',
      description:
        'Nous structurons le message, les priorités, les contenus et l’architecture pour poser des bases solides avant toute création.',
    },
    {
      id: 'design',
      number: '03',
      title: 'Design',
      description:
        'Je conçois une direction visuelle claire, élégante et cohérente avec votre univers pour renforcer la perception de qualité.',
    },
    {
      id: 'development',
      number: '04',
      title: 'Développement',
      description:
        'Le site est intégré avec soin dans une logique moderne, performante et responsive pour garantir une expérience fluide sur tous les écrans.',
    },
    {
      id: 'optimization',
      number: '05',
      title: 'Optimisation',
      description:
        'Nous ajustons les derniers détails pour améliorer la lisibilité, la cohérence et l’efficacité globale avant la mise en ligne.',
    },
  ],
};
