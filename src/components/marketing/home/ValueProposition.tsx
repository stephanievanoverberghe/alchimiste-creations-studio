import { getValuePropositionContent } from '@/application/home/getValuePropositionContent';
import { Card, Container, Heading, MobileSwipeSteps, Section } from '@/components/ui';
import { cn } from '@/lib/utils/cn';

export function ValueProposition() {
  const content = getValuePropositionContent();

  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[10%] top-[10%] h-36 w-36 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[8%] top-[18%] h-32 w-32 rounded-full bg-accent/7 blur-3xl" />
        <div className="absolute left-1/2 bottom-0 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/6 blur-3xl" />
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

        <MobileSwipeSteps
          className="mt-14"
          items={content.items.map((item, index) => ({
            id: item.id,
            number: String(index + 1).padStart(2, '0'),
            title: item.title,
            description: item.description,
          }))}
        />

        <div className="mt-14 hidden gap-5 lg:grid lg:grid-cols-3 lg:gap-6">
          {content.items.map((item, index) => {
            const Icon = item.icon;
            const isMiddle = index === 1;

            return (
              <Card
                key={item.id}
                className={cn(
                  'relative h-full overflow-hidden rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.86))] shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl',
                  isMiddle && 'lg:-translate-y-1',
                )}
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_32%)]" />
                  <div className="absolute -top-10 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl opacity-70" />
                </div>

                <div className="relative flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/32">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-7 flex-1">
                    <h3 className="lg:max-w-[16ch] text-[1.15rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.22rem] lg:text-[1.3rem]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-[0.98rem] sm:leading-8">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="h-px w-8 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent)]" />
                    <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/38">
                      Méthode
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
