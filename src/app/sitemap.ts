import type { MetadataRoute } from 'next';
import { getPortfolioProjects } from '@/application/portfolio/getPortfolioProjects';
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
  const projectRoutes = getPortfolioProjects().map(
    (project) => `/portfolio/${project.slug}` as const,
  );
  const allRoutes = [...routes, ...projectRoutes];

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith('/portfolio/')
      ? 'monthly'
      : route === '/'
        ? 'weekly'
        : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/portfolio/') ? 0.8 : 0.7,
  }));
}
