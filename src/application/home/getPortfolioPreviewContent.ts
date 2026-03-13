import {
  portfolioPreviewCtaContent,
  portfolioPreviewProjectOrder,
  portfolioPreviewSectionContent,
} from '@/content/home/portfolio-preview';
import { getPortfolioProjectBySlug } from '@/application/portfolio/getPortfolioProjects';
import type { PortfolioPreviewContent } from '@/domain/portfolio/project.types';

export function getPortfolioPreviewContent(): PortfolioPreviewContent {
  const projects = portfolioPreviewProjectOrder
    .map((slug) => {
      const project = getPortfolioProjectBySlug(slug);

      if (!project) {
        return null;
      }

      return {
        ...project,
        type: 'project' as const,
        href: `/portfolio/${project.slug}`,
      };
    })
    .filter((project) => project !== null);

  return {
    ...portfolioPreviewSectionContent,
    items: [...projects, portfolioPreviewCtaContent],
  };
}
