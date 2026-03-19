'use client';

import { useMemo, useState } from 'react';

import { Heading, Container, Section, Badge } from '@/components/ui';
import { Tabs, type TabsItem } from '@/components/ui/Tabs';
import type { ContactPageContent } from '@/domain/contact/page';

type ContactGuidelinesProps = {
  content: ContactPageContent['guidelines'];
};

type GuidelineTabValue = ContactPageContent['guidelines']['cards'][number]['id'];

export function ContactGuidelines({ content }: ContactGuidelinesProps) {
  const [activeTab, setActiveTab] = useState<GuidelineTabValue>(content.cards[0]?.id ?? 'projects');

  const items = useMemo<TabsItem<GuidelineTabValue>[]>(
    () =>
      content.cards.map((card, index) => ({
        value: card.id,
        label: card.title,
        badge: `0${index + 1}`,
      })),
    [content.cards],
  );

  const activeCard = content.cards.find((card) => card.id === activeTab) ?? content.cards[0];

  if (!activeCard) return null;

  return (
    <Section className="relative overflow-hidden py-6 sm:py-10 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[8%] top-[24%] h-36 w-36 rounded-full bg-accent/7 blur-3xl" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <Tabs
            items={items}
            value={activeTab}
            onValueChange={setActiveTab}
            listClassName="w-full"
            triggerClassName="min-w-[11rem] flex-none sm:flex-1"
          />

          <div className="relative mt-5 overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.92))] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]"
            />
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/[0.035] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-primary/6 blur-3xl"
            />

            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
              <div>
                <Badge variant="default">Axe actif</Badge>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {activeCard.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {activeCard.description}
                </p>
              </div>

              <div className="space-y-3">
                {activeCard.points.map((point) => (
                  <div
                    key={point}
                    className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3.5 backdrop-blur-sm"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.18),rgba(255,255,255,0))]"
                    />
                    <p className="pr-2 text-sm leading-7 text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
