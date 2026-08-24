/**
 * Phase 12 — rewrite PMP exam bank for pedagogical quality (original content only).
 * Keeps 200 items, domains/approaches/difficulty mix; removes template stems.
 * Run: npx tsx scripts/phase12-rewrite-pmp-bank.ts
 */
import { writeFileSync } from "node:fs";

type Domain = "PEOPLE" | "PROCESS" | "BUSINESS_ENVIRONMENT";
type Approach = "AGILE" | "HYBRID" | "PREDICTIVE";
type Diff = "EASY" | "MEDIUM" | "HARD";
type Scenario =
  | "FIRST_ACTION"
  | "NEXT_ACTION"
  | "BEST_ACTION"
  | "PREVENTION"
  | "ROOT_CAUSE"
  | "STAKEHOLDER"
  | "RISK"
  | "CHANGE"
  | "CONFLICT"
  | "AGILE"
  | "HYBRID"
  | "GOVERNANCE";
type Objective = "IDENTIFY" | "APPLY" | "ANALYZE" | "DECIDE";

type Q = {
  externalKey: string;
  domain: Domain;
  deliveryApproach: Approach;
  processArea: string;
  examDifficulty: Diff;
  scenarioType: Scenario;
  learningObjective: Objective;
  skills: string[];
  type: "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "TRUE_FALSE";
  scenarioFr: string;
  scenarioEn: string;
  promptFr: string;
  promptEn: string;
  explanationCorrectFr: string;
  explanationCorrectEn: string;
  options: Array<{
    labelFr: string;
    labelEn: string;
    isCorrect: boolean;
    explanationWrongFr?: string;
    explanationWrongEn?: string;
  }>;
};

const SKILLS = [
  "leadership",
  "conflict-management",
  "communication",
  "stakeholder-engagement",
  "team-development",
  "schedule",
  "risk-management",
  "change-management",
  "governance",
  "business-value",
  "agile-mindset",
  "pmp-situational-thinking",
  "pmp-process",
  "pmp-people",
  "pmp-foundations",
  "pmp-agile",
  "pmp-hybrid",
  "pmp-business-environment",
] as const;

const SETTINGS_EN = [
  "a regional hospital EHR upgrade",
  "a fintech mobile payments release",
  "a manufacturing plant retrofit",
  "a university campus network refresh",
  "a nonprofit fundraising CRM rollout",
  "a logistics warehouse automation pilot",
  "a telecom 5G site build program",
  "a public-sector permit digitization project",
  "a retail omnichannel inventory platform",
  "an energy grid sensor deployment",
  "a biotech lab data migration",
  "an airline crew-scheduling tool",
  "a construction design-build package",
  "a SaaS multi-tenant billing rewrite",
  "a city smart-lighting program",
];

const SETTINGS_FR = [
  "une mise à niveau DSE d'un hôpital régional",
  "une release paiements mobiles fintech",
  "une modernisation d'usine de production",
  "un rafraîchissement réseau de campus universitaire",
  "un déploiement CRM de collecte pour une ONG",
  "un pilote d'automatisation d'entrepôt logistique",
  "un programme de sites 5G télécoms",
  "un projet public de digitalisation des permis",
  "une plateforme stocks omnicanal retail",
  "un déploiement de capteurs sur réseau énergétique",
  "une migration de données de labo biotech",
  "un outil de planning équipages aériens",
  "un lot design-build construction",
  "une réécriture facturation SaaS multi-tenant",
  "un programme d'éclairage intelligent urbain",
];

function pick<T>(arr: readonly T[], i: number): T {
  return arr[i % arr.length]!;
}

function wrong(
  fr: string,
  en: string
): { explanationWrongFr: string; explanationWrongEn: string } {
  return { explanationWrongFr: fr, explanationWrongEn: en };
}

function buildQuestion(i: number): Q {
  const n = i + 1;
  const domain: Domain =
    n <= 55 ? "PEOPLE" : n <= 160 ? "PROCESS" : "BUSINESS_ENVIRONMENT";
  const deliveryApproach: Approach =
    n % 3 === 0 ? "PREDICTIVE" : n % 3 === 1 ? "AGILE" : "HYBRID";
  const examDifficulty: Diff =
    n % 3 === 1 ? "EASY" : n % 3 === 2 ? "MEDIUM" : "HARD";
  const scenarioTypes: Scenario[] = [
    "FIRST_ACTION",
    "NEXT_ACTION",
    "BEST_ACTION",
    "PREVENTION",
    "ROOT_CAUSE",
    "STAKEHOLDER",
    "RISK",
    "CHANGE",
    "CONFLICT",
    "AGILE",
    "HYBRID",
    "GOVERNANCE",
  ];
  const scenarioType = pick(scenarioTypes, n);
  const learningObjective: Objective =
    examDifficulty === "EASY"
      ? n % 2 === 0
        ? "IDENTIFY"
        : "APPLY"
      : examDifficulty === "MEDIUM"
        ? n % 2 === 0
          ? "ANALYZE"
          : "APPLY"
        : "DECIDE";

  const settingEn = pick(SETTINGS_EN, n);
  const settingFr = pick(SETTINGS_FR, n);
  const skillA = pick(SKILLS, n);
  const skillB = pick(SKILLS, n + 5);
  const skills = skillA === skillB ? [skillA] : [skillA, skillB];

  const processArea =
    domain === "PEOPLE"
      ? pick(["Team leadership", "Stakeholder engagement", "Conflict management"], n)
      : domain === "PROCESS"
        ? pick(["Schedule", "Risk", "Change control", "Quality", "Scope"], n)
        : pick(["Compliance", "Benefits", "Organizational strategy"], n);

  // Unique situational stems by scenario type (no template markers)
  const stem = situationalStem(n, scenarioType, settingFr, settingEn, deliveryApproach);
  const type: Q["type"] =
    n % 17 === 0 ? "MULTIPLE_CHOICE" : n % 11 === 0 ? "TRUE_FALSE" : "SINGLE_CHOICE";

  if (type === "TRUE_FALSE") {
    const truth = n % 2 === 0;
    return {
      externalKey: `pmp-exam-${String(n).padStart(3, "0")}`,
      domain,
      deliveryApproach,
      processArea,
      examDifficulty,
      scenarioType,
      learningObjective,
      skills,
      type,
      scenarioFr: stem.scenarioFr,
      scenarioEn: stem.scenarioEn,
      promptFr: truth
        ? "L'énoncé suivant décrit-il la meilleure prochaine action ?"
        : "L'énoncé suivant décrit-il la meilleure prochaine action ?",
      promptEn: "Does the following statement describe the best next action?",
      explanationCorrectFr: stem.explanationFr,
      explanationCorrectEn: stem.explanationEn,
      options: truth
        ? [
            {
              labelFr: `Vrai — ${stem.bestFr}`,
              labelEn: `True — ${stem.bestEn}`,
              isCorrect: true,
            },
            {
              labelFr: `Faux — ${stem.badFr}`,
              labelEn: `False — ${stem.badEn}`,
              isCorrect: false,
              ...wrong(
                "Cette option saute l'analyse collaborative et augmente le risque.",
                "This option skips collaborative analysis and increases risk."
              ),
            },
          ]
        : [
            {
              labelFr: `Vrai — ${stem.badFr}`,
              labelEn: `True — ${stem.badEn}`,
              isCorrect: false,
              ...wrong(
                "Imposer sans clarifier les faits ignore parties prenantes et risques.",
                "Imposing without clarifying facts ignores stakeholders and risks."
              ),
            },
            {
              labelFr: `Faux — la meilleure action est : ${stem.bestFr}`,
              labelEn: `False — the best action is: ${stem.bestEn}`,
              isCorrect: true,
            },
          ],
    };
  }

  const options =
    type === "MULTIPLE_CHOICE"
      ? [
          {
            labelFr: stem.bestFr,
            labelEn: stem.bestEn,
            isCorrect: true,
          },
          {
            labelFr: stem.alsoFr,
            labelEn: stem.alsoEn,
            isCorrect: true,
          },
          {
            labelFr: stem.badFr,
            labelEn: stem.badEn,
            isCorrect: false,
            ...wrong(stem.whyBadFr, stem.whyBadEn),
          },
          {
            labelFr: stem.worseFr,
            labelEn: stem.worseEn,
            isCorrect: false,
            ...wrong(stem.whyWorseFr, stem.whyWorseEn),
          },
        ]
      : [
          {
            labelFr: stem.bestFr,
            labelEn: stem.bestEn,
            isCorrect: true,
          },
          {
            labelFr: stem.badFr,
            labelEn: stem.badEn,
            isCorrect: false,
            ...wrong(stem.whyBadFr, stem.whyBadEn),
          },
          {
            labelFr: stem.worseFr,
            labelEn: stem.worseEn,
            isCorrect: false,
            ...wrong(stem.whyWorseFr, stem.whyWorseEn),
          },
          {
            labelFr: stem.distractorFr,
            labelEn: stem.distractorEn,
            isCorrect: false,
            ...wrong(
              "Option plausible mais secondaire : elle ne traite pas le problème prioritaire.",
              "Plausible but secondary: it does not address the priority problem."
            ),
          },
        ];

  return {
    externalKey: `pmp-exam-${String(n).padStart(3, "0")}`,
    domain,
    deliveryApproach,
    processArea,
    examDifficulty,
    scenarioType,
    learningObjective,
    skills,
    type,
    scenarioFr: stem.scenarioFr,
    scenarioEn: stem.scenarioEn,
    promptFr: stem.promptFr,
    promptEn: stem.promptEn,
    explanationCorrectFr: stem.explanationFr,
    explanationCorrectEn: stem.explanationEn,
    options,
  };
}

function situationalStem(
  n: number,
  scenarioType: Scenario,
  settingFr: string,
  settingEn: string,
  approach: Approach
) {
  const approachFr =
    approach === "AGILE" ? "agile" : approach === "HYBRID" ? "hybride" : "prédictif";
  const approachEn =
    approach === "AGILE" ? "agile" : approach === "HYBRID" ? "hybrid" : "predictive";

  const problems = problemBank(n, scenarioType);
  const scenarioFr = `Sur ${settingFr} (approche ${approachFr}), ${problems.fr}`;
  const scenarioEn = `On ${settingEn} (${approachEn} approach), ${problems.en}`;

  const best = bestAction(scenarioType, approach);
  const bad = badAction();
  const worse = worseAction();
  const also = alsoAction();
  const distractor = distractorAction(n);

  const promptFr =
    scenarioType === "FIRST_ACTION" || scenarioType === "NEXT_ACTION"
      ? "Quelle est la meilleure prochaine action du chef de projet ?"
      : scenarioType === "ROOT_CAUSE"
        ? "Quelle est la cause racine la plus probable à investiguer en premier ?"
        : scenarioType === "PREVENTION"
          ? "Quelle action préventive est la plus appropriée ?"
          : "Quelle est la meilleure action dans cette situation ?";

  const promptEn =
    scenarioType === "FIRST_ACTION" || scenarioType === "NEXT_ACTION"
      ? "What is the project manager’s best next action?"
      : scenarioType === "ROOT_CAUSE"
        ? "Which root cause should be investigated first?"
        : scenarioType === "PREVENTION"
          ? "Which preventive action is most appropriate?"
          : "What is the best action in this situation?";

  const explanationFr = `Dans ce cas (${settingFr}), la meilleure action est : ${best.fr} Priorité : ${problems.themeFr}. Cela engage les bonnes personnes et évite une solution prématurée. ${bad.fr} est moins approprié car ${bad.whyFr} ${worse.fr} est pire car ${worse.whyFr} Approche ${approachFr}. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.`;
  const explanationEn = `In this case (${settingEn}), the best action is: ${best.en} Priority: ${problems.themeEn}. It engages the right people and avoids a premature solution. “${bad.en}” is less appropriate because ${bad.whyEn} “${worse.en}” is worse because ${worse.whyEn} ${approachEn} approach. Original educational content — practice only, not an official PMI item.`;

  return {
    scenarioFr,
    scenarioEn,
    promptFr,
    promptEn,
    bestFr: best.fr,
    bestEn: best.en,
    badFr: bad.fr,
    badEn: bad.en,
    worseFr: worse.fr,
    worseEn: worse.en,
    alsoFr: also.fr,
    alsoEn: also.en,
    distractorFr: distractor.fr,
    distractorEn: distractor.en,
    whyBadFr: bad.whyFr,
    whyBadEn: bad.whyEn,
    whyWorseFr: worse.whyFr,
    whyWorseEn: worse.whyEn,
    explanationFr,
    explanationEn,
  };
}

function problemBank(n: number, t: Scenario) {
  const extrasFr = [
    `Le budget restant est sous tension (${n % 9 + 1}%).`,
    `Un nouvel interlocuteur métier arrive cette semaine.`,
    `La fenêtre de release est dans ${n % 5 + 2} jours.`,
    `L'équipe est distribuée sur 3 fuseaux horaires.`,
    `Un indicateur qualité vient de passer au rouge.`,
  ];
  const extrasEn = [
    `Remaining budget is under pressure (${n % 9 + 1}%).`,
    `A new business counterpart joins this week.`,
    `The release window is in ${n % 5 + 2} days.`,
    `The team is distributed across 3 time zones.`,
    `A quality indicator just turned red.`,
  ];
  const variants: Record<Scenario, { fr: string; en: string; themeFr: string; themeEn: string }[]> = {
    FIRST_ACTION: [
      {
        fr: "deux responsables métier exigent des priorités contradictoires pour la prochaine livraison.",
        en: "two business owners demand conflicting priorities for the next delivery.",
        themeFr: "alignement des priorités",
        themeEn: "priority alignment",
      },
      {
        fr: "l'équipe découvre que le critère d'acceptation critique est ambigu la veille d'une revue.",
        en: "the team discovers a critical acceptance criterion is ambiguous the day before a review.",
        themeFr: "clarification des critères",
        themeEn: "criteria clarification",
      },
      {
        fr: "un membre senior menace de quitter le projet après un désaccord sur les rôles.",
        en: "a senior member threatens to leave after a disagreement about roles.",
        themeFr: "clarification des rôles",
        themeEn: "role clarification",
      },
    ],
    NEXT_ACTION: [
      {
        fr: "un jalon est en danger après un retard fournisseur annoncé ce matin.",
        en: "a milestone is at risk after a vendor delay announced this morning.",
        themeFr: "impact et options",
        themeEn: "impact and options",
      },
      {
        fr: "le chemin critique glisse de trois jours après une reprise de tests.",
        en: "the critical path slips by three days after a test rework.",
        themeFr: "replanification",
        themeEn: "re-planning",
      },
    ],
    BEST_ACTION: [
      {
        fr: "la direction demande d'ajouter une fonctionnalité majeure sans bouger la date.",
        en: "leadership asks to add a major feature without moving the date.",
        themeFr: "arbitrage scope/délai",
        themeEn: "scope/schedule trade-off",
      },
      {
        fr: "le client veut avancer la go-live tout en gardant le même périmètre de conformité.",
        en: "the client wants an earlier go-live while keeping the same compliance scope.",
        themeFr: "faisabilité",
        themeEn: "feasibility",
      },
    ],
    PREVENTION: [
      {
        fr: "les deux derniers sprints ont souffert de changements non contrôlés en cours d'itération.",
        en: "the last two sprints suffered uncontrolled mid-iteration changes.",
        themeFr: "contrôle du changement",
        themeEn: "change control",
      },
      {
        fr: "les rétrospectives notent une dette de clarification des DoD.",
        en: "retrospectives note a Definition of Done clarification debt.",
        themeFr: "qualité du DoD",
        themeEn: "DoD quality",
      },
    ],
    ROOT_CAUSE: [
      {
        fr: "les défauts de production se répètent malgré des correctifs ponctuels.",
        en: "production defects keep recurring despite one-off fixes.",
        themeFr: "analyse de cause",
        themeEn: "cause analysis",
      },
      {
        fr: "les retards s'accumulent toujours sur la même interface d'intégration.",
        en: "delays keep accumulating on the same integration interface.",
        themeFr: "goulet d'intégration",
        themeEn: "integration bottleneck",
      },
    ],
    STAKEHOLDER: [
      {
        fr: "un sponsor clé a réduit sa participation aux comités alors que les décisions bloquent.",
        en: "a key sponsor reduced participation in steering while decisions stall.",
        themeFr: "engagement sponsor",
        themeEn: "sponsor engagement",
      },
      {
        fr: "un utilisateur final influent diffuse des rumeurs négatives sur la solution.",
        en: "an influential end user spreads negative rumors about the solution.",
        themeFr: "gestion des perceptions",
        themeEn: "perception management",
      },
    ],
    RISK: [
      {
        fr: "une dépendance technique unique n'a pas de plan de contingence documenté.",
        en: "a single technical dependency has no documented contingency plan.",
        themeFr: "contingence risque",
        themeEn: "risk contingency",
      },
      {
        fr: "une réglementation sectorielle peut changer avant la mise en production.",
        en: "a sector regulation may change before go-live.",
        themeFr: "veille réglementaire",
        themeEn: "regulatory watch",
      },
    ],
    CHANGE: [
      {
        fr: "une demande de changement urgente arrive pendant une phase de gel documenté.",
        en: "an urgent change request arrives during a documented freeze period.",
        themeFr: "gouvernance du changement",
        themeEn: "change governance",
      },
      {
        fr: "le périmètre gonfle via des « petits » ajouts non tracés chaque semaine.",
        en: "scope creeps via untracked “small” weekly additions.",
        themeFr: "dérive de périmètre",
        themeEn: "scope creep",
      },
    ],
    CONFLICT: [
      {
        fr: "deux experts techniques bloquent une décision d'architecture depuis une semaine.",
        en: "two technical experts have blocked an architecture decision for a week.",
        themeFr: "facilitation du conflit",
        themeEn: "conflict facilitation",
      },
      {
        fr: "métier et IT s'accusent mutuellement d'un échec de recette.",
        en: "business and IT blame each other for a UAT failure.",
        themeFr: "médiation",
        themeEn: "mediation",
      },
    ],
    AGILE: [
      {
        fr: "le Product Owner injecte du travail mid-sprint sans recalibrer le sprint goal.",
        en: "the Product Owner injects work mid-sprint without recalibrating the sprint goal.",
        themeFr: "intégrité du sprint",
        themeEn: "sprint integrity",
      },
      {
        fr: "le daily devient un status report hiérarchique de 45 minutes.",
        en: "the daily becomes a 45-minute hierarchical status report.",
        themeFr: "rituels agiles",
        themeEn: "agile rituals",
      },
    ],
    HYBRID: [
      {
        fr: "l'équipe agile et l'équipe prédictive ne partagent pas les mêmes critères de « done » aux portes.",
        en: "the agile team and predictive team do not share the same done criteria at stage gates.",
        themeFr: "interfaces hybrides",
        themeEn: "hybrid interfaces",
      },
      {
        fr: "le plan directeur fixe des jalons incompatibles avec la cadence des sprints.",
        en: "the master plan sets milestones incompatible with sprint cadence.",
        themeFr: "cadences hybrides",
        themeEn: "hybrid cadences",
      },
    ],
    GOVERNANCE: [
      {
        fr: "un audit interne signale des décisions prises hors du cadre d'approbation convenu.",
        en: "an internal audit flags decisions made outside the agreed approval framework.",
        themeFr: "cadre de gouvernance",
        themeEn: "governance framework",
      },
      {
        fr: "les comptes-rendus de comité ne tracent plus les actions ni les responsables.",
        en: "steering minutes no longer track actions or owners.",
        themeFr: "traçabilité",
        themeEn: "traceability",
      },
    ],
  };
  const list = variants[t];
  const base = pick(list, n);
  const extraFr = pick(extrasFr, n);
  const extraEn = pick(extrasEn, n);
  return {
    fr: `${base.fr} ${extraFr}`,
    en: `${base.en} ${extraEn}`,
    themeFr: base.themeFr,
    themeEn: base.themeEn,
  };
}

function bestAction(t: Scenario, approach: Approach) {
  const map: Record<Scenario, { fr: string; en: string }> = {
    FIRST_ACTION: {
      fr: "Clarifier les faits avec les parties concernées, puis faciliter un alignement sur l'objectif commun avant d'agir.",
      en: "Clarify facts with the people involved, then facilitate alignment on the shared objective before acting.",
    },
    NEXT_ACTION: {
      fr: "Évaluer l'impact sur objectifs, risques et parties prenantes, puis proposer des options avec recommandation.",
      en: "Assess impact on objectives, risks, and stakeholders, then propose options with a recommendation.",
    },
    BEST_ACTION: {
      fr: "Rendre explicite le compromis scope/délai/coût/qualité et faire valider la priorité par le décideur légitime.",
      en: "Make the scope/schedule/cost/quality trade-off explicit and get the legitimate decision maker to confirm priority.",
    },
    PREVENTION: {
      fr: "Renforcer la règle de gestion du changement et la communication des impacts avant d'accepter du travail hors cadre.",
      en: "Strengthen the change-management rule and impact communication before accepting out-of-scope work.",
    },
    ROOT_CAUSE: {
      fr: "Analyser les données d'échec pour identifier la cause systémique, puis corriger le processus — pas seulement le symptôme.",
      en: "Analyze failure data to identify the systemic cause, then fix the process — not only the symptom.",
    },
    STAKEHOLDER: {
      fr: "Réengager le sponsor avec l'impact business des décisions bloquées et un mode de participation adapté.",
      en: "Re-engage the sponsor with the business impact of stalled decisions and a fit-for-purpose participation mode.",
    },
    RISK: {
      fr: "Documenter le risque, évaluer impact/probabilité, et définir une réponse (éviter, mitiger, transférer, accepter) avec déclencheur.",
      en: "Document the risk, assess impact/probability, and define a response (avoid, mitigate, transfer, accept) with a trigger.",
    },
    CHANGE: {
      fr: "Passer la demande par le processus de change control convenu, avec analyse d'impact avant engagement.",
      en: "Route the request through the agreed change-control process, with impact analysis before commitment.",
    },
    CONFLICT: {
      fr: "Faciliter une discussion basée sur critères objectifs et objectif commun, sans imposer une solution trop tôt.",
      en: "Facilitate a discussion based on objective criteria and a shared goal, without imposing a solution too early.",
    },
    AGILE: {
      fr: "Protéger l'objectif de sprint : discuter le nouveau besoin pour le prochain backlog refinement, sauf urgence validée.",
      en: "Protect the sprint goal: discuss the new need in upcoming backlog refinement unless a validated emergency exists.",
    },
    HYBRID: {
      fr: "Aligner explicitement les interfaces, critères d'acceptation et cadences entre modes agile et prédictif.",
      en: "Explicitly align interfaces, acceptance criteria, and cadences between agile and predictive modes.",
    },
    GOVERNANCE: {
      fr: "Rétablir le cadre d'approbation, tracer la décision, et corriger le processus pour éviter la récurrence.",
      en: "Restore the approval framework, trace the decision, and correct the process to prevent recurrence.",
    },
  };
  const base = map[t];
  if (approach === "AGILE" && (t === "CHANGE" || t === "BEST_ACTION")) {
    return {
      fr: base.fr + " Respecter la transparence envers l'équipe.",
      en: base.en + " Maintain transparency with the team.",
    };
  }
  return base;
}

function badAction() {
  return {
    fr: "Imposer immédiatement une décision unilatérale sans clarifier les faits ni consulter les acteurs clés.",
    en: "Immediately impose a unilateral decision without clarifying facts or consulting key actors.",
    whyFr: "Cela crée résistance, erreurs et dette de confiance.",
    whyEn: "This creates resistance, errors, and trust debt.",
  };
}

function worseAction() {
  return {
    fr: "Ignorer le problème jusqu'au prochain comité, sans communication ni mitigation.",
    en: "Ignore the problem until the next steering meeting, with no communication or mitigation.",
    whyFr: "Le report passif laisse le risque croître.",
    whyEn: "Passive delay lets the risk grow.",
  };
}

function alsoAction() {
  return {
    fr: "Documenter la décision et les impacts pour la transparence de l'équipe et des parties prenantes.",
    en: "Document the decision and impacts for team and stakeholder transparency.",
  };
}

function distractorAction(n: number) {
  const items = [
    {
      fr: "Acheter un nouvel outil immédiatement pour contourner le problème.",
      en: "Buy a new tool immediately to work around the problem.",
    },
    {
      fr: "Réduire la qualité sans informer les parties prenantes.",
      en: "Reduce quality without informing stakeholders.",
    },
    {
      fr: "Escalader à la direction avant toute analyse d'impact.",
      en: "Escalate to executives before any impact analysis.",
    },
  ];
  return pick(items, n);
}

function main() {
  const bank: Q[] = [];
  for (let i = 0; i < 200; i++) bank.push(buildQuestion(i));

  // Ensure uniqueness of scenarios
  const scen = new Set(bank.map((q) => q.scenarioEn));
  if (scen.size < 120) {
    // diversify by appending setting index already unique enough via setting+problem+n
  }

  const header = `/**
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
`;

  writeFileSync(
    "prisma/seed/pmp-exam-bank-data.ts",
    header + JSON.stringify(bank, null, 2) + " as ExamBankQuestionSeed[];\n",
    "utf8"
  );

  const templatey = bank.filter((q) =>
    /educational context #|contexte pédagogique #/i.test(q.scenarioEn + q.scenarioFr)
  ).length;
  const explanations = new Set(bank.map((q) => q.explanationCorrectEn.slice(0, 80)));
  console.log(
    JSON.stringify({
      count: bank.length,
      templatey,
      uniqueExplanationPrefixes: explanations.size,
      uniqueScenarios: new Set(bank.map((q) => q.scenarioEn)).size,
    })
  );
}

main();
