# Audit backlog MVP — Alchimiste Créations

Date d’audit : 18 mars 2026  
Référence comparée : `docs/alchimiste-creations-product-spec.md` + backlog MVP fourni.

## 1) Synthèse exécutive

Le repository actuel est **globalement aligné avec le MVP défini** : les pages clés, la structure de navigation, le design system, la logique de contact, les routes portfolio dynamiques et les bases SEO sont en place.

### Score de complétion estimé

- **Périmètre P1 (MVP prioritaire)** : **~94%**
- **Périmètre P2** : **~100%** (US-019, US-020, US-024 déjà implémentées)
- **Périmètre global US-001 → US-029** : **~91%**

### Points forts

- Architecture modulaire cohérente avec séparation `app / components / content / domain / application / infrastructure`.
- Pages marketing principales livrées et cohérentes (Accueil, Services, Portfolio, À propos, Contact).
- Formulaire contact avec validation, feedback utilisateur et route API serveur.
- SEO technique de base activé (metadata, `robots.ts`, `sitemap.ts`).
- Portfolio détaillé dynamique déjà en avance par rapport à la priorisation MVP stricte.

### Gaps restants (principaux)

- **US-028 Accessibilité** : bonnes bases, mais pas d’audit A11y complet ni checklist WCAG documentée.
- **US-029 Déploiement Vercel** : pas de trace explicite d’un pipeline/documentation de déploiement production.

### Validation performance communiquée (19 mars 2026)

- **Performance** : 99%
- **Structure** : 100%
- **LCP** : 810 ms
- **TBT** : 9 ms
- **CLS** : 0

Ces métriques indiquent un niveau de performance déjà excellent pour le périmètre MVP.

---

## 2) Évaluation détaillée par épic

## Épic 1 — Fondations du projet

- **US-001 (Initialisation Next.js/TS/Tailwind)** : **Fait**
- **US-002 (Structure de dossiers modulaire)** : **Fait**
- **US-003 (Layout global cohérent)** : **Fait**

**Niveau de complétion épic 1 : 100%**

## Épic 2 — Design system

- **US-004 (Button réutilisable)** : **Fait**
- **US-005 (Container/Section/Heading)** : **Fait**
- **US-006 (Input/Textarea)** : **Fait**

**Niveau de complétion épic 2 : 100%**

## Épic 3 — Structure du site

- **US-007 (Navigation principale)** : **Fait**
- **US-008 (Footer)** : **Fait**
- **US-009 (CTA global)** : **Fait**

**Niveau de complétion épic 3 : 100%**

## Épic 4 — Page d’accueil

- **US-010 (Proposition de valeur)** : **Fait**
- **US-011 (Présentation services)** : **Fait**
- **US-012 (Présentation projets)** : **Fait**
- **US-013 (Présentation méthode)** : **Fait**
- **US-014 (CTA accueil)** : **Fait**

**Niveau de complétion épic 4 : 100%**

## Épic 5 — Pages principales

- **US-015 (Page Services)** : **Fait**
- **US-016 (Page Portfolio)** : **Fait**
- **US-017 (Page À propos)** : **Fait**
- **US-018 (Page Contact)** : **Fait**

**Niveau de complétion épic 5 : 100%**

## Épic 6 — Portfolio détaillé

- **US-019 (Page projet dynamique)** : **Fait**
- **US-020 (Navigation entre projets / retour liste)** : **Fait**

**Niveau de complétion épic 6 : 100%**

## Épic 7 — Contact

- **US-021 (Formulaire de contact)** : **Fait**
- **US-022 (Validation des champs)** : **Fait**
- **US-023 (Confirmation d’envoi)** : **Fait**
- **US-024 (Protection anti-spam)** : **Fait** (honeypot côté client + garde côté API)

**Niveau de complétion épic 7 : 100%**

## Épic 8 — Qualité & lancement

- **US-025 (Responsive design)** : **Partiellement validé** (implémentation responsive présente, validation QA finale à systématiser)
- **US-026 (SEO de base)** : **Fait**
- **US-027 (Performance)** : **Fait** (mesuré : LCP 810 ms, TBT 9 ms, CLS 0)
- **US-028 (Accessibilité)** : **Partiellement validé**
- **US-029 (Déploiement Vercel)** : **Non confirmé dans le code/documentation actuelle**

**Niveau de complétion épic 8 : ~75%**

---

## 3) Recommandations actionnables (ordre conseillé)

1. **Formaliser la phase “Quality Gate pré-prod”**
   - Ajouter une checklist versionnée (responsive, A11y, perf, SEO, smoke tests formulaire).
   - Critère de sortie : “Done” réel aligné avec la définition de Done backlog.

2. **Accessibilité (US-028)**
   - Exécuter une passe WCAG (contrastes, focus visible, ordre tabulation, labels, landmarks).
   - Ajouter des tests A11y automatisés (ex. axe) en plus des smoke tests actuels.

3. **Déploiement Vercel (US-029)**
   - Documenter la procédure de déploiement (environnements, variables, rollback).
   - Ajouter un `README` “runbook prod” minimal.

4. **Stabilisation post-MVP**
   - Garder US-024 anti-spam en amélioration continue (rate-limit/captcha invisible si abus réel).

---

## 4) Tableau récapitulatif

| Élément                              | État actuel                                                                                              | Niveau de complétion | Action recommandée                                                     |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------- | -------------------: | ---------------------------------------------------------------------- |
| Fondations projet (US-001 → US-003)  | Socle Next.js + TS + Tailwind, architecture modulaire, layout global en place                            |                 100% | Maintenir la discipline d’architecture actuelle                        |
| Design system (US-004 → US-006)      | Primitives UI réutilisables présentes (`Button`, `Container`, `Section`, `Heading`, `Input`, `Textarea`) |                 100% | Continuer l’extension via primitives plutôt que styles ad hoc          |
| Structure site (US-007 → US-009)     | Header, footer, navigation mobile et CTA globaux implémentés                                             |                 100% | Vérifier régulièrement la cohérence CTA/navigation sur nouvelles pages |
| Home conversion (US-010 → US-014)    | Sections de conversion clés en place (valeur, services, portfolio, méthode, CTA)                         |                 100% | Mesurer conversion (clic CTA / contact) après mise en prod             |
| Pages principales (US-015 → US-018)  | Services, Portfolio, À propos, Contact livrées                                                           |                 100% | Ajouter micro-optimisations éditoriales orientées conversion           |
| Portfolio détaillé (US-019 → US-020) | Route dynamique `[slug]`, retour à la liste, navigation projet suivant                                   |                 100% | Ajouter éventuellement filtres/catégories en phase post-MVP            |
| Contact (US-021 → US-024)            | Formulaire fonctionnel, validations, confirmation, anti-spam basique                                     |                 100% | Renforcer anti-spam si volume augmente (rate limit/captcha soft)       |
| Responsive (US-025)                  | Classes responsive présentes sur les composants majeurs                                                  |                  85% | Faire une passe QA multi-devices documentée                            |
| SEO de base (US-026)                 | Metadata, robots, sitemap en place                                                                       |                 100% | Ajouter enrichissements (schema.org) en phase suivante                 |
| Performance (US-027)                 | Validation communiquée : Performance 99%, LCP 810 ms, TBT 9 ms, CLS 0                                    |                 100% | Maintenir un suivi régulier post-déploiement                           |
| Accessibilité (US-028)               | Premiers éléments A11y (labels ARIA, structure) et tests smoke                                           |                  70% | Lancer audit WCAG + tests automatisés dédiés                           |
| Déploiement Vercel (US-029)          | Non démontré explicitement dans le repo audité                                                           |                  40% | Documenter et sécuriser le runbook de déploiement                      |
