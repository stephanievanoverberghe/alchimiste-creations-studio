import type { MetadataRoute } from 'next';
import { siteUrl } from '@/content/site';

const routes = [
  '/',
  '/services',
  '/portfolio',
  '/a-propos',
  '/contact',
  '/mentions-legales',
  '/politique-confidentialite',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
