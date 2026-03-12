import type { ProblemContent } from '@/domain/home/problem';

export const problemContent: ProblemContent = {
  eyebrow: 'Ce qui freine souvent la conversion',
  title: 'Un site peut desservir une activité au lieu de la valoriser.',
  description:
    'Quand le message manque de clarté, que l’image semble datée ou que la structure n’accompagne pas la décision, le visiteur doute avant même de vous contacter.',
  items: [
    {
      id: 'credibility-gap',
      title: 'Crédibilité fragile',
      consequence:
        'Un site daté ou peu soigné crée du doute, même lorsque votre expertise est réelle.',
    },
    {
      id: 'message-confusion',
      title: 'Message difficile à comprendre',
      consequence:
        'Vos visiteurs ne comprennent pas assez vite ce que vous faites, pour qui vous travaillez et pourquoi vous choisir.',
    },
    {
      id: 'conversion-friction',
      title: 'Peu de demandes qualifiées',
      consequence:
        'Sans parcours clair ni CTA stratégiques, le trafic ne se transforme pas en opportunités concrètes.',
    },
  ],
};
