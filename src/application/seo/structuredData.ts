import { siteUrl } from '@/content/site';
import { footerContent, siteBrand } from '@/content/site/footer';

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqJsonLdItem = {
  question: string;
  answer: string;
};

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteBrand,
    url: siteUrl,
    email: footerContent.contact.email,
    areaServed: 'FR',
    sameAs: footerContent.socialLinks.map((link) => link.href),
  };
}

export function getProfessionalServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteBrand,
    description: footerContent.description,
    url: siteUrl,
    email: footerContent.contact.email,
    areaServed: 'FR',
    serviceType: ['Création de site web', 'Refonte de site web', 'Design web'],
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}

export function getFaqJsonLd(items: FaqJsonLdItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
