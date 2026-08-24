# CHECKPOINT — PMP / Project Management Content Expansion

**Branch:** `cursor/pla-pmp-content-expansion-e932`  
**Date:** 2026-08-24  
**Scope:** Content / pedagogy only — no architectural changes

---

## A. Leçons avant / après

| Métrique | Avant | Après |
|----------|-------|-------|
| **Leçons** | 38 | **77** |
| **Questions leçons** | 38 | **91** (dont multi-questions) |
| **Modules** | 7 | **7** (enrichis, structure conservée) |
| **Shorts PMP** | 7 | **9** |

---

## B. Questions exam bank avant / après

| Métrique | Avant | Après |
|----------|-------|-------|
| **Banque examen** | 200 | **200** (inchangée — qualité P1 préservée) |

La consigne priorisait la **qualité** plutôt qu'un ajout massif. L'enrichissement principal porte sur les **leçons** (+53 questions situationnelles intégrées au parcours micro-learning). La banque de 200 questions existante (P1 hardening) reste compatible FULL_PMP (180), Quick 10, Domain 25, Mock 60.

---

## C. Modules (7)

| Module | Leçons | Progression |
|--------|--------|-------------|
| foundations | 3 | BEGINNER |
| people | 14 | BEGINNER → ADVANCED |
| process | 16 | BEGINNER → ADVANCED |
| business-environment | 10 | BEGINNER → INTERMEDIATE |
| agile | 12 | BEGINNER → INTERMEDIATE |
| hybrid | 10 | BEGINNER → ADVANCED |
| situational-thinking | 12 | INTERMEDIATE → ADVANCED |

---

## D. Répartition PEOPLE / PROCESS / BUSINESS (leçons)

| Domaine pédagogique | Leçons approx. |
|-------------------|----------------|
| People (+ foundations people-adjacent) | 14 |
| Process | 16 |
| Business Environment | 10 |
| Agile | 12 |
| Hybrid | 10 |
| Situational (transversal) | 12 |
| Foundations (transversal) | 3 |

---

## E. Répartition Agile / Hybrid / Predictive

| Approche | Leçons dédiées | Exam bank (200 Q) |
|----------|----------------|-------------------|
| Agile | 12 | 67 AGILE |
| Hybrid | 10 | 67 HYBRID |
| Predictive (process) | 16 | 66 PREDICTIVE |

---

## F. Répartition des difficultés (leçons)

| Difficulté | Count |
|------------|-------|
| BEGINNER | 23 |
| INTERMEDIATE | 47 |
| ADVANCED | 7 |

Progression BEGINNER → FOUNDATION → APPLICATION → SITUATIONAL → INTEGRATION respectée par module.

---

## G. Répartition des scenarioTypes (exam bank — inchangé)

| scenarioType | Count |
|--------------|-------|
| NEXT_ACTION, BEST_ACTION, PREVENTION, ROOT_CAUSE, STAKEHOLDER, RISK, CHANGE, CONFLICT | 17 each |
| AGILE, HYBRID, GOVERNANCE, FIRST_ACTION | 16 each |

---

## H. Skills couverts

**Skills principaux PMP :** `pmp-foundations`, `pmp-people`, `pmp-process`, `pmp-business-environment`, `pmp-agile`, `pmp-situational-thinking`

**Skills précis réutilisés :** `leadership`, `communication`, `stakeholder-engagement`, `conflict-management`, `risk-management`, `change-management`, `governance`, `agile-mindset`, `hybrid-delivery`, etc.

**Total skill slugs distincts dans leçons :** 27

---

## I. Error types couverts (classifyError sur exam bank)

| Catégorie | Count exam bank |
|-----------|-----------------|
| AGILE_MINDSET | 66 |
| STAKEHOLDER_ERROR | 39 |
| RISK_ERROR | 34 |
| WRONG_PRIORITY | 34 |
| PROCESS_ERROR | 14 |
| WRONG_ACTION | 11 |
| OTHER | 1 |
| KNOWLEDGE_GAP | 1 |

**Faiblesse honnête :** `MISREAD_SCENARIO` n'est **pas** produit par la banque actuelle (0 combinaison `learningObjective: IDENTIFY` + scenario FIRST/NEXT/BEST_ACTION). Le moteur corrective-learning le mappe vers des leçons existantes, mais le retry par error-type sur MISREAD_SCENARIO reste sous-alimenté côté exam bank.

---

## J. Shorts créés / modifiés

| Slug | Durée | Statut |
|------|-------|--------|
| what-is-project-management | 155s | enrichi |
| conflict-management-basics | 165s | enrichi |
| stakeholders-basics | — | enrichi |
| risk-vs-issue | 160s | enrichi |
| change-management-basics | — | enrichi |
| agile-mindset | 145s | enrichi |
| definition-of-done | 170s | **nouveau short** |
| hybrid-project-basics | 140s | enrichi |
| root-cause-vs-symptom | 175s | **nouveau short** |

Tous ≤ 180s.

---

## K. Leçons reliées aux erreurs (corrective learning)

Toutes les leçons référencées dans `corrective-learning.ts` sont **préservées** :

- `what-is-project-management`, `project-roles`, `business-value`
- `scope-creep-mid-sprint`, `team-conflict-architecture`, `communication`
- `vendor-delay-risk`, `change-request-critical-path`, `leadership`
- `change-management-basics`, `integration`
- `agile-mindset`, `iterative-delivery`, `sprint-concepts`, `retrospective`
- `stakeholders-basics`, `motivation`
- `risk-vs-issue`, `planning`, `schedule`
- `scope`, `governance`

---

## L. Corrective learning

- Mapping `ERROR_MAP` **non modifié** (pas de changement moteur)
- Nouvelles leçons situational enrichissent le pool de remediation (`pla-situational-method`, `identify-before-acting`, `root-cause-vs-symptom`, etc.)
- Leçons avec blocs `situation` : **12** (module situational-thinking)

---

## M. Spaced repetition

Concepts récurrents à contextes différents (ex. risk) :

1. `risk-vs-issue` (process — fondamental)
2. `issue-management` (process — réponse)
3. `risk-management-hybrid` (hybrid)
4. `risk-vs-issue-situational` (situational — exam)
5. `vendor-delay-risk` (situational — matérialisation)

Pas de second système de répétition créé.

---

## N. Retry compatibility

- Variété de scénarios Helios / FlowMart / Helios Connect across modules
- Multi-questions sur leçons clés (conflict, negotiation, risk, change, agile-mindset, hybrid-basics, pla-method, exam-integration)
- Exam bank inchangée → retry engine existant intact

---

## O. FULL_PMP compatibility

- Banque : **200 questions** ≥ 180 requis
- Templates Quick 10, Domain 25, Mock 60, Full 180 : **non modifiés**
- Seed exam : **PASS**

---

## P. FR / EN

- ✅ 77 leçons bilingues avec structure Objectif / Explication / Exemple / Pratique / Erreur / À retenir / Décision
- ✅ Situations FR/EN sur 12 leçons
- ✅ Aucun doublon de titre FR ou EN
- ✅ Disclaimer PLA original (pas PMI / PMBOK)

---

## Q. Audit des répétitions

| Check | Résultat |
|-------|----------|
| Doublons slugs | ✅ Aucun |
| Doublons titres FR/EN | ✅ Aucun |
| validateLessonCatalog | ✅ PASS |
| Options leçons ≥ 3 | ✅ PASS (4 options sur leçons clés) |
| Shorts > 180s | ✅ Aucun |
| Exam bank option reuse | ✅ P1 tests PASS (max 3×) |

---

## R. Tests

| Suite | Résultat |
|-------|----------|
| `npm run lint` | ✅ PASS |
| `npm run test` (Vitest) | ✅ **241/241 PASS** (+10 tests PMP) |
| `npm run build` | ✅ PASS |
| `npm run db:seed` | ✅ PASS |
| `npm run test:e2e` | ✅ **54/54 PASS** |

---

## S. Build — ✅ PASS

## T. E2E — ✅ 54/54 PASS

---

## U. Problèmes rencontrés

1. **TRUE_FALSE à 2 options** — 7 leçons converties en SINGLE_CHOICE à 4 options plausibles pour respecter la qualité quiz.
2. **pla-situational-method** sans bloc `situation` — ajouté pour cohérence module situational.
3. **exam-reasoning-integration** durée 14 min → ajustée à 12 min (seuil test).
4. **MISREAD_SCENARIO** — non couvert par metadata exam bank actuelle (voir section I).

---

## V. Risques restants

| Risque | Sévérité | Note |
|--------|----------|------|
| MISREAD_SCENARIO sous-représenté en exam bank | Moyenne | Corrective learning mappé mais peu de questions déclenchent cette catégorie |
| Exam bank qualité variable (200 Q legacy) | Faible | P1 hardening OK ; remplacement ciblé recommandé |
| Skills granulaires (`planning`, `scope`) vs skills PMP | Faible | Upsert dynamique au seed ; pas de conflit |
| 77 leçons > cible 70–90 bas | Très faible | Dans la fourchette haute, qualité préservée |

---

## W. Recommandations

1. **Exam bank** — Remplacer 15–20 questions faibles par des vignettes situational haute qualité incluant `learningObjective: IDENTIFY` pour activer `MISREAD_SCENARIO`.
2. **Shorts** — Ajouter 3–4 shorts (escalation, servant leadership, assumption vs constraint).
3. **Learning path** — Enrichir `pmp-core-preparation` avec slugs modules agile/hybrid/situational.
4. **Documentation** — Mettre à jour `AI_HANDOFF.md` avec structure modulaire PMP.

---

## Fichiers créés / modifiés

### Nouveaux
- `prisma/seed/content/pmp-factory.ts`
- `prisma/seed/content/pmp-types.ts`
- `prisma/seed/content/pmp-foundations.ts` (3)
- `prisma/seed/content/pmp-people.ts` (14)
- `prisma/seed/content/pmp-process.ts` (16)
- `prisma/seed/content/pmp-business.ts` (10)
- `prisma/seed/content/pmp-agile.ts` (12)
- `prisma/seed/content/pmp-hybrid.ts` (10)
- `prisma/seed/content/pmp-situational.ts` (12)
- `src/tests/pmp-content-expansion.test.ts`

### Modifiés
- `prisma/seed/content/pmp-lessons.ts` — assembleur
- `src/tests/phase10-content.test.ts` — seuils PMP ≥ 70, situational ≥ 10
- `src/tests/phase12-content-hardening.test.ts` — seuil PMP ≥ 70

**Non modifié :** Exam engine, scoring PMI, Prisma schema, AI Tutor architecture, auth, dashboard.

---

## Méthode PLA propriétaire

Leçon `pla-situational-method` enseigne :

**OBSERVE → UNDERSTAND → IDENTIFY → COLLABORATE → ACT → VERIFY → ADAPT**

Présentée explicitement comme cadre pédagogique PLA — **pas** méthode PMI officielle.

---

## Arrêt obligatoire

✅ Checkpoint produit.  
❌ Aucune nouvelle phase technique.  
❌ Aucun paiement, CMS, OAuth, ML, ou modification scoring PMI.
