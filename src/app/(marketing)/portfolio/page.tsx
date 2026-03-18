import { getPortfolioPageContent } from '@/application/portfolio/getPortfolioPageContent';
import { getPortfolioProjects } from '@/application/portfolio/getPortfolioProjects';
import {
  PortfolioApproachStrip,
  PortfolioFeaturedProject,
  PortfolioFinalCta,
  PortfolioHero,
  PortfolioProjectsGrid,
} from '@/components/marketing/portfolio';

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
      <PortfolioFinalCta content={content.finalCta} />
    </>
  );
}
