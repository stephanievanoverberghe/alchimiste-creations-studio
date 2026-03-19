import type { Metadata } from 'next';

import { siteBrand, siteUrl } from '@/content/site';

type MarketingMetadataInput = {
  title: string;
  description: string;
  pathname: string;
};

export function getMarketingMetadata({
  title,
  description,
  pathname,
}: MarketingMetadataInput): Metadata {
  const canonicalUrl = new URL(pathname, siteUrl).toString();
  const pageTitle = `${title} | ${siteBrand}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: pageTitle,
      description,
      type: 'website',
      url: canonicalUrl,
      locale: 'fr_FR',
      siteName: siteBrand,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
    },
  };
}
