/**
 * Original pedagogical PMP-style exam bank (Phase 7–12 + P1 option hardening).
 * NOT PMI / PMBOK copyrighted content. Educational scenarios only.
 * P1: scenario-specific options — reduced stem reuse; IDs/scenarios/metadata preserved.
 */

import type { ExamBankQuestionSeed } from "./pmp-exam-bank-types";
import { applyEcoProxyTags } from "./pmp-exam-eco-tags";
import { applyMisreadScenarioUpgrades } from "./pmp-exam-bank-misread-upgrades";

export type { ExamBankOptionSeed, ExamBankQuestionSeed } from "./pmp-exam-bank-types";

const RAW_PMP_EXAM_BANK: ExamBankQuestionSeed[] =
[
  {
    "externalKey": "pmp-exam-001",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "conflict-management",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), le chemin critique glisse de trois jours après une reprise de tests. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), the critical path slips by three days after a test rework. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 001) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une release paiements mobiles fintech (approche agile), le chemin… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 001): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a fintech mobile payments release (agile approach), the critical p… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 001) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une release paiements mobiles fintech (approche agile), le chemin…",
        "labelEn": "In this Stakeholder engagement situation (practice item 001): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a fintech mobile payments release (agile approach), the critical p…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 001 (Stakeholder engagement) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur une release paiements mobiles fintech (approche ag… » sans clarifier les faits.",
        "labelEn": "For case 001 (Stakeholder engagement): impose an immediate unilateral decision on the people involved about “On a fintech mobile payments release (agile approach),…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 001 (Stakeholder engagement) : réduire la qualité en silence sur « Sur une release paiements mobiles fintech (approche ag… » sans informer les personnes concernées dans ce contexte agile.",
        "labelEn": "For case 001 (Stakeholder engagement): reduce quality silently on “On a fintech mobile payments release (agile approach),…” without informing the people involved in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 001 (Stakeholder engagement) : sauter la documentation pour « Sur une release paiements mobiles fintech (approche ag… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 001 (Stakeholder engagement): skip documentation for “On a fintech mobile payments release (agile approach),…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-002",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), leadership asks to add a major feature without moving the date. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 002) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur une modernisation d'usine de production (approche hybride), la di… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 002): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a manufacturing plant retrofit (hybrid approach), leadership asks … It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 002) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur une modernisation d'usine de production (approche hybride), la di…",
        "labelEn": "In this Conflict management situation (practice item 002): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a manufacturing plant retrofit (hybrid approach), leadership asks …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 002 (Conflict management) : escalader d'abord vers la direction au sujet de « Sur une modernisation d'usine de production (approche … », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 002 (Conflict management): escalate to executives first about “On a manufacturing plant retrofit (hybrid approach), l…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 002 (Conflict management) : forcer l'équipe à absorber un scope illimité lié à « Sur une modernisation d'usine de production (approche … » sans replanifier.",
        "labelEn": "For case 002 (Conflict management): force the team to absorb unlimited extra scope related to “On a manufacturing plant retrofit (hybrid approach), l…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 002 (Conflict management) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur une modernisation d'usine de production (approche … » et figer le plan.",
        "labelEn": "For case 002 (Conflict management): decide without data—pick the loudest opinion from the people involved on “On a manufacturing plant retrofit (hybrid approach), l…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-003",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "stakeholder-engagement",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), les rétrospectives notent une dette de clarification des DoD. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), retrospectives note a Definition of Done clarification debt. The team is distributed across 3 time zones.",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 003) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 003): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a university campus network refresh (predictive approach), retrosp… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 003) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "In this Team leadership situation (practice item 003): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a university campus network refresh (predictive approach), retrosp…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 003 (Team leadership) : ignorer le problème (« Sur un rafraîchissement réseau de campus universitaire… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 003 (Team leadership): ignore the issue (“On a university campus network refresh (predictive app…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 003 (Team leadership) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 003 (Team leadership): replace a team member immediately to end the disagreement around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 003 (Team leadership) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 003 (Team leadership): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-004",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "team-development",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), production defects keep recurring despite one-off fixes. A quality indicator just turned red.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 004) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), les… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 004): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a nonprofit fundraising CRM rollout (agile approach), production d… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 004) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), les…",
        "labelEn": "In this Stakeholder engagement situation (practice item 004): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a nonprofit fundraising CRM rollout (agile approach), production d…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 004 (Stakeholder engagement) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 004 (Stakeholder engagement): buy a new tool immediately to bypass the underlying process gap behind “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 004 (Stakeholder engagement) : sauter la documentation pour « Sur un déploiement CRM de collecte pour une ONG (appro… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 004 (Stakeholder engagement): skip documentation for “On a nonprofit fundraising CRM rollout (agile approach…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 004 (Stakeholder engagement) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 004 (Stakeholder engagement): approve the change verbally with the people involved and skip impact analysis for “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-005",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. Le budget restant est sous tension (6%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), an influential end user spreads negative rumors about the solution. Remaining budget is under pressure (6%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 005) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 005): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a logistics warehouse automation pilot (hybrid approach), an influ… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 005) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Conflict management situation (practice item 005): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a logistics warehouse automation pilot (hybrid approach), an influ…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 005 (Conflict management) : réduire la qualité en silence sur « Sur un pilote d'automatisation d'entrepôt logistique (… » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 005 (Conflict management): reduce quality silently on “On a logistics warehouse automation pilot (hybrid appr…” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 005 (Conflict management) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un pilote d'automatisation d'entrepôt logistique (… » et figer le plan.",
        "labelEn": "For case 005 (Conflict management): decide without data—pick the loudest opinion from the people involved on “On a logistics warehouse automation pilot (hybrid appr…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 005 (Conflict management) : rebaseliner délai et budget pour « Sur un pilote d'automatisation d'entrepôt logistique (… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 005 (Conflict management): rebaseline schedule and budget for “On a logistics warehouse automation pilot (hybrid appr…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-006",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), a single technical dependency has no documented contingency plan. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 006) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), une dépen… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 006): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a telecom 5G site build program (predictive approach), a single te… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 006) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), une dépen…",
        "labelEn": "In this Team leadership situation (practice item 006): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a telecom 5G site build program (predictive approach), a single te…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 006 (Team leadership) : forcer l'équipe à absorber un scope illimité lié à « Sur un programme de sites 5G télécoms (approche prédic… » sans replanifier.",
        "labelEn": "For case 006 (Team leadership): force the team to absorb unlimited extra scope related to “On a telecom 5G site build program (predictive approac…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 006 (Team leadership) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 006 (Team leadership): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 006 (Team leadership) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un programme de sites 5G télécoms (approche prédic… » sans clarifier les faits.",
        "labelEn": "For case 006 (Team leadership): impose an immediate unilateral decision on the people involved about “On a telecom 5G site build program (predictive approac…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-007",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-process"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), scope creeps via untracked “small” weekly additions. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 007) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 007): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a public-sector permit digitization project (agile approach), scop… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 007) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "In this Stakeholder engagement situation (practice item 007): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a public-sector permit digitization project (agile approach), scop…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 007 (Stakeholder engagement) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 007 (Stakeholder engagement): replace a team member immediately to end the disagreement around “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 007 (Stakeholder engagement) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 007 (Stakeholder engagement): approve the change verbally with the people involved and skip impact analysis for “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 007 (Stakeholder engagement) : escalader d'abord vers la direction au sujet de « Sur un projet public de digitalisation des permis (app… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 007 (Stakeholder engagement): escalate to executives first about “On a public-sector permit digitization project (agile …”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-008",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "pmp-people"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), two technical experts have blocked an architecture decision for a week. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 008) : Faciliter une discussion basée sur des critères avec l'équipe, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), deux e… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 008): Facilitate a criteria-based discussion with the team, focusing on the shared project objective rather than positions. Context: On a retail omnichannel inventory platform (hybrid approach), two tec… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 008) : Faciliter une discussion basée sur des critères avec l'équipe, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), deux e…",
        "labelEn": "In this Conflict management situation (practice item 008): Facilitate a criteria-based discussion with the team, focusing on the shared project objective rather than positions. Context: On a retail omnichannel inventory platform (hybrid approach), two tec…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 008 (Conflict management) : sauter la documentation pour « Sur une plateforme stocks omnicanal retail (approche h… » afin d'aller plus vite sans l'équipe.",
        "labelEn": "For case 008 (Conflict management): skip documentation for “On a retail omnichannel inventory platform (hybrid app…” to move faster past the team.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 008 (Conflict management) : rebaseliner délai et budget pour « Sur une plateforme stocks omnicanal retail (approche h… » sans consulter l'équipe ni tracer l'arbitrage.",
        "labelEn": "For case 008 (Conflict management): rebaseline schedule and budget for “On a retail omnichannel inventory platform (hybrid app…” without consulting the team or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 008 (Conflict management) : ignorer le problème (« Sur une plateforme stocks omnicanal retail (approche h… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 008 (Conflict management): ignore the issue (“On a retail omnichannel inventory platform (hybrid app…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-009",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "pmp-foundations"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), the daily becomes a 45-minute hierarchical status report. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 009) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 009): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On an energy grid sensor deployment (predictive approach), the daily … It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 009) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "In this Team leadership situation (practice item 009): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On an energy grid sensor deployment (predictive approach), the daily …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 009 (Team leadership) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un déploiement de capteurs sur réseau énergétique … » et figer le plan.",
        "labelEn": "For case 009 (Team leadership): decide without data—pick the loudest opinion from the people involved on “On an energy grid sensor deployment (predictive approa…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 009 (Team leadership) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un déploiement de capteurs sur réseau énergétique … » sans clarifier les faits.",
        "labelEn": "For case 009 (Team leadership): impose an immediate unilateral decision on the people involved about “On an energy grid sensor deployment (predictive approa…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 009 (Team leadership) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 009 (Team leadership): buy a new tool immediately to bypass the underlying process gap behind “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-010",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. Le budget restant est sous tension (2%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. Remaining budget is under pressure (2%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 010) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une migration de données de labo biotech (approche agile), l'équi… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 010): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a biotech lab data migration (agile approach), the agile team and … It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 010) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une migration de données de labo biotech (approche agile), l'équi…",
        "labelEn": "In this Stakeholder engagement situation (practice item 010): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a biotech lab data migration (agile approach), the agile team and …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 010 (Stakeholder engagement) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 010 (Stakeholder engagement): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a biotech lab data migration (agile approach), the …”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 010 (Stakeholder engagement) : escalader d'abord vers la direction au sujet de « Sur une migration de données de labo biotech (approche… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 010 (Stakeholder engagement): escalate to executives first about “On a biotech lab data migration (agile approach), the …”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 010 (Stakeholder engagement) : réduire la qualité en silence sur « Sur une migration de données de labo biotech (approche… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 010 (Stakeholder engagement): reduce quality silently on “On a biotech lab data migration (agile approach), the …” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-011",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "pmp-hybrid"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), steering minutes no longer track actions or owners. A new business counterpart joins this week.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 011) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un outil de planning équipages aériens (approche hybride), les co… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 011): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On an airline crew-scheduling tool (hybrid approach), steering minute… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Pour le cas 011 (Conflict management) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un outil de planning équipages aériens (approche h… ».",
        "labelEn": "True — For case 011 (Conflict management): approve the change verbally with the people involved and skip impact analysis for “On an airline crew-scheduling tool (hybrid approach), …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Faux — la meilleure action est : Dans cette situation « Conflict management » (item de pratique 011) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un outil de planning équipages aériens (approche hybride), les co…",
        "labelEn": "False — the best action is: In this Conflict management situation (practice item 011): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On an airline crew-scheduling tool (hybrid approach), steering minute…",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-012",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-process",
      "pmp-business-environment"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), two business owners demand conflicting priorities for the next delivery. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 012) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un lot design-build construction (approche prédictif), deux respo… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 012): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a construction design-build package (predictive approach), two bus… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 012) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un lot design-build construction (approche prédictif), deux respo…",
        "labelEn": "In this Team leadership situation (practice item 012): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a construction design-build package (predictive approach), two bus…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 012 (Team leadership) : rebaseliner délai et budget pour « Sur un lot design-build construction (approche prédict… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 012 (Team leadership): rebaseline schedule and budget for “On a construction design-build package (predictive app…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 012 (Team leadership) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 012 (Team leadership): buy a new tool immediately to bypass the underlying process gap behind “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 012 (Team leadership) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 012 (Team leadership): replace a team member immediately to end the disagreement around “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-013",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-people",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), le chemin critique glisse de trois jours après une reprise de tests. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), the critical path slips by three days after a test rework. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 013) : Évaluer l'impact sur les objectifs, risques et l'équipe, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 013): Assess impact on objectives, risks, and the team, then present options with a clear recommendation for this case. Context: On a SaaS multi-tenant billing rewrite (agile approach), the critical… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 013) : Évaluer l'impact sur les objectifs, risques et l'équipe, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le…",
        "labelEn": "In this Stakeholder engagement situation (practice item 013): Assess impact on objectives, risks, and the team, then present options with a clear recommendation for this case. Context: On a SaaS multi-tenant billing rewrite (agile approach), the critical…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 013 (Stakeholder engagement) : imposer immédiatement une décision unilatérale à l'équipe sur « Sur une réécriture facturation SaaS multi-tenant (appr… » sans clarifier les faits.",
        "labelEn": "For case 013 (Stakeholder engagement): impose an immediate unilateral decision on the team about “On a SaaS multi-tenant billing rewrite (agile approach…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 013 (Stakeholder engagement) : réduire la qualité en silence sur « Sur une réécriture facturation SaaS multi-tenant (appr… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 013 (Stakeholder engagement): reduce quality silently on “On a SaaS multi-tenant billing rewrite (agile approach…” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 013 (Stakeholder engagement) : sauter la documentation pour « Sur une réécriture facturation SaaS multi-tenant (appr… » afin d'aller plus vite sans l'équipe.",
        "labelEn": "For case 013 (Stakeholder engagement): skip documentation for “On a SaaS multi-tenant billing rewrite (agile approach…” to move faster past the team.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-014",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-foundations",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), leadership asks to add a major feature without moving the date. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 014) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 014): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a city smart-lighting program (hybrid approach), leadership asks t… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 014) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l…",
        "labelEn": "In this Conflict management situation (practice item 014): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a city smart-lighting program (hybrid approach), leadership asks t…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 014 (Conflict management) : escalader d'abord vers la direction au sujet de « Sur un programme d'éclairage intelligent urbain (appro… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 014 (Conflict management): escalate to executives first about “On a city smart-lighting program (hybrid approach), le…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 014 (Conflict management) : forcer l'équipe à absorber un scope illimité lié à « Sur un programme d'éclairage intelligent urbain (appro… » sans replanifier.",
        "labelEn": "For case 014 (Conflict management): force the team to absorb unlimited extra scope related to “On a city smart-lighting program (hybrid approach), le…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 014 (Conflict management) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un programme d'éclairage intelligent urbain (appro… » et figer le plan.",
        "labelEn": "For case 014 (Conflict management): decide without data—pick the loudest opinion from the people involved on “On a city smart-lighting program (hybrid approach), le…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-015",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), les rétrospectives notent une dette de clarification des DoD. Le budget restant est sous tension (7%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), retrospectives note a Definition of Done clarification debt. Remaining budget is under pressure (7%).",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 015) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 015): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a regional hospital EHR upgrade (predictive approach), retrospecti… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 015) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "In this Team leadership situation (practice item 015): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a regional hospital EHR upgrade (predictive approach), retrospecti…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 015 (Team leadership) : ignorer le problème (« Sur une mise à niveau DSE d'un hôpital régional (appro… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 015 (Team leadership): ignore the issue (“On a regional hospital EHR upgrade (predictive approac…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 015 (Team leadership) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 015 (Team leadership): replace a team member immediately to end the disagreement around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 015 (Team leadership) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 015 (Team leadership): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-016",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-hybrid",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), production defects keep recurring despite one-off fixes. A new business counterpart joins this week.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 016) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une release paiements mobiles fintech (approche agile), les défau… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 016): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a fintech mobile payments release (agile approach), production def… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 016) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une release paiements mobiles fintech (approche agile), les défau…",
        "labelEn": "In this Stakeholder engagement situation (practice item 016): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a fintech mobile payments release (agile approach), production def…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 016 (Stakeholder engagement) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 016 (Stakeholder engagement): buy a new tool immediately to bypass the underlying process gap behind “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 016 (Stakeholder engagement) : sauter la documentation pour « Sur une release paiements mobiles fintech (approche ag… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 016 (Stakeholder engagement): skip documentation for “On a fintech mobile payments release (agile approach),…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 016 (Stakeholder engagement) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 016 (Stakeholder engagement): approve the change verbally with the people involved and skip impact analysis for “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-017",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-business-environment",
      "team-development"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), an influential end user spreads negative rumors about the solution. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 017) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une modernisation d'usine de production (approche hybride), un ut… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 017): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a manufacturing plant retrofit (hybrid approach), an influential e… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 017) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une modernisation d'usine de production (approche hybride), un ut…",
        "labelEn": "In this Conflict management situation (practice item 017): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a manufacturing plant retrofit (hybrid approach), an influential e…",
        "isCorrect": true
      },
      {
        "labelFr": "Aussi pour le cas 017 : documenter la décision et les impacts concernant « Sur une modernisation d'usine de production … » pour la transparence avec les personnes concernées.",
        "labelEn": "Also for case 017: document the decision and impacts about “On a manufacturing plant retrofit (hybrid ap…” for transparency with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 017 (Conflict management) : réduire la qualité en silence sur « Sur une modernisation d'usine de production (approche … » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 017 (Conflict management): reduce quality silently on “On a manufacturing plant retrofit (hybrid approach), a…” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 017 (Conflict management) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur une modernisation d'usine de production (approche … » et figer le plan.",
        "labelEn": "For case 017 (Conflict management): decide without data—pick the loudest opinion from the people involved on “On a manufacturing plant retrofit (hybrid approach), a…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-018",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), a single technical dependency has no documented contingency plan. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 018) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à l'équipe. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 018): Document this risk with impact/probability, define a response and trigger, and communicate it to the team. Context: On a university campus network refresh (predictive approach), a singl… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 018) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à l'équipe. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "In this Team leadership situation (practice item 018): Document this risk with impact/probability, define a response and trigger, and communicate it to the team. Context: On a university campus network refresh (predictive approach), a singl…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 018 (Team leadership) : forcer l'équipe à absorber un scope illimité lié à « Sur un rafraîchissement réseau de campus universitaire… » sans replanifier.",
        "labelEn": "For case 018 (Team leadership): force the team to absorb unlimited extra scope related to “On a university campus network refresh (predictive app…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 018 (Team leadership) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 018 (Team leadership): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 018 (Team leadership) : imposer immédiatement une décision unilatérale à l'équipe sur « Sur un rafraîchissement réseau de campus universitaire… » sans clarifier les faits.",
        "labelEn": "For case 018 (Team leadership): impose an immediate unilateral decision on the team about “On a university campus network refresh (predictive app…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-019",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "conflict-management",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), scope creeps via untracked “small” weekly additions. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 019) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 019): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a nonprofit fundraising CRM rollout (agile approach), scope creeps… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 019) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le …",
        "labelEn": "In this Stakeholder engagement situation (practice item 019): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a nonprofit fundraising CRM rollout (agile approach), scope creeps…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 019 (Stakeholder engagement) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 019 (Stakeholder engagement): replace a team member immediately to end the disagreement around “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 019 (Stakeholder engagement) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 019 (Stakeholder engagement): approve the change verbally with the people involved and skip impact analysis for “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 019 (Stakeholder engagement) : escalader d'abord vers la direction au sujet de « Sur un déploiement CRM de collecte pour une ONG (appro… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 019 (Stakeholder engagement): escalate to executives first about “On a nonprofit fundraising CRM rollout (agile approach…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-020",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. Le budget restant est sous tension (3%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), two technical experts have blocked an architecture decision for a week. Remaining budget is under pressure (3%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 020) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 020): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a logistics warehouse automation pilot (hybrid approach), two tech… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 020) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Conflict management situation (practice item 020): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a logistics warehouse automation pilot (hybrid approach), two tech…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 020 (Conflict management) : sauter la documentation pour « Sur un pilote d'automatisation d'entrepôt logistique (… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 020 (Conflict management): skip documentation for “On a logistics warehouse automation pilot (hybrid appr…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 020 (Conflict management) : rebaseliner délai et budget pour « Sur un pilote d'automatisation d'entrepôt logistique (… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 020 (Conflict management): rebaseline schedule and budget for “On a logistics warehouse automation pilot (hybrid appr…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 020 (Conflict management) : ignorer le problème (« Sur un pilote d'automatisation d'entrepôt logistique (… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 020 (Conflict management): ignore the issue (“On a logistics warehouse automation pilot (hybrid appr…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-021",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "stakeholder-engagement",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), the daily becomes a 45-minute hierarchical status report. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 021) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), le daily … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 021): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a telecom 5G site build program (predictive approach), the daily b… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 021) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), le daily …",
        "labelEn": "In this Team leadership situation (practice item 021): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a telecom 5G site build program (predictive approach), the daily b…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 021 (Team leadership) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un programme de sites 5G télécoms (approche prédic… » et figer le plan.",
        "labelEn": "For case 021 (Team leadership): decide without data—pick the loudest opinion from the people involved on “On a telecom 5G site build program (predictive approac…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 021 (Team leadership) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un programme de sites 5G télécoms (approche prédic… » sans clarifier les faits.",
        "labelEn": "For case 021 (Team leadership): impose an immediate unilateral decision on the people involved about “On a telecom 5G site build program (predictive approac…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 021 (Team leadership) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 021 (Team leadership): buy a new tool immediately to bypass the underlying process gap behind “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-022",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "team-development",
      "business-value"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. The release window is in 4 days.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 022) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 022): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a public-sector permit digitization project (agile approach), the … It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Dans cette situation « Stakeholder engagement » (item de pratique 022) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "True — In this Stakeholder engagement situation (practice item 022): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a public-sector permit digitization project (agile approach), the …",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Pour le cas 022 (Stakeholder engagement) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "False — For case 022 (Stakeholder engagement): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-023",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), steering minutes no longer track actions or owners. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 023) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), les co… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 023): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a retail omnichannel inventory platform (hybrid approach), steerin… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 023) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), les co…",
        "labelEn": "In this Conflict management situation (practice item 023): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a retail omnichannel inventory platform (hybrid approach), steerin…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 023 (Conflict management) : approuver le changement oralement avec l'équipe et sauter l'analyse d'impact pour « Sur une plateforme stocks omnicanal retail (approche h… ».",
        "labelEn": "For case 023 (Conflict management): approve the change verbally with the team and skip impact analysis for “On a retail omnichannel inventory platform (hybrid app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 023 (Conflict management) : ignorer le problème (« Sur une plateforme stocks omnicanal retail (approche h… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 023 (Conflict management): ignore the issue (“On a retail omnichannel inventory platform (hybrid app…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 023 (Conflict management) : forcer l'équipe à absorber un scope illimité lié à « Sur une plateforme stocks omnicanal retail (approche h… » sans replanifier.",
        "labelEn": "For case 023 (Conflict management): force the team to absorb unlimited extra scope related to “On a retail omnichannel inventory platform (hybrid app…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-024",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), two business owners demand conflicting priorities for the next delivery. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 024) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 024): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On an energy grid sensor deployment (predictive approach), two busine… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 024) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "In this Team leadership situation (practice item 024): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On an energy grid sensor deployment (predictive approach), two busine…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 024 (Team leadership) : rebaseliner délai et budget pour « Sur un déploiement de capteurs sur réseau énergétique … » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 024 (Team leadership): rebaseline schedule and budget for “On an energy grid sensor deployment (predictive approa…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 024 (Team leadership) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 024 (Team leadership): buy a new tool immediately to bypass the underlying process gap behind “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 024 (Team leadership) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 024 (Team leadership): replace a team member immediately to end the disagreement around “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-025",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-process"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), le chemin critique glisse de trois jours après une reprise de tests. Le budget restant est sous tension (8%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), the critical path slips by three days after a test rework. Remaining budget is under pressure (8%).",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 025) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une migration de données de labo biotech (approche agile), le che… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 025): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a biotech lab data migration (agile approach), the critical path s… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 025) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une migration de données de labo biotech (approche agile), le che…",
        "labelEn": "In this Stakeholder engagement situation (practice item 025): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a biotech lab data migration (agile approach), the critical path s…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 025 (Stakeholder engagement) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur une migration de données de labo biotech (approche… » sans clarifier les faits.",
        "labelEn": "For case 025 (Stakeholder engagement): impose an immediate unilateral decision on the people involved about “On a biotech lab data migration (agile approach), the …” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 025 (Stakeholder engagement) : réduire la qualité en silence sur « Sur une migration de données de labo biotech (approche… » sans informer les personnes concernées dans ce contexte agile.",
        "labelEn": "For case 025 (Stakeholder engagement): reduce quality silently on “On a biotech lab data migration (agile approach), the …” without informing the people involved in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 025 (Stakeholder engagement) : sauter la documentation pour « Sur une migration de données de labo biotech (approche… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 025 (Stakeholder engagement): skip documentation for “On a biotech lab data migration (agile approach), the …” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-026",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "pmp-people"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), leadership asks to add a major feature without moving the date. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 026) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un outil de planning équipages aériens (approche hybride), la dir… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 026): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On an airline crew-scheduling tool (hybrid approach), leadership asks… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 026) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un outil de planning équipages aériens (approche hybride), la dir…",
        "labelEn": "In this Conflict management situation (practice item 026): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On an airline crew-scheduling tool (hybrid approach), leadership asks…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 026 (Conflict management) : escalader d'abord vers la direction au sujet de « Sur un outil de planning équipages aériens (approche h… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 026 (Conflict management): escalate to executives first about “On an airline crew-scheduling tool (hybrid approach), …”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 026 (Conflict management) : forcer l'équipe à absorber un scope illimité lié à « Sur un outil de planning équipages aériens (approche h… » sans replanifier.",
        "labelEn": "For case 026 (Conflict management): force the team to absorb unlimited extra scope related to “On an airline crew-scheduling tool (hybrid approach), …” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 026 (Conflict management) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un outil de planning équipages aériens (approche h… » et figer le plan.",
        "labelEn": "For case 026 (Conflict management): decide without data—pick the loudest opinion from the people involved on “On an airline crew-scheduling tool (hybrid approach), …” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-027",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "pmp-foundations"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), les rétrospectives notent une dette de clarification des DoD. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), retrospectives note a Definition of Done clarification debt. The release window is in 4 days.",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 027) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un lot design-build construction (approche prédictif), les rétros… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 027): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a construction design-build package (predictive approach), retrosp… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 027) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un lot design-build construction (approche prédictif), les rétros…",
        "labelEn": "In this Team leadership situation (practice item 027): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a construction design-build package (predictive approach), retrosp…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 027 (Team leadership) : ignorer le problème (« Sur un lot design-build construction (approche prédict… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 027 (Team leadership): ignore the issue (“On a construction design-build package (predictive app…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 027 (Team leadership) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 027 (Team leadership): replace a team member immediately to end the disagreement around “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 027 (Team leadership) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 027 (Team leadership): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-028",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), production defects keep recurring despite one-off fixes. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 028) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 028): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a SaaS multi-tenant billing rewrite (agile approach), production d… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 028) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le…",
        "labelEn": "In this Stakeholder engagement situation (practice item 028): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a SaaS multi-tenant billing rewrite (agile approach), production d…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 028 (Stakeholder engagement) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 028 (Stakeholder engagement): buy a new tool immediately to bypass the underlying process gap behind “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 028 (Stakeholder engagement) : sauter la documentation pour « Sur une réécriture facturation SaaS multi-tenant (appr… » afin d'aller plus vite sans l'équipe.",
        "labelEn": "For case 028 (Stakeholder engagement): skip documentation for “On a SaaS multi-tenant billing rewrite (agile approach…” to move faster past the team.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 028 (Stakeholder engagement) : approuver le changement oralement avec l'équipe et sauter l'analyse d'impact pour « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 028 (Stakeholder engagement): approve the change verbally with the team and skip impact analysis for “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-029",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), an influential end user spreads negative rumors about the solution. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 029) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), u… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 029): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a city smart-lighting program (hybrid approach), an influential en… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 029) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), u…",
        "labelEn": "In this Conflict management situation (practice item 029): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a city smart-lighting program (hybrid approach), an influential en…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 029 (Conflict management) : réduire la qualité en silence sur « Sur un programme d'éclairage intelligent urbain (appro… » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 029 (Conflict management): reduce quality silently on “On a city smart-lighting program (hybrid approach), an…” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 029 (Conflict management) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un programme d'éclairage intelligent urbain (appro… » et figer le plan.",
        "labelEn": "For case 029 (Conflict management): decide without data—pick the loudest opinion from the people involved on “On a city smart-lighting program (hybrid approach), an…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 029 (Conflict management) : rebaseliner délai et budget pour « Sur un programme d'éclairage intelligent urbain (appro… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 029 (Conflict management): rebaseline schedule and budget for “On a city smart-lighting program (hybrid approach), an…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-030",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-process",
      "pmp-business-environment"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. Le budget restant est sous tension (4%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), a single technical dependency has no documented contingency plan. Remaining budget is under pressure (4%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 030) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 030): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a regional hospital EHR upgrade (predictive approach), a single te… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 030) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "In this Team leadership situation (practice item 030): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a regional hospital EHR upgrade (predictive approach), a single te…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 030 (Team leadership) : forcer l'équipe à absorber un scope illimité lié à « Sur une mise à niveau DSE d'un hôpital régional (appro… » sans replanifier.",
        "labelEn": "For case 030 (Team leadership): force the team to absorb unlimited extra scope related to “On a regional hospital EHR upgrade (predictive approac…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 030 (Team leadership) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 030 (Team leadership): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 030 (Team leadership) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur une mise à niveau DSE d'un hôpital régional (appro… » sans clarifier les faits.",
        "labelEn": "For case 030 (Team leadership): impose an immediate unilateral decision on the people involved about “On a regional hospital EHR upgrade (predictive approac…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-031",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-people",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), scope creeps via untracked “small” weekly additions. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 031) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une release paiements mobiles fintech (approche agile), le périmè… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 031): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a fintech mobile payments release (agile approach), scope creeps v… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 031) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une release paiements mobiles fintech (approche agile), le périmè…",
        "labelEn": "In this Stakeholder engagement situation (practice item 031): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a fintech mobile payments release (agile approach), scope creeps v…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 031 (Stakeholder engagement) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 031 (Stakeholder engagement): replace a team member immediately to end the disagreement around “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 031 (Stakeholder engagement) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 031 (Stakeholder engagement): approve the change verbally with the people involved and skip impact analysis for “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 031 (Stakeholder engagement) : escalader d'abord vers la direction au sujet de « Sur une release paiements mobiles fintech (approche ag… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 031 (Stakeholder engagement): escalate to executives first about “On a fintech mobile payments release (agile approach),…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-032",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-foundations",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), two technical experts have blocked an architecture decision for a week. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 032) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une modernisation d'usine de production (approche hybride), deux … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 032): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a manufacturing plant retrofit (hybrid approach), two technical ex… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 032) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une modernisation d'usine de production (approche hybride), deux …",
        "labelEn": "In this Conflict management situation (practice item 032): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a manufacturing plant retrofit (hybrid approach), two technical ex…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 032 (Conflict management) : sauter la documentation pour « Sur une modernisation d'usine de production (approche … » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 032 (Conflict management): skip documentation for “On a manufacturing plant retrofit (hybrid approach), t…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 032 (Conflict management) : rebaseliner délai et budget pour « Sur une modernisation d'usine de production (approche … » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 032 (Conflict management): rebaseline schedule and budget for “On a manufacturing plant retrofit (hybrid approach), t…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 032 (Conflict management) : ignorer le problème (« Sur une modernisation d'usine de production (approche … ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 032 (Conflict management): ignore the issue (“On a manufacturing plant retrofit (hybrid approach), t…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-033",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "communication"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), the daily becomes a 45-minute hierarchical status report. The team is distributed across 3 time zones.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 033) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec l'équipe, sauf urgence validée. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 033): Protect the sprint goal: discuss the new need in backlog refinement with the team, unless a validated emergency exists. Context: On a university campus network refresh (predictive approach), the dai… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Pour le cas 033 (Team leadership) : décider sans données—choisir l'opinion la plus forte de l'équipe sur « Sur un rafraîchissement réseau de campus universitaire… » et figer le plan.",
        "labelEn": "True — For case 033 (Team leadership): decide without data—pick the loudest opinion from the team on “On a university campus network refresh (predictive app…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Faux — la meilleure action est : Dans cette situation « Team leadership » (item de pratique 033) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec l'équipe, sauf urgence validée. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "False — the best action is: In this Team leadership situation (practice item 033): Protect the sprint goal: discuss the new need in backlog refinement with the team, unless a validated emergency exists. Context: On a university campus network refresh (predictive approach), the dai…",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-034",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-hybrid",
      "stakeholder-engagement"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 034) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), l'é… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 034): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a nonprofit fundraising CRM rollout (agile approach), the agile te… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 034) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), l'é…",
        "labelEn": "In this Stakeholder engagement situation (practice item 034): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a nonprofit fundraising CRM rollout (agile approach), the agile te…",
        "isCorrect": true
      },
      {
        "labelFr": "Aussi pour le cas 034 : communiquer la prochaine étape convenue sur « Sur un déploiement CRM de collecte pour une … » pour garder l'équipe alignée avec l'équipe.",
        "labelEn": "Also for case 034: communicate the agreed next step on “On a nonprofit fundraising CRM rollout (agil…” so the team stays aligned with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 034 (Stakeholder engagement) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 034 (Stakeholder engagement): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 034 (Stakeholder engagement) : escalader d'abord vers la direction au sujet de « Sur un déploiement CRM de collecte pour une ONG (appro… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 034 (Stakeholder engagement): escalate to executives first about “On a nonprofit fundraising CRM rollout (agile approach…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-035",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-business-environment",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. Le budget restant est sous tension (9%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), steering minutes no longer track actions or owners. Remaining budget is under pressure (9%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 035) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 035): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a logistics warehouse automation pilot (hybrid approach), steering… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 035) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Conflict management situation (practice item 035): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a logistics warehouse automation pilot (hybrid approach), steering…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 035 (Conflict management) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un pilote d'automatisation d'entrepôt logistique (… ».",
        "labelEn": "For case 035 (Conflict management): approve the change verbally with the people involved and skip impact analysis for “On a logistics warehouse automation pilot (hybrid appr…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 035 (Conflict management) : ignorer le problème (« Sur un pilote d'automatisation d'entrepôt logistique (… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 035 (Conflict management): ignore the issue (“On a logistics warehouse automation pilot (hybrid appr…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 035 (Conflict management) : forcer l'équipe à absorber un scope illimité lié à « Sur un pilote d'automatisation d'entrepôt logistique (… » sans replanifier.",
        "labelEn": "For case 035 (Conflict management): force the team to absorb unlimited extra scope related to “On a logistics warehouse automation pilot (hybrid appr…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-036",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), two business owners demand conflicting priorities for the next delivery. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 036) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), deux resp… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 036): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a telecom 5G site build program (predictive approach), two busines… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 036) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), deux resp…",
        "labelEn": "In this Team leadership situation (practice item 036): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a telecom 5G site build program (predictive approach), two busines…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 036 (Team leadership) : rebaseliner délai et budget pour « Sur un programme de sites 5G télécoms (approche prédic… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 036 (Team leadership): rebaseline schedule and budget for “On a telecom 5G site build program (predictive approac…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 036 (Team leadership) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 036 (Team leadership): buy a new tool immediately to bypass the underlying process gap behind “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 036 (Team leadership) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 036 (Team leadership): replace a team member immediately to end the disagreement around “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-037",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "conflict-management",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), le chemin critique glisse de trois jours après une reprise de tests. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), the critical path slips by three days after a test rework. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 037) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 037): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a public-sector permit digitization project (agile approach), the … It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 037) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "In this Stakeholder engagement situation (practice item 037): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a public-sector permit digitization project (agile approach), the …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 037 (Stakeholder engagement) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un projet public de digitalisation des permis (app… » sans clarifier les faits.",
        "labelEn": "For case 037 (Stakeholder engagement): impose an immediate unilateral decision on the people involved about “On a public-sector permit digitization project (agile …” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 037 (Stakeholder engagement) : réduire la qualité en silence sur « Sur un projet public de digitalisation des permis (app… » sans informer les personnes concernées dans ce contexte agile.",
        "labelEn": "For case 037 (Stakeholder engagement): reduce quality silently on “On a public-sector permit digitization project (agile …” without informing the people involved in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 037 (Stakeholder engagement) : sauter la documentation pour « Sur un projet public de digitalisation des permis (app… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 037 (Stakeholder engagement): skip documentation for “On a public-sector permit digitization project (agile …” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-038",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), leadership asks to add a major feature without moving the date. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 038) : Rendre explicite le compromis scope/délai/coût/qualité auprès de l'équipe et faire confirmer la priorité par le décideur légitime. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), la dir… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 038): Make the scope/schedule/cost/quality trade-off explicit to the team and get the legitimate decision maker to confirm priority. Context: On a retail omnichannel inventory platform (hybrid approach), leaders… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 038) : Rendre explicite le compromis scope/délai/coût/qualité auprès de l'équipe et faire confirmer la priorité par le décideur légitime. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), la dir…",
        "labelEn": "In this Conflict management situation (practice item 038): Make the scope/schedule/cost/quality trade-off explicit to the team and get the legitimate decision maker to confirm priority. Context: On a retail omnichannel inventory platform (hybrid approach), leaders…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 038 (Conflict management) : escalader d'abord vers la direction au sujet de « Sur une plateforme stocks omnicanal retail (approche h… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 038 (Conflict management): escalate to executives first about “On a retail omnichannel inventory platform (hybrid app…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 038 (Conflict management) : forcer l'équipe à absorber un scope illimité lié à « Sur une plateforme stocks omnicanal retail (approche h… » sans replanifier.",
        "labelEn": "For case 038 (Conflict management): force the team to absorb unlimited extra scope related to “On a retail omnichannel inventory platform (hybrid app…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 038 (Conflict management) : décider sans données—choisir l'opinion la plus forte de l'équipe sur « Sur une plateforme stocks omnicanal retail (approche h… » et figer le plan.",
        "labelEn": "For case 038 (Conflict management): decide without data—pick the loudest opinion from the team on “On a retail omnichannel inventory platform (hybrid app…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-039",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "stakeholder-engagement",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), les rétrospectives notent une dette de clarification des DoD. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), retrospectives note a Definition of Done clarification debt. A quality indicator just turned red.",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 039) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 039): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On an energy grid sensor deployment (predictive approach), retrospect… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 039) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "In this Team leadership situation (practice item 039): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On an energy grid sensor deployment (predictive approach), retrospect…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 039 (Team leadership) : ignorer le problème (« Sur un déploiement de capteurs sur réseau énergétique … ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 039 (Team leadership): ignore the issue (“On an energy grid sensor deployment (predictive approa…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 039 (Team leadership) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 039 (Team leadership): replace a team member immediately to end the disagreement around “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 039 (Team leadership) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 039 (Team leadership): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-040",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "team-development",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. Le budget restant est sous tension (5%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), production defects keep recurring despite one-off fixes. Remaining budget is under pressure (5%).",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 040) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une migration de données de labo biotech (approche agile), les dé… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 040): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a biotech lab data migration (agile approach), production defects … It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 040) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une migration de données de labo biotech (approche agile), les dé…",
        "labelEn": "In this Stakeholder engagement situation (practice item 040): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a biotech lab data migration (agile approach), production defects …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 040 (Stakeholder engagement) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 040 (Stakeholder engagement): buy a new tool immediately to bypass the underlying process gap behind “On a biotech lab data migration (agile approach), prod…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 040 (Stakeholder engagement) : sauter la documentation pour « Sur une migration de données de labo biotech (approche… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 040 (Stakeholder engagement): skip documentation for “On a biotech lab data migration (agile approach), prod…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 040 (Stakeholder engagement) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 040 (Stakeholder engagement): approve the change verbally with the people involved and skip impact analysis for “On a biotech lab data migration (agile approach), prod…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-041",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), an influential end user spreads negative rumors about the solution. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 041) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un outil de planning équipages aériens (approche hybride), un uti… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 041): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On an airline crew-scheduling tool (hybrid approach), an influential … It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 041) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un outil de planning équipages aériens (approche hybride), un uti…",
        "labelEn": "In this Conflict management situation (practice item 041): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On an airline crew-scheduling tool (hybrid approach), an influential …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 041 (Conflict management) : réduire la qualité en silence sur « Sur un outil de planning équipages aériens (approche h… » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 041 (Conflict management): reduce quality silently on “On an airline crew-scheduling tool (hybrid approach), …” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 041 (Conflict management) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un outil de planning équipages aériens (approche h… » et figer le plan.",
        "labelEn": "For case 041 (Conflict management): decide without data—pick the loudest opinion from the people involved on “On an airline crew-scheduling tool (hybrid approach), …” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 041 (Conflict management) : rebaseliner délai et budget pour « Sur un outil de planning équipages aériens (approche h… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 041 (Conflict management): rebaseline schedule and budget for “On an airline crew-scheduling tool (hybrid approach), …” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-042",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), a single technical dependency has no documented contingency plan. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 042) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un lot design-build construction (approche prédictif), une dépend… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 042): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a construction design-build package (predictive approach), a singl… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 042) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un lot design-build construction (approche prédictif), une dépend…",
        "labelEn": "In this Team leadership situation (practice item 042): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a construction design-build package (predictive approach), a singl…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 042 (Team leadership) : forcer l'équipe à absorber un scope illimité lié à « Sur un lot design-build construction (approche prédict… » sans replanifier.",
        "labelEn": "For case 042 (Team leadership): force the team to absorb unlimited extra scope related to “On a construction design-build package (predictive app…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 042 (Team leadership) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 042 (Team leadership): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 042 (Team leadership) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un lot design-build construction (approche prédict… » sans clarifier les faits.",
        "labelEn": "For case 042 (Team leadership): impose an immediate unilateral decision on the people involved about “On a construction design-build package (predictive app…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-043",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-process"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), scope creeps via untracked “small” weekly additions. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 043) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 043): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a SaaS multi-tenant billing rewrite (agile approach), scope creeps… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 043) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le…",
        "labelEn": "In this Stakeholder engagement situation (practice item 043): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a SaaS multi-tenant billing rewrite (agile approach), scope creeps…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 043 (Stakeholder engagement) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 043 (Stakeholder engagement): replace a team member immediately to end the disagreement around “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 043 (Stakeholder engagement) : approuver le changement oralement avec l'équipe et sauter l'analyse d'impact pour « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 043 (Stakeholder engagement): approve the change verbally with the team and skip impact analysis for “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 043 (Stakeholder engagement) : escalader d'abord vers la direction au sujet de « Sur une réécriture facturation SaaS multi-tenant (appr… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 043 (Stakeholder engagement): escalate to executives first about “On a SaaS multi-tenant billing rewrite (agile approach…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-044",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "pmp-people"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), two technical experts have blocked an architecture decision for a week. A quality indicator just turned red.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 044) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), d… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 044): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a city smart-lighting program (hybrid approach), two technical exp… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Dans cette situation « Conflict management » (item de pratique 044) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), d…",
        "labelEn": "True — In this Conflict management situation (practice item 044): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a city smart-lighting program (hybrid approach), two technical exp…",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Pour le cas 044 (Conflict management) : sauter la documentation pour « Sur un programme d'éclairage intelligent urbain (appro… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "False — For case 044 (Conflict management): skip documentation for “On a city smart-lighting program (hybrid approach), tw…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-045",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "pmp-foundations"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. Le budget restant est sous tension (1%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), the daily becomes a 45-minute hierarchical status report. Remaining budget is under pressure (1%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 045) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 045): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a regional hospital EHR upgrade (predictive approach), the daily b… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 045) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "In this Team leadership situation (practice item 045): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a regional hospital EHR upgrade (predictive approach), the daily b…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 045 (Team leadership) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur une mise à niveau DSE d'un hôpital régional (appro… » et figer le plan.",
        "labelEn": "For case 045 (Team leadership): decide without data—pick the loudest opinion from the people involved on “On a regional hospital EHR upgrade (predictive approac…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 045 (Team leadership) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur une mise à niveau DSE d'un hôpital régional (appro… » sans clarifier les faits.",
        "labelEn": "For case 045 (Team leadership): impose an immediate unilateral decision on the people involved about “On a regional hospital EHR upgrade (predictive approac…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 045 (Team leadership) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 045 (Team leadership): buy a new tool immediately to bypass the underlying process gap behind “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-046",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 046) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une release paiements mobiles fintech (approche agile), l'équipe … Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 046): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a fintech mobile payments release (agile approach), the agile team… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 046) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une release paiements mobiles fintech (approche agile), l'équipe …",
        "labelEn": "In this Stakeholder engagement situation (practice item 046): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a fintech mobile payments release (agile approach), the agile team…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 046 (Stakeholder engagement) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 046 (Stakeholder engagement): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 046 (Stakeholder engagement) : escalader d'abord vers la direction au sujet de « Sur une release paiements mobiles fintech (approche ag… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 046 (Stakeholder engagement): escalate to executives first about “On a fintech mobile payments release (agile approach),…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 046 (Stakeholder engagement) : réduire la qualité en silence sur « Sur une release paiements mobiles fintech (approche ag… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 046 (Stakeholder engagement): reduce quality silently on “On a fintech mobile payments release (agile approach),…” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-047",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), steering minutes no longer track actions or owners. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 047) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur une modernisation d'usine de production (approche hybride), les c… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 047): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a manufacturing plant retrofit (hybrid approach), steering minutes… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 047) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur une modernisation d'usine de production (approche hybride), les c…",
        "labelEn": "In this Conflict management situation (practice item 047): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a manufacturing plant retrofit (hybrid approach), steering minutes…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 047 (Conflict management) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une modernisation d'usine de production (approche … ».",
        "labelEn": "For case 047 (Conflict management): approve the change verbally with the people involved and skip impact analysis for “On a manufacturing plant retrofit (hybrid approach), s…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 047 (Conflict management) : ignorer le problème (« Sur une modernisation d'usine de production (approche … ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 047 (Conflict management): ignore the issue (“On a manufacturing plant retrofit (hybrid approach), s…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 047 (Conflict management) : forcer l'équipe à absorber un scope illimité lié à « Sur une modernisation d'usine de production (approche … » sans replanifier.",
        "labelEn": "For case 047 (Conflict management): force the team to absorb unlimited extra scope related to “On a manufacturing plant retrofit (hybrid approach), s…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-048",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-process",
      "pmp-business-environment"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), two business owners demand conflicting priorities for the next delivery. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 048) : Commencer par confirmer ce qui est connu vs présumé, en impliquant l'équipe avant toute action irréversible. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 048): Start by confirming what is known vs assumed in this situation, involving the team before any irreversible action. Context: On a university campus network refresh (predictive approach), two bus… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 048) : Commencer par confirmer ce qui est connu vs présumé, en impliquant l'équipe avant toute action irréversible. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "In this Team leadership situation (practice item 048): Start by confirming what is known vs assumed in this situation, involving the team before any irreversible action. Context: On a university campus network refresh (predictive approach), two bus…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 048 (Team leadership) : rebaseliner délai et budget pour « Sur un rafraîchissement réseau de campus universitaire… » sans consulter l'équipe ni tracer l'arbitrage.",
        "labelEn": "For case 048 (Team leadership): rebaseline schedule and budget for “On a university campus network refresh (predictive app…” without consulting the team or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 048 (Team leadership) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 048 (Team leadership): buy a new tool immediately to bypass the underlying process gap behind “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 048 (Team leadership) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 048 (Team leadership): replace a team member immediately to end the disagreement around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-049",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-people",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), le chemin critique glisse de trois jours après une reprise de tests. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), the critical path slips by three days after a test rework. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 049) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 049): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a nonprofit fundraising CRM rollout (agile approach), the critical… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 049) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le …",
        "labelEn": "In this Stakeholder engagement situation (practice item 049): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a nonprofit fundraising CRM rollout (agile approach), the critical…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 049 (Stakeholder engagement) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un déploiement CRM de collecte pour une ONG (appro… » sans clarifier les faits.",
        "labelEn": "For case 049 (Stakeholder engagement): impose an immediate unilateral decision on the people involved about “On a nonprofit fundraising CRM rollout (agile approach…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 049 (Stakeholder engagement) : réduire la qualité en silence sur « Sur un déploiement CRM de collecte pour une ONG (appro… » sans informer les personnes concernées dans ce contexte agile.",
        "labelEn": "For case 049 (Stakeholder engagement): reduce quality silently on “On a nonprofit fundraising CRM rollout (agile approach…” without informing the people involved in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 049 (Stakeholder engagement) : sauter la documentation pour « Sur un déploiement CRM de collecte pour une ONG (appro… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 049 (Stakeholder engagement): skip documentation for “On a nonprofit fundraising CRM rollout (agile approach…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-050",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-foundations",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. Le budget restant est sous tension (6%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), leadership asks to add a major feature without moving the date. Remaining budget is under pressure (6%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 050) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 050): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a logistics warehouse automation pilot (hybrid approach), leadersh… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 050) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Conflict management situation (practice item 050): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a logistics warehouse automation pilot (hybrid approach), leadersh…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 050 (Conflict management) : escalader d'abord vers la direction au sujet de « Sur un pilote d'automatisation d'entrepôt logistique (… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 050 (Conflict management): escalate to executives first about “On a logistics warehouse automation pilot (hybrid appr…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 050 (Conflict management) : forcer l'équipe à absorber un scope illimité lié à « Sur un pilote d'automatisation d'entrepôt logistique (… » sans replanifier.",
        "labelEn": "For case 050 (Conflict management): force the team to absorb unlimited extra scope related to “On a logistics warehouse automation pilot (hybrid appr…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 050 (Conflict management) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un pilote d'automatisation d'entrepôt logistique (… » et figer le plan.",
        "labelEn": "For case 050 (Conflict management): decide without data—pick the loudest opinion from the people involved on “On a logistics warehouse automation pilot (hybrid appr…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-051",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "communication"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), les rétrospectives notent une dette de clarification des DoD. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), retrospectives note a Definition of Done clarification debt. A new business counterpart joins this week.",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 051) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), les rétro… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 051): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a telecom 5G site build program (predictive approach), retrospecti… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 051) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), les rétro…",
        "labelEn": "In this Team leadership situation (practice item 051): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a telecom 5G site build program (predictive approach), retrospecti…",
        "isCorrect": true
      },
      {
        "labelFr": "Aussi pour le cas 051 : documenter la décision et les impacts concernant « Sur un programme de sites 5G télécoms (appro… » pour la transparence avec les personnes concernées.",
        "labelEn": "Also for case 051: document the decision and impacts about “On a telecom 5G site build program (predicti…” for transparency with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 051 (Team leadership) : ignorer le problème (« Sur un programme de sites 5G télécoms (approche prédic… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 051 (Team leadership): ignore the issue (“On a telecom 5G site build program (predictive approac…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 051 (Team leadership) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 051 (Team leadership): replace a team member immediately to end the disagreement around “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-052",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-hybrid",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), production defects keep recurring despite one-off fixes. The release window is in 4 days.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 052) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 052): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a public-sector permit digitization project (agile approach), prod… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Stakeholder engagement » (item de pratique 052) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "In this Stakeholder engagement situation (practice item 052): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a public-sector permit digitization project (agile approach), prod…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 052 (Stakeholder engagement) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 052 (Stakeholder engagement): buy a new tool immediately to bypass the underlying process gap behind “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 052 (Stakeholder engagement) : sauter la documentation pour « Sur un projet public de digitalisation des permis (app… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 052 (Stakeholder engagement): skip documentation for “On a public-sector permit digitization project (agile …” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 052 (Stakeholder engagement) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 052 (Stakeholder engagement): approve the change verbally with the people involved and skip impact analysis for “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-053",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Conflict management",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-business-environment",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), an influential end user spreads negative rumors about the solution. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Conflict management » (item de pratique 053) : Réengager l'équipe avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), un uti… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Conflict management situation (practice item 053): Re-engage the team with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a retail omnichannel inventory platform (hybrid approach), an infl… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Conflict management » (item de pratique 053) : Réengager l'équipe avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), un uti…",
        "labelEn": "In this Conflict management situation (practice item 053): Re-engage the team with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a retail omnichannel inventory platform (hybrid approach), an infl…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 053 (Conflict management) : réduire la qualité en silence sur « Sur une plateforme stocks omnicanal retail (approche h… » sans informer l'équipe dans ce contexte hybrid.",
        "labelEn": "For case 053 (Conflict management): reduce quality silently on “On a retail omnichannel inventory platform (hybrid app…” without informing the team in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 053 (Conflict management) : décider sans données—choisir l'opinion la plus forte de l'équipe sur « Sur une plateforme stocks omnicanal retail (approche h… » et figer le plan.",
        "labelEn": "For case 053 (Conflict management): decide without data—pick the loudest opinion from the team on “On a retail omnichannel inventory platform (hybrid app…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 053 (Conflict management) : rebaseliner délai et budget pour « Sur une plateforme stocks omnicanal retail (approche h… » sans consulter l'équipe ni tracer l'arbitrage.",
        "labelEn": "For case 053 (Conflict management): rebaseline schedule and budget for “On a retail omnichannel inventory platform (hybrid app…” without consulting the team or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-054",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), a single technical dependency has no documented contingency plan. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Team leadership » (item de pratique 054) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Team leadership situation (practice item 054): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On an energy grid sensor deployment (predictive approach), a single t… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Team leadership » (item de pratique 054) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "In this Team leadership situation (practice item 054): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On an energy grid sensor deployment (predictive approach), a single t…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 054 (Team leadership) : forcer l'équipe à absorber un scope illimité lié à « Sur un déploiement de capteurs sur réseau énergétique … » sans replanifier.",
        "labelEn": "For case 054 (Team leadership): force the team to absorb unlimited extra scope related to “On an energy grid sensor deployment (predictive approa…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 054 (Team leadership) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 054 (Team leadership): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 054 (Team leadership) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un déploiement de capteurs sur réseau énergétique … » sans clarifier les faits.",
        "labelEn": "For case 054 (Team leadership): impose an immediate unilateral decision on the people involved about “On an energy grid sensor deployment (predictive approa…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-055",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Stakeholder engagement",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "conflict-management",
      "risk-management"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. Le budget restant est sous tension (2%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), scope creeps via untracked “small” weekly additions. Remaining budget is under pressure (2%).",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Stakeholder engagement » (item de pratique 055) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une migration de données de labo biotech (approche agile), le pér… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Stakeholder engagement situation (practice item 055): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a biotech lab data migration (agile approach), scope creeps via un… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Pour le cas 055 (Stakeholder engagement) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "True — For case 055 (Stakeholder engagement): replace a team member immediately to end the disagreement around “On a biotech lab data migration (agile approach), scop…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Faux — la meilleure action est : Dans cette situation « Stakeholder engagement » (item de pratique 055) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une migration de données de labo biotech (approche agile), le pér…",
        "labelEn": "False — the best action is: In this Stakeholder engagement situation (practice item 055): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a biotech lab data migration (agile approach), scope creeps via un…",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-056",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Risk",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), two technical experts have blocked an architecture decision for a week. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 056) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un outil de planning équipages aériens (approche hybride), deux e… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 056): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On an airline crew-scheduling tool (hybrid approach), two technical e… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 056) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un outil de planning équipages aériens (approche hybride), deux e…",
        "labelEn": "In this Risk situation (practice item 056): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On an airline crew-scheduling tool (hybrid approach), two technical e…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 056 (Risk) : sauter la documentation pour « Sur un outil de planning équipages aériens (approche h… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 056 (Risk): skip documentation for “On an airline crew-scheduling tool (hybrid approach), …” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 056 (Risk) : rebaseliner délai et budget pour « Sur un outil de planning équipages aériens (approche h… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 056 (Risk): rebaseline schedule and budget for “On an airline crew-scheduling tool (hybrid approach), …” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 056 (Risk) : ignorer le problème (« Sur un outil de planning équipages aériens (approche h… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 056 (Risk): ignore the issue (“On an airline crew-scheduling tool (hybrid approach), …”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-057",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Change control",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "stakeholder-engagement",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), the daily becomes a 45-minute hierarchical status report. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 057) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un lot design-build construction (approche prédictif), le daily d… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 057): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a construction design-build package (predictive approach), the dai… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 057) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un lot design-build construction (approche prédictif), le daily d…",
        "labelEn": "In this Change control situation (practice item 057): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a construction design-build package (predictive approach), the dai…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 057 (Change control) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un lot design-build construction (approche prédict… » et figer le plan.",
        "labelEn": "For case 057 (Change control): decide without data—pick the loudest opinion from the people involved on “On a construction design-build package (predictive app…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 057 (Change control) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un lot design-build construction (approche prédict… » sans clarifier les faits.",
        "labelEn": "For case 057 (Change control): impose an immediate unilateral decision on the people involved about “On a construction design-build package (predictive app…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 057 (Change control) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 057 (Change control): buy a new tool immediately to bypass the underlying process gap behind “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-058",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Quality",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "team-development",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 058) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), l'… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 058): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a SaaS multi-tenant billing rewrite (agile approach), the agile te… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 058) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), l'…",
        "labelEn": "In this Quality situation (practice item 058): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a SaaS multi-tenant billing rewrite (agile approach), the agile te…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 058 (Quality) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 058 (Quality): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 058 (Quality) : escalader d'abord vers la direction au sujet de « Sur une réécriture facturation SaaS multi-tenant (appr… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 058 (Quality): escalate to executives first about “On a SaaS multi-tenant billing rewrite (agile approach…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 058 (Quality) : réduire la qualité en silence sur « Sur une réécriture facturation SaaS multi-tenant (appr… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 058 (Quality): reduce quality silently on “On a SaaS multi-tenant billing rewrite (agile approach…” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-059",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Scope",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), steering minutes no longer track actions or owners. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 059) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 059): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a city smart-lighting program (hybrid approach), steering minutes … It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 059) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l…",
        "labelEn": "In this Scope situation (practice item 059): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a city smart-lighting program (hybrid approach), steering minutes …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 059 (Scope) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un programme d'éclairage intelligent urbain (appro… ».",
        "labelEn": "For case 059 (Scope): approve the change verbally with the people involved and skip impact analysis for “On a city smart-lighting program (hybrid approach), st…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 059 (Scope) : ignorer le problème (« Sur un programme d'éclairage intelligent urbain (appro… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 059 (Scope): ignore the issue (“On a city smart-lighting program (hybrid approach), st…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 059 (Scope) : forcer l'équipe à absorber un scope illimité lié à « Sur un programme d'éclairage intelligent urbain (appro… » sans replanifier.",
        "labelEn": "For case 059 (Scope): force the team to absorb unlimited extra scope related to “On a city smart-lighting program (hybrid approach), st…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-060",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Schedule",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. Le budget restant est sous tension (7%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), two business owners demand conflicting priorities for the next delivery. Remaining budget is under pressure (7%).",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 060) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 060): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a regional hospital EHR upgrade (predictive approach), two busines… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 060) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "In this Schedule situation (practice item 060): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a regional hospital EHR upgrade (predictive approach), two busines…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 060 (Schedule) : rebaseliner délai et budget pour « Sur une mise à niveau DSE d'un hôpital régional (appro… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 060 (Schedule): rebaseline schedule and budget for “On a regional hospital EHR upgrade (predictive approac…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 060 (Schedule) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 060 (Schedule): buy a new tool immediately to bypass the underlying process gap behind “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 060 (Schedule) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 060 (Schedule): replace a team member immediately to end the disagreement around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-061",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Risk",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-process"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), le chemin critique glisse de trois jours après une reprise de tests. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), the critical path slips by three days after a test rework. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 061) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une release paiements mobiles fintech (approche agile), le chemin… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 061): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a fintech mobile payments release (agile approach), the critical p… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 061) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une release paiements mobiles fintech (approche agile), le chemin…",
        "labelEn": "In this Risk situation (practice item 061): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a fintech mobile payments release (agile approach), the critical p…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 061 (Risk) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur une release paiements mobiles fintech (approche ag… » sans clarifier les faits.",
        "labelEn": "For case 061 (Risk): impose an immediate unilateral decision on the people involved about “On a fintech mobile payments release (agile approach),…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 061 (Risk) : réduire la qualité en silence sur « Sur une release paiements mobiles fintech (approche ag… » sans informer les personnes concernées dans ce contexte agile.",
        "labelEn": "For case 061 (Risk): reduce quality silently on “On a fintech mobile payments release (agile approach),…” without informing the people involved in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 061 (Risk) : sauter la documentation pour « Sur une release paiements mobiles fintech (approche ag… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 061 (Risk): skip documentation for “On a fintech mobile payments release (agile approach),…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-062",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Change control",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "pmp-people"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), leadership asks to add a major feature without moving the date. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 062) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur une modernisation d'usine de production (approche hybride), la di… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 062): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a manufacturing plant retrofit (hybrid approach), leadership asks … It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 062) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur une modernisation d'usine de production (approche hybride), la di…",
        "labelEn": "In this Change control situation (practice item 062): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a manufacturing plant retrofit (hybrid approach), leadership asks …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 062 (Change control) : escalader d'abord vers la direction au sujet de « Sur une modernisation d'usine de production (approche … », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 062 (Change control): escalate to executives first about “On a manufacturing plant retrofit (hybrid approach), l…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 062 (Change control) : forcer l'équipe à absorber un scope illimité lié à « Sur une modernisation d'usine de production (approche … » sans replanifier.",
        "labelEn": "For case 062 (Change control): force the team to absorb unlimited extra scope related to “On a manufacturing plant retrofit (hybrid approach), l…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 062 (Change control) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur une modernisation d'usine de production (approche … » et figer le plan.",
        "labelEn": "For case 062 (Change control): decide without data—pick the loudest opinion from the people involved on “On a manufacturing plant retrofit (hybrid approach), l…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-063",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Quality",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "pmp-foundations"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), les rétrospectives notent une dette de clarification des DoD. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), retrospectives note a Definition of Done clarification debt. The team is distributed across 3 time zones.",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 063) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 063): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a university campus network refresh (predictive approach), retrosp… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 063) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "In this Quality situation (practice item 063): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a university campus network refresh (predictive approach), retrosp…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 063 (Quality) : ignorer le problème (« Sur un rafraîchissement réseau de campus universitaire… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 063 (Quality): ignore the issue (“On a university campus network refresh (predictive app…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 063 (Quality) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 063 (Quality): replace a team member immediately to end the disagreement around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 063 (Quality) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 063 (Quality): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-064",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Scope",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), production defects keep recurring despite one-off fixes. A quality indicator just turned red.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 064) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), les… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 064): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a nonprofit fundraising CRM rollout (agile approach), production d… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 064) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), les…",
        "labelEn": "In this Scope situation (practice item 064): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a nonprofit fundraising CRM rollout (agile approach), production d…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 064 (Scope) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 064 (Scope): buy a new tool immediately to bypass the underlying process gap behind “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 064 (Scope) : sauter la documentation pour « Sur un déploiement CRM de collecte pour une ONG (appro… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 064 (Scope): skip documentation for “On a nonprofit fundraising CRM rollout (agile approach…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 064 (Scope) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 064 (Scope): approve the change verbally with the people involved and skip impact analysis for “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-065",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Schedule",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. Le budget restant est sous tension (3%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), an influential end user spreads negative rumors about the solution. Remaining budget is under pressure (3%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 065) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 065): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a logistics warehouse automation pilot (hybrid approach), an influ… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 065) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Schedule situation (practice item 065): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a logistics warehouse automation pilot (hybrid approach), an influ…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 065 (Schedule) : réduire la qualité en silence sur « Sur un pilote d'automatisation d'entrepôt logistique (… » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 065 (Schedule): reduce quality silently on “On a logistics warehouse automation pilot (hybrid appr…” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 065 (Schedule) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un pilote d'automatisation d'entrepôt logistique (… » et figer le plan.",
        "labelEn": "For case 065 (Schedule): decide without data—pick the loudest opinion from the people involved on “On a logistics warehouse automation pilot (hybrid appr…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 065 (Schedule) : rebaseliner délai et budget pour « Sur un pilote d'automatisation d'entrepôt logistique (… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 065 (Schedule): rebaseline schedule and budget for “On a logistics warehouse automation pilot (hybrid appr…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-066",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Risk",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-process",
      "pmp-business-environment"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), a single technical dependency has no documented contingency plan. A new business counterpart joins this week.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 066) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), une dépen… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 066): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a telecom 5G site build program (predictive approach), a single te… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Dans cette situation « Risk » (item de pratique 066) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), une dépen…",
        "labelEn": "True — In this Risk situation (practice item 066): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a telecom 5G site build program (predictive approach), a single te…",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Pour le cas 066 (Risk) : forcer l'équipe à absorber un scope illimité lié à « Sur un programme de sites 5G télécoms (approche prédic… » sans replanifier.",
        "labelEn": "False — For case 066 (Risk): force the team to absorb unlimited extra scope related to “On a telecom 5G site build program (predictive approac…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-067",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Change control",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-people",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), scope creeps via untracked “small” weekly additions. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 067) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 067): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a public-sector permit digitization project (agile approach), scop… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 067) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "In this Change control situation (practice item 067): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a public-sector permit digitization project (agile approach), scop…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 067 (Change control) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 067 (Change control): replace a team member immediately to end the disagreement around “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 067 (Change control) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 067 (Change control): approve the change verbally with the people involved and skip impact analysis for “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 067 (Change control) : escalader d'abord vers la direction au sujet de « Sur un projet public de digitalisation des permis (app… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 067 (Change control): escalate to executives first about “On a public-sector permit digitization project (agile …”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-068",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Quality",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-foundations",
      "conflict-management"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), two technical experts have blocked an architecture decision for a week. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 068) : Faciliter une discussion basée sur des critères avec l'équipe, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), deux e… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 068): Facilitate a criteria-based discussion with the team, focusing on the shared project objective rather than positions. Context: On a retail omnichannel inventory platform (hybrid approach), two tec… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 068) : Faciliter une discussion basée sur des critères avec l'équipe, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), deux e…",
        "labelEn": "In this Quality situation (practice item 068): Facilitate a criteria-based discussion with the team, focusing on the shared project objective rather than positions. Context: On a retail omnichannel inventory platform (hybrid approach), two tec…",
        "isCorrect": true
      },
      {
        "labelFr": "Aussi pour le cas 068 : communiquer la prochaine étape convenue sur « Sur une plateforme stocks omnicanal retail (… » pour garder l'équipe alignée avec l'équipe.",
        "labelEn": "Also for case 068: communicate the agreed next step on “On a retail omnichannel inventory platform (…” so the team stays aligned with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 068 (Quality) : sauter la documentation pour « Sur une plateforme stocks omnicanal retail (approche h… » afin d'aller plus vite sans l'équipe.",
        "labelEn": "For case 068 (Quality): skip documentation for “On a retail omnichannel inventory platform (hybrid app…” to move faster past the team.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 068 (Quality) : rebaseliner délai et budget pour « Sur une plateforme stocks omnicanal retail (approche h… » sans consulter l'équipe ni tracer l'arbitrage.",
        "labelEn": "For case 068 (Quality): rebaseline schedule and budget for “On a retail omnichannel inventory platform (hybrid app…” without consulting the team or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-069",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Scope",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), the daily becomes a 45-minute hierarchical status report. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 069) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 069): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On an energy grid sensor deployment (predictive approach), the daily … It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 069) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "In this Scope situation (practice item 069): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On an energy grid sensor deployment (predictive approach), the daily …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 069 (Scope) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un déploiement de capteurs sur réseau énergétique … » et figer le plan.",
        "labelEn": "For case 069 (Scope): decide without data—pick the loudest opinion from the people involved on “On an energy grid sensor deployment (predictive approa…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 069 (Scope) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un déploiement de capteurs sur réseau énergétique … » sans clarifier les faits.",
        "labelEn": "For case 069 (Scope): impose an immediate unilateral decision on the people involved about “On an energy grid sensor deployment (predictive approa…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 069 (Scope) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 069 (Scope): buy a new tool immediately to bypass the underlying process gap behind “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-070",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Schedule",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-hybrid",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. Le budget restant est sous tension (8%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. Remaining budget is under pressure (8%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 070) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une migration de données de labo biotech (approche agile), l'équi… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 070): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a biotech lab data migration (agile approach), the agile team and … It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 070) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une migration de données de labo biotech (approche agile), l'équi…",
        "labelEn": "In this Schedule situation (practice item 070): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a biotech lab data migration (agile approach), the agile team and …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 070 (Schedule) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 070 (Schedule): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a biotech lab data migration (agile approach), the …”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 070 (Schedule) : escalader d'abord vers la direction au sujet de « Sur une migration de données de labo biotech (approche… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 070 (Schedule): escalate to executives first about “On a biotech lab data migration (agile approach), the …”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 070 (Schedule) : réduire la qualité en silence sur « Sur une migration de données de labo biotech (approche… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 070 (Schedule): reduce quality silently on “On a biotech lab data migration (agile approach), the …” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-071",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Risk",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-business-environment",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), steering minutes no longer track actions or owners. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 071) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un outil de planning équipages aériens (approche hybride), les co… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 071): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On an airline crew-scheduling tool (hybrid approach), steering minute… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 071) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un outil de planning équipages aériens (approche hybride), les co…",
        "labelEn": "In this Risk situation (practice item 071): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On an airline crew-scheduling tool (hybrid approach), steering minute…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 071 (Risk) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un outil de planning équipages aériens (approche h… ».",
        "labelEn": "For case 071 (Risk): approve the change verbally with the people involved and skip impact analysis for “On an airline crew-scheduling tool (hybrid approach), …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 071 (Risk) : ignorer le problème (« Sur un outil de planning équipages aériens (approche h… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 071 (Risk): ignore the issue (“On an airline crew-scheduling tool (hybrid approach), …”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 071 (Risk) : forcer l'équipe à absorber un scope illimité lié à « Sur un outil de planning équipages aériens (approche h… » sans replanifier.",
        "labelEn": "For case 071 (Risk): force the team to absorb unlimited extra scope related to “On an airline crew-scheduling tool (hybrid approach), …” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-072",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Change control",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), two business owners demand conflicting priorities for the next delivery. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 072) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un lot design-build construction (approche prédictif), deux respo… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 072): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a construction design-build package (predictive approach), two bus… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 072) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un lot design-build construction (approche prédictif), deux respo…",
        "labelEn": "In this Change control situation (practice item 072): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a construction design-build package (predictive approach), two bus…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 072 (Change control) : rebaseliner délai et budget pour « Sur un lot design-build construction (approche prédict… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 072 (Change control): rebaseline schedule and budget for “On a construction design-build package (predictive app…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 072 (Change control) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 072 (Change control): buy a new tool immediately to bypass the underlying process gap behind “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 072 (Change control) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 072 (Change control): replace a team member immediately to end the disagreement around “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-073",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Quality",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "conflict-management",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), le chemin critique glisse de trois jours après une reprise de tests. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), the critical path slips by three days after a test rework. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 073) : Évaluer l'impact sur les objectifs, risques et l'équipe, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 073): Assess impact on objectives, risks, and the team, then present options with a clear recommendation for this case. Context: On a SaaS multi-tenant billing rewrite (agile approach), the critical… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 073) : Évaluer l'impact sur les objectifs, risques et l'équipe, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le…",
        "labelEn": "In this Quality situation (practice item 073): Assess impact on objectives, risks, and the team, then present options with a clear recommendation for this case. Context: On a SaaS multi-tenant billing rewrite (agile approach), the critical…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 073 (Quality) : imposer immédiatement une décision unilatérale à l'équipe sur « Sur une réécriture facturation SaaS multi-tenant (appr… » sans clarifier les faits.",
        "labelEn": "For case 073 (Quality): impose an immediate unilateral decision on the team about “On a SaaS multi-tenant billing rewrite (agile approach…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 073 (Quality) : réduire la qualité en silence sur « Sur une réécriture facturation SaaS multi-tenant (appr… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 073 (Quality): reduce quality silently on “On a SaaS multi-tenant billing rewrite (agile approach…” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 073 (Quality) : sauter la documentation pour « Sur une réécriture facturation SaaS multi-tenant (appr… » afin d'aller plus vite sans l'équipe.",
        "labelEn": "For case 073 (Quality): skip documentation for “On a SaaS multi-tenant billing rewrite (agile approach…” to move faster past the team.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-074",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Scope",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), leadership asks to add a major feature without moving the date. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 074) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 074): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a city smart-lighting program (hybrid approach), leadership asks t… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 074) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l…",
        "labelEn": "In this Scope situation (practice item 074): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a city smart-lighting program (hybrid approach), leadership asks t…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 074 (Scope) : escalader d'abord vers la direction au sujet de « Sur un programme d'éclairage intelligent urbain (appro… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 074 (Scope): escalate to executives first about “On a city smart-lighting program (hybrid approach), le…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 074 (Scope) : forcer l'équipe à absorber un scope illimité lié à « Sur un programme d'éclairage intelligent urbain (appro… » sans replanifier.",
        "labelEn": "For case 074 (Scope): force the team to absorb unlimited extra scope related to “On a city smart-lighting program (hybrid approach), le…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 074 (Scope) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un programme d'éclairage intelligent urbain (appro… » et figer le plan.",
        "labelEn": "For case 074 (Scope): decide without data—pick the loudest opinion from the people involved on “On a city smart-lighting program (hybrid approach), le…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-075",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Schedule",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "stakeholder-engagement",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), les rétrospectives notent une dette de clarification des DoD. Le budget restant est sous tension (4%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), retrospectives note a Definition of Done clarification debt. Remaining budget is under pressure (4%).",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 075) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 075): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a regional hospital EHR upgrade (predictive approach), retrospecti… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 075) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "In this Schedule situation (practice item 075): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a regional hospital EHR upgrade (predictive approach), retrospecti…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 075 (Schedule) : ignorer le problème (« Sur une mise à niveau DSE d'un hôpital régional (appro… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 075 (Schedule): ignore the issue (“On a regional hospital EHR upgrade (predictive approac…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 075 (Schedule) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 075 (Schedule): replace a team member immediately to end the disagreement around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 075 (Schedule) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 075 (Schedule): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-076",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Risk",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "team-development",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), production defects keep recurring despite one-off fixes. A new business counterpart joins this week.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 076) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une release paiements mobiles fintech (approche agile), les défau… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 076): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a fintech mobile payments release (agile approach), production def… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 076) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une release paiements mobiles fintech (approche agile), les défau…",
        "labelEn": "In this Risk situation (practice item 076): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a fintech mobile payments release (agile approach), production def…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 076 (Risk) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 076 (Risk): buy a new tool immediately to bypass the underlying process gap behind “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 076 (Risk) : sauter la documentation pour « Sur une release paiements mobiles fintech (approche ag… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 076 (Risk): skip documentation for “On a fintech mobile payments release (agile approach),…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 076 (Risk) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 076 (Risk): approve the change verbally with the people involved and skip impact analysis for “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-077",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Change control",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "agile-mindset"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), an influential end user spreads negative rumors about the solution. The release window is in 4 days.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 077) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une modernisation d'usine de production (approche hybride), un ut… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 077): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a manufacturing plant retrofit (hybrid approach), an influential e… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Pour le cas 077 (Change control) : réduire la qualité en silence sur « Sur une modernisation d'usine de production (approche … » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "True — For case 077 (Change control): reduce quality silently on “On a manufacturing plant retrofit (hybrid approach), a…” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Faux — la meilleure action est : Dans cette situation « Change control » (item de pratique 077) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une modernisation d'usine de production (approche hybride), un ut…",
        "labelEn": "False — the best action is: In this Change control situation (practice item 077): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a manufacturing plant retrofit (hybrid approach), an influential e…",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-078",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Quality",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), a single technical dependency has no documented contingency plan. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 078) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à l'équipe. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 078): Document this risk with impact/probability, define a response and trigger, and communicate it to the team. Context: On a university campus network refresh (predictive approach), a singl… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 078) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à l'équipe. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "In this Quality situation (practice item 078): Document this risk with impact/probability, define a response and trigger, and communicate it to the team. Context: On a university campus network refresh (predictive approach), a singl…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 078 (Quality) : forcer l'équipe à absorber un scope illimité lié à « Sur un rafraîchissement réseau de campus universitaire… » sans replanifier.",
        "labelEn": "For case 078 (Quality): force the team to absorb unlimited extra scope related to “On a university campus network refresh (predictive app…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 078 (Quality) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 078 (Quality): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 078 (Quality) : imposer immédiatement une décision unilatérale à l'équipe sur « Sur un rafraîchissement réseau de campus universitaire… » sans clarifier les faits.",
        "labelEn": "For case 078 (Quality): impose an immediate unilateral decision on the team about “On a university campus network refresh (predictive app…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-079",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Scope",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-process"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), scope creeps via untracked “small” weekly additions. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 079) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 079): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a nonprofit fundraising CRM rollout (agile approach), scope creeps… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 079) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le …",
        "labelEn": "In this Scope situation (practice item 079): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a nonprofit fundraising CRM rollout (agile approach), scope creeps…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 079 (Scope) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 079 (Scope): replace a team member immediately to end the disagreement around “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 079 (Scope) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 079 (Scope): approve the change verbally with the people involved and skip impact analysis for “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 079 (Scope) : escalader d'abord vers la direction au sujet de « Sur un déploiement CRM de collecte pour une ONG (appro… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 079 (Scope): escalate to executives first about “On a nonprofit fundraising CRM rollout (agile approach…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-080",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Schedule",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "pmp-people"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. Le budget restant est sous tension (9%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), two technical experts have blocked an architecture decision for a week. Remaining budget is under pressure (9%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 080) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 080): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a logistics warehouse automation pilot (hybrid approach), two tech… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 080) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Schedule situation (practice item 080): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a logistics warehouse automation pilot (hybrid approach), two tech…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 080 (Schedule) : sauter la documentation pour « Sur un pilote d'automatisation d'entrepôt logistique (… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 080 (Schedule): skip documentation for “On a logistics warehouse automation pilot (hybrid appr…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 080 (Schedule) : rebaseliner délai et budget pour « Sur un pilote d'automatisation d'entrepôt logistique (… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 080 (Schedule): rebaseline schedule and budget for “On a logistics warehouse automation pilot (hybrid appr…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 080 (Schedule) : ignorer le problème (« Sur un pilote d'automatisation d'entrepôt logistique (… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 080 (Schedule): ignore the issue (“On a logistics warehouse automation pilot (hybrid appr…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-081",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Risk",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "pmp-foundations"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), the daily becomes a 45-minute hierarchical status report. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 081) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), le daily … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 081): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a telecom 5G site build program (predictive approach), the daily b… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 081) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), le daily …",
        "labelEn": "In this Risk situation (practice item 081): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a telecom 5G site build program (predictive approach), the daily b…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 081 (Risk) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un programme de sites 5G télécoms (approche prédic… » et figer le plan.",
        "labelEn": "For case 081 (Risk): decide without data—pick the loudest opinion from the people involved on “On a telecom 5G site build program (predictive approac…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 081 (Risk) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un programme de sites 5G télécoms (approche prédic… » sans clarifier les faits.",
        "labelEn": "For case 081 (Risk): impose an immediate unilateral decision on the people involved about “On a telecom 5G site build program (predictive approac…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 081 (Risk) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 081 (Risk): buy a new tool immediately to bypass the underlying process gap behind “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-082",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Change control",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 082) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 082): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a public-sector permit digitization project (agile approach), the … It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 082) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "In this Change control situation (practice item 082): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a public-sector permit digitization project (agile approach), the …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 082 (Change control) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 082 (Change control): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 082 (Change control) : escalader d'abord vers la direction au sujet de « Sur un projet public de digitalisation des permis (app… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 082 (Change control): escalate to executives first about “On a public-sector permit digitization project (agile …”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 082 (Change control) : réduire la qualité en silence sur « Sur un projet public de digitalisation des permis (app… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 082 (Change control): reduce quality silently on “On a public-sector permit digitization project (agile …” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-083",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Quality",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), steering minutes no longer track actions or owners. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 083) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), les co… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 083): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a retail omnichannel inventory platform (hybrid approach), steerin… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 083) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), les co…",
        "labelEn": "In this Quality situation (practice item 083): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a retail omnichannel inventory platform (hybrid approach), steerin…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 083 (Quality) : approuver le changement oralement avec l'équipe et sauter l'analyse d'impact pour « Sur une plateforme stocks omnicanal retail (approche h… ».",
        "labelEn": "For case 083 (Quality): approve the change verbally with the team and skip impact analysis for “On a retail omnichannel inventory platform (hybrid app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 083 (Quality) : ignorer le problème (« Sur une plateforme stocks omnicanal retail (approche h… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 083 (Quality): ignore the issue (“On a retail omnichannel inventory platform (hybrid app…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 083 (Quality) : forcer l'équipe à absorber un scope illimité lié à « Sur une plateforme stocks omnicanal retail (approche h… » sans replanifier.",
        "labelEn": "For case 083 (Quality): force the team to absorb unlimited extra scope related to “On a retail omnichannel inventory platform (hybrid app…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-084",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Scope",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-process",
      "pmp-business-environment"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), two business owners demand conflicting priorities for the next delivery. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 084) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 084): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On an energy grid sensor deployment (predictive approach), two busine… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 084) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "In this Scope situation (practice item 084): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On an energy grid sensor deployment (predictive approach), two busine…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 084 (Scope) : rebaseliner délai et budget pour « Sur un déploiement de capteurs sur réseau énergétique … » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 084 (Scope): rebaseline schedule and budget for “On an energy grid sensor deployment (predictive approa…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 084 (Scope) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 084 (Scope): buy a new tool immediately to bypass the underlying process gap behind “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 084 (Scope) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 084 (Scope): replace a team member immediately to end the disagreement around “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-085",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Schedule",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-people",
      "leadership"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), le chemin critique glisse de trois jours après une reprise de tests. Le budget restant est sous tension (5%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), the critical path slips by three days after a test rework. Remaining budget is under pressure (5%).",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 085) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une migration de données de labo biotech (approche agile), le che… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 085): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a biotech lab data migration (agile approach), the critical path s… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 085) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une migration de données de labo biotech (approche agile), le che…",
        "labelEn": "In this Schedule situation (practice item 085): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a biotech lab data migration (agile approach), the critical path s…",
        "isCorrect": true
      },
      {
        "labelFr": "Aussi pour le cas 085 : documenter la décision et les impacts concernant « Sur une migration de données de labo biotech… » pour la transparence avec les personnes concernées.",
        "labelEn": "Also for case 085: document the decision and impacts about “On a biotech lab data migration (agile appro…” for transparency with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 085 (Schedule) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur une migration de données de labo biotech (approche… » sans clarifier les faits.",
        "labelEn": "For case 085 (Schedule): impose an immediate unilateral decision on the people involved about “On a biotech lab data migration (agile approach), the …” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 085 (Schedule) : réduire la qualité en silence sur « Sur une migration de données de labo biotech (approche… » sans informer les personnes concernées dans ce contexte agile.",
        "labelEn": "For case 085 (Schedule): reduce quality silently on “On a biotech lab data migration (agile approach), the …” without informing the people involved in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-086",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Risk",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-foundations",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), leadership asks to add a major feature without moving the date. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 086) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un outil de planning équipages aériens (approche hybride), la dir… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 086): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On an airline crew-scheduling tool (hybrid approach), leadership asks… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 086) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un outil de planning équipages aériens (approche hybride), la dir…",
        "labelEn": "In this Risk situation (practice item 086): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On an airline crew-scheduling tool (hybrid approach), leadership asks…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 086 (Risk) : escalader d'abord vers la direction au sujet de « Sur un outil de planning équipages aériens (approche h… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 086 (Risk): escalate to executives first about “On an airline crew-scheduling tool (hybrid approach), …”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 086 (Risk) : forcer l'équipe à absorber un scope illimité lié à « Sur un outil de planning équipages aériens (approche h… » sans replanifier.",
        "labelEn": "For case 086 (Risk): force the team to absorb unlimited extra scope related to “On an airline crew-scheduling tool (hybrid approach), …” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 086 (Risk) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un outil de planning équipages aériens (approche h… » et figer le plan.",
        "labelEn": "For case 086 (Risk): decide without data—pick the loudest opinion from the people involved on “On an airline crew-scheduling tool (hybrid approach), …” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-087",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Change control",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), les rétrospectives notent une dette de clarification des DoD. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), retrospectives note a Definition of Done clarification debt. The release window is in 4 days.",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 087) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un lot design-build construction (approche prédictif), les rétros… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 087): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a construction design-build package (predictive approach), retrosp… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 087) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un lot design-build construction (approche prédictif), les rétros…",
        "labelEn": "In this Change control situation (practice item 087): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a construction design-build package (predictive approach), retrosp…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 087 (Change control) : ignorer le problème (« Sur un lot design-build construction (approche prédict… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 087 (Change control): ignore the issue (“On a construction design-build package (predictive app…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 087 (Change control) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 087 (Change control): replace a team member immediately to end the disagreement around “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 087 (Change control) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 087 (Change control): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-088",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Quality",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-hybrid",
      "stakeholder-engagement"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), production defects keep recurring despite one-off fixes. The team is distributed across 3 time zones.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 088) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 088): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a SaaS multi-tenant billing rewrite (agile approach), production d… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Dans cette situation « Quality » (item de pratique 088) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le…",
        "labelEn": "True — In this Quality situation (practice item 088): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a SaaS multi-tenant billing rewrite (agile approach), production d…",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Pour le cas 088 (Quality) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "False — For case 088 (Quality): buy a new tool immediately to bypass the underlying process gap behind “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-089",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Scope",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-business-environment",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), an influential end user spreads negative rumors about the solution. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 089) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), u… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 089): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a city smart-lighting program (hybrid approach), an influential en… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 089) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), u…",
        "labelEn": "In this Scope situation (practice item 089): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a city smart-lighting program (hybrid approach), an influential en…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 089 (Scope) : réduire la qualité en silence sur « Sur un programme d'éclairage intelligent urbain (appro… » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 089 (Scope): reduce quality silently on “On a city smart-lighting program (hybrid approach), an…” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 089 (Scope) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un programme d'éclairage intelligent urbain (appro… » et figer le plan.",
        "labelEn": "For case 089 (Scope): decide without data—pick the loudest opinion from the people involved on “On a city smart-lighting program (hybrid approach), an…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 089 (Scope) : rebaseliner délai et budget pour « Sur un programme d'éclairage intelligent urbain (appro… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 089 (Scope): rebaseline schedule and budget for “On a city smart-lighting program (hybrid approach), an…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-090",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Schedule",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. Le budget restant est sous tension (1%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), a single technical dependency has no documented contingency plan. Remaining budget is under pressure (1%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 090) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 090): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a regional hospital EHR upgrade (predictive approach), a single te… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 090) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "In this Schedule situation (practice item 090): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a regional hospital EHR upgrade (predictive approach), a single te…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 090 (Schedule) : forcer l'équipe à absorber un scope illimité lié à « Sur une mise à niveau DSE d'un hôpital régional (appro… » sans replanifier.",
        "labelEn": "For case 090 (Schedule): force the team to absorb unlimited extra scope related to “On a regional hospital EHR upgrade (predictive approac…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 090 (Schedule) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 090 (Schedule): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 090 (Schedule) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur une mise à niveau DSE d'un hôpital régional (appro… » sans clarifier les faits.",
        "labelEn": "For case 090 (Schedule): impose an immediate unilateral decision on the people involved about “On a regional hospital EHR upgrade (predictive approac…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-091",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Risk",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "conflict-management",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), scope creeps via untracked “small” weekly additions. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 091) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une release paiements mobiles fintech (approche agile), le périmè… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 091): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a fintech mobile payments release (agile approach), scope creeps v… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 091) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une release paiements mobiles fintech (approche agile), le périmè…",
        "labelEn": "In this Risk situation (practice item 091): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a fintech mobile payments release (agile approach), scope creeps v…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 091 (Risk) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 091 (Risk): replace a team member immediately to end the disagreement around “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 091 (Risk) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 091 (Risk): approve the change verbally with the people involved and skip impact analysis for “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 091 (Risk) : escalader d'abord vers la direction au sujet de « Sur une release paiements mobiles fintech (approche ag… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 091 (Risk): escalate to executives first about “On a fintech mobile payments release (agile approach),…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-092",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Change control",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), two technical experts have blocked an architecture decision for a week. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 092) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une modernisation d'usine de production (approche hybride), deux … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 092): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a manufacturing plant retrofit (hybrid approach), two technical ex… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 092) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une modernisation d'usine de production (approche hybride), deux …",
        "labelEn": "In this Change control situation (practice item 092): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a manufacturing plant retrofit (hybrid approach), two technical ex…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 092 (Change control) : sauter la documentation pour « Sur une modernisation d'usine de production (approche … » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 092 (Change control): skip documentation for “On a manufacturing plant retrofit (hybrid approach), t…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 092 (Change control) : rebaseliner délai et budget pour « Sur une modernisation d'usine de production (approche … » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 092 (Change control): rebaseline schedule and budget for “On a manufacturing plant retrofit (hybrid approach), t…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 092 (Change control) : ignorer le problème (« Sur une modernisation d'usine de production (approche … ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 092 (Change control): ignore the issue (“On a manufacturing plant retrofit (hybrid approach), t…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-093",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Quality",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "stakeholder-engagement",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), the daily becomes a 45-minute hierarchical status report. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 093) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec l'équipe, sauf urgence validée. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 093): Protect the sprint goal: discuss the new need in backlog refinement with the team, unless a validated emergency exists. Context: On a university campus network refresh (predictive approach), the dai… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 093) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec l'équipe, sauf urgence validée. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "In this Quality situation (practice item 093): Protect the sprint goal: discuss the new need in backlog refinement with the team, unless a validated emergency exists. Context: On a university campus network refresh (predictive approach), the dai…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 093 (Quality) : décider sans données—choisir l'opinion la plus forte de l'équipe sur « Sur un rafraîchissement réseau de campus universitaire… » et figer le plan.",
        "labelEn": "For case 093 (Quality): decide without data—pick the loudest opinion from the team on “On a university campus network refresh (predictive app…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 093 (Quality) : imposer immédiatement une décision unilatérale à l'équipe sur « Sur un rafraîchissement réseau de campus universitaire… » sans clarifier les faits.",
        "labelEn": "For case 093 (Quality): impose an immediate unilateral decision on the team about “On a university campus network refresh (predictive app…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 093 (Quality) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 093 (Quality): buy a new tool immediately to bypass the underlying process gap behind “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-094",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Scope",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "team-development",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 094) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), l'é… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 094): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a nonprofit fundraising CRM rollout (agile approach), the agile te… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 094) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), l'é…",
        "labelEn": "In this Scope situation (practice item 094): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a nonprofit fundraising CRM rollout (agile approach), the agile te…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 094 (Scope) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 094 (Scope): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 094 (Scope) : escalader d'abord vers la direction au sujet de « Sur un déploiement CRM de collecte pour une ONG (appro… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 094 (Scope): escalate to executives first about “On a nonprofit fundraising CRM rollout (agile approach…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 094 (Scope) : réduire la qualité en silence sur « Sur un déploiement CRM de collecte pour une ONG (appro… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 094 (Scope): reduce quality silently on “On a nonprofit fundraising CRM rollout (agile approach…” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-095",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Schedule",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. Le budget restant est sous tension (6%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), steering minutes no longer track actions or owners. Remaining budget is under pressure (6%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 095) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 095): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a logistics warehouse automation pilot (hybrid approach), steering… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 095) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Schedule situation (practice item 095): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a logistics warehouse automation pilot (hybrid approach), steering…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 095 (Schedule) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un pilote d'automatisation d'entrepôt logistique (… ».",
        "labelEn": "For case 095 (Schedule): approve the change verbally with the people involved and skip impact analysis for “On a logistics warehouse automation pilot (hybrid appr…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 095 (Schedule) : ignorer le problème (« Sur un pilote d'automatisation d'entrepôt logistique (… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 095 (Schedule): ignore the issue (“On a logistics warehouse automation pilot (hybrid appr…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 095 (Schedule) : forcer l'équipe à absorber un scope illimité lié à « Sur un pilote d'automatisation d'entrepôt logistique (… » sans replanifier.",
        "labelEn": "For case 095 (Schedule): force the team to absorb unlimited extra scope related to “On a logistics warehouse automation pilot (hybrid appr…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-096",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Risk",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), two business owners demand conflicting priorities for the next delivery. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 096) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), deux resp… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 096): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a telecom 5G site build program (predictive approach), two busines… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 096) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), deux resp…",
        "labelEn": "In this Risk situation (practice item 096): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a telecom 5G site build program (predictive approach), two busines…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 096 (Risk) : rebaseliner délai et budget pour « Sur un programme de sites 5G télécoms (approche prédic… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 096 (Risk): rebaseline schedule and budget for “On a telecom 5G site build program (predictive approac…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 096 (Risk) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 096 (Risk): buy a new tool immediately to bypass the underlying process gap behind “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 096 (Risk) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 096 (Risk): replace a team member immediately to end the disagreement around “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-097",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Change control",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-process"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), le chemin critique glisse de trois jours après une reprise de tests. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), the critical path slips by three days after a test rework. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 097) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 097): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a public-sector permit digitization project (agile approach), the … It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 097) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "In this Change control situation (practice item 097): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a public-sector permit digitization project (agile approach), the …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 097 (Change control) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un projet public de digitalisation des permis (app… » sans clarifier les faits.",
        "labelEn": "For case 097 (Change control): impose an immediate unilateral decision on the people involved about “On a public-sector permit digitization project (agile …” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 097 (Change control) : réduire la qualité en silence sur « Sur un projet public de digitalisation des permis (app… » sans informer les personnes concernées dans ce contexte agile.",
        "labelEn": "For case 097 (Change control): reduce quality silently on “On a public-sector permit digitization project (agile …” without informing the people involved in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 097 (Change control) : sauter la documentation pour « Sur un projet public de digitalisation des permis (app… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 097 (Change control): skip documentation for “On a public-sector permit digitization project (agile …” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-098",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Quality",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "pmp-people"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), leadership asks to add a major feature without moving the date. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 098) : Rendre explicite le compromis scope/délai/coût/qualité auprès de l'équipe et faire confirmer la priorité par le décideur légitime. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), la dir… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 098): Make the scope/schedule/cost/quality trade-off explicit to the team and get the legitimate decision maker to confirm priority. Context: On a retail omnichannel inventory platform (hybrid approach), leaders… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 098) : Rendre explicite le compromis scope/délai/coût/qualité auprès de l'équipe et faire confirmer la priorité par le décideur légitime. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), la dir…",
        "labelEn": "In this Quality situation (practice item 098): Make the scope/schedule/cost/quality trade-off explicit to the team and get the legitimate decision maker to confirm priority. Context: On a retail omnichannel inventory platform (hybrid approach), leaders…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 098 (Quality) : escalader d'abord vers la direction au sujet de « Sur une plateforme stocks omnicanal retail (approche h… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 098 (Quality): escalate to executives first about “On a retail omnichannel inventory platform (hybrid app…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 098 (Quality) : forcer l'équipe à absorber un scope illimité lié à « Sur une plateforme stocks omnicanal retail (approche h… » sans replanifier.",
        "labelEn": "For case 098 (Quality): force the team to absorb unlimited extra scope related to “On a retail omnichannel inventory platform (hybrid app…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 098 (Quality) : décider sans données—choisir l'opinion la plus forte de l'équipe sur « Sur une plateforme stocks omnicanal retail (approche h… » et figer le plan.",
        "labelEn": "For case 098 (Quality): decide without data—pick the loudest opinion from the team on “On a retail omnichannel inventory platform (hybrid app…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-099",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Scope",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "pmp-foundations"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), les rétrospectives notent une dette de clarification des DoD. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), retrospectives note a Definition of Done clarification debt. A quality indicator just turned red.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 099) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 099): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On an energy grid sensor deployment (predictive approach), retrospect… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Pour le cas 099 (Scope) : ignorer le problème (« Sur un déploiement de capteurs sur réseau énergétique … ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "True — For case 099 (Scope): ignore the issue (“On an energy grid sensor deployment (predictive approa…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Faux — la meilleure action est : Dans cette situation « Scope » (item de pratique 099) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "False — the best action is: In this Scope situation (practice item 099): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On an energy grid sensor deployment (predictive approach), retrospect…",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-100",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Schedule",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. Le budget restant est sous tension (2%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), production defects keep recurring despite one-off fixes. Remaining budget is under pressure (2%).",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 100) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une migration de données de labo biotech (approche agile), les dé… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 100): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a biotech lab data migration (agile approach), production defects … It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 100) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une migration de données de labo biotech (approche agile), les dé…",
        "labelEn": "In this Schedule situation (practice item 100): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a biotech lab data migration (agile approach), production defects …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 100 (Schedule) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 100 (Schedule): buy a new tool immediately to bypass the underlying process gap behind “On a biotech lab data migration (agile approach), prod…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 100 (Schedule) : sauter la documentation pour « Sur une migration de données de labo biotech (approche… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 100 (Schedule): skip documentation for “On a biotech lab data migration (agile approach), prod…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 100 (Schedule) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 100 (Schedule): approve the change verbally with the people involved and skip impact analysis for “On a biotech lab data migration (agile approach), prod…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-101",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Risk",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), an influential end user spreads negative rumors about the solution. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 101) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un outil de planning équipages aériens (approche hybride), un uti… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 101): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On an airline crew-scheduling tool (hybrid approach), an influential … It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 101) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un outil de planning équipages aériens (approche hybride), un uti…",
        "labelEn": "In this Risk situation (practice item 101): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On an airline crew-scheduling tool (hybrid approach), an influential …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 101 (Risk) : réduire la qualité en silence sur « Sur un outil de planning équipages aériens (approche h… » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 101 (Risk): reduce quality silently on “On an airline crew-scheduling tool (hybrid approach), …” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 101 (Risk) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un outil de planning équipages aériens (approche h… » et figer le plan.",
        "labelEn": "For case 101 (Risk): decide without data—pick the loudest opinion from the people involved on “On an airline crew-scheduling tool (hybrid approach), …” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 101 (Risk) : rebaseliner délai et budget pour « Sur un outil de planning équipages aériens (approche h… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 101 (Risk): rebaseline schedule and budget for “On an airline crew-scheduling tool (hybrid approach), …” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-102",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Change control",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-process",
      "pmp-business-environment"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), a single technical dependency has no documented contingency plan. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 102) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un lot design-build construction (approche prédictif), une dépend… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 102): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a construction design-build package (predictive approach), a singl… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 102) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un lot design-build construction (approche prédictif), une dépend…",
        "labelEn": "In this Change control situation (practice item 102): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a construction design-build package (predictive approach), a singl…",
        "isCorrect": true
      },
      {
        "labelFr": "Aussi pour le cas 102 : communiquer la prochaine étape convenue sur « Sur un lot design-build construction (approc… » pour garder l'équipe alignée avec les personnes concernées.",
        "labelEn": "Also for case 102: communicate the agreed next step on “On a construction design-build package (pred…” so the team stays aligned with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 102 (Change control) : forcer l'équipe à absorber un scope illimité lié à « Sur un lot design-build construction (approche prédict… » sans replanifier.",
        "labelEn": "For case 102 (Change control): force the team to absorb unlimited extra scope related to “On a construction design-build package (predictive app…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 102 (Change control) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 102 (Change control): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-103",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Quality",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-people",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), scope creeps via untracked “small” weekly additions. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 103) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 103): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a SaaS multi-tenant billing rewrite (agile approach), scope creeps… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 103) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le…",
        "labelEn": "In this Quality situation (practice item 103): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a SaaS multi-tenant billing rewrite (agile approach), scope creeps…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 103 (Quality) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 103 (Quality): replace a team member immediately to end the disagreement around “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 103 (Quality) : approuver le changement oralement avec l'équipe et sauter l'analyse d'impact pour « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 103 (Quality): approve the change verbally with the team and skip impact analysis for “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 103 (Quality) : escalader d'abord vers la direction au sujet de « Sur une réécriture facturation SaaS multi-tenant (appr… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 103 (Quality): escalate to executives first about “On a SaaS multi-tenant billing rewrite (agile approach…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-104",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Scope",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-foundations",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), two technical experts have blocked an architecture decision for a week. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 104) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), d… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 104): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a city smart-lighting program (hybrid approach), two technical exp… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 104) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), d…",
        "labelEn": "In this Scope situation (practice item 104): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a city smart-lighting program (hybrid approach), two technical exp…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 104 (Scope) : sauter la documentation pour « Sur un programme d'éclairage intelligent urbain (appro… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 104 (Scope): skip documentation for “On a city smart-lighting program (hybrid approach), tw…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 104 (Scope) : rebaseliner délai et budget pour « Sur un programme d'éclairage intelligent urbain (appro… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 104 (Scope): rebaseline schedule and budget for “On a city smart-lighting program (hybrid approach), tw…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 104 (Scope) : ignorer le problème (« Sur un programme d'éclairage intelligent urbain (appro… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 104 (Scope): ignore the issue (“On a city smart-lighting program (hybrid approach), tw…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-105",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Schedule",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. Le budget restant est sous tension (7%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), the daily becomes a 45-minute hierarchical status report. Remaining budget is under pressure (7%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 105) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 105): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a regional hospital EHR upgrade (predictive approach), the daily b… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 105) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "In this Schedule situation (practice item 105): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a regional hospital EHR upgrade (predictive approach), the daily b…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 105 (Schedule) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur une mise à niveau DSE d'un hôpital régional (appro… » et figer le plan.",
        "labelEn": "For case 105 (Schedule): decide without data—pick the loudest opinion from the people involved on “On a regional hospital EHR upgrade (predictive approac…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 105 (Schedule) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur une mise à niveau DSE d'un hôpital régional (appro… » sans clarifier les faits.",
        "labelEn": "For case 105 (Schedule): impose an immediate unilateral decision on the people involved about “On a regional hospital EHR upgrade (predictive approac…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 105 (Schedule) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 105 (Schedule): buy a new tool immediately to bypass the underlying process gap behind “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-106",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Risk",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-hybrid",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 106) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une release paiements mobiles fintech (approche agile), l'équipe … Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 106): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a fintech mobile payments release (agile approach), the agile team… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 106) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une release paiements mobiles fintech (approche agile), l'équipe …",
        "labelEn": "In this Risk situation (practice item 106): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a fintech mobile payments release (agile approach), the agile team…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 106 (Risk) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 106 (Risk): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 106 (Risk) : escalader d'abord vers la direction au sujet de « Sur une release paiements mobiles fintech (approche ag… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 106 (Risk): escalate to executives first about “On a fintech mobile payments release (agile approach),…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 106 (Risk) : réduire la qualité en silence sur « Sur une release paiements mobiles fintech (approche ag… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 106 (Risk): reduce quality silently on “On a fintech mobile payments release (agile approach),…” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-107",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Change control",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-business-environment",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), steering minutes no longer track actions or owners. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 107) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur une modernisation d'usine de production (approche hybride), les c… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 107): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a manufacturing plant retrofit (hybrid approach), steering minutes… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 107) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur une modernisation d'usine de production (approche hybride), les c…",
        "labelEn": "In this Change control situation (practice item 107): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a manufacturing plant retrofit (hybrid approach), steering minutes…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 107 (Change control) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une modernisation d'usine de production (approche … ».",
        "labelEn": "For case 107 (Change control): approve the change verbally with the people involved and skip impact analysis for “On a manufacturing plant retrofit (hybrid approach), s…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 107 (Change control) : ignorer le problème (« Sur une modernisation d'usine de production (approche … ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 107 (Change control): ignore the issue (“On a manufacturing plant retrofit (hybrid approach), s…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 107 (Change control) : forcer l'équipe à absorber un scope illimité lié à « Sur une modernisation d'usine de production (approche … » sans replanifier.",
        "labelEn": "For case 107 (Change control): force the team to absorb unlimited extra scope related to “On a manufacturing plant retrofit (hybrid approach), s…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-108",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Quality",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), two business owners demand conflicting priorities for the next delivery. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 108) : Commencer par confirmer ce qui est connu vs présumé, en impliquant l'équipe avant toute action irréversible. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 108): Start by confirming what is known vs assumed in this situation, involving the team before any irreversible action. Context: On a university campus network refresh (predictive approach), two bus… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 108) : Commencer par confirmer ce qui est connu vs présumé, en impliquant l'équipe avant toute action irréversible. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "In this Quality situation (practice item 108): Start by confirming what is known vs assumed in this situation, involving the team before any irreversible action. Context: On a university campus network refresh (predictive approach), two bus…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 108 (Quality) : rebaseliner délai et budget pour « Sur un rafraîchissement réseau de campus universitaire… » sans consulter l'équipe ni tracer l'arbitrage.",
        "labelEn": "For case 108 (Quality): rebaseline schedule and budget for “On a university campus network refresh (predictive app…” without consulting the team or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 108 (Quality) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 108 (Quality): buy a new tool immediately to bypass the underlying process gap behind “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 108 (Quality) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 108 (Quality): replace a team member immediately to end the disagreement around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-109",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Scope",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "conflict-management",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), le chemin critique glisse de trois jours après une reprise de tests. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), the critical path slips by three days after a test rework. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 109) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 109): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a nonprofit fundraising CRM rollout (agile approach), the critical… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 109) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le …",
        "labelEn": "In this Scope situation (practice item 109): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a nonprofit fundraising CRM rollout (agile approach), the critical…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 109 (Scope) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un déploiement CRM de collecte pour une ONG (appro… » sans clarifier les faits.",
        "labelEn": "For case 109 (Scope): impose an immediate unilateral decision on the people involved about “On a nonprofit fundraising CRM rollout (agile approach…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 109 (Scope) : réduire la qualité en silence sur « Sur un déploiement CRM de collecte pour une ONG (appro… » sans informer les personnes concernées dans ce contexte agile.",
        "labelEn": "For case 109 (Scope): reduce quality silently on “On a nonprofit fundraising CRM rollout (agile approach…” without informing the people involved in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 109 (Scope) : sauter la documentation pour « Sur un déploiement CRM de collecte pour une ONG (appro… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 109 (Scope): skip documentation for “On a nonprofit fundraising CRM rollout (agile approach…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-110",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Schedule",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "change-management"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. Le budget restant est sous tension (3%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), leadership asks to add a major feature without moving the date. Remaining budget is under pressure (3%).",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 110) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 110): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a logistics warehouse automation pilot (hybrid approach), leadersh… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Dans cette situation « Schedule » (item de pratique 110) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "True — In this Schedule situation (practice item 110): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a logistics warehouse automation pilot (hybrid approach), leadersh…",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Pour le cas 110 (Schedule) : escalader d'abord vers la direction au sujet de « Sur un pilote d'automatisation d'entrepôt logistique (… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "False — For case 110 (Schedule): escalate to executives first about “On a logistics warehouse automation pilot (hybrid appr…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-111",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Risk",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "stakeholder-engagement",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), les rétrospectives notent une dette de clarification des DoD. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), retrospectives note a Definition of Done clarification debt. A new business counterpart joins this week.",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 111) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), les rétro… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 111): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a telecom 5G site build program (predictive approach), retrospecti… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 111) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), les rétro…",
        "labelEn": "In this Risk situation (practice item 111): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a telecom 5G site build program (predictive approach), retrospecti…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 111 (Risk) : ignorer le problème (« Sur un programme de sites 5G télécoms (approche prédic… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 111 (Risk): ignore the issue (“On a telecom 5G site build program (predictive approac…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 111 (Risk) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 111 (Risk): replace a team member immediately to end the disagreement around “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 111 (Risk) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 111 (Risk): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-112",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Change control",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "team-development",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), production defects keep recurring despite one-off fixes. The release window is in 4 days.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 112) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 112): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a public-sector permit digitization project (agile approach), prod… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 112) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "In this Change control situation (practice item 112): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a public-sector permit digitization project (agile approach), prod…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 112 (Change control) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 112 (Change control): buy a new tool immediately to bypass the underlying process gap behind “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 112 (Change control) : sauter la documentation pour « Sur un projet public de digitalisation des permis (app… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 112 (Change control): skip documentation for “On a public-sector permit digitization project (agile …” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 112 (Change control) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 112 (Change control): approve the change verbally with the people involved and skip impact analysis for “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-113",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Quality",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), an influential end user spreads negative rumors about the solution. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 113) : Réengager l'équipe avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), un uti… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 113): Re-engage the team with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a retail omnichannel inventory platform (hybrid approach), an infl… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 113) : Réengager l'équipe avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), un uti…",
        "labelEn": "In this Quality situation (practice item 113): Re-engage the team with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a retail omnichannel inventory platform (hybrid approach), an infl…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 113 (Quality) : réduire la qualité en silence sur « Sur une plateforme stocks omnicanal retail (approche h… » sans informer l'équipe dans ce contexte hybrid.",
        "labelEn": "For case 113 (Quality): reduce quality silently on “On a retail omnichannel inventory platform (hybrid app…” without informing the team in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 113 (Quality) : décider sans données—choisir l'opinion la plus forte de l'équipe sur « Sur une plateforme stocks omnicanal retail (approche h… » et figer le plan.",
        "labelEn": "For case 113 (Quality): decide without data—pick the loudest opinion from the team on “On a retail omnichannel inventory platform (hybrid app…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 113 (Quality) : rebaseliner délai et budget pour « Sur une plateforme stocks omnicanal retail (approche h… » sans consulter l'équipe ni tracer l'arbitrage.",
        "labelEn": "For case 113 (Quality): rebaseline schedule and budget for “On a retail omnichannel inventory platform (hybrid app…” without consulting the team or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-114",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Scope",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), a single technical dependency has no documented contingency plan. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 114) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 114): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On an energy grid sensor deployment (predictive approach), a single t… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 114) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "In this Scope situation (practice item 114): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On an energy grid sensor deployment (predictive approach), a single t…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 114 (Scope) : forcer l'équipe à absorber un scope illimité lié à « Sur un déploiement de capteurs sur réseau énergétique … » sans replanifier.",
        "labelEn": "For case 114 (Scope): force the team to absorb unlimited extra scope related to “On an energy grid sensor deployment (predictive approa…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 114 (Scope) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 114 (Scope): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 114 (Scope) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un déploiement de capteurs sur réseau énergétique … » sans clarifier les faits.",
        "labelEn": "For case 114 (Scope): impose an immediate unilateral decision on the people involved about “On an energy grid sensor deployment (predictive approa…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-115",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Schedule",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-process"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. Le budget restant est sous tension (8%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), scope creeps via untracked “small” weekly additions. Remaining budget is under pressure (8%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 115) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une migration de données de labo biotech (approche agile), le pér… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 115): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a biotech lab data migration (agile approach), scope creeps via un… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 115) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une migration de données de labo biotech (approche agile), le pér…",
        "labelEn": "In this Schedule situation (practice item 115): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a biotech lab data migration (agile approach), scope creeps via un…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 115 (Schedule) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 115 (Schedule): replace a team member immediately to end the disagreement around “On a biotech lab data migration (agile approach), scop…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 115 (Schedule) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 115 (Schedule): approve the change verbally with the people involved and skip impact analysis for “On a biotech lab data migration (agile approach), scop…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 115 (Schedule) : escalader d'abord vers la direction au sujet de « Sur une migration de données de labo biotech (approche… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 115 (Schedule): escalate to executives first about “On a biotech lab data migration (agile approach), scop…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-116",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Risk",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "pmp-people"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), two technical experts have blocked an architecture decision for a week. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 116) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un outil de planning équipages aériens (approche hybride), deux e… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 116): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On an airline crew-scheduling tool (hybrid approach), two technical e… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 116) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un outil de planning équipages aériens (approche hybride), deux e…",
        "labelEn": "In this Risk situation (practice item 116): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On an airline crew-scheduling tool (hybrid approach), two technical e…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 116 (Risk) : sauter la documentation pour « Sur un outil de planning équipages aériens (approche h… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 116 (Risk): skip documentation for “On an airline crew-scheduling tool (hybrid approach), …” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 116 (Risk) : rebaseliner délai et budget pour « Sur un outil de planning équipages aériens (approche h… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 116 (Risk): rebaseline schedule and budget for “On an airline crew-scheduling tool (hybrid approach), …” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 116 (Risk) : ignorer le problème (« Sur un outil de planning équipages aériens (approche h… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 116 (Risk): ignore the issue (“On an airline crew-scheduling tool (hybrid approach), …”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-117",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Change control",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "pmp-foundations"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), the daily becomes a 45-minute hierarchical status report. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 117) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un lot design-build construction (approche prédictif), le daily d… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 117): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a construction design-build package (predictive approach), the dai… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 117) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un lot design-build construction (approche prédictif), le daily d…",
        "labelEn": "In this Change control situation (practice item 117): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a construction design-build package (predictive approach), the dai…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 117 (Change control) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un lot design-build construction (approche prédict… » et figer le plan.",
        "labelEn": "For case 117 (Change control): decide without data—pick the loudest opinion from the people involved on “On a construction design-build package (predictive app…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 117 (Change control) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un lot design-build construction (approche prédict… » sans clarifier les faits.",
        "labelEn": "For case 117 (Change control): impose an immediate unilateral decision on the people involved about “On a construction design-build package (predictive app…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 117 (Change control) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 117 (Change control): buy a new tool immediately to bypass the underlying process gap behind “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-118",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Quality",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 118) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), l'… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 118): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a SaaS multi-tenant billing rewrite (agile approach), the agile te… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 118) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), l'…",
        "labelEn": "In this Quality situation (practice item 118): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a SaaS multi-tenant billing rewrite (agile approach), the agile te…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 118 (Quality) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 118 (Quality): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 118 (Quality) : escalader d'abord vers la direction au sujet de « Sur une réécriture facturation SaaS multi-tenant (appr… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 118 (Quality): escalate to executives first about “On a SaaS multi-tenant billing rewrite (agile approach…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 118 (Quality) : réduire la qualité en silence sur « Sur une réécriture facturation SaaS multi-tenant (appr… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 118 (Quality): reduce quality silently on “On a SaaS multi-tenant billing rewrite (agile approach…” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-119",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Scope",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "pmp-hybrid"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), steering minutes no longer track actions or owners. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 119) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 119): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a city smart-lighting program (hybrid approach), steering minutes … It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 119) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l…",
        "labelEn": "In this Scope situation (practice item 119): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a city smart-lighting program (hybrid approach), steering minutes …",
        "isCorrect": true
      },
      {
        "labelFr": "Aussi pour le cas 119 : documenter la décision et les impacts concernant « Sur un programme d'éclairage intelligent urb… » pour la transparence avec les personnes concernées.",
        "labelEn": "Also for case 119: document the decision and impacts about “On a city smart-lighting program (hybrid app…” for transparency with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 119 (Scope) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un programme d'éclairage intelligent urbain (appro… ».",
        "labelEn": "For case 119 (Scope): approve the change verbally with the people involved and skip impact analysis for “On a city smart-lighting program (hybrid approach), st…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 119 (Scope) : ignorer le problème (« Sur un programme d'éclairage intelligent urbain (appro… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 119 (Scope): ignore the issue (“On a city smart-lighting program (hybrid approach), st…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-120",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Schedule",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-process",
      "pmp-business-environment"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. Le budget restant est sous tension (4%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), two business owners demand conflicting priorities for the next delivery. Remaining budget is under pressure (4%).",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 120) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 120): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a regional hospital EHR upgrade (predictive approach), two busines… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 120) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "In this Schedule situation (practice item 120): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a regional hospital EHR upgrade (predictive approach), two busines…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 120 (Schedule) : rebaseliner délai et budget pour « Sur une mise à niveau DSE d'un hôpital régional (appro… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 120 (Schedule): rebaseline schedule and budget for “On a regional hospital EHR upgrade (predictive approac…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 120 (Schedule) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 120 (Schedule): buy a new tool immediately to bypass the underlying process gap behind “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 120 (Schedule) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 120 (Schedule): replace a team member immediately to end the disagreement around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-121",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Risk",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-people",
      "leadership"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), le chemin critique glisse de trois jours après une reprise de tests. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), the critical path slips by three days after a test rework. A new business counterpart joins this week.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 121) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une release paiements mobiles fintech (approche agile), le chemin… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 121): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a fintech mobile payments release (agile approach), the critical p… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Pour le cas 121 (Risk) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur une release paiements mobiles fintech (approche ag… » sans clarifier les faits.",
        "labelEn": "True — For case 121 (Risk): impose an immediate unilateral decision on the people involved about “On a fintech mobile payments release (agile approach),…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Faux — la meilleure action est : Dans cette situation « Risk » (item de pratique 121) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une release paiements mobiles fintech (approche agile), le chemin…",
        "labelEn": "False — the best action is: In this Risk situation (practice item 121): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a fintech mobile payments release (agile approach), the critical p…",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-122",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Change control",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-foundations",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), leadership asks to add a major feature without moving the date. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 122) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur une modernisation d'usine de production (approche hybride), la di… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 122): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a manufacturing plant retrofit (hybrid approach), leadership asks … It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 122) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur une modernisation d'usine de production (approche hybride), la di…",
        "labelEn": "In this Change control situation (practice item 122): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a manufacturing plant retrofit (hybrid approach), leadership asks …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 122 (Change control) : escalader d'abord vers la direction au sujet de « Sur une modernisation d'usine de production (approche … », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 122 (Change control): escalate to executives first about “On a manufacturing plant retrofit (hybrid approach), l…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 122 (Change control) : forcer l'équipe à absorber un scope illimité lié à « Sur une modernisation d'usine de production (approche … » sans replanifier.",
        "labelEn": "For case 122 (Change control): force the team to absorb unlimited extra scope related to “On a manufacturing plant retrofit (hybrid approach), l…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 122 (Change control) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur une modernisation d'usine de production (approche … » et figer le plan.",
        "labelEn": "For case 122 (Change control): decide without data—pick the loudest opinion from the people involved on “On a manufacturing plant retrofit (hybrid approach), l…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-123",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Quality",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), les rétrospectives notent une dette de clarification des DoD. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), retrospectives note a Definition of Done clarification debt. The team is distributed across 3 time zones.",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 123) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 123): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a university campus network refresh (predictive approach), retrosp… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 123) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "In this Quality situation (practice item 123): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a university campus network refresh (predictive approach), retrosp…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 123 (Quality) : ignorer le problème (« Sur un rafraîchissement réseau de campus universitaire… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 123 (Quality): ignore the issue (“On a university campus network refresh (predictive app…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 123 (Quality) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 123 (Quality): replace a team member immediately to end the disagreement around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 123 (Quality) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 123 (Quality): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-124",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Scope",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-hybrid",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), production defects keep recurring despite one-off fixes. A quality indicator just turned red.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 124) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), les… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 124): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a nonprofit fundraising CRM rollout (agile approach), production d… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 124) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), les…",
        "labelEn": "In this Scope situation (practice item 124): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a nonprofit fundraising CRM rollout (agile approach), production d…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 124 (Scope) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 124 (Scope): buy a new tool immediately to bypass the underlying process gap behind “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 124 (Scope) : sauter la documentation pour « Sur un déploiement CRM de collecte pour une ONG (appro… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 124 (Scope): skip documentation for “On a nonprofit fundraising CRM rollout (agile approach…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 124 (Scope) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 124 (Scope): approve the change verbally with the people involved and skip impact analysis for “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-125",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Schedule",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-business-environment",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. Le budget restant est sous tension (9%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), an influential end user spreads negative rumors about the solution. Remaining budget is under pressure (9%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 125) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 125): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a logistics warehouse automation pilot (hybrid approach), an influ… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 125) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Schedule situation (practice item 125): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a logistics warehouse automation pilot (hybrid approach), an influ…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 125 (Schedule) : réduire la qualité en silence sur « Sur un pilote d'automatisation d'entrepôt logistique (… » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 125 (Schedule): reduce quality silently on “On a logistics warehouse automation pilot (hybrid appr…” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 125 (Schedule) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un pilote d'automatisation d'entrepôt logistique (… » et figer le plan.",
        "labelEn": "For case 125 (Schedule): decide without data—pick the loudest opinion from the people involved on “On a logistics warehouse automation pilot (hybrid appr…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 125 (Schedule) : rebaseliner délai et budget pour « Sur un pilote d'automatisation d'entrepôt logistique (… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 125 (Schedule): rebaseline schedule and budget for “On a logistics warehouse automation pilot (hybrid appr…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-126",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Risk",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), a single technical dependency has no documented contingency plan. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 126) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), une dépen… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 126): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a telecom 5G site build program (predictive approach), a single te… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 126) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), une dépen…",
        "labelEn": "In this Risk situation (practice item 126): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a telecom 5G site build program (predictive approach), a single te…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 126 (Risk) : forcer l'équipe à absorber un scope illimité lié à « Sur un programme de sites 5G télécoms (approche prédic… » sans replanifier.",
        "labelEn": "For case 126 (Risk): force the team to absorb unlimited extra scope related to “On a telecom 5G site build program (predictive approac…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 126 (Risk) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 126 (Risk): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 126 (Risk) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un programme de sites 5G télécoms (approche prédic… » sans clarifier les faits.",
        "labelEn": "For case 126 (Risk): impose an immediate unilateral decision on the people involved about “On a telecom 5G site build program (predictive approac…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-127",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Change control",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "conflict-management",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), scope creeps via untracked “small” weekly additions. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 127) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 127): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a public-sector permit digitization project (agile approach), scop… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 127) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "In this Change control situation (practice item 127): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a public-sector permit digitization project (agile approach), scop…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 127 (Change control) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 127 (Change control): replace a team member immediately to end the disagreement around “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 127 (Change control) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 127 (Change control): approve the change verbally with the people involved and skip impact analysis for “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 127 (Change control) : escalader d'abord vers la direction au sujet de « Sur un projet public de digitalisation des permis (app… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 127 (Change control): escalate to executives first about “On a public-sector permit digitization project (agile …”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-128",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Quality",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), two technical experts have blocked an architecture decision for a week. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 128) : Faciliter une discussion basée sur des critères avec l'équipe, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), deux e… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 128): Facilitate a criteria-based discussion with the team, focusing on the shared project objective rather than positions. Context: On a retail omnichannel inventory platform (hybrid approach), two tec… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 128) : Faciliter une discussion basée sur des critères avec l'équipe, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), deux e…",
        "labelEn": "In this Quality situation (practice item 128): Facilitate a criteria-based discussion with the team, focusing on the shared project objective rather than positions. Context: On a retail omnichannel inventory platform (hybrid approach), two tec…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 128 (Quality) : sauter la documentation pour « Sur une plateforme stocks omnicanal retail (approche h… » afin d'aller plus vite sans l'équipe.",
        "labelEn": "For case 128 (Quality): skip documentation for “On a retail omnichannel inventory platform (hybrid app…” to move faster past the team.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 128 (Quality) : rebaseliner délai et budget pour « Sur une plateforme stocks omnicanal retail (approche h… » sans consulter l'équipe ni tracer l'arbitrage.",
        "labelEn": "For case 128 (Quality): rebaseline schedule and budget for “On a retail omnichannel inventory platform (hybrid app…” without consulting the team or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 128 (Quality) : ignorer le problème (« Sur une plateforme stocks omnicanal retail (approche h… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 128 (Quality): ignore the issue (“On a retail omnichannel inventory platform (hybrid app…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-129",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Scope",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "stakeholder-engagement",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), the daily becomes a 45-minute hierarchical status report. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 129) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 129): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On an energy grid sensor deployment (predictive approach), the daily … It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 129) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "In this Scope situation (practice item 129): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On an energy grid sensor deployment (predictive approach), the daily …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 129 (Scope) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un déploiement de capteurs sur réseau énergétique … » et figer le plan.",
        "labelEn": "For case 129 (Scope): decide without data—pick the loudest opinion from the people involved on “On an energy grid sensor deployment (predictive approa…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 129 (Scope) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un déploiement de capteurs sur réseau énergétique … » sans clarifier les faits.",
        "labelEn": "For case 129 (Scope): impose an immediate unilateral decision on the people involved about “On an energy grid sensor deployment (predictive approa…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 129 (Scope) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 129 (Scope): buy a new tool immediately to bypass the underlying process gap behind “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-130",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Schedule",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "team-development",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. Le budget restant est sous tension (5%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. Remaining budget is under pressure (5%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 130) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une migration de données de labo biotech (approche agile), l'équi… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 130): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a biotech lab data migration (agile approach), the agile team and … It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 130) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une migration de données de labo biotech (approche agile), l'équi…",
        "labelEn": "In this Schedule situation (practice item 130): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a biotech lab data migration (agile approach), the agile team and …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 130 (Schedule) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 130 (Schedule): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a biotech lab data migration (agile approach), the …”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 130 (Schedule) : escalader d'abord vers la direction au sujet de « Sur une migration de données de labo biotech (approche… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 130 (Schedule): escalate to executives first about “On a biotech lab data migration (agile approach), the …”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 130 (Schedule) : réduire la qualité en silence sur « Sur une migration de données de labo biotech (approche… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 130 (Schedule): reduce quality silently on “On a biotech lab data migration (agile approach), the …” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-131",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Risk",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), steering minutes no longer track actions or owners. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 131) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un outil de planning équipages aériens (approche hybride), les co… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 131): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On an airline crew-scheduling tool (hybrid approach), steering minute… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 131) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un outil de planning équipages aériens (approche hybride), les co…",
        "labelEn": "In this Risk situation (practice item 131): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On an airline crew-scheduling tool (hybrid approach), steering minute…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 131 (Risk) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un outil de planning équipages aériens (approche h… ».",
        "labelEn": "For case 131 (Risk): approve the change verbally with the people involved and skip impact analysis for “On an airline crew-scheduling tool (hybrid approach), …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 131 (Risk) : ignorer le problème (« Sur un outil de planning équipages aériens (approche h… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 131 (Risk): ignore the issue (“On an airline crew-scheduling tool (hybrid approach), …”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 131 (Risk) : forcer l'équipe à absorber un scope illimité lié à « Sur un outil de planning équipages aériens (approche h… » sans replanifier.",
        "labelEn": "For case 131 (Risk): force the team to absorb unlimited extra scope related to “On an airline crew-scheduling tool (hybrid approach), …” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-132",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Change control",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "pmp-situational-thinking"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), two business owners demand conflicting priorities for the next delivery. The release window is in 4 days.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 132) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un lot design-build construction (approche prédictif), deux respo… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 132): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a construction design-build package (predictive approach), two bus… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Dans cette situation « Change control » (item de pratique 132) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un lot design-build construction (approche prédictif), deux respo…",
        "labelEn": "True — In this Change control situation (practice item 132): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a construction design-build package (predictive approach), two bus…",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Pour le cas 132 (Change control) : rebaseliner délai et budget pour « Sur un lot design-build construction (approche prédict… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "False — For case 132 (Change control): rebaseline schedule and budget for “On a construction design-build package (predictive app…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-133",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Quality",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-process"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), le chemin critique glisse de trois jours après une reprise de tests. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), the critical path slips by three days after a test rework. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 133) : Évaluer l'impact sur les objectifs, risques et l'équipe, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 133): Assess impact on objectives, risks, and the team, then present options with a clear recommendation for this case. Context: On a SaaS multi-tenant billing rewrite (agile approach), the critical… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 133) : Évaluer l'impact sur les objectifs, risques et l'équipe, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le…",
        "labelEn": "In this Quality situation (practice item 133): Assess impact on objectives, risks, and the team, then present options with a clear recommendation for this case. Context: On a SaaS multi-tenant billing rewrite (agile approach), the critical…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 133 (Quality) : imposer immédiatement une décision unilatérale à l'équipe sur « Sur une réécriture facturation SaaS multi-tenant (appr… » sans clarifier les faits.",
        "labelEn": "For case 133 (Quality): impose an immediate unilateral decision on the team about “On a SaaS multi-tenant billing rewrite (agile approach…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 133 (Quality) : réduire la qualité en silence sur « Sur une réécriture facturation SaaS multi-tenant (appr… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 133 (Quality): reduce quality silently on “On a SaaS multi-tenant billing rewrite (agile approach…” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 133 (Quality) : sauter la documentation pour « Sur une réécriture facturation SaaS multi-tenant (appr… » afin d'aller plus vite sans l'équipe.",
        "labelEn": "For case 133 (Quality): skip documentation for “On a SaaS multi-tenant billing rewrite (agile approach…” to move faster past the team.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-134",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Scope",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "pmp-people"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), leadership asks to add a major feature without moving the date. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 134) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 134): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a city smart-lighting program (hybrid approach), leadership asks t… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 134) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l…",
        "labelEn": "In this Scope situation (practice item 134): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a city smart-lighting program (hybrid approach), leadership asks t…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 134 (Scope) : escalader d'abord vers la direction au sujet de « Sur un programme d'éclairage intelligent urbain (appro… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 134 (Scope): escalate to executives first about “On a city smart-lighting program (hybrid approach), le…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 134 (Scope) : forcer l'équipe à absorber un scope illimité lié à « Sur un programme d'éclairage intelligent urbain (appro… » sans replanifier.",
        "labelEn": "For case 134 (Scope): force the team to absorb unlimited extra scope related to “On a city smart-lighting program (hybrid approach), le…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 134 (Scope) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un programme d'éclairage intelligent urbain (appro… » et figer le plan.",
        "labelEn": "For case 134 (Scope): decide without data—pick the loudest opinion from the people involved on “On a city smart-lighting program (hybrid approach), le…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-135",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Schedule",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "pmp-foundations"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), les rétrospectives notent une dette de clarification des DoD. Le budget restant est sous tension (1%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), retrospectives note a Definition of Done clarification debt. Remaining budget is under pressure (1%).",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 135) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 135): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a regional hospital EHR upgrade (predictive approach), retrospecti… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 135) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "In this Schedule situation (practice item 135): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a regional hospital EHR upgrade (predictive approach), retrospecti…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 135 (Schedule) : ignorer le problème (« Sur une mise à niveau DSE d'un hôpital régional (appro… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 135 (Schedule): ignore the issue (“On a regional hospital EHR upgrade (predictive approac…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 135 (Schedule) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 135 (Schedule): replace a team member immediately to end the disagreement around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 135 (Schedule) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 135 (Schedule): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-136",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Risk",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), production defects keep recurring despite one-off fixes. A new business counterpart joins this week.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 136) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une release paiements mobiles fintech (approche agile), les défau… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 136): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a fintech mobile payments release (agile approach), production def… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 136) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une release paiements mobiles fintech (approche agile), les défau…",
        "labelEn": "In this Risk situation (practice item 136): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a fintech mobile payments release (agile approach), production def…",
        "isCorrect": true
      },
      {
        "labelFr": "Aussi pour le cas 136 : communiquer la prochaine étape convenue sur « Sur une release paiements mobiles fintech (a… » pour garder l'équipe alignée avec les personnes concernées.",
        "labelEn": "Also for case 136: communicate the agreed next step on “On a fintech mobile payments release (agile …” so the team stays aligned with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 136 (Risk) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 136 (Risk): buy a new tool immediately to bypass the underlying process gap behind “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 136 (Risk) : sauter la documentation pour « Sur une release paiements mobiles fintech (approche ag… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 136 (Risk): skip documentation for “On a fintech mobile payments release (agile approach),…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-137",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Change control",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), an influential end user spreads negative rumors about the solution. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 137) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une modernisation d'usine de production (approche hybride), un ut… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 137): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a manufacturing plant retrofit (hybrid approach), an influential e… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 137) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une modernisation d'usine de production (approche hybride), un ut…",
        "labelEn": "In this Change control situation (practice item 137): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a manufacturing plant retrofit (hybrid approach), an influential e…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 137 (Change control) : réduire la qualité en silence sur « Sur une modernisation d'usine de production (approche … » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 137 (Change control): reduce quality silently on “On a manufacturing plant retrofit (hybrid approach), a…” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 137 (Change control) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur une modernisation d'usine de production (approche … » et figer le plan.",
        "labelEn": "For case 137 (Change control): decide without data—pick the loudest opinion from the people involved on “On a manufacturing plant retrofit (hybrid approach), a…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 137 (Change control) : rebaseliner délai et budget pour « Sur une modernisation d'usine de production (approche … » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 137 (Change control): rebaseline schedule and budget for “On a manufacturing plant retrofit (hybrid approach), a…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-138",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Quality",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-process",
      "pmp-business-environment"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), a single technical dependency has no documented contingency plan. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 138) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à l'équipe. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 138): Document this risk with impact/probability, define a response and trigger, and communicate it to the team. Context: On a university campus network refresh (predictive approach), a singl… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 138) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à l'équipe. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "In this Quality situation (practice item 138): Document this risk with impact/probability, define a response and trigger, and communicate it to the team. Context: On a university campus network refresh (predictive approach), a singl…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 138 (Quality) : forcer l'équipe à absorber un scope illimité lié à « Sur un rafraîchissement réseau de campus universitaire… » sans replanifier.",
        "labelEn": "For case 138 (Quality): force the team to absorb unlimited extra scope related to “On a university campus network refresh (predictive app…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 138 (Quality) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 138 (Quality): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 138 (Quality) : imposer immédiatement une décision unilatérale à l'équipe sur « Sur un rafraîchissement réseau de campus universitaire… » sans clarifier les faits.",
        "labelEn": "For case 138 (Quality): impose an immediate unilateral decision on the team about “On a university campus network refresh (predictive app…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-139",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Scope",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-people",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), scope creeps via untracked “small” weekly additions. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 139) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 139): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a nonprofit fundraising CRM rollout (agile approach), scope creeps… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 139) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le …",
        "labelEn": "In this Scope situation (practice item 139): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a nonprofit fundraising CRM rollout (agile approach), scope creeps…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 139 (Scope) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 139 (Scope): replace a team member immediately to end the disagreement around “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 139 (Scope) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 139 (Scope): approve the change verbally with the people involved and skip impact analysis for “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 139 (Scope) : escalader d'abord vers la direction au sujet de « Sur un déploiement CRM de collecte pour une ONG (appro… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 139 (Scope): escalate to executives first about “On a nonprofit fundraising CRM rollout (agile approach…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-140",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Schedule",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-foundations",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. Le budget restant est sous tension (6%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), two technical experts have blocked an architecture decision for a week. Remaining budget is under pressure (6%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 140) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 140): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a logistics warehouse automation pilot (hybrid approach), two tech… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 140) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Schedule situation (practice item 140): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a logistics warehouse automation pilot (hybrid approach), two tech…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 140 (Schedule) : sauter la documentation pour « Sur un pilote d'automatisation d'entrepôt logistique (… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 140 (Schedule): skip documentation for “On a logistics warehouse automation pilot (hybrid appr…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 140 (Schedule) : rebaseliner délai et budget pour « Sur un pilote d'automatisation d'entrepôt logistique (… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 140 (Schedule): rebaseline schedule and budget for “On a logistics warehouse automation pilot (hybrid appr…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 140 (Schedule) : ignorer le problème (« Sur un pilote d'automatisation d'entrepôt logistique (… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 140 (Schedule): ignore the issue (“On a logistics warehouse automation pilot (hybrid appr…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-141",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Risk",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), the daily becomes a 45-minute hierarchical status report. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 141) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), le daily … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 141): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a telecom 5G site build program (predictive approach), the daily b… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 141) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), le daily …",
        "labelEn": "In this Risk situation (practice item 141): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a telecom 5G site build program (predictive approach), the daily b…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 141 (Risk) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un programme de sites 5G télécoms (approche prédic… » et figer le plan.",
        "labelEn": "For case 141 (Risk): decide without data—pick the loudest opinion from the people involved on “On a telecom 5G site build program (predictive approac…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 141 (Risk) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un programme de sites 5G télécoms (approche prédic… » sans clarifier les faits.",
        "labelEn": "For case 141 (Risk): impose an immediate unilateral decision on the people involved about “On a telecom 5G site build program (predictive approac…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 141 (Risk) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 141 (Risk): buy a new tool immediately to bypass the underlying process gap behind “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-142",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Change control",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-hybrid",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 142) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 142): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a public-sector permit digitization project (agile approach), the … It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 142) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "In this Change control situation (practice item 142): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a public-sector permit digitization project (agile approach), the …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 142 (Change control) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 142 (Change control): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 142 (Change control) : escalader d'abord vers la direction au sujet de « Sur un projet public de digitalisation des permis (app… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 142 (Change control): escalate to executives first about “On a public-sector permit digitization project (agile …”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 142 (Change control) : réduire la qualité en silence sur « Sur un projet public de digitalisation des permis (app… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 142 (Change control): reduce quality silently on “On a public-sector permit digitization project (agile …” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-143",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Quality",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-business-environment",
      "team-development"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), steering minutes no longer track actions or owners. The team is distributed across 3 time zones.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 143) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), les co… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 143): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a retail omnichannel inventory platform (hybrid approach), steerin… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Pour le cas 143 (Quality) : approuver le changement oralement avec l'équipe et sauter l'analyse d'impact pour « Sur une plateforme stocks omnicanal retail (approche h… ».",
        "labelEn": "True — For case 143 (Quality): approve the change verbally with the team and skip impact analysis for “On a retail omnichannel inventory platform (hybrid app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Faux — la meilleure action est : Dans cette situation « Quality » (item de pratique 143) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), les co…",
        "labelEn": "False — the best action is: In this Quality situation (practice item 143): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a retail omnichannel inventory platform (hybrid approach), steerin…",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-144",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Scope",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), two business owners demand conflicting priorities for the next delivery. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 144) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 144): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On an energy grid sensor deployment (predictive approach), two busine… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 144) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "In this Scope situation (practice item 144): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On an energy grid sensor deployment (predictive approach), two busine…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 144 (Scope) : rebaseliner délai et budget pour « Sur un déploiement de capteurs sur réseau énergétique … » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 144 (Scope): rebaseline schedule and budget for “On an energy grid sensor deployment (predictive approa…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 144 (Scope) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 144 (Scope): buy a new tool immediately to bypass the underlying process gap behind “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 144 (Scope) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 144 (Scope): replace a team member immediately to end the disagreement around “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-145",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Schedule",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "conflict-management",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), le chemin critique glisse de trois jours après une reprise de tests. Le budget restant est sous tension (2%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), the critical path slips by three days after a test rework. Remaining budget is under pressure (2%).",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 145) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une migration de données de labo biotech (approche agile), le che… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 145): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a biotech lab data migration (agile approach), the critical path s… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 145) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une migration de données de labo biotech (approche agile), le che…",
        "labelEn": "In this Schedule situation (practice item 145): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a biotech lab data migration (agile approach), the critical path s…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 145 (Schedule) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur une migration de données de labo biotech (approche… » sans clarifier les faits.",
        "labelEn": "For case 145 (Schedule): impose an immediate unilateral decision on the people involved about “On a biotech lab data migration (agile approach), the …” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 145 (Schedule) : réduire la qualité en silence sur « Sur une migration de données de labo biotech (approche… » sans informer les personnes concernées dans ce contexte agile.",
        "labelEn": "For case 145 (Schedule): reduce quality silently on “On a biotech lab data migration (agile approach), the …” without informing the people involved in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 145 (Schedule) : sauter la documentation pour « Sur une migration de données de labo biotech (approche… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 145 (Schedule): skip documentation for “On a biotech lab data migration (agile approach), the …” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-146",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Risk",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), leadership asks to add a major feature without moving the date. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 146) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un outil de planning équipages aériens (approche hybride), la dir… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 146): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On an airline crew-scheduling tool (hybrid approach), leadership asks… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 146) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un outil de planning équipages aériens (approche hybride), la dir…",
        "labelEn": "In this Risk situation (practice item 146): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On an airline crew-scheduling tool (hybrid approach), leadership asks…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 146 (Risk) : escalader d'abord vers la direction au sujet de « Sur un outil de planning équipages aériens (approche h… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 146 (Risk): escalate to executives first about “On an airline crew-scheduling tool (hybrid approach), …”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 146 (Risk) : forcer l'équipe à absorber un scope illimité lié à « Sur un outil de planning équipages aériens (approche h… » sans replanifier.",
        "labelEn": "For case 146 (Risk): force the team to absorb unlimited extra scope related to “On an airline crew-scheduling tool (hybrid approach), …” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 146 (Risk) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un outil de planning équipages aériens (approche h… » et figer le plan.",
        "labelEn": "For case 146 (Risk): decide without data—pick the loudest opinion from the people involved on “On an airline crew-scheduling tool (hybrid approach), …” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-147",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Change control",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "stakeholder-engagement",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), les rétrospectives notent une dette de clarification des DoD. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), retrospectives note a Definition of Done clarification debt. The release window is in 4 days.",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 147) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un lot design-build construction (approche prédictif), les rétros… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 147): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a construction design-build package (predictive approach), retrosp… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 147) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un lot design-build construction (approche prédictif), les rétros…",
        "labelEn": "In this Change control situation (practice item 147): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a construction design-build package (predictive approach), retrosp…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 147 (Change control) : ignorer le problème (« Sur un lot design-build construction (approche prédict… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 147 (Change control): ignore the issue (“On a construction design-build package (predictive app…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 147 (Change control) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 147 (Change control): replace a team member immediately to end the disagreement around “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 147 (Change control) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 147 (Change control): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-148",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Quality",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "team-development",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), production defects keep recurring despite one-off fixes. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 148) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 148): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a SaaS multi-tenant billing rewrite (agile approach), production d… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 148) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le…",
        "labelEn": "In this Quality situation (practice item 148): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a SaaS multi-tenant billing rewrite (agile approach), production d…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 148 (Quality) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 148 (Quality): buy a new tool immediately to bypass the underlying process gap behind “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 148 (Quality) : sauter la documentation pour « Sur une réécriture facturation SaaS multi-tenant (appr… » afin d'aller plus vite sans l'équipe.",
        "labelEn": "For case 148 (Quality): skip documentation for “On a SaaS multi-tenant billing rewrite (agile approach…” to move faster past the team.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 148 (Quality) : approuver le changement oralement avec l'équipe et sauter l'analyse d'impact pour « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 148 (Quality): approve the change verbally with the team and skip impact analysis for “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-149",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Scope",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), an influential end user spreads negative rumors about the solution. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 149) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), u… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 149): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a city smart-lighting program (hybrid approach), an influential en… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 149) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), u…",
        "labelEn": "In this Scope situation (practice item 149): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a city smart-lighting program (hybrid approach), an influential en…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 149 (Scope) : réduire la qualité en silence sur « Sur un programme d'éclairage intelligent urbain (appro… » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 149 (Scope): reduce quality silently on “On a city smart-lighting program (hybrid approach), an…” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 149 (Scope) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un programme d'éclairage intelligent urbain (appro… » et figer le plan.",
        "labelEn": "For case 149 (Scope): decide without data—pick the loudest opinion from the people involved on “On a city smart-lighting program (hybrid approach), an…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 149 (Scope) : rebaseliner délai et budget pour « Sur un programme d'éclairage intelligent urbain (appro… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 149 (Scope): rebaseline schedule and budget for “On a city smart-lighting program (hybrid approach), an…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-150",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Schedule",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. Le budget restant est sous tension (7%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), a single technical dependency has no documented contingency plan. Remaining budget is under pressure (7%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 150) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 150): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a regional hospital EHR upgrade (predictive approach), a single te… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 150) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "In this Schedule situation (practice item 150): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a regional hospital EHR upgrade (predictive approach), a single te…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 150 (Schedule) : forcer l'équipe à absorber un scope illimité lié à « Sur une mise à niveau DSE d'un hôpital régional (appro… » sans replanifier.",
        "labelEn": "For case 150 (Schedule): force the team to absorb unlimited extra scope related to “On a regional hospital EHR upgrade (predictive approac…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 150 (Schedule) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 150 (Schedule): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 150 (Schedule) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur une mise à niveau DSE d'un hôpital régional (appro… » sans clarifier les faits.",
        "labelEn": "For case 150 (Schedule): impose an immediate unilateral decision on the people involved about “On a regional hospital EHR upgrade (predictive approac…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-151",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Risk",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-process"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), scope creeps via untracked “small” weekly additions. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 151) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une release paiements mobiles fintech (approche agile), le périmè… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 151): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a fintech mobile payments release (agile approach), scope creeps v… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 151) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une release paiements mobiles fintech (approche agile), le périmè…",
        "labelEn": "In this Risk situation (practice item 151): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a fintech mobile payments release (agile approach), scope creeps v…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 151 (Risk) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 151 (Risk): replace a team member immediately to end the disagreement around “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 151 (Risk) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 151 (Risk): approve the change verbally with the people involved and skip impact analysis for “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 151 (Risk) : escalader d'abord vers la direction au sujet de « Sur une release paiements mobiles fintech (approche ag… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 151 (Risk): escalate to executives first about “On a fintech mobile payments release (agile approach),…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-152",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Change control",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "pmp-people"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), two technical experts have blocked an architecture decision for a week. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 152) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une modernisation d'usine de production (approche hybride), deux … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 152): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a manufacturing plant retrofit (hybrid approach), two technical ex… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 152) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une modernisation d'usine de production (approche hybride), deux …",
        "labelEn": "In this Change control situation (practice item 152): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a manufacturing plant retrofit (hybrid approach), two technical ex…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 152 (Change control) : sauter la documentation pour « Sur une modernisation d'usine de production (approche … » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 152 (Change control): skip documentation for “On a manufacturing plant retrofit (hybrid approach), t…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 152 (Change control) : rebaseliner délai et budget pour « Sur une modernisation d'usine de production (approche … » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 152 (Change control): rebaseline schedule and budget for “On a manufacturing plant retrofit (hybrid approach), t…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 152 (Change control) : ignorer le problème (« Sur une modernisation d'usine de production (approche … ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 152 (Change control): ignore the issue (“On a manufacturing plant retrofit (hybrid approach), t…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-153",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Quality",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "pmp-foundations"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), the daily becomes a 45-minute hierarchical status report. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 153) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec l'équipe, sauf urgence validée. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 153): Protect the sprint goal: discuss the new need in backlog refinement with the team, unless a validated emergency exists. Context: On a university campus network refresh (predictive approach), the dai… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 153) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec l'équipe, sauf urgence validée. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "In this Quality situation (practice item 153): Protect the sprint goal: discuss the new need in backlog refinement with the team, unless a validated emergency exists. Context: On a university campus network refresh (predictive approach), the dai…",
        "isCorrect": true
      },
      {
        "labelFr": "Aussi pour le cas 153 : documenter la décision et les impacts concernant « Sur un rafraîchissement réseau de campus uni… » pour la transparence avec l'équipe.",
        "labelEn": "Also for case 153: document the decision and impacts about “On a university campus network refresh (pred…” for transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 153 (Quality) : décider sans données—choisir l'opinion la plus forte de l'équipe sur « Sur un rafraîchissement réseau de campus universitaire… » et figer le plan.",
        "labelEn": "For case 153 (Quality): decide without data—pick the loudest opinion from the team on “On a university campus network refresh (predictive app…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 153 (Quality) : imposer immédiatement une décision unilatérale à l'équipe sur « Sur un rafraîchissement réseau de campus universitaire… » sans clarifier les faits.",
        "labelEn": "For case 153 (Quality): impose an immediate unilateral decision on the team about “On a university campus network refresh (predictive app…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-154",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Scope",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. A quality indicator just turned red.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 154) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), l'é… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 154): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a nonprofit fundraising CRM rollout (agile approach), the agile te… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Dans cette situation « Scope » (item de pratique 154) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), l'é…",
        "labelEn": "True — In this Scope situation (practice item 154): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a nonprofit fundraising CRM rollout (agile approach), the agile te…",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Pour le cas 154 (Scope) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "False — For case 154 (Scope): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-155",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Schedule",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. Le budget restant est sous tension (3%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), steering minutes no longer track actions or owners. Remaining budget is under pressure (3%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 155) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 155): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a logistics warehouse automation pilot (hybrid approach), steering… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 155) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Schedule situation (practice item 155): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a logistics warehouse automation pilot (hybrid approach), steering…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 155 (Schedule) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un pilote d'automatisation d'entrepôt logistique (… ».",
        "labelEn": "For case 155 (Schedule): approve the change verbally with the people involved and skip impact analysis for “On a logistics warehouse automation pilot (hybrid appr…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 155 (Schedule) : ignorer le problème (« Sur un pilote d'automatisation d'entrepôt logistique (… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 155 (Schedule): ignore the issue (“On a logistics warehouse automation pilot (hybrid appr…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 155 (Schedule) : forcer l'équipe à absorber un scope illimité lié à « Sur un pilote d'automatisation d'entrepôt logistique (… » sans replanifier.",
        "labelEn": "For case 155 (Schedule): force the team to absorb unlimited extra scope related to “On a logistics warehouse automation pilot (hybrid appr…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-156",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Risk",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-process",
      "pmp-business-environment"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), two business owners demand conflicting priorities for the next delivery. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Risk » (item de pratique 156) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), deux resp… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Risk situation (practice item 156): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a telecom 5G site build program (predictive approach), two busines… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Risk » (item de pratique 156) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), deux resp…",
        "labelEn": "In this Risk situation (practice item 156): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a telecom 5G site build program (predictive approach), two busines…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 156 (Risk) : rebaseliner délai et budget pour « Sur un programme de sites 5G télécoms (approche prédic… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 156 (Risk): rebaseline schedule and budget for “On a telecom 5G site build program (predictive approac…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 156 (Risk) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 156 (Risk): buy a new tool immediately to bypass the underlying process gap behind “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 156 (Risk) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 156 (Risk): replace a team member immediately to end the disagreement around “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-157",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Change control",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-people",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), le chemin critique glisse de trois jours après une reprise de tests. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), the critical path slips by three days after a test rework. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Change control » (item de pratique 157) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Change control situation (practice item 157): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a public-sector permit digitization project (agile approach), the … It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Change control » (item de pratique 157) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "In this Change control situation (practice item 157): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a public-sector permit digitization project (agile approach), the …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 157 (Change control) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un projet public de digitalisation des permis (app… » sans clarifier les faits.",
        "labelEn": "For case 157 (Change control): impose an immediate unilateral decision on the people involved about “On a public-sector permit digitization project (agile …” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 157 (Change control) : réduire la qualité en silence sur « Sur un projet public de digitalisation des permis (app… » sans informer les personnes concernées dans ce contexte agile.",
        "labelEn": "For case 157 (Change control): reduce quality silently on “On a public-sector permit digitization project (agile …” without informing the people involved in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 157 (Change control) : sauter la documentation pour « Sur un projet public de digitalisation des permis (app… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 157 (Change control): skip documentation for “On a public-sector permit digitization project (agile …” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-158",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Quality",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-foundations",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), leadership asks to add a major feature without moving the date. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Quality » (item de pratique 158) : Rendre explicite le compromis scope/délai/coût/qualité auprès de l'équipe et faire confirmer la priorité par le décideur légitime. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), la dir… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Quality situation (practice item 158): Make the scope/schedule/cost/quality trade-off explicit to the team and get the legitimate decision maker to confirm priority. Context: On a retail omnichannel inventory platform (hybrid approach), leaders… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Quality » (item de pratique 158) : Rendre explicite le compromis scope/délai/coût/qualité auprès de l'équipe et faire confirmer la priorité par le décideur légitime. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), la dir…",
        "labelEn": "In this Quality situation (practice item 158): Make the scope/schedule/cost/quality trade-off explicit to the team and get the legitimate decision maker to confirm priority. Context: On a retail omnichannel inventory platform (hybrid approach), leaders…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 158 (Quality) : escalader d'abord vers la direction au sujet de « Sur une plateforme stocks omnicanal retail (approche h… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 158 (Quality): escalate to executives first about “On a retail omnichannel inventory platform (hybrid app…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 158 (Quality) : forcer l'équipe à absorber un scope illimité lié à « Sur une plateforme stocks omnicanal retail (approche h… » sans replanifier.",
        "labelEn": "For case 158 (Quality): force the team to absorb unlimited extra scope related to “On a retail omnichannel inventory platform (hybrid app…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 158 (Quality) : décider sans données—choisir l'opinion la plus forte de l'équipe sur « Sur une plateforme stocks omnicanal retail (approche h… » et figer le plan.",
        "labelEn": "For case 158 (Quality): decide without data—pick the loudest opinion from the team on “On a retail omnichannel inventory platform (hybrid app…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-159",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Scope",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), les rétrospectives notent une dette de clarification des DoD. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), retrospectives note a Definition of Done clarification debt. A quality indicator just turned red.",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Scope » (item de pratique 159) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Scope situation (practice item 159): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On an energy grid sensor deployment (predictive approach), retrospect… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Scope » (item de pratique 159) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "In this Scope situation (practice item 159): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On an energy grid sensor deployment (predictive approach), retrospect…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 159 (Scope) : ignorer le problème (« Sur un déploiement de capteurs sur réseau énergétique … ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 159 (Scope): ignore the issue (“On an energy grid sensor deployment (predictive approa…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 159 (Scope) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 159 (Scope): replace a team member immediately to end the disagreement around “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 159 (Scope) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 159 (Scope): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-160",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Schedule",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-hybrid",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. Le budget restant est sous tension (8%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), production defects keep recurring despite one-off fixes. Remaining budget is under pressure (8%).",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Schedule » (item de pratique 160) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une migration de données de labo biotech (approche agile), les dé… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Schedule situation (practice item 160): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a biotech lab data migration (agile approach), production defects … It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Schedule » (item de pratique 160) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une migration de données de labo biotech (approche agile), les dé…",
        "labelEn": "In this Schedule situation (practice item 160): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a biotech lab data migration (agile approach), production defects …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 160 (Schedule) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 160 (Schedule): buy a new tool immediately to bypass the underlying process gap behind “On a biotech lab data migration (agile approach), prod…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 160 (Schedule) : sauter la documentation pour « Sur une migration de données de labo biotech (approche… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 160 (Schedule): skip documentation for “On a biotech lab data migration (agile approach), prod…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 160 (Schedule) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 160 (Schedule): approve the change verbally with the people involved and skip impact analysis for “On a biotech lab data migration (agile approach), prod…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-161",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-business-environment",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), an influential end user spreads negative rumors about the solution. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 161) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un outil de planning équipages aériens (approche hybride), un uti… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 161): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On an airline crew-scheduling tool (hybrid approach), an influential … It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 161) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un outil de planning équipages aériens (approche hybride), un uti…",
        "labelEn": "In this Organizational strategy situation (practice item 161): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On an airline crew-scheduling tool (hybrid approach), an influential …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 161 (Organizational strategy) : réduire la qualité en silence sur « Sur un outil de planning équipages aériens (approche h… » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 161 (Organizational strategy): reduce quality silently on “On an airline crew-scheduling tool (hybrid approach), …” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 161 (Organizational strategy) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un outil de planning équipages aériens (approche h… » et figer le plan.",
        "labelEn": "For case 161 (Organizational strategy): decide without data—pick the loudest opinion from the people involved on “On an airline crew-scheduling tool (hybrid approach), …” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 161 (Organizational strategy) : rebaseliner délai et budget pour « Sur un outil de planning équipages aériens (approche h… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 161 (Organizational strategy): rebaseline schedule and budget for “On an airline crew-scheduling tool (hybrid approach), …” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-162",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), a single technical dependency has no documented contingency plan. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 162) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un lot design-build construction (approche prédictif), une dépend… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 162): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a construction design-build package (predictive approach), a singl… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Compliance » (item de pratique 162) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un lot design-build construction (approche prédictif), une dépend…",
        "labelEn": "In this Compliance situation (practice item 162): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a construction design-build package (predictive approach), a singl…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 162 (Compliance) : forcer l'équipe à absorber un scope illimité lié à « Sur un lot design-build construction (approche prédict… » sans replanifier.",
        "labelEn": "For case 162 (Compliance): force the team to absorb unlimited extra scope related to “On a construction design-build package (predictive app…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 162 (Compliance) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 162 (Compliance): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 162 (Compliance) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un lot design-build construction (approche prédict… » sans clarifier les faits.",
        "labelEn": "For case 162 (Compliance): impose an immediate unilateral decision on the people involved about “On a construction design-build package (predictive app…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-163",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "conflict-management",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), scope creeps via untracked “small” weekly additions. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 163) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 163): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a SaaS multi-tenant billing rewrite (agile approach), scope creeps… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 163) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le…",
        "labelEn": "In this Benefits situation (practice item 163): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a SaaS multi-tenant billing rewrite (agile approach), scope creeps…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 163 (Benefits) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 163 (Benefits): replace a team member immediately to end the disagreement around “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 163 (Benefits) : approuver le changement oralement avec l'équipe et sauter l'analyse d'impact pour « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 163 (Benefits): approve the change verbally with the team and skip impact analysis for “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 163 (Benefits) : escalader d'abord vers la direction au sujet de « Sur une réécriture facturation SaaS multi-tenant (appr… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 163 (Benefits): escalate to executives first about “On a SaaS multi-tenant billing rewrite (agile approach…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-164",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), two technical experts have blocked an architecture decision for a week. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 164) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), d… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 164): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a city smart-lighting program (hybrid approach), two technical exp… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 164) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), d…",
        "labelEn": "In this Organizational strategy situation (practice item 164): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a city smart-lighting program (hybrid approach), two technical exp…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 164 (Organizational strategy) : sauter la documentation pour « Sur un programme d'éclairage intelligent urbain (appro… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 164 (Organizational strategy): skip documentation for “On a city smart-lighting program (hybrid approach), tw…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 164 (Organizational strategy) : rebaseliner délai et budget pour « Sur un programme d'éclairage intelligent urbain (appro… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 164 (Organizational strategy): rebaseline schedule and budget for “On a city smart-lighting program (hybrid approach), tw…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 164 (Organizational strategy) : ignorer le problème (« Sur un programme d'éclairage intelligent urbain (appro… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 164 (Organizational strategy): ignore the issue (“On a city smart-lighting program (hybrid approach), tw…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-165",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "stakeholder-engagement",
      "governance"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. Le budget restant est sous tension (4%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), the daily becomes a 45-minute hierarchical status report. Remaining budget is under pressure (4%).",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 165) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 165): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a regional hospital EHR upgrade (predictive approach), the daily b… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Pour le cas 165 (Compliance) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur une mise à niveau DSE d'un hôpital régional (appro… » et figer le plan.",
        "labelEn": "True — For case 165 (Compliance): decide without data—pick the loudest opinion from the people involved on “On a regional hospital EHR upgrade (predictive approac…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Faux — la meilleure action est : Dans cette situation « Compliance » (item de pratique 165) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "False — the best action is: In this Compliance situation (practice item 165): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a regional hospital EHR upgrade (predictive approach), the daily b…",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-166",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "team-development",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 166) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une release paiements mobiles fintech (approche agile), l'équipe … Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 166): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a fintech mobile payments release (agile approach), the agile team… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 166) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une release paiements mobiles fintech (approche agile), l'équipe …",
        "labelEn": "In this Benefits situation (practice item 166): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a fintech mobile payments release (agile approach), the agile team…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 166 (Benefits) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 166 (Benefits): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 166 (Benefits) : escalader d'abord vers la direction au sujet de « Sur une release paiements mobiles fintech (approche ag… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 166 (Benefits): escalate to executives first about “On a fintech mobile payments release (agile approach),…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 166 (Benefits) : réduire la qualité en silence sur « Sur une release paiements mobiles fintech (approche ag… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 166 (Benefits): reduce quality silently on “On a fintech mobile payments release (agile approach),…” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-167",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), steering minutes no longer track actions or owners. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 167) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur une modernisation d'usine de production (approche hybride), les c… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 167): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a manufacturing plant retrofit (hybrid approach), steering minutes… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 167) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur une modernisation d'usine de production (approche hybride), les c…",
        "labelEn": "In this Organizational strategy situation (practice item 167): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a manufacturing plant retrofit (hybrid approach), steering minutes…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 167 (Organizational strategy) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une modernisation d'usine de production (approche … ».",
        "labelEn": "For case 167 (Organizational strategy): approve the change verbally with the people involved and skip impact analysis for “On a manufacturing plant retrofit (hybrid approach), s…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 167 (Organizational strategy) : ignorer le problème (« Sur une modernisation d'usine de production (approche … ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 167 (Organizational strategy): ignore the issue (“On a manufacturing plant retrofit (hybrid approach), s…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 167 (Organizational strategy) : forcer l'équipe à absorber un scope illimité lié à « Sur une modernisation d'usine de production (approche … » sans replanifier.",
        "labelEn": "For case 167 (Organizational strategy): force the team to absorb unlimited extra scope related to “On a manufacturing plant retrofit (hybrid approach), s…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-168",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), two business owners demand conflicting priorities for the next delivery. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 168) : Commencer par confirmer ce qui est connu vs présumé, en impliquant l'équipe avant toute action irréversible. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 168): Start by confirming what is known vs assumed in this situation, involving the team before any irreversible action. Context: On a university campus network refresh (predictive approach), two bus… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Compliance » (item de pratique 168) : Commencer par confirmer ce qui est connu vs présumé, en impliquant l'équipe avant toute action irréversible. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "In this Compliance situation (practice item 168): Start by confirming what is known vs assumed in this situation, involving the team before any irreversible action. Context: On a university campus network refresh (predictive approach), two bus…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 168 (Compliance) : rebaseliner délai et budget pour « Sur un rafraîchissement réseau de campus universitaire… » sans consulter l'équipe ni tracer l'arbitrage.",
        "labelEn": "For case 168 (Compliance): rebaseline schedule and budget for “On a university campus network refresh (predictive app…” without consulting the team or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 168 (Compliance) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 168 (Compliance): buy a new tool immediately to bypass the underlying process gap behind “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 168 (Compliance) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 168 (Compliance): replace a team member immediately to end the disagreement around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-169",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-process"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), le chemin critique glisse de trois jours après une reprise de tests. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), the critical path slips by three days after a test rework. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 169) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 169): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a nonprofit fundraising CRM rollout (agile approach), the critical… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 169) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le …",
        "labelEn": "In this Benefits situation (practice item 169): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a nonprofit fundraising CRM rollout (agile approach), the critical…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 169 (Benefits) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un déploiement CRM de collecte pour une ONG (appro… » sans clarifier les faits.",
        "labelEn": "For case 169 (Benefits): impose an immediate unilateral decision on the people involved about “On a nonprofit fundraising CRM rollout (agile approach…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 169 (Benefits) : réduire la qualité en silence sur « Sur un déploiement CRM de collecte pour une ONG (appro… » sans informer les personnes concernées dans ce contexte agile.",
        "labelEn": "For case 169 (Benefits): reduce quality silently on “On a nonprofit fundraising CRM rollout (agile approach…” without informing the people involved in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 169 (Benefits) : sauter la documentation pour « Sur un déploiement CRM de collecte pour une ONG (appro… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 169 (Benefits): skip documentation for “On a nonprofit fundraising CRM rollout (agile approach…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-170",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "pmp-people"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. Le budget restant est sous tension (9%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), leadership asks to add a major feature without moving the date. Remaining budget is under pressure (9%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 170) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 170): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a logistics warehouse automation pilot (hybrid approach), leadersh… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 170) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Organizational strategy situation (practice item 170): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a logistics warehouse automation pilot (hybrid approach), leadersh…",
        "isCorrect": true
      },
      {
        "labelFr": "Aussi pour le cas 170 : communiquer la prochaine étape convenue sur « Sur un pilote d'automatisation d'entrepôt lo… » pour garder l'équipe alignée avec les personnes concernées.",
        "labelEn": "Also for case 170: communicate the agreed next step on “On a logistics warehouse automation pilot (h…” so the team stays aligned with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 170 (Organizational strategy) : escalader d'abord vers la direction au sujet de « Sur un pilote d'automatisation d'entrepôt logistique (… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 170 (Organizational strategy): escalate to executives first about “On a logistics warehouse automation pilot (hybrid appr…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 170 (Organizational strategy) : forcer l'équipe à absorber un scope illimité lié à « Sur un pilote d'automatisation d'entrepôt logistique (… » sans replanifier.",
        "labelEn": "For case 170 (Organizational strategy): force the team to absorb unlimited extra scope related to “On a logistics warehouse automation pilot (hybrid appr…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-171",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "pmp-foundations"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), les rétrospectives notent une dette de clarification des DoD. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), retrospectives note a Definition of Done clarification debt. A new business counterpart joins this week.",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 171) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), les rétro… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 171): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a telecom 5G site build program (predictive approach), retrospecti… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Compliance » (item de pratique 171) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), les rétro…",
        "labelEn": "In this Compliance situation (practice item 171): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a telecom 5G site build program (predictive approach), retrospecti…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 171 (Compliance) : ignorer le problème (« Sur un programme de sites 5G télécoms (approche prédic… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 171 (Compliance): ignore the issue (“On a telecom 5G site build program (predictive approac…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 171 (Compliance) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 171 (Compliance): replace a team member immediately to end the disagreement around “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 171 (Compliance) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 171 (Compliance): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-172",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), production defects keep recurring despite one-off fixes. The release window is in 4 days.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 172) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 172): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a public-sector permit digitization project (agile approach), prod… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 172) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "In this Benefits situation (practice item 172): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a public-sector permit digitization project (agile approach), prod…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 172 (Benefits) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 172 (Benefits): buy a new tool immediately to bypass the underlying process gap behind “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 172 (Benefits) : sauter la documentation pour « Sur un projet public de digitalisation des permis (app… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 172 (Benefits): skip documentation for “On a public-sector permit digitization project (agile …” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 172 (Benefits) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 172 (Benefits): approve the change verbally with the people involved and skip impact analysis for “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-173",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), an influential end user spreads negative rumors about the solution. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 173) : Réengager l'équipe avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), un uti… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 173): Re-engage the team with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a retail omnichannel inventory platform (hybrid approach), an infl… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 173) : Réengager l'équipe avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), un uti…",
        "labelEn": "In this Organizational strategy situation (practice item 173): Re-engage the team with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a retail omnichannel inventory platform (hybrid approach), an infl…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 173 (Organizational strategy) : réduire la qualité en silence sur « Sur une plateforme stocks omnicanal retail (approche h… » sans informer l'équipe dans ce contexte hybrid.",
        "labelEn": "For case 173 (Organizational strategy): reduce quality silently on “On a retail omnichannel inventory platform (hybrid app…” without informing the team in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 173 (Organizational strategy) : décider sans données—choisir l'opinion la plus forte de l'équipe sur « Sur une plateforme stocks omnicanal retail (approche h… » et figer le plan.",
        "labelEn": "For case 173 (Organizational strategy): decide without data—pick the loudest opinion from the team on “On a retail omnichannel inventory platform (hybrid app…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 173 (Organizational strategy) : rebaseliner délai et budget pour « Sur une plateforme stocks omnicanal retail (approche h… » sans consulter l'équipe ni tracer l'arbitrage.",
        "labelEn": "For case 173 (Organizational strategy): rebaseline schedule and budget for “On a retail omnichannel inventory platform (hybrid app…” without consulting the team or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-174",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-process",
      "pmp-business-environment"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), a single technical dependency has no documented contingency plan. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 174) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 174): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On an energy grid sensor deployment (predictive approach), a single t… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Compliance » (item de pratique 174) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "In this Compliance situation (practice item 174): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On an energy grid sensor deployment (predictive approach), a single t…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 174 (Compliance) : forcer l'équipe à absorber un scope illimité lié à « Sur un déploiement de capteurs sur réseau énergétique … » sans replanifier.",
        "labelEn": "For case 174 (Compliance): force the team to absorb unlimited extra scope related to “On an energy grid sensor deployment (predictive approa…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 174 (Compliance) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 174 (Compliance): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 174 (Compliance) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un déploiement de capteurs sur réseau énergétique … » sans clarifier les faits.",
        "labelEn": "For case 174 (Compliance): impose an immediate unilateral decision on the people involved about “On an energy grid sensor deployment (predictive approa…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-175",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-people",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. Le budget restant est sous tension (5%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), scope creeps via untracked “small” weekly additions. Remaining budget is under pressure (5%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 175) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une migration de données de labo biotech (approche agile), le pér… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 175): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a biotech lab data migration (agile approach), scope creeps via un… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 175) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur une migration de données de labo biotech (approche agile), le pér…",
        "labelEn": "In this Benefits situation (practice item 175): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a biotech lab data migration (agile approach), scope creeps via un…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 175 (Benefits) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 175 (Benefits): replace a team member immediately to end the disagreement around “On a biotech lab data migration (agile approach), scop…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 175 (Benefits) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 175 (Benefits): approve the change verbally with the people involved and skip impact analysis for “On a biotech lab data migration (agile approach), scop…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 175 (Benefits) : escalader d'abord vers la direction au sujet de « Sur une migration de données de labo biotech (approche… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 175 (Benefits): escalate to executives first about “On a biotech lab data migration (agile approach), scop…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-176",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-foundations",
      "conflict-management"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), two technical experts have blocked an architecture decision for a week. A new business counterpart joins this week.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 176) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un outil de planning équipages aériens (approche hybride), deux e… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 176): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On an airline crew-scheduling tool (hybrid approach), two technical e… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Dans cette situation « Organizational strategy » (item de pratique 176) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un outil de planning équipages aériens (approche hybride), deux e…",
        "labelEn": "True — In this Organizational strategy situation (practice item 176): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On an airline crew-scheduling tool (hybrid approach), two technical e…",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Pour le cas 176 (Organizational strategy) : sauter la documentation pour « Sur un outil de planning équipages aériens (approche h… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "False — For case 176 (Organizational strategy): skip documentation for “On an airline crew-scheduling tool (hybrid approach), …” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-177",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), the daily becomes a 45-minute hierarchical status report. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 177) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un lot design-build construction (approche prédictif), le daily d… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 177): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a construction design-build package (predictive approach), the dai… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Compliance » (item de pratique 177) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un lot design-build construction (approche prédictif), le daily d…",
        "labelEn": "In this Compliance situation (practice item 177): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On a construction design-build package (predictive approach), the dai…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 177 (Compliance) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un lot design-build construction (approche prédict… » et figer le plan.",
        "labelEn": "For case 177 (Compliance): decide without data—pick the loudest opinion from the people involved on “On a construction design-build package (predictive app…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 177 (Compliance) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un lot design-build construction (approche prédict… » sans clarifier les faits.",
        "labelEn": "For case 177 (Compliance): impose an immediate unilateral decision on the people involved about “On a construction design-build package (predictive app…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 177 (Compliance) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 177 (Compliance): buy a new tool immediately to bypass the underlying process gap behind “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-178",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-hybrid",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 178) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), l'… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 178): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a SaaS multi-tenant billing rewrite (agile approach), the agile te… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 178) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), l'…",
        "labelEn": "In this Benefits situation (practice item 178): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a SaaS multi-tenant billing rewrite (agile approach), the agile te…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 178 (Benefits) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur une réécriture facturation SaaS multi-tenant (appr… ».",
        "labelEn": "For case 178 (Benefits): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a SaaS multi-tenant billing rewrite (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 178 (Benefits) : escalader d'abord vers la direction au sujet de « Sur une réécriture facturation SaaS multi-tenant (appr… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 178 (Benefits): escalate to executives first about “On a SaaS multi-tenant billing rewrite (agile approach…”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 178 (Benefits) : réduire la qualité en silence sur « Sur une réécriture facturation SaaS multi-tenant (appr… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 178 (Benefits): reduce quality silently on “On a SaaS multi-tenant billing rewrite (agile approach…” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-179",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-business-environment",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), steering minutes no longer track actions or owners. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 179) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 179): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a city smart-lighting program (hybrid approach), steering minutes … It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 179) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l…",
        "labelEn": "In this Organizational strategy situation (practice item 179): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On a city smart-lighting program (hybrid approach), steering minutes …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 179 (Organizational strategy) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un programme d'éclairage intelligent urbain (appro… ».",
        "labelEn": "For case 179 (Organizational strategy): approve the change verbally with the people involved and skip impact analysis for “On a city smart-lighting program (hybrid approach), st…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 179 (Organizational strategy) : ignorer le problème (« Sur un programme d'éclairage intelligent urbain (appro… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 179 (Organizational strategy): ignore the issue (“On a city smart-lighting program (hybrid approach), st…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 179 (Organizational strategy) : forcer l'équipe à absorber un scope illimité lié à « Sur un programme d'éclairage intelligent urbain (appro… » sans replanifier.",
        "labelEn": "For case 179 (Organizational strategy): force the team to absorb unlimited extra scope related to “On a city smart-lighting program (hybrid approach), st…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-180",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. Le budget restant est sous tension (1%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), two business owners demand conflicting priorities for the next delivery. Remaining budget is under pressure (1%).",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 180) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 180): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a regional hospital EHR upgrade (predictive approach), two busines… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Compliance » (item de pratique 180) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "In this Compliance situation (practice item 180): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a regional hospital EHR upgrade (predictive approach), two busines…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 180 (Compliance) : rebaseliner délai et budget pour « Sur une mise à niveau DSE d'un hôpital régional (appro… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 180 (Compliance): rebaseline schedule and budget for “On a regional hospital EHR upgrade (predictive approac…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 180 (Compliance) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 180 (Compliance): buy a new tool immediately to bypass the underlying process gap behind “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 180 (Compliance) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 180 (Compliance): replace a team member immediately to end the disagreement around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-181",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "conflict-management",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), le chemin critique glisse de trois jours après une reprise de tests. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), the critical path slips by three days after a test rework. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 181) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une release paiements mobiles fintech (approche agile), le chemin… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 181): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a fintech mobile payments release (agile approach), the critical p… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 181) : Évaluer l'impact sur les objectifs, risques et les personnes concernées, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une release paiements mobiles fintech (approche agile), le chemin…",
        "labelEn": "In this Benefits situation (practice item 181): Assess impact on objectives, risks, and the people involved, then present options with a clear recommendation for this case. Context: On a fintech mobile payments release (agile approach), the critical p…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 181 (Benefits) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur une release paiements mobiles fintech (approche ag… » sans clarifier les faits.",
        "labelEn": "For case 181 (Benefits): impose an immediate unilateral decision on the people involved about “On a fintech mobile payments release (agile approach),…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 181 (Benefits) : réduire la qualité en silence sur « Sur une release paiements mobiles fintech (approche ag… » sans informer les personnes concernées dans ce contexte agile.",
        "labelEn": "For case 181 (Benefits): reduce quality silently on “On a fintech mobile payments release (agile approach),…” without informing the people involved in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 181 (Benefits) : sauter la documentation pour « Sur une release paiements mobiles fintech (approche ag… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 181 (Benefits): skip documentation for “On a fintech mobile payments release (agile approach),…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-182",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), leadership asks to add a major feature without moving the date. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 182) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur une modernisation d'usine de production (approche hybride), la di… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 182): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a manufacturing plant retrofit (hybrid approach), leadership asks … It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 182) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur une modernisation d'usine de production (approche hybride), la di…",
        "labelEn": "In this Organizational strategy situation (practice item 182): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a manufacturing plant retrofit (hybrid approach), leadership asks …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 182 (Organizational strategy) : escalader d'abord vers la direction au sujet de « Sur une modernisation d'usine de production (approche … », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 182 (Organizational strategy): escalate to executives first about “On a manufacturing plant retrofit (hybrid approach), l…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 182 (Organizational strategy) : forcer l'équipe à absorber un scope illimité lié à « Sur une modernisation d'usine de production (approche … » sans replanifier.",
        "labelEn": "For case 182 (Organizational strategy): force the team to absorb unlimited extra scope related to “On a manufacturing plant retrofit (hybrid approach), l…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 182 (Organizational strategy) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur une modernisation d'usine de production (approche … » et figer le plan.",
        "labelEn": "For case 182 (Organizational strategy): decide without data—pick the loudest opinion from the people involved on “On a manufacturing plant retrofit (hybrid approach), l…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-183",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "stakeholder-engagement",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), les rétrospectives notent une dette de clarification des DoD. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), retrospectives note a Definition of Done clarification debt. The team is distributed across 3 time zones.",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 183) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 183): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a university campus network refresh (predictive approach), retrosp… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Compliance » (item de pratique 183) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "In this Compliance situation (practice item 183): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a university campus network refresh (predictive approach), retrosp…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 183 (Compliance) : ignorer le problème (« Sur un rafraîchissement réseau de campus universitaire… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 183 (Compliance): ignore the issue (“On a university campus network refresh (predictive app…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 183 (Compliance) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 183 (Compliance): replace a team member immediately to end the disagreement around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 183 (Compliance) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un rafraîchissement réseau de campus universitaire… ».",
        "labelEn": "For case 183 (Compliance): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a university campus network refresh (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-184",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "team-development",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), production defects keep recurring despite one-off fixes. A quality indicator just turned red.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 184) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), les… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 184): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a nonprofit fundraising CRM rollout (agile approach), production d… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 184) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), les…",
        "labelEn": "In this Benefits situation (practice item 184): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a nonprofit fundraising CRM rollout (agile approach), production d…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 184 (Benefits) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 184 (Benefits): buy a new tool immediately to bypass the underlying process gap behind “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 184 (Benefits) : sauter la documentation pour « Sur un déploiement CRM de collecte pour une ONG (appro… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 184 (Benefits): skip documentation for “On a nonprofit fundraising CRM rollout (agile approach…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 184 (Benefits) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 184 (Benefits): approve the change verbally with the people involved and skip impact analysis for “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-185",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. Le budget restant est sous tension (6%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), an influential end user spreads negative rumors about the solution. Remaining budget is under pressure (6%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 185) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 185): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a logistics warehouse automation pilot (hybrid approach), an influ… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 185) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Organizational strategy situation (practice item 185): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a logistics warehouse automation pilot (hybrid approach), an influ…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 185 (Organizational strategy) : réduire la qualité en silence sur « Sur un pilote d'automatisation d'entrepôt logistique (… » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 185 (Organizational strategy): reduce quality silently on “On a logistics warehouse automation pilot (hybrid appr…” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 185 (Organizational strategy) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un pilote d'automatisation d'entrepôt logistique (… » et figer le plan.",
        "labelEn": "For case 185 (Organizational strategy): decide without data—pick the loudest opinion from the people involved on “On a logistics warehouse automation pilot (hybrid appr…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 185 (Organizational strategy) : rebaseliner délai et budget pour « Sur un pilote d'automatisation d'entrepôt logistique (… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 185 (Organizational strategy): rebaseline schedule and budget for “On a logistics warehouse automation pilot (hybrid appr…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-186",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme de sites 5G télécoms (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a telecom 5G site build program (predictive approach), a single technical dependency has no documented contingency plan. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 186) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), une dépen… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 186): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a telecom 5G site build program (predictive approach), a single te… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Compliance » (item de pratique 186) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à les personnes concernées. Contexte : Sur un programme de sites 5G télécoms (approche prédictif), une dépen…",
        "labelEn": "In this Compliance situation (practice item 186): Document this risk with impact/probability, define a response and trigger, and communicate it to the people involved. Context: On a telecom 5G site build program (predictive approach), a single te…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 186 (Compliance) : forcer l'équipe à absorber un scope illimité lié à « Sur un programme de sites 5G télécoms (approche prédic… » sans replanifier.",
        "labelEn": "For case 186 (Compliance): force the team to absorb unlimited extra scope related to “On a telecom 5G site build program (predictive approac…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 186 (Compliance) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur un programme de sites 5G télécoms (approche prédic… ».",
        "labelEn": "For case 186 (Compliance): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a telecom 5G site build program (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 186 (Compliance) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un programme de sites 5G télécoms (approche prédic… » sans clarifier les faits.",
        "labelEn": "For case 186 (Compliance): impose an immediate unilateral decision on the people involved about “On a telecom 5G site build program (predictive approac…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-187",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-process"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur un projet public de digitalisation des permis (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a public-sector permit digitization project (agile approach), scope creeps via untracked “small” weekly additions. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 187) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un projet public de digitalisation des permis (approche agile), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 187): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a public-sector permit digitization project (agile approach), scop… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 187) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un projet public de digitalisation des permis (approche agile), l…",
        "labelEn": "In this Benefits situation (practice item 187): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a public-sector permit digitization project (agile approach), scop…",
        "isCorrect": true
      },
      {
        "labelFr": "Aussi pour le cas 187 : documenter la décision et les impacts concernant « Sur un projet public de digitalisation des p… » pour la transparence avec les personnes concernées.",
        "labelEn": "Also for case 187: document the decision and impacts about “On a public-sector permit digitization proje…” for transparency with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 187 (Benefits) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 187 (Benefits): replace a team member immediately to end the disagreement around “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 187 (Benefits) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un projet public de digitalisation des permis (app… ».",
        "labelEn": "For case 187 (Benefits): approve the change verbally with the people involved and skip impact analysis for “On a public-sector permit digitization project (agile …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-188",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "pmp-people"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une plateforme stocks omnicanal retail (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a retail omnichannel inventory platform (hybrid approach), two technical experts have blocked an architecture decision for a week. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 188) : Faciliter une discussion basée sur des critères avec l'équipe, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), deux e… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 188): Facilitate a criteria-based discussion with the team, focusing on the shared project objective rather than positions. Context: On a retail omnichannel inventory platform (hybrid approach), two tec… It addresses the priority problem with the team, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 188) : Faciliter une discussion basée sur des critères avec l'équipe, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur une plateforme stocks omnicanal retail (approche hybride), deux e…",
        "labelEn": "In this Organizational strategy situation (practice item 188): Facilitate a criteria-based discussion with the team, focusing on the shared project objective rather than positions. Context: On a retail omnichannel inventory platform (hybrid approach), two tec…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 188 (Organizational strategy) : sauter la documentation pour « Sur une plateforme stocks omnicanal retail (approche h… » afin d'aller plus vite sans l'équipe.",
        "labelEn": "For case 188 (Organizational strategy): skip documentation for “On a retail omnichannel inventory platform (hybrid app…” to move faster past the team.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 188 (Organizational strategy) : rebaseliner délai et budget pour « Sur une plateforme stocks omnicanal retail (approche h… » sans consulter l'équipe ni tracer l'arbitrage.",
        "labelEn": "For case 188 (Organizational strategy): rebaseline schedule and budget for “On a retail omnichannel inventory platform (hybrid app…” without consulting the team or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 188 (Organizational strategy) : ignorer le problème (« Sur une plateforme stocks omnicanal retail (approche h… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 188 (Organizational strategy): ignore the issue (“On a retail omnichannel inventory platform (hybrid app…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-189",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "pmp-foundations"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement de capteurs sur réseau énergétique (approche prédictif), le daily devient un status report hiérarchique de 45 minutes. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On an energy grid sensor deployment (predictive approach), the daily becomes a 45-minute hierarchical status report. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 189) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 189): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On an energy grid sensor deployment (predictive approach), the daily … It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Compliance » (item de pratique 189) : Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec les personnes concernées, sauf urgence validée. Contexte : Sur un déploiement de capteurs sur réseau énergétique (approche prédi…",
        "labelEn": "In this Compliance situation (practice item 189): Protect the sprint goal: discuss the new need in backlog refinement with the people involved, unless a validated emergency exists. Context: On an energy grid sensor deployment (predictive approach), the daily …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 189 (Compliance) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un déploiement de capteurs sur réseau énergétique … » et figer le plan.",
        "labelEn": "For case 189 (Compliance): decide without data—pick the loudest opinion from the people involved on “On an energy grid sensor deployment (predictive approa…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 189 (Compliance) : imposer immédiatement une décision unilatérale à les personnes concernées sur « Sur un déploiement de capteurs sur réseau énergétique … » sans clarifier les faits.",
        "labelEn": "For case 189 (Compliance): impose an immediate unilateral decision on the people involved about “On an energy grid sensor deployment (predictive approa…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 189 (Compliance) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un déploiement de capteurs sur réseau énergétique … ».",
        "labelEn": "For case 189 (Compliance): buy a new tool immediately to bypass the underlying process gap behind “On an energy grid sensor deployment (predictive approa…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-190",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une migration de données de labo biotech (approche agile), l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes. Le budget restant est sous tension (2%).",
    "scenarioEn": "On a biotech lab data migration (agile approach), the agile team and predictive team do not share the same done criteria at stage gates. Remaining budget is under pressure (2%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 190) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une migration de données de labo biotech (approche agile), l'équi… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 190): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a biotech lab data migration (agile approach), the agile team and … It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 190) : Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec l'équipe avant de continuer. Contexte : Sur une migration de données de labo biotech (approche agile), l'équi…",
        "labelEn": "In this Benefits situation (practice item 190): Align interfaces, acceptance criteria, and cadences between agile and predictive parts with the team before proceeding. Context: On a biotech lab data migration (agile approach), the agile team and …",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 190 (Benefits) : traiter une contrainte agile comme un simple problème de commandement RH autour de « Sur une migration de données de labo biotech (approche… ».",
        "labelEn": "For case 190 (Benefits): treat a agile delivery constraint as a pure command-and-control staffing issue around “On a biotech lab data migration (agile approach), the …”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      },
      {
        "labelFr": "Pour le cas 190 (Benefits) : escalader d'abord vers la direction au sujet de « Sur une migration de données de labo biotech (approche… », avant toute analyse d'impact avec l'équipe.",
        "labelEn": "For case 190 (Benefits): escalate to executives first about “On a biotech lab data migration (agile approach), the …”, before any impact analysis with the team.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 190 (Benefits) : réduire la qualité en silence sur « Sur une migration de données de labo biotech (approche… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 190 (Benefits): reduce quality silently on “On a biotech lab data migration (agile approach), the …” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-191",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un outil de planning équipages aériens (approche hybride), les comptes-rendus de comité ne tracent plus les actions ni les responsables. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On an airline crew-scheduling tool (hybrid approach), steering minutes no longer track actions or owners. A new business counterpart joins this week.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 191) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un outil de planning équipages aériens (approche hybride), les co… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 191): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On an airline crew-scheduling tool (hybrid approach), steering minute… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 191) : Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence. Contexte : Sur un outil de planning équipages aériens (approche hybride), les co…",
        "labelEn": "In this Organizational strategy situation (practice item 191): Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops. Context: On an airline crew-scheduling tool (hybrid approach), steering minute…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 191 (Organizational strategy) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un outil de planning équipages aériens (approche h… ».",
        "labelEn": "For case 191 (Organizational strategy): approve the change verbally with the people involved and skip impact analysis for “On an airline crew-scheduling tool (hybrid approach), …”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 191 (Organizational strategy) : ignorer le problème (« Sur un outil de planning équipages aériens (approche h… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 191 (Organizational strategy): ignore the issue (“On an airline crew-scheduling tool (hybrid approach), …”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 191 (Organizational strategy) : forcer l'équipe à absorber un scope illimité lié à « Sur un outil de planning équipages aériens (approche h… » sans replanifier.",
        "labelEn": "For case 191 (Organizational strategy): force the team to absorb unlimited extra scope related to “On an airline crew-scheduling tool (hybrid approach), …” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-192",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-process",
      "pmp-business-environment"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un lot design-build construction (approche prédictif), deux responsables métier exigent des priorités contradictoires pour la prochaine livraison. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a construction design-build package (predictive approach), two business owners demand conflicting priorities for the next delivery. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 192) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un lot design-build construction (approche prédictif), deux respo… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 192): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a construction design-build package (predictive approach), two bus… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Compliance » (item de pratique 192) : Commencer par confirmer ce qui est connu vs présumé, en impliquant les personnes concernées avant toute action irréversible. Contexte : Sur un lot design-build construction (approche prédictif), deux respo…",
        "labelEn": "In this Compliance situation (practice item 192): Start by confirming what is known vs assumed in this situation, involving the people involved before any irreversible action. Context: On a construction design-build package (predictive approach), two bus…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 192 (Compliance) : rebaseliner délai et budget pour « Sur un lot design-build construction (approche prédict… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 192 (Compliance): rebaseline schedule and budget for “On a construction design-build package (predictive app…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 192 (Compliance) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 192 (Compliance): buy a new tool immediately to bypass the underlying process gap behind “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 192 (Compliance) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un lot design-build construction (approche prédict… ».",
        "labelEn": "For case 192 (Compliance): replace a team member immediately to end the disagreement around “On a construction design-build package (predictive app…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-193",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-people",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une réécriture facturation SaaS multi-tenant (approche agile), le chemin critique glisse de trois jours après une reprise de tests. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a SaaS multi-tenant billing rewrite (agile approach), the critical path slips by three days after a test rework. The team is distributed across 3 time zones.",
    "promptFr": "Quelle est la meilleure prochaine action du chef de projet ?",
    "promptEn": "What is the project manager’s best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 193) : Évaluer l'impact sur les objectifs, risques et l'équipe, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 193): Assess impact on objectives, risks, and the team, then present options with a clear recommendation for this case. Context: On a SaaS multi-tenant billing rewrite (agile approach), the critical… It addresses the priority problem with the team, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 193) : Évaluer l'impact sur les objectifs, risques et l'équipe, puis présenter des options avec une recommandation claire pour ce cas. Contexte : Sur une réécriture facturation SaaS multi-tenant (approche agile), le…",
        "labelEn": "In this Benefits situation (practice item 193): Assess impact on objectives, risks, and the team, then present options with a clear recommendation for this case. Context: On a SaaS multi-tenant billing rewrite (agile approach), the critical…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 193 (Benefits) : imposer immédiatement une décision unilatérale à l'équipe sur « Sur une réécriture facturation SaaS multi-tenant (appr… » sans clarifier les faits.",
        "labelEn": "For case 193 (Benefits): impose an immediate unilateral decision on the team about “On a SaaS multi-tenant billing rewrite (agile approach…” without clarifying facts.",
        "isCorrect": false,
        "explanationWrongFr": "Ignore l'analyse et endommage la confiance.",
        "explanationWrongEn": "Skips analysis and damages trust."
      },
      {
        "labelFr": "Pour le cas 193 (Benefits) : réduire la qualité en silence sur « Sur une réécriture facturation SaaS multi-tenant (appr… » sans informer l'équipe dans ce contexte agile.",
        "labelEn": "For case 193 (Benefits): reduce quality silently on “On a SaaS multi-tenant billing rewrite (agile approach…” without informing the team in this agile context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 193 (Benefits) : sauter la documentation pour « Sur une réécriture facturation SaaS multi-tenant (appr… » afin d'aller plus vite sans l'équipe.",
        "labelEn": "For case 193 (Benefits): skip documentation for “On a SaaS multi-tenant billing rewrite (agile approach…” to move faster past the team.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-194",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-foundations",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un programme d'éclairage intelligent urbain (approche hybride), la direction demande d'ajouter une fonctionnalité majeure sans bouger la date. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a city smart-lighting program (hybrid approach), leadership asks to add a major feature without moving the date. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 194) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 194): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a city smart-lighting program (hybrid approach), leadership asks t… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 194) : Rendre explicite le compromis scope/délai/coût/qualité auprès de les personnes concernées et faire confirmer la priorité par le décideur légitime. Contexte : Sur un programme d'éclairage intelligent urbain (approche hybride), l…",
        "labelEn": "In this Organizational strategy situation (practice item 194): Make the scope/schedule/cost/quality trade-off explicit to the people involved and get the legitimate decision maker to confirm priority. Context: On a city smart-lighting program (hybrid approach), leadership asks t…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 194 (Organizational strategy) : escalader d'abord vers la direction au sujet de « Sur un programme d'éclairage intelligent urbain (appro… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 194 (Organizational strategy): escalate to executives first about “On a city smart-lighting program (hybrid approach), le…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      },
      {
        "labelFr": "Pour le cas 194 (Organizational strategy) : forcer l'équipe à absorber un scope illimité lié à « Sur un programme d'éclairage intelligent urbain (appro… » sans replanifier.",
        "labelEn": "For case 194 (Organizational strategy): force the team to absorb unlimited extra scope related to “On a city smart-lighting program (hybrid approach), le…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      },
      {
        "labelFr": "Pour le cas 194 (Organizational strategy) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur un programme d'éclairage intelligent urbain (appro… » et figer le plan.",
        "labelEn": "For case 194 (Organizational strategy): decide without data—pick the loudest opinion from the people involved on “On a city smart-lighting program (hybrid approach), le…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-195",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "PREVENTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une mise à niveau DSE d'un hôpital régional (approche prédictif), les rétrospectives notent une dette de clarification des DoD. Le budget restant est sous tension (7%).",
    "scenarioEn": "On a regional hospital EHR upgrade (predictive approach), retrospectives note a Definition of Done clarification debt. Remaining budget is under pressure (7%).",
    "promptFr": "Quelle action préventive est la plus appropriée ?",
    "promptEn": "Which preventive action is most appropriate?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 195) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 195): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a regional hospital EHR upgrade (predictive approach), retrospecti… It addresses the priority problem with the people involved, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Compliance » (item de pratique 195) : Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte predictive. Contexte : Sur une mise à niveau DSE d'un hôpital régional (approche prédictif),…",
        "labelEn": "In this Compliance situation (practice item 195): Reinforce the agreed change rule and communicate impacts before accepting more work in this predictive context. Context: On a regional hospital EHR upgrade (predictive approach), retrospecti…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 195 (Compliance) : ignorer le problème (« Sur une mise à niveau DSE d'un hôpital régional (appro… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 195 (Compliance): ignore the issue (“On a regional hospital EHR upgrade (predictive approac…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      },
      {
        "labelFr": "Pour le cas 195 (Compliance) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 195 (Compliance): replace a team member immediately to end the disagreement around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 195 (Compliance) : traiter une contrainte predictive comme un simple problème de commandement RH autour de « Sur une mise à niveau DSE d'un hôpital régional (appro… ».",
        "labelEn": "For case 195 (Compliance): treat a predictive delivery constraint as a pure command-and-control staffing issue around “On a regional hospital EHR upgrade (predictive approac…”.",
        "isCorrect": false,
        "explanationWrongFr": "Confond servant leadership et contrôle hiérarchique.",
        "explanationWrongEn": "Confuses servant leadership with hierarchical control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-196",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-hybrid",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une release paiements mobiles fintech (approche agile), les défauts de production se répètent malgré des correctifs ponctuels. Un nouvel interlocuteur métier arrive cette semaine.",
    "scenarioEn": "On a fintech mobile payments release (agile approach), production defects keep recurring despite one-off fixes. A new business counterpart joins this week.",
    "promptFr": "Quelle est la cause racine la plus probable à investiguer en premier ?",
    "promptEn": "Which root cause should be investigated first?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 196) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une release paiements mobiles fintech (approche agile), les défau… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 196): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a fintech mobile payments release (agile approach), production def… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 196) : Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme. Contexte : Sur une release paiements mobiles fintech (approche agile), les défau…",
        "labelEn": "In this Benefits situation (practice item 196): Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom. Context: On a fintech mobile payments release (agile approach), production def…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 196 (Benefits) : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 196 (Benefits): buy a new tool immediately to bypass the underlying process gap behind “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Un outil sans diagnostic corrige rarement une cause systémique.",
        "explanationWrongEn": "Tooling without diagnosis rarely fixes systemic causes."
      },
      {
        "labelFr": "Pour le cas 196 (Benefits) : sauter la documentation pour « Sur une release paiements mobiles fintech (approche ag… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 196 (Benefits): skip documentation for “On a fintech mobile payments release (agile approach),…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 196 (Benefits) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur une release paiements mobiles fintech (approche ag… ».",
        "labelEn": "For case 196 (Benefits): approve the change verbally with the people involved and skip impact analysis for “On a fintech mobile payments release (agile approach),…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-197",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-business-environment",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur une modernisation d'usine de production (approche hybride), un utilisateur final influent diffuse des rumeurs négatives sur la solution. La fenêtre de release est dans 4 jours.",
    "scenarioEn": "On a manufacturing plant retrofit (hybrid approach), an influential end user spreads negative rumors about the solution. The release window is in 4 days.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 197) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une modernisation d'usine de production (approche hybride), un ut… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 197): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a manufacturing plant retrofit (hybrid approach), an influential e… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 197) : Réengager les personnes concernées avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté. Contexte : Sur une modernisation d'usine de production (approche hybride), un ut…",
        "labelEn": "In this Organizational strategy situation (practice item 197): Re-engage the people involved with the business impact of stalled decisions and agree a fit-for-purpose participation mode. Context: On a manufacturing plant retrofit (hybrid approach), an influential e…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 197 (Organizational strategy) : réduire la qualité en silence sur « Sur une modernisation d'usine de production (approche … » sans informer les personnes concernées dans ce contexte hybrid.",
        "labelEn": "For case 197 (Organizational strategy): reduce quality silently on “On a manufacturing plant retrofit (hybrid approach), a…” without informing the people involved in this hybrid context.",
        "isCorrect": false,
        "explanationWrongFr": "Cache les arbitrages et viole la transparence.",
        "explanationWrongEn": "Hides trade-offs and violates transparency."
      },
      {
        "labelFr": "Pour le cas 197 (Organizational strategy) : décider sans données—choisir l'opinion la plus forte de les personnes concernées sur « Sur une modernisation d'usine de production (approche … » et figer le plan.",
        "labelEn": "For case 197 (Organizational strategy): decide without data—pick the loudest opinion from the people involved on “On a manufacturing plant retrofit (hybrid approach), a…” and lock the plan.",
        "isCorrect": false,
        "explanationWrongFr": "L'opinion sans preuve est une erreur de priorité courante.",
        "explanationWrongEn": "Opinion without evidence is a common priority mistake."
      },
      {
        "labelFr": "Pour le cas 197 (Organizational strategy) : rebaseliner délai et budget pour « Sur une modernisation d'usine de production (approche … » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 197 (Organizational strategy): rebaseline schedule and budget for “On a manufacturing plant retrofit (hybrid approach), a…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-198",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Compliance",
    "examDifficulty": "HARD",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "schedule"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur un rafraîchissement réseau de campus universitaire (approche prédictif), une dépendance technique unique n'a pas de plan de contingence documenté. L'équipe est distribuée sur 3 fuseaux horaires.",
    "scenarioEn": "On a university campus network refresh (predictive approach), a single technical dependency has no documented contingency plan. The team is distributed across 3 time zones.",
    "promptFr": "L'énoncé suivant décrit-il la meilleure prochaine action ?",
    "promptEn": "Does the following statement describe the best next action?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Compliance » (item de pratique 198) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à l'équipe. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd… Elle traite le problème prioritaire avec l'équipe, évite l'escalade prématurée, et convient à un contexte predictive. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Compliance situation (practice item 198): Document this risk with impact/probability, define a response and trigger, and communicate it to the team. Context: On a university campus network refresh (predictive approach), a singl… It addresses the priority problem with the team, avoids premature escalation, and fits a predictive delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Dans cette situation « Compliance » (item de pratique 198) : Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à l'équipe. Contexte : Sur un rafraîchissement réseau de campus universitaire (approche préd…",
        "labelEn": "True — In this Compliance situation (practice item 198): Document this risk with impact/probability, define a response and trigger, and communicate it to the team. Context: On a university campus network refresh (predictive approach), a singl…",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Pour le cas 198 (Compliance) : forcer l'équipe à absorber un scope illimité lié à « Sur un rafraîchissement réseau de campus universitaire… » sans replanifier.",
        "labelEn": "False — For case 198 (Compliance): force the team to absorb unlimited extra scope related to “On a university campus network refresh (predictive app…” without replanning.",
        "isCorrect": false,
        "explanationWrongFr": "Crée épuisement et planning fictif.",
        "explanationWrongEn": "Creates burnout and schedule fiction."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-199",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Benefits",
    "examDifficulty": "EASY",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "conflict-management",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un déploiement CRM de collecte pour une ONG (approche agile), le périmètre gonfle via des « petits » ajouts non tracés chaque semaine. Un indicateur qualité vient de passer au rouge.",
    "scenarioEn": "On a nonprofit fundraising CRM rollout (agile approach), scope creeps via untracked “small” weekly additions. A quality indicator just turned red.",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Benefits » (item de pratique 199) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le … Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte agile. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Benefits situation (practice item 199): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a nonprofit fundraising CRM rollout (agile approach), scope creeps… It addresses the priority problem with the people involved, avoids premature escalation, and fits a agile delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Benefits » (item de pratique 199) : Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe. Contexte : Sur un déploiement CRM de collecte pour une ONG (approche agile), le …",
        "labelEn": "In this Benefits situation (practice item 199): Route the request through the agreed change-control process with impact analysis before committing the team. Context: On a nonprofit fundraising CRM rollout (agile approach), scope creeps…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 199 (Benefits) : remplacer immédiatement un membre pour clore le désaccord autour de « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 199 (Benefits): replace a team member immediately to end the disagreement around “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une sanction RH est rarement la première meilleure action.",
        "explanationWrongEn": "Punitive staffing is rarely the first best action."
      },
      {
        "labelFr": "Pour le cas 199 (Benefits) : approuver le changement oralement avec les personnes concernées et sauter l'analyse d'impact pour « Sur un déploiement CRM de collecte pour une ONG (appro… ».",
        "labelEn": "For case 199 (Benefits): approve the change verbally with the people involved and skip impact analysis for “On a nonprofit fundraising CRM rollout (agile approach…”.",
        "isCorrect": false,
        "explanationWrongFr": "Une approbation orale sans analyse d'impact casse le change control.",
        "explanationWrongEn": "Verbal approval without impact analysis breaks change control."
      },
      {
        "labelFr": "Pour le cas 199 (Benefits) : escalader d'abord vers la direction au sujet de « Sur un déploiement CRM de collecte pour une ONG (appro… », avant toute analyse d'impact avec les personnes concernées.",
        "labelEn": "For case 199 (Benefits): escalate to executives first about “On a nonprofit fundraising CRM rollout (agile approach…”, before any impact analysis with the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
        "explanationWrongEn": "Premature escalation wastes attention and skips local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-200",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Organizational strategy",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur un pilote d'automatisation d'entrepôt logistique (approche hybride), deux experts techniques bloquent une décision d'architecture depuis une semaine. Le budget restant est sous tension (3%).",
    "scenarioEn": "On a logistics warehouse automation pilot (hybrid approach), two technical experts have blocked an architecture decision for a week. Remaining budget is under pressure (3%).",
    "promptFr": "Quelle est la meilleure action dans cette situation ?",
    "promptEn": "What is the best action in this situation?",
    "explanationCorrectFr": "Meilleure action pour ce scénario : Dans cette situation « Organizational strategy » (item de pratique 200) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid… Elle traite le problème prioritaire avec les personnes concernées, évite l'escalade prématurée, et convient à un contexte hybrid. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "Best action for this scenario: In this Organizational strategy situation (practice item 200): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a logistics warehouse automation pilot (hybrid approach), two tech… It addresses the priority problem with the people involved, avoids premature escalation, and fits a hybrid delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Dans cette situation « Organizational strategy » (item de pratique 200) : Faciliter une discussion basée sur des critères avec les personnes concernées, centrée sur l'objectif projet plutôt que sur les positions. Contexte : Sur un pilote d'automatisation d'entrepôt logistique (approche hybrid…",
        "labelEn": "In this Organizational strategy situation (practice item 200): Facilitate a criteria-based discussion with the people involved, focusing on the shared project objective rather than positions. Context: On a logistics warehouse automation pilot (hybrid approach), two tech…",
        "isCorrect": true
      },
      {
        "labelFr": "Pour le cas 200 (Organizational strategy) : sauter la documentation pour « Sur un pilote d'automatisation d'entrepôt logistique (… » afin d'aller plus vite sans les personnes concernées.",
        "labelEn": "For case 200 (Organizational strategy): skip documentation for “On a logistics warehouse automation pilot (hybrid appr…” to move faster past the people involved.",
        "isCorrect": false,
        "explanationWrongFr": "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
        "explanationWrongEn": "Loses traceability needed for governance and learning."
      },
      {
        "labelFr": "Pour le cas 200 (Organizational strategy) : rebaseliner délai et budget pour « Sur un pilote d'automatisation d'entrepôt logistique (… » sans consulter les personnes concernées ni tracer l'arbitrage.",
        "labelEn": "For case 200 (Organizational strategy): rebaseline schedule and budget for “On a logistics warehouse automation pilot (hybrid appr…” without consulting the people involved or recording the trade-off.",
        "isCorrect": false,
        "explanationWrongFr": "Un rebaseline caché détruit l'intégrité des prévisions.",
        "explanationWrongEn": "Hidden rebaselining destroys forecast integrity."
      },
      {
        "labelFr": "Pour le cas 200 (Organizational strategy) : ignorer le problème (« Sur un pilote d'automatisation d'entrepôt logistique (… ») jusqu'au prochain comité et espérer qu'il disparaisse.",
        "labelEn": "For case 200 (Organizational strategy): ignore the issue (“On a logistics warehouse automation pilot (hybrid appr…”) until the next steering meeting and hope it disappears.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse croître risque et conflit.",
        "explanationWrongEn": "Passive delay lets risk and conflict grow."
      }
    ]
  }
] as ExamBankQuestionSeed[];

/** Stem-stable bank after misread upgrades, before ECO-proxy metadata. */
export const PMP_EXAM_BANK_STEMS = applyMisreadScenarioUpgrades(RAW_PMP_EXAM_BANK);

/** Misread upgrades first (stem-safe historical fixes), then ECO-proxy metadata only. */
export const PMP_EXAM_BANK = applyEcoProxyTags(PMP_EXAM_BANK_STEMS);
