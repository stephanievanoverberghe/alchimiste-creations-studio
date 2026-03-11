import { getHeroContent } from '@/application/home/getHeroContent';
import { HeroMockup } from '@/components/marketing/HeroMockup';
import { Badge, Button, Container, Section } from '@/components/ui';

export function Hero() {
  const content = getHeroContent();

  return (
    <Section className="relative overflow-hidden pt-8 sm:pt-10 md:pt-14 lg:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(66,214,255,0.10),transparent_22%)]" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-24 h-44 w-44 rounded-full bg-accent/10 blur-3xl sm:h-64 sm:w-64" />
      </div>

      <Container>
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-16 xl:gap-20">
          <div className="order-2 max-w-2xl md:order-1">
            <Badge variant="primary" className="mb-4 sm:mb-5">
              {content.eyebrow}
            </Badge>

            <h1 className="max-w-xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Button href={content.primaryCta.href} size="lg" className="w-full sm:w-auto">
                {content.primaryCta.label}
              </Button>

              <Button
                href={content.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {content.secondaryCta.label}
              </Button>
            </div>

            <ul className="mt-7 flex flex-wrap gap-3 text-sm text-muted-foreground sm:mt-8">
              {content.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border/70 bg-background/50 px-3 py-1.5 backdrop-blur transition-all duration-200 ease-out md:hover:-translate-y-0.5 md:hover:border-primary/30"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 mb-8 md:order-2 md:mb-0">
            <HeroMockup mockup={content.mockup} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
