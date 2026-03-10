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
    'J’aide les entrepreneurs et créateurs à transformer leur activité en un site web clair, moderne et crédible qui inspire confiance et attire les bonnes personnes.',
  nav: [
    { href: '/', label: 'Accueil', icon: House },
    { href: '/portfolio', label: 'Portfolio', icon: BriefcaseBusiness },
    { href: '/services', label: 'Services', icon: Sparkles },
    { href: '/a-propos', label: 'À propos', icon: Gem },
  ] satisfies SiteNavItem[],
  ctaPrimary: {
    href: '/contact',
    label: 'Réserver un appel découverte',
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
    { label: 'Clarté du message', icon: Sparkles },
    { label: 'Design moderne et crédible', icon: Gem },
    { label: 'Performance & conversion', icon: ShieldCheck },
  ],
  footerMetaIcons: {
    mail: Mail,
    map: MapPin,
  },
  footerIntro: 'Discutons de votre projet',
  footerTitle: 'Un site plus clair, plus crédible, plus juste.',
  footerDescription:
    'Chaque projet est conçu pour valoriser votre activité, inspirer confiance et donner envie de vous contacter.',
  footerBottomText: 'Studio web indépendant · Clarté · Crédibilité · Performance',
};
