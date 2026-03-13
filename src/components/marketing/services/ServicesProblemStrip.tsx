import { Container, Section } from '@/components/ui';
import { Compass, RefreshCcw, Rocket } from 'lucide-react';

const problems = [
  {
    icon: Rocket,
    title: 'Lancer une présence crédible',
    text: 'Quand il faut présenter une offre clairement sans partir sur un site trop lourd.',
  },
  {
    icon: Compass,
    title: 'Structurer une activité durable',
    text: 'Quand votre activité mérite un site complet, cohérent et professionnel.',
  },
  {
    icon: RefreshCcw,
    title: 'Moderniser un existant',
    text: 'Quand votre site ne reflète plus votre niveau, votre image ou votre ambition.',
  },
];

export function ServicesProblemStrip() {
  return (
    <Section className="relative py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="grid gap-4 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,38,0.76),rgba(10,14,24,0.9))] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/6 text-primary">
                <Icon className="h-5 w-5" />
              </div>

              <h2 className="mt-4 text-lg font-semibold tracking-tight text-foreground">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
