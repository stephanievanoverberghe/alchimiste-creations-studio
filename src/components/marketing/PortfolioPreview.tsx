import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { getPortfolioPreviewContent } from '@/application/home/getPortfolioPreviewContent';
import type {
  PortfolioPreviewCtaItem,
  PortfolioPreviewProjectItem,
} from '@/domain/home/portfolio-preview';
import { Badge, Container, Heading, Section } from '@/components/ui';
import { cn } from '@/lib/utils/cn';

export function PortfolioPreview() {
  const content = getPortfolioPreviewContent();

  const projects = content.items.filter(
    (item): item is PortfolioPreviewProjectItem => item.type === 'project',
  );
  const ctaItem = content.items.find(
    (item): item is PortfolioPreviewCtaItem => item.type === 'cta',
  );

  if (projects.length === 0 || !ctaItem) {
    return null;
  }

  const visibleProjects = projects.slice(0, 3);
  const mediumProjects = projects.slice(0, 4);

  return (
    <Section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]" />
        <div className="absolute left-[8%] top-[8%] h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[8%] top-[14%] h-36 w-36 rounded-full bg-accent/7 blur-3xl" />
        <div className="absolute left-1/2 bottom-0 h-44 w-44 -translate-x-1/2 rounded-full bg-primary/6 blur-3xl" />
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

        <>
          <div className="mt-10 grid gap-5 md:hidden lg:hidden">
            {visibleProjects.map((project, index) => (
              <PortfolioProjectCard
                key={project.id}
                project={project}
                index={index}
                badgeVariant={index === 0 ? 'primary' : 'default'}
              />
            ))}
          </div>

          <div className="mt-10 hidden gap-5 md:grid md:grid-cols-2 lg:hidden">
            {mediumProjects.map((project, index) => (
              <PortfolioProjectCard
                key={project.id}
                project={project}
                index={index}
                badgeVariant={index === 0 ? 'primary' : 'default'}
              />
            ))}
          </div>

          <div className="mt-10 hidden gap-5 lg:grid lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <PortfolioProjectCard
                key={project.id}
                project={project}
                index={index}
                badgeVariant={index === 0 ? 'primary' : 'default'}
              />
            ))}
          </div>
        </>

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

type PortfolioCardProps = {
  project: PortfolioPreviewProjectItem;
  index: number;
  badgeVariant?: 'default' | 'primary' | 'accent';
};

function PortfolioProjectCard({ project, index, badgeVariant = 'default' }: PortfolioCardProps) {
  const displayIndex = String(index + 1).padStart(2, '0');

  return (
    <Link
      href={project.href}
      className={cn(
        'group relative block',
        index === 1 && 'xl:translate-y-8',
        index === 2 && 'xl:translate-y-3',
      )}
    >
      <article className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,22,34,0.72),rgba(9,13,24,0.88))] shadow-[0_18px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 ease-out md:group-hover:-translate-y-1 md:group-hover:border-white/16 md:group-hover:shadow-[0_28px_56px_rgba(0,0,0,0.18)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100"
        >
          <div className="absolute inset-0 rounded-[1.8rem] ring-1 ring-white/10" />
          <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
        </div>

        <div
          className={cn(
            'relative overflow-hidden',
            index === 0 ? 'h-65 sm:h-75' : index === 1 ? 'h-57.5 sm:h-67.5' : 'h-61.25 sm:h-71.25',
          )}
        >
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1200}
            height={900}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out md:group-hover:scale-[1.045]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,18,0.03)_0%,rgba(8,10,18,0.10)_34%,rgba(8,10,18,0.54)_100%)]" />

          <div className="absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.07),transparent)] opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />

          <div className="pointer-events-none absolute left-4 top-4 z-10">
            <Badge variant={badgeVariant}>{project.category}</Badge>
          </div>

          <div className="pointer-events-none absolute right-4 top-4 z-10">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[0.64rem] font-medium tracking-[0.18em] text-white/75 backdrop-blur-md">
              {displayIndex}
            </span>
          </div>
        </div>

        <div className="relative z-10 px-4 pb-4 sm:px-5 sm:pb-5">
          <div className="-mt-12 rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,16,26,0.84),rgba(9,13,24,0.97))] p-5 shadow-[0_18px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent)]" />
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.18em] text-foreground/38">
                {index === 0 ? 'Projet signature' : 'Étude de cas'}
              </p>
            </div>

            <h3 className="mt-4 text-[1.24rem] font-medium tracking-[-0.04em] text-foreground sm:text-[1.42rem]">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground transition-colors duration-300 md:group-hover:text-foreground/80">
              {project.description}
            </p>

            <div className="mt-4 border-t border-white/8 pt-4">
              <p className="text-xs leading-6 text-foreground/72 sm:text-[0.82rem] sm:leading-6">
                {stripLabel(project.result)}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-transform duration-300 ease-out md:group-hover:translate-x-0.5">
                {project.ctaLabel}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
              </span>

              <span className="h-px w-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.18))]" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

type PortfolioCalloutCardProps = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

function PortfolioCalloutCard({ title, description, href, ctaLabel }: PortfolioCalloutCardProps) {
  return (
    <div className="mt-8">
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,19,30,0.82),rgba(10,14,24,0.96))] px-5 py-5 shadow-[0_18px_38px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:px-6 sm:py-6 md:hover:border-primary/22 md:hover:shadow-[0_28px_58px_rgba(54,54,130,0.16)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100"
        >
          <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-primary/14" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]"
        />

        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <Badge variant="primary">À votre tour</Badge>
              <span className="hidden h-px w-12 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent)] sm:block" />
            </div>

            <h3 className="mt-4 text-[1.24rem] font-medium tracking-[-0.04em] text-foreground sm:text-[1.42rem]">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground transition-colors duration-300 md:group-hover:text-foreground/78 sm:text-base sm:leading-8">
              {description}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-transform duration-300 ease-out md:group-hover:translate-x-0.5">
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </div>
  );
}

function stripLabel(value: string) {
  return value.replace(/^(Contexte|Résultat|Impact)\s*:\s*/i, '');
}
