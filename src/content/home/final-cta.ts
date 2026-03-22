import type { FinalCtaContent } from '@/domain/home/final-cta';
import { primaryContactCtaLabel, trustCallMeta } from '@/content/site/messaging';

export const finalCtaContent: FinalCtaContent = {
  eyebrow: 'Démarrer un projet',

  title: 'Vous voulez un site qui donne confiance et génère de vrais contacts ?',

  description:
    'En 30 minutes, nous clarifions vos priorités et la meilleure approche pour lancer un site utile, lisible et convaincant.',

  buttonLabel: primaryContactCtaLabel,

  buttonHref: '/contact',

  meta: trustCallMeta,
};
