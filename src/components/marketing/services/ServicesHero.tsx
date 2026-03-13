import { Badge, Button, Container, Section } from '@/components/ui';
import type { ServicesPageContent } from '@/domain/services/page';

type ServicesHeroProps = {
  content: ServicesPageContent['hero'];
};

export function ServicesHero({ content }: ServicesHeroProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[12%] top-[12%] h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[10%] top-[18%] h-36 w-36 rounded-full bg-accent/7 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary">{content.eyebrow}</Badge>

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={content.primaryCta.href} size="lg">
              {content.primaryCta.label}
            </Button>
            <Button href={content.secondaryCta.href} variant="secondary" size="lg">
              {content.secondaryCta.label}
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            {content.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 backdrop-blur"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
