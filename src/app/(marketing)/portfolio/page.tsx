import { getPortfolioPageContent } from '@/application/portfolio/getPortfolioPageContent';
import { getAllPortfolioProjects } from '@/application/portfolio/getProjectBySlug';
import {
  PortfolioFinalCta,
  PortfolioGrid,
  PortfolioHero,
  PortfolioProcess,
} from '@/components/marketing/portfolio';

export default function PortfolioPage() {
  const content = getPortfolioPageContent();
  const projects = getAllPortfolioProjects();

  return (
    <>
      <PortfolioHero content={content.hero} />
      <PortfolioGrid content={content.grid} projects={projects} />
      <PortfolioProcess content={content.process} />
      <PortfolioFinalCta content={content.finalCta} />
    </>
  );
}
