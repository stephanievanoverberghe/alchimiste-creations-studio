import Link from 'next/link';
import { Container, Section, Heading, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <main>
      <Section>
        <Container className="space-y-8 text-center">
          <Heading
            align="center"
            eyebrow="Erreur 404"
            title="Cette page n’existe pas"
            description="Le lien est peut-être obsolète, ou la page a été déplacée."
            className="mx-auto max-w-2xl"
          />

          <div className="flex justify-center">
            <Button href="/" size="lg">
              Revenir à l’accueil
            </Button>
          </div>

          <p className="text-sm text-text-muted">
            Besoin d’aide ? Écrivez à{' '}
            <Link
              href="mailto:bonjour@alchimiste-creations.fr"
              className="text-text hover:text-primary"
            >
              bonjour@alchimiste-creations.fr
            </Link>
            .
          </p>
        </Container>
      </Section>
    </main>
  );
}
