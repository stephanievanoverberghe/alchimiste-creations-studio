import { getPortfolioPreviewContent } from '@/application/home/getPortfolioPreviewContent';
import type {
  PortfolioPreviewCtaItem,
  PortfolioPreviewProjectItem,
} from '@/domain/portfolio/types';
import { Container, Heading, Section } from '@/components/ui';

import { FeaturedProjectCard } from './portfolio-preview/FeaturedProjectCard';
import { PortfolioCalloutCard } from './portfolio-preview/PortfolioCalloutCard';
import { SecondaryProjectCard } from './portfolio-preview/SecondaryProjectCard';

export function PortfolioPreview() {
  const content = getPortfolioPreviewContent();

  const projects = content.items.filter(
    (item): item is PortfolioPreviewProjectItem => item.type === 'project',
  );
  const ctaItem = content.items.find(
    (item): item is PortfolioPreviewCtaItem => item.type === 'cta',
  );

  if (projects.length === 0 || !ctaItem) return null;

  const [featuredProject, ...otherProjects] = projects;
  const secondaryProjects = otherProjects.slice(0, 2);

  return (
    <Section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {featuredProject ? <FeaturedProjectCard project={featuredProject} /> : null}

          <div className="grid gap-5">
            {secondaryProjects.map((project) => (
              <SecondaryProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <PortfolioCalloutCard
          title={ctaItem.title}
          description={ctaItem.description}
          href={ctaItem.href}
          ctaLabel={ctaItem.ctaLabel}
        />
      </Container>
    </Section>
  );
}
