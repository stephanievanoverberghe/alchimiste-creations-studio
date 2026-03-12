import { getProblemContent } from '@/application/home/getProblemContent';
import { Container, Section } from '@/components/ui';

export function Problem() {
  const content = getProblemContent();

  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[8%] top-[24%] h-36 w-36 rounded-full bg-accent/7 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto mt-6 max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.3rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.88))] shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="grid gap-12 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:px-10 lg:py-12 xl:px-12 xl:py-14">
              <div className="lg:pr-6">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
                  {content.eyebrow}
                </p>

                <h2 className="mt-5 max-w-[14ch] text-[2rem] font-semibold tracking-tight text-text sm:text-[2.4rem] sm:leading-[1.08] md:text-[2.8rem] lg:text-[3.1rem]">
                  {content.title}
                </h2>

                <p className="mt-6 max-w-[34ch] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {content.description}
                </p>
              </div>

              <div className="space-y-0">
                {content.items.map((item, index) => (
                  <article
                    key={item.id}
                    className={[
                      'group relative py-7 sm:py-8',
                      index !== 0 ? 'border-t border-white/8' : '',
                    ].join(' ')}
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="mt-2 flex h-3.5 w-3.5 shrink-0 rounded-full bg-primary/70 shadow-[0_0_18px_rgba(122,84,255,0.42)]" />

                      <div className="min-w-0">
                        <h3 className="text-[1.15rem] font-semibold tracking-tight text-foreground sm:text-[1.35rem] lg:text-[1.55rem] lg:leading-[1.08]">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-[40ch] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                          {item.consequence}
                        </p>
                      </div>
                    </div>

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.10),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
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
