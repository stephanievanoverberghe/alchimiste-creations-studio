import { getHumanSectionContent } from '@/application/home/getHumanSectionContent';
import { Badge, Container, Heading, Section } from '@/components/ui';

export function HumanSection() {
  const content = getHumanSectionContent();

  return (
    <Section className="relative overflow-hidden py-18 sm:py-22 lg:py-26">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[8%] top-[20%] h-44 w-44 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[12%] top-[12%] h-36 w-36 rounded-full bg-accent/7 blur-3xl" />
      </div>

      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
          <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.8),rgba(9,14,28,0.92))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8">
            <Heading
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />

            <div className="mt-6 space-y-4">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-muted-foreground sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {content.metrics.map((metric) => (
              <article
                key={metric.id}
                className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <Badge variant="default" className="w-fit">
                  {metric.label}
                </Badge>
                <p className="mt-4 text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {metric.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
