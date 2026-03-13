import { portfolioProjects } from '@/content/portfolio/projects';
import type { PortfolioProjectSlug } from '@/domain/portfolio/types';

export function getProjectBySlug(slug: PortfolioProjectSlug) {
  return portfolioProjects.find((project) => project.slug === slug) ?? null;
}

export function getAllPortfolioProjects() {
  return portfolioProjects;
}

export function getNextProject(slug: PortfolioProjectSlug) {
  const currentIndex = portfolioProjects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return null;
  }

  return portfolioProjects[(currentIndex + 1) % portfolioProjects.length] ?? null;
}
