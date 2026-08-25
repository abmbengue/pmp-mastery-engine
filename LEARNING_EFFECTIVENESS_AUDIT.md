# PLA — Learning Effectiveness Audit (Mission 5 — AUDIT ONLY)

**Date:** 2026-08-25  
**Branch:** `cursor/learning-effectiveness-audit-e932`  
**Scope:** Efficacité pédagogique du parcours CONTENT → LEARN → … → PROGRESSION  
**Règle :** **aucune modification** de code, seed, questions, Exam Bank, engines, UI

---

## 1. Executive Summary

PLA dispose d’un **contenu substantiel** (PF 53 / CF 64 / PMP 77), d’une **architecture pédagogique lisible** (LEARN→MASTER), et de **boucles d’erreur→reco→retry** particulièrement fortes sur le PMP.

La question d’efficacité révèle toutefois un **écart structurel** :

> Le contenu enseigne souvent à **raisonner** ; le **système de progression** peut encore **récompenser la complétion** plus que la compréhension.

| Verdict | Détail |
|---------|--------|
| **Overall Grade** | **B** |
| Force majeure | Contenu situationnel (surtout PMP + upgrades PF/CF) ; Exam → Error → Retry → Reco |
| Faiblesse majeure | **Pas de gate** LEARN/PRACTICE ; quiz faible n’empêche pas COMPLETED / mastery |
| Contenu | B+ / B+ / A- (PF / CF / PMP) |
| Learning loop système | **C+** (architecture bonne, enforcement faible) |
| P0 | 1 (complétion sans compréhension) |
| Prochaine mission recommandée | **Une seule** : *Learning Loop Hardening* (gates + mastery fidelity) — **ne pas démarrer ici** |

**Rappel PMP :** PLA Practice Readiness ≠ score officiel PMI.

---

## 2. Overall Grade

| Dimension | Grade | Commentaire |
|-----------|-------|-------------|
| CONTENT QUALITY | **B+** | Upgrades PF/CF/PMP solides ; poches B restantes |
| QUESTION QUALITY | **B** | Majorité application/situationnelle ; restes mémoriels |
| OBJECTIVE ALIGNMENT | **B** | Beaucoup ALIGNED ; tags DECIDE parfois en retard |
| PRACTICE QUALITY | **C+** | Practice non obligatoire ; exercise client-only |
| ERROR LEARNING | **B** | Fort sur PMP exam ; faible sur quiz leçon isolé |
| MASTERY | **C+** | Seuils clairs 60/80 ; proxy mono-quiz |
| RECOMMENDATIONS | **B-** | Priorité déterministe utile ; trous MASTERED due |
| SPACED REPETITION | **B-** | 1/3/7d cohérents ; non adaptatif ; erreurs lifetime |
| PMP PEDAGOGY | **A-** | Situational dense ; Exam Bank alignée conceptuellement |
| PF PEDAGOGY | **B+** | Budget/dette excellents ; investing plus glossaire |
| CF PEDAGOGY | **B+** | Chaîne FCF→DCF forte ; ordre valuation & M&A plus fins |
| FR/EN CONSISTENCY | **A-** | Parité structurelle factory |
| USER JOURNEY | **B-** | Parcours clair ; trous après échec leçon |
| UX PEDAGOGICAL IMPACT | **C+** | Scaffold visible mais skippable |

**Overall: B** — produit **pédagogiquement crédible** pour un MVP, pas encore un système qui **garantit** l’apprentissage.

---

## 3. PF Assessment

| Métrique | Valeur |
|----------|--------|
| Leçons / Questions | 53 / 116 |
| Modules | 4 |
| Simulateurs | Budget, Compound Interest, Debt Repayment |
| Mix Q (approx.) | ~12 % mémoriel · ~37 % application · ~51 % situationnel |

### Forces
- Chaîne budget → cash flow → saving rate → stratégies de dette **Understand → Calculate → Interpret → Decide**
- 12 leçons liées aux simulateurs avec consignes actionnables
- Upgrades qualité (~42 %) : scénarios FCFA + EUR

### Faiblesses
- Module **saving-investing** encore IDENTIFY-lourd (`stocks-basics`, `bonds-basics`, `funds-and-etfs`)
- Seulement **5** leçons taguées DECIDE vs ~51 % de Q situationnelles (tags en retard)
- Pas de simulateur allocation / DCA / frais

### Exemples alignment

| Statut | Slug | Problème / force |
|--------|------|------------------|
| ALIGNED | `saving-rate` | Objectif calculer+interpréter ↔ Q situationnelle Aïcha |
| ALIGNED | `debt-avalanche` | Objectif appliquer avalanche ↔ Q cartes vs auto |
| PARTIALLY | `compound-interest` | Objectif estimer horizon ↔ Q TRUE/FALSE conceptuelle |
| MISALIGNED | `debt-repayment-strategies` | Objectif *choisir* stratégie ↔ Q principale définit « avalanche cible d’abord » |

**Grade PF pédagogie : B+**

---

## 4. CF Assessment

| Métrique | Valeur |
|----------|--------|
| Leçons / Questions | 64 / 134 |
| Modules | 5 |
| Simulateurs | Valuation Multiples, DCF |
| Mix Q (approx.) | ~8 % mémoriel · ~35 % application · ~57 % situationnel |

### Chaîne pédagogique

```
Statements → BFR/WC → OCF → FCF → WACC → DCF → EV → Equity
Debt → Leverage → Risk → WACC
M&A → Synergies → Purchase Price → Accretion/Dilution
```

| Lien | Qualité |
|------|---------|
| Statements → BFR → OCF → FCF | **Bon** |
| FCF → WACC → DCF → EV → Equity | **Fort** (simulateurs) |
| M&A tail | **Plus mince** (`synergies-basics` 1Q) |
| Ordre module valuation | **Faiblesse** : EV/Equity (sort 0–1) avant FCF (sort 6) |

### Exemples alignment

| Statut | Slug | Note |
|--------|------|------|
| ALIGNED | `dcf-enterprise-value` | Chaîne + simulateur obligatoire |
| ALIGNED | `working-capital` | Calcul BFR + effet cash |
| PARTIALLY | `ebitda-basics` | Objectif interpréter ↔ Q calcule seulement |
| MISALIGNED | `downside-analysis-cf` | Objectif mitigation ↔ Q seuil EBIT seul |
| MISALIGNED | `financial-trade-offs` | Objectif trade-offs quantifiés ↔ Q critère générique |

**Grade CF pédagogie : B+**

---

## 5. PMP Assessment

| Métrique | Valeur |
|----------|--------|
| Leçons / Q leçons | 77 / 134 |
| Exam Bank | **200** (non modifiée, non réécrite) |
| Situations | 56/77 |
| Mix Q leçons (approx.) | ~10 % mémoriel · ~16 % application · **~75 % situationnel** |
| Objectifs | DECIDE ~64 % |

### Forces
- People / Process / Business / Agile / Hybrid / Situational : couverture large
- FIRST/BEST ACTION dominant ; méthode PLA propriétaire (≠ PMI)
- Exam → `classifyError` → ExamError → Retry + Recommendations
- Readiness multi-facteur avec disclaimer Practice Readiness ≠ PMI

### Faiblesses
- ~18 leçons encore 1Q sans Situation (people soft / process périphérie)
- Module situational : pédagogie riche, souvent **1 seule Q** d’évaluation
- Foundations seulement 3 leçons

### Exam Bank (200) — cohérence seulement
- Domains : PEOPLE 55 / PROCESS 105 / BUSINESS 40
- Approaches : AGILE/HYBRID/PREDICTIVE ~67 chacune
- Alignement conceptuel avec leçons : **bon** après Mission 4 (skills `pmp-hybrid`, `team-development`)
- **Ne pas confondre** score readiness PLA et certification PMI

**Grade PMP pédagogie : A-**

---

## 6. Question Quality

### Synthèse par académie

| Académie | Mémoriel | Compréhension/Appl. | Situationnel | Distracteurs | Explications |
|----------|----------|---------------------|--------------|--------------|--------------|
| PF | ~12 % | ~37 % | ~51 % | B+ (upgrades) | B+ |
| CF | ~8 % | ~35 % | ~57 % | B+ | B+ |
| PMP | ~10 % | ~16 % | ~75 % | A- | A- |

### Problèmes récurrents (identifier seulement)

| Type | Exemple | Impact |
|------|---------|--------|
| Définition → réponse évidente | PF `tracking-expenses` T/F variable expenses | Peu de transfert |
| Calcul sans interprétation | CF `downside-analysis-cf` seuil EBIT | Rate le « so what » |
| Même skill testé N fois | Avalanche/snowball redondances | Sur-entraînement méthode |
| Objectif ≠ quiz | `debt-repayment-strategies` DECIDE vs Q méthode | ALIGNMENT WEAK |
| Meta T/F | PMP `pla-situational-method` « pas PMBOK » | Utile IP, faible APPLY |

### Transformation typique souhaitable (future)

```
AVANT : « Quelle est la définition de X ? »
APRÈS : « Dans ce contexte, que décider / clarifier / faire en premier ? »
```

**Grade QUESTION QUALITY : B**

---

## 7. Objective Alignment

Classification utilisée : **ALIGNED / PARTIALLY_ALIGNED / MISALIGNED**

### Exemples ALIGNED
- PF `investment-horizon` — horizon ↔ décision allocation court terme
- CF `valuation-ranges-and-limits` — fourchette ↔ refus du « prix exact »
- PMP `vendor-delay-risk` — première action chemin critique

### Exemples PARTIALLY_ALIGNED
- PF `compound-interest` — expliquer/estimer ↔ T/F concept
- CF `value-creation-basics` — comparer ROIC/WACC ↔ Q calcule ROIC
- PMP `negotiation-basics` — préparer négociation ↔ Q position vs intérêt

### Exemples MISALIGNED
- PF `debt-repayment-strategies` — choisir stratégie ↔ Q « avalanche cible »
- CF `financial-trade-offs` — trade-offs quantifiés ↔ critère abstrait
- CF `downside-analysis-cf` — mitigation ↔ seuil seul

**Cause systémique :** upgrades ont enrichi les **questions** plus vite que les **tags** `learningObjective` (surtout PF).

**Grade OBJECTIVE ALIGNMENT : B**

---

## 8. Learning Loop

```
LEARN → PRACTICE → TEST → REVIEW → MASTER
         ↓              ↓
    (optionnel)    quiz → mastery
         ↓
RECOMMENDATION ← WEAK / ERROR / DOMAIN / REVIEW
         ↓
SPACED REVIEW / PMP RETRY
```

### Ce qui fonctionne
- Scaffold phase clair (`lesson-phases.ts`)
- REVIEW avec explications item-level
- PMP : erreur exam → catégorie → corrective learning → retry types différenciés
- Mastery seuils transparents : MASTERED ≥80, LEARNING ≥60, WEAK <60 (`mastery.ts`)

### Faiblesses critiques

| Problème | Fichier (indicatif) | Impact | Sévérité |
|----------|---------------------|--------|----------|
| LEARN/PRACTICE **sans gate** — Next toujours dispo | `LessonPlayer.tsx` | Skip compréhension | **P0** |
| Exercise « Mark done » **client-only** | `PracticePhase.tsx` | Practice non vérifiée | **P1** |
| Quiz faible → quand même COMPLETED + mastery | `lesson-session-service.ts` / `LessonPlayer` | Mastery sur-estime | **P0** |
| Retry MASTER seulement si WEAK | `MasterPhase.tsx` | LEARNING 60–79 ne peut pas retester facilement | **P1** |
| Reco ignore MASTERED due for review | `recommendation-service.ts` | SR incomplet | **P2** |
| Exam errors ≥2 mais mastery non mutée par erreur seule | reco comment | Divergence mastery/reco | **P2** |

### Réponse aux questions d’audit

| Question | Réponse |
|----------|---------|
| Une erreur produit-elle une conséquence ? | **Oui** sur PMP exam ; **faible** sur quiz leçon (sauf score→mastery) |
| Erreur → skill ? | Oui (exam `ExamError` + skillSlug) |
| Skill faible → reco ? | Oui (`WEAK_SKILL` prioritaire) |
| Repeated errors → reco ? | Oui (≥2) |
| Spaced repetition correcte ? | **Partielle** (intervalles OK, coverage MASTERED manquante en reco) |
| Mastery = performance réelle ? | **Partiellement** — mono-quiz / complétion |
| Passer sans comprendre ? | **Oui** — cœur du P0 |

**Grade LEARNING LOOP : C+**

---

## 9. Recommendations

Ordre actuel (`recommendation-service.ts`) :

```
WEAK_SKILL → REPEATED_ERROR → CORRECTIVE_LEARNING → WEAK_DOMAIN
→ LEARNING (due) → LEARNING → IN_PROGRESS → NEXT incomplete
```

| Force | Faiblesse |
|-------|-----------|
| Déterministe, bilingue, documenté | Peut être répétitif session après session |
| Intègre mastery + erreurs exam | Skill WEAK dont leçons liées **toutes complétées** → skill invisible |
| Corrective learning par catégorie | Fallbacks `OTHER` / `KNOWLEDGE_GAP` larges |
| | **MASTERED due** jamais recommandé |

**Grade RECOMMENDATIONS : B-**

---

## 10. Spaced Repetition

| Niveau | Intervalle | Fichier |
|--------|------------|---------|
| WEAK | **1 jour** | `spaced-repetition.ts` |
| LEARNING | **3 jours** | idem |
| MASTERED | **7 jours** | idem |
| Due soon window | 3 jours | idem |
| Repeated error pull-forward | 2 jours | idem |

### Cohérence pédagogique
- **1/3/7** raisonnable pour micro-learning MVP
- Trop tôt possible : WEAK re-planifié immédiatement après faible quiz sans re-enseignement forcé
- Trop tard possible : MASTERED à 7j **non poussé** par la reco dashboard
- Compteurs d’erreurs **lifetime** (pas fenêtre glissante) → biais historique

**Ne pas modifier les intervalles dans cette mission** — documenté seulement.

**Grade SPACED REPETITION : B-**

---

## 11. FR / EN

| Check | Résultat |
|-------|----------|
| Objectif / corps / quiz parallèles | Factory PF/CF/PMP |
| Même réponse correcte conceptuellement | Oui (structure seed) |
| Fuite FR↔EN | Non détectée aux audits M2–M4 |
| Nuances | Anglicismes FR assumés (sprint, backlog, WACC) — OK métier |

**Asymétrie notable :** aucune structurelle majeure ; qualité lexicale dépend des upgrades (équivalents pédagogiques, pas traduction machine).

**Grade FR/EN : A-**

---

## 12. User Journeys (4 profils)

### USER A — Débutant Personal Finance
1. **Départ :** `/dashboard` → Personal Finance → foundations (`understanding-money` / `building-a-budget`)
2. **Reco :** NEXT incomplete / enrollment order si pas encore de mastery
3. **Après erreur quiz :** score bas → WEAK mastery ; REVIEW montre explications ; peut quand même finir leçon
4. **Détection faiblesse :** `ConceptMastery` WEAK sur skill lié
5. **Ensuite :** reco `WEAK_SKILL` vers leçon incomplète du skill
6. **Retour concept :** SR ~1 jour si WEAK
7. **Progression réelle ?** **Incertaine** — peut compléter sans retester jusqu’à compréhension

**Trou :** pas d’obligation de réussir avant MASTER.

### USER B — CF intermédiaire
1. **Départ :** valuation / DCF selon progression
2. **Reco :** LEARNING_SKILL ou simulateur-adjacent si skill learning
3. **Erreur :** mastery LEARNING/WEAK ; simulateur DCF non lié au scoring mastery
4. **Détection :** quiz leçon + éventuellement skills
5. **Ensuite :** reco vers leçon FCF/WACC liée
6. **Retour :** 3j si LEARNING
7. **Progression ?** Meilleure si utilise simulateur, **non mesurée** par le système

**Trou :** simulateur = pratique libre, pas dans mastery.

### USER C — PMP débutant
1. **Départ :** foundations / people
2. **Reco :** unfinished → next ; peu d’erreurs exam encore
3. **Erreur leçon :** WEAK ; Situational Thinking plus tard
4. **Détection :** mastery skill (`pmp-people`, etc.)
5. **Ensuite :** WEAK_SKILL
6. **Retour :** 1j
7. **Progression ?** Contenu situationnel aide ; évaluation mono-Q sur leçons B limite le signal

### USER D — PMP candidat multi-erreurs
1. **Départ :** Exam Quick/Domain/Mock
2. **Reco post-exam :** REPEATED_ERROR / CORRECTIVE_LEARNING / WEAK_DOMAIN — **meilleur parcours du produit**
3. **Après erreur :** `ExamError` + classifyError + retry buttons
4. **Détection :** skills faibles + catégories (STAKEHOLDER, RISK, AGILE_MINDSET…)
5. **Ensuite :** leçon corrective mappée + retry ciblé
6. **Retour :** pull-forward 2j + review queue
7. **Progression ?** Readiness V2 multi-facteur — **meilleure preuve de progrès** du MVP ; toujours ≠ PMI

**Trou :** classification AGILE peut préempter d’autres catégories ; mappings statiques.

---

## 13. Priorisation P0 / P1 / P2 / P3

| ID | Pri | Sujet | Impact | Recommandation future (ne pas faire ici) |
|----|-----|-------|--------|------------------------------------------|
| LE-01 | **P0** | Complétion leçon sans gate LEARN/PRACTICE/quiz | Fausse maîtrise | Exiger engagement minimal + seuil quiz avant COMPLETED |
| LE-02 | **P0** | Mastery écrite même si score <60 (WEAK) sur leçon « completed » | Badge trompeur | Découpler COMPLETED et MASTERED ; forcer retry WEAK |
| LE-03 | **P1** | Practice non persistée / non obligatoire | Practice cosmétique | Persister exercise done ; soft-gate |
| LE-04 | **P1** | Mastery mono-quiz (peu de Q) | Sur/sous-estimation | Moyenne multi-tentatives / evidence count |
| LE-05 | **P1** | PF investing IDENTIFY-heavy | Moins de décision | Enrichir objectifs DECIDE (mission contenu ciblée) |
| LE-06 | **P1** | CF valuation order EV avant FCF | Confusion chaîne | Réordonner sortOrder module valuation |
| LE-07 | **P1** | Reco ignore MASTERED due | SR incomplet | Inclure MASTERED due dans priorité reco |
| LE-08 | **P2** | Alignement objectif↔Q (ex. debt strategies, downside CF) | Signal quiz faible | Réécrire Q (mission contenu) |
| LE-09 | **P2** | PMP 18 leçons 1Q | Sous-évaluation | +1 Q situationnelle ciblée |
| LE-10 | **P2** | Erreurs exam lifetime | Biais historique | Fenêtre glissante |
| LE-11 | **P2** | Corrective AGILE preempt | Mauvaise leçon corrective | Affiner classifyError |
| LE-12 | **P3** | Simulateur PF investing / CF NPV | Opportunité | Hors priorités si loop non durci |
| LE-13 | **P3** | Anglicismes FR | Cosmétique | Glossaire |

**P0 = 2** (même famille : **learning loop fidelity**).

---

## 14. Scorecard (récap)

```
CONTENT QUALITY .............. B+
QUESTION QUALITY ............. B
OBJECTIVE ALIGNMENT .......... B
PRACTICE QUALITY ............. C+
ERROR LEARNING ............... B
MASTERY ...................... C+
RECOMMENDATIONS .............. B-
SPACED REPETITION ............ B-
PMP PEDAGOGY ................. A-
PF PEDAGOGY .................. B+
CF PEDAGOGY .................. B+
FR/EN CONSISTENCY ............ A-
USER JOURNEY ................. B-
UX PEDAGOGICAL IMPACT ........ C+
────────────────────────────────
OVERALL ...................... B
```

---

## 15. Recommended Next Mission (UNE seule)

### **Mission 6 (proposée, NON démarrée) — Learning Loop Hardening**

**Pourquoi :** le contenu PMP/PF/CF est déjà « assez bon » pour un MVP ; le **blocage d’efficacité** est le système qui permet de **passer sans comprendre**.

**Périmètre suggéré (futur) :**
1. Soft/hard gates LEARN→PRACTICE→TEST
2. Seuil quiz avant COMPLETED (ou COMPLETED sans MASTERED)
3. Retry obligatoire / accessible pour WEAK et LEARNING
4. Reco : inclure MASTERED due for review
5. Tests E2E du parcours « échec → ne pas maîtriser »

**Hors scope de cette prochaine mission :**
- Expansion contenu massive
- Rewrite Exam Bank 200
- Nouveaux simulateurs
- Changement d’intervalles SR (sauf si nécessaire au loop)

---

## 16. Hors scope confirmé (non modifié)

Prisma · migrations · APIs · engines · scoring · Exam Engine · AI Tutor · Lesson Player · reco · mastery thresholds · SR · Exam Bank · questions · leçons · seeds · UI

---

**STOP — Mission 5 AUDIT ONLY. Aucune Mission 6 démarrée.**
