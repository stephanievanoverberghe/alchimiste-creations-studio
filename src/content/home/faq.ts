import type { FaqContent } from '@/domain/home/faq';

export const faqContent: FaqContent = {
  eyebrow: 'Questions fréquentes',
  title: 'Avant de démarrer un projet.',
  description:
    'Créer un site est une étape importante pour une activité. Voici les réponses aux questions les plus fréquentes avant de commencer une collaboration.',

  items: [
    {
      id: 'budget',
      question: 'Quel budget prévoir pour la création d’un site ?',
      answer:
        'Le budget dépend du format (landing page, site vitrine, refonte), du périmètre et du niveau de personnalisation. Après l’appel découverte, je vous envoie une proposition claire avec options et priorités.',
    },

    {
      id: 'delais',
      question: 'Combien de temps dure la création d’un site ?',
      answer:
        'La plupart des projets sont livrés entre 2 et 6 semaines selon leur complexité. Chaque étape est planifiée pour garder un rythme fluide et éviter les allers-retours inutiles.',
    },

    {
      id: 'process',
      question: 'Comment se déroule la collaboration ?',
      answer:
        'Nous commençons par cadrer vos objectifs et votre positionnement. Ensuite, vous validez la structure, la direction visuelle puis le développement avant la mise en ligne.',
    },

    {
      id: 'mobile',
      question: 'Le site sera-t-il optimisé pour mobile ?',
      answer:
        'Oui. Les interfaces sont pensées mobile-first pour garantir lisibilité, rapidité et confort d’utilisation sur smartphone, tablette et desktop.',
    },

    {
      id: 'evolution',
      question: 'Le site pourra-t-il évoluer avec mon activité ?',
      answer:
        'Oui. Le socle technique est conçu pour évoluer : ajout de pages, nouveaux contenus, enrichissement progressif de votre présence digitale.',
    },
  ],
};
