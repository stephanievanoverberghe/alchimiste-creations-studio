# Architecture de référence (source de vérité)

Ce projet suit **strictement** le document de cadrage suivant :

- `docs/alchimiste-creations-product-spec.md`

> Décision d'équipe : même si certaines discussions mentionnent un PDF dans `/doc`, la référence officielle actuelle est le fichier Markdown ci-dessus.

## Convention retenue

Conformément au cadrage produit :

- `src/app` : routing + layouts
- `src/components/ui` : composants UI réutilisables
- `src/components/layout` : composants structurels globaux
- `src/components/marketing` : sections marketing
- `src/content` : contenus
- `src/domain` : types métier
- `src/application` : cas d’usage
- `src/infrastructure` : services techniques
- `src/lib` : utilitaires partagés
- `src/styles` : styles globaux / fondations CSS
- `src/tests` : tests
- `src/types` : types globaux

Référence produit : architecture modulaire + App Router.【docs/alchimiste-creations-product-spec.md】
