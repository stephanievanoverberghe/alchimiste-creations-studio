import { Layers3, MonitorSmartphone, RefreshCcw } from 'lucide-react';

import type { ServicesPreviewContent } from '@/domain/home/services-preview';

export const servicesPreviewContent: ServicesPreviewContent = {
  eyebrow: 'Offres',
  title: 'Trois offres pour lancer, structurer ou accélérer votre présence en ligne.',
  description:
    'Chaque format répond à un besoin précis. Vous choisissez l’offre la plus adaptée à votre niveau de maturité, à votre objectif et à votre priorité business.',
  items: [
    {
      id: 'landing-page',
      title: 'Landing Page',
      description:
        'Une page stratégique pour présenter une offre unique, capter l’attention rapidement et diriger l’utilisateur vers une action claire.',
      idealFor:
        'Idéale si vous lancez une offre, une campagne ou un service précis et que vous avez besoin d’une page claire à activer rapidement.',
      timeline: '2 à 3 semaines',
      startingPrice: 'À partir de 900€',
      icon: Layers3,
      href: '/services#landing-page',
      ctaLabel: "Découvrir l'offre",
    },
    {
      id: 'site-vitrine',
      title: 'Site vitrine',
      description:
        'Un site complet pour présenter votre activité, vos services et votre différence avec une structure claire, crédible et pensée pour durer.',
      idealFor:
        'Idéal si votre activité est déjà installée et que vous avez besoin d’un site plus solide pour rassurer, convaincre et convertir.',
      timeline: '3 à 5 semaines',
      startingPrice: 'À partir de 1 800€',
      icon: MonitorSmartphone,
      href: '/services#site-vitrine',
      ctaLabel: 'Voir le détail',
      highlightLabel: 'Le plus demandé',
    },
    {
      id: 'refonte-site',
      title: 'Refonte de site',
      description:
        'Une refonte ciblée pour clarifier le message, moderniser l’image et améliorer les performances de conversion sans repartir de zéro inutilement.',
      idealFor:
        'Idéale si votre site existe déjà mais ne reflète plus votre niveau de qualité ou ne génère pas assez de demandes pertinentes.',
      timeline: '3 à 6 semaines',
      startingPrice: 'À partir de 1 500€',
      icon: RefreshCcw,
      href: '/services#refonte-site',
      ctaLabel: 'Explorer la refonte',
    },
  ],
};
