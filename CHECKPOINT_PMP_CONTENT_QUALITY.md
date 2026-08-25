# CHECKPOINT — PMP Content Quality (Mission 1 — AUDIT ONLY)

**Branch:** `cursor/pmp-content-quality-audit-e932`  
**Date:** 2026-08-25  
**Scope:** Audit pédagogique des 77 leçons PMP — **aucune modification de contenu**

---

## Résumé

Mission **lecture seule** sur le contenu PMP. Livrables docs uniquement. Aucun enrichissement démarré. Banque d’examen 200 Q inchangée. Aucun changement Prisma / APIs / moteurs / scoring / Exam Engine / AI Tutor / Lesson Player.

---

## Volume & classement

| Métrique | Valeur |
|----------|--------|
| Leçons totales | **77** |
| Questions de leçons | **91** |
| Exam bank | **200** (non modifiée) |
| Grade **A** | **19** |
| Grade **B** | **44** |
| Grade **C** | **13** |
| Grade **D** | **1** (`combining-predictive-and-agile`) |
| Blocs `situation` | **13 / 77** |
| Leçons à 1 question | **69 / 77** |
| Prompts principaux définitionnels | **9** |

---

## Fichiers créés / modifiés

| Fichier | Action |
|---------|--------|
| `CONTENT_PMP_QUALITY_AUDIT.md` | **Créé** — audit complet 77 leçons |
| `CHECKPOINT_PMP_CONTENT_QUALITY.md` | **Créé** — ce checkpoint |

**Fichiers applicatifs / seed / tests :** aucun modifié.

---

## Tests

| Commande | Résultat |
|----------|----------|
| `npm run lint` | *(à compléter après exécution)* |
| `npm run test` | *(à compléter)* |
| `npm run build` | *(à compléter)* |
| `npm run test:e2e -- --workers=1` | *(à compléter)* |

---

## Problèmes rencontrés

| Problème | Traitement |
|----------|------------|
| Pas d’accès dépôt distant team (contexte agent sans repo checkout initial) | Travail local sur workspace `/agent` ; docs commités sur branche audit |
| Comptage questions | Confirmé via formule seed `1 + (questions?.length ?? 0)` → **91** |
| Terminologie « EEFs » dans `organizational-context` | Signalé pour reformulation PLA en Mission 2 — **non modifié** ici |

---

## Recommandations Mission 2 (ne pas démarrer maintenant)

1. Enrichir **D + 13 C** en priorité (14 leçons).
2. Puis ~15 **B** à fort ROI (stakeholders, conflict, quality, procurement, DoD, hybrid, leadership, communication…).
3. Pattern : bloc `situation` + ≥2 questions DECIDE + distracteurs d’erreurs d’examen + FR/EN alignés.
4. Mécanisme suggéré : `pmp-quality-upgrades*.ts` + `applyPmpQualityUpgrades()` (comme PF/CF).
5. Cible indicative : **≥50 A**, questions leçons **91 → ≥140**, **sans** ajouter de leçons.
6. Ne pas toucher exam bank 200 Q / engines / scoring.
7. Reformuler jargon type EEF en langage PLA.

---

## Arrêt obligatoire

**STOP — Mission 1 Audit only.**  
Pas d’enrichissement PMP. Pas de Mission 2. Attendre le prochain prompt.
