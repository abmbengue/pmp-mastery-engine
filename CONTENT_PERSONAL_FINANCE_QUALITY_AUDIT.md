# Personal Finance — Content Quality Audit (Phase 1)

**Date:** 2026-08-24  
**Scope:** 53 lessons · 4 modules · FR/EN · content-only pass  
**Branch:** `cursor/pf-content-quality-e932`

---

## A. Leçons analysées

**Total : 53 leçons** (inchangé — pas de nouvelle leçon ajoutée)

| Module | Leçons |
|--------|--------|
| foundations | 13 |
| debt | 14 |
| saving-investing | 14 |
| wealth-building | 12 |

**Questions :** 99 → **116** (+17 questions situationnelles)

---

## B. Répartition A / B / C / D

### Avant enrichissement

| Grade | Count | Description |
|-------|-------|-------------|
| **A** | 31 | Solide — structure complète, questions situationnelles |
| **B** | 20 | Correcte — à enrichir (exemples courts, 1 seule question) |
| **C** | 2 | Superficielle — `saving-rate`, `saving-habits` |
| **D** | 0 | Aucune leçon redondante à supprimer |

### Après enrichissement

| Grade | Count |
|-------|-------|
| **A** | 53 |
| **B** | 0 |
| **C** | 0 |
| **D** | 0 |

Critères d'audit : longueur corps (>850 car.), sections pédagogiques (Objectif → Décision), questions situationnelles, multi-questions, liens simulateur, profondeur FR/EN.

---

## C. Leçons enrichies (22)

### C → A (2)

| Slug | Amélioration clé |
|------|------------------|
| `saving-rate` | Scénarios FCFA (580k–650k), taux réel après surconsommation, lien budget + habits |
| `saving-habits` | Automatisation payday, comparaison FCFA annuelle, plan 3 mois |

### B → A (20)

| Module | Slugs |
|--------|-------|
| foundations | `fixed-vs-variable-expenses`, `cash-flow-basics`, `opportunity-cost`, `inflation-basics` |
| debt | `understanding-interest`, `minimum-payments`, `debt-snowball`, `debt-avalanche` |
| saving-investing | `why-save`, `introduction-to-investing`, `stocks-basics`, `bonds-basics`, `funds-and-etfs`, `investment-horizon`, `liquidity-basics`, `real-estate-basics` |
| wealth-building | `retirement-basics`, `financial-independence`, `portfolio-basics`, `wealth-habits` |

**Mécanisme :** `prisma/seed/content/pf-quality-upgrades.ts` → `applyPfQualityUpgrades()` dans `pf-lessons.ts`

---

## D. Questions améliorées

| Métrique | Avant | Après |
|----------|-------|-------|
| Total questions | 99 | 116 |
| Leçons multi-questions | ~31 | 53 (toutes ≥2) |
| Questions purement définitionnelles | 2 (`stocks-basics`, `real-estate-basics`) | 0 |

**Patterns introduits :**
- Mini-situations chiffrées (FCFA / EUR)
- « Que feriez-vous ? » / « Quelle option est la plus adaptée ? »
- Distracteurs plausibles avec `whyFr` / `whyEn`
- Cas où la réponse évidente est un piège (ex. taux d'épargne nominal vs réel)

---

## E. Redondances détectées (différenciées, non supprimées)

| Paire / cluster | Angle distinct conservé |
|-----------------|-------------------------|
| `building-a-budget` vs `cash-flow-basics` | Budget = allocation ; Cash flow = mouvements dans le temps |
| `cash-flow-basics` vs `saving-rate` | Flux = diagnostic mensuel ; Taux = indicateur de trajectoire |
| `saving-rate` vs `saving-habits` | Taux = mesure ; Habitudes = automatisation comportementale |
| `debt-snowball` vs `debt-avalanche` | Motivation vs coût mathématique total |
| `emergency-fund` vs `why-save` | Risque liquidité vs motivation épargne long terme |
| `stocks-basics` vs `funds-and-etfs` | Titre individuel vs panier diversifié |

Aucune leçon supprimée — angles pédagogiques clarifiés dans les textes enrichis.

---

## F. Liens simulateurs

| Simulateur | Leçon cible | Leçons préparatoires enrichies |
|------------|-------------|--------------------------------|
| **BUDGET** | `building-a-budget` | `saving-rate`, `saving-habits`, `fixed-vs-variable-expenses`, `cash-flow-basics` |
| **COMPOUND_INTEREST** | `compound-interest` | `understanding-interest`, `retirement-basics` |
| **DEBT_REPAYMENT** | `debt-repayment-strategies` | `minimum-payments`, `debt-snowball`, `debt-avalanche` |

Transitions explicites ajoutées via `simulatorFr` / `simulatorEn` dans `buildPfLesson`.

---

## G. Problèmes FR/EN corrigés

| Problème | Correction |
|----------|------------|
| Exemples trop génériques (2 500 € sans contexte) | Scénarios FCFA + comparaisons internationales |
| `stocks-basics` / `real-estate-basics` — questions définitionnelles | Remplacées par mini-situations d'achat / allocation |
| `saving-rate` / `saving-habits` — corps <850 car. | Corps enrichis >1 200 car. |
| Distracteurs sans explication | `whyFr` / `whyEn` sur toutes les options incorrectes des leçons upgradées |

FR et EN transmettent le même concept ; chiffres cohérents ; réponses correctes identiques.

---

## H. Recommandations restantes (hors scope Phase 1)

1. **Corporate Finance / PMP** — appliquer le même audit qualité
2. **Leçons A non touchées (31)** — révision légère des questions sur 5–10 leçons clés lors d'une Phase 2
3. **Shorts PF** — aligner scripts courts sur les nouveaux exemples FCFA
4. **Banque de 3e questions** — pour leçons DECIDE avancées (`risk-management-pf`, `behavioral-finance-basics`)
5. **Validation utilisateur** — test lecture mobile sur leçons les plus longues (>2 000 car.)

---

## Leçons A stables (31 — non modifiées)

`understanding-money`, `understanding-income`, `net-vs-gross-income`, `tracking-expenses`, `needs-vs-wants`, `building-a-budget`, `emergency-fund`, `what-is-debt`, `loan-amortization`, `debt-repayment-strategies`, `refinancing-basics`, `cost-of-borrowing`, `compound-interest`, `risk-and-return`, `diversification`, `asset-allocation`, `tax-basics`, `dollar-cost-averaging`, `investment-fees`, `volatility-basics`, `net-worth`, `real-vs-nominal-return`, `behavioral-finance-basics`, `risk-management-pf`, `insurance-basics`, `estate-planning-basics`, `giving-and-philanthropy`, `money-and-relationships`, `financial-planning-overview`, `goal-setting-pf`, `mindset-and-money`

*(Liste indicative — 31 leçons hors upgrade set.)*

---

**STOP — Phase Content Quality 1 terminée.**
