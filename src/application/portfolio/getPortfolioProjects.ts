import { portfolioProjects } from '@/content/portfolio/projects';

export function getPortfolioProjects() {
  return portfolioProjects;
}

export function getPortfolioProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
