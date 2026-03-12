import { getSocialProofContent } from '@/application/home/getSocialProofContent';
import { Badge, Container, Section } from '@/components/ui';

export function SocialProof() {
  const content = getSocialProofContent();

  return (
    <Section className="relative overflow-hidden py-16 sm:py-18 lg:py-22">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[10%] top-[8%] h-36 w-36 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[8%] top-[18%] h-32 w-32 rounded-full bg-accent/7 blur-3xl" />
        <div className="absolute left-1/2 bottom-0 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/6 blur-3xl" />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,20,31,0.86),rgba(8,12,22,0.96))] shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 top-0 h-44 w-44 rounded-full bg-primary/8 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/3 h-32 w-32 rounded-full bg-accent/6 blur-3xl"
          />

          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-12 lg:p-10 xl:p-12">
            <div className="relative max-w-2xl">
              <div
                aria-hidden="true"
                className="absolute left-0 top-14 hidden h-[calc(100%-3.5rem)] w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)] lg:block"
              />

              <div className="lg:pl-8">
                <Badge variant="primary">{content.eyebrow}</Badge>

                <blockquote className="mt-6 text-[1.4rem] font-medium leading-[1.42] tracking-[-0.04em] text-foreground sm:text-[1.7rem] lg:text-[2rem] lg:leading-[1.34] xl:text-[2.15rem]">
                  <span className="text-foreground/42">“</span>
                  {content.quote}
                  <span className="text-foreground/42">”</span>
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent)]" />
                  <div className="text-sm leading-6 text-muted-foreground">
                    <span className="text-foreground/90">{content.author}</span>
                    <span className="mx-2 text-foreground/28">—</span>
                    <span>{content.role}</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="grid gap-3 sm:gap-4">
              {content.stats.map((stat, index) => (
                <li
                  key={stat.id}
                  className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 ease-out sm:p-5 md:hover:border-white/14 md:hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,rgba(255,255,255,0.05),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="max-w-104">
                      <p className="text-[1.02rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.16rem]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{stat.label}</p>
                    </div>

                    <span className="shrink-0 rounded-full border border-white/8 bg-white/3 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
