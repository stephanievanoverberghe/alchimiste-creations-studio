import { notFound } from 'next/navigation';

import {
  getNextPortfolioProject,
  getPortfolioProjectBySlug,
  getPortfolioProjects,
} from '@/application/portfolio/getPortfolioProjects';
import { getPortfolioProjectPageContent } from '@/application/portfolio/getPortfolioProjectPageContent';
import {
  PortfolioProjectBeforeAfter,
  PortfolioProjectFinalCta,
  PortfolioProjectHero,
  PortfolioProjectGallery,
  PortfolioProjectNarrative,
  PortfolioProjectNext,
} from '@/components/marketing/portfolio/project';
import type { PortfolioProjectSlug } from '@/domain/portfolio/types';

type PortfolioProjectPageProps = {
  params: Promise<{
    slug: PortfolioProjectSlug;
  }>;
};

export async function generateStaticParams() {
  const projects = getPortfolioProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function PortfolioProjectPage({ params }: PortfolioProjectPageProps) {
  const { slug } = await params;

  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextPortfolioProject(slug);
  const content = getPortfolioProjectPageContent();

  return (
    <>
      <PortfolioProjectHero project={project} content={content} />
      <PortfolioProjectNarrative project={project} content={content} />
      <PortfolioProjectGallery project={project} />
      <PortfolioProjectBeforeAfter project={project} content={content} />
      {nextProject ? <PortfolioProjectNext project={nextProject} content={content} /> : null}
      <PortfolioProjectFinalCta content={content.finalCta} />
    </>
  );
}
