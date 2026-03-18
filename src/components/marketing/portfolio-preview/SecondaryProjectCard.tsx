import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import type {
  PortfolioPreviewContent,
  PortfolioPreviewProjectItem,
} from '@/domain/portfolio/types';

type SecondaryProjectCardProps = {
  project: PortfolioPreviewProjectItem;
  uiLabels: PortfolioPreviewContent['uiLabels'];
};

export function SecondaryProjectCard({ project, uiLabels }: SecondaryProjectCardProps) {
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
                {uiLabels.caseStudyLabel}
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
                {uiLabels.resultLabel}
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
