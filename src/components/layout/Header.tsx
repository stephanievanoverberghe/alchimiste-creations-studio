'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CSSProperties, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Button, Container } from '@/components/ui';
import { mainNavigation, primaryCta, siteBrand } from '@/content/site';
import { cn } from '@/lib/utils/cn';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

type IndicatorState = {
  left: number;
  width: number;
  ready: boolean;
};

const INITIAL_INDICATOR: IndicatorState = {
  left: 0,
  width: 0,
  ready: false,
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [indicator, setIndicator] = useState<IndicatorState>(INITIAL_INDICATOR);

  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const activeHref = useMemo(
    () => mainNavigation.find((item) => isActive(pathname, item.href))?.href,
    [pathname],
  );

  useLayoutEffect(() => {
    const updateIndicator = () => {
      if (!activeHref) {
        setIndicator(INITIAL_INDICATOR);
        return;
      }

      const navEl = navRef.current;
      const linkEl = linkRefs.current[activeHref];

      if (!navEl || !linkEl) {
        setIndicator(INITIAL_INDICATOR);
        return;
      }

      setIndicator({
        left: linkEl.offsetLeft,
        width: linkEl.offsetWidth,
        ready: true,
      });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeHref]);

  return (
    <header className="site-header hidden sm:block">
      <Container className="site-header__layout">
        <div className="site-header__shell">
          <Link href="/" aria-label={siteBrand} className="site-header__brand">
            <span aria-hidden="true" className="site-header__brand-dot" />
            <span className="site-header__brand-label">{siteBrand}</span>
          </Link>

          <nav
            ref={navRef}
            aria-label="Navigation principale"
            className="site-header__desktop-nav"
            style={
              {
                '--indicator-left': `${indicator.left}px`,
                '--indicator-width': `${indicator.width}px`,
              } as CSSProperties
            }
          >
            <span
              aria-hidden="true"
              className={cn(
                'site-header__desktop-indicator',
                indicator.ready && 'site-header__desktop-indicator--ready',
              )}
            />
            {mainNavigation.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  ref={(el) => {
                    linkRefs.current[item.href] = el;
                  }}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'site-header__desktop-link',
                    active && 'site-header__desktop-link--active',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="site-header__actions">
            <Button
              href={primaryCta.href}
              variant="secondary"
              size="sm"
              className="hidden lg:inline-flex"
            >
              {primaryCta.label}
            </Button>

            <Button
              href={primaryCta.href}
              variant="secondary"
              size="sm"
              className="hidden md:inline-flex lg:hidden"
            >
              Contact
            </Button>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className={cn('site-header__burger', open && 'site-header__burger--open')}
              aria-expanded={open}
              aria-controls="site-tablet-menu"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <span className="site-header__burger-line" />
              <span className="site-header__burger-line" />
              <span className="site-header__burger-line" />
            </button>
          </div>
        </div>
        <div
          id="site-tablet-menu"
          className={cn(
            'site-header__tablet-menu lg:hidden',
            open ? 'site-header__tablet-menu--open' : 'site-header__tablet-menu--closed',
          )}
        >
          <div className="site-header__tablet-menu-inner">
            {mainNavigation.map((item, index) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'site-header__tablet-link',
                    open && 'site-header__tablet-link--open',
                    active && 'site-header__tablet-link--active',
                  )}
                  style={{ '--item-index': index } as CSSProperties}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </header>
  );
}
