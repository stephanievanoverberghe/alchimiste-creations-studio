import { Container, Heading, Section } from '@/components/ui';
import type { AboutPageContent } from '@/domain/about/page';

type AboutValuesProps = {
  content: AboutPageContent['values'];
};

export function AboutValues({ content }: AboutValuesProps) {
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {content.items.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.86))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold tracking-tight text-foreground">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
