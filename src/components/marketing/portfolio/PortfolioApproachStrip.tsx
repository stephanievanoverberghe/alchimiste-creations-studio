import { Container, Heading, Section } from '@/components/ui';
import type { PortfolioPageContent } from '@/domain/portfolio/page';

type PortfolioApproachStripProps = {
  content: PortfolioPageContent['approach'];
};

export function PortfolioApproachStrip({ content }: PortfolioApproachStripProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[10%] top-[18%] h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[10%] bottom-[12%] h-44 w-44 rounded-full bg-accent/8 blur-3xl" />
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

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,38,0.78),rgba(10,14,24,0.94))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-transform duration-300 ease-out md:hover:-translate-y-1"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]"
              />

              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-medium text-foreground/85">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/35">
                  Principe
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground sm:text-[1.35rem]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
