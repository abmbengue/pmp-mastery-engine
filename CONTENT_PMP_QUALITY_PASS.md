# PMP / Project Management — Content Quality Pass (Mission 2)

**Date:** 2026-08-25  
**Branch:** `cursor/pmp-content-quality-enrich-e932`  
**Scope:** Enrichissement pédagogique de 33 leçons PMP · FR/EN · **exam bank 200 Q inchangée**

---

## Résumé

Mission 2 transforme les leçons D/C et les B à fort ROI en parcours **décisionnels** (contexte → raisonnement → action → feedback), sans allonger artificiellement le catalogue ni toucher à l’architecture.

| Indicateur | Avant (M1) | Après (M2) |
|------------|------------|------------|
| Leçons | 77 | **77** |
| Questions de leçons | 91 | **124** (+33) |
| Exam bank | 200 | **200** |
| Grade **A** | 19 | **52** |
| Grade **B** | 44 | **25** |
| Grade **C** | 13 | **0** |
| Grade **D** | 1 | **0** |
| Blocs `situation` | 13/77 | **46/77** |
| Multi-question | 8/77 | **39/77** |
| Prompts définitionnels | 9 | **0** |

---

## Leçons enrichies (33)

### Vague 1 — D + C (14) — `pmp-quality-upgrades-priority.ts`

| Slug | Module | Avant | Après |
|------|--------|-------|-------|
| `combining-predictive-and-agile` | hybrid | **D** | **A** |
| `coaching-and-mentoring` | people | C | A |
| `motivation` | people | C | A |
| `collaboration` | people | C | A |
| `issue-management` | process | C | A |
| `lessons-learned` | process | C | A |
| `benefits` | business | C | A |
| `organizational-context` | business | C | A |
| `organizational-change` | business | C | A |
| `iterative-delivery` | agile | C | A |
| `iteration-planning` | agile | C | A |
| `retrospective` | agile | C | A |
| `mixed-delivery-models` | hybrid | C | A |
| `stakeholder-management-hybrid` | hybrid | C | A |

### Vague 2 — B à fort ROI + foundations (19) — `pmp-quality-upgrades-roi.ts`

People: `leadership`, `conflict-management-basics`, `communication`, `stakeholders-basics`, `servant-leadership`  
Process: `scope`, `cost`, `quality`, `change-management-basics`, `procurement-basics`  
Business: `governance`, `benefits-realization`  
Agile: `definition-of-done`, `impediments-management`  
Hybrid: `when-to-use-hybrid`, `delivery-strategy`  
Foundations: `what-is-project-management`, `project-roles`, `project-lifecycle-basics`

---

## Pattern d’enrichissement

Pour chaque leçon ciblée :

1. Objectif d’apprentissage décisionnel (APPLY / ANALYZE / DECIDE)
2. Vignette professionnelle (Helios, Nordia, FlowMart, HelioRoute, Contineo)
3. Bloc `situation` (contexte → problème → meilleure action)
4. ≥2 questions situationnelles (FIRST_ACTION / BEST_ACTION / TRADE_OFF / CLARIFY)
5. Distracteurs avec `whyFr` / `whyEn`
6. Boucle PLA propriétaire (OBSERVE → … → ADAPT) — **jamais** présentée comme PMI
7. FR/EN pédagogiquement équivalents
8. Métadonnées conservées (module, sortOrder, skillSlug, difficulty, isShort)

---

## Exemple phare — `combining-predictive-and-agile` (D → A)

**Avant :** prompt définitionnel « What is critical when combining… », 1 Q, pas de Situation.

**Après :** Helios Connect — stream PCI prédictif vs portail agile ; conflit sandbox sprint 3 vs gate Q2 ; contrat d’interface ; 3 questions (première action, trade-off gouvernance, conséquence).

---

## IP / Copyright

- Contenu original PLA uniquement
- Disclaimers factory conservés
- `organizational-context` : jargon « EEF » retiré → contraintes organisationnelles / culture / politique
- Banque d’examen **200 Q** : **non modifiée**
- Méthode PLA : propriétaire, non officielle PMI

---

## Classement par module (après)

| Module | Leçons | A | B | C | D |
|--------|--------|---|---|---|---|
| foundations | 3 | 3 | 0 | 0 | 0 |
| people | 14 | 8 | 6 | 0 | 0 |
| process | 16 | 8 | 8 | 0 | 0 |
| business-environment | 10 | 5 | 5 | 0 | 0 |
| agile | 12 | 5 | 7 | 0 | 0 |
| hybrid | 10 | 5 | 5 | 0 | 0 |
| situational-thinking | 12 | 12 | 0 | 0 | 0 |
| **Total** | **77** | **52** | **25** | **0** | **0** |

*Heuristique : 33 upgrades validés A + 19 A Mission 1 non retouchés ; B restants = B M1 non prioritaires (volontairement non forçés en A).*

---

## Limites restantes (honnêtes)

| Limite | Note |
|--------|------|
| 25 leçons encore B | Souvent 1 Q, bon fond ; enrichir seulement si analytics le justifie |
| `agile-mindset` / `hybrid-project-basics` | Déjà multi-Q ; Situation absente — candidat M3 ciblée |
| `team-conflict-architecture` | Déjà situationnel ; multi-Q optionnel |
| Corps plus longs | Micro-learning ≤12 min conservé |
| Seed requis | `npm run db:seed` après deploy |

---

## Fichiers techniques

| Fichier | Rôle |
|---------|------|
| `pmp-quality-upgrades-priority.ts` | 14 leçons D+C |
| `pmp-quality-upgrades-roi.ts` | 19 leçons B ROI + foundations |
| `pmp-quality-upgrades.ts` | `applyPmpQualityUpgrades()` |
| `pmp-lessons.ts` | Wrap apply |
| `src/tests/pmp-content-quality.test.ts` | Assertions qualité |

---

## Recommandations (pas de Mission 3 lancée)

1. Analytics quiz → cibler 5–10 B restants si taux d’échec élevé
2. Mission exam-bank séparée si besoin (hors scope)
3. Ne pas toucher engines / scoring / Lesson Player

---

**STOP — Mission 2 terminée. Aucune Mission 3 démarrée.**
