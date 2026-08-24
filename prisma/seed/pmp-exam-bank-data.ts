/**
 * Original pedagogical PMP-style exam bank (Phase 7–8).
 * NOT PMI / PMBOK copyrighted content. Educational scenarios only.
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
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "IDENTIFY",
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Dans ce contexte, l'équipe se dispute sur la priorisation du backlog pendant un daily. (contexte pédagogique #1). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "In this context, the team argues about backlog prioritization during the daily stand-up. (educational context #1). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-002",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, un sponsor exige d'ajouter une fonctionnalité critique sans changer la date. (contexte pédagogique #2).",
    "scenarioEn": "Facing this situation, a sponsor demands adding a critical feature without changing the date. (educational context #2).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-003",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "team-development",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, deux experts techniques refusent de collaborer sur une interface partagée. (contexte pédagogique #3).",
    "scenarioEn": "On this project, two technical experts refuse to collaborate on a shared interface. (educational context #3).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-004",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, un membre junior se sent ignoré lors des décisions d'architecture. (contexte pédagogique #4).",
    "scenarioEn": "In practice, a junior member feels ignored during architecture decisions. (educational context #4).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-005",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le client change de contact principal en pleine phase d'exécution. (contexte pédagogique #5).",
    "scenarioEn": "In this context, the client changes their main contact mid-execution. (educational context #5).",
    "promptFr": "Quelle est la cause racine la plus probable ?",
    "promptEn": "What is the most likely root cause?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-006",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, une tension culturelle apparaît entre deux sites offshore. (contexte pédagogique #6).",
    "scenarioEn": "Facing this situation, cultural tension appears between two offshore sites. (educational context #6).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      },
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-007",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le chef d'équipe veut punir publiquement une erreur de livraison. (contexte pédagogique #7).",
    "scenarioEn": "On this project, the team lead wants to publicly punish a delivery mistake. (educational context #7).",
    "promptFr": "Quelle est la meilleure réponse au risque ?",
    "promptEn": "What is the best risk response?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-008",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, les parties prenantes donnent des consignes contradictoires au PM. (contexte pédagogique #8).",
    "scenarioEn": "In practice, stakeholders give contradictory instructions to the PM. (educational context #8).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-009",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "team-development",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, un expert clé menace de quitter le projet avant une milestone. (contexte pédagogique #9).",
    "scenarioEn": "In this context, a key expert threatens to leave before a milestone. (educational context #9).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-010",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, l'équipe célèbre une release mais le business n'est pas satisfait. (contexte pédagogique #10).",
    "scenarioEn": "Facing this situation, the team celebrates a release but the business is not satisfied. (educational context #10).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      },
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-011",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, un mentor refuse de coacher un collègue en difficulté. (contexte pédagogique #11).",
    "scenarioEn": "On this project, a mentor refuses to coach a struggling colleague. (educational context #11).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      },
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-012",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "leadership"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "En pratique, la confiance chute après une promesse non tenue envers le client. (contexte pédagogique #12).",
    "scenarioEn": "In practice, trust drops after a broken promise to the client. (educational context #12).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-013",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, l'équipe se dispute sur la priorisation du backlog pendant un daily. (contexte pédagogique #13).",
    "scenarioEn": "In this context, the team argues about backlog prioritization during the daily stand-up. (educational context #13).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-014",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, un sponsor exige d'ajouter une fonctionnalité critique sans changer la date. (contexte pédagogique #14).",
    "scenarioEn": "Facing this situation, a sponsor demands adding a critical feature without changing the date. (educational context #14).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-015",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "team-development",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, deux experts techniques refusent de collaborer sur une interface partagée. (contexte pédagogique #15).",
    "scenarioEn": "On this project, two technical experts refuse to collaborate on a shared interface. (educational context #15).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-016",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, un membre junior se sent ignoré lors des décisions d'architecture. (contexte pédagogique #16).",
    "scenarioEn": "In practice, a junior member feels ignored during architecture decisions. (educational context #16).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-017",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le client change de contact principal en pleine phase d'exécution. (contexte pédagogique #17).",
    "scenarioEn": "In this context, the client changes their main contact mid-execution. (educational context #17).",
    "promptFr": "Quelle est la cause racine la plus probable ?",
    "promptEn": "What is the most likely root cause?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-018",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-situational-thinking",
      "leadership"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Face à cette situation, une tension culturelle apparaît entre deux sites offshore. (contexte pédagogique #18). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "Facing this situation, cultural tension appears between two offshore sites. (educational context #18). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-019",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le chef d'équipe veut punir publiquement une erreur de livraison. (contexte pédagogique #19).",
    "scenarioEn": "On this project, the team lead wants to publicly punish a delivery mistake. (educational context #19).",
    "promptFr": "Quelle est la meilleure réponse au risque ?",
    "promptEn": "What is the best risk response?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-020",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, les parties prenantes donnent des consignes contradictoires au PM. (contexte pédagogique #20).",
    "scenarioEn": "In practice, stakeholders give contradictory instructions to the PM. (educational context #20).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-021",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "team-development",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, un expert clé menace de quitter le projet avant une milestone. (contexte pédagogique #21).",
    "scenarioEn": "In this context, a key expert threatens to leave before a milestone. (educational context #21).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-022",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, l'équipe célèbre une release mais le business n'est pas satisfait. (contexte pédagogique #22).",
    "scenarioEn": "Facing this situation, the team celebrates a release but the business is not satisfied. (educational context #22).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      },
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-023",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "HYBRID",
    "learningObjective": "APPLY",
    "skills": [
      "communication",
      "pmp-situational-thinking"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur ce projet, un mentor refuse de coacher un collègue en difficulté. (contexte pédagogique #23).",
    "scenarioEn": "On this project, a mentor refuses to coach a struggling colleague. (educational context #23).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-024",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-situational-thinking",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, la confiance chute après une promesse non tenue envers le client. (contexte pédagogique #24).",
    "scenarioEn": "In practice, trust drops after a broken promise to the client. (educational context #24).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-025",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, l'équipe se dispute sur la priorisation du backlog pendant un daily. (contexte pédagogique #25).",
    "scenarioEn": "In this context, the team argues about backlog prioritization during the daily stand-up. (educational context #25).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-026",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, un sponsor exige d'ajouter une fonctionnalité critique sans changer la date. (contexte pédagogique #26).",
    "scenarioEn": "Facing this situation, a sponsor demands adding a critical feature without changing the date. (educational context #26).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-027",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "team-development",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, deux experts techniques refusent de collaborer sur une interface partagée. (contexte pédagogique #27).",
    "scenarioEn": "On this project, two technical experts refuse to collaborate on a shared interface. (educational context #27).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-028",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, un membre junior se sent ignoré lors des décisions d'architecture. (contexte pédagogique #28).",
    "scenarioEn": "In practice, a junior member feels ignored during architecture decisions. (educational context #28).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-029",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le client change de contact principal en pleine phase d'exécution. (contexte pédagogique #29).",
    "scenarioEn": "In this context, the client changes their main contact mid-execution. (educational context #29).",
    "promptFr": "Quelle est la cause racine la plus probable ?",
    "promptEn": "What is the most likely root cause?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-030",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, une tension culturelle apparaît entre deux sites offshore. (contexte pédagogique #30).",
    "scenarioEn": "Facing this situation, cultural tension appears between two offshore sites. (educational context #30).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      },
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-031",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le chef d'équipe veut punir publiquement une erreur de livraison. (contexte pédagogique #31).",
    "scenarioEn": "On this project, the team lead wants to publicly punish a delivery mistake. (educational context #31).",
    "promptFr": "Quelle est la meilleure réponse au risque ?",
    "promptEn": "What is the best risk response?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-032",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, les parties prenantes donnent des consignes contradictoires au PM. (contexte pédagogique #32).",
    "scenarioEn": "In practice, stakeholders give contradictory instructions to the PM. (educational context #32).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-033",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "team-development",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, un expert clé menace de quitter le projet avant une milestone. (contexte pédagogique #33).",
    "scenarioEn": "In this context, a key expert threatens to leave before a milestone. (educational context #33).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-034",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "communication"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Face à cette situation, l'équipe célèbre une release mais le business n'est pas satisfait. (contexte pédagogique #34).",
    "scenarioEn": "Facing this situation, the team celebrates a release but the business is not satisfied. (educational context #34).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-035",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "communication",
      "pmp-situational-thinking"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur ce projet, un mentor refuse de coacher un collègue en difficulté. (contexte pédagogique #35). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "On this project, a mentor refuses to coach a struggling colleague. (educational context #35). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-036",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-situational-thinking",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, la confiance chute après une promesse non tenue envers le client. (contexte pédagogique #36).",
    "scenarioEn": "In practice, trust drops after a broken promise to the client. (educational context #36).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-037",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, l'équipe se dispute sur la priorisation du backlog pendant un daily. (contexte pédagogique #37).",
    "scenarioEn": "In this context, the team argues about backlog prioritization during the daily stand-up. (educational context #37).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-038",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, un sponsor exige d'ajouter une fonctionnalité critique sans changer la date. (contexte pédagogique #38).",
    "scenarioEn": "Facing this situation, a sponsor demands adding a critical feature without changing the date. (educational context #38).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-039",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "team-development",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, deux experts techniques refusent de collaborer sur une interface partagée. (contexte pédagogique #39).",
    "scenarioEn": "On this project, two technical experts refuse to collaborate on a shared interface. (educational context #39).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-040",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, un membre junior se sent ignoré lors des décisions d'architecture. (contexte pédagogique #40).",
    "scenarioEn": "In practice, a junior member feels ignored during architecture decisions. (educational context #40).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-041",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le client change de contact principal en pleine phase d'exécution. (contexte pédagogique #41).",
    "scenarioEn": "In this context, the client changes their main contact mid-execution. (educational context #41).",
    "promptFr": "Quelle est la cause racine la plus probable ?",
    "promptEn": "What is the most likely root cause?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-042",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, une tension culturelle apparaît entre deux sites offshore. (contexte pédagogique #42).",
    "scenarioEn": "Facing this situation, cultural tension appears between two offshore sites. (educational context #42).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      },
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-043",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le chef d'équipe veut punir publiquement une erreur de livraison. (contexte pédagogique #43).",
    "scenarioEn": "On this project, the team lead wants to publicly punish a delivery mistake. (educational context #43).",
    "promptFr": "Quelle est la meilleure réponse au risque ?",
    "promptEn": "What is the best risk response?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-044",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, les parties prenantes donnent des consignes contradictoires au PM. (contexte pédagogique #44).",
    "scenarioEn": "In practice, stakeholders give contradictory instructions to the PM. (educational context #44).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-045",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "CONFLICT",
    "learningObjective": "APPLY",
    "skills": [
      "team-development",
      "stakeholder-engagement"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Dans ce contexte, un expert clé menace de quitter le projet avant une milestone. (contexte pédagogique #45).",
    "scenarioEn": "In this context, a key expert threatens to leave before a milestone. (educational context #45).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-046",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, l'équipe célèbre une release mais le business n'est pas satisfait. (contexte pédagogique #46).",
    "scenarioEn": "Facing this situation, the team celebrates a release but the business is not satisfied. (educational context #46).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      },
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-047",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, un mentor refuse de coacher un collègue en difficulté. (contexte pédagogique #47).",
    "scenarioEn": "On this project, a mentor refuses to coach a struggling colleague. (educational context #47).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      },
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-048",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-situational-thinking",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, la confiance chute après une promesse non tenue envers le client. (contexte pédagogique #48).",
    "scenarioEn": "In practice, trust drops after a broken promise to the client. (educational context #48).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-049",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, l'équipe se dispute sur la priorisation du backlog pendant un daily. (contexte pédagogique #49).",
    "scenarioEn": "In this context, the team argues about backlog prioritization during the daily stand-up. (educational context #49).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-050",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, un sponsor exige d'ajouter une fonctionnalité critique sans changer la date. (contexte pédagogique #50).",
    "scenarioEn": "Facing this situation, a sponsor demands adding a critical feature without changing the date. (educational context #50).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-051",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "team-development",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, deux experts techniques refusent de collaborer sur une interface partagée. (contexte pédagogique #51).",
    "scenarioEn": "On this project, two technical experts refuse to collaborate on a shared interface. (educational context #51).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-052",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "IDENTIFY",
    "skills": [
      "stakeholder-engagement",
      "communication"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "En pratique, un membre junior se sent ignoré lors des décisions d'architecture. (contexte pédagogique #52). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "In practice, a junior member feels ignored during architecture decisions. (educational context #52). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-053",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "ANALYZE",
    "skills": [
      "communication",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le client change de contact principal en pleine phase d'exécution. (contexte pédagogique #53).",
    "scenarioEn": "In this context, the client changes their main contact mid-execution. (educational context #53).",
    "promptFr": "Quelle est la cause racine la plus probable ?",
    "promptEn": "What is the most likely root cause?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-054",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, une tension culturelle apparaît entre deux sites offshore. (contexte pédagogique #54).",
    "scenarioEn": "Facing this situation, cultural tension appears between two offshore sites. (educational context #54).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      },
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-055",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le chef d'équipe veut punir publiquement une erreur de livraison. (contexte pédagogique #55).",
    "scenarioEn": "On this project, the team lead wants to publicly punish a delivery mistake. (educational context #55).",
    "promptFr": "Quelle est la meilleure réponse au risque ?",
    "promptEn": "What is the best risk response?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-056",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "RISK",
    "learningObjective": "IDENTIFY",
    "skills": [
      "risk-management",
      "schedule"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Dans ce contexte, le diagramme de Gantt montre un retard de 3 semaines sur le chemin critique. (contexte pédagogique #56). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "In this context, the Gantt chart shows a 3-week delay on the critical path. (educational context #56). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-057",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "schedule",
      "cost"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, un risque fournisseurs se matérialise : le lot principal est en rupture. (contexte pédagogique #57).",
    "scenarioEn": "Facing this situation, a supplier risk materializes: the main lot is out of stock. (educational context #57).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-058",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "cost",
      "quality"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, la baseline de coûts a déjà été dépassée de 12%. (contexte pédagogique #58).",
    "scenarioEn": "On this project, the cost baseline has already been exceeded by 12%. (educational context #58).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-059",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "quality",
      "procurement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, des défauts qualité se répètent dans les livrables d'intégration. (contexte pédagogique #59).",
    "scenarioEn": "In practice, quality defects keep recurring in integration deliverables. (educational context #59).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-060",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "ANALYZE",
    "skills": [
      "procurement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, un contrat de prestation arrive à échéance pendant l'exécution. (contexte pédagogique #60).",
    "scenarioEn": "In this context, a service contract expires during execution. (educational context #60).",
    "promptFr": "Quelle est la cause racine la plus probable ?",
    "promptEn": "What is the most likely root cause?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-061",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, une demande de changement majeure arrive sans analyse d'impact. (contexte pédagogique #61).",
    "scenarioEn": "Facing this situation, a major change request arrives without impact analysis. (educational context #61).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      },
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-062",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "governance",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le plan de communication n'est plus aligné avec les nouveaux sponsors. (contexte pédagogique #62).",
    "scenarioEn": "On this project, the communication plan is no longer aligned with new sponsors. (educational context #62).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-063",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, les estimations initiales se révèlent trop optimistes en revue de sprint. (contexte pédagogique #63).",
    "scenarioEn": "In practice, initial estimates prove too optimistic in sprint review. (educational context #63).",
    "promptFr": "Comment traiter ce changement correctement ?",
    "promptEn": "How should this change be handled correctly?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-064",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le comité de gouvernance demande un reporting KPI hebdomadaire. (contexte pédagogique #64).",
    "scenarioEn": "In this context, the governance committee asks for weekly KPI reporting. (educational context #64).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-065",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "cost"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, une dépendance externe bloque le démarrage d'un work package. (contexte pédagogique #65).",
    "scenarioEn": "Facing this situation, an external dependency blocks starting a work package. (educational context #65).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      },
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-066",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "cost",
      "quality"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le diagramme de Gantt montre un retard de 3 semaines sur le chemin critique. (contexte pédagogique #66).",
    "scenarioEn": "On this project, the Gantt chart shows a 3-week delay on the critical path. (educational context #66).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      },
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-067",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "quality",
      "procurement"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "En pratique, un risque fournisseurs se matérialise : le lot principal est en rupture. (contexte pédagogique #67).",
    "scenarioEn": "In practice, a supplier risk materializes: the main lot is out of stock. (educational context #67).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-068",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "procurement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, la baseline de coûts a déjà été dépassée de 12%. (contexte pédagogique #68).",
    "scenarioEn": "In this context, the cost baseline has already been exceeded by 12%. (educational context #68).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-069",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "change-management",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, des défauts qualité se répètent dans les livrables d'intégration. (contexte pédagogique #69).",
    "scenarioEn": "Facing this situation, quality defects keep recurring in integration deliverables. (educational context #69).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-070",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "governance",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, un contrat de prestation arrive à échéance pendant l'exécution. (contexte pédagogique #70).",
    "scenarioEn": "On this project, a service contract expires during execution. (educational context #70).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-071",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, une demande de changement majeure arrive sans analyse d'impact. (contexte pédagogique #71).",
    "scenarioEn": "In practice, a major change request arrives without impact analysis. (educational context #71).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-072",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "ANALYZE",
    "skills": [
      "risk-management",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le plan de communication n'est plus aligné avec les nouveaux sponsors. (contexte pédagogique #72).",
    "scenarioEn": "In this context, the communication plan is no longer aligned with new sponsors. (educational context #72).",
    "promptFr": "Quelle est la cause racine la plus probable ?",
    "promptEn": "What is the most likely root cause?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-073",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "IDENTIFY",
    "skills": [
      "schedule",
      "cost"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Face à cette situation, les estimations initiales se révèlent trop optimistes en revue de sprint. (contexte pédagogique #73). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "Facing this situation, initial estimates prove too optimistic in sprint review. (educational context #73). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-074",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "cost",
      "quality"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le comité de gouvernance demande un reporting KPI hebdomadaire. (contexte pédagogique #74).",
    "scenarioEn": "On this project, the governance committee asks for weekly KPI reporting. (educational context #74).",
    "promptFr": "Quelle est la meilleure réponse au risque ?",
    "promptEn": "What is the best risk response?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-075",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "quality",
      "procurement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, une dépendance externe bloque le démarrage d'un work package. (contexte pédagogique #75).",
    "scenarioEn": "In practice, an external dependency blocks starting a work package. (educational context #75).",
    "promptFr": "Comment traiter ce changement correctement ?",
    "promptEn": "How should this change be handled correctly?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-076",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "procurement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le diagramme de Gantt montre un retard de 3 semaines sur le chemin critique. (contexte pédagogique #76).",
    "scenarioEn": "In this context, the Gantt chart shows a 3-week delay on the critical path. (educational context #76).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-077",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, un risque fournisseurs se matérialise : le lot principal est en rupture. (contexte pédagogique #77).",
    "scenarioEn": "Facing this situation, a supplier risk materializes: the main lot is out of stock. (educational context #77).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      },
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-078",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "governance",
      "pmp-situational-thinking"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur ce projet, la baseline de coûts a déjà été dépassée de 12%. (contexte pédagogique #78).",
    "scenarioEn": "On this project, the cost baseline has already been exceeded by 12%. (educational context #78).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-079",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-situational-thinking",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, des défauts qualité se répètent dans les livrables d'intégration. (contexte pédagogique #79).",
    "scenarioEn": "In practice, quality defects keep recurring in integration deliverables. (educational context #79).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-080",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, un contrat de prestation arrive à échéance pendant l'exécution. (contexte pédagogique #80).",
    "scenarioEn": "In this context, a service contract expires during execution. (educational context #80).",
    "promptFr": "Quelle est la meilleure réponse au risque ?",
    "promptEn": "What is the best risk response?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-081",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "schedule",
      "cost"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, une demande de changement majeure arrive sans analyse d'impact. (contexte pédagogique #81).",
    "scenarioEn": "Facing this situation, a major change request arrives without impact analysis. (educational context #81).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-082",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "cost",
      "quality"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le plan de communication n'est plus aligné avec les nouveaux sponsors. (contexte pédagogique #82).",
    "scenarioEn": "On this project, the communication plan is no longer aligned with new sponsors. (educational context #82).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-083",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "quality",
      "procurement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, les estimations initiales se révèlent trop optimistes en revue de sprint. (contexte pédagogique #83).",
    "scenarioEn": "In practice, initial estimates prove too optimistic in sprint review. (educational context #83).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-084",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "ANALYZE",
    "skills": [
      "procurement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le comité de gouvernance demande un reporting KPI hebdomadaire. (contexte pédagogique #84).",
    "scenarioEn": "In this context, the governance committee asks for weekly KPI reporting. (educational context #84).",
    "promptFr": "Quelle est la cause racine la plus probable ?",
    "promptEn": "What is the most likely root cause?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-085",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, une dépendance externe bloque le démarrage d'un work package. (contexte pédagogique #85).",
    "scenarioEn": "Facing this situation, an external dependency blocks starting a work package. (educational context #85).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      },
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-086",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "governance",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le diagramme de Gantt montre un retard de 3 semaines sur le chemin critique. (contexte pédagogique #86).",
    "scenarioEn": "On this project, the Gantt chart shows a 3-week delay on the critical path. (educational context #86).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-087",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, un risque fournisseurs se matérialise : le lot principal est en rupture. (contexte pédagogique #87).",
    "scenarioEn": "In practice, a supplier risk materializes: the main lot is out of stock. (educational context #87).",
    "promptFr": "Comment traiter ce changement correctement ?",
    "promptEn": "How should this change be handled correctly?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-088",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, la baseline de coûts a déjà été dépassée de 12%. (contexte pédagogique #88).",
    "scenarioEn": "In this context, the cost baseline has already been exceeded by 12%. (educational context #88).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-089",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "cost"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Face à cette situation, des défauts qualité se répètent dans les livrables d'intégration. (contexte pédagogique #89).",
    "scenarioEn": "Facing this situation, quality defects keep recurring in integration deliverables. (educational context #89).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-090",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "cost",
      "quality"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur ce projet, un contrat de prestation arrive à échéance pendant l'exécution. (contexte pédagogique #90). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "On this project, a service contract expires during execution. (educational context #90). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-091",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "quality",
      "procurement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, une demande de changement majeure arrive sans analyse d'impact. (contexte pédagogique #91).",
    "scenarioEn": "In practice, a major change request arrives without impact analysis. (educational context #91).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-092",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "procurement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le plan de communication n'est plus aligné avec les nouveaux sponsors. (contexte pédagogique #92).",
    "scenarioEn": "In this context, the communication plan is no longer aligned with new sponsors. (educational context #92).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-093",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "change-management",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, les estimations initiales se révèlent trop optimistes en revue de sprint. (contexte pédagogique #93).",
    "scenarioEn": "Facing this situation, initial estimates prove too optimistic in sprint review. (educational context #93).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-094",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "governance",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le comité de gouvernance demande un reporting KPI hebdomadaire. (contexte pédagogique #94).",
    "scenarioEn": "On this project, the governance committee asks for weekly KPI reporting. (educational context #94).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-095",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, une dépendance externe bloque le démarrage d'un work package. (contexte pédagogique #95).",
    "scenarioEn": "In practice, an external dependency blocks starting a work package. (educational context #95).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-096",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "ANALYZE",
    "skills": [
      "risk-management",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le diagramme de Gantt montre un retard de 3 semaines sur le chemin critique. (contexte pédagogique #96).",
    "scenarioEn": "In this context, the Gantt chart shows a 3-week delay on the critical path. (educational context #96).",
    "promptFr": "Quelle est la cause racine la plus probable ?",
    "promptEn": "What is the most likely root cause?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-097",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "cost"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, un risque fournisseurs se matérialise : le lot principal est en rupture. (contexte pédagogique #97).",
    "scenarioEn": "Facing this situation, a supplier risk materializes: the main lot is out of stock. (educational context #97).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      },
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-098",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "cost",
      "quality"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, la baseline de coûts a déjà été dépassée de 12%. (contexte pédagogique #98).",
    "scenarioEn": "On this project, the cost baseline has already been exceeded by 12%. (educational context #98).",
    "promptFr": "Quelle est la meilleure réponse au risque ?",
    "promptEn": "What is the best risk response?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-099",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "quality",
      "procurement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, des défauts qualité se répètent dans les livrables d'intégration. (contexte pédagogique #99).",
    "scenarioEn": "In practice, quality defects keep recurring in integration deliverables. (educational context #99).",
    "promptFr": "Comment traiter ce changement correctement ?",
    "promptEn": "How should this change be handled correctly?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-100",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "CONFLICT",
    "learningObjective": "APPLY",
    "skills": [
      "procurement",
      "change-management"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Dans ce contexte, un contrat de prestation arrive à échéance pendant l'exécution. (contexte pédagogique #100).",
    "scenarioEn": "In this context, a service contract expires during execution. (educational context #100).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-101",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, une demande de changement majeure arrive sans analyse d'impact. (contexte pédagogique #101).",
    "scenarioEn": "Facing this situation, a major change request arrives without impact analysis. (educational context #101).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      },
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-102",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "governance",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le plan de communication n'est plus aligné avec les nouveaux sponsors. (contexte pédagogique #102).",
    "scenarioEn": "On this project, the communication plan is no longer aligned with new sponsors. (educational context #102).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      },
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-103",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-situational-thinking",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, les estimations initiales se révèlent trop optimistes en revue de sprint. (contexte pédagogique #103).",
    "scenarioEn": "In practice, initial estimates prove too optimistic in sprint review. (educational context #103).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-104",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "risk-management",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le comité de gouvernance demande un reporting KPI hebdomadaire. (contexte pédagogique #104).",
    "scenarioEn": "In this context, the governance committee asks for weekly KPI reporting. (educational context #104).",
    "promptFr": "Quelle est la meilleure réponse au risque ?",
    "promptEn": "What is the best risk response?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-105",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "schedule",
      "cost"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, une dépendance externe bloque le démarrage d'un work package. (contexte pédagogique #105).",
    "scenarioEn": "Facing this situation, an external dependency blocks starting a work package. (educational context #105).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-106",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "IDENTIFY",
    "skills": [
      "business-value",
      "governance"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Dans ce contexte, une nouvelle régulation sectorielle entre en vigueur dans 6 semaines. (contexte pédagogique #106). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "In this context, a new industry regulation takes effect in 6 weeks. (educational context #106). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-107",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "governance",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, la stratégie entreprise pivot vers un autre marché prioritaire. (contexte pédagogique #107).",
    "scenarioEn": "Facing this situation, company strategy pivots toward another priority market. (educational context #107).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-108",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "stakeholder-engagement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le business case initial repose sur des hypothèses de volume obsolètes. (contexte pédagogique #108).",
    "scenarioEn": "On this project, the initial business case relies on outdated volume assumptions. (educational context #108).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-109",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, un concurrent lance une offre similaire avant la mise en production. (contexte pédagogique #109).",
    "scenarioEn": "In practice, a competitor launches a similar offer before go-live. (educational context #109).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-110",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-situational-thinking",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le sponsor exécutif est remplacé et remet en cause la valeur du projet. (contexte pédagogique #110).",
    "scenarioEn": "In this context, the executive sponsor is replaced and questions project value. (educational context #110).",
    "promptFr": "Quelle est la cause racine la plus probable ?",
    "promptEn": "What is the most likely root cause?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-111",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "business-value",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, le comité d'investissement demande une révision des bénéfices attendus. (contexte pédagogique #111).",
    "scenarioEn": "Facing this situation, the investment committee asks to revise expected benefits. (educational context #111).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      },
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-112",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "governance",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, une contrainte ESG change les critères d'acceptation du livrable. (contexte pédagogique #112).",
    "scenarioEn": "On this project, an ESG constraint changes deliverable acceptance criteria. (educational context #112).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-113",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, une nouvelle régulation sectorielle entre en vigueur dans 6 semaines. (contexte pédagogique #113).",
    "scenarioEn": "In practice, a new industry regulation takes effect in 6 weeks. (educational context #113).",
    "promptFr": "Comment traiter ce changement correctement ?",
    "promptEn": "How should this change be handled correctly?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-114",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "change-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, la stratégie entreprise pivot vers un autre marché prioritaire. (contexte pédagogique #114).",
    "scenarioEn": "In this context, company strategy pivots toward another priority market. (educational context #114).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-115",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, le business case initial repose sur des hypothèses de volume obsolètes. (contexte pédagogique #115).",
    "scenarioEn": "Facing this situation, the initial business case relies on outdated volume assumptions. (educational context #115).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      },
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-116",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "business-value",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, un concurrent lance une offre similaire avant la mise en production. (contexte pédagogique #116).",
    "scenarioEn": "On this project, a competitor launches a similar offer before go-live. (educational context #116).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      },
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-117",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "governance",
      "stakeholder-engagement"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "En pratique, le sponsor exécutif est remplacé et remet en cause la valeur du projet. (contexte pédagogique #117).",
    "scenarioEn": "In practice, the executive sponsor is replaced and questions project value. (educational context #117).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-118",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le comité d'investissement demande une révision des bénéfices attendus. (contexte pédagogique #118).",
    "scenarioEn": "In this context, the investment committee asks to revise expected benefits. (educational context #118).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-119",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "change-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, une contrainte ESG change les critères d'acceptation du livrable. (contexte pédagogique #119).",
    "scenarioEn": "Facing this situation, an ESG constraint changes deliverable acceptance criteria. (educational context #119).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-120",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-situational-thinking",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, une nouvelle régulation sectorielle entre en vigueur dans 6 semaines. (contexte pédagogique #120).",
    "scenarioEn": "On this project, a new industry regulation takes effect in 6 weeks. (educational context #120).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-121",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "business-value",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, la stratégie entreprise pivot vers un autre marché prioritaire. (contexte pédagogique #121).",
    "scenarioEn": "In practice, company strategy pivots toward another priority market. (educational context #121).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-122",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le business case initial repose sur des hypothèses de volume obsolètes. (contexte pédagogique #122).",
    "scenarioEn": "In this context, the initial business case relies on outdated volume assumptions. (educational context #122).",
    "promptFr": "Quelle est la cause racine la plus probable ?",
    "promptEn": "What is the most likely root cause?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-123",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "IDENTIFY",
    "skills": [
      "stakeholder-engagement",
      "change-management"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Face à cette situation, un concurrent lance une offre similaire avant la mise en production. (contexte pédagogique #123). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "Facing this situation, a competitor launches a similar offer before go-live. (educational context #123). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-124",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "change-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le sponsor exécutif est remplacé et remet en cause la valeur du projet. (contexte pédagogique #124).",
    "scenarioEn": "On this project, the executive sponsor is replaced and questions project value. (educational context #124).",
    "promptFr": "Quelle est la meilleure réponse au risque ?",
    "promptEn": "What is the best risk response?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-125",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, le comité d'investissement demande une révision des bénéfices attendus. (contexte pédagogique #125).",
    "scenarioEn": "In practice, the investment committee asks to revise expected benefits. (educational context #125).",
    "promptFr": "Comment traiter ce changement correctement ?",
    "promptEn": "How should this change be handled correctly?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-126",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "CONFLICT",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, une contrainte ESG change les critères d'acceptation du livrable. (contexte pédagogique #126).",
    "scenarioEn": "In this context, an ESG constraint changes deliverable acceptance criteria. (educational context #126).",
    "promptFr": "Quelle est la meilleure façon de gérer ce conflit ?",
    "promptEn": "What is the best way to handle this conflict?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-127",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "governance",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, une nouvelle régulation sectorielle entre en vigueur dans 6 semaines. (contexte pédagogique #127).",
    "scenarioEn": "Facing this situation, a new industry regulation takes effect in 6 weeks. (educational context #127).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      },
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-128",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "HYBRID",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "change-management"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur ce projet, la stratégie entreprise pivot vers un autre marché prioritaire. (contexte pédagogique #128).",
    "scenarioEn": "On this project, company strategy pivots toward another priority market. (educational context #128).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-129",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "change-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, le business case initial repose sur des hypothèses de volume obsolètes. (contexte pédagogique #129).",
    "scenarioEn": "In practice, the initial business case relies on outdated volume assumptions. (educational context #129).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-130",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-situational-thinking",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, un concurrent lance une offre similaire avant la mise en production. (contexte pédagogique #130).",
    "scenarioEn": "In this context, a competitor launches a similar offer before go-live. (educational context #130).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-131",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, le sponsor exécutif est remplacé et remet en cause la valeur du projet. (contexte pédagogique #131).",
    "scenarioEn": "Facing this situation, the executive sponsor is replaced and questions project value. (educational context #131).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-132",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "governance",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le comité d'investissement demande une révision des bénéfices attendus. (contexte pédagogique #132).",
    "scenarioEn": "On this project, the investment committee asks to revise expected benefits. (educational context #132).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-133",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, une contrainte ESG change les critères d'acceptation du livrable. (contexte pédagogique #133).",
    "scenarioEn": "In practice, an ESG constraint changes deliverable acceptance criteria. (educational context #133).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-134",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "ROOT_CAUSE",
    "learningObjective": "ANALYZE",
    "skills": [
      "change-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, une nouvelle régulation sectorielle entre en vigueur dans 6 semaines. (contexte pédagogique #134).",
    "scenarioEn": "In this context, a new industry regulation takes effect in 6 weeks. (educational context #134).",
    "promptFr": "Quelle est la cause racine la plus probable ?",
    "promptEn": "What is the most likely root cause?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-135",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, la stratégie entreprise pivot vers un autre marché prioritaire. (contexte pédagogique #135).",
    "scenarioEn": "Facing this situation, company strategy pivots toward another priority market. (educational context #135).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      },
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-136",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "RISK",
    "learningObjective": "DECIDE",
    "skills": [
      "business-value",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le business case initial repose sur des hypothèses de volume obsolètes. (contexte pédagogique #136).",
    "scenarioEn": "On this project, the initial business case relies on outdated volume assumptions. (educational context #136).",
    "promptFr": "Quelle est la meilleure réponse au risque ?",
    "promptEn": "What is the best risk response?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-137",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "governance",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, un concurrent lance une offre similaire avant la mise en production. (contexte pédagogique #137).",
    "scenarioEn": "In practice, a competitor launches a similar offer before go-live. (educational context #137).",
    "promptFr": "Comment traiter ce changement correctement ?",
    "promptEn": "How should this change be handled correctly?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-138",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "stakeholder-engagement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le sponsor exécutif est remplacé et remet en cause la valeur du projet. (contexte pédagogique #138).",
    "scenarioEn": "In this context, the executive sponsor is replaced and questions project value. (educational context #138).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-139",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "change-management",
      "pmp-situational-thinking"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Face à cette situation, le comité d'investissement demande une révision des bénéfices attendus. (contexte pédagogique #139).",
    "scenarioEn": "Facing this situation, the investment committee asks to revise expected benefits. (educational context #139).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-140",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-situational-thinking",
      "business-value"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Sur ce projet, une contrainte ESG change les critères d'acceptation du livrable. (contexte pédagogique #140). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "On this project, an ESG constraint changes deliverable acceptance criteria. (educational context #140). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-141",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "business-value",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, une nouvelle régulation sectorielle entre en vigueur dans 6 semaines. (contexte pédagogique #141).",
    "scenarioEn": "In practice, a new industry regulation takes effect in 6 weeks. (educational context #141).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-142",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "FIRST_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "governance",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, la stratégie entreprise pivot vers un autre marché prioritaire. (contexte pédagogique #142).",
    "scenarioEn": "In this context, company strategy pivots toward another priority market. (educational context #142).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-143",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "stakeholder-engagement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, le business case initial repose sur des hypothèses de volume obsolètes. (contexte pédagogique #143).",
    "scenarioEn": "Facing this situation, the initial business case relies on outdated volume assumptions. (educational context #143).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-144",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "scenarioType": "BEST_ACTION",
    "learningObjective": "ANALYZE",
    "skills": [
      "change-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, un concurrent lance une offre similaire avant la mise en production. (contexte pédagogique #144).",
    "scenarioEn": "On this project, a competitor launches a similar offer before go-live. (educational context #144).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-145",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, le sponsor exécutif est remplacé et remet en cause la valeur du projet. (contexte pédagogique #145).",
    "scenarioEn": "In practice, the executive sponsor is replaced and questions project value. (educational context #145).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-146",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Dans ce contexte, le Product Owner ajoute des stories en cours de sprint sans négociation. (contexte pédagogique #146). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "In this context, the Product Owner adds stories mid-sprint without negotiation. (educational context #146). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-147",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, l'équipe veut allonger le sprint pour 'finir' plus de stories. (contexte pédagogique #147).",
    "scenarioEn": "Facing this situation, the team wants to extend the sprint to 'finish' more stories. (educational context #147).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-148",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "team-development",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, la Definition of Done est floue et les demos sont partielles. (contexte pédagogique #148).",
    "scenarioEn": "On this project, the Definition of Done is unclear and demos are partial. (educational context #148).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-149",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, le Scrum Master veut décider à la place de l'équipe. (contexte pédagogique #149).",
    "scenarioEn": "In practice, the Scrum Master wants to decide instead of the team. (educational context #149).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-150",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, les rétrospectives n'aboutissent à aucune action suivie. (contexte pédagogique #150).",
    "scenarioEn": "In this context, retrospectives produce no followed-up actions. (educational context #150).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-151",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, le backlog n'est pas affiné et la planification de sprint échoue. (contexte pédagogique #151).",
    "scenarioEn": "Facing this situation, the backlog is not refined and sprint planning fails. (educational context #151).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      },
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-152",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "team-development",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le Product Owner ajoute des stories en cours de sprint sans négociation. (contexte pédagogique #152).",
    "scenarioEn": "On this project, the Product Owner adds stories mid-sprint without negotiation. (educational context #152).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-153",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, l'équipe veut allonger le sprint pour 'finir' plus de stories. (contexte pédagogique #153).",
    "scenarioEn": "In practice, the team wants to extend the sprint to 'finish' more stories. (educational context #153).",
    "promptFr": "Comment traiter ce changement correctement ?",
    "promptEn": "How should this change be handled correctly?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-154",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, la Definition of Done est floue et les demos sont partielles. (contexte pédagogique #154).",
    "scenarioEn": "In this context, the Definition of Done is unclear and demos are partial. (educational context #154).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-155",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, le Scrum Master veut décider à la place de l'équipe. (contexte pédagogique #155).",
    "scenarioEn": "Facing this situation, the Scrum Master wants to decide instead of the team. (educational context #155).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      },
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-156",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "team-development",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, les rétrospectives n'aboutissent à aucune action suivie. (contexte pédagogique #156).",
    "scenarioEn": "On this project, retrospectives produce no followed-up actions. (educational context #156).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      },
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-157",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "agile-mindset"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "En pratique, le backlog n'est pas affiné et la planification de sprint échoue. (contexte pédagogique #157).",
    "scenarioEn": "In practice, the backlog is not refined and sprint planning fails. (educational context #157).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-158",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le Product Owner ajoute des stories en cours de sprint sans négociation. (contexte pédagogique #158).",
    "scenarioEn": "In this context, the Product Owner adds stories mid-sprint without negotiation. (educational context #158).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-159",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, l'équipe veut allonger le sprint pour 'finir' plus de stories. (contexte pédagogique #159).",
    "scenarioEn": "Facing this situation, the team wants to extend the sprint to 'finish' more stories. (educational context #159).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-160",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "team-development",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, la Definition of Done est floue et les demos sont partielles. (contexte pédagogique #160).",
    "scenarioEn": "On this project, the Definition of Done is unclear and demos are partial. (educational context #160).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-161",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, le Scrum Master veut décider à la place de l'équipe. (contexte pédagogique #161).",
    "scenarioEn": "In practice, the Scrum Master wants to decide instead of the team. (educational context #161).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-162",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, les rétrospectives n'aboutissent à aucune action suivie. (contexte pédagogique #162).",
    "scenarioEn": "In this context, retrospectives produce no followed-up actions. (educational context #162).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-163",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Face à cette situation, le backlog n'est pas affiné et la planification de sprint échoue. (contexte pédagogique #163). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "Facing this situation, the backlog is not refined and sprint planning fails. (educational context #163). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-164",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "team-development",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le Product Owner ajoute des stories en cours de sprint sans négociation. (contexte pédagogique #164).",
    "scenarioEn": "On this project, the Product Owner adds stories mid-sprint without negotiation. (educational context #164).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-165",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, l'équipe veut allonger le sprint pour 'finir' plus de stories. (contexte pédagogique #165).",
    "scenarioEn": "In practice, the team wants to extend the sprint to 'finish' more stories. (educational context #165).",
    "promptFr": "Comment traiter ce changement correctement ?",
    "promptEn": "How should this change be handled correctly?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-166",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, la Definition of Done est floue et les demos sont partielles. (contexte pédagogique #166).",
    "scenarioEn": "In this context, the Definition of Done is unclear and demos are partial. (educational context #166).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-167",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, le Scrum Master veut décider à la place de l'équipe. (contexte pédagogique #167).",
    "scenarioEn": "Facing this situation, the Scrum Master wants to decide instead of the team. (educational context #167).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      },
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-168",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "team-development",
      "pmp-situational-thinking"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur ce projet, les rétrospectives n'aboutissent à aucune action suivie. (contexte pédagogique #168).",
    "scenarioEn": "On this project, retrospectives produce no followed-up actions. (educational context #168).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-169",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "pmp-situational-thinking",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, le backlog n'est pas affiné et la planification de sprint échoue. (contexte pédagogique #169).",
    "scenarioEn": "In practice, the backlog is not refined and sprint planning fails. (educational context #169).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-170",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le Product Owner ajoute des stories en cours de sprint sans négociation. (contexte pédagogique #170).",
    "scenarioEn": "In this context, the Product Owner adds stories mid-sprint without negotiation. (educational context #170).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-171",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, l'équipe veut allonger le sprint pour 'finir' plus de stories. (contexte pédagogique #171).",
    "scenarioEn": "Facing this situation, the team wants to extend the sprint to 'finish' more stories. (educational context #171).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-172",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "team-development",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, la Definition of Done est floue et les demos sont partielles. (contexte pédagogique #172).",
    "scenarioEn": "On this project, the Definition of Done is unclear and demos are partial. (educational context #172).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-173",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, le Scrum Master veut décider à la place de l'équipe. (contexte pédagogique #173).",
    "scenarioEn": "In practice, the Scrum Master wants to decide instead of the team. (educational context #173).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-174",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, les rétrospectives n'aboutissent à aucune action suivie. (contexte pédagogique #174).",
    "scenarioEn": "In this context, retrospectives produce no followed-up actions. (educational context #174).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-175",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, le backlog n'est pas affiné et la planification de sprint échoue. (contexte pédagogique #175).",
    "scenarioEn": "Facing this situation, the backlog is not refined and sprint planning fails. (educational context #175).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      },
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-176",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "IDENTIFY",
    "skills": [
      "hybrid-delivery",
      "pmp-hybrid"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Dans ce contexte, la phase réglementaire est prédictive, le front-end est agile. (contexte pédagogique #176). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "In this context, the regulatory phase is predictive while the front-end is agile. (educational context #176). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-177",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "pmp-hybrid",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, le client veut un contrat à prix fixe mais des sprints itératifs. (contexte pédagogique #177).",
    "scenarioEn": "Facing this situation, the client wants a fixed-price contract with iterative sprints. (educational context #177).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-178",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "governance",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le PMO exige un plan baseline alors que l'équipe livre par increments. (contexte pédagogique #178).",
    "scenarioEn": "On this project, the PMO requires a baseline plan while the team delivers increments. (educational context #178).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-179",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "schedule",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, les gates de gouvernance bloquent la livraison continue. (contexte pédagogique #179).",
    "scenarioEn": "In practice, governance gates block continuous delivery. (educational context #179).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-180",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-situational-thinking",
      "hybrid-delivery"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, deux flux de travail coexistent sans règles d'intégration claires. (contexte pédagogique #180).",
    "scenarioEn": "In this context, two workstreams coexist without clear integration rules. (educational context #180).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-181",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "APPLY",
    "skills": [
      "hybrid-delivery",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, la phase réglementaire est prédictive, le front-end est agile. (contexte pédagogique #181).",
    "scenarioEn": "Facing this situation, the regulatory phase is predictive while the front-end is agile. (educational context #181).",
    "promptFr": "Quelle est la meilleure approche parties prenantes ?",
    "promptEn": "What is the best stakeholder approach?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      },
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-182",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-hybrid",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, le client veut un contrat à prix fixe mais des sprints itératifs. (contexte pédagogique #182).",
    "scenarioEn": "On this project, the client wants a fixed-price contract with iterative sprints. (educational context #182).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-183",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "governance",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, le PMO exige un plan baseline alors que l'équipe livre par increments. (contexte pédagogique #183).",
    "scenarioEn": "In practice, the PMO requires a baseline plan while the team delivers increments. (educational context #183).",
    "promptFr": "Comment traiter ce changement correctement ?",
    "promptEn": "How should this change be handled correctly?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-184",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "schedule",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, les gates de gouvernance bloquent la livraison continue. (contexte pédagogique #184).",
    "scenarioEn": "In this context, governance gates block continuous delivery. (educational context #184).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-185",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "hybrid-delivery"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, deux flux de travail coexistent sans règles d'intégration claires. (contexte pédagogique #185).",
    "scenarioEn": "Facing this situation, two workstreams coexist without clear integration rules. (educational context #185).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      },
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-186",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "hybrid-delivery",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, la phase réglementaire est prédictive, le front-end est agile. (contexte pédagogique #186).",
    "scenarioEn": "On this project, the regulatory phase is predictive while the front-end is agile. (educational context #186).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      },
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-187",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-hybrid",
      "governance"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "En pratique, le client veut un contrat à prix fixe mais des sprints itératifs. (contexte pédagogique #187).",
    "scenarioEn": "In practice, the client wants a fixed-price contract with iterative sprints. (educational context #187).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-188",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "governance",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le PMO exige un plan baseline alors que l'équipe livre par increments. (contexte pédagogique #188).",
    "scenarioEn": "In this context, the PMO requires a baseline plan while the team delivers increments. (educational context #188).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-189",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "NEXT_ACTION",
    "learningObjective": "DECIDE",
    "skills": [
      "schedule",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, les gates de gouvernance bloquent la livraison continue. (contexte pédagogique #189).",
    "scenarioEn": "Facing this situation, governance gates block continuous delivery. (educational context #189).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      },
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-190",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-situational-thinking",
      "hybrid-delivery"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, deux flux de travail coexistent sans règles d'intégration claires. (contexte pédagogique #190).",
    "scenarioEn": "On this project, two workstreams coexist without clear integration rules. (educational context #190).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      },
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-191",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "scenarioType": "PREVENTION",
    "learningObjective": "APPLY",
    "skills": [
      "hybrid-delivery",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, la phase réglementaire est prédictive, le front-end est agile. (contexte pédagogique #191).",
    "scenarioEn": "In practice, the regulatory phase is predictive while the front-end is agile. (educational context #191).",
    "promptFr": "Que devrait-on faire pour PRÉVENIR ce problème ?",
    "promptEn": "What should be done to PREVENT this problem?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      },
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-192",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-hybrid",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, le client veut un contrat à prix fixe mais des sprints itératifs. (contexte pédagogique #192).",
    "scenarioEn": "In this context, the client wants a fixed-price contract with iterative sprints. (educational context #192).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
        "labelEn": "Tie the decision to expected benefits and business-case success criteria.",
        "isCorrect": true
      },
      {
        "labelFr": "Optimiser uniquement le taux d'occupation de l'équipe.",
        "labelEn": "Optimize only the team's utilization rate.",
        "isCorrect": false,
        "explanationWrongFr": "L'occupation n'égale pas la création de valeur.",
        "explanationWrongEn": "Utilization is not the same as value creation."
      },
      {
        "labelFr": "Reporter toute décision business au comité technique.",
        "labelEn": "Defer all business decisions to the technical committee.",
        "isCorrect": false,
        "explanationWrongFr": "La valeur business ne se décide pas seulement techniquement.",
        "explanationWrongEn": "Business value is not decided by tech alone."
      },
      {
        "labelFr": "Mesurer le succès uniquement au nombre de livrables produits.",
        "labelEn": "Measure success only by the number of deliverables produced.",
        "isCorrect": false,
        "explanationWrongFr": "Le volume de livrables ne mesure pas les bénéfices.",
        "explanationWrongEn": "Deliverable volume does not measure benefits."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-193",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "scenarioType": "STAKEHOLDER",
    "learningObjective": "IDENTIFY",
    "skills": [
      "governance",
      "schedule"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Face à cette situation, le PMO exige un plan baseline alors que l'équipe livre par increments. (contexte pédagogique #193). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "Facing this situation, the PMO requires a baseline plan while the team delivers increments. (educational context #193). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Vrai — l'action prioritaire est d'analyser puis d'agir de façon transparente.",
        "labelEn": "True — the priority is to analyze then act transparently.",
        "isCorrect": true
      },
      {
        "labelFr": "Faux — il faut imposer une décision immédiate sans dialogue.",
        "labelEn": "False — you must impose an immediate decision without dialogue.",
        "isCorrect": false,
        "explanationWrongFr": "Imposer sans analyse ignore risques et parties prenantes.",
        "explanationWrongEn": "Imposing without analysis ignores risks and stakeholders."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-194",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "schedule",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Sur ce projet, les gates de gouvernance bloquent la livraison continue. (contexte pédagogique #194).",
    "scenarioEn": "On this project, governance gates block continuous delivery. (educational context #194).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      },
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-195",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "CHANGE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-situational-thinking",
      "hybrid-delivery"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, deux flux de travail coexistent sans règles d'intégration claires. (contexte pédagogique #195).",
    "scenarioEn": "In practice, two workstreams coexist without clear integration rules. (educational context #195).",
    "promptFr": "Comment traiter ce changement correctement ?",
    "promptEn": "How should this change be handled correctly?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
    "options": [
      {
        "labelFr": "Demander à l'équipe d'absorber le travail en heures supplémentaires.",
        "labelEn": "Ask the team to absorb the work with overtime.",
        "isCorrect": false,
        "explanationWrongFr": "Les heures supplémentaires ne remplacent pas une décision transparente.",
        "explanationWrongEn": "Overtime does not replace a transparent decision."
      },
      {
        "labelFr": "Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
        "labelEn": "Assess impact on scope, schedule, cost, and value, then propose options.",
        "isCorrect": true
      },
      {
        "labelFr": "Accepter le changement immédiatement pour satisfaire le sponsor.",
        "labelEn": "Accept the change immediately to please the sponsor.",
        "isCorrect": false,
        "explanationWrongFr": "Accepter sans impact ignore la gouvernance du changement.",
        "explanationWrongEn": "Accepting without impact analysis ignores change governance."
      },
      {
        "labelFr": "Rejeter toute demande pour protéger le plan initial.",
        "labelEn": "Reject every request to protect the original plan.",
        "isCorrect": false,
        "explanationWrongFr": "Un rejet systématique ignore la valeur business légitime.",
        "explanationWrongEn": "Systematic rejection ignores legitimate business value."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-196",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "hybrid-delivery",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, la phase réglementaire est prédictive, le front-end est agile. (contexte pédagogique #196).",
    "scenarioEn": "In this context, the regulatory phase is predictive while the front-end is agile. (educational context #196).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
      {
        "labelFr": "Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
        "labelEn": "Update the risk register, define a response, and communicate the plan to stakeholders.",
        "isCorrect": true
      },
      {
        "labelFr": "Continuer sans changement en espérant que le risque disparaisse.",
        "labelEn": "Continue unchanged hoping the risk disappears.",
        "isCorrect": false,
        "explanationWrongFr": "L'espoir n'est pas une stratégie de réponse au risque.",
        "explanationWrongEn": "Hope is not a risk response strategy."
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      },
      {
        "labelFr": "Cacher l'information pour éviter l'inquiétude du sponsor.",
        "labelEn": "Hide the information to avoid sponsor worry.",
        "isCorrect": false,
        "explanationWrongFr": "Masquer l'information viole la transparence et la confiance.",
        "explanationWrongEn": "Hiding information violates transparency and trust."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-197",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "scenarioType": "AGILE",
    "learningObjective": "APPLY",
    "skills": [
      "pmp-hybrid",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Face à cette situation, le client veut un contrat à prix fixe mais des sprints itératifs. (contexte pédagogique #197).",
    "scenarioEn": "Facing this situation, the client wants a fixed-price contract with iterative sprints. (educational context #197).",
    "promptFr": "Quelle action respecte le mieux l'esprit agile ?",
    "promptEn": "Which action best respects an agile mindset?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify integration rules between predictive and iterative streams, then align governance.",
    "options": [
      {
        "labelFr": "Forcer tout le projet en mode 100% agile immédiatement.",
        "labelEn": "Force the whole project into 100% agile immediately.",
        "isCorrect": false,
        "explanationWrongFr": "Un basculement brutal ignore les contraintes réglementaires.",
        "explanationWrongEn": "A brutal switch ignores regulatory constraints."
      },
      {
        "labelFr": "Abandonner les sprints pour revenir uniquement au plan Gantt.",
        "labelEn": "Abandon sprints to return only to the Gantt plan.",
        "isCorrect": false,
        "explanationWrongFr": "Abandonner l'itération peut détruire la boucle de feedback.",
        "explanationWrongEn": "Abandoning iteration can destroy the feedback loop."
      },
      {
        "labelFr": "Laisser chaque équipe choisir sans cadre commun.",
        "labelEn": "Let each team choose without a shared framework.",
        "isCorrect": false,
        "explanationWrongFr": "Sans cadre commun, l'intégration devient chaotique.",
        "explanationWrongEn": "Without a shared framework, integration becomes chaotic."
      },
      {
        "labelFr": "Clarifier les règles d'intégration entre flux prédictifs et itératifs, puis aligner la gouvernance.",
        "labelEn": "Clarify integration rules between predictive and iterative streams, then align governance.",
        "isCorrect": true
      }
    ]
  },
  {
    "externalKey": "pmp-exam-198",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "APPLY",
    "skills": [
      "governance",
      "schedule"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Sur ce projet, le PMO exige un plan baseline alors que l'équipe livre par increments. (contexte pédagogique #198).",
    "scenarioEn": "On this project, the PMO requires a baseline plan while the team delivers increments. (educational context #198).",
    "promptFr": "Quelles actions sont appropriées ? (plusieurs réponses)",
    "promptEn": "Which actions are appropriate? (select all that apply)",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Relier la décision aux bénéfices attendus et aux critères de succès du business case.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Tie the decision to expected benefits and business-case success criteria.",
    "options": [
      {
        "labelFr": "Clarifier les faits et impacts avec les parties concernées.",
        "labelEn": "Clarify facts and impacts with the people involved.",
        "isCorrect": true
      },
      {
        "labelFr": "Documenter la décision et le plan de communication.",
        "labelEn": "Document the decision and the communication plan.",
        "isCorrect": true
      },
      {
        "labelFr": "Ignorer les signaux faibles pour éviter le bruit.",
        "labelEn": "Ignore weak signals to avoid noise.",
        "isCorrect": false,
        "explanationWrongFr": "Ignorer les signaux faibles augmente le risque.",
        "explanationWrongEn": "Ignoring weak signals increases risk."
      },
      {
        "labelFr": "Changer secrètement le périmètre sans validation.",
        "labelEn": "Secretly change scope without validation.",
        "isCorrect": false,
        "explanationWrongFr": "Un changement secret brise la gouvernance.",
        "explanationWrongEn": "A secret change breaks governance."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-199",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "scenarioType": "GOVERNANCE",
    "learningObjective": "IDENTIFY",
    "skills": [
      "schedule",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "En pratique, les gates de gouvernance bloquent la livraison continue. (contexte pédagogique #199).",
    "scenarioEn": "In practice, governance gates block continuous delivery. (educational context #199).",
    "promptFr": "Quelle action respecte la gouvernance du projet ?",
    "promptEn": "Which action respects project governance?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Organiser une communication structurée : faits, impacts, options, recommandation.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Organize structured communication: facts, impacts, options, recommendation.",
    "options": [
      {
        "labelFr": "Communiquer uniquement aux alliés du projet.",
        "labelEn": "Communicate only to project allies.",
        "isCorrect": false,
        "explanationWrongFr": "Exclure des parties prenantes crée des angles morts.",
        "explanationWrongEn": "Excluding stakeholders creates blind spots."
      },
      {
        "labelFr": "Organiser une communication structurée : faits, impacts, options, recommandation.",
        "labelEn": "Organize structured communication: facts, impacts, options, recommendation.",
        "isCorrect": true
      },
      {
        "labelFr": "Envoyer un long email technique sans synthèse décisionnelle.",
        "labelEn": "Send a long technical email without a decision summary.",
        "isCorrect": false,
        "explanationWrongFr": "Sans synthèse, les décideurs peinent à agir.",
        "explanationWrongEn": "Without a summary, decision-makers struggle to act."
      },
      {
        "labelFr": "Attendre que les rumeurs se calment.",
        "labelEn": "Wait until rumors settle.",
        "isCorrect": false,
        "explanationWrongFr": "L'absence de communication alimente l'incertitude.",
        "explanationWrongEn": "Lack of communication fuels uncertainty."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-200",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "scenarioType": "HYBRID",
    "learningObjective": "ANALYZE",
    "skills": [
      "pmp-situational-thinking",
      "hybrid-delivery"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Dans ce contexte, deux flux de travail coexistent sans règles d'intégration claires. (contexte pédagogique #200).",
    "scenarioEn": "In this context, two workstreams coexist without clear integration rules. (educational context #200).",
    "promptFr": "Quelle approche hybride est la plus appropriée ?",
    "promptEn": "Which hybrid approach is most appropriate?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Clarify facts with the people involved, then facilitate alignment on the shared objective.",
    "options": [
      {
        "labelFr": "Clarifier les faits avec les personnes concernées, puis faciliter un alignement sur l'objectif commun.",
        "labelEn": "Clarify facts with the people involved, then facilitate alignment on the shared objective.",
        "isCorrect": true
      },
      {
        "labelFr": "Imposer immédiatement une décision unilatérale pour gagner du temps.",
        "labelEn": "Immediately impose a unilateral decision to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Une décision unilatérale ignore le contexte et dégrade la confiance.",
        "explanationWrongEn": "A unilateral decision ignores context and erodes trust."
      },
      {
        "labelFr": "Attendre la prochaine revue mensuelle avant toute action.",
        "labelEn": "Wait for the next monthly review before acting.",
        "isCorrect": false,
        "explanationWrongFr": "Différer sans triage peut aggraver le risque et le conflit.",
        "explanationWrongEn": "Deferring without triage can worsen risk and conflict."
      },
      {
        "labelFr": "Escalader directement à la direction sans analyse.",
        "labelEn": "Escalate directly to executives without analysis.",
        "isCorrect": false,
        "explanationWrongFr": "L'escalade trop tôt sans options limite la résolution locale.",
        "explanationWrongEn": "Escalating too early without options limits local resolution."
      }
    ]
  }
] as ExamBankQuestionSeed[];
