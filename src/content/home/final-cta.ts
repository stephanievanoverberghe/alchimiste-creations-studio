import type { FinalCtaContent } from '@/domain/home/final-cta';
import { primaryContactCtaLabel, trustCallMeta } from '@/content/site/messaging';

export const finalCtaContent: FinalCtaContent = {
  eyebrow: 'Démarrer un projet',

  title: 'Prêt à transformer votre site en levier de crédibilité et de conversion ?',

  description:
    'En 30 minutes, nous cadrons vos objectifs, votre priorité business et la meilleure approche pour créer un site clair, crédible et efficace.',

  buttonLabel: primaryContactCtaLabel,

  buttonHref: '/contact',

  meta: trustCallMeta,
};
