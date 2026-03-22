import type { ProcessContent } from '@/domain/home/process';

export const processContent: ProcessContent = {
  eyebrow: 'Méthode',
  title: 'Un déroulé simple pour avancer sans zone floue.',
  description:
    'Chaque étape a un rôle précis : clarifier, concevoir, produire, puis livrer un site prêt à soutenir votre activité.',
  steps: [
    {
      id: 'discovery',
      number: '01',
      title: 'Cadrage',
      description:
        'Nous clarifions vos priorités, votre cible et votre objectif principal pour éviter les décisions floues.',
    },
    {
      id: 'strategy',
      number: '02',
      title: 'Structure',
      description:
        'Nous définissons les pages clés, l’ordre des messages et le parcours le plus naturel vers le contact.',
    },
    {
      id: 'design',
      number: '03',
      title: 'Design',
      description:
        'Je crée une direction visuelle cohérente avec votre positionnement et votre niveau d’exigence.',
    },
    {
      id: 'development',
      number: '04',
      title: 'Développement',
      description:
        'Le site est développé pour rester fluide, lisible et fiable sur tous les écrans.',
    },
    {
      id: 'optimization',
      number: '05',
      title: 'Optimisation',
      description:
        'Nous ajustons les détails qui renforcent la clarté, la confiance et l’efficacité commerciale.',
    },
    {
      id: 'online',
      number: '06',
      title: 'Mise en ligne',
      description:
        'Vous lancez un site prêt à être utilisé, avec une base propre pour évoluer ensuite.',
    },
  ],
};
