import { Badge, Container, Heading, Section } from '@/components/ui';
import type { ServicesPageContent } from '@/domain/services/page';
import type { Service } from '@/domain/services/types';

type ServicesSelectorProps = {
  content: ServicesPageContent['selector'];
  services: Service[];
};

export function ServicesSelector({ content, services }: ServicesSelectorProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.86))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl"
            >
              <Badge variant={service.featured ? 'primary' : 'default'}>
                {service.highlightLabel ?? 'Offre'}
              </Badge>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>

              <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
                {service.target.slice(0, 4).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
