import { Container, Heading, Section } from '@/components/ui';

const steps = [
  {
    number: '01',
    title: 'Échange initial',
    text: 'Comprendre votre activité, votre priorité et le format le plus adapté.',
  },
  {
    number: '02',
    title: 'Structure & direction',
    text: 'Définir une base claire, crédible et alignée avec votre objectif.',
  },
  {
    number: '03',
    title: 'Design & développement',
    text: 'Créer un site moderne, responsive et cohérent dans les détails.',
  },
  {
    number: '04',
    title: 'Livraison & mise en ligne',
    text: 'Finaliser, vérifier et mettre en ligne une version prête à être utilisée.',
  },
];

export function ServicesProcessMini() {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow="Méthode"
            title="Un cadre clair, du premier échange à la mise en ligne."
            description="L’objectif n’est pas de vous noyer dans un process complexe, mais de rendre la collaboration simple, lisible et rassurante."
            align="center"
          />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,38,0.76),rgba(10,14,24,0.92))] p-6"
            >
              <p className="text-sm font-medium tracking-[0.14em] text-primary">{step.number}</p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
