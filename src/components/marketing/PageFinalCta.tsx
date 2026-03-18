import { cn } from '@/lib/utils/cn';
import { Button, Container, Heading, Section } from '@/components/ui';

type PageFinalCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  meta?: string;
  align?: 'left' | 'center';
  className?: string;
  buttonClassName?: string;
  panelSize?: 'md' | 'lg';
};

export function PageFinalCta({
  eyebrow,
  title,
  description,
  buttonLabel,
  buttonHref,
  meta,
  align = 'center',
  className,
  buttonClassName,
  panelSize = 'lg',
}: PageFinalCtaProps) {
  return (
    <Section className={cn('relative overflow-hidden py-24 sm:py-28 lg:py-36', className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute left-[12%] top-[20%] h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[18%] h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
      </div>

      <Container>
        <div
          className={cn(
            'relative mx-auto text-center',
            panelSize === 'md' ? 'max-w-3xl' : 'max-w-4xl',
            align === 'left' ? 'text-left' : 'text-center',
          )}
        >
          <div className="absolute inset-0 -z-10 rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,22,34,0.82),rgba(8,12,22,0.96))] shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl" />

          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <Heading eyebrow={eyebrow} title={title} description={description} align={align} />

            <div
              className={cn(
                'mt-12 flex flex-col gap-6',
                align === 'left' ? 'items-start' : 'items-center',
              )}
            >
              <Button href={buttonHref} size="lg" className={buttonClassName}>
                {buttonLabel}
              </Button>

              {meta ? (
                <p className="max-w-xl text-sm leading-7 text-muted-foreground">{meta}</p>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
