import { Container, Section } from '@/components/ui';
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
    <Section className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/40">
            {content.beforeAfterTitle}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.86))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-[0.7rem] font-medium tracking-[0.16em] text-foreground/72">
                {project.beforeLabel}
              </span>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/6 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <span className="inline-flex items-center rounded-full border border-primary/22 bg-primary/8 px-3 py-1.5 text-[0.7rem] font-medium tracking-[0.16em] text-foreground">
                {project.afterLabel}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
