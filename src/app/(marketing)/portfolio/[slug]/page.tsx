import { notFound } from 'next/navigation';

import {
  getAllPortfolioProjects,
  getNextProject,
  getProjectBySlug,
} from '@/application/portfolio/getProjectBySlug';
import { getPortfolioProjectPageContent } from '@/application/portfolio/getPortfolioPageContent';
import {
  PortfolioProjectBeforeAfter,
  PortfolioProjectCaseStudy,
  PortfolioProjectHero,
  PortfolioProjectNext,
} from '@/components/marketing/portfolio';
import type { PortfolioProjectSlug } from '@/domain/portfolio/types';

type PortfolioProjectPageProps = {
  params: Promise<{
    slug: PortfolioProjectSlug;
  }>;
};

export function generateStaticParams() {
  return getAllPortfolioProjects().map((project) => ({
    slug: project.slug,
  }));
}

export default async function PortfolioProjectPage({ params }: PortfolioProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const content = getPortfolioProjectPageContent();
  const nextProject = getNextProject(slug);

  return (
    <>
      <PortfolioProjectHero project={project} content={content} />
      <PortfolioProjectCaseStudy project={project} content={content} />
      <PortfolioProjectBeforeAfter project={project} content={content} />
      <PortfolioProjectNext nextProject={nextProject} content={content} />
    </>
  );
}
