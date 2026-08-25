# PMP Cross-Content QA — Mission 3 (AUDIT ONLY)

**Date:** 2026-08-25  
**Branch:** `cursor/pmp-cross-content-qa-e932`  
**Scope:** Contrôle transversal du catalogue PMP — **aucune modification de contenu**  
**Baseline post-Mission 2:** 77 leçons · 124 Q leçons · 200 Q exam · 52 A / 25 B / 0 C / 0 D

---

## Executive Summary

Le catalogue PMP PLA est **cohérent et pédagogiquement sain** après Mission 2. Aucun **P0 bloquant** n’a été trouvé. La banque d’examen **200 Q reste intacte**.

| Verdict | Détail |
|---------|--------|
| Cohérence globale | Progression modules claire ; 1 régression difficulté mineure (process) |
| Questions leçons (124) | **A ≈ 97 · B ≈ 26 · C ≈ 0 · D ≈ 0** (1 formulation borderline) |
| FR/EN | Aucune fuite FR↔EN détectée ; corps équilibrés |
| IP | Mentions PMBOK = **disclaimers** ou négation explicite (PLA ≠ PMI) — OK |
| Simulateurs | **Aucun simulateur PMP** (by design) — pas de lien incohérent |
| Exam bank | Alignement conceptuel global OK ; tags skills / densité PROCESS à surveiller |

**Priorité dominante (P1) :** 28 leçons encore « minces » (1 Q, pas de Situation) — enrichissement ciblé éventuel, pas une réécriture massive.

---

## 1. Cohérence pédagogique

### Progression par module

| Module | N | Sit | Multi | BEGINNER | INTERMEDIATE | ADVANCED | Lecture |
|--------|---|-----|-------|----------|--------------|----------|---------|
| foundations | 3 | 3 | 3 | 3 | 0 | 0 | Solide entrée |
| people | 14 | 8 | 9 | 5 | 8 | 1 | Bonne montée |
| process | 16 | 8 | 8 | 7 | 8 | 1 | 1 ordre ADVANCED→BEGINNER |
| business-environment | 10 | 5 | 5 | 1 | 9 | 0 | Peu de BEGINNER |
| agile | 12 | 5 | 6 | 5 | 7 | 0 | OK |
| hybrid | 10 | 5 | 6 | 2 | 6 | 2 | OK |
| situational-thinking | 12 | 12 | 2 | 0 | 9 | 3 | Capstone fort |

### Constats

- **Ordre logique global :** Foundations → People/Process/Business → Agile/Hybrid → Situational — cohérent.
- **Trous :** pas de trou conceptuel majeur ; schedule / estimation / resource / portfolio restent plus descriptifs (B).
- **Contradiction :** aucune contradiction factuelle détectée entre modules (risk vs issue, benefits vs realization, hybrid interfaces vs mixed models différenciés après M2).
- **Régression difficulté :** `integration` (ADVANCED) précède `lessons-learned` (BEGINNER) dans process — **P2** cosmétique d’ordre, pas bloquant.

---

## 2. Répétitions

| Concept | Leçons | Rôle | Utile ? | Recommandation |
|---------|--------|------|---------|----------------|
| Risk / issue | `risk-vs-issue`, `issue-management`, `risk-vs-issue-situational`, `risk-management-hybrid` | Classifier → traiter → décider → adapter hybride | **Utile** | Conserver angles ; évent. Situation sur `risk-management-hybrid` |
| Stakeholders | `stakeholders-basics`, `stakeholder-management-hybrid` | People vs gouvernance mixte | **Utile** | OK |
| Benefits / value | `benefits`, `benefits-realization`, `business-value` | Définir → réaliser → ancrer valeur | **Utile** | `business-value` encore mince (1 Q) — P1 léger |
| Change | `change-management-basics`, `organizational-change`, `change-request-critical-path` | Process / org / vignette | **Utile** | OK |
| Hybrid delivery | `hybrid-project-basics`, `when-to-use-hybrid`, `combining-*`, `mixed-delivery-models` | Intro / choix / interfaces / modèles | **Utile** (différencié M2) | `hybrid-project-basics` multi-Q sans Situation — P2 |
| Leadership | `leadership`, `servant-leadership` | Styles vs servant | **Utile** | OK |
| Governance | `governance`, `governance-hybrid` | Org vs hybride | **Utile** | Enrichir Situation hybrid — P2 |
| Helios vignette | ~35/77 leçons | Continuité narrative | **Acceptable** mais dominant | Diversifier Nordia/FlowMart/Contineo — P2 |

---

## 3. Skills

### Distribution leçons (skillSlug)

| Skill | # leçons | Note |
|-------|----------|------|
| `pmp-situational-thinking` | 11 | Fort (voulu) |
| `hybrid-delivery` | 10 | Fort |
| `pmp-people` | 9 | Bucket large |
| `pmp-process` | 8 | Bucket large |
| `pmp-agile` | 7 | OK |
| `pmp-business-environment` | 5 | OK |
| Skills mono-leçon (`scope`, `cost`, `quality`, `schedule`…) | 1 chacun | Normal micro-learning |

### Incohérences skill ↔ exam (tags)

| Observation | Priorité |
|-------------|----------|
| Exam utilise `pmp-hybrid` ; leçons hybrid utilisent `hybrid-delivery` | **P1** — mapping tags, pas contenu |
| Exam tag `team-development` ; leçon `team-development` a skill `pmp-people` | **P1** |
| Skills leçon avec **0** hit exam tag : `cost`, `scope`, `benefits`, `compliance`, `backlog`, `planning`, `integration`, `product-ownership`, `sprint-concepts`, `hybrid-delivery` | **P1** cohérence analytics (exam peut quand même tester le concept via prompt) |
| Exam `quality` = **1** seule Q taguée | **P1** sous-représentation tag / évent. couverture |

**NE PAS modifier les skills dans cette mission** — signalement uniquement.

---

## 4. Audit des 124 questions de leçons

### Classement (heuristique lecture)

| Grade | Count | % | Critère |
|-------|------:|--:|---------|
| **A** | **97** | 78 % | Situationnelle + distracteurs expliqués |
| **B** | **26** | 21 % | Correcte ; framing limité ou mono-Q legacy |
| **C** | **0** | 0 % | — |
| **D** | **0** | 0 % | — |

*Note : `iteration-planning` Q#1 (« What distinguishes FlowMart… ») a une **formulation définitionnelle** mais un ancrage cas concret → classée **B** (pas D). Priorité P2 reformulation.*

### Échantillon B (à surveiller, non bloquant)

`project-initiation`, `planning`, `schedule`, `estimation-techniques`, `project-controls-metrics`, `integration`, `organizational-strategy`, `business-value`, `project-selection`, `portfolio-context`, `backlog`, `sprint-concepts`, `feedback`, `risk-management-hybrid`, parts de `agile-mindset` / `hybrid-project-basics`, `pla-situational-method` TRUE/FALSE anti-PMI, `team-conflict-architecture`

### Qualité globale

- Distracteurs avec `whyFr`/`whyEn` : excellents sur upgrades M2
- Objectifs IDENTIFY/APPLY/ANALYZE/DECIDE : alignés
- Aucune question purement « What is X? » restante sur le catalogue live

---

## 5. Équilibre des domaines

### Leçons

| Domaine pédagogique | Force | Faiblesse résiduelle |
|---------------------|-------|----------------------|
| People | Leadership, conflict, stakeholders, servant | EI / psy-safety / distributed encore 1 Q |
| Process | Risk, change, quality, procurement, scope enrichis | Schedule, estimation, resources, controls, integration minces |
| Business | Governance, benefits, change org | Strategy, selection, portfolio, compliance 1 Q |
| Agile | DoD, impediments, iteration, retro | Backlog, PO, velocity, feedback 1 Q |
| Hybrid | Combining / when / mixed / delivery strategy | Tailoring, boundaries, gov-hybrid, risk-hybrid |
| Situational | Excellent | Peu de multi-Q (volontaire vignette unique) |

### Thèmes transverses

| Thème | Couverture leçons | Commentaire |
|-------|-------------------|-------------|
| Leadership / servant | Forte | OK |
| Stakeholders / communication / conflict | Forte | OK |
| Risk / quality / scope / change / procurement | Forte post-M2 | OK |
| Schedule / cost | Moyenne | Cost enrichi ; schedule encore B |
| Governance / benefits | Bonne | OK |
| Agile collab / hybrid delivery | Bonne | OK |

---

## 6. FR / EN

| Check | Résultat |
|-------|----------|
| Fuite FR dans EN / EN dans FR | **0** détectée |
| Équivalence pédagogique prompts/options | Symétrie factory + upgrades |
| Déséquilibre longueur corps | **0** cas <55 % ratio |
| Termes techniques | Cohérents (baseline, backlog, sponsor, gate…) |

**Risque P3 :** quelques anglicismes assumés en FR (sprint, backlog, sponsor) — pédagogiquement OK pour PMP.

---

## 7. Situations (46/77)

### Diversité thématique (une situation peut matcher plusieurs thèmes)

| Thème | Hits approx. |
|-------|-------------|
| Sponsor | 24 |
| Agile | 22 |
| Team | 21 |
| Risk | 20 |
| Stakeholder | 16 |
| Quality | 11 |
| Conflict / Governance | 9 |
| Vendor / Change | 8 |
| Hybrid / Business | **6** |

### Patterns répétitifs

| Pattern | Priorité |
|---------|----------|
| Dominance **Helios** (~35 leçons) | **P2** diversifier |
| Sponsor pressé / mid-sprint | Fréquent mais réaliste — OK si angles varient |
| Hybrid & business situations plus rares | **P2** |

Cible M2 (25–30) **dépassée** (46) — qualité OK, pas de padding artificiel détecté.

---

## 8. Simulateurs / leçons

| Constat | Détail |
|---------|--------|
| Simulateurs PLA | PF/CF uniquement (`COMPOUND`, `BUDGET`, `DEBT`, `MULTIPLES`, `DCF`) |
| Liens PMP → simulateur | **Aucun** (attendu) |
| Mentions incohérentes | **Aucune** (faux positifs « budget » = mot coût projet) |
| Opportunités | Pas de simulateur PMP requis pour l’architecture actuelle |

**Priorité :** aucune action simulateur. **P3** futur éventuel (trade-off scope/cost/schedule) hors scope.

---

## 9. Cohérence avec Exam Bank (200 Q — INCHANGÉE)

### Structure exam

| Dimension | Distribution |
|-----------|--------------|
| Domains | PEOPLE 55 · **PROCESS 105** · BUSINESS 40 |
| Approaches | AGILE 67 · HYBRID 67 · PREDICTIVE 66 |
| ScenarioTypes | Équilibrés (~16–17 chacun) |

### Alignement leçons ↔ banque

| OK | Écart |
|----|-------|
| People / risk / conflict / stakeholder / agile / hybrid largement couverts | PROCESS exam très dense vs BUSINESS plus léger |
| Situational thinking bien tagué (26) | Tag `quality` quasi absent (1) alors que leçon quality existe |
| Approaches delivery équilibrées | Skill slug `hybrid-delivery` (leçons) ≠ `pmp-hybrid` (exam) |
| Concepts enseignés présents | Tags `cost` / `scope` / `benefits` / `compliance` absents côté exam skills |

**Recommandation (future mission exam-tags, pas contenu) :** aligner slugs skills + éventuellement rééquilibrer tags quality/cost/scope — **sans réécrire les 200 stems**.

---

## 10. Méthode PLA

| Check | Résultat |
|-------|----------|
| Boucle enseignée | Oui — `pla-situational-method` + ~33 leçons mentionnent OBSERVE…ADAPT |
| Présentée comme PMI officielle | **Non** — disclaimers + question TRUE/FALSE anti-PMBOK |
| Usage cohérent | Identify/collaborate before act dominant dans situational |

---

## 11. IP / Copyright review

| Signal | Interprétation | Priorité |
|--------|----------------|----------|
| « PMBOK® » dans **76** leçons | Quasi exclusivement disclaimer factory « *not* PMBOK reproduction » | **Aucune** (protection IP) |
| `pla-situational-method` | Contenu nie explicitement la reproduction PMBOK | **Aucune** |
| EEF dans **source** `pmp-business.ts` | **Catalogue live** = upgrade sans EEF (`organizational-context` OK) | **P2** nettoyer source morte si upgrades retirés un jour |
| Questions type examen officiel | Non détecté (vignettes Helios/Nordia/FlowMart originales) | — |

---

## 12. Tableau des priorités

| ID | Priorité | Sujet | Action recommandée (future) |
|----|----------|-------|------------------------------|
| QA-01 | **P1** | 28 leçons 1Q sans Situation | Enrichissement ciblé analytics-driven |
| QA-02 | **P1** | Mismatch skills `hybrid-delivery` vs `pmp-hybrid` | Aligner tags seed / exam metadata |
| QA-03 | **P1** | `team-development` skill leçon ≠ exam | Harmoniser skillSlug |
| QA-04 | **P1** | Exam tag `quality` (1) + skills cost/scope/benefits absents | Revue tags exam (sans changer stems) |
| QA-05 | **P2** | Helios dominant | Diversifier vignettes |
| QA-06 | **P2** | Hybrid/business situations plus rares | +Situations sur gov/risk hybrid |
| QA-07 | **P2** | Ordre `integration` → `lessons-learned` | Réordonner sortOrder |
| QA-08 | **P2** | `iteration-planning` Q#1 formulation | Reformuler en FIRST_ACTION |
| QA-09 | **P2** | Source `pmp-business` EEF résiduel | Nettoyage source non live |
| QA-10 | **P3** | Anglicismes FR | Assumer ou glossaire |
| QA-11 | **P3** | Simulateur PMP futur | Hors architecture actuelle |

**P0 bloquant :** aucun.

---

## 13. Limites de cet audit

- Classement questions = heuristique + revue ciblée (pas SME humain item-by-item sur 200 exam).
- Exam bank non rouverte stem-par-stem (mission : cohérence conceptuelle uniquement).
- Grades leçons A/B Mission 2 conservés ; cet audit ne regrade pas les 77 leçons.

---

## 14. Recommandations (ne pas exécuter maintenant)

1. Mission éventuelle **skill-tag alignment** (leçons + exam metadata) — pas de rewrite contenu.
2. Vague mince **8–12 B** si analytics quiz le justifie (schedule, portfolio, distributed-teams…).
3. Diversification vignettes Helios → Contineo/Nordia.
4. **Ne pas** toucher les 200 Q exam stems sans mission dédiée.

---

**STOP — Mission 3 Audit only. Aucun enrichissement. Exam bank inchangée.**
