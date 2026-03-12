import type { ProcessContent } from '@/domain/home/process';

export const processContent: ProcessContent = {
  eyebrow: 'Process',
  title: 'Une méthode claire pour passer d’une idée à un site qui convertit.',
  description:
    'Chaque étape est pensée pour vous faire avancer avec visibilité : objectifs clarifiés, décisions validées et livrables concrets à chaque phase.',
  steps: [
    {
      id: 'discovery',
      number: '01',
      title: 'Cadrage',
      description:
        'Nous clarifions votre activité, vos objectifs et votre cible afin de poser des bases solides avant toute conception.',
    },
    {
      id: 'strategy',
      number: '02',
      title: 'Structure',
      description:
        'Nous organisons le message, les pages clés et le parcours utilisateur pour construire une base claire et cohérente.',
    },
    {
      id: 'design',
      number: '03',
      title: 'Design',
      description:
        'Je conçois une interface premium alignée avec votre positionnement afin de renforcer la perception de qualité.',
    },
    {
      id: 'development',
      number: '04',
      title: 'Développement',
      description:
        'Le site est développé avec Next.js dans une logique performante, responsive et durable.',
    },
    {
      id: 'optimization',
      number: '05',
      title: 'Optimisation',
      description:
        'Nous affinons les derniers détails pour améliorer la lisibilité, la cohérence et l’efficacité globale.',
    },
    {
      id: 'online',
      number: '06',
      title: 'Mise en ligne',
      description:
        'Une fois le site validé, je prends en charge la mise en ligne afin qu’il soit accessible à vos visiteurs dans les meilleures conditions.',
    },
  ],
};
