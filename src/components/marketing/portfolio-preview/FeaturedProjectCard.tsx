import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import type { PortfolioPreviewProjectItem } from '@/domain/portfolio/types';

type FeaturedProjectCardProps = {
  project: PortfolioPreviewProjectItem;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
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
