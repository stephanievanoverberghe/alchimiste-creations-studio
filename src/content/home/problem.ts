import type { ProblemContent } from '@/domain/home/problem';

export const problemContent: ProblemContent = {
  eyebrow: 'Pourquoi certains sites ne convertissent pas',
  title: 'Avoir un site ne suffit pas : encore faut-il qu’il rassure et qu’il guide.',
  description:
    'Quand tout semble “à peu près correct” mais que rien n’est vraiment clair, le visiteur hésite… puis part sans vous contacter.',
  items: [
    {
      id: 'credibility-gap',
      title: 'La première impression n’est pas au niveau',
      consequence:
        'Un design daté ou approximatif peut affaiblir votre crédibilité, même si votre expertise est solide.',
    },
    {
      id: 'message-confusion',
      title: 'L’offre se comprend trop lentement',
      consequence:
        'Si le visiteur ne voit pas rapidement ce que vous faites et pour qui, il ne se projette pas.',
    },
    {
      id: 'conversion-friction',
      title: 'Le passage à l’action est flou',
      consequence:
        'Sans parcours clair ni CTA pertinents, les visites ne deviennent pas des demandes qualifiées.',
    },
  ],
};
