import { Compass, RefreshCcw, Rocket } from 'lucide-react';

import { Container, Section } from '@/components/ui';
import type { ServicesPageContent } from '@/domain/services/page';

type ServicesProblemStripProps = {
  content: ServicesPageContent['problemStrip'];
};

const ICON_BY_KEY = {
  rocket: Rocket,
  compass: Compass,
  refreshCcw: RefreshCcw,
};

export function ServicesProblemStrip({ content }: ServicesProblemStripProps) {
  return (
    <Section className="relative py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="grid gap-4 lg:grid-cols-3">
          {content.items.map((item) => {
            const Icon = ICON_BY_KEY[item.icon];

            return (
              <div
                key={item.id}
                className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,38,0.76),rgba(10,14,24,0.9))] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/6 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <h2 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
