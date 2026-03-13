import { Badge, Button, Container, Section } from '@/components/ui';
import { Sparkles, ArrowUpRight, Layers3, Timer, ShieldCheck } from 'lucide-react';
import type { ServicesPageContent } from '@/domain/services/page';

type ServicesHeroProps = {
  content: ServicesPageContent['hero'];
};

const heroPoints = [
  {
    icon: Layers3,
    label: 'Offres cadrées',
    value: 'Périmètre clair',
  },
  {
    icon: Timer,
    label: 'Délais réalistes',
    value: '2 à 6 semaines',
  },
  {
    icon: ShieldCheck,
    label: 'Objectif',
    value: 'Clarté + crédibilité',
  },
];

export function ServicesHero({ content }: ServicesHeroProps) {
  return (
    <Section className="relative overflow-hidden pt-10 sm:pt-12 md:pt-16 lg:pt-18">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(66,214,255,0.10),transparent_22%)]" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-24 h-44 w-44 rounded-full bg-accent/10 blur-3xl sm:h-64 sm:w-64" />
      </div>
      <Container>
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.82fr)] lg:gap-14 xl:gap-18">
          <div className="max-w-2xl text-center md:text-start">
            <Badge variant="primary" className="mb-4 sm:mb-5">
              {content.eyebrow}
            </Badge>

            <h1 className="max-w-xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.55rem] lg:leading-[1.02]">
              {content.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={content.primaryCta.href} size="lg">
                {content.primaryCta.label}
              </Button>

              <Button href={content.secondaryCta.href} variant="secondary" size="lg">
                {content.secondaryCta.label}
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {content.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-4xl bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(20,24,40,0.92),rgba(10,14,24,0.96))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/14 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-foreground/55">
                    Offre la plus demandée
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">Site vitrine</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                Pour présenter votre activité avec une structure claire, un design crédible et une
                base suffisamment solide pour évoluer.
              </p>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/4 p-4">
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-foreground/50">
                  Investissement
                </p>
                <p className="mt-2 text-2xl font-semibold text-foreground">À partir de 1 800 €</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Délai habituel : 3 à 5 semaines
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {heroPoints.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/10 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/6 text-foreground/85">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm text-muted-foreground">{label}</span>
                    </div>
                    <span className="text-sm font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#site-vitrine"
                className="mt-6 inline-flex items-center text-sm font-semibold text-foreground transition hover:text-primary"
              >
                Voir le détail de l’offre
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
