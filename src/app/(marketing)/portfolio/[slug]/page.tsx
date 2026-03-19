import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  getNextPortfolioProject,
  getPortfolioProjectBySlug,
  getPortfolioProjects,
} from '@/application/portfolio/getPortfolioProjects';
import { getPortfolioProjectPageContent } from '@/application/portfolio/getPortfolioProjectPageContent';
import { PageFinalCta } from '@/components/marketing/PageFinalCta';
import {
  PortfolioProjectBeforeAfter,
  PortfolioProjectHero,
  PortfolioProjectGallery,
  PortfolioProjectNarrative,
  PortfolioProjectNext,
} from '@/components/marketing/portfolio/project';
import { getMarketingMetadata } from '@/application/seo/getMarketingMetadata';
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

export async function generateMetadata({ params }: PortfolioProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
    return getMarketingMetadata({
      title: 'Projet introuvable',
      description: "La réalisation demandée n'est pas disponible dans le portfolio.",
      pathname: '/portfolio',
    });
  }

  return getMarketingMetadata({
    title: `${project.title} — étude de cas web`,
    description: project.description,
    pathname: `/portfolio/${project.slug}`,
  });
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
      <PortfolioProjectGallery project={project} content={content} />
      <PortfolioProjectBeforeAfter project={project} content={content} />
      {nextProject ? <PortfolioProjectNext project={nextProject} content={content} /> : null}
      <PageFinalCta
        {...content.finalCta}
        panelSize="lg"
        buttonClassName="group relative px-8 py-3 text-[0.95rem] font-semibold tracking-wide"
      />
    </>
  );
}
