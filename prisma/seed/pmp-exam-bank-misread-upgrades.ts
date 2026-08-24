/**
 * Targeted upgrades for PMP exam bank questions that test scenario comprehension.
 * Preserves externalKey IDs; sets learningObjective IDENTIFY on FIRST/BEST_ACTION items
 * so classifyError() naturally yields MISREAD_SCENARIO when appropriate.
 * Original PLA content — not PMI/PMBOK reproduction.
 */

import type { ExamBankQuestionSeed } from "./pmp-exam-bank-types";

type Opt = ExamBankQuestionSeed["options"][number];

function opt(
  labelFr: string,
  labelEn: string,
  isCorrect: boolean,
  whyFr?: string,
  whyEn?: string
): Opt {
  return {
    labelFr,
    labelEn,
    isCorrect,
    ...(isCorrect
      ? {}
      : {
          explanationWrongFr: whyFr ?? "Cette option repose sur une mauvaise lecture du scénario.",
          explanationWrongEn: whyEn ?? "This option relies on a misread of the scenario.",
        }),
  };
}

/** 18 scenario-comprehension upgrades keyed by externalKey */
export const MISREAD_SCENARIO_UPGRADES: Record<string, ExamBankQuestionSeed> = {
  "pmp-exam-012": {
    externalKey: "pmp-exam-012",
    domain: "PEOPLE",
    deliveryApproach: "PREDICTIVE",
    processArea: "Stakeholder engagement",
    examDifficulty: "MEDIUM",
    scenarioType: "FIRST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["communication", "pmp-situational-thinking"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Sur le projet CRM Helios (approche prédictive), la directrice commerciale affirme qu'une « nouvelle exigence reporting » manque au périmètre et menace d'escalader. En relisant le cahier des charges signé, le chef de projet constate que le reporting demandé y figure déjà — la demande porte sur la formulation d'un écran, pas sur une fonction absente.",
    scenarioEn:
      "On the Helios CRM project (predictive approach), the sales director claims a “new reporting requirement” is missing from scope and threatens to escalate. Re-reading the signed requirements baseline, the project manager finds the requested reporting is already included—the ask is about wording on one screen, not a missing function.",
    promptFr: "Que doit comprendre le chef de projet en premier sur cette situation ?",
    promptEn: "What should the project manager understand first about this situation?",
    explanationCorrectFr:
      "Il s'agit d'une clarification sur une exigence déjà baselée, pas d'un changement de périmètre. Confondre les deux mène à un processus de change inutile.",
    explanationCorrectEn:
      "This is clarification on an already baselined requirement, not a scope change. Confusing the two triggers unnecessary change control.",
    options: [
      opt(
        "Clarification d'une exigence déjà incluse — pas un changement de scope",
        "Clarification of an already included requirement — not a scope change",
        true
      ),
      opt(
        "Résistance stakeholder qu'il faut contourner par escalade",
        "Stakeholder resistance that must be bypassed through escalation",
        false,
        "La menace d'escalade ne signifie pas automatiquement résistance — relire le baseline d'abord.",
        "A threat to escalate does not automatically mean resistance — re-read the baseline first."
      ),
      opt(
        "Changement de scope majeur à traiter via le comité de change",
        "Major scope change to process through the change committee",
        false,
        "Lancer un change sans vérifier le baseline confond clarification et modification.",
        "Starting change without checking the baseline confuses clarification with modification."
      ),
      opt(
        "Problème de performance d'équipe masqué par la dispute",
        "Team performance problem masked by the dispute",
        false,
        "Le scénario décrit un malentendu sur les exigences, pas un problème de delivery.",
        "The scenario describes a requirements misunderstanding, not a delivery performance issue."
      ),
    ],
  },

  "pmp-exam-036": {
    externalKey: "pmp-exam-036",
    domain: "PEOPLE",
    deliveryApproach: "PREDICTIVE",
    processArea: "Conflict management",
    examDifficulty: "MEDIUM",
    scenarioType: "FIRST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["conflict-management", "pmp-people"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Deux développeurs seniors se disputent violemment en réunion d'avancement. Le sponsor demande au chef de projet de « virer le plus difficile ». Après entretiens, le PM apprend que le conflit a démarré quand les critères d'acceptation d'une story critique ont été interprétés différemment — les deux considèrent l'autre comme incompétent.",
    scenarioEn:
      "Two senior developers argue heatedly in a status meeting. The sponsor asks the project manager to “remove the difficult one.” After interviews, the PM learns the conflict started when acceptance criteria for a critical story were interpreted differently—each sees the other as incompetent.",
    promptFr: "Quelle est la nature réelle du problème à adresser en premier ?",
    promptEn: "What is the real problem to address first?",
    explanationCorrectFr:
      "C'est un conflit alimenté par une ambiguïté d'exigences, pas primairement un problème de performance individuelle.",
    explanationCorrectEn:
      "This is conflict fueled by requirements ambiguity, not primarily an individual performance problem.",
    options: [
      opt(
        "Ambiguïté sur les critères d'acceptation — pas un simple conflit de personnalité",
        "Ambiguity on acceptance criteria — not a simple personality clash",
        true
      ),
      opt(
        "Problème de performance nécessitant un remplacement immédiat",
        "Performance problem requiring immediate replacement",
        false,
        "Remplacer quelqu'un sans clarifier les critères ne résout pas la cause.",
        "Replacing someone without clarifying criteria does not fix the cause."
      ),
      opt(
        "Résistance au changement organisationnel",
        "Organizational change resistance",
        false,
        "Le scénario ne décrit pas de changement org — mais une story mal clarifiée.",
        "The scenario does not describe org change — but an unclear story."
      ),
      opt(
        "Défaillance de gouvernance hybride",
        "Hybrid governance failure",
        false,
        "Le projet est prédictif ; le problème est l'interprétation des exigences.",
        "The project is predictive; the issue is requirements interpretation."
      ),
    ],
  },

  "pmp-exam-002": {
    externalKey: "pmp-exam-002",
    domain: "PEOPLE",
    deliveryApproach: "HYBRID",
    processArea: "Change management",
    examDifficulty: "MEDIUM",
    scenarioType: "BEST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["change-management", "communication"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Sur Helios Connect (hybride), le directeur usine exige d'« ajouter une fonctionnalité majeure » avant le jalon Q3. Le registre des exigences montre que 80 % de la fonctionnalité est déjà planifiée au sprint 4 du volet agile — ce qui manque est une validation réglementaire du volet prédictif, pas du nouveau développement.",
    scenarioEn:
      "On Helios Connect (hybrid), the plant director demands to “add a major feature” before the Q3 milestone. The requirements register shows 80% of the feature is already planned for agile sprint 4—what is missing is predictive-track regulatory validation, not new development.",
    promptFr: "Quelle interprétation correspond le mieux à la situation réelle ?",
    promptEn: "Which interpretation best matches what is really happening?",
    explanationCorrectFr:
      "Le besoin est largement déjà couvert ; le blocage réel est la validation réglementaire du volet prédictif — pas un scope additionnel.",
    explanationCorrectEn:
      "The need is largely already covered; the real blocker is predictive-track regulatory validation—not additional scope.",
    options: [
      opt(
        "Besoin déjà planifié côté agile — blocage = validation réglementaire prédictive",
        "Need already planned on agile side — blocker = predictive regulatory validation",
        true
      ),
      opt(
        "Scope creep majeur nécessitant un change request immédiat",
        "Major scope creep requiring immediate change request",
        false,
        "Confondre validation en attente et nouveau scope dégrade la gouvernance.",
        "Confusing pending validation with new scope degrades governance."
      ),
      opt(
        "Impediment agile normal de fin d'itération",
        "Normal end-of-iteration agile impediment",
        false,
        "Le blocage est sur le volet prédictif réglementaire, pas un impediment sprint.",
        "The blocker is on the predictive regulatory track, not a sprint impediment."
      ),
      opt(
        "Conflit de ressources entre deux directeurs",
        "Resource conflict between two directors",
        false,
        "Le scénario parle de couverture des exigences et validation, pas de capacité.",
        "The scenario is about requirement coverage and validation, not capacity."
      ),
    ],
  },

  "pmp-exam-014": {
    externalKey: "pmp-exam-014",
    domain: "PEOPLE",
    deliveryApproach: "HYBRID",
    processArea: "Team leadership",
    examDifficulty: "HARD",
    scenarioType: "BEST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["leadership", "pmp-situational-thinking"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "L'équipe portail agile de Helios Connect livre en avance, mais le comité programme reproche des « retards ». En creusant, le PM découvre que le comité compare la vélocité du portail aux jalons du lot infrastructure prédictif — deux cadences différentes mesurées sur la même slide.",
    scenarioEn:
      "The Helios Connect agile portal team delivers ahead of plan, but the program committee reports “delays.” Digging in, the PM finds the committee compares portal velocity to predictive infrastructure milestones—two different cadences measured on the same slide.",
    promptFr: "Quel est le malentendu central à corriger ?",
    promptEn: "What is the central misunderstanding to correct?",
    explanationCorrectFr:
      "On compare par erreur une cadence agile à des jalons prédictifs — ce n'est pas un retard de delivery réel.",
    explanationCorrectEn:
      "An agile cadence is mistakenly compared to predictive milestones—this is not a real delivery delay.",
    options: [
      opt(
        "Métriques incompatibles — cadence agile vs jalons prédictifs",
        "Incompatible metrics — agile cadence vs predictive milestones",
        true
      ),
      opt(
        "Sous-performance de l'équipe portail",
        "Underperformance of the portal team",
        false,
        "Le portail est en avance — le problème est la lecture des indicateurs.",
        "The portal is ahead—the problem is how indicators are read."
      ),
      opt(
        "Défaillance de l'approche hybride à abandonner",
        "Hybrid approach failure to abandon",
        false,
        "Le hybride fonctionne ; c'est la gouvernance des métriques qui est confuse.",
        "Hybrid works; metric governance is confused."
      ),
      opt(
        "Risque matérialisé sur le chemin critique infrastructure",
        "Materialized risk on the infrastructure critical path",
        false,
        "Aucun risque infrastructure n'est décrit — c'est une confusion de reporting.",
        "No infrastructure risk is described—this is a reporting confusion."
      ),
    ],
  },

  "pmp-exam-072": {
    externalKey: "pmp-exam-072",
    domain: "PROCESS",
    deliveryApproach: "PREDICTIVE",
    processArea: "Schedule management",
    examDifficulty: "MEDIUM",
    scenarioType: "FIRST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["schedule", "pmp-process"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Le planning HeliosRoute affiche un retard de 10 jours sur l'approvisionnement matériel. L'équipe achats signale que le fournisseur est en cause. En vérifiant le workflow interne, le PM constate que la commande est bloquée depuis 8 jours en attente de signature du contrôle financier — le PO n'a jamais été émis.",
    scenarioEn:
      "The HeliosRoute schedule shows a 10-day delay on material procurement. The purchasing team reports the vendor is at fault. Checking the internal workflow, the PM finds the order has been stuck for 8 days awaiting financial control signature—the PO was never issued.",
    promptFr: "Quelle est la cause réelle du retard à comprendre avant d'agir ?",
    promptEn: "What is the real cause of the delay to understand before acting?",
    explanationCorrectFr:
      "Le symptôme pointe le fournisseur, mais la cause immédiate est un goulot interne d'approbation — pas encore un problème fournisseur.",
    explanationCorrectEn:
      "The symptom points to the vendor, but the immediate cause is an internal approval bottleneck—not yet a vendor problem.",
    options: [
      opt(
        "Goulot interne d'approbation — PO non émis",
        "Internal approval bottleneck — PO not issued",
        true
      ),
      opt(
        "Retard fournisseur à gérer par pénalités contractuelles",
        "Vendor delay to handle through contract penalties",
        false,
        "Pénaliser le fournisseur avant d'auditer le workflow interne ignore la cause réelle.",
        "Penalizing the vendor before auditing internal workflow ignores the real cause."
      ),
      opt(
        "Risque externe à entrer au registre pour suivi futur",
        "External risk to log for future monitoring",
        false,
        "Le retard est déjà matérialisé — c'est une issue, pas un risque futur.",
        "The delay is already materialized—this is an issue, not a future risk."
      ),
      opt(
        "Contrainte réglementaire immuable",
        "Immutable regulatory constraint",
        false,
        "Aucune contrainte légale n'est décrite — c'est un processus interne.",
        "No legal constraint is described—this is an internal process."
      ),
    ],
  },

  "pmp-exam-084": {
    externalKey: "pmp-exam-084",
    domain: "PROCESS",
    deliveryApproach: "PREDICTIVE",
    processArea: "Risk management",
    examDifficulty: "MEDIUM",
    scenarioType: "FIRST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["change-management", "pmp-process"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Le sponsor classe l'absence de serveur de secours comme « risque à surveiller ». Or, la panne survenue hier a déjà interrompu les tests d'intégration — l'équipe attend une décision sur le basculement manuel documenté dans le plan de continuité approuvé.",
    scenarioEn:
      "The sponsor classifies the missing backup server as a “risk to monitor.” However, yesterday's outage already stopped integration testing—the team awaits a decision on manual failover documented in the approved continuity plan.",
    promptFr: "Comment qualifier correctement la situation actuelle ?",
    promptEn: "How should the current situation be correctly classified?",
    explanationCorrectFr:
      "L'événement s'est produit — c'est une issue opérationnelle à traiter via le plan de continuité, pas un risque futur.",
    explanationCorrectEn:
      "The event has occurred—this is an operational issue to handle via the continuity plan, not a future risk.",
    options: [
      opt(
        "Issue matérialisée — exécuter le plan de continuité",
        "Materialized issue — execute continuity plan",
        true
      ),
      opt(
        "Risque résiduel à surveiller au prochain comité",
        "Residual risk to monitor at the next committee",
        false,
        "Confondre risk et issue retarde la réponse à une panne déjà survenue.",
        "Confusing risk and issue delays response to an outage that already happened."
      ),
      opt(
        "Assumption invalidée à re-baseline sans action",
        "Invalidated assumption to rebaseline without action",
        false,
        "Une panne active exige une réponse opérationnelle, pas seulement une mise à jour documentaire.",
        "An active outage requires operational response, not only a document update."
      ),
      opt(
        "Changement de scope pour acheter un nouveau serveur",
        "Scope change to buy a new server",
        false,
        "Le plan de continuité existe — la priorité est l'exécution, pas un nouveau scope.",
        "The continuity plan exists—priority is execution, not new scope."
      ),
    ],
  },

  "pmp-exam-108": {
    externalKey: "pmp-exam-108",
    domain: "PROCESS",
    deliveryApproach: "PREDICTIVE",
    processArea: "Scope management",
    examDifficulty: "HARD",
    scenarioType: "FIRST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["pmp-process", "pmp-situational-thinking"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Un utilisateur métier envoie un email intitulé « changement urgent de périmètre » demandant un champ supplémentaire. Le BA confirme que le champ existe dans le prototype validé au sprint 0 — l'utilisateur ne l'a pas vu car la formation a été reportée.",
    scenarioEn:
      "A business user sends an email titled “urgent scope change” requesting an extra field. The BA confirms the field exists in the prototype validated at sprint 0—the user has not seen it because training was postponed.",
    promptFr: "De quoi s'agit-il réellement ?",
    promptEn: "What is this really about?",
    explanationCorrectFr:
      "C'est un gap de familiarisation utilisateur, pas une modification de périmètre — la fonctionnalité est déjà livrée.",
    explanationCorrectEn:
      "This is a user familiarity gap, not a scope modification—the functionality is already delivered.",
    options: [
      opt(
        "Gap de formation / familiarisation — pas un changement de scope",
        "Training / familiarity gap — not a scope change",
        true
      ),
      opt(
        "Demande de changement formelle à soumettre au CCB",
        "Formal change request to submit to the CCB",
        false,
        "Traiter comme change ajoute du travail inutile — la feature existe déjà.",
        "Treating as change adds unnecessary work—the feature already exists."
      ),
      opt(
        "Defect de qualité à corriger en urgence",
        "Quality defect to fix urgently",
        false,
        "L'absence de formation n'est pas un défaut du produit livré.",
        "Missing training is not a defect in the delivered product."
      ),
      opt(
        "Assumption stakeholder devenue contrainte",
        "Stakeholder assumption turned constraint",
        false,
        "Le scénario montre une méconnaissance, pas une contrainte nouvelle.",
        "The scenario shows unfamiliarity, not a new constraint."
      ),
    ],
  },

  "pmp-exam-120": {
    externalKey: "pmp-exam-120",
    domain: "PROCESS",
    deliveryApproach: "PREDICTIVE",
    processArea: "Integration management",
    examDifficulty: "MEDIUM",
    scenarioType: "FIRST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["pmp-process", "governance"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Le comité reproche l'absence de visibilité sur le volet agile du programme Helios. Le PM du lot prédictif présente un dashboard basé sur le WBS. Le responsable du portail explique que l'équipe agile utilise un backlog et un burndown — les deux vues mesurent des objets différents.",
    scenarioEn:
      "The committee criticizes lack of visibility on the program's agile portion. The predictive-track PM presents a dashboard based on the WBS. The portal lead explains the agile team uses a backlog and burndown—the two views measure different objects.",
    promptFr: "Quel problème le comité rencontre-t-il réellement ?",
    promptEn: "What problem is the committee actually facing?",
    explanationCorrectFr:
      "Ce n'est pas une absence de visibilité mais une incompatibilité de modèles de reporting entre volet prédictif et agile.",
    explanationCorrectEn:
      "This is not missing visibility but incompatible reporting models between predictive and agile tracks.",
    options: [
      opt(
        "Modèles de reporting incompatibles — WBS vs backlog/burndown",
        "Incompatible reporting models — WBS vs backlog/burndown",
        true
      ),
      opt(
        "Échec de l'équipe agile à respecter le WBS programme",
        "Agile team failure to follow the program WBS",
        false,
        "Imposer le WBS au portail ignore le tailoring hybride légitime.",
        "Imposing WBS on the portal ignores legitimate hybrid tailoring."
      ),
      opt(
        "Défaillance de gouvernance à résoudre par micro-management",
        "Governance failure to fix through micromanagement",
        false,
        "Le problème est l'alignement des vues, pas le contrôle des daily.",
        "The issue is view alignment, not controlling dailies."
      ),
      opt(
        "Retard de livraison du portail agile",
        "Agile portal delivery delay",
        false,
        "Aucun retard n'est mentionné — seulement la forme du reporting.",
        "No delay is mentioned—only the shape of reporting."
      ),
    ],
  },

  "pmp-exam-144": {
    externalKey: "pmp-exam-144",
    domain: "PROCESS",
    deliveryApproach: "PREDICTIVE",
    processArea: "Quality management",
    examDifficulty: "EASY",
    scenarioType: "FIRST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["quality", "pmp-process"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Les tests d'acceptation échouent sur le module facturation. Le sponsor conclut que « l'équipe QA est défaillante ». L'analyse montre que les critères d'acceptation ont été modifiés informellement par le métier la veille sans passer par le processus de change — les tests suivent encore l'ancienne baseline.",
    scenarioEn:
      "User acceptance tests fail on the billing module. The sponsor concludes “the QA team is failing.” Analysis shows acceptance criteria were informally changed by business yesterday without change process—the tests still follow the old baseline.",
    promptFr: "Quelle est la cause racine à identifier avant de blâmer l'équipe QA ?",
    promptEn: "What root cause should be identified before blaming the QA team?",
    explanationCorrectFr:
      "Les critères ont changé sans baseline à jour — les échecs reflètent une incohérence d'exigences, pas une incapacité QA.",
    explanationCorrectEn:
      "Criteria changed without an updated baseline—failures reflect requirements inconsistency, not QA inability.",
    options: [
      opt(
        "Critères modifiés hors processus — baseline de test obsolète",
        "Criteria changed outside process — obsolete test baseline",
        true
      ),
      opt(
        "Incompétence de l'équipe QA à remplacer",
        "QA team incompetence to replace",
        false,
        "Blâmer QA sans auditer les exigences confond symptôme et cause.",
        "Blaming QA without auditing requirements confuses symptom and cause."
      ),
      opt(
        "Impediment agile bloquant le sprint review",
        "Agile impediment blocking sprint review",
        false,
        "Le contexte est prédictif avec UAT formels — pas un sprint review.",
        "Context is predictive with formal UAT—not a sprint review."
      ),
      opt(
        "Contrainte budgétaire empêchant plus de tests",
        "Budget constraint preventing more testing",
        false,
        "Aucune limite budget n'est mentionnée — le problème est le changement informel.",
        "No budget limit is mentioned—the issue is informal change."
      ),
    ],
  },

  "pmp-exam-062": {
    externalKey: "pmp-exam-062",
    domain: "PROCESS",
    deliveryApproach: "HYBRID",
    processArea: "Hybrid delivery",
    examDifficulty: "MEDIUM",
    scenarioType: "BEST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["pmp-hybrid", "pmp-process"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Sur Helios Connect, le portail agile ne peut pas passer en production car le certificat infrastructure du volet prédictif expire dans 48 h. Le PO du portail parle d'« impediment agile » ; l'architecte infrastructure parle de « dette de conformité ». Le certificat est pourtant déjà commandé — il manque la validation du comité sécurité prédictif.",
    scenarioEn:
      "On Helios Connect, the agile portal cannot release because the predictive infrastructure certificate expires in 48 hours. The portal PO calls it an “agile impediment”; the infrastructure architect calls it “compliance debt.” The certificate is already ordered—predictive security committee validation is missing.",
    promptFr: "Comment comprendre correctement le blocage ?",
    promptEn: "How should the blockage be correctly understood?",
    explanationCorrectFr:
      "C'est un enjeu de gouvernance hybride et validation prédictive — pas un impediment agile classique ni une simple dette technique.",
    explanationCorrectEn:
      "This is hybrid governance and predictive validation—not a classic agile impediment or simple tech debt.",
    options: [
      opt(
        "Validation gouvernance prédictive en attente — lien hybride infra/portail",
        "Pending predictive governance validation — hybrid infra/portal link",
        true
      ),
      opt(
        "Impediment agile à résoudre en daily uniquement",
        "Agile impediment to resolve in daily only",
        false,
        "Le certificat dépend du comité sécurité prédictif — hors daily pur.",
        "The certificate depends on the predictive security committee—outside a pure daily."
      ),
      opt(
        "Scope creep du portail à reprioriser",
        "Portal scope creep to reprioritize",
        false,
        "Aucun scope additionnel — le blocage est transverse gouvernance.",
        "No additional scope—the blocker is cross-cutting governance."
      ),
      opt(
        "Conflit interpersonnel PO vs architecte",
        "Interpersonal PO vs architect conflict",
        false,
        "Les labels diffèrent mais décrivent le même verrou organisationnel.",
        "Labels differ but describe the same organizational lock."
      ),
    ],
  },

  "pmp-exam-074": {
    externalKey: "pmp-exam-074",
    domain: "PROCESS",
    deliveryApproach: "HYBRID",
    processArea: "Change management",
    examDifficulty: "HARD",
    scenarioType: "BEST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["change-management", "pmp-hybrid"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Le métier demande d'« arrêter le prédictif et tout basculer en agile » après un retard sur le lot infrastructure. Le PM rappelle que le contrat réglementaire impose des jalons d'audit trimestriels sur le volet prédictif — le retard vient d'un sous-traitant, pas de la méthode.",
    scenarioEn:
      "Business asks to “stop predictive and switch everything agile” after a delay on the infrastructure package. The PM notes the regulatory contract requires quarterly audit milestones on the predictive track—the delay comes from a subcontractor, not the method.",
    promptFr: "Quelle lecture du scénario est correcte ?",
    promptEn: "Which reading of the scenario is correct?",
    explanationCorrectFr:
      "Le retard est opérationnel (sous-traitant), pas méthodologique — la contrainte réglementaire maintient le volet prédictif.",
    explanationCorrectEn:
      "The delay is operational (subcontractor), not methodological—regulatory constraint keeps the predictive track.",
    options: [
      opt(
        "Retard sous-traitant — contrainte réglementaire maintient le prédictif",
        "Subcontractor delay — regulatory constraint keeps predictive track",
        true
      ),
      opt(
        "Échec du prédictif prouvant qu'Agile seul suffit",
        "Predictive failure proving Agile alone is enough",
        false,
        "Confondre retard externe et inadaptation méthodologique ignore les contraintes.",
        "Confusing external delay and method misfit ignores constraints."
      ),
      opt(
        "Opportunité d'annuler tous les jalons d'audit",
        "Opportunity to cancel all audit milestones",
        false,
        "Les jalons d'audit sont contractuels — non négociables.",
        "Audit milestones are contractual—non-negotiable."
      ),
      opt(
        "Resistance stakeholder à traiter par escalade RH",
        "Stakeholder resistance to handle through HR escalation",
        false,
        "La demande reflète une frustration sur le retard, pas une campagne de résistance.",
        "The ask reflects frustration about delay, not an resistance campaign."
      ),
    ],
  },

  "pmp-exam-086": {
    externalKey: "pmp-exam-086",
    domain: "PROCESS",
    deliveryApproach: "HYBRID",
    processArea: "Procurement management",
    examDifficulty: "MEDIUM",
    scenarioType: "BEST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["pmp-process", "governance"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Le contrat cadre prédictif avec le fournisseur cloud impose un plafond de dépenses mensuel. L'équipe portail agile dépasse le plafond en environnement de test — le métier parle de « mauvaise négociation agile ». Le registre montre que les environnements de test agile n'étaient pas inclus dans le contrat cadre signé il y a 18 mois.",
    scenarioEn:
      "The predictive framework contract with the cloud vendor caps monthly spend. The agile portal team exceeds the cap in test environments—business calls it “bad agile negotiation.” The register shows agile test environments were not included in the framework contract signed 18 months ago.",
    promptFr: "Quelle est la nature du problème ?",
    promptEn: "What is the nature of the problem?",
    explanationCorrectFr:
      "C'est un gap de couverture contractuelle entre volet agile et contrat prédictif — pas une erreur de négociation sprint.",
    explanationCorrectEn:
      "This is a contract coverage gap between agile track and predictive contract—not a sprint negotiation error.",
    options: [
      opt(
        "Gap contractuel — environnements agile hors contrat cadre prédictif",
        "Contract gap — agile environments outside predictive framework",
        true
      ),
      opt(
        "Défaillance agile à corriger en réduisant les tests",
        "Agile failure to fix by cutting tests",
        false,
        "Réduire les tests masque un problème de gouvernance contractuelle.",
        "Cutting tests hides a contract governance problem."
      ),
      opt(
        "Risque fournisseur à classer comme résiduel",
        "Vendor risk to classify as residual",
        false,
        "Le dépassement est déjà facturé — c'est une issue contractuelle.",
        "The overrun is already billed—this is a contract issue."
      ),
      opt(
        "Préférence solution du métier vs exigence business",
        "Business solution preference vs business requirement",
        false,
        "Le scénario porte sur le contrat, pas sur une préférence fonctionnelle.",
        "The scenario is about the contract, not a functional preference."
      ),
    ],
  },

  "pmp-exam-098": {
    externalKey: "pmp-exam-098",
    domain: "PROCESS",
    deliveryApproach: "HYBRID",
    processArea: "Resource management",
    examDifficulty: "EASY",
    scenarioType: "BEST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["pmp-people", "pmp-process"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Le manager fonctionnel refuse de libérer un expert sécurité pour le portail agile, invoquant « saturation prédictif ». Le planning prédictif montre pourtant que l'expert est alloué à 30 % sur le lot infrastructure la semaine prochaine — le conflit vient d'une priorité locale mal communiquée, pas d'une absence de capacité.",
    scenarioEn:
      "The functional manager refuses to release a security expert for the agile portal, citing “predictive saturation.” The predictive schedule shows the expert is only 30% allocated to the infrastructure package next week—the conflict comes from a poorly communicated local priority, not lack of capacity.",
    promptFr: "Qu'aurait-on dû comprendre avant d'escalader ?",
    promptEn: "What should have been understood before escalating?",
    explanationCorrectFr:
      "La capacité existe au niveau programme — le blocage est une priorité locale mal alignée, pas une saturation réelle.",
    explanationCorrectEn:
      "Capacity exists at program level—the blocker is misaligned local priority, not real saturation.",
    options: [
      opt(
        "Capacité disponible — conflit de priorité locale mal communiquée",
        "Capacity available — poorly communicated local priority conflict",
        true
      ),
      opt(
        "Pénurie réelle de compétences sécurité",
        "Real security skills shortage",
        false,
        "Le planning montre 30 % d'allocation — la pénurie n'est pas avérée.",
        "The schedule shows 30% allocation—shortage is not proven."
      ),
      opt(
        "Resistance agile du manager fonctionnel",
        "Functional manager agile resistance",
        false,
        "Il invoque le prédictif — c'est un problème d'alignement, pas d'anti-agile.",
        "They cite predictive—this is alignment, not anti-agile bias."
      ),
      opt(
        "Contrainte contractuelle immuable",
        "Immutable contractual constraint",
        false,
        "Aucun contrat n'est mentionné — seulement l'allocation planning.",
        "No contract is mentioned—only schedule allocation."
      ),
    ],
  },

  "pmp-exam-110": {
    externalKey: "pmp-exam-110",
    domain: "PROCESS",
    deliveryApproach: "HYBRID",
    processArea: "Communications management",
    examDifficulty: "MEDIUM",
    scenarioType: "BEST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["communication", "pmp-situational-thinking"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Le sponsor se plaint qu'il « n'est pas informé » des livraisons portail. Le PO envoie pourtant un email hebdomadaire de vélocité. En entretien, le sponsor avoue ne pas lire les burndowns — il attend le format de statut RAG du comité prédictif qu'il connaît depuis 10 ans.",
    scenarioEn:
      "The sponsor complains they are “not informed” about portal deliveries. The PO still sends a weekly velocity email. In conversation, the sponsor admits not reading burndowns—they expect the RAG status format from the predictive committee they have known for 10 years.",
    promptFr: "Quel est le malentendu de communication ?",
    promptEn: "What is the communication misunderstanding?",
    explanationCorrectFr:
      "L'information est envoyée dans un format agile que le sponsor ne consomme pas — il faut adapter le canal, pas accuser l'équipe de silence.",
    explanationCorrectEn:
      "Information is sent in an agile format the sponsor does not consume—adapt the channel, do not accuse the team of silence.",
    options: [
      opt(
        "Format incompatible — burndown vs statut RAG attendu",
        "Incompatible format — burndown vs expected RAG status",
        true
      ),
      opt(
        "Défaillance du PO à communiquer",
        "PO failure to communicate",
        false,
        "Le PO communique — le format ne correspond pas aux attentes du sponsor.",
        "The PO communicates—the format does not match sponsor expectations."
      ),
      opt(
        "Retard de livraison non reporté",
        "Unreported delivery delay",
        false,
        "Aucun retard n'est décrit — seulement le format du message.",
        "No delay is described—only message format."
      ),
      opt(
        "Problème de gouvernance hybride à résoudre en supprimant l'agile",
        "Hybrid governance problem to fix by removing agile",
        false,
        "Adapter le reporting suffit — pas besoin d'abandonner l'agile.",
        "Adapting reporting is enough—no need to abandon agile."
      ),
    ],
  },

  "pmp-exam-180": {
    externalKey: "pmp-exam-180",
    domain: "BUSINESS_ENVIRONMENT",
    deliveryApproach: "PREDICTIVE",
    processArea: "Benefits realization",
    examDifficulty: "MEDIUM",
    scenarioType: "FIRST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["business-value", "pmp-business-environment"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Le directeur marketing exige la fonctionnalité « chatbot IA » pour la campagne printemps. Le business case approuvé vise +5 % de conversion via le parcours checkout simplifié — le chatbot n'y figure pas. Le directeur confond une préférence solution avec l'objectif de bénéfice mesurable.",
    scenarioEn:
      "The marketing director demands an “AI chatbot” feature for the spring campaign. The approved business case targets +5% conversion via simplified checkout—the chatbot is not listed. The director confuses a solution preference with the measurable benefit objective.",
    promptFr: "Quelle distinction le chef de projet doit-il clarifier ?",
    promptEn: "Which distinction should the project manager clarify?",
    explanationCorrectFr:
      "Préférence solution (chatbot) vs objectif de bénéfice (conversion checkout) — realigner sur le business case.",
    explanationCorrectEn:
      "Solution preference (chatbot) vs benefit objective (checkout conversion)—realign to the business case.",
    options: [
      opt(
        "Préférence solution vs objectif de bénéfice du business case",
        "Solution preference vs business case benefit objective",
        true
      ),
      opt(
        "Exigence business obligatoire à ajouter au scope",
        "Mandatory business requirement to add to scope",
        false,
        "Une préfrence n'est pas une exigence tant qu'elle n'est pas liée à un bénéfice mesuré.",
        "A preference is not a requirement until tied to a measured benefit."
      ),
      opt(
        "Contrainte réglementaire sur l'IA",
        "Regulatory constraint on AI",
        false,
        "Aucune contrainte légale IA n'est mentionnée dans le scénario.",
        "No AI legal constraint is mentioned in the scenario."
      ),
      opt(
        "Resistance stakeholder à gérer par négociation RH",
        "Stakeholder resistance to handle through HR negotiation",
        false,
        "Le directeur plaide pour une solution — ce n'est pas de la résistance passive.",
        "The director advocates for a solution—this is not passive resistance."
      ),
    ],
  },

  "pmp-exam-192": {
    externalKey: "pmp-exam-192",
    domain: "BUSINESS_ENVIRONMENT",
    deliveryApproach: "PREDICTIVE",
    processArea: "Organizational change",
    examDifficulty: "HARD",
    scenarioType: "FIRST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["governance", "pmp-business-environment"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Les utilisateurs pilotes critiquent « le nouveau processus imposé ». En atelier, le PM découvre qu'ils utilisent encore l'ancien outil parce que la bascule SSO prévue au jalon 2 n'a pas eu lieu — ils n'ont jamais accédé au nouveau workflow. Le problème perçu est le changement ; la cause est l'accès non basculé.",
    scenarioEn:
      "Pilot users criticize “the imposed new process.” In a workshop, the PM finds they still use the old tool because the SSO cutover planned at milestone 2 never happened—they never accessed the new workflow. The perceived problem is change; the cause is access not switched.",
    promptFr: "Quelle est la cause réelle derrière la « résistance » perçue ?",
    promptEn: "What is the real cause behind the perceived “resistance”?",
    explanationCorrectFr:
      "Ce n'est pas de la résistance au changement mais un défaut de bascule technique (SSO) — les utilisateurs n'ont pas vécu le nouveau processus.",
    explanationCorrectEn:
      "This is not change resistance but a technical cutover failure (SSO)—users have not experienced the new process.",
    options: [
      opt(
        "Bascule SSO non réalisée — utilisateurs sur l'ancien outil",
        "SSO cutover not done — users still on old tool",
        true
      ),
      opt(
        "Campagne de résistance organisationnelle",
        "Organizational resistance campaign",
        false,
        "Les utilisateurs n'ont pas accès au nouveau — ce n'est pas un boycott.",
        "Users lack access to the new system—this is not a boycott."
      ),
      opt(
        "Exigence business mal capturée au cadrage",
        "Business requirement poorly captured at framing",
        false,
        "Le workflow existe — le problème est l'accès, pas le besoin.",
        "The workflow exists—the problem is access, not the need."
      ),
      opt(
        "Assumption devenue contrainte réglementaire",
        "Assumption turned regulatory constraint",
        false,
        "Le SSO est une dépendance technique, pas une contrainte légale.",
        "SSO is a technical dependency, not a legal constraint."
      ),
    ],
  },

  "pmp-exam-170": {
    externalKey: "pmp-exam-170",
    domain: "BUSINESS_ENVIRONMENT",
    deliveryApproach: "HYBRID",
    processArea: "Portfolio alignment",
    examDifficulty: "MEDIUM",
    scenarioType: "BEST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["pmp-business-environment", "governance"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "Le comité portfolio demande d'arrêter le projet Helios Retail checkout pour lancer une app mobile. Le PM montre que le checkout livre 70 % des bénéfices annuels prévus du programme — l'app mobile n'a pas de business case approuvé, seulement une enquête interne « intéressante ».",
    scenarioEn:
      "The portfolio committee asks to stop the Helios Retail checkout project to launch a mobile app. The PM shows checkout delivers 70% of the program's planned annual benefits—the mobile app has no approved business case, only an “interesting” internal survey.",
    promptFr: "Quel argument de valeur le comité sous-estime-t-il ?",
    promptEn: "What value argument is the committee underestimating?",
    explanationCorrectFr:
      "Confondre une idée non validée (app mobile) avec la réalisation de bénéfices déjà engagée (checkout à 70 % des gains).",
    explanationCorrectEn:
      "Confusing an unvalidated idea (mobile app) with benefit realization already in flight (checkout at 70% of gains).",
    options: [
      opt(
        "Checkout porte 70 % des bénéfices — app sans business case",
        "Checkout carries 70% of benefits — app lacks business case",
        true
      ),
      opt(
        "Projet checkout en échec technique",
        "Checkout project in technical failure",
        false,
        "Aucun échec technique n'est décrit — seulement la répartition des bénéfices.",
        "No technical failure is described—only benefit distribution."
      ),
      opt(
        "Besoin mobile plus urgent que checkout",
        "Mobile need more urgent than checkout",
        false,
        "L'urgence perçue n'est pas soutenue par un business case approuvé.",
        "Perceived urgency is not supported by an approved business case."
      ),
      opt(
        "Contrainte hybride empêchant l'app mobile",
        "Hybrid constraint blocking the mobile app",
        false,
        "Le blocage est la priorisation portfolio, pas une contrainte méthodologique.",
        "The blocker is portfolio prioritization, not a methodological constraint."
      ),
    ],
  },

  "pmp-exam-182": {
    externalKey: "pmp-exam-182",
    domain: "BUSINESS_ENVIRONMENT",
    deliveryApproach: "HYBRID",
    processArea: "Compliance",
    examDifficulty: "HARD",
    scenarioType: "BEST_ACTION",
    learningObjective: "IDENTIFY",
    skills: ["governance", "pmp-business-environment"],
    type: "SINGLE_CHOICE",
    scenarioFr:
      "L'audit interne signale un « non-respect agile » car le portail n'a pas de WBS à 4 niveaux. Le responsable conformité admet en privé que la norme groupe exige une traçabilité des releases — ce que le portail documente via release notes et tags, alors que le WBS prédictif du lot infrastructure est incomplet.",
    scenarioEn:
      "Internal audit flags “agile non-compliance” because the portal lacks a 4-level WBS. The compliance lead privately admits the group standard requires release traceability—which the portal documents via release notes and tags, while the predictive infrastructure WBS is incomplete.",
    promptFr: "Quelle est l'erreur d'interprétation de l'audit ?",
    promptEn: "What is the audit's interpretation error?",
    explanationCorrectFr:
      "La norme vise la traçabilité des releases, pas la forme WBS — le portail est conforme sur l'intention ; le prédictif est lacunaire.",
    explanationCorrectEn:
      "The standard targets release traceability, not WBS form—the portal meets the intent; predictive is lacking.",
    options: [
      opt(
        "Confondre traçabilité (intention) et forme WBS — portail conforme, prédictif lacunaire",
        "Confusing traceability (intent) and WBS form — portal compliant, predictive lacking",
        true
      ),
      opt(
        "Portail agile réellement non conforme",
        "Agile portal truly non-compliant",
        false,
        "Les release notes/tags satisfont l'intention de traçabilité décrite.",
        "Release notes/tags satisfy the described traceability intent."
      ),
      opt(
        "Obligation d'abandonner l'agile pour le WBS",
        "Obligation to abandon agile for WBS",
        false,
        "Tailoring permet d'autres artefacts si l'intention est couverte.",
        "Tailoring allows other artifacts if intent is covered."
      ),
      opt(
        "Risque réglementaire nécessitant arrêt de production",
        "Regulatory risk requiring production stop",
        false,
        "Aucun risque réglementaire immédiat — c'est une lecture d'audit.",
        "No immediate regulatory risk—this is an audit reading issue."
      ),
    ],
  },
};

export function applyMisreadScenarioUpgrades(
  bank: ExamBankQuestionSeed[]
): ExamBankQuestionSeed[] {
  return bank.map((q) => MISREAD_SCENARIO_UPGRADES[q.externalKey] ?? q);
}
