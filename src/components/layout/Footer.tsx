import Link from 'next/link';
import { Button, Container, Badge } from '@/components/ui';
import { footerContent, siteBrand, siteValueProposition } from '@/content/site';

export function Footer() {
  const year = new Date().getFullYear();
  const MailIcon = footerContent.contact.icons.mail;
  const MapIcon = footerContent.contact.icons.map;

  return (
    <footer className="mt-10 border-t border-border/60 py-12 md:py-16">
      <Container className="space-y-10">
        <section className="relative overflow-hidden rounded-4xl border border-border/70 bg-[linear-gradient(180deg,hsl(var(--surface))/0.92,hsl(var(--bg))/0.96)] p-6 shadow-[0_18px_60px_rgba(4,7,18,0.42)] md:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-primary/18 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-accent/12 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
            <div className="space-y-6">
              <Badge variant="primary" className="w-fit">
                {footerContent.intro}
              </Badge>

              <div className="space-y-4">
                <p className="lg:max-w-[20ch] text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
                  {footerContent.title}
                </p>

                <p className="max-w-2xl text-sm leading-relaxed text-text-muted md:text-base">
                  {footerContent.description}
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-3">
                {footerContent.highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li
                      key={item.label}
                      className="rounded-2xl border border-border/60 bg-surface/55 px-4 py-4 text-sm text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                    >
                      <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-surface-elevated text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p>{item.label}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-3xl border border-border/70 bg-[linear-gradient(180deg,hsl(var(--surface-elevated))/0.92,hsl(var(--surface))/0.88)] p-5 shadow-[0_12px_34px_rgba(8,10,20,0.24)] md:p-6">
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm font-semibold tracking-wide text-text">{siteBrand}</p>
                  <p className="text-sm leading-relaxed text-text-muted">{siteValueProposition}</p>
                </div>

                <div className="space-y-3 text-sm text-text-muted">
                  <p className="inline-flex items-center gap-2">
                    <MailIcon className="h-4 w-4 shrink-0 text-primary" />
                    <a
                      href={`mailto:${footerContent.contact.email}`}
                      className="transition-colors duration-(--motion-fast) ease-(--ease-standard) hover:text-text"
                    >
                      {footerContent.contact.email}
                    </a>
                  </p>

                  <p className="inline-flex items-center gap-2">
                    <MapIcon className="h-4 w-4 shrink-0 text-primary" />
                    <span>{footerContent.contact.location}</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {footerContent.socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-surface/50 text-text-muted transition-all duration-(--motion-fast) ease-(--ease-standard) hover:-translate-y-0.5 hover:border-primary/35 hover:text-text"
                        aria-label={item.label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>

                <div className="pt-1 text-center md:text-start">
                  <Button href={footerContent.cta.href} size="sm">
                    {footerContent.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border/60 pt-8 md:grid-cols-[1fr_auto_auto] md:items-start md:gap-12">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-wide text-text">{siteBrand}</p>
            <p className="max-w-lg text-sm leading-relaxed text-text-muted">
              Des sites web clairs, modernes et crédibles pour présenter votre activité avec plus de
              justesse.
            </p>
          </div>

          <nav aria-label="Navigation pied de page" className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Navigation
            </p>
            <ul className="space-y-2">
              {footerContent.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex text-sm text-text-muted transition-all duration-(--motion-fast) ease-(--ease-standard) hover:translate-x-1 hover:text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Pages légales" className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Légal
            </p>
            <ul className="space-y-2">
              {footerContent.legalNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex text-sm text-text-muted transition-all duration-(--motion-fast) ease-(--ease-standard) hover:translate-x-1 hover:text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <div className="flex flex-col gap-2 border-t border-border/60 pt-4 text-center text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteBrand}. Tous droits réservés.
          </p>
          <p>{footerContent.bottomText}</p>
        </div>
      </Container>
    </footer>
  );
}
