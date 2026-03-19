import { Badge, Container, Section } from '@/components/ui';
import type { ContactPageContent } from '@/domain/contact/page';

type ContactAltProps = {
  content: ContactPageContent['alternativeContact'];
};

export function ContactAlt({ content }: ContactAltProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.85fr)]">
          <div className="rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.86))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-8">
            <Badge variant="default">{content.eyebrow}</Badge>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {content.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {content.description}
            </p>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">{content.note}</p>
          </div>

          <aside className="rounded-3xl border border-white/8 bg-white/3 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:p-8">
            <dl className="space-y-6">
              <div>
                <dt className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/35">
                  {content.emailLabel}
                </dt>
                <dd className="mt-2 text-base font-medium text-foreground">
                  <a
                    href={`mailto:${content.email}`}
                    className="transition hover:text-primary focus-visible:outline-none focus-visible:text-primary"
                  >
                    {content.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/35">
                  {content.responseTimeLabel}
                </dt>
                <dd className="mt-2 text-sm leading-7 text-muted-foreground">
                  {content.responseTime}
                </dd>
              </div>

              <div>
                <dt className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/35">
                  {content.availabilityLabel}
                </dt>
                <dd className="mt-2 text-sm leading-7 text-muted-foreground">
                  {content.availability}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
