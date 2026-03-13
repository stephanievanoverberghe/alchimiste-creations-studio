import { Button, Container, Heading, Section } from '@/components/ui';
import type { ServicesPageContent } from '@/domain/services/page';

type ServicesFinalCtaProps = {
  content: ServicesPageContent['finalCta'];
};

export function ServicesFinalCta({ content }: ServicesFinalCtaProps) {
  return (
    <Section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute left-[10%] top-[18%] h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[8%] bottom-[16%] h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="absolute inset-0 -z-10 rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,22,34,0.82),rgba(8,12,22,0.96))] shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl" />

          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <Heading
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
              align="center"
            />

            <div className="mt-12 flex flex-col items-center gap-6">
              <Button
                href={content.buttonHref}
                size="lg"
                className="group relative px-8 py-3 text-[0.95rem] font-semibold tracking-wide"
              >
                {content.buttonLabel}
              </Button>

              <p className="max-w-xl text-sm leading-7 text-muted-foreground">{content.meta}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
