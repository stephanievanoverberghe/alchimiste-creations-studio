'use client';

import { useMemo, useState } from 'react';
import { Minus, Plus } from 'lucide-react';

import { getFaqContent } from '@/application/home/getFaqContent';
import { getFaqJsonLd } from '@/application/seo/structuredData';
import { Container, Heading, Section } from '@/components/ui';
import { cn } from '@/lib/utils/cn';

export function Faq() {
  const content = getFaqContent();
  const [openId, setOpenId] = useState<string | null>(content.items[0]?.id ?? null);
  const faqJsonLd = useMemo(
    () =>
      getFaqJsonLd(
        content.items.map((item) => ({
          question: item.question,
          answer: item.answer,
        })),
      ),
    [content.items],
  );

  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[10%] top-[14%] h-44 w-44 rounded-full bg-primary/7 blur-3xl" />
        <div className="absolute right-[8%] top-[18%] h-36 w-36 rounded-full bg-accent/7 blur-3xl" />
        <div className="absolute left-1/2 bottom-0 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
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

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="relative overflow-hidden rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.90))] shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-8 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/8 blur-3xl"
            />

            <div className="relative z-10 divide-y divide-white/8">
              {content.items.map((item, index) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className={cn(
                      'group relative transition-all duration-300 ease-out',
                      isOpen && 'bg-white/3',
                    )}
                  >
                    <div
                      aria-hidden="true"
                      className={cn(
                        'pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300',
                        isOpen &&
                          'opacity-100 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]',
                      )}
                    />

                    <div
                      aria-hidden="true"
                      className={cn(
                        'pointer-events-none absolute left-0 top-0 h-full w-px bg-transparent transition-all duration-300',
                        isOpen &&
                          'bg-[linear-gradient(180deg,rgba(122,84,255,0.0),rgba(122,84,255,0.85),rgba(122,84,255,0.0))]',
                      )}
                    />

                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      className="flex w-full items-start gap-4 px-6 py-5 text-left transition-all duration-300 ease-out sm:px-8 sm:py-6"
                    >
                      <div className="flex flex-1 items-start gap-4 sm:gap-5">
                        <span className="mt-0.5 inline-flex shrink-0 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[0.68rem] font-medium tracking-[0.18em] text-white/55 backdrop-blur-md">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span className="block pt-0.5">
                          <span className="block text-base font-semibold leading-7 text-foreground transition-colors duration-300 sm:text-lg md:group-hover:text-white">
                            {item.question}
                          </span>
                        </span>
                      </div>

                      <span
                        className={cn(
                          'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/4 text-foreground/70 transition-all duration-300 ease-out',
                          isOpen
                            ? 'border-primary/30 bg-primary/10 text-primary shadow-[0_0_24px_rgba(122,84,255,0.18)]'
                            : 'group-hover:border-white/16 group-hover:bg-white/6 group-hover:text-foreground',
                        )}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>

                    <div
                      id={`faq-panel-${item.id}`}
                      className={cn(
                        'grid transition-all duration-300 ease-out',
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pr-16 sm:px-8 sm:pb-7 sm:pr-20">
                          <div className="h-px w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.12),transparent)]" />

                          <p className="mt-5 max-w-[62ch] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
