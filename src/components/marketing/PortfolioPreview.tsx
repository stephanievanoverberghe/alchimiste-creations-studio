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

  const [featuredProject, ...otherProjects] = projects;
  const secondaryProjects = otherProjects.slice(0, 2);

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

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {featuredProject ? <FeaturedProjectCard project={featuredProject} /> : null}

          <div className="grid gap-5">
            {secondaryProjects.map((project, index) => (
              <SecondaryProjectCard key={project.id} project={project} index={index + 1} />
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

type FeaturedProjectCardProps = {
  project: PortfolioPreviewProjectItem;
};

function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <Link href={project.href} className="group block">
      <article className="relative overflow-hidden rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.84))] shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 ease-out md:hover:-translate-y-0.5 md:hover:shadow-[0_30px_90px_rgba(80,80,255,0.15)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
        >
          <div className="absolute inset-0 rounded-[1.9rem] ring-1 ring-primary/30" />
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
          <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 md:group-hover:opacity-100" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative h-72.5 overflow-hidden sm:h-85">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1400}
            height={1000}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out md:group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,18,0.04)_0%,rgba(8,10,18,0.12)_34%,rgba(8,10,18,0.58)_100%)]" />

          <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2">
            <Badge variant="primary">{project.category}</Badge>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[0.64rem] font-medium uppercase tracking-[0.18em] text-white/75 backdrop-blur-md">
              Projet signature
            </span>
          </div>
        </div>

        <div className="relative z-10 px-5 pb-5 sm:px-6 sm:pb-6">
          <div className="-mt-14 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(12,16,26,0.86),rgba(9,13,24,0.97))] p-5 shadow-[0_18px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent)]" />
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.18em] text-foreground/38">
                Étude de cas
              </p>
            </div>

            <h3 className="mt-4 text-[1.4rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.7rem]">
              {project.title}
            </h3>

            <p className="mt-3 max-w-[48ch] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {project.description}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <MiniCaseCard label="Objectif" value={project.objective} />
              <MiniCaseCard label="Problème" value={project.problem} />
              <MiniCaseCard label="Solution" value={project.solution} />
              <MiniCaseCard label="Résultat" value={stripLabel(project.result)} highlight />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <BeforeAfterPill>{project.beforeLabel}</BeforeAfterPill>
              <BeforeAfterPill highlight>{project.afterLabel}</BeforeAfterPill>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/8 pt-4">
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

type SecondaryProjectCardProps = {
  project: PortfolioPreviewProjectItem;
  index: number;
};

function SecondaryProjectCard({ project }: SecondaryProjectCardProps) {
  return (
    <Link href={project.href} className="group block">
      <article className="relative overflow-hidden rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.84))] shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 ease-out md:hover:-translate-y-0.5 md:hover:shadow-[0_28px_56px_rgba(80,80,255,0.12)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
        >
          <div className="absolute inset-0 rounded-[1.7rem] ring-1 ring-primary/25" />
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
          <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-primary/8 blur-3xl transition-opacity duration-300 md:group-hover:opacity-100" />
        </div>

        <div className="relative h-55 overflow-hidden sm:h-62.5">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1200}
            height={900}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out md:group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,18,0.03)_0%,rgba(8,10,18,0.10)_34%,rgba(8,10,18,0.54)_100%)]" />

          <div className="pointer-events-none absolute left-4 top-4 z-10">
            <Badge variant="default">{project.category}</Badge>
          </div>
        </div>

        <div className="relative z-10 px-4 pb-4 sm:px-5 sm:pb-5">
          <div className="-mt-10 rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,16,26,0.84),rgba(9,13,24,0.97))] p-5 shadow-[0_18px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent)]" />
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.18em] text-foreground/38">
                Étude de cas
              </p>
            </div>

            <h3 className="mt-4 text-[1.24rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.42rem]">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground transition-colors duration-300 md:group-hover:text-text">
              {project.description}
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/3 px-4 py-3">
              <p className="text-[0.64rem] font-medium uppercase tracking-[0.16em] text-foreground/50">
                Résultat
              </p>
              <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-[0.82rem] sm:leading-6">
                {stripLabel(project.result)}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <BeforeAfterPill>{project.beforeLabel}</BeforeAfterPill>
              <BeforeAfterPill highlight>{project.afterLabel}</BeforeAfterPill>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
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

type MiniCaseCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
};

function MiniCaseCard({ label, value, highlight = false }: MiniCaseCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border px-4 py-3',
        highlight
          ? 'border-primary/20 bg-primary/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
          : 'border-white/10 bg-white/3',
      )}
    >
      <p className="text-[0.64rem] font-medium uppercase tracking-[0.16em] text-foreground/45">
        {label}
      </p>
      <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-[0.82rem] sm:leading-6">
        {value}
      </p>
    </div>
  );
}

type BeforeAfterPillProps = {
  children: React.ReactNode;
  highlight?: boolean;
};

function BeforeAfterPill({ children, highlight = false }: BeforeAfterPillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1.5 text-[0.7rem] font-medium tracking-[0.16em]',
        highlight
          ? 'border-primary/22 bg-primary/8 text-foreground'
          : 'border-white/10 bg-white/3 text-foreground/72',
      )}
    >
      {children}
    </span>
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
        className="group relative block overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,19,30,0.82),rgba(10,14,24,0.96))] px-5 py-5 shadow-[0_18px_38px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:px-6 sm:py-6 md:hover:border-primary/22 md:hover:shadow-[0_28px_58px_rgba(54,54,130,0.16)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
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

            <h3 className="mt-4 text-[1.24rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.42rem]">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground transition-colors duration-300 md:group-hover:text-text sm:text-base sm:leading-8">
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
