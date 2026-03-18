import { contactPageContent } from '@/content/contact/page';

import { getContactProjectTypeOptions } from './getContactProjectTypeOptions';

export function getContactPageContent() {
  return {
    ...contactPageContent,
    form: {
      ...contactPageContent.form,
      options: {
        ...contactPageContent.form.options,
        projectTypes: getContactProjectTypeOptions(),
      },
    },
  };
}
