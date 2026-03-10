import Link from 'next/link';
import { Button, Container } from '@/components/ui';
import { siteContent } from '@/content/site-content';

export function Footer() {
  const year = new Date().getFullYear();
  const MailIcon = siteContent.footerMetaIcons.mail;
  const MapIcon = siteContent.footerMetaIcons.map;

  return (
    <footer className="mt-20 border-t border-border/70 py-12 md:py-14 lg:py-16">
      <Container className="space-y-10 md:space-y-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)] lg:gap-10">
          <div className="animate-[revealUp_var(--motion-slow)_var(--ease-standard)_both] space-y-4">
            <p className="text-sm font-semibold tracking-wide">{siteContent.brand}</p>
            <p className="max-w-xl text-sm leading-relaxed text-text-muted">
              {siteContent.valueProposition}
            </p>

            <ul className="space-y-2 flex flex-col">
              {siteContent.footerHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.label}
                    className="inline-flex items-center gap-2 text-sm text-text-muted"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>

            <Button href={siteContent.ctaPrimary.href} size="sm">
              {siteContent.ctaPrimary.label}
            </Button>
          </div>

          <div className="animate-[revealUp_var(--motion-slow)_var(--ease-standard)_both] grid gap-8 sm:grid-cols-2 md:col-span-2 lg:col-span-1 lg:grid-cols-1">
            <nav aria-label="Navigation pied de page" className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Navigation
              </p>
              <ul className="space-y-2">
                {siteContent.nav.map((item) => (
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
                {siteContent.legal.map((item) => (
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
          </div>

          <div className="animate-[revealUp_var(--motion-slow)_var(--ease-standard)_both] space-y-4 rounded-2xl border border-border/70 bg-surface/45 p-4 md:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Contact
            </p>

            <div className="space-y-2 text-sm text-text-muted">
              <p className="inline-flex items-center gap-2">
                <MailIcon className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="transition-colors duration-(--motion-fast) ease-(--ease-standard) hover:text-text"
                >
                  {siteContent.contact.email}
                </a>
              </p>

              <p className="inline-flex items-center gap-2">
                <MapIcon className="h-4 w-4 text-primary" />
                <span>{siteContent.contact.location}</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              {siteContent.social.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 text-text-muted transition-all duration-(--motion-fast) ease-(--ease-standard) hover:-translate-y-0.5 hover:border-primary/35 hover:text-text"
                    aria-label={item.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/60 pt-4 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteContent.brand}. Tous droits réservés.
          </p>
          <p>Studio indépendant · Branding digital · Conversion & performance.</p>
        </div>
      </Container>
    </footer>
  );
}
