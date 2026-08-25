# PMP / Project Management — Content Quality Audit (Mission 1 — AUDIT ONLY)

**Date:** 2026-08-25  
**Branch:** `cursor/pmp-content-quality-audit-e932`  
**Scope:** 77 leçons PMP · 7 modules · FR/EN · **aucune modification de contenu**  
**Exam bank:** 200 questions — **non auditée / non modifiée** dans cette mission

---

## Résumé exécutif

Le catalogue PMP PLA est **structurellement sain** (usine `buildPmpLesson`, disclaimer IP, module *situational-thinking* déjà très fort), mais **globalement sous-équipé en situations et en multi-questions** hors du module situational.

| Indicateur | Valeur |
|------------|--------|
| Leçons auditées | **77** |
| Questions de leçons | **91** (`1 + questions[]` seed) |
| Avec bloc `situation` structuré | **13 / 77** (surtout *situational-thinking*) |
| Une seule question quiz | **69 / 77** |
| Questions principales définitionnelles | **9** |
| Exam bank PMP | **200** (inchangée) |

### Classement global

| Grade | Count | % |
|-------|-------|---|
| **A** (solide) | **19** | 25 % |
| **B** (bonne / améliorable) | **44** | 57 % |
| **C** (superficielle) | **13** | 17 % |
| **D** (insuffisante) | **1** | 1 % |

**Verdict :** Mission 2 devra prioriser **enrichissement situationnel + multi-questions**, en particulier sur **People, Process, Agile, Hybrid, Business Environment**. Le module **Situational Thinking** est déjà proche du standard PLA (11 A / 12).

---

## Volume audité

| Module | Leçons | A | B | C | D |
|--------|--------|---|---|---|---|
| foundations | 3 | 0 | 3 | 0 | 0 |
| people | 14 | 4 | 7 | 3 | 0 |
| process | 16 | 1 | 13 | 2 | 0 |
| business-environment | 10 | 1 | 6 | 3 | 0 |
| agile | 12 | 2 | 7 | 3 | 0 |
| hybrid | 10 | 0 | 7 | 2 | 1 |
| situational-thinking | 12 | 11 | 1 | 0 | 0 |
| **Total** | **77** | **19** | **44** | **13** | **1** |

---

## Méthode PLA & IP

| Critère | Constat |
|---------|---------|
| Boucle **OBSERVE → UNDERSTAND → IDENTIFY → COLLABORATE → ACT → VERIFY → ADAPT** | Explicitement enseignée dans `pla-situational-method` et utilisée dans les vignettes *situational-thinking* |
| Présentée comme officielle PMI | **Non** — disclaimers factory : « pas une certification PMI / pas une reproduction PMBOK® » |
| Contenu original PLA | Structure propriétaire ; pas de reproduction de questions officielles dans les leçons |
| Terminologie à surveiller (M2) | `organizational-context` questionne les « EEFs » — reformuler en langage PLA (contraintes org. / facteurs externes) sans jargon propriétaire PMI |
| Banque d’examen 200 Q | **Hors périmètre** — non modifiée |

---

## Tableau des 77 leçons

Légende : `sit` = bloc Situation structuré · `q` = nombre de questions

### foundations (3)

| Grade | Slug | Diff | Skill | Obj | q | sit | Problème principal |
|-------|------|------|-------|-----|---|-----|-------------------|
| B | `what-is-project-management` | BEGINNER | pmp-foundations | — | 1 | N | Quiz unique, peu situationnel |
| B | `project-roles` | BEGINNER | pmp-foundations | — | 1 | N | Idem — rôles sans tension décisionnelle |
| B | `project-lifecycle-basics` | BEGINNER | pmp-foundations | — | 1 | N | Cycle de vie descriptif |

### people (14)

| Grade | Slug | Diff | q | sit | Problème / note |
|-------|------|------|---|-----|-----------------|
| B | `leadership` | — | 1 | N | Leadership abstrait sans vignette |
| A | `team-development` | — | 1 | N | Solide ; multi-Q souhaitable en M2 |
| A | `team-performance` | — | 1 | N | Solide |
| B | `conflict-management-basics` | — | 2 | N | Bon départ ; manque Situation structurée |
| A | `negotiation-basics` | — | 2 | N | Solide |
| B | `communication` | — | 1 | N | Message/canal sans mini-cas |
| B | `stakeholders-basics` | — | 1 | N | Prioritaire M2 — cœur People |
| B | `emotional-intelligence-pm` | — | 1 | N | Conceptuel |
| B | `servant-leadership` | — | 1 | N | Risque de contenu générique |
| **C** | `coaching-and-mentoring` | — | 1 | N | Superficiel — pas de scénario |
| **C** | `motivation` | — | 1 | N | Superficiel |
| A | `psychological-safety` | — | 1 | N | Solide |
| **C** | `collaboration` | — | 1 | N | Superficiel |
| B | `distributed-teams` | — | 1 | N | À ancrer dans un conflit distance/async |

### process (16)

| Grade | Slug | q | sit | Problème / note |
|-------|------|---|-----|-----------------|
| B | `project-initiation` | 1 | N | Descriptif |
| B | `planning` | 1 | N | Descriptif |
| B | `scope` | 1 | N | Manque trade-off scope/valeur |
| B | `requirements-basics` | 1 | N | |
| B | `schedule` | 1 | N | |
| B | `estimation-techniques` | 1 | N | |
| B | `cost` | 1 | N | Question trop définitionnelle |
| A | `risk-vs-issue` | 2 | Y | **Référence Process** |
| **C** | `issue-management` | 1 | N | Faible vs `risk-vs-issue` |
| B | `quality` | 1 | N | Prioritaire — Quality |
| B | `change-management-basics` | 3 | N | Multi-Q OK ; Situation à ajouter |
| B | `procurement-basics` | 1 | N | Prioritaire — Procurement |
| B | `resource-management` | 1 | N | |
| B | `project-controls-metrics` | 1 | N | |
| B | `integration` | 1 | N | |
| **C** | `lessons-learned` | 1 | N | Superficiel |

### business-environment (10)

| Grade | Slug | q | sit | Problème / note |
|-------|------|---|-----|-----------------|
| B | `governance` | 1 | N | Définitionnelle |
| B | `compliance` | 1 | N | |
| B | `organizational-strategy` | 1 | N | |
| A | `business-value` | 1 | N | Solide |
| **C** | `benefits` | 1 | N | Définitionnelle + courte |
| B | `benefits-realization` | 1 | N | Différencier vs `benefits` |
| **C** | `organizational-context` | 1 | N | Superficiel |
| B | `project-selection` | 1 | N | |
| B | `portfolio-context` | 1 | N | |
| **C** | `organizational-change` | 1 | N | Définitionnelle |

### agile (12)

| Grade | Slug | q | sit | Problème / note |
|-------|------|---|-----|-----------------|
| B | `agile-mindset` | 4 | N | Multi-Q OK ; Situation absente |
| **C** | `iterative-delivery` | 1 | N | Définitionnelle |
| B | `backlog` | 1 | N | |
| A | `prioritization-techniques` | 1 | N | Solide |
| A | `product-ownership` | 1 | N | Solide |
| **C** | `iteration-planning` | 1 | N | Superficiel |
| B | `sprint-concepts` | 1 | N | |
| B | `definition-of-done` | 1 | N | |
| B | `feedback` | 1 | N | |
| **C** | `retrospective` | 1 | N | Superficiel — cœur Agile |
| B | `velocity-and-flow` | 1 | N | |
| B | `impediments-management` | 1 | N | |

### hybrid (10)

| Grade | Slug | q | sit | Problème / note |
|-------|------|---|-----|-----------------|
| B | `hybrid-project-basics` | 4 | N | Multi-Q ; manque Situation |
| B | `when-to-use-hybrid` | 1 | N | |
| **D** | `combining-predictive-and-agile` | 1 | N | **Priorité #1** — définitionnel + court + pas de cas |
| B | `planning-boundaries-hybrid` | 1 | N | |
| **C** | `mixed-delivery-models` | 1 | N | Redondance vs combining-* |
| B | `tailoring` | 1 | N | |
| B | `governance-hybrid` | 1 | N | |
| **C** | `stakeholder-management-hybrid` | 1 | N | Différencier vs people/stakeholders |
| B | `risk-management-hybrid` | 1 | N | |
| B | `delivery-strategy` | 1 | N | Définitionnelle |

### situational-thinking (12)

| Grade | Slug | q | sit | Note |
|-------|------|---|-----|------|
| A | `pla-situational-method` | 3 | Y | **Référence méthode PLA** |
| A | `identify-before-acting` | 1 | Y | |
| A | `root-cause-vs-symptom` | 1 | Y | |
| A | `collaborate-before-escalating` | 1 | Y | |
| A | `scope-creep-mid-sprint` | 1 | Y | |
| B | `team-conflict-architecture` | 1 | Y | Enrichir multi-Q |
| A | `vendor-delay-risk` | 1 | Y | |
| A | `change-request-critical-path` | 1 | Y | |
| A | `protect-value-decisions` | 1 | Y | |
| A | `risk-vs-issue-situational` | 1 | Y | |
| A | `agile-vs-predictive-choice` | 1 | Y | |
| A | `exam-reasoning-integration` | 2 | Y | Intégration exam reasoning |

---

## Détail B / C / D — problèmes & recommandations

### D (1) — priorité absolue Mission 2

#### `combining-predictive-and-agile` (hybrid)

| | |
|--|--|
| **Problème** | Question définitionnelle, 1 seule Q, pas de Situation, exercice court |
| **Pourquoi** | Leçon centrale Hybrid sans entraînement à l’arbitrage réel predictive vs agile |
| **Amélioration** | Mini-cas (contraintes réglementaires + incertitude produit) ; 2–3 Q DECIDE |
| **Exemple** | Module réglementaire fixe + features marché volatiles — que garder prédictif / itératif ? |
| **Question** | « Quelle partie du travail geler en baseline vs laisser dans un backlog ? » |

---

### C (13) — priorités hautes

| Slug | Module | Problème | Pourquoi | Amélioration | Exemple recommandé | Question recommandée |
|------|--------|----------|----------|--------------|--------------------|----------------------|
| `coaching-and-mentoring` | people | Pas de scénario ; 1 Q | Coaching reste abstrait | Vignette junior bloqué mid-sprint | Dev silencieux après feedback négatif | Première action coach vs micro-management |
| `motivation` | people | Superficiel | Pas de lien performance/équipe | Cas démotivation post-échec démo | Équipe après 2 sprints ratés | Levier motivation vs pression deadline |
| `collaboration` | people | Générique | Redondant vs communication | Cas silos métier/IT | Métier refuse standup joint | Meilleure première action collab |
| `issue-management` | process | Faible vs risk-vs-issue | Distinction floue pour l’apprenant | Alignement sur A `risk-vs-issue` | Incident prod vs risque reporté | Classer + première action |
| `lessons-learned` | process | Descriptif | Pas de pratique de capture | Rituel fin d’itération manqué | Projet qui répète la même erreur | Quand / comment capturer |
| `benefits` | business | Définitionnelle | Confondue avec benefits-realization | Cas bénéfice non mesurable | KPI « satisfaction » flou | Que clarifier avant go-live |
| `organizational-context` | business | Superficiel | Peu de décision | Matrice culture/politique | Sponsor politique vs sponsor métier | Qui influencer d’abord |
| `organizational-change` | business | Définitionnelle | Peu de résistance réelle | Adoption faible d’un outil | 30 % d’usage après rollout | Première action change |
| `iterative-delivery` | agile | Définitionnelle | Rate le « pourquoi itérer » | Scope trop large pour 1 sprint | Feature 6 mois → slices | Que livrer en itération 1 |
| `iteration-planning` | agile | Superficiel | Pas de tension capacité/engagement | Overcommit sprint | 40 pts capacité 25 | Que couper |
| `retrospective` | agile | Superficiel | Cœur Agile sous-exploité | Rétro qui devient plainte | Blame d’un individu | Facilitation PLA |
| `mixed-delivery-models` | hybrid | Redondant | Chevauche `combining-*` | Angle = modèles de livraison concrets | Waterfall phases + agile streams | Quel modèle pour quel workstream |
| `stakeholder-management-hybrid` | hybrid | Faible | Chevauche people/stakeholders | Gouvernance mixte predictive/agile | Comité stage-gate + PO | Comment aligner attentes |

---

### B — clusters prioritaires Mission 2

**People (priorité haute) :** `stakeholders-basics`, `conflict-management-basics`, `leadership`, `communication`, `servant-leadership`, `emotional-intelligence-pm`, `distributed-teams`

**Process (priorité haute) :** `quality`, `procurement-basics`, `change-management-basics` (déjà multi-Q — ajouter Situation), `scope`, `risk` adjacent déjà A via `risk-vs-issue`

**Business :** `governance`, `compliance`, `benefits-realization`, `project-selection`

**Agile :** `definition-of-done`, `impediments-management`, `sprint-concepts`, `feedback`, `agile-mindset` (ajouter Situation malgré multi-Q)

**Hybrid :** `when-to-use-hybrid`, `tailoring`, `governance-hybrid`, `risk-management-hybrid`

**Foundations (tous B) :** ancrer chaque leçon dans une vignette « projet vs ops / rôles en tension / phase ambiguë »

**Pattern d’amélioration B commun :**
1. Ajouter bloc `situation` (scénario + problème + best action)
2. Passer à ≥2 questions situationnelles
3. Distracteurs = erreurs d’examen typiques (agir trop vite, escalader trop tôt, ignorer stakeholder, forcer process)
4. Relier explicitement à la boucle PLA sans la présenter comme PMI

---

## Problèmes récurrents

| Problème | Occurrences (approx.) | Impact |
|----------|----------------------|--------|
| Une seule question quiz | **69 / 77** | Peu d’entraînement au jugement |
| Question principale peu situationnelle | **~49** | Mémoire > décision |
| Pas de bloc Situation (hors situational) | **~36** dans people/agile/hybrid | Écart vs standard PLA déjà visible en situational |
| Exercice pratique trop court | **~33** | Peu de transfert |
| Questions définitionnelles (prompt principal) | **9** | À éliminer en M2 — voir liste ci-dessous |

**Définitionnelles (prompt principal EN) :** `cost`, `governance`, `benefits`, `organizational-context`, `organizational-change`, `iterative-delivery`, `iteration-planning`, `combining-predictive-and-agile`, `delivery-strategy`

---

## Leçons prioritaires Mission 2 (ordre suggéré)

### Vague 1 — D + C critiques (14)

1. `combining-predictive-and-agile` (**D**)
2–14. Les 13 **C** listées ci-dessus (People ×3, Process ×2, Business ×3, Agile ×3, Hybrid ×2)

### Vague 2 — B à fort ROI pédagogique (~15)

`stakeholders-basics`, `conflict-management-basics`, `quality`, `procurement-basics`, `change-management-basics`, `definition-of-done`, `retrospective` (si pas assez en V1), `governance`, `when-to-use-hybrid`, `servant-leadership`, `scope`, `impediments-management`, `benefits-realization`, `leadership`, `communication`

### Vague 3 — Foundations + reste B

Les 3 foundations + B restants, puis polish multi-Q sur les **A** à 1 question.

---

## Recommandations d’enrichissement (Mission 2)

1. **Ne pas augmenter le nombre de leçons** — enrichir les 58 B/C/D.
2. **Standard cible** (aligné PF/CF quality) :
   - corps riche FR/EN
   - Situation (acteur, contrainte, tension)
   - ≥2 questions situationnelles
   - distracteurs avec `whyFr`/`whyEn`
   - lien explicite skills + boucle PLA (propriétaire)
3. **Différencier redondances** sans supprimer :
   - `benefits` vs `benefits-realization`
   - `stakeholders-basics` vs `stakeholder-management-hybrid`
   - `combining-predictive-and-agile` vs `mixed-delivery-models`
   - `risk-vs-issue` vs `issue-management` vs `risk-vs-issue-situational`
4. **Ne pas toucher** à la banque d’examen 200 Q (sauf mission dédiée ultérieure).
5. **Mécanisme technique suggéré** (M2) : `pmp-quality-upgrades.ts` + `applyPmpQualityUpgrades()` comme PF/CF — **pas dans cette mission**.

---

## Risques pédagogiques

| Risque | Mitigation Mission 2 |
|--------|----------------------|
| Contenu trop générique Leadership/Motivation | Vignettes projet uniquement |
| Dérive « official PMI » | Garder disclaimers ; méthode PLA nommée propriétaire |
| Redondance Hybrid / People / Process | Angles distincts documentés |
| Situational excellent vs reste faible | Propager le pattern Situation hors module 7 |
| Sur-augmenter la difficulté | Difficulté = raisonnement, pas formulation obscure |
| Toucher l’exam bank par erreur | Hors scope strict |

---

## Cohérence FR/EN

- Structure pédagogique symétrique via factory (Objectif / Example / Mistake / Decision).
- Disclaimers bilingues présents.
- **Mission 2 :** vérifier chiffres/identités d’acteurs identiques FR/EN sur chaque upgrade ; éviter traductions littérales sur les questions DECIDE.

---

## Recommandations pour Mission 2

| # | Action |
|---|--------|
| 1 | Créer `pmp-quality-upgrades*.ts` + apply wrapper |
| 2 | Enrichir **14** leçons D+C d’abord |
| 3 | Puis **~15** B prioritaires People/Process/Agile/Hybrid |
| 4 | Cible : passer de **19 A → ≥50 A** sans ajouter de leçons |
| 5 | Questions leçons : **91 → ≥140** (indicatif) |
| 6 | Tests contenu + lint/test/build/e2e |
| 7 | Docs `CONTENT_PMP_QUALITY_ENRICHMENT.md` + checkpoint M2 |
| 8 | **Ne pas** modifier Exam Engine / scoring / 200 Q bank |

---

## Hors scope confirmé (non modifié)

- Prisma, APIs, moteurs, scoring, Exam Engine, AI Tutor, Lesson Player, recommandations, mastery thresholds
- Banque d’examen **200** questions
- Code applicatif

---

**STOP — Mission 1 Audit only. Aucun enrichissement démarré.**
