import { Badge, Container, Heading, Section } from '@/components/ui';
import type { ServicesPageContent } from '@/domain/services/page';
import type { Service } from '@/domain/services/types';

type ServicesDetailsProps = {
  content: ServicesPageContent['details'];
  services: Service[];
};

export function ServicesDetails({ content, services }: ServicesDetailsProps) {
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

        <div className="mt-14 space-y-8">
          {services.map((service) => (
            <section
              key={service.slug}
              id={service.slug}
              className="rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.88))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8 lg:p-10"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant={service.featured ? 'primary' : 'default'}>
                  {service.highlightLabel ?? 'Offre'}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  À partir de {service.startingPrice} • {service.timeline}
                </span>
              </div>

              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {service.title}
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <InfoBlock title="Objectifs" items={service.objectives} />
                <InfoBlock title="Inclus" items={service.includes} />
                <InfoBlock title="Livrables" items={service.deliverables} />
                <InfoBlock
                  title="Contenu possible"
                  items={service.possibleContent ?? ['Selon le projet']}
                />
              </div>

              {service.options?.length ? (
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/3 p-5">
                  <p className="text-sm font-semibold text-foreground">Options possibles</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.options.map((option) => (
                      <li
                        key={option.name}
                        className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/10 px-4 py-3 text-sm"
                      >
                        <span className="text-muted-foreground">{option.name}</span>
                        <span className="font-medium text-foreground">{option.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}

type InfoBlockProps = {
  title: string;
  items: string[];
};

function InfoBlock({ title, items }: InfoBlockProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/3 p-5">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
