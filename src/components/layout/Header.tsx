'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CSSProperties, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Button, Container } from '@/components/ui';
import { siteContent } from '@/content/site-content';
import { cn } from '@/lib/utils/cn';
import { getScrollDirection, isNearTop } from '@/lib/utils/scroll-direction';

const NEAR_TOP_OFFSET = 72;
const HIDE_DISTANCE = 18;
const SHOW_DISTANCE = 14;

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
  const [hidden, setHidden] = useState(false);
  const [indicator, setIndicator] = useState<IndicatorState>(INITIAL_INDICATOR);
  const lastScrollYRef = useRef(0);
  const lastToggleYRef = useRef(0);
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const activeHref = useMemo(
    () => siteContent.nav.find((item) => isActive(pathname, item.href))?.href,
    [pathname],
  );

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      const currentY = window.scrollY;
      const direction = getScrollDirection({
        currentY,
        previousY: lastScrollYRef.current,
        threshold: 4,
      });

      if (open || isNearTop(currentY, NEAR_TOP_OFFSET)) {
        setHidden(false);
        lastToggleYRef.current = currentY;
      } else {
        const deltaFromToggle = currentY - lastToggleYRef.current;

        if (direction === 'down' && !hidden && deltaFromToggle > HIDE_DISTANCE) {
          setHidden(true);
          lastToggleYRef.current = currentY;
        }

        if (direction === 'up' && hidden && deltaFromToggle < -SHOW_DISTANCE) {
          setHidden(false);
          lastToggleYRef.current = currentY;
        }
      }

      lastScrollYRef.current = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateVisibility);
    };

    lastScrollYRef.current = window.scrollY;
    lastToggleYRef.current = window.scrollY;

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hidden, open]);

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
    <header
      className={cn(
        'site-header inset-x-0 top-0 z-50 hidden sm:block',
        hidden && !open ? 'site-header--hidden' : 'site-header--visible',
      )}
    >
      <Container className="site-header__shell">
        <Link href="/" aria-label={siteContent.brand} className="site-header__brand">
          <span aria-hidden="true" className="site-header__brand-dot" />
          <span className="site-header__brand-label">{siteContent.brand}</span>
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
          {siteContent.nav.map((item) => {
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
            href={siteContent.ctaPrimary.href}
            variant="secondary"
            size="sm"
            className="hidden lg:inline-flex"
          >
            {siteContent.ctaPrimary.label}
          </Button>

          <Button
            href={siteContent.ctaPrimary.href}
            variant="secondary"
            size="sm"
            className="hidden md:inline-flex lg:hidden"
          >
            Contact
          </Button>

          <button
            type="button"
            onClick={() => {
              setOpen((prev) => {
                const next = !prev;
                if (next) {
                  setHidden(false);
                  lastToggleYRef.current = window.scrollY;
                }
                return next;
              });
            }}
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
      </Container>

      <div
        id="site-tablet-menu"
        className={cn(
          'site-header__tablet-menu lg:hidden',
          open ? 'site-header__tablet-menu--open' : 'site-header__tablet-menu--closed',
        )}
      >
        <Container className="site-header__tablet-menu-inner">
          {siteContent.nav.map((item, index) => {
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
        </Container>
      </div>
    </header>
  );
}
