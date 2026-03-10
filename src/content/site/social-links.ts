import { type LucideIcon, Instagram, Linkedin } from 'lucide-react';

export type SocialLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  { href: 'https://www.instagram.com', label: 'Instagram', icon: Instagram },
  { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: Linkedin },
];
