import { Container, Heading, Section } from '@/components/ui';
import type { ServicesPageContent } from '@/domain/services/page';
import type { Service } from '@/domain/services/types';

type ServicesComparisonProps = {
  content: ServicesPageContent['comparison'];
  services: Service[];
};

export function ServicesComparison({ content, services }: ServicesComparisonProps) {
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

        <div className="mt-12 overflow-hidden rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.76),rgba(9,14,28,0.88))] shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="px-5 py-4 text-sm font-semibold text-foreground sm:px-6">
                    Critère
                  </th>
                  {services.map((service) => (
                    <th
                      key={service.slug}
                      className="px-5 py-4 text-sm font-semibold text-foreground sm:px-6"
                    >
                      {service.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row) => (
                  <tr key={row.id} className="border-b border-white/8 last:border-b-0">
                    <td className="px-5 py-4 text-sm font-medium text-foreground/80 sm:px-6">
                      {row.label}
                    </td>
                    {services.map((service) => (
                      <td
                        key={service.slug}
                        className="px-5 py-4 text-sm text-muted-foreground sm:px-6"
                      >
                        {row.values[service.slug]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Section>
  );
}
