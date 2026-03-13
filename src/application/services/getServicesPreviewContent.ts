import {
  servicesPreviewOrder,
  servicesPreviewOverrides,
  servicesPreviewSectionContent,
} from '@/content/home/services-preview';
import type { ServicesPreviewContent } from '@/domain/services/types';

import { getServiceBySlug } from './getServices';

export function getServicesPreviewContent(): ServicesPreviewContent {
  const items = servicesPreviewOrder
    .map((slug) => {
      const service = getServiceBySlug(slug);

      if (!service) {
        return null;
      }

      const override = servicesPreviewOverrides[slug];

      return {
        id: service.slug,
        title: service.title,
        description: service.shortDescription,
        idealFor: override.idealFor,
        timeline: service.timeline,
        startingPrice: `À partir de ${service.startingPrice}`,
        icon: override.icon,
        href: `/services#${service.slug}`,
        ctaLabel: override.ctaLabel,
        highlightLabel: override.highlightLabel,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return {
    ...servicesPreviewSectionContent,
    items,
  };
}
