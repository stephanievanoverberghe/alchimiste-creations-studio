import type { LegalPageContent } from '@/domain/legal/pages';

export const legalNoticeContent: LegalPageContent = {
  title: 'Mentions légales',
  description: 'Informations légales relatives à l’éditeur et à l’hébergement du site.',
  updatedAt: 'Dernière mise à jour : 2026-03-13',
  sections: [
    {
      title: 'Éditeur du site',
      paragraphs: [
        'Alchimiste Créations — Studio web indépendant.',
        'Contact : bonjour@alchimiste-creations.fr.',
      ],
    },
    {
      title: 'Propriété intellectuelle',
      paragraphs: [
        'Les contenus (textes, visuels, structure) présents sur ce site sont protégés par le droit d’auteur.',
        'Toute reproduction totale ou partielle sans autorisation préalable est interdite.',
      ],
    },
    {
      title: 'Responsabilité',
      paragraphs: [
        'Alchimiste Créations s’efforce de fournir des informations fiables et à jour.',
        'Toutefois, aucune garantie n’est apportée quant à l’exactitude absolue des contenus publiés.',
      ],
    },
  ],
};

export const privacyPolicyContent: LegalPageContent = {
  title: 'Politique de confidentialité',
  description: 'Principes de collecte et de traitement des données personnelles.',
  updatedAt: 'Dernière mise à jour : 2026-03-13',
  sections: [
    {
      title: 'Données collectées',
      paragraphs: [
        'Les informations transmises via le formulaire de contact (nom, email, activité, besoin, budget, message) sont utilisées uniquement pour répondre à votre demande.',
      ],
    },
    {
      title: 'Finalité du traitement',
      paragraphs: [
        'Les données sont traitées pour qualifier votre besoin, vous répondre et proposer un cadrage projet adapté.',
        'Aucune donnée n’est cédée à des tiers à des fins commerciales.',
      ],
    },
    {
      title: 'Droits des utilisateurs',
      paragraphs: [
        'Vous pouvez demander l’accès, la rectification ou la suppression de vos données via bonjour@alchimiste-creations.fr.',
        'Les demandes sont traitées dans les meilleurs délais conformément à la réglementation applicable.',
      ],
    },
  ],
};
