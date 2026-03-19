import { Container, Heading, MobileSwipeSteps, Section } from '@/components/ui';
import type { AboutPageContent } from '@/domain/about/page';

type AboutVisionProps = {
  content: AboutPageContent['vision'];
};

export function AboutVision({ content }: AboutVisionProps) {
  return (
    <Section className="relative overflow-hidden py-10 sm:py-14 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[10%] top-[14%] h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[8%] bottom-[10%] h-44 w-44 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <div className="lg:sticky lg:top-24">
                <Heading
                  eyebrow={content.eyebrow}
                  title={content.title}
                  description={content.description}
                  align="left"
                />

                <div className="mt-8 hidden lg:block">
                  <div className="h-px w-24 bg-[linear-gradient(90deg,rgba(255,255,255,0.16),transparent)]" />
                </div>
              </div>
            </div>

            <div>
              <MobileSwipeSteps
                className="mt-2"
                items={content.points.map((point, index) => ({
                  id: point.id,
                  number: String(index + 1).padStart(2, '0'),
                  title: point.title,
                  description: point.description,
                }))}
              />

              <div className="hidden gap-5 lg:grid">
                {content.points.map((point, index) => (
                  <article
                    key={point.id}
                    className="group relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.92))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-transform duration-300 ease-out md:hover:-translate-y-1 sm:p-7"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.10),transparent_28%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    <div className="relative z-10 grid gap-5 sm:grid-cols-[84px_minmax(0,1fr)] sm:gap-6">
                      <div className="flex items-start">
                        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/40">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-[1.35rem]">
                          {point.title}
                        </h3>

                        <p className="mt-3 max-w-[52ch] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
