import { Layers3, MonitorSmartphone, RefreshCcw } from 'lucide-react';

import type {
  ServicePreviewOverrides,
  ServicePreviewSectionContent,
  ServiceSlug,
} from '@/domain/services/types';

export const servicesPreviewSectionContent: ServicePreviewSectionContent = {
  eyebrow: 'Offres',
  title: 'Trois formats pour avancer avec un cadre clair.',
  description:
    'Vous choisissez selon votre priorité : lancer rapidement, structurer votre présence ou corriger un site qui ne reflète plus votre niveau.',
  idealForLabel: 'Idéal pour',
  investmentLabel: 'Investissement',
  startingFromLabel: 'À partir de',
  timelineLabel: 'Délai habituel',
  defaultOfferBadge: 'Offre',
  featuredOfferBadge: 'Offre signature',
};

export const servicesPreviewOrder: ServiceSlug[] = ['landing-page', 'site-vitrine', 'refonte-site'];

export const servicesPreviewOverrides: Record<ServiceSlug, ServicePreviewOverrides> = {
  'landing-page': {
    idealFor:
      'Lancer une offre précise avec une page claire, rapide à produire et orientée prise de contact.',
    icon: Layers3,
    ctaLabel: "Découvrir l'offre",
  },
  'site-vitrine': {
    idealFor:
      'Présenter votre activité dans son ensemble avec une structure solide et une image professionnelle.',
    icon: MonitorSmartphone,
    ctaLabel: 'Voir le détail',
    highlightLabel: 'Le plus demandé',
  },
  'refonte-site': {
    idealFor:
      'Repartir sur de bonnes bases sans repartir de zéro : message clarifié, image modernisée, parcours amélioré.',
    icon: RefreshCcw,
    ctaLabel: 'Explorer la refonte',
  },
};
