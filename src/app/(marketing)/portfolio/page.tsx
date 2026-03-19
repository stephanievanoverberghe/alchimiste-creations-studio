import { getPortfolioPageContent } from '@/application/portfolio/getPortfolioPageContent';
import { getPortfolioProjects } from '@/application/portfolio/getPortfolioProjects';
import { PageFinalCta } from '@/components/marketing/PageFinalCta';
import {
  PortfolioApproachStrip,
  PortfolioFeaturedProject,
  PortfolioHero,
  PortfolioProjectsGrid,
} from '@/components/marketing/portfolio';
import { getMarketingMetadata } from '@/application/seo/getMarketingMetadata';

export const metadata = getMarketingMetadata({
  title: 'Portfolio sites web réalisés',
  description:
    'Explorez des projets concrets signés Alchimiste Créations : design premium, structure claire et objectifs business assumés.',
  pathname: '/portfolio',
});

export default function PortfolioPage() {
  const content = getPortfolioPageContent();
  const projects = getPortfolioProjects();

  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const secondaryProjects = projects.filter((project) => project.slug !== featuredProject.slug);

  return (
    <>
      <PortfolioHero
        content={content.hero}
        featuredProject={featuredProject}
        secondaryProjects={secondaryProjects}
        projectsCount={projects.length}
      />
      <PortfolioFeaturedProject content={content.featuredProject} project={featuredProject} />
      <PortfolioProjectsGrid content={content.projectsGrid} projects={secondaryProjects} />
      <PortfolioApproachStrip content={content.approach} />
      <PageFinalCta {...content.finalCta} />
    </>
  );
}
