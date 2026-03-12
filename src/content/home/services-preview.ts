import { Layers3, MonitorSmartphone, RefreshCcw } from 'lucide-react';

import type { ServicesPreviewContent } from '@/domain/home/services-preview';

export const servicesPreviewContent: ServicesPreviewContent = {
  eyebrow: 'Offres',
  title: 'Trois offres pour lancer, structurer ou accélérer votre présence en ligne.',
  description:
    'Chaque format répond à un niveau de maturité précis. Vous choisissez l’offre la plus utile selon votre contexte actuel et vos objectifs de conversion.',
  items: [
    {
      id: 'landing-page',
      title: 'Landing Page',
      description:
        'Une page stratégique pour vendre une offre claire avec un message lisible et un appel à l’action central.',
      idealFor:
        'À choisir si vous lancez une offre unique ou une campagne et que vous avez besoin d’un support rapide à activer.',
      icon: Layers3,
      href: '/services#landing-page',
      ctaLabel: "Découvrir l'offre",
    },
    {
      id: 'site-vitrine',
      title: 'Site vitrine',
      description:
        'Un site complet pour présenter votre activité, vos services et votre différence avec une structure qui inspire confiance.',
      idealFor:
        'À choisir si votre activité est installée et que vous avez besoin d’un site crédible pour convertir sur la durée.',
      icon: MonitorSmartphone,
      href: '/services#site-vitrine',
      ctaLabel: 'Voir le détail',
    },
    {
      id: 'refonte-site',
      title: 'Refonte de site',
      description:
        'Une refonte ciblée pour clarifier le message, moderniser l’image et améliorer les performances de conversion.',
      idealFor:
        'À choisir si votre site existe déjà mais ne reflète plus votre niveau de qualité ou ne génère pas assez de demandes.',
      icon: RefreshCcw,
      href: '/services#refonte-site',
      ctaLabel: 'Explorer la refonte',
    },
  ],
};
