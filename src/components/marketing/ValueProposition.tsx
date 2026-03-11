import { getValuePropositionContent } from '@/application/home/getValuePropositionContent';
import { Card, Container, Heading, Section } from '@/components/ui';

export function ValueProposition() {
  const content = getValuePropositionContent();

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.items.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.id}
                className="group h-full border-border/70 bg-card/70 p-6 shadow-(--shadow-card) transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="flex h-full flex-col">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-200 ease-out group-hover:scale-105">
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
