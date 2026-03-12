import { getValuePropositionContent } from '@/application/home/getValuePropositionContent';
import { Card, Container, Heading, Section } from '@/components/ui';
import { cn } from '@/lib/utils/cn';

export function ValueProposition() {
  const content = getValuePropositionContent();

  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8">
          {content.items.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.id}
                className={cn(
                  'group relative h-full overflow-hidden border-border/70 bg-card/70 shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition-all duration-300 ease-out',
                  'md:hover:-translate-y-1 md:hover:border-primary/18 md:hover:shadow-[0_20px_54px_rgba(0,0,0,0.28)]',
                )}
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <div className="absolute left-1/2 top-0 h-36 w-36 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 md:group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />
                </div>

                <div className="relative flex h-full flex-col p-5 sm:p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 md:group-hover:scale-[1.03] md:group-hover:border-primary/30 md:group-hover:bg-primary/12">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-[1.12rem] font-semibold tracking-tight text-foreground sm:text-[1.22rem] lg:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-[0.98rem] sm:leading-8">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
