# CHECKPOINT — PMP Targeted Question Quality Fix

**Branch:** `cursor/pla-pmp-question-quality-e932`  
**Date:** 2026-08-24  
**Scope:** Targeted exam bank upgrades only — no engine/architecture changes

---

## A. Questions examinées

- **Banque totale :** 200 questions (inchangé)
- **Candidats FIRST/NEXT/BEST_ACTION éligibles :** 50 questions analysées
- **Sélectionnées pour upgrade :** **18 questions** (cible 15–20)

---

## B. Questions modifiées

| externalKey | Domaine | scenarioType | Thème misread |
|-------------|---------|--------------|---------------|
| pmp-exam-012 | PEOPLE | FIRST_ACTION | Clarification vs changement de scope |
| pmp-exam-036 | PEOPLE | FIRST_ACTION | Conflit = ambiguïté critères, pas performance |
| pmp-exam-002 | PEOPLE | BEST_ACTION | Besoin déjà planifié — blocage validation |
| pmp-exam-014 | PEOPLE | BEST_ACTION | Métriques agile vs jalons prédictifs |
| pmp-exam-072 | PROCESS | FIRST_ACTION | Symptôme fournisseur vs cause interne |
| pmp-exam-084 | PROCESS | FIRST_ACTION | Risk vs issue matérialisé |
| pmp-exam-108 | PROCESS | FIRST_ACTION | Scope change vs gap de formation |
| pmp-exam-120 | PROCESS | FIRST_ACTION | WBS vs backlog — reporting hybride |
| pmp-exam-144 | PROCESS | FIRST_ACTION | Échec QA vs critères changés hors process |
| pmp-exam-062 | PROCESS | BEST_ACTION | Impediment agile vs gouvernance prédictive |
| pmp-exam-074 | PROCESS | BEST_ACTION | Retard sous-traitant vs échec méthode |
| pmp-exam-086 | PROCESS | BEST_ACTION | Gap contractuel hybride |
| pmp-exam-098 | PROCESS | BEST_ACTION | Capacité disponible vs priorité locale |
| pmp-exam-110 | PROCESS | BEST_ACTION | Format burndown vs statut RAG |
| pmp-exam-180 | BUSINESS | FIRST_ACTION | Préférence solution vs objectif bénéfice |
| pmp-exam-192 | BUSINESS | FIRST_ACTION | Résistance perçue vs bascule SSO manquante |
| pmp-exam-170 | BUSINESS | BEST_ACTION | Bénéfices checkout vs idée non validée |
| pmp-exam-182 | BUSINESS | BEST_ACTION | Traçabilité (intention) vs forme WBS |

**IDs préservés** — sessions et références existantes compatibles.

---

## C. Domaines concernés

| Domaine | Questions modifiées |
|---------|---------------------|
| PEOPLE | 4 |
| PROCESS | 10 |
| BUSINESS_ENVIRONMENT | 4 |

---

## D. scenarioTypes concernés

| scenarioType | Count |
|--------------|-------|
| FIRST_ACTION | 9 |
| BEST_ACTION | 9 |

`learningObjective` passé à **IDENTIFY** sur les 18 questions (compréhension du scénario).

---

## E. Couverture MISREAD_SCENARIO avant / après

| Métrique | Avant | Après |
|----------|-------|-------|
| Questions classifiées MISREAD_SCENARIO | **0** | **18** |
| % de la banque | 0 % | **9 %** |

Mécanisme : `classifyError()` existant — `FIRST_ACTION` / `BEST_ACTION` + `learningObjective: IDENTIFY` (sans skills stakeholder/risk/agile preempting).

**Non modifié :** `classifyError()`, scoring, blueprint, Exam Engine.

---

## F. Error types avant / après

| Catégorie | Avant | Après | Δ |
|-----------|-------|-------|---|
| MISREAD_SCENARIO | 0 | **18** | +18 |
| WRONG_PRIORITY | 34 | 25 | −9 |
| WRONG_ACTION | 11 | 2 | −9 |
| RISK_ERROR | 34 | 34 | 0 |
| STAKEHOLDER_ERROR | 39 | 39 | 0 |
| AGILE_MINDSET | 66 | 66 | 0 |
| PROCESS_ERROR | 14 | 14 | 0 |
| KNOWLEDGE_GAP | 1 | 1 | 0 |
| OTHER | 1 | 1 | 0 |

---

## G. Répétitions détectées

| Check | Avant | Après |
|-------|-------|-------|
| Total questions | 200 | 200 |
| Option label max reuse (EN) | ≤ 3 | **1** |
| Duplicate options within question | 0 | 0 |
| externalKey duplicates | 0 | 0 |

Les nouvelles options sont courtes et uniques — amélioration nette vs stems P1 longs sur les items remplacés.

---

## H. Corrections effectuées

### Fichiers créés
- `prisma/seed/pmp-exam-bank-types.ts` — types partagés (évite import circulaire)
- `prisma/seed/pmp-exam-bank-misread-upgrades.ts` — 18 upgrades + merge
- `src/tests/pmp-misread-scenario-quality.test.ts` — tests dédiés

### Fichiers modifiés
- `prisma/seed/pmp-exam-bank-data.ts` — applique `applyMisreadScenarioUpgrades()` au export

### Non modifié
- Exam Engine, classifyError, retry engine, corrective-learning map, scoring PMI, readiness, PF, CF

---

## I. FR / EN

- ✅ 18 scénarios réécrits FR/EN équivalents
- ✅ 4 options par question avec `explanationWrongFr/En` sur distracteurs
- ✅ Prompts orientés compréhension (« Que doit comprendre… », « Quelle est la nature réelle… »)
- ✅ Aucun wording PMBOK® / PMI officiel

---

## J. Tests

| Suite | Résultat |
|-------|----------|
| `npm run lint` | ✅ PASS |
| `npm run test` (Vitest) | ✅ **247/247 PASS** (+6) |
| `npm run db:seed` | ✅ PASS |
| P1 option quality tests | ✅ PASS |
| MISREAD scenario tests | ✅ PASS (6 new) |

---

## K. Build — ✅ PASS

## L. E2E — ✅ 54/54 PASS

---

## M. Risques restants

| Risque | Sévérité | Note |
|--------|----------|------|
| MISREAD_SCENARIO = 18/200 (9 %) | Faible | Suffisant pour retry/corrective learning ; pas exhaustif |
| 32 FIRST/NEXT/BEST restent non-IDENTIFY | Faible | Volontaire — diversité error types préservée |
| Questions AGILE/HYBRID avec delivery AGILE | Moyenne | `classifyError` route vers AGILE_MINDSET avant MISREAD — by design moteur |
| STAKEHOLDER/RISK scenarios non convertibles | Moyenne | Même contrainte moteur — pas de contournement artificiel |

**Honnêteté :** la couverture MISREAD_SCENARIO est **nettement améliorée** (0 → 18) via des scénarios pédagogiquement légitimes, sans modifier le moteur. Une couverture plus large nécessiterait soit plus d'upgrades ciblées, soit une évolution future du moteur (hors scope).

---

## Arrêt obligatoire

✅ Checkpoint produit.  
❌ Aucune nouvelle phase.  
❌ Aucune fonctionnalité supplémentaire.
