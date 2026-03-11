import { Layers3, MonitorSmartphone, RefreshCcw } from 'lucide-react';

import type { ServicesPreviewContent } from '@/domain/home/services-preview';

export const servicesPreviewContent: ServicesPreviewContent = {
  eyebrow: 'Offres',
  title: 'Trois formats clairs pour créer, structurer ou faire évoluer votre présence en ligne.',
  description:
    'Chaque offre répond à un besoin précis : lancer une activité, présenter un univers complet ou moderniser un site existant pour le rendre plus crédible, plus clair et plus performant.',
  items: [
    {
      id: 'landing-page',
      title: 'Landing Page',
      description:
        'Une page unique pensée pour présenter une offre, un service ou un projet avec clarté et efficacité.',
      idealFor:
        'Idéal pour lancer une activité, mettre en avant une offre précise ou créer une première présence en ligne professionnelle.',
      icon: Layers3,
      href: '/services#landing-page',
      ctaLabel: "Découvrir l'offre",
    },
    {
      id: 'site-vitrine',
      title: 'Site vitrine',
      description:
        'Un site complet pour présenter votre activité, vos services et votre univers avec une image plus professionnelle.',
      idealFor:
        'Idéal pour les entrepreneurs, coachs, thérapeutes, artistes, photographes et indépendants qui veulent une présence en ligne crédible.',
      icon: MonitorSmartphone,
      href: '/services#site-vitrine',
      ctaLabel: 'Voir le détail',
    },
    {
      id: 'refonte-site',
      title: 'Refonte de site',
      description:
        'Une refonte pensée pour clarifier votre message, moderniser votre image et améliorer l’efficacité de votre site.',
      idealFor:
        'Idéal si votre site est daté, peu lisible ou ne reflète plus la qualité réelle de votre activité.',
      icon: RefreshCcw,
      href: '/services#refonte-site',
      ctaLabel: 'Explorer la refonte',
    },
  ],
};
