import type { Metadata } from 'next';
import { siteBrand } from './footer';

export const siteUrl = 'https://www.alchimiste-creations.fr';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteBrand,
  description:
    'Studio web indépendant spécialisé dans la création de sites web modernes et performants.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteBrand,
    description: 'Transformer les idées et les projets en sites web modernes, clairs et crédibles.',
    type: 'website',
    url: siteUrl,
    locale: 'fr_FR',
  },
};
