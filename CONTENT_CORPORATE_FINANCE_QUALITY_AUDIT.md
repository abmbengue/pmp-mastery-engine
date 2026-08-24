# Corporate Finance — Content Quality Audit (Phase 1)

**Date:** 2026-08-24  
**Scope:** 64 lessons · 5 modules · FR/EN · content-only pass  
**Branch:** `cursor/cf-content-quality-e932`

---

## A. Leçons analysées

**Total : 64 leçons** (inchangé — pas de nouvelle leçon)

| Module | Leçons |
|--------|--------|
| cf-foundations | 17 |
| financing-capital-structure | 12 |
| valuation | 13 |
| investment-ma | 11 |
| advanced-cf | 11 |

**Questions :** 104 → **134** (+30 questions situationnelles)

---

## B. Répartition A / B / C / D — AVANT

| Grade | Count | Description |
|-------|-------|-------------|
| **A** | 31 | Solide — structure + questions situationnelles |
| **B** | 31 | Correcte — 1 question, exemples à enrichir |
| **C** | 2 | Superficielle — `operating-cash-flow`, `dcf-enterprise-value` |
| **D** | 0 | Aucune |

### C (2)

| Slug | Module | Faiblesse |
|------|--------|-----------|
| `operating-cash-flow` | foundations | 1 question, peu d'interprétation cash vs profit |
| `dcf-enterprise-value` | valuation | 1 question, chaîne EV/FCF/WACC/TV insuffisante |

### B (31) — échantillon par module

- **Foundations:** `role-of-corporate-finance`, `balance-sheet`, `cash-flow-statement`, `revenue-basics`, `ebit-basics`, `net-income`, `capex-and-depreciation`, `accounts-receivable`, `accounts-payable`, `cash-conversion-cycle`
- **Financing:** `cost-of-debt`, `dilution-basics`
- **Valuation:** `enterprise-value`, `equity-value`, `ev-equity-bridge`, `trading-multiples`, `ev-ebitda`, `free-cash-flow`, `wacc-basics`, `terminal-value`, `valuation-ranges-and-limits`
- **Investment/M&A:** `capital-budgeting-basics`, `irr-basics`, `payback-period`, `purchase-price`, `sources-uses`
- **Advanced:** `roe-and-roa`, `economic-profit-basics`, `working-capital-optimization`, `fcf-conversion`, `deleveraging-basics`

---

## C. Répartition A / B / C / D — APRÈS

| Grade | Count |
|-------|-------|
| **A** | **64** |
| **B** | 0 |
| **C** | 0 |
| **D** | 0 |

Critères : corps >900 car., sections pédagogiques, questions situationnelles multi-Q, interprétation, trade-off, liens concepts/simulateurs.

---

## D. Leçons enrichies (33)

| Source | Count | Fichier |
|--------|-------|---------|
| Foundations (+ WC) | 11 | `cf-quality-upgrades-foundations.ts` |
| Valuation | 10 | `cf-quality-upgrades-valuation.ts` |
| Financing + M&A + Advanced | 12 | `cf-quality-upgrades-rest.ts` |
| **Total** | **33** | `applyCfQualityUpgrades()` dans `cf-lessons.ts` |

### Améliorations types

- Scénarios SahelPack (FCFA industriel) + Contineo / GreenLog (EUR services)
- Interprétation (profit ≠ cash, EV ≠ Equity, accretion ≠ value)
- Trade-offs explicites (dividendes vs CAPEX, g vs WACC, multiple vs levier)
- Distracteurs réalistes (EV/Equity, EBITDA/FCF, ROIC/ROE, NPV/IRR)

---

## E. Questions améliorées

| Métrique | Avant | Après |
|----------|-------|-------|
| Total questions | 104 | **134** |
| Leçons upgradées avec ≥2 Q | — | 33 |
| Questions purement définitionnelles (set upgradé) | quelques | **0** |

**Patterns :**
- Mini-cas chiffrés (ROIC 8 % / WACC 11 %, pont EV→Equity, TV Gordon)
- « Quelle conclusion est la plus pertinente ? »
- Explications `whyFr` / `whyEn` sur distracteurs
- EPS accretion ≠ création de valeur (M&A)

---

## F. Nouveaux cas chiffrés

| Cas | Chiffres | Usage |
|-----|----------|-------|
| **SahelPack** (industriel) | CA 10 Md FCFA, EBITDA 1,8 Md, CAPEX 700 M, BFR 1,2 Md | Foundations, OCF, FCF |
| **Contineo Services** | Revenue €50m, EBITDA €8m, Net Debt €20m | Financing, leverage |
| **GreenLog** | EBITDA €40m × 8x, Net Debt €70m, 50m shares | EV bridge, multiples |
| **DCF mini** | FCFₙ €50m, g 2 %, WACC 8 % → TV €850m | Terminal value, DCF |

Tous les calculs vérifiés (ex. TV = 50×1,02/0,06 = 850).

---

## G. Liens simulateurs

| Simulateur | Leçon ancre | Leçons préparatoires enrichies |
|------------|-------------|-------------------------------|
| **VALUATION_MULTIPLES** | `multiples-and-dcf-basics` | `trading-multiples`, `ev-ebitda`, `enterprise-value`, `ev-equity-bridge`, `dcf-enterprise-value` |
| **DCF_BASICS** | `multiples-and-dcf-basics` | `free-cash-flow`, `wacc-basics`, `terminal-value`, `dcf-enterprise-value` |

Chaîne pédagogique :

```
EV → Equity → Bridge → Trading Multiples → EV/EBITDA
  → FCF → WACC → Terminal Value → DCF → Simulateurs
```

Autres chaînes renforcées :

```
BFR → CCC → OCF → FCF → DCF → EV
Debt → Leverage → Cost of Debt → WACC → Valuation
Acquisition → Synergies → Financing → Accretion/Dilution → Value Creation
```

---

## H. Redondances (différenciées, non supprimées)

| Paire | Angle distinct |
|-------|----------------|
| `ebitda-basics` vs `ev-ebitda` | Indicateur opérationnel vs multiple de valorisation |
| `operating-cash-flow` vs `free-cash-flow` | Cash d'exploitation vs cash disponible après CAPEX |
| `enterprise-value` vs `equity-value` vs `ev-equity-bridge` | Concept / claim actionnaire / pont calculatoire |
| `irr-basics` vs `npv-basics` vs `payback-period` | Taux / valeur absolue / liquidité temporelle |
| `roe-and-roa` vs `roic-basics` | Rendement equity/actifs vs capital investi opérationnel |
| `accretion-dilution` vs `value-creation-vs-destruction` | Effet EPS vs valeur économique |

---

## I. Problèmes FR/EN corrigés

| Problème | Correction |
|----------|------------|
| Exemples trop abstraits | Cas SahelPack / Contineo / GreenLog bilingues |
| Questions « Que signifie WACC ? » | Remplacées par mini-cas décisionnels |
| Distracteurs sans explication | `whyFr`/`whyEn` sur options incorrectes |
| Lien simulateur faible sur DCF | `simulatorFr/En` explicites sur chaîne valuation |

---

## J. Recommandations restantes (hors scope Phase 1)

1. **Phase 2 CF** — enrichir 5–10 leçons A stables (`npv-basics`, `roic-basics`, `synergies-basics`) si feedback quiz
2. **PMP Content Quality** — même méthode audit → upgrades
3. **Shorts CF** — aligner scripts courts sur SahelPack / GreenLog
4. **Analytics** — corréler taux d'échec quiz post-deploy sur leçons upgradées
5. **Simulateur** — ne pas modifier le moteur ; éventuellement UX hint pédagogique (hors mission)

---

## Leçons A stables non modifiées (31)

Exemples : `value-creation-basics`, `income-statement`, `ebitda-basics`, `working-capital`, `financial-ratios-basics`, `debt-vs-equity-financing`, `capital-structure-basics`, `cost-of-equity`, `leverage-and-financial-risk`, `npv-basics`, `accretion-dilution`, `synergies-basics`, `roic-basics`, `scenario-analysis-cf`, `multiples-and-dcf-basics`, `dcf-sensitivity-basics`, …

---

**STOP — Phase Content Quality 1 Corporate Finance terminée.**
