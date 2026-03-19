import { Sparkles } from 'lucide-react';

import { Badge, Container, Section } from '@/components/ui';
import type { AboutPageContent } from '@/domain/about/page';

type AboutHeroProps = {
  content: AboutPageContent['hero'];
};

export function AboutHero({ content }: AboutHeroProps) {
  const remainingHighlights = content.highlights.slice(2);

  return (
    <Section className="relative overflow-hidden pt-10 sm:pt-12 md:pt-16 lg:pt-18">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(66,214,255,0.10),transparent_22%)]" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-24 h-44 w-44 rounded-full bg-accent/10 blur-3xl sm:h-64 sm:w-64" />
      </div>

      <Container>
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,1fr)] lg:gap-14 xl:gap-18">
          <div className="order-2 max-w-2xl text-center md:order-1 md:text-start">
            <Badge variant="primary">{content.eyebrow}</Badge>

            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[4rem] lg:leading-[0.98]">
              {content.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {content.description}
            </p>

            {remainingHighlights.length ? (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {remainingHighlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-4 py-3 text-sm text-muted-foreground backdrop-blur-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="order-1 relative lg:order-2">
            <div className="absolute inset-0 rounded-4xl bg-primary/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.84),rgba(9,14,28,0.95))] shadow-[0_28px_100px_rgba(0,0,0,0.24)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(66,214,255,0.10),transparent_22%)]"
              />

              <div className="relative p-5 sm:p-6 lg:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/14 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/45">
                      {content.aside.eyebrow}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-foreground">
                      Alchimiste Créations
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-white/4 p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/45">
                    {content.aside.eyebrow}
                  </p>
                  <p className="mt-3 text-base font-medium leading-7 text-foreground">
                    {content.aside.title}
                  </p>
                </div>

                <div className="mt-5 grid gap-3">
                  {content.aside.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-[1.2rem] border border-white/8 bg-black/10 px-4 py-3"
                    >
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-medium text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/8 bg-[linear-gradient(180deg,rgba(12,16,28,0.82),rgba(8,12,22,0.94))] px-5 py-4 sm:px-6 lg:px-7">
                <p className="text-sm text-muted-foreground">{content.aside.description}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
