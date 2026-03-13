import { Container, Section } from '@/components/ui';
import type { PortfolioProjectPageContent } from '@/domain/portfolio/page';
import type { PortfolioProject } from '@/domain/portfolio/types';

type PortfolioProjectCaseStudyProps = {
  project: PortfolioProject;
  content: PortfolioProjectPageContent;
};

export function PortfolioProjectCaseStudy({ project, content }: PortfolioProjectCaseStudyProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          <CaseCard label={content.objectiveLabel} value={project.objective} />
          <CaseCard label={content.problemLabel} value={project.problem} />
          <CaseCard label={content.solutionLabel} value={project.solution} />
          <CaseCard label={content.resultLabel} value={stripLabel(project.result)} highlight />
        </div>

        <div className="mt-8 rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.76),rgba(9,14,28,0.88))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/40">
            Contexte
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            {stripLabel(project.context)}
          </p>
        </div>
      </Container>
    </Section>
  );
}

type CaseCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
};

function CaseCard({ label, value, highlight = false }: CaseCardProps) {
  return (
    <article
      className={
        highlight
          ? 'rounded-3xl border border-primary/20 bg-primary/6 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
          : 'rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.86))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl'
      }
    >
      <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/40">
        {label}
      </p>
      <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
        {value}
      </p>
    </article>
  );
}

function stripLabel(value: string) {
  return value.replace(/^(Contexte|Résultat|Impact)\s*:\s*/i, '');
}
