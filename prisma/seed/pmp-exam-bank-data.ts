/**
 * Original pedagogical PMP-style exam bank (Phase 7).
 * NOT PMI / PMBOK copyrighted content. Educational scenarios only.
 */

import type { ExamDifficultyCode, PmpDeliveryApproachCode, PmpDomainCode } from "@/modules/assessment-engine/exam-types";

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
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "L'équipe se dispute sur la priorisation du backlog pendant un daily. (contexte pédagogique #1). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "The team argues about backlog prioritization during the daily stand-up. (educational context #1). Statement: clarify facts and align stakeholders before escalating.",
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
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un sponsor exige d'ajouter une fonctionnalité critique sans changer la date. (contexte pédagogique #2).",
    "scenarioEn": "A sponsor demands adding a critical feature without changing the date. (educational context #2).",
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
    "externalKey": "pmp-exam-003",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "skills": [
      "team-development",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Deux experts techniques refusent de collaborer sur une interface partagée. (contexte pédagogique #3).",
    "scenarioEn": "Two technical experts refuse to collaborate on a shared interface. (educational context #3).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-004",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "skills": [
      "stakeholder-engagement",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un membre junior se sent ignoré lors des décisions d'architecture. (contexte pédagogique #4).",
    "scenarioEn": "A junior member feels ignored during architecture decisions. (educational context #4).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
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
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-005",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "skills": [
      "communication",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le client change de contact principal en pleine phase d'exécution. (contexte pédagogique #5).",
    "scenarioEn": "The client changes their main contact mid-execution. (educational context #5).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
    "options": [
      {
        "labelFr": "Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
        "labelEn": "Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
        "isCorrect": true
      },
      {
        "labelFr": "Ajouter des heures de travail jusqu'à ce que tout soit 'fini'.",
        "labelEn": "Add working hours until everything is 'done'.",
        "isCorrect": false,
        "explanationWrongFr": "Allonger le temps sans clarifier Done masque le vrai problème.",
        "explanationWrongEn": "Adding time without clarifying Done hides the real issue."
      },
      {
        "labelFr": "Supprimer la revue de sprint pour gagner du temps.",
        "labelEn": "Cancel the sprint review to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Supprimer la revue réduit le feedback et la transparence.",
        "explanationWrongEn": "Removing the review reduces feedback and transparency."
      },
      {
        "labelFr": "Laisser chaque développeur définir Done individuellement.",
        "labelEn": "Let each developer define Done individually.",
        "isCorrect": false,
        "explanationWrongFr": "Des critères individuels fragmentent la qualité.",
        "explanationWrongEn": "Individual criteria fragment quality."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-006",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "skills": [
      "pmp-situational-thinking",
      "leadership"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Une tension culturelle apparaît entre deux sites offshore. (contexte pédagogique #6).",
    "scenarioEn": "Cultural tension appears between two offshore sites. (educational context #6).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
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
    "externalKey": "pmp-exam-007",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le chef d'équipe veut punir publiquement une erreur de livraison. (contexte pédagogique #7).",
    "scenarioEn": "The team lead wants to publicly punish a delivery mistake. (educational context #7).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
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
    "externalKey": "pmp-exam-008",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Les parties prenantes donnent des consignes contradictoires au PM. (contexte pédagogique #8).",
    "scenarioEn": "Stakeholders give contradictory instructions to the PM. (educational context #8).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
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
    "externalKey": "pmp-exam-009",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "skills": [
      "team-development",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un expert clé menace de quitter le projet avant une milestone. (contexte pédagogique #9).",
    "scenarioEn": "A key expert threatens to leave before a milestone. (educational context #9).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
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
    "externalKey": "pmp-exam-010",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "skills": [
      "stakeholder-engagement",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "L'équipe célèbre une release mais le business n'est pas satisfait. (contexte pédagogique #10).",
    "scenarioEn": "The team celebrates a release but the business is not satisfied. (educational context #10).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
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
    "externalKey": "pmp-exam-011",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "skills": [
      "communication",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "L'équipe se dispute sur la priorisation du backlog pendant un daily. (contexte pédagogique #11).",
    "scenarioEn": "The team argues about backlog prioritization during the daily stand-up. (educational context #11).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-012",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "skills": [
      "pmp-situational-thinking",
      "leadership"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Un sponsor exige d'ajouter une fonctionnalité critique sans changer la date. (contexte pédagogique #12).",
    "scenarioEn": "A sponsor demands adding a critical feature without changing the date. (educational context #12).",
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
    "externalKey": "pmp-exam-013",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Deux experts techniques refusent de collaborer sur une interface partagée. (contexte pédagogique #13).",
    "scenarioEn": "Two technical experts refuse to collaborate on a shared interface. (educational context #13).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
    "options": [
      {
        "labelFr": "Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
        "labelEn": "Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
        "isCorrect": true
      },
      {
        "labelFr": "Ajouter des heures de travail jusqu'à ce que tout soit 'fini'.",
        "labelEn": "Add working hours until everything is 'done'.",
        "isCorrect": false,
        "explanationWrongFr": "Allonger le temps sans clarifier Done masque le vrai problème.",
        "explanationWrongEn": "Adding time without clarifying Done hides the real issue."
      },
      {
        "labelFr": "Supprimer la revue de sprint pour gagner du temps.",
        "labelEn": "Cancel the sprint review to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Supprimer la revue réduit le feedback et la transparence.",
        "explanationWrongEn": "Removing the review reduces feedback and transparency."
      },
      {
        "labelFr": "Laisser chaque développeur définir Done individuellement.",
        "labelEn": "Let each developer define Done individually.",
        "isCorrect": false,
        "explanationWrongFr": "Des critères individuels fragmentent la qualité.",
        "explanationWrongEn": "Individual criteria fragment quality."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-014",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un membre junior se sent ignoré lors des décisions d'architecture. (contexte pédagogique #14).",
    "scenarioEn": "A junior member feels ignored during architecture decisions. (educational context #14).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
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
    "externalKey": "pmp-exam-015",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "skills": [
      "team-development",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le client change de contact principal en pleine phase d'exécution. (contexte pédagogique #15).",
    "scenarioEn": "The client changes their main contact mid-execution. (educational context #15).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
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
    "externalKey": "pmp-exam-016",
    "domain": "PEOPLE",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Team leadership",
    "examDifficulty": "EASY",
    "skills": [
      "stakeholder-engagement",
      "communication"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Une tension culturelle apparaît entre deux sites offshore. (contexte pédagogique #16).",
    "scenarioEn": "Cultural tension appears between two offshore sites. (educational context #16).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
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
    "externalKey": "pmp-exam-017",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "skills": [
      "communication",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le chef d'équipe veut punir publiquement une erreur de livraison. (contexte pédagogique #17).",
    "scenarioEn": "The team lead wants to publicly punish a delivery mistake. (educational context #17).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
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
    "externalKey": "pmp-exam-018",
    "domain": "PEOPLE",
    "deliveryApproach": "HYBRID",
    "processArea": "Team leadership",
    "examDifficulty": "HARD",
    "skills": [
      "pmp-situational-thinking",
      "leadership"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Les parties prenantes donnent des consignes contradictoires au PM. (contexte pédagogique #18). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "Stakeholders give contradictory instructions to the PM. (educational context #18). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
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
    "skills": [
      "leadership",
      "conflict-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un expert clé menace de quitter le projet avant une milestone. (contexte pédagogique #19).",
    "scenarioEn": "A key expert threatens to leave before a milestone. (educational context #19).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-020",
    "domain": "PEOPLE",
    "deliveryApproach": "AGILE",
    "processArea": "Team leadership",
    "examDifficulty": "MEDIUM",
    "skills": [
      "conflict-management",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "L'équipe célèbre une release mais le business n'est pas satisfait. (contexte pédagogique #20).",
    "scenarioEn": "The team celebrates a release but the business is not satisfied. (educational context #20).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
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
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-021",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "skills": [
      "risk-management",
      "schedule"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Le diagramme de Gantt montre un retard de 3 semaines sur le chemin critique. (contexte pédagogique #21). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "The Gantt chart shows a 3-week delay on the critical path. (educational context #21). Statement: clarify facts and align stakeholders before escalating.",
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
    "externalKey": "pmp-exam-022",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "skills": [
      "schedule",
      "cost"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un risque fournisseurs se matérialise : le lot principal est en rupture. (contexte pédagogique #22).",
    "scenarioEn": "A supplier risk materializes: the main lot is out of stock. (educational context #22).",
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
    "externalKey": "pmp-exam-023",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "skills": [
      "cost",
      "quality"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "La baseline de coûts a déjà été dépassée de 12%. (contexte pédagogique #23).",
    "scenarioEn": "The cost baseline has already been exceeded by 12%. (educational context #23).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-024",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "skills": [
      "quality",
      "procurement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Des défauts qualité se répètent dans les livrables d'intégration. (contexte pédagogique #24).",
    "scenarioEn": "Quality defects keep recurring in integration deliverables. (educational context #24).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
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
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-025",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "skills": [
      "procurement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un contrat de prestation arrive à échéance pendant l'exécution. (contexte pédagogique #25).",
    "scenarioEn": "A service contract expires during execution. (educational context #25).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
    "options": [
      {
        "labelFr": "Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
        "labelEn": "Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
        "isCorrect": true
      },
      {
        "labelFr": "Ajouter des heures de travail jusqu'à ce que tout soit 'fini'.",
        "labelEn": "Add working hours until everything is 'done'.",
        "isCorrect": false,
        "explanationWrongFr": "Allonger le temps sans clarifier Done masque le vrai problème.",
        "explanationWrongEn": "Adding time without clarifying Done hides the real issue."
      },
      {
        "labelFr": "Supprimer la revue de sprint pour gagner du temps.",
        "labelEn": "Cancel the sprint review to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Supprimer la revue réduit le feedback et la transparence.",
        "explanationWrongEn": "Removing the review reduces feedback and transparency."
      },
      {
        "labelFr": "Laisser chaque développeur définir Done individuellement.",
        "labelEn": "Let each developer define Done individually.",
        "isCorrect": false,
        "explanationWrongFr": "Des critères individuels fragmentent la qualité.",
        "explanationWrongEn": "Individual criteria fragment quality."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-026",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "skills": [
      "change-management",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Une demande de changement majeure arrive sans analyse d'impact. (contexte pédagogique #26).",
    "scenarioEn": "A major change request arrives without impact analysis. (educational context #26).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
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
    "externalKey": "pmp-exam-027",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "skills": [
      "governance",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le plan de communication n'est plus aligné avec les nouveaux sponsors. (contexte pédagogique #27).",
    "scenarioEn": "The communication plan is no longer aligned with new sponsors. (educational context #27).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
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
    "externalKey": "pmp-exam-028",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "skills": [
      "pmp-situational-thinking",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Les estimations initiales se révèlent trop optimistes en revue de sprint. (contexte pédagogique #28).",
    "scenarioEn": "Initial estimates prove too optimistic in sprint review. (educational context #28).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
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
    "externalKey": "pmp-exam-029",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "skills": [
      "risk-management",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le comité de gouvernance demande un reporting KPI hebdomadaire. (contexte pédagogique #29).",
    "scenarioEn": "The governance committee asks for weekly KPI reporting. (educational context #29).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
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
    "externalKey": "pmp-exam-030",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "skills": [
      "schedule",
      "cost"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Une dépendance externe bloque le démarrage d'un work package. (contexte pédagogique #30).",
    "scenarioEn": "An external dependency blocks starting a work package. (educational context #30).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
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
    "externalKey": "pmp-exam-031",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "skills": [
      "cost",
      "quality"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le diagramme de Gantt montre un retard de 3 semaines sur le chemin critique. (contexte pédagogique #31).",
    "scenarioEn": "The Gantt chart shows a 3-week delay on the critical path. (educational context #31).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-032",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "skills": [
      "quality",
      "procurement"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Un risque fournisseurs se matérialise : le lot principal est en rupture. (contexte pédagogique #32).",
    "scenarioEn": "A supplier risk materializes: the main lot is out of stock. (educational context #32).",
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
    "externalKey": "pmp-exam-033",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "skills": [
      "procurement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "La baseline de coûts a déjà été dépassée de 12%. (contexte pédagogique #33).",
    "scenarioEn": "The cost baseline has already been exceeded by 12%. (educational context #33).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
    "options": [
      {
        "labelFr": "Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
        "labelEn": "Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
        "isCorrect": true
      },
      {
        "labelFr": "Ajouter des heures de travail jusqu'à ce que tout soit 'fini'.",
        "labelEn": "Add working hours until everything is 'done'.",
        "isCorrect": false,
        "explanationWrongFr": "Allonger le temps sans clarifier Done masque le vrai problème.",
        "explanationWrongEn": "Adding time without clarifying Done hides the real issue."
      },
      {
        "labelFr": "Supprimer la revue de sprint pour gagner du temps.",
        "labelEn": "Cancel the sprint review to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Supprimer la revue réduit le feedback et la transparence.",
        "explanationWrongEn": "Removing the review reduces feedback and transparency."
      },
      {
        "labelFr": "Laisser chaque développeur définir Done individuellement.",
        "labelEn": "Let each developer define Done individually.",
        "isCorrect": false,
        "explanationWrongFr": "Des critères individuels fragmentent la qualité.",
        "explanationWrongEn": "Individual criteria fragment quality."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-034",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "skills": [
      "change-management",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Des défauts qualité se répètent dans les livrables d'intégration. (contexte pédagogique #34).",
    "scenarioEn": "Quality defects keep recurring in integration deliverables. (educational context #34).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
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
    "externalKey": "pmp-exam-035",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "skills": [
      "governance",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un contrat de prestation arrive à échéance pendant l'exécution. (contexte pédagogique #35).",
    "scenarioEn": "A service contract expires during execution. (educational context #35).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
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
    "externalKey": "pmp-exam-036",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "skills": [
      "pmp-situational-thinking",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Une demande de changement majeure arrive sans analyse d'impact. (contexte pédagogique #36).",
    "scenarioEn": "A major change request arrives without impact analysis. (educational context #36).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
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
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "skills": [
      "risk-management",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le plan de communication n'est plus aligné avec les nouveaux sponsors. (contexte pédagogique #37).",
    "scenarioEn": "The communication plan is no longer aligned with new sponsors. (educational context #37).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
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
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "skills": [
      "schedule",
      "cost"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Les estimations initiales se révèlent trop optimistes en revue de sprint. (contexte pédagogique #38). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "Initial estimates prove too optimistic in sprint review. (educational context #38). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
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
    "externalKey": "pmp-exam-039",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "skills": [
      "cost",
      "quality"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le comité de gouvernance demande un reporting KPI hebdomadaire. (contexte pédagogique #39).",
    "scenarioEn": "The governance committee asks for weekly KPI reporting. (educational context #39).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-040",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "skills": [
      "quality",
      "procurement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Une dépendance externe bloque le démarrage d'un work package. (contexte pédagogique #40).",
    "scenarioEn": "An external dependency blocks starting a work package. (educational context #40).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
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
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-041",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "skills": [
      "procurement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le diagramme de Gantt montre un retard de 3 semaines sur le chemin critique. (contexte pédagogique #41).",
    "scenarioEn": "The Gantt chart shows a 3-week delay on the critical path. (educational context #41).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
    "options": [
      {
        "labelFr": "Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
        "labelEn": "Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
        "isCorrect": true
      },
      {
        "labelFr": "Ajouter des heures de travail jusqu'à ce que tout soit 'fini'.",
        "labelEn": "Add working hours until everything is 'done'.",
        "isCorrect": false,
        "explanationWrongFr": "Allonger le temps sans clarifier Done masque le vrai problème.",
        "explanationWrongEn": "Adding time without clarifying Done hides the real issue."
      },
      {
        "labelFr": "Supprimer la revue de sprint pour gagner du temps.",
        "labelEn": "Cancel the sprint review to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Supprimer la revue réduit le feedback et la transparence.",
        "explanationWrongEn": "Removing the review reduces feedback and transparency."
      },
      {
        "labelFr": "Laisser chaque développeur définir Done individuellement.",
        "labelEn": "Let each developer define Done individually.",
        "isCorrect": false,
        "explanationWrongFr": "Des critères individuels fragmentent la qualité.",
        "explanationWrongEn": "Individual criteria fragment quality."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-042",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "skills": [
      "change-management",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un risque fournisseurs se matérialise : le lot principal est en rupture. (contexte pédagogique #42).",
    "scenarioEn": "A supplier risk materializes: the main lot is out of stock. (educational context #42).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
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
    "externalKey": "pmp-exam-043",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "skills": [
      "governance",
      "pmp-situational-thinking"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "La baseline de coûts a déjà été dépassée de 12%. (contexte pédagogique #43).",
    "scenarioEn": "The cost baseline has already been exceeded by 12%. (educational context #43).",
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
    "externalKey": "pmp-exam-044",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "skills": [
      "pmp-situational-thinking",
      "risk-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Des défauts qualité se répètent dans les livrables d'intégration. (contexte pédagogique #44).",
    "scenarioEn": "Quality defects keep recurring in integration deliverables. (educational context #44).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
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
    "externalKey": "pmp-exam-045",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "skills": [
      "risk-management",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un contrat de prestation arrive à échéance pendant l'exécution. (contexte pédagogique #45).",
    "scenarioEn": "A service contract expires during execution. (educational context #45).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
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
    "externalKey": "pmp-exam-046",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "skills": [
      "schedule",
      "cost"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Une demande de changement majeure arrive sans analyse d'impact. (contexte pédagogique #46).",
    "scenarioEn": "A major change request arrives without impact analysis. (educational context #46).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
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
    "externalKey": "pmp-exam-047",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "skills": [
      "cost",
      "quality"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le plan de communication n'est plus aligné avec les nouveaux sponsors. (contexte pédagogique #47).",
    "scenarioEn": "The communication plan is no longer aligned with new sponsors. (educational context #47).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-048",
    "domain": "PROCESS",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Delivery processes",
    "examDifficulty": "EASY",
    "skills": [
      "quality",
      "procurement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Les estimations initiales se révèlent trop optimistes en revue de sprint. (contexte pédagogique #48).",
    "scenarioEn": "Initial estimates prove too optimistic in sprint review. (educational context #48).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
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
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-049",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Delivery processes",
    "examDifficulty": "MEDIUM",
    "skills": [
      "procurement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le comité de gouvernance demande un reporting KPI hebdomadaire. (contexte pédagogique #49).",
    "scenarioEn": "The governance committee asks for weekly KPI reporting. (educational context #49).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
    "options": [
      {
        "labelFr": "Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
        "labelEn": "Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
        "isCorrect": true
      },
      {
        "labelFr": "Ajouter des heures de travail jusqu'à ce que tout soit 'fini'.",
        "labelEn": "Add working hours until everything is 'done'.",
        "isCorrect": false,
        "explanationWrongFr": "Allonger le temps sans clarifier Done masque le vrai problème.",
        "explanationWrongEn": "Adding time without clarifying Done hides the real issue."
      },
      {
        "labelFr": "Supprimer la revue de sprint pour gagner du temps.",
        "labelEn": "Cancel the sprint review to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Supprimer la revue réduit le feedback et la transparence.",
        "explanationWrongEn": "Removing the review reduces feedback and transparency."
      },
      {
        "labelFr": "Laisser chaque développeur définir Done individuellement.",
        "labelEn": "Let each developer define Done individually.",
        "isCorrect": false,
        "explanationWrongFr": "Des critères individuels fragmentent la qualité.",
        "explanationWrongEn": "Individual criteria fragment quality."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-050",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Delivery processes",
    "examDifficulty": "HARD",
    "skills": [
      "change-management",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Une dépendance externe bloque le démarrage d'un work package. (contexte pédagogique #50).",
    "scenarioEn": "An external dependency blocks starting a work package. (educational context #50).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
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
    "externalKey": "pmp-exam-051",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "skills": [
      "business-value",
      "governance"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Une nouvelle régulation sectorielle entre en vigueur dans 6 semaines. (contexte pédagogique #51). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "A new industry regulation takes effect in 6 weeks. (educational context #51). Statement: clarify facts and align stakeholders before escalating.",
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
    "externalKey": "pmp-exam-052",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "skills": [
      "governance",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "La stratégie entreprise pivot vers un autre marché prioritaire. (contexte pédagogique #52).",
    "scenarioEn": "Company strategy pivots toward another priority market. (educational context #52).",
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
    "externalKey": "pmp-exam-053",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "skills": [
      "stakeholder-engagement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le business case initial repose sur des hypothèses de volume obsolètes. (contexte pédagogique #53).",
    "scenarioEn": "The initial business case relies on outdated volume assumptions. (educational context #53).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-054",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "skills": [
      "change-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un concurrent lance une offre similaire avant la mise en production. (contexte pédagogique #54).",
    "scenarioEn": "A competitor launches a similar offer before go-live. (educational context #54).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
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
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-055",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "skills": [
      "pmp-situational-thinking",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le sponsor exécutif est remplacé et remet en cause la valeur du projet. (contexte pédagogique #55).",
    "scenarioEn": "The executive sponsor is replaced and questions project value. (educational context #55).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
    "options": [
      {
        "labelFr": "Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
        "labelEn": "Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
        "isCorrect": true
      },
      {
        "labelFr": "Ajouter des heures de travail jusqu'à ce que tout soit 'fini'.",
        "labelEn": "Add working hours until everything is 'done'.",
        "isCorrect": false,
        "explanationWrongFr": "Allonger le temps sans clarifier Done masque le vrai problème.",
        "explanationWrongEn": "Adding time without clarifying Done hides the real issue."
      },
      {
        "labelFr": "Supprimer la revue de sprint pour gagner du temps.",
        "labelEn": "Cancel the sprint review to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Supprimer la revue réduit le feedback et la transparence.",
        "explanationWrongEn": "Removing the review reduces feedback and transparency."
      },
      {
        "labelFr": "Laisser chaque développeur définir Done individuellement.",
        "labelEn": "Let each developer define Done individually.",
        "isCorrect": false,
        "explanationWrongFr": "Des critères individuels fragmentent la qualité.",
        "explanationWrongEn": "Individual criteria fragment quality."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-056",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "skills": [
      "business-value",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Une nouvelle régulation sectorielle entre en vigueur dans 6 semaines. (contexte pédagogique #56).",
    "scenarioEn": "A new industry regulation takes effect in 6 weeks. (educational context #56).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
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
    "externalKey": "pmp-exam-057",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "skills": [
      "governance",
      "stakeholder-engagement"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "La stratégie entreprise pivot vers un autre marché prioritaire. (contexte pédagogique #57).",
    "scenarioEn": "Company strategy pivots toward another priority market. (educational context #57).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
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
    "externalKey": "pmp-exam-058",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "skills": [
      "stakeholder-engagement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le business case initial repose sur des hypothèses de volume obsolètes. (contexte pédagogique #58).",
    "scenarioEn": "The initial business case relies on outdated volume assumptions. (educational context #58).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
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
    "externalKey": "pmp-exam-059",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "skills": [
      "change-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un concurrent lance une offre similaire avant la mise en production. (contexte pédagogique #59).",
    "scenarioEn": "A competitor launches a similar offer before go-live. (educational context #59).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
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
    "externalKey": "pmp-exam-060",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "skills": [
      "pmp-situational-thinking",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le sponsor exécutif est remplacé et remet en cause la valeur du projet. (contexte pédagogique #60).",
    "scenarioEn": "The executive sponsor is replaced and questions project value. (educational context #60).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
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
    "externalKey": "pmp-exam-061",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "skills": [
      "business-value",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Une nouvelle régulation sectorielle entre en vigueur dans 6 semaines. (contexte pédagogique #61).",
    "scenarioEn": "A new industry regulation takes effect in 6 weeks. (educational context #61).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-062",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "skills": [
      "governance",
      "stakeholder-engagement"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "La stratégie entreprise pivot vers un autre marché prioritaire. (contexte pédagogique #62).",
    "scenarioEn": "Company strategy pivots toward another priority market. (educational context #62).",
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
    "externalKey": "pmp-exam-063",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "PREDICTIVE",
    "processArea": "Business alignment",
    "examDifficulty": "EASY",
    "skills": [
      "stakeholder-engagement",
      "change-management"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le business case initial repose sur des hypothèses de volume obsolètes. (contexte pédagogique #63).",
    "scenarioEn": "The initial business case relies on outdated volume assumptions. (educational context #63).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
    "options": [
      {
        "labelFr": "Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
        "labelEn": "Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
        "isCorrect": true
      },
      {
        "labelFr": "Ajouter des heures de travail jusqu'à ce que tout soit 'fini'.",
        "labelEn": "Add working hours until everything is 'done'.",
        "isCorrect": false,
        "explanationWrongFr": "Allonger le temps sans clarifier Done masque le vrai problème.",
        "explanationWrongEn": "Adding time without clarifying Done hides the real issue."
      },
      {
        "labelFr": "Supprimer la revue de sprint pour gagner du temps.",
        "labelEn": "Cancel the sprint review to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Supprimer la revue réduit le feedback et la transparence.",
        "explanationWrongEn": "Removing the review reduces feedback and transparency."
      },
      {
        "labelFr": "Laisser chaque développeur définir Done individuellement.",
        "labelEn": "Let each developer define Done individually.",
        "isCorrect": false,
        "explanationWrongFr": "Des critères individuels fragmentent la qualité.",
        "explanationWrongEn": "Individual criteria fragment quality."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-064",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "HYBRID",
    "processArea": "Business alignment",
    "examDifficulty": "MEDIUM",
    "skills": [
      "change-management",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Un concurrent lance une offre similaire avant la mise en production. (contexte pédagogique #64).",
    "scenarioEn": "A competitor launches a similar offer before go-live. (educational context #64).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
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
    "externalKey": "pmp-exam-065",
    "domain": "BUSINESS_ENVIRONMENT",
    "deliveryApproach": "AGILE",
    "processArea": "Business alignment",
    "examDifficulty": "HARD",
    "skills": [
      "pmp-situational-thinking",
      "business-value"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le sponsor exécutif est remplacé et remet en cause la valeur du projet. (contexte pédagogique #65).",
    "scenarioEn": "The executive sponsor is replaced and questions project value. (educational context #65).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
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
    "externalKey": "pmp-exam-066",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "Le Product Owner ajoute des stories en cours de sprint sans négociation. (contexte pédagogique #66). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "The Product Owner adds stories mid-sprint without negotiation. (educational context #66). Statement: clarify facts and align stakeholders before escalating.",
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
    "externalKey": "pmp-exam-067",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "L'équipe veut allonger le sprint pour 'finir' plus de stories. (contexte pédagogique #67).",
    "scenarioEn": "The team wants to extend the sprint to 'finish' more stories. (educational context #67).",
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
    "externalKey": "pmp-exam-068",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "skills": [
      "team-development",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "La Definition of Done est floue et les demos sont partielles. (contexte pédagogique #68).",
    "scenarioEn": "The Definition of Done is unclear and demos are partial. (educational context #68).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-069",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "skills": [
      "pmp-situational-thinking",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le Scrum Master veut décider à la place de l'équipe. (contexte pédagogique #69).",
    "scenarioEn": "The Scrum Master wants to decide instead of the team. (educational context #69).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
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
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-070",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Les rétrospectives n'aboutissent à aucune action suivie. (contexte pédagogique #70).",
    "scenarioEn": "Retrospectives produce no followed-up actions. (educational context #70).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
    "options": [
      {
        "labelFr": "Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
        "labelEn": "Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
        "isCorrect": true
      },
      {
        "labelFr": "Ajouter des heures de travail jusqu'à ce que tout soit 'fini'.",
        "labelEn": "Add working hours until everything is 'done'.",
        "isCorrect": false,
        "explanationWrongFr": "Allonger le temps sans clarifier Done masque le vrai problème.",
        "explanationWrongEn": "Adding time without clarifying Done hides the real issue."
      },
      {
        "labelFr": "Supprimer la revue de sprint pour gagner du temps.",
        "labelEn": "Cancel the sprint review to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Supprimer la revue réduit le feedback et la transparence.",
        "explanationWrongEn": "Removing the review reduces feedback and transparency."
      },
      {
        "labelFr": "Laisser chaque développeur définir Done individuellement.",
        "labelEn": "Let each developer define Done individually.",
        "isCorrect": false,
        "explanationWrongFr": "Des critères individuels fragmentent la qualité.",
        "explanationWrongEn": "Individual criteria fragment quality."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-071",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le Product Owner ajoute des stories en cours de sprint sans négociation. (contexte pédagogique #71).",
    "scenarioEn": "The Product Owner adds stories mid-sprint without negotiation. (educational context #71).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
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
    "externalKey": "pmp-exam-072",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "skills": [
      "team-development",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "L'équipe veut allonger le sprint pour 'finir' plus de stories. (contexte pédagogique #72).",
    "scenarioEn": "The team wants to extend the sprint to 'finish' more stories. (educational context #72).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
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
    "externalKey": "pmp-exam-073",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "skills": [
      "pmp-situational-thinking",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "La Definition of Done est floue et les demos sont partielles. (contexte pédagogique #73).",
    "scenarioEn": "The Definition of Done is unclear and demos are partial. (educational context #73).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
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
    "externalKey": "pmp-exam-074",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le Scrum Master veut décider à la place de l'équipe. (contexte pédagogique #74).",
    "scenarioEn": "The Scrum Master wants to decide instead of the team. (educational context #74).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
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
    "externalKey": "pmp-exam-075",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Les rétrospectives n'aboutissent à aucune action suivie. (contexte pédagogique #75).",
    "scenarioEn": "Retrospectives produce no followed-up actions. (educational context #75).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
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
    "externalKey": "pmp-exam-076",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "skills": [
      "team-development",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le Product Owner ajoute des stories en cours de sprint sans négociation. (contexte pédagogique #76).",
    "scenarioEn": "The Product Owner adds stories mid-sprint without negotiation. (educational context #76).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-077",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "skills": [
      "pmp-situational-thinking",
      "agile-mindset"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "L'équipe veut allonger le sprint pour 'finir' plus de stories. (contexte pédagogique #77).",
    "scenarioEn": "The team wants to extend the sprint to 'finish' more stories. (educational context #77).",
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
    "externalKey": "pmp-exam-078",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "La Definition of Done est floue et les demos sont partielles. (contexte pédagogique #78).",
    "scenarioEn": "The Definition of Done is unclear and demos are partial. (educational context #78).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
    "options": [
      {
        "labelFr": "Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
        "labelEn": "Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
        "isCorrect": true
      },
      {
        "labelFr": "Ajouter des heures de travail jusqu'à ce que tout soit 'fini'.",
        "labelEn": "Add working hours until everything is 'done'.",
        "isCorrect": false,
        "explanationWrongFr": "Allonger le temps sans clarifier Done masque le vrai problème.",
        "explanationWrongEn": "Adding time without clarifying Done hides the real issue."
      },
      {
        "labelFr": "Supprimer la revue de sprint pour gagner du temps.",
        "labelEn": "Cancel the sprint review to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Supprimer la revue réduit le feedback et la transparence.",
        "explanationWrongEn": "Removing the review reduces feedback and transparency."
      },
      {
        "labelFr": "Laisser chaque développeur définir Done individuellement.",
        "labelEn": "Let each developer define Done individually.",
        "isCorrect": false,
        "explanationWrongFr": "Des critères individuels fragmentent la qualité.",
        "explanationWrongEn": "Individual criteria fragment quality."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-079",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le Scrum Master veut décider à la place de l'équipe. (contexte pédagogique #79).",
    "scenarioEn": "The Scrum Master wants to decide instead of the team. (educational context #79).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
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
    "externalKey": "pmp-exam-080",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "skills": [
      "team-development",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Les rétrospectives n'aboutissent à aucune action suivie. (contexte pédagogique #80).",
    "scenarioEn": "Retrospectives produce no followed-up actions. (educational context #80).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
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
    "externalKey": "pmp-exam-081",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "skills": [
      "pmp-situational-thinking",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le Product Owner ajoute des stories en cours de sprint sans négociation. (contexte pédagogique #81).",
    "scenarioEn": "The Product Owner adds stories mid-sprint without negotiation. (educational context #81).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
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
    "externalKey": "pmp-exam-082",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "skills": [
      "agile-mindset",
      "pmp-agile"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "L'équipe veut allonger le sprint pour 'finir' plus de stories. (contexte pédagogique #82).",
    "scenarioEn": "The team wants to extend the sprint to 'finish' more stories. (educational context #82).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
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
    "externalKey": "pmp-exam-083",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "HARD",
    "skills": [
      "pmp-agile",
      "team-development"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "La Definition of Done est floue et les demos sont partielles. (contexte pédagogique #83). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "The Definition of Done is unclear and demos are partial. (educational context #83). Statement: clarify facts and align stakeholders before escalating.",
    "promptFr": "Cet énoncé est-il le meilleur raisonnement dans cette situation ?",
    "promptEn": "Is this statement the best reasoning in this situation?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Évaluer l'impact sur le périmètre, le délai, le coût et la valeur, puis proposer des options.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Assess impact on scope, schedule, cost, and value, then propose options.",
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
    "externalKey": "pmp-exam-084",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "EASY",
    "skills": [
      "team-development",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le Scrum Master veut décider à la place de l'équipe. (contexte pédagogique #84).",
    "scenarioEn": "The Scrum Master wants to decide instead of the team. (educational context #84).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-085",
    "domain": "PROCESS",
    "deliveryApproach": "AGILE",
    "processArea": "Agile delivery",
    "examDifficulty": "MEDIUM",
    "skills": [
      "pmp-situational-thinking",
      "agile-mindset"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Les rétrospectives n'aboutissent à aucune action suivie. (contexte pédagogique #85).",
    "scenarioEn": "Retrospectives produce no followed-up actions. (educational context #85).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
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
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-086",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "skills": [
      "hybrid-delivery",
      "pmp-hybrid"
    ],
    "type": "TRUE_FALSE",
    "scenarioFr": "La phase réglementaire est prédictive, le front-end est agile. (contexte pédagogique #86). Énoncé : clarifier les faits et aligner les parties prenantes avant d'escalader.",
    "scenarioEn": "The regulatory phase is predictive while the front-end is agile. (educational context #86). Statement: clarify facts and align stakeholders before escalating.",
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
    "externalKey": "pmp-exam-087",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "skills": [
      "pmp-hybrid",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le client veut un contrat à prix fixe mais des sprints itératifs. (contexte pédagogique #87).",
    "scenarioEn": "The client wants a fixed-price contract with iterative sprints. (educational context #87).",
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
    "externalKey": "pmp-exam-088",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "skills": [
      "governance",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le PMO exige un plan baseline alors que l'équipe livre par increments. (contexte pédagogique #88).",
    "scenarioEn": "The PMO requires a baseline plan while the team delivers increments. (educational context #88).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-089",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "skills": [
      "schedule",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Les gates de gouvernance bloquent la livraison continue. (contexte pédagogique #89).",
    "scenarioEn": "Governance gates block continuous delivery. (educational context #89).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Mettre à jour le registre des risques, définir une réponse, et communiquer le plan aux parties prenantes.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Update the risk register, define a response, and communicate the plan to stakeholders.",
    "options": [
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
      },
      {
        "labelFr": "Annuler immédiatement le projet.",
        "labelEn": "Cancel the project immediately.",
        "isCorrect": false,
        "explanationWrongFr": "L'annulation est une option extrême avant analyse d'impact.",
        "explanationWrongEn": "Cancellation is an extreme option before impact analysis."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-090",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "skills": [
      "pmp-situational-thinking",
      "hybrid-delivery"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Deux flux de travail coexistent sans règles d'intégration claires. (contexte pédagogique #90).",
    "scenarioEn": "Two workstreams coexist without clear integration rules. (educational context #90).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
    "options": [
      {
        "labelFr": "Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
        "labelEn": "Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
        "isCorrect": true
      },
      {
        "labelFr": "Ajouter des heures de travail jusqu'à ce que tout soit 'fini'.",
        "labelEn": "Add working hours until everything is 'done'.",
        "isCorrect": false,
        "explanationWrongFr": "Allonger le temps sans clarifier Done masque le vrai problème.",
        "explanationWrongEn": "Adding time without clarifying Done hides the real issue."
      },
      {
        "labelFr": "Supprimer la revue de sprint pour gagner du temps.",
        "labelEn": "Cancel the sprint review to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Supprimer la revue réduit le feedback et la transparence.",
        "explanationWrongEn": "Removing the review reduces feedback and transparency."
      },
      {
        "labelFr": "Laisser chaque développeur définir Done individuellement.",
        "labelEn": "Let each developer define Done individually.",
        "isCorrect": false,
        "explanationWrongFr": "Des critères individuels fragmentent la qualité.",
        "explanationWrongEn": "Individual criteria fragment quality."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-091",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "skills": [
      "hybrid-delivery",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "La phase réglementaire est prédictive, le front-end est agile. (contexte pédagogique #91).",
    "scenarioEn": "The regulatory phase is predictive while the front-end is agile. (educational context #91).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
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
    "externalKey": "pmp-exam-092",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "skills": [
      "pmp-hybrid",
      "governance"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le client veut un contrat à prix fixe mais des sprints itératifs. (contexte pédagogique #92).",
    "scenarioEn": "The client wants a fixed-price contract with iterative sprints. (educational context #92).",
    "promptFr": "Que devrait faire le chef de projet ENSUITE ?",
    "promptEn": "What should the project manager do NEXT?",
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
    "externalKey": "pmp-exam-093",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "skills": [
      "governance",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le PMO exige un plan baseline alors que l'équipe livre par increments. (contexte pédagogique #93).",
    "scenarioEn": "The PMO requires a baseline plan while the team delivers increments. (educational context #93).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
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
    "externalKey": "pmp-exam-094",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "skills": [
      "schedule",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Les gates de gouvernance bloquent la livraison continue. (contexte pédagogique #94).",
    "scenarioEn": "Governance gates block continuous delivery. (educational context #94).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
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
    "externalKey": "pmp-exam-095",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "skills": [
      "pmp-situational-thinking",
      "hybrid-delivery"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Deux flux de travail coexistent sans règles d'intégration claires. (contexte pédagogique #95).",
    "scenarioEn": "Two workstreams coexist without clear integration rules. (educational context #95).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
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
    "externalKey": "pmp-exam-096",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "skills": [
      "hybrid-delivery",
      "pmp-hybrid"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "La phase réglementaire est prédictive, le front-end est agile. (contexte pédagogique #96).",
    "scenarioEn": "The regulatory phase is predictive while the front-end is agile. (educational context #96).",
    "promptFr": "Que devrait faire le chef de projet EN PREMIER ?",
    "promptEn": "What should the project manager do FIRST?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Facilitate a conflict-resolution workshop focused on interests, not positions.",
    "options": [
      {
        "labelFr": "Remplacer les deux personnes sans discussion.",
        "labelEn": "Replace both people without discussion.",
        "isCorrect": false,
        "explanationWrongFr": "Le remplacement immédiat est disproportionné et coûteux.",
        "explanationWrongEn": "Immediate replacement is disproportionate and costly."
      },
      {
        "labelFr": "Ignorer le conflit tant que la livraison avance.",
        "labelEn": "Ignore the conflict as long as delivery continues.",
        "isCorrect": false,
        "explanationWrongFr": "Un conflit non traité devient souvent un risque de livraison.",
        "explanationWrongEn": "Untreated conflict often becomes a delivery risk."
      },
      {
        "labelFr": "Faciliter un atelier de résolution de conflit centré sur les intérêts, pas sur les positions.",
        "labelEn": "Facilitate a conflict-resolution workshop focused on interests, not positions.",
        "isCorrect": true
      },
      {
        "labelFr": "Choisir un camp pour clore le débat rapidement.",
        "labelEn": "Pick a side to close the debate quickly.",
        "isCorrect": false,
        "explanationWrongFr": "Choisir un camp polarise davantage l'équipe.",
        "explanationWrongEn": "Picking a side further polarizes the team."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-097",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "skills": [
      "pmp-hybrid",
      "governance"
    ],
    "type": "MULTIPLE_CHOICE",
    "scenarioFr": "Le client veut un contrat à prix fixe mais des sprints itératifs. (contexte pédagogique #97).",
    "scenarioEn": "The client wants a fixed-price contract with iterative sprints. (educational context #97).",
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
    "externalKey": "pmp-exam-098",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "EASY",
    "skills": [
      "governance",
      "schedule"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Le PMO exige un plan baseline alors que l'équipe livre par increments. (contexte pédagogique #98).",
    "scenarioEn": "The PMO requires a baseline plan while the team delivers increments. (educational context #98).",
    "promptFr": "Quelle est la MEILLEURE action ?",
    "promptEn": "What is the BEST action?",
    "explanationCorrectFr": "La meilleure action privilégie la clarté, la collaboration et la gouvernance adaptée. Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
    "explanationCorrectEn": "The best action favors clarity, collaboration, and fit-for-purpose governance. Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
    "options": [
      {
        "labelFr": "Revenir à la Definition of Done et au backlog priorisé avec le Product Owner et l'équipe.",
        "labelEn": "Return to the Definition of Done and prioritized backlog with the Product Owner and team.",
        "isCorrect": true
      },
      {
        "labelFr": "Ajouter des heures de travail jusqu'à ce que tout soit 'fini'.",
        "labelEn": "Add working hours until everything is 'done'.",
        "isCorrect": false,
        "explanationWrongFr": "Allonger le temps sans clarifier Done masque le vrai problème.",
        "explanationWrongEn": "Adding time without clarifying Done hides the real issue."
      },
      {
        "labelFr": "Supprimer la revue de sprint pour gagner du temps.",
        "labelEn": "Cancel the sprint review to save time.",
        "isCorrect": false,
        "explanationWrongFr": "Supprimer la revue réduit le feedback et la transparence.",
        "explanationWrongEn": "Removing the review reduces feedback and transparency."
      },
      {
        "labelFr": "Laisser chaque développeur définir Done individuellement.",
        "labelEn": "Let each developer define Done individually.",
        "isCorrect": false,
        "explanationWrongFr": "Des critères individuels fragmentent la qualité.",
        "explanationWrongEn": "Individual criteria fragment quality."
      }
    ]
  },
  {
    "externalKey": "pmp-exam-099",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "MEDIUM",
    "skills": [
      "schedule",
      "pmp-situational-thinking"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Les gates de gouvernance bloquent la livraison continue. (contexte pédagogique #99).",
    "scenarioEn": "Governance gates block continuous delivery. (educational context #99).",
    "promptFr": "Que devrait faire le chef de projet ?",
    "promptEn": "What should the project manager do?",
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
    "externalKey": "pmp-exam-100",
    "domain": "PROCESS",
    "deliveryApproach": "HYBRID",
    "processArea": "Hybrid delivery",
    "examDifficulty": "HARD",
    "skills": [
      "pmp-situational-thinking",
      "hybrid-delivery"
    ],
    "type": "SINGLE_CHOICE",
    "scenarioFr": "Deux flux de travail coexistent sans règles d'intégration claires. (contexte pédagogique #100).",
    "scenarioEn": "Two workstreams coexist without clear integration rules. (educational context #100).",
    "promptFr": "Que le chef de projet aurait-il dû faire ?",
    "promptEn": "What should the project manager have done?",
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
  }
] as ExamBankQuestionSeed[];
