import { ArrowRight, ArrowDown } from 'lucide-react';

import { Container, Heading, Section } from '@/components/ui';
import type { PortfolioProjectPageContent } from '@/domain/portfolio/page';
import type { PortfolioProject } from '@/domain/portfolio/types';

type PortfolioProjectBeforeAfterProps = {
  project: PortfolioProject;
  content: PortfolioProjectPageContent;
};

export function PortfolioProjectBeforeAfter({
  project,
  content,
}: PortfolioProjectBeforeAfterProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[12%] top-[18%] h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[10%] bottom-[14%] h-44 w-44 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.beforeAfterTitle}
            title="Une transformation pensée pour renforcer la perception."
            description="Chaque projet présenté ici cherche à rendre l’activité plus lisible, plus cohérente et plus convaincante."
            align="center"
          />
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,38,0.82),rgba(10,14,24,0.96))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6 lg:p-8">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
              <BeforeAfterCard label="Avant" value={project.beforeLabel} />

              <div className="flex items-center justify-center py-1 lg:px-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground/70 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-xl">
                  <ArrowDown className="h-5 w-5 lg:hidden" />
                  <ArrowRight className="hidden h-5 w-5 lg:block" />
                </div>
              </div>

              <BeforeAfterCard label="Après" value={project.afterLabel} isAfter />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

type BeforeAfterCardProps = {
  label: string;
  value: string;
  isAfter?: boolean;
};

function BeforeAfterCard({ label, value, isAfter = false }: BeforeAfterCardProps) {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-[1.85rem] border p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8',
        isAfter
          ? 'border-primary/20 bg-[linear-gradient(180deg,rgba(124,92,255,0.12),rgba(10,14,24,0.96))]'
          : 'border-white/10 bg-[linear-gradient(180deg,rgba(18,24,38,0.82),rgba(10,14,24,0.96))]',
      ].join(' ')}
    >
      <div
        aria-hidden="true"
        className={[
          'pointer-events-none absolute inset-0 opacity-100',
          isAfter
            ? 'bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.14),transparent_34%)]'
            : 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_28%)]',
        ].join(' ')}
      />

      <div className="relative z-10">
        <p
          className={[
            'text-[0.72rem] uppercase tracking-[0.16em]',
            isAfter ? 'text-primary/85' : 'text-foreground/45',
          ].join(' ')}
        >
          {label}
        </p>

        <p
          className={[
            'mt-5 max-w-[20ch] font-semibold tracking-tight',
            isAfter
              ? 'text-2xl text-foreground sm:text-[2rem] sm:leading-[1.1]'
              : 'text-xl text-foreground sm:text-[1.65rem] sm:leading-[1.15]',
          ].join(' ')}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
