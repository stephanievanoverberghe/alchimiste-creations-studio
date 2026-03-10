import {
  type LucideIcon,
  BriefcaseBusiness,
  Send,
  Gem,
  House,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export type SiteNavItem = {
  href: string;
  label: string;
  icon?: LucideIcon;
};

export type SiteSocialItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const siteContent = {
  brand: 'Alchimiste Créations',
  valueProposition:
    'Studio web indépendant : branding digital, sites Next.js et optimisation conversion pour les marques qui veulent un site utile, rapide et mémorable.',
  nav: [
    { href: '/', label: 'Accueil', icon: House },
    { href: '/portfolio', label: 'Portfolio', icon: BriefcaseBusiness },
    { href: '/services', label: 'Services', icon: Sparkles },
    { href: '/a-propos', label: 'À propos', icon: Gem },
  ] satisfies SiteNavItem[],
  ctaPrimary: {
    href: '/contact',
    label: 'Démarrer un projet',
    icon: Send,
  },
  contact: {
    email: 'bonjour@alchimiste-creations.fr',
    location: 'Basé en France · Projets à distance',
  },
  social: [
    { href: 'https://www.instagram.com', label: 'Instagram', icon: Instagram },
    { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: Linkedin },
  ] satisfies SiteSocialItem[],
  legal: [
    { href: '/mentions-legales', label: 'Mentions légales' },
    { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
  ] satisfies SiteNavItem[],
  footerHighlights: [
    { label: 'Branding & direction digitale', icon: Sparkles },
    { label: 'Design + développement Next.js', icon: Gem },
    { label: 'Optimisation conversion', icon: ShieldCheck },
  ],
  footerMetaIcons: {
    mail: Mail,
    map: MapPin,
  },
};
