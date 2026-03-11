import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { getPortfolioPreviewContent } from '@/application/home/getPortfolioPreviewContent';
import { Badge, Container, Heading, Section } from '@/components/ui';

export function PortfolioPreview() {
  const content = getPortfolioPreviewContent();
  const [projectOne, projectTwo, ctaItem] = content.items;

  if (projectOne.type !== 'project' || projectTwo.type !== 'project' || ctaItem.type !== 'cta') {
    return null;
  }

  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[12%] top-[8%] h-44 w-44 rounded-full bg-primary/7 blur-3xl" />
        <div className="absolute right-[8%] top-[22%] h-36 w-36 rounded-full bg-accent/7 blur-3xl" />
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

        <div className="mt-14 grid gap-5 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:gap-6">
          <ProjectPanel
            project={projectOne}
            imageClassName="h-[220px] sm:h-[260px] lg:h-[300px]"
            titleClassName="text-[1.9rem] sm:text-[2.2rem] lg:text-[2.6rem]"
            badgeVariant="primary"
          />

          <ProjectPanel
            project={projectTwo}
            imageClassName="h-[220px] sm:h-[260px] lg:h-[300px]"
            titleClassName="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem]"
            badgeVariant="default"
          />
        </div>

        <Link
          href={ctaItem.href}
          className="group mt-6 block rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.72),rgba(9,14,28,0.82))] px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hover:border-primary/20 md:hover:shadow-[0_24px_70px_rgba(80,80,255,0.10)] sm:px-8 sm:py-7"
        >
          <div className="grid gap-4 sm:gap-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center">
            <div>
              <Badge variant="primary">À votre tour</Badge>

              <h3 className="mt-4 max-w-[18ch] text-2xl font-semibold tracking-tight text-foreground sm:text-[2rem] lg:text-[2.35rem]">
                {ctaItem.title}
              </h3>

              <p className="mt-3 max-w-[54ch] text-sm leading-7 text-muted-foreground transition-colors duration-300 md:group-hover:text-text sm:text-base">
                {ctaItem.description}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-transform duration-300 ease-out md:group-hover:translate-x-0.5">
              {ctaItem.ctaLabel}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
            </div>
          </div>
        </Link>
      </Container>
    </Section>
  );
}

type ProjectPanelProps = {
  project: {
    title: string;
    category: string;
    description: string;
    href: string;
    ctaLabel: string;
    image: {
      src: string;
      alt: string;
    };
  };
  imageClassName: string;
  titleClassName: string;
  badgeVariant: 'default' | 'primary' | 'accent';
};

function ProjectPanel({
  project,
  imageClassName,
  titleClassName,
  badgeVariant,
}: ProjectPanelProps) {
  return (
    <Link
      href={project.href}
      className="group block overflow-hidden rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.84))] shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hover:border-primary/20 md:hover:shadow-[0_24px_70px_rgba(80,80,255,0.10)]"
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_20%,rgba(6,10,18,0.14)_60%,rgba(6,10,18,0.62)_100%)]" />
        <div className="absolute inset-x-0 top-0 z-10 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />

        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={1400}
          height={960}
          className={`w-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-[1.02] ${imageClassName}`}
        />

        <div className="pointer-events-none absolute left-5 top-5 z-20">
          <Badge variant={badgeVariant}>{project.category}</Badge>
        </div>
      </div>

      <div className="p-5 sm:p-6 lg:p-7">
        <h3
          className={`max-w-[14ch] font-semibold tracking-tight text-foreground ${titleClassName}`}
        >
          {project.title}
        </h3>

        <p className="mt-4 max-w-[32ch] text-sm leading-7 text-muted-foreground transition-colors duration-300 md:group-hover:text-text sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-transform duration-300 ease-out md:group-hover:translate-x-0.5">
          {project.ctaLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
