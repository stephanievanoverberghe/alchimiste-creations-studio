import { getPortfolioPageContent } from '@/application/portfolio/getPortfolioPageContent';
import { getPortfolioProjects } from '@/application/portfolio/getPortfolioData';
import {
  PortfolioFinalCta,
  PortfolioGrid,
  PortfolioHero,
  PortfolioProcess,
} from '@/components/marketing/portfolio';

export default function PortfolioPage() {
  const content = getPortfolioPageContent();
  const projects = getPortfolioProjects();

  return (
    <>
      <PortfolioHero content={content.hero} />
      <PortfolioGrid content={content.grid} projects={projects} />
      <PortfolioProcess content={content.process} />
      <PortfolioFinalCta content={content.finalCta} />
    </>
  );
}
