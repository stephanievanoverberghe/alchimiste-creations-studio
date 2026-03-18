import { services } from '@/content/services/services';
import type { ContactProjectType } from '@/domain/contact/page';

type ContactProjectTypeOption = {
  value: ContactProjectType;
  label: string;
};

export function getContactProjectTypeOptions(): ContactProjectTypeOption[] {
  const serviceOptions = services.map((service) => ({
    value: service.slug,
    label: service.title,
  }));

  return [...serviceOptions, { value: 'autre', label: 'Autre besoin' }];
}
