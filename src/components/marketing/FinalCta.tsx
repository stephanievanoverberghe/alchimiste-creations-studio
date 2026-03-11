import { Button, Container, Heading, Section } from '@/components/ui';

export function FinalCta() {
  return (
    <Section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[12%] top-[20%] h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[18%] h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow="Démarrer un projet"
            title="Et si votre site devenait enfin un vrai levier pour votre activité ?"
            description="Un échange de 30 minutes permet de clarifier votre projet, vos objectifs et la meilleure façon de structurer votre présence en ligne."
            align="center"
          />

          <div className="mt-10 flex flex-col items-center gap-5">
            <Button href="/contact" size="lg">
              Réserver un appel découverte
            </Button>

            <p className="text-sm text-muted-foreground">Sans engagement • Échange de 30 minutes</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
