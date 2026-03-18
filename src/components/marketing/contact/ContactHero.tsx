import { Badge, Container, Section } from '@/components/ui';
import type { ContactPageContent } from '@/domain/contact/page';

type ContactHeroProps = {
  content: ContactPageContent['hero'];
};

export function ContactHero({ content }: ContactHeroProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_40%)]" />
        <div className="absolute left-[8%] top-[10%] h-52 w-52 rounded-full bg-primary/10 blur-[110px]" />
        <div className="absolute right-[8%] top-[16%] h-44 w-44 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-[-6%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/6 blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]" />
      </div>

      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(16,22,35,0.78),rgba(8,12,22,0.94))] px-6 py-10 shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]"
            />
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-32 w-32 rounded-full bg-primary/8 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-accent/8 blur-3xl"
            />

            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="primary">{content.eyebrow}</Badge>

              <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.02]">
                {content.title}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-8">
                {content.description}
              </p>

              <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {content.highlights.map((item, index) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 px-4 py-4 text-left shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/14 hover:bg-white/4.5"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]"
                    />
                    <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/35">
                      0{index + 1}
                    </span>
                    <p className="mt-3 text-sm font-medium leading-6 text-foreground/88">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
