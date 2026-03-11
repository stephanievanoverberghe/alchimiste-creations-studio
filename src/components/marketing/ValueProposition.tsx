import { getValuePropositionContent } from '@/application/home/getValuePropositionContent';
import { Card, Container, Heading, Section } from '@/components/ui';

export function ValueProposition() {
  const content = getValuePropositionContent();

  return (
    <Section className="relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.id}
                className="relative h-full overflow-hidden border-border/70 bg-card/70 shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <div className="absolute left-1/2 top-0 h-36 w-36 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />
                </div>

                <div className="relative flex h-full flex-col p-6">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
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
