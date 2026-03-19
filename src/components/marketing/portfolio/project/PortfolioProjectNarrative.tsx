'use client';

import { useMemo, useState } from 'react';

import { Container, Section, Tabs, type TabsItem } from '@/components/ui';
import type { PortfolioProjectPageContent } from '@/domain/portfolio/page';
import type { PortfolioProject } from '@/domain/portfolio/types';
import { cn } from '@/lib/utils/cn';

type PortfolioProjectNarrativeProps = {
  project: PortfolioProject;
  content: PortfolioProjectPageContent;
};

type NarrativeTabValue = 'objective' | 'problem' | 'solution' | 'result';

export function PortfolioProjectNarrative({ project, content }: PortfolioProjectNarrativeProps) {
  const [activeTab, setActiveTab] = useState<NarrativeTabValue>('objective');

  const tabItems = useMemo<TabsItem<NarrativeTabValue>[]>(
    () => [
      { value: 'objective', label: content.objectiveLabel },
      { value: 'problem', label: content.problemLabel },
      { value: 'solution', label: content.solutionLabel },
      { value: 'result', label: content.resultLabel },
    ],
    [content],
  );

  const activePanel = getNarrativePanelData(project, content, activeTab);

  return (
    <Section className="relative overflow-hidden py-6 sm:py-10 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[8%] top-[24%] h-36 w-36 rounded-full bg-accent/7 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto mt-6 max-w-6xl">
          <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,38,0.82),rgba(10,14,24,0.96))] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-[0.72rem] uppercase tracking-[0.16em] text-foreground/45">
                {content.contextLabel}
              </p>
              <p className="mt-4 text-sm leading-8 text-muted-foreground sm:text-base">
                {project.context}
              </p>
            </div>

            <div className="mt-8 lg:hidden">
              <Tabs items={tabItems} value={activeTab} onValueChange={setActiveTab} />

              <div
                role="tabpanel"
                id={`panel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
                className="mt-4"
              >
                <NarrativePanel
                  label={activePanel.label}
                  value={activePanel.value}
                  isFeatured={activePanel.isFeatured}
                  accent={activePanel.accent}
                />
              </div>
            </div>

            <div className="mt-8 hidden gap-4 lg:grid lg:grid-cols-12">
              <NarrativePanel
                label={content.objectiveLabel}
                value={project.objective}
                className="lg:col-span-6"
                isFeatured
              />

              <NarrativePanel
                label={content.problemLabel}
                value={project.problem}
                className="lg:col-span-6"
              />

              <NarrativePanel
                label={content.solutionLabel}
                value={project.solution}
                className="lg:col-span-7"
              />

              <NarrativePanel
                label={content.resultLabel}
                value={project.result}
                className="lg:col-span-5"
                isFeatured
                accent
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function getNarrativePanelData(
  project: PortfolioProject,
  content: PortfolioProjectPageContent,
  tab: NarrativeTabValue,
) {
  switch (tab) {
    case 'objective':
      return {
        label: content.objectiveLabel,
        value: project.objective,
        isFeatured: true,
        accent: false,
      };
    case 'problem':
      return {
        label: content.problemLabel,
        value: project.problem,
        isFeatured: false,
        accent: false,
      };
    case 'solution':
      return {
        label: content.solutionLabel,
        value: project.solution,
        isFeatured: false,
        accent: false,
      };
    case 'result':
      return {
        label: content.resultLabel,
        value: project.result,
        isFeatured: true,
        accent: true,
      };
  }
}

type NarrativePanelProps = {
  label: string;
  value: string;
  className?: string;
  isFeatured?: boolean;
  accent?: boolean;
};

function NarrativePanel({
  label,
  value,
  className,
  isFeatured = false,
  accent = false,
}: NarrativePanelProps) {
  return (
    <div
      className={cn(
        'rounded-[1.6rem] border p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-6',
        isFeatured
          ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]'
          : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))]',
        accent
          ? 'border-primary/20 bg-[linear-gradient(180deg,rgba(124,92,255,0.10),rgba(10,14,24,0.96))]'
          : 'border-white/10',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-[0.72rem] uppercase tracking-[0.16em] text-foreground/45">{label}</p>

        <span
          aria-hidden="true"
          className={cn(
            'mt-1 h-2 w-2 shrink-0 rounded-full',
            accent ? 'bg-primary' : 'bg-foreground/20',
          )}
        />
      </div>

      <p
        className={cn(
          'mt-4 leading-8',
          isFeatured
            ? 'text-base text-foreground/92'
            : 'text-sm text-muted-foreground sm:text-base',
        )}
      >
        {value}
      </p>
    </div>
  );
}
