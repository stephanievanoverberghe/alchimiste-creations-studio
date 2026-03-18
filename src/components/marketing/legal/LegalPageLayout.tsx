import Link from 'next/link';

import type { LegalPageContent } from '@/domain/legal/pages';
import { Badge, Container, Section } from '@/components/ui';

type LegalPageLayoutProps = {
  content: LegalPageContent;
};

export function LegalPageLayout({ content }: LegalPageLayoutProps) {
  return (
    <main>
      <Section className="relative overflow-hidden pt-10 sm:pt-12 md:pt-16 lg:pt-18">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(66,214,255,0.10),transparent_22%)]" />
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute right-0 top-24 h-44 w-44 rounded-full bg-accent/10 blur-3xl sm:h-64 sm:w-64" />
        </div>

        <Container className="max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            {content.eyebrow ? <Badge variant="primary">{content.eyebrow}</Badge> : null}

            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[4rem] lg:leading-[0.98]">
              {content.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
              {content.updatedAt}
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.9))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]"
                />
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-foreground/45">
                  Sommaire
                </p>

                <nav className="mt-5">
                  <ul className="space-y-2">
                    {content.sections.map((section, index) => (
                      <li key={section.id}>
                        <Link
                          href={`#${section.id}`}
                          className="group flex items-start gap-3 rounded-2xl border border-transparent px-3 py-3 text-sm text-muted-foreground transition hover:border-white/8 hover:bg-white/4 hover:text-foreground"
                        >
                          <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-foreground/45">
                            0{index + 1}
                          </span>
                          <span className="pt-0.5 leading-6">{section.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            <div className="space-y-5">
              {content.sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="group scroll-mt-28 overflow-hidden rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.76),rgba(9,14,28,0.92))] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -right-8 top-0 h-24 w-24 rounded-full bg-white/[0.035] blur-3xl"
                  />

                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 min-w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/4 px-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-foreground/45">
                      0{index + 1}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                        {section.title}
                      </h2>

                      <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
