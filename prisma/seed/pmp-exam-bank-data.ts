/**
 * Original pedagogical PMP-style exam bank (Phase 7–12).
 * NOT PMI / PMBOK copyrighted content. Educational scenarios only.
 * Phase 12: rewritten stems — no template markers; unique situational context.
 * Includes PLA Learning Blueprint metadata (scenarioType, learningObjective).
 */

import type { ExamDifficultyCode, PmpDeliveryApproachCode, PmpDomainCode } from "@/modules/assessment-engine/exam-types";
import type { LearningObjectiveCode, PmpScenarioTypeCode } from "@/modules/assessment-engine/exam-blueprint";

export type ExamBankOptionSeed = {
  labelFr: string;
  labelEn: string;
  isCorrect: boolean;
  explanationWrongFr?: string;
  explanationWrongEn?: string;
};

export type ExamBankQuestionSeed = {
  externalKey: string;
  domain: PmpDomainCode;
  deliveryApproach: PmpDeliveryApproachCode;
  processArea: string;
  examDifficulty: ExamDifficultyCode;
  scenarioType: PmpScenarioTypeCode;
  learningObjective: LearningObjectiveCode;
  skills: string[];
  type: "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "TRUE_FALSE";
  scenarioFr: string;
  scenarioEn: string;
  promptFr: string;
  promptEn: string;
  explanationCorrectFr: string;
  explanationCorrectEn: string;
  options: ExamBankOptionSeed[];
};

export const PMP_EXAM_BANK: ExamBankQuestionSeed[] =
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "True — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans clarifier les faits ignore parties prenantes et risques.",
        "explanationWrongEn": "Imposing without clarifying facts ignores stakeholders and risks."
      },
      {
        "labelFr": "Faux — la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "False — the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et les impacts pour la transparence de l'équipe et des parties prenantes.",
        "labelEn": "Document the decision and impacts for team and stakeholder transparency.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "True — Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "False — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cette option saute l'analyse collaborative et augmente le risque.",
        "explanationWrongEn": "This option skips collaborative analysis and increases risk."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "True — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans clarifier les faits ignore parties prenantes et risques.",
        "explanationWrongEn": "Imposing without clarifying facts ignores stakeholders and risks."
      },
      {
        "labelFr": "Faux — la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "False — the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et les impacts pour la transparence de l'équipe et des parties prenantes.",
        "labelEn": "Document the decision and impacts for team and stakeholder transparency.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "True — Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "False — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cette option saute l'analyse collaborative et augmente le risque.",
        "explanationWrongEn": "This option skips collaborative analysis and increases risk."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et les impacts pour la transparence de l'équipe et des parties prenantes.",
        "labelEn": "Document the decision and impacts for team and stakeholder transparency.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "True — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans clarifier les faits ignore parties prenantes et risques.",
        "explanationWrongEn": "Imposing without clarifying facts ignores stakeholders and risks."
      },
      {
        "labelFr": "Faux — la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "False — the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "True — Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "False — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cette option saute l'analyse collaborative et augmente le risque.",
        "explanationWrongEn": "This option skips collaborative analysis and increases risk."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et les impacts pour la transparence de l'équipe et des parties prenantes.",
        "labelEn": "Document the decision and impacts for team and stakeholder transparency.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "True — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans clarifier les faits ignore parties prenantes et risques.",
        "explanationWrongEn": "Imposing without clarifying facts ignores stakeholders and risks."
      },
      {
        "labelFr": "Faux — la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "False — the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et les impacts pour la transparence de l'équipe et des parties prenantes.",
        "labelEn": "Document the decision and impacts for team and stakeholder transparency.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "True — Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "False — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cette option saute l'analyse collaborative et augmente le risque.",
        "explanationWrongEn": "This option skips collaborative analysis and increases risk."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "True — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans clarifier les faits ignore parties prenantes et risques.",
        "explanationWrongEn": "Imposing without clarifying facts ignores stakeholders and risks."
      },
      {
        "labelFr": "Faux — la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "False — the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et les impacts pour la transparence de l'équipe et des parties prenantes.",
        "labelEn": "Document the decision and impacts for team and stakeholder transparency.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "True — Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "False — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cette option saute l'analyse collaborative et augmente le risque.",
        "explanationWrongEn": "This option skips collaborative analysis and increases risk."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et les impacts pour la transparence de l'équipe et des parties prenantes.",
        "labelEn": "Document the decision and impacts for team and stakeholder transparency.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "True — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans clarifier les faits ignore parties prenantes et risques.",
        "explanationWrongEn": "Imposing without clarifying facts ignores stakeholders and risks."
      },
      {
        "labelFr": "Faux — la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "False — the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "True — Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "False — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cette option saute l'analyse collaborative et augmente le risque.",
        "explanationWrongEn": "This option skips collaborative analysis and increases risk."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et les impacts pour la transparence de l'équipe et des parties prenantes.",
        "labelEn": "Document the decision and impacts for team and stakeholder transparency.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "True — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans clarifier les faits ignore parties prenantes et risques.",
        "explanationWrongEn": "Imposing without clarifying facts ignores stakeholders and risks."
      },
      {
        "labelFr": "Faux — la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "False — the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et les impacts pour la transparence de l'équipe et des parties prenantes.",
        "labelEn": "Document the decision and impacts for team and stakeholder transparency.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "True — Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "False — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cette option saute l'analyse collaborative et augmente le risque.",
        "explanationWrongEn": "This option skips collaborative analysis and increases risk."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "True — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans clarifier les faits ignore parties prenantes et risques.",
        "explanationWrongEn": "Imposing without clarifying facts ignores stakeholders and risks."
      },
      {
        "labelFr": "Faux — la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "False — the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et les impacts pour la transparence de l'équipe et des parties prenantes.",
        "labelEn": "Document the decision and impacts for team and stakeholder transparency.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "True — Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "False — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cette option saute l'analyse collaborative et augmente le risque.",
        "explanationWrongEn": "This option skips collaborative analysis and increases risk."
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme de sites 5G télécoms), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a telecom 5G site build program), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un projet public de digitalisation des permis), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a public-sector permit digitization project), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et les impacts pour la transparence de l'équipe et des parties prenantes.",
        "labelEn": "Document the decision and impacts for team and stakeholder transparency.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
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
    "explanationCorrectFr": "Dans ce cas (une plateforme stocks omnicanal retail), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a retail omnichannel inventory platform), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement de capteurs sur réseau énergétique), la meilleure action est : Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée. Priorité : rituels agiles. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an energy grid sensor deployment), the best action is: Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists. Priority: agile rituals. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
        "labelEn": "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une migration de données de labo biotech), la meilleure action est : Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif. Priorité : interfaces hybrides. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a biotech lab data migration), the best action is: Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes. Priority: hybrid interfaces. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
        "labelEn": "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un outil de planning équipages aériens), la meilleure action est : Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence. Priorité : traçabilité. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (an airline crew-scheduling tool), the best action is: Restore the approval framework, trace the decision, and correct the process to prevent recurrence. Priority: traceability. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
        "labelEn": "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un lot design-build construction), la meilleure action est : Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir. Priorité : alignement des priorités. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a construction design-build package), the best action is: Clarify facts with the people involved, then facilitate alignment on the shared objective before acting. Priority: priority alignment. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une réécriture facturation SaaS multi-tenant), la meilleure action est : Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation. Priorité : replanification. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a SaaS multi-tenant billing rewrite), the best action is: Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation. Priority: re-planning. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
        "labelEn": "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un programme d'éclairage intelligent urbain), la meilleure action est : Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime. Priorité : arbitrage scope/délai. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a city smart-lighting program), the best action is: Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority. Priority: scope/schedule trade-off. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
        "labelEn": "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une mise à niveau DSE d'un hôpital régional), la meilleure action est : Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre. Priorité : qualité du DoD. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a regional hospital EHR upgrade), the best action is: Strengthen the change-management rule and impact communication before accepting out-of-scope work. Priority: DoD quality. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
        "labelEn": "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Acheter un nouvel outil immédiatement pour contourner le problème.",
        "labelEn": "Buy a new tool immediately to work around the problem.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une release paiements mobiles fintech), la meilleure action est : Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme. Priorité : analyse de cause. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a fintech mobile payments release), the best action is: Analyze failure data to identify the systemic cause, then fix the process — not only the symptom. Priority: cause analysis. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
        "labelEn": "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (une modernisation d'usine de production), la meilleure action est : Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté. Priorité : gestion des perceptions. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a manufacturing plant retrofit), the best action is: Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode. Priority: perception management. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
        "labelEn": "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un rafraîchissement réseau de campus universitaire), la meilleure action est : Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur. Priorité : contingence risque. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche prédictif. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a university campus network refresh), the best action is: Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger. Priority: risk contingency. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. predictive approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Vrai — Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
        "labelEn": "True — Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "False — Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cette option saute l'analyse collaborative et augmente le risque.",
        "explanationWrongEn": "This option skips collaborative analysis and increases risk."
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
    "explanationCorrectFr": "Dans ce cas (un déploiement CRM de collecte pour une ONG), la meilleure action est : Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe. Priorité : dérive de périmètre. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche agile. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a nonprofit fundraising CRM rollout), the best action is: Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team. Priority: scope creep. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. agile approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement. Respecter la transparence envers l'équipe.",
        "labelEn": "Route the request through the agreed change-control process, with impact analysis before commitment. Maintain transparency with the team.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Réduire la qualité sans informer les parties prenantes.",
        "labelEn": "Reduce quality without informing stakeholders.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
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
    "explanationCorrectFr": "Dans ce cas (un pilote d'automatisation d'entrepôt logistique), la meilleure action est : Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt. Priorité : facilitation du conflit. Cela engage les bonnes personnes et évite une solution prématurée. Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés. est moins approprié car Cela crée résistance, erreurs et dette de confiance. Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation. est pire car Le report passif laisse le risque croître. Approche hybride. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.",
    "explanationCorrectEn": "In this case (a logistics warehouse automation pilot), the best action is: Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early. Priority: conflict facilitation. It engages the right people and avoids a premature solution. “Immediately impose a unilateral decision without clarifying facts or consulting key actors.” is less appropriate because This creates resistance, errors, and trust debt. “Ignore the problem until the next steering meeting, with no communication or mitigation.” is worse because Passive delay lets the risk grow. hybrid approach. Original educational content — practice only, not an official PMI item.",
    "options": [
      {
        "labelFr": "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
        "labelEn": "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
        "labelEn": "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
        "isCorrect": false,
        "explanationWrongFr": "Cela crée résistance, erreurs et dette de confiance.",
        "explanationWrongEn": "This creates resistance, errors, and trust debt."
      },
      {
        "labelFr": "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
        "labelEn": "Ignore the problem until the next steering meeting, with no communication or mitigation.",
        "isCorrect": false,
        "explanationWrongFr": "Le report passif laisse le risque croître.",
        "explanationWrongEn": "Passive delay lets the risk grow."
      },
      {
        "labelFr": "Escalader à la direction avant toute analyse d'impact.",
        "labelEn": "Escalate to executives before any impact analysis.",
        "isCorrect": false,
        "explanationWrongFr": "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
        "explanationWrongEn": "Plausible but secondary: it does not address the priority problem."
      }
    ]
  }
] as ExamBankQuestionSeed[];
