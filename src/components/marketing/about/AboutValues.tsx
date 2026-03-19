import { Container, Heading, MobileSwipeSteps, Section } from '@/components/ui';
import type { AboutPageContent } from '@/domain/about/page';

type AboutValuesProps = {
  content: AboutPageContent['values'];
};

export function AboutValues({ content }: AboutValuesProps) {
  const [featuredValue, ...otherValues] = content.items;

  return (
    <Section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[8%] top-[18%] h-36 w-36 rounded-full bg-primary/7 blur-3xl" />
        <div className="absolute right-[10%] bottom-[12%] h-40 w-40 rounded-full bg-accent/7 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
            <div>
              <Heading
                eyebrow={content.eyebrow}
                title={content.title}
                description={content.description}
                align="left"
              />
            </div>

            <div className="lg:hidden">
              <MobileSwipeSteps
                className="mt-2"
                items={content.items.map((item, index) => ({
                  id: item.id,
                  number: String(index + 1).padStart(2, '0'),
                  title: item.title,
                  description: item.description,
                }))}
              />
            </div>

            {featuredValue ? (
              <article className="relative hidden overflow-hidden rounded-4xl border border-primary/20 bg-[linear-gradient(180deg,rgba(124,92,255,0.10),rgba(10,14,24,0.96))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8 lg:block">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.14),transparent_30%)]"
                />

                <div className="relative z-10">
                  <p className="text-[0.72rem] uppercase tracking-[0.16em] text-primary/85">
                    Valeur fondatrice
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-[2rem] sm:leading-[1.08]">
                    {featuredValue.title}
                  </h3>

                  <p className="mt-4 max-w-[56ch] text-sm leading-8 text-muted-foreground sm:text-base">
                    {featuredValue.description}
                  </p>
                </div>
              </article>
            ) : null}
          </div>

          {otherValues.length ? (
            <div className="mt-8 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,1fr)] lg:grid">
              {otherValues.map((item, index) => (
                <article
                  key={item.id}
                  className={[
                    'rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.76),rgba(9,14,28,0.90))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl',
                    index === 1 ? 'xl:-translate-y-4' : '',
                  ].join(' ')}
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/35">
                    {String(index + 2).padStart(2, '0')}
                  </p>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
