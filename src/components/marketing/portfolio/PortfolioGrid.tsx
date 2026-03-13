import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge, Container, Heading, Section } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import type { PortfolioPageContent } from '@/domain/portfolio/page';
import type { PortfolioProject } from '@/domain/portfolio/types';

type PortfolioGridProps = {
  content: PortfolioPageContent['grid'];
  projects: PortfolioProject[];
};

export function PortfolioGrid({ content, projects }: PortfolioGridProps) {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
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
            {otherProjects.map((project, index) => (
              <SecondaryProjectCard key={project.slug} project={project} index={index + 1} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

type FeaturedProjectCardProps = {
  project: PortfolioProject;
};

function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <article className="relative overflow-hidden rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.84))] shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 ease-out md:hover:-translate-y-0.5 md:hover:shadow-[0_30px_90px_rgba(80,80,255,0.15)]">
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
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                {project.ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
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
  project: PortfolioProject;
  index: number;
};

function SecondaryProjectCard({ project, index }: SecondaryProjectCardProps) {
  const displayIndex = String(index + 1).padStart(2, '0');

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <article className="relative overflow-hidden rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.84))] shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 ease-out md:hover:-translate-y-0.5 md:hover:shadow-[0_28px_56px_rgba(80,80,255,0.12)]">
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

          <div className="pointer-events-none absolute right-4 top-4 z-10">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[0.64rem] font-medium tracking-[0.18em] text-white/75 backdrop-blur-md">
              {displayIndex}
            </span>
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

            <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>

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
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                {project.ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
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

function stripLabel(value: string) {
  return value.replace(/^(Contexte|Résultat|Impact)\s*:\s*/i, '');
}
