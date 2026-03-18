import { portfolioProjects } from '@/content/portfolio/projects';
import type { PortfolioProjectSlug } from '@/domain/portfolio/types';

export function getPortfolioProjects() {
  return portfolioProjects;
}

export function getPortfolioProjectBySlug(slug: PortfolioProjectSlug) {
  return portfolioProjects.find((project) => project.slug === slug) ?? null;
}

export function getNextPortfolioProject(slug: PortfolioProjectSlug) {
  const currentIndex = portfolioProjects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return null;
  }

  return portfolioProjects[(currentIndex + 1) % portfolioProjects.length] ?? null;
}
