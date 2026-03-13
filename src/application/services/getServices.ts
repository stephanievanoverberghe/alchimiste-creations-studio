import { services } from '@/content/services/services';

export function getServices() {
  return services;
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
