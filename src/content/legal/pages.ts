import type { LegalPageContent } from '@/domain/legal/pages';

export const legalNoticeContent: LegalPageContent = {
  eyebrow: 'Informations légales',
  title: 'Mentions légales',
  description:
    'Vous trouverez ici les informations juridiques relatives à l’édition, à l’hébergement et à l’utilisation du site Alchimiste Créations.',
  updatedAt: 'Dernière mise à jour : 13 mars 2026',
  sections: [
    {
      id: 'editeur',
      title: 'Éditeur du site',
      paragraphs: [
        'Alchimiste Créations — studio web indépendant.',
        'Pour toute question, vous pouvez écrire à : bonjour@alchimiste-creations.fr.',
      ],
    },
    {
      id: 'hebergement',
      title: 'Hébergement',
      paragraphs: [
        'Le site est hébergé par un prestataire technique assurant la disponibilité et l’infrastructure nécessaires à sa mise en ligne.',
      ],
    },
    {
      id: 'propriete-intellectuelle',
      title: 'Propriété intellectuelle',
      paragraphs: [
        'Les contenus présents sur ce site, notamment les textes, visuels, éléments graphiques, structure, identité et compositions, sont protégés par le droit de la propriété intellectuelle.',
        'Sauf autorisation écrite préalable, toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, est interdite.',
      ],
    },
    {
      id: 'responsabilite',
      title: 'Responsabilité',
      paragraphs: [
        'Alchimiste Créations s’efforce de fournir des informations claires, fiables et régulièrement mises à jour.',
        'Toutefois, aucune garantie absolue ne peut être apportée quant à l’exactitude, l’exhaustivité ou à l’actualité permanente des contenus publiés.',
      ],
    },
  ],
};

export const privacyPolicyContent: LegalPageContent = {
  eyebrow: 'Protection des données',
  title: 'Politique de confidentialité',
  description:
    'Cette page présente les principes appliqués en matière de collecte, d’utilisation et de protection des données personnelles transmises via le site.',
  updatedAt: 'Dernière mise à jour : 13 mars 2026',
  sections: [
    {
      id: 'donnees-collectees',
      title: 'Données collectées',
      paragraphs: [
        'Lorsque vous utilisez le formulaire de contact, certaines informations peuvent être collectées, telles que votre nom, votre email, votre activité, votre besoin, votre budget et votre message.',
      ],
    },
    {
      id: 'finalite-du-traitement',
      title: 'Finalité du traitement',
      paragraphs: [
        'Ces données sont utilisées uniquement pour analyser votre demande, vous répondre et, si nécessaire, cadrer un échange ou une proposition adaptée.',
        'Aucune donnée n’est vendue, louée ou cédée à des tiers à des fins commerciales.',
      ],
    },
    {
      id: 'duree-de-conservation',
      title: 'Durée de conservation',
      paragraphs: [
        'Les données sont conservées uniquement pendant la durée nécessaire au traitement de votre demande et au suivi éventuel de l’échange, dans une logique de gestion raisonnable et proportionnée.',
      ],
    },
    {
      id: 'droits-des-utilisateurs',
      title: 'Droits des utilisateurs',
      paragraphs: [
        'Vous pouvez demander l’accès, la rectification ou la suppression de vos données personnelles en écrivant à bonjour@alchimiste-creations.fr.',
        'Les demandes sont traitées dans les meilleurs délais, conformément à la réglementation applicable.',
      ],
    },
  ],
};
