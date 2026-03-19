# Plan d’action priorisé — Alchimiste Créations (14 jours)

## Objectif du sprint (14 jours)

En 2 semaines, viser 3 résultats :

1. **Site plus sûr et plus fiable en prod** (anti-spam, hardening, erreurs mieux gérées).
2. **SEO nettement renforcé** (metadata par page/projet, maillage, signaux sémantiques).
3. **Conversion plus crédible** (message plus différenciant, formulaire plus rassurant, UX a11y plus propre).

---

## Vue d’ensemble du planning

- **Semaine 1 = Priorité 1** (sécurité + SEO + a11y critique)
- **Semaine 2 = Priorité 2** (conversion + performance + qualité long terme)

---

## Semaine 1 — Bloc “sécuriser et rendre indexable”

### Jour 1 — SEO fondation (page-level metadata)

**Livrables**

- Ajouter metadata spécifique sur :
  - `/`
  - `/services`
  - `/portfolio`
  - `/portfolio/[slug]`
  - `/contact`
  - `/a-propos`
- Ajouter `openGraph` + `twitter` + `alternates.canonical` par page.

**Fichiers ciblés**

- `src/app/(marketing)/*/page.tsx`
- `src/app/(marketing)/portfolio/[slug]/page.tsx`
- Référence actuelle globale : `src/app/layout.tsx`, `src/content/site/seo.ts`.

**Définition de fini**

- Chaque URL a un `title` + `description` unique, orienté intention de recherche.

---

### Jour 2 — Sitemap & SEO sémantique

**Livrables**

- Enrichir sitemap avec les pages projet dynamiques (slugs portfolio).
- Vérifier cohérence canonicals.
- Préparer JSON-LD (Organization + ProfessionalService + Breadcrumb + FAQ si section FAQ).

**Fichiers ciblés**

- `src/app/sitemap.ts`
- `src/app/(marketing)/portfolio/[slug]/page.tsx`
- `src/components/marketing/home/Faq.tsx` (si FAQ indexable).

**Définition de fini**

- Sitemap reflète les pages stratégiques réelles du site.

---

### Jour 3 — Sécurité API contact (anti-abus)

**Livrables**

- Ajouter rate limiting côté `/api/contact` (IP + fenêtre temporelle).
- Ajouter challenge anti-bot (Turnstile/hCaptcha).
- Normaliser réponses d’erreur pour éviter l’énumération comportementale.

**Fichiers ciblés**

- `src/app/api/contact/route.ts`
- `src/components/marketing/contact/ContactFormSection.tsx` (ajout token challenge).

**Définition de fini**

- Un bot ne peut pas spammer le endpoint massivement.

---

### Jour 4 — Sécurité email & données

**Livrables**

- Échapper/sanitizer toutes les valeurs injectées dans le HTML email.
- Ajouter timeout/retry contrôlé pour appel provider.
- Logger serveur minimal (statut, pas de PII brute).

**Fichiers ciblés**

- `src/infrastructure/contact/sendContactEmail.ts`.

**Définition de fini**

- Plus d’interpolation HTML brute des entrées utilisateur.

---

### Jour 5 — A11y formulaire (impact immédiat)

**Livrables**

- Relier `Label htmlFor` ↔ `id` sur tous les champs.
- Ajouter `aria-invalid`, `aria-describedby`, zones d’erreurs annoncées.
- Ajouter `aria-live="polite"` pour succès/erreur submit.

**Fichiers ciblés**

- `src/components/marketing/contact/ContactFormSection.tsx`
- `src/components/ui/Label.tsx`
- `src/components/ui/Input.tsx`
- `src/components/ui/Textarea.tsx`
- `src/components/ui/Select.tsx`

**Définition de fini**

- Form pleinement utilisable clavier + lecteur d’écran.

---

## Semaine 2 — Bloc “convertir mieux et scaler proprement”

### Jour 6 — Repositionnement copy (home)

**Livrables**

- Réécrire Hero + section valeur :
  - promesse plus spécifique,
  - différenciateurs concrets,
  - preuve de méthode et résultats.
- Réduire répétitions lexicales “clair / crédible / conversion”.

**Fichiers ciblés**

- `src/content/home/hero.ts`
- `src/content/site/messaging.ts`

---

### Jour 7 — Repositionnement copy (services)

**Livrables**

- Clarifier chaque offre avec :
  - périmètre précis,
  - exclusions explicites,
  - résultat attendu mesurable.
- Ajouter mini-FAQ décisionnelle (“quand choisir telle offre ?”).

**Fichiers ciblés**

- `src/content/services/page.ts`
- `src/components/marketing/services/ServicesDetails.tsx`

---

### Jour 8 — Conversion page contact

**Livrables**

- Renforcer rassurance :
  - délais,
  - étapes post-envoi,
  - critères de fit,
  - options si urgence.
- Ajuster CTA et microcopy du submit.

**Fichiers ciblés**

- `src/content/contact/page.ts`
- `src/components/marketing/contact/ContactFormSection.tsx`

---

### Jour 9 — Performance pragmatique

**Livrables**

- Audit bundle (poids JS par route).
- Réduire coût animations non essentielles (mobile).
- Appliquer `prefers-reduced-motion` sur composants motion.

**Fichiers ciblés**

- `src/components/ui/MobileCarousel.tsx`
- `src/components/ui/SegmentedContentSlider.tsx`
- `src/components/marketing/home/HeroMockup.tsx`

---

### Jour 10 — Hardening Next.js / headers

**Livrables**

- Ajouter headers sécurité dans `next.config.ts` :
  - CSP minimale,
  - X-Frame-Options,
  - Referrer-Policy,
  - Permissions-Policy.
- Vérifier impact avec ressources externes (provider email/API).

**Fichier ciblé**

- `next.config.ts`

---

### Jour 11 — Tests de non-régression utiles

**Livrables**

- Ajouter tests unitaires ciblés :
  - validation contact stricte,
  - échappement HTML email,
  - metadata présentes par page.
- Ajouter checks a11y automatisés (au moins smoke).

**Fichiers points de départ**

- `src/tests/unit/*`
- `src/domain/contact/form.ts`
- `src/infrastructure/contact/sendContactEmail.ts`

---

### Jour 12 — QA multi-device + clavier

**Livrables**

- Test manuel complet mobile/tablette/desktop :
  - nav,
  - tabs/select/sliders,
  - formulaire contact.
- Corriger bugs de focus, scroll, overlay.

---

### Jour 13 — SEO & conversion QA finale

**Livrables**

- Vérifier titles/descriptions/canonicals/OG.
- Vérifier maillage interne CTA vers contact/services/portfolio.
- Contrôle qualité contenu (cohérence ton + promesse).

---

### Jour 14 — Release checklist

**Livrables**

- Build/lint/test full green.
- Checklist prod :
  - env vars complètes,
  - fallback si provider down,
  - logs d’erreur propres,
  - monitoring minimal.
- Publication + mini post-mortem.

---

## Priorisation ultra-claire

## Priorité 1 (à faire tout de suite)

1. Metadata page-level + sitemap dynamique.
2. Rate limit + anti-bot + sanitation email.
3. A11y formulaire (labels/aria-live/errors).

## Priorité 2 (à faire juste après)

1. Refonte copy Home/Services/Contact orientée différenciation.
2. Performance motion/client components.
3. Headers sécurité Next.

## Priorité 3 (confort/scalabilité)

1. Renforcer suite de tests.
2. Ajout d’instrumentation conversion (events CTA/form).
3. Industrialisation du contenu SEO (templates de pages cas clients).

---

## KPIs de succès (fin J14)

- **SEO** : 100% pages stratégiques avec metadata unique.
- **Sécurité** : spam contact drastiquement réduit, endpoint durci.
- **A11y** : formulaire conforme navigation clavier + feedback annoncé.
- **Conversion** : copy plus différenciante + contact plus rassurant.
- **Tech** : build/lint/tests verts, release stable.
