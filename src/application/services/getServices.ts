import { services } from '@/content/services/services';
import type { Service, ServiceSlug } from '@/domain/services/service.types';

export function getServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: ServiceSlug): Service | undefined {
  return services.find((service) => service.slug === slug);
}
