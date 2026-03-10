# tests

Suite de tests unitaires/smoke exécutée avec **Vitest**.

- `src/tests/unit/architecture.test.mjs` : vérifie la présence des dossiers d'architecture attendus.
- `src/tests/unit/layout-a11y.test.mjs` : vérifie la présence des attributs ARIA clés dans les layouts globaux.
- `src/tests/unit/ui-primitives.test.mjs` : vérifie des garanties de base sur les primitives UI (`Container`, `Section`, `Heading`).

Commandes :

```bash
npm run test
npm run test:watch
```
