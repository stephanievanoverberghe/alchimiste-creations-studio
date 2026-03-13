import { Layers3, MonitorSmartphone, RefreshCcw } from 'lucide-react';

import type {
  ServicePreviewOverrides,
  ServicePreviewSectionContent,
  ServiceSlug,
} from '@/domain/services/service.types';

export const servicesPreviewSectionContent: ServicePreviewSectionContent = {
  eyebrow: 'Offres',
  title: 'Trois offres pour lancer, structurer ou accélérer votre présence en ligne.',
  description:
    'Chaque format répond à un besoin précis. Vous choisissez l’offre la plus adaptée à votre niveau de maturité, à votre objectif et à votre priorité business.',
};

export const servicesPreviewOrder: ServiceSlug[] = ['landing-page', 'site-vitrine', 'refonte-site'];

export const servicesPreviewOverrides: Record<ServiceSlug, ServicePreviewOverrides> = {
  'landing-page': {
    idealFor:
      'Idéale si vous lancez une offre, une campagne ou un service précis et que vous avez besoin d’une page claire à activer rapidement.',
    icon: Layers3,
    ctaLabel: "Découvrir l'offre",
  },
  'site-vitrine': {
    idealFor:
      'Idéal si votre activité est déjà installée et que vous avez besoin d’un site plus solide pour rassurer, convaincre et convertir.',
    icon: MonitorSmartphone,
    ctaLabel: 'Voir le détail',
    highlightLabel: 'Le plus demandé',
  },
  'refonte-site': {
    idealFor:
      'Idéale si votre site existe déjà mais ne reflète plus votre niveau de qualité ou ne génère pas assez de demandes pertinentes.',
    icon: RefreshCcw,
    ctaLabel: 'Explorer la refonte',
  },
};
