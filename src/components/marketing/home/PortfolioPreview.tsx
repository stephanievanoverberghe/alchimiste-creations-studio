import { getPortfolioPreviewContent } from '@/application/home/getPortfolioPreviewContent';
import type {
  PortfolioPreviewCtaItem,
  PortfolioPreviewProjectItem,
} from '@/domain/portfolio/types';
import { Container, Heading, MobileSwipeProjects, Section } from '@/components/ui';

import { FeaturedProjectCard } from '@/components/marketing/portfolio-preview/FeaturedProjectCard';
import { PortfolioCalloutCard } from '@/components/marketing/portfolio-preview/PortfolioCalloutCard';
import { SecondaryProjectCard } from '@/components/marketing/portfolio-preview/SecondaryProjectCard';

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
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[10%] top-[10%] h-36 w-36 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[8%] top-[18%] h-32 w-32 rounded-full bg-accent/7 blur-3xl" />
        <div className="absolute left-1/2 bottom-0 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/6 blur-3xl" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />
        </div>

        <MobileSwipeProjects
          className="mt-10"
          items={projects.map((project, index) => ({
            id: project.slug,
            slug: project.slug,
            title: project.title,
            description: project.description,
            href: project.href,
            image: {
              src: project.image.src,
              alt: project.image.alt,
            },
            featured: index === 0,
          }))}
        />

        <div className="mt-10 hidden gap-5 lg:grid lg:grid-cols-2">
          {featuredProject ? (
            <FeaturedProjectCard project={featuredProject} uiLabels={content.uiLabels} />
          ) : null}

          <div className="grid gap-5">
            {secondaryProjects.map((project) => (
              <SecondaryProjectCard
                key={project.slug}
                project={project}
                uiLabels={content.uiLabels}
              />
            ))}
          </div>
        </div>

        <PortfolioCalloutCard
          title={ctaItem.title}
          description={ctaItem.description}
          href={ctaItem.href}
          ctaLabel={ctaItem.ctaLabel}
          badgeLabel={content.uiLabels.calloutBadgeLabel}
        />
      </Container>
    </Section>
  );
}
