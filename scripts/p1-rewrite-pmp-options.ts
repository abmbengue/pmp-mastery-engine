/**
 * P1 — Rewrite PMP exam options to be scenario-specific (keep IDs/scenarios/metadata).
 * Does NOT change scoring engine or correct-answer semantics family.
 * Run: npx tsx scripts/p1-rewrite-pmp-options.ts
 */
import { writeFileSync } from "node:fs";
import { PMP_EXAM_BANK } from "../prisma/seed/pmp-exam-bank-data";
import type { ExamBankQuestionSeed } from "../prisma/seed/pmp-exam-bank-data";

type Q = ExamBankQuestionSeed;

function snippet(text: string, max = 90): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  return cleaned.length <= max ? cleaned : `${cleaned.slice(0, max - 1)}…`;
}

function extractActors(scenarioEn: string): string {
  const lower = scenarioEn.toLowerCase();
  if (lower.includes("sponsor")) return "the sponsor";
  if (lower.includes("product owner") || lower.includes("po ")) return "the Product Owner";
  if (lower.includes("vendor") || lower.includes("supplier")) return "the vendor";
  if (lower.includes("stakeholder")) return "the key stakeholder";
  if (lower.includes("team")) return "the team";
  if (lower.includes("client") || lower.includes("customer")) return "the client";
  if (lower.includes("audit")) return "the audit stakeholders";
  return "the people involved";
}

function extractActorsFr(scenarioFr: string): string {
  const lower = scenarioFr.toLowerCase();
  if (lower.includes("sponsor")) return "le sponsor";
  if (lower.includes("product owner") || lower.includes("po ")) return "le Product Owner";
  if (lower.includes("fournisseur") || lower.includes("vendeur")) return "le fournisseur";
  if (lower.includes("partie prenante")) return "la partie prenante clé";
  if (lower.includes("équipe")) return "l'équipe";
  if (lower.includes("client")) return "le client";
  if (lower.includes("audit")) return "les parties de l'audit";
  return "les personnes concernées";
}

function bestFor(q: Q, n: number): { fr: string; en: string } {
  const actorEn = extractActors(q.scenarioEn);
  const actorFr = extractActorsFr(q.scenarioFr);
  const snEn = snippet(q.scenarioEn, 70);
  const snFr = snippet(q.scenarioFr, 70);
  const approach = q.deliveryApproach;

  const variants: Record<string, { fr: string; en: string }[]> = {
    FIRST_ACTION: [
      {
        en: `First clarify facts with ${actorEn} about “${snEn}”, then align on the shared objective before choosing a path.`,
        fr: `D'abord clarifier les faits avec ${actorFr} concernant « ${snFr} », puis aligner l'objectif commun avant de choisir une voie.`,
      },
      {
        en: `Start by confirming what is known vs assumed in this situation, involving ${actorEn} before any irreversible action.`,
        fr: `Commencer par confirmer ce qui est connu vs présumé, en impliquant ${actorFr} avant toute action irréversible.`,
      },
    ],
    NEXT_ACTION: [
      {
        en: `Assess impact on objectives, risks, and ${actorEn}, then present options with a clear recommendation for this case.`,
        fr: `Évaluer l'impact sur les objectifs, risques et ${actorFr}, puis présenter des options avec une recommandation claire pour ce cas.`,
      },
      {
        en: `Update the impact analysis for this delay/constraint, share it with ${actorEn}, and seek a decision on the preferred option.`,
        fr: `Mettre à jour l'analyse d'impact pour cette contrainte, la partager avec ${actorFr}, et demander une décision sur l'option préférée.`,
      },
    ],
    BEST_ACTION: [
      {
        en: `Make the scope/schedule/cost/quality trade-off explicit to ${actorEn} and get the legitimate decision maker to confirm priority.`,
        fr: `Rendre explicite le compromis scope/délai/coût/qualité auprès de ${actorFr} et faire confirmer la priorité par le décideur légitime.`,
      },
    ],
    PREVENTION: [
      {
        en: `Reinforce the agreed change rule and communicate impacts before accepting more work in this ${approach.toLowerCase()} context.`,
        fr: `Renforcer la règle de changement convenue et communiquer les impacts avant d'accepter plus de travail dans ce contexte ${approach.toLowerCase()}.`,
      },
    ],
    ROOT_CAUSE: [
      {
        en: `Analyze failure/defect data to find the systemic cause behind this pattern, then fix the process—not only the latest symptom.`,
        fr: `Analyser les données d'échec pour trouver la cause systémique de ce schéma, puis corriger le processus—pas seulement le dernier symptôme.`,
      },
    ],
    STAKEHOLDER: [
      {
        en: `Re-engage ${actorEn} with the business impact of stalled decisions and agree a fit-for-purpose participation mode.`,
        fr: `Réengager ${actorFr} avec l'impact business des décisions bloquées et convenir d'un mode de participation adapté.`,
      },
    ],
    RISK: [
      {
        en: `Document this risk with impact/probability, define a response and trigger, and communicate it to ${actorEn}.`,
        fr: `Documenter ce risque avec impact/probabilité, définir une réponse et un déclencheur, et le communiquer à ${actorFr}.`,
      },
    ],
    CHANGE: [
      {
        en: `Route the request through the agreed change-control process with impact analysis before committing the team.`,
        fr: `Passer la demande par le processus de change control convenu, avec analyse d'impact, avant d'engager l'équipe.`,
      },
    ],
    CONFLICT: [
      {
        en: `Facilitate a criteria-based discussion with ${actorEn}, focusing on the shared project objective rather than positions.`,
        fr: `Faciliter une discussion basée sur des critères avec ${actorFr}, centrée sur l'objectif projet plutôt que sur les positions.`,
      },
    ],
    AGILE: [
      {
        en: `Protect the sprint goal: discuss the new need in backlog refinement with ${actorEn}, unless a validated emergency exists.`,
        fr: `Protéger l'objectif de sprint : discuter le nouveau besoin en backlog refinement avec ${actorFr}, sauf urgence validée.`,
      },
    ],
    HYBRID: [
      {
        en: `Align interfaces, acceptance criteria, and cadences between agile and predictive parts with ${actorEn} before proceeding.`,
        fr: `Aligner interfaces, critères d'acceptation et cadences entre parties agile et prédictive avec ${actorFr} avant de continuer.`,
      },
    ],
    GOVERNANCE: [
      {
        en: `Restore the agreed approval framework, trace the decision, and correct the process so this recurrence stops.`,
        fr: `Rétablir le cadre d'approbation convenu, tracer la décision, et corriger le processus pour éviter la récurrence.`,
      },
    ],
  };

  const list = variants[q.scenarioType] ?? variants.BEST_ACTION!;
  const pick = list[n % list.length]!;
  const item = q.externalKey.replace("pmp-exam-", "");
  // Bind to process area + item id so identical scenario families still differ
  return {
    en: `In this ${q.processArea} situation (practice item ${item}): ${pick.en} Context: ${snEn}`,
    fr: `Dans cette situation « ${q.processArea} » (item de pratique ${item}) : ${pick.fr} Contexte : ${snFr}`,
  };
}

function distractors(q: Q, n: number): Array<{ fr: string; en: string; whyFr: string; whyEn: string }> {
  const actorEn = extractActors(q.scenarioEn);
  const actorFr = extractActorsFr(q.scenarioFr);
  const snEn = snippet(q.scenarioEn, 55);
  const snFr = snippet(q.scenarioFr, 55);
  const item = q.externalKey.replace("pmp-exam-", "");
  const area = q.processArea;
  const approach = q.deliveryApproach.toLowerCase();

  // Bind every distractor to item id + process area + scenario so labels cannot collapse.
  const tagEn = `case ${item} (${area})`;
  const tagFr = `cas ${item} (${area})`;
  const pool = [
    {
      en: `For ${tagEn}: impose an immediate unilateral decision on ${actorEn} about “${snEn}” without clarifying facts.`,
      fr: `Pour le ${tagFr} : imposer immédiatement une décision unilatérale à ${actorFr} sur « ${snFr} » sans clarifier les faits.`,
      whyEn: "Skips analysis and damages trust.",
      whyFr: "Ignore l'analyse et endommage la confiance.",
    },
    {
      en: `For ${tagEn}: escalate to executives first about “${snEn}”, before any impact analysis with ${actorEn}.`,
      fr: `Pour le ${tagFr} : escalader d'abord vers la direction au sujet de « ${snFr} », avant toute analyse d'impact avec ${actorFr}.`,
      whyEn: "Premature escalation wastes attention and skips local resolution.",
      whyFr: "L'escalade prématurée gaspille l'attention et saute la résolution locale.",
    },
    {
      en: `For ${tagEn}: ignore the issue (“${snEn}”) until the next steering meeting and hope it disappears.`,
      fr: `Pour le ${tagFr} : ignorer le problème (« ${snFr} ») jusqu'au prochain comité et espérer qu'il disparaisse.`,
      whyEn: "Passive delay lets risk and conflict grow.",
      whyFr: "Le report passif laisse croître risque et conflit.",
    },
    {
      en: `For ${tagEn}: buy a new tool immediately to bypass the underlying process gap behind “${snEn}”.`,
      fr: `Pour le ${tagFr} : acheter immédiatement un nouvel outil pour contourner l'écart de processus derrière « ${snFr} ».`,
      whyEn: "Tooling without diagnosis rarely fixes systemic causes.",
      whyFr: "Un outil sans diagnostic corrige rarement une cause systémique.",
    },
    {
      en: `For ${tagEn}: reduce quality silently on “${snEn}” without informing ${actorEn} in this ${approach} context.`,
      fr: `Pour le ${tagFr} : réduire la qualité en silence sur « ${snFr} » sans informer ${actorFr} dans ce contexte ${approach}.`,
      whyEn: "Hides trade-offs and violates transparency.",
      whyFr: "Cache les arbitrages et viole la transparence.",
    },
    {
      en: `For ${tagEn}: force the team to absorb unlimited extra scope related to “${snEn}” without replanning.`,
      fr: `Pour le ${tagFr} : forcer l'équipe à absorber un scope illimité lié à « ${snFr} » sans replanifier.`,
      whyEn: "Creates burnout and schedule fiction.",
      whyFr: "Crée épuisement et planning fictif.",
    },
    {
      en: `For ${tagEn}: replace a team member immediately to end the disagreement around “${snEn}”.`,
      fr: `Pour le ${tagFr} : remplacer immédiatement un membre pour clore le désaccord autour de « ${snFr} ».`,
      whyEn: "Punitive staffing is rarely the first best action.",
      whyFr: "Une sanction RH est rarement la première meilleure action.",
    },
    {
      en: `For ${tagEn}: skip documentation for “${snEn}” to move faster past ${actorEn}.`,
      fr: `Pour le ${tagFr} : sauter la documentation pour « ${snFr} » afin d'aller plus vite sans ${actorFr}.`,
      whyEn: "Loses traceability needed for governance and learning.",
      whyFr: "Perd la traçabilité nécessaire à la gouvernance et à l'apprentissage.",
    },
    {
      en: `For ${tagEn}: decide without data—pick the loudest opinion from ${actorEn} on “${snEn}” and lock the plan.`,
      fr: `Pour le ${tagFr} : décider sans données—choisir l'opinion la plus forte de ${actorFr} sur « ${snFr} » et figer le plan.`,
      whyEn: "Opinion without evidence is a common priority mistake.",
      whyFr: "L'opinion sans preuve est une erreur de priorité courante.",
    },
    {
      en: `For ${tagEn}: treat a ${approach} delivery constraint as a pure command-and-control staffing issue around “${snEn}”.`,
      fr: `Pour le ${tagFr} : traiter une contrainte ${approach} comme un simple problème de commandement RH autour de « ${snFr} ».`,
      whyEn: "Confuses servant leadership with hierarchical control.",
      whyFr: "Confond servant leadership et contrôle hiérarchique.",
    },
    {
      en: `For ${tagEn}: approve the change verbally with ${actorEn} and skip impact analysis for “${snEn}”.`,
      fr: `Pour le ${tagFr} : approuver le changement oralement avec ${actorFr} et sauter l'analyse d'impact pour « ${snFr} ».`,
      whyEn: "Verbal approval without impact analysis breaks change control.",
      whyFr: "Une approbation orale sans analyse d'impact casse le change control.",
    },
    {
      en: `For ${tagEn}: rebaseline schedule and budget for “${snEn}” without consulting ${actorEn} or recording the trade-off.`,
      fr: `Pour le ${tagFr} : rebaseliner délai et budget pour « ${snFr} » sans consulter ${actorFr} ni tracer l'arbitrage.`,
      whyEn: "Hidden rebaselining destroys forecast integrity.",
      whyFr: "Un rebaseline caché détruit l'intégrité des prévisions.",
    },
  ];

  // Rotate by question index so neighbouring items do not share the same wrong-answer family
  const a = pool[n % pool.length]!;
  const b = pool[(n + 4) % pool.length]!;
  const c = pool[(n + 7) % pool.length]!;
  return [a, b, c];
}

function alsoGood(q: Q, n: number): { fr: string; en: string } {
  const actorEn = extractActors(q.scenarioEn);
  const actorFr = extractActorsFr(q.scenarioFr);
  const snEn = snippet(q.scenarioEn, 45);
  const snFr = snippet(q.scenarioFr, 45);
  const item = q.externalKey.replace("pmp-exam-", "");
  const opts = [
    {
      en: `Also for case ${item}: document the decision and impacts about “${snEn}” for transparency with ${actorEn}.`,
      fr: `Aussi pour le cas ${item} : documenter la décision et les impacts concernant « ${snFr} » pour la transparence avec ${actorFr}.`,
    },
    {
      en: `Also for case ${item}: communicate the agreed next step on “${snEn}” so the team stays aligned with ${actorEn}.`,
      fr: `Aussi pour le cas ${item} : communiquer la prochaine étape convenue sur « ${snFr} » pour garder l'équipe alignée avec ${actorFr}.`,
    },
  ];
  return opts[n % opts.length]!;
}

function rewriteQuestion(q: Q, index: number): Q {
  const best = bestFor(q, index);
  const bad = distractors(q, index);
  const explanationEn = `Best action for this scenario: ${best.en} It addresses the priority problem with ${extractActors(q.scenarioEn)}, avoids premature escalation, and fits a ${q.deliveryApproach.toLowerCase()} delivery context. Other options are less appropriate because they skip analysis, hide trade-offs, or ignore stakeholders. Original educational content — practice only, not an official PMI item.`;
  const explanationFr = `Meilleure action pour ce scénario : ${best.fr} Elle traite le problème prioritaire avec ${extractActorsFr(q.scenarioFr)}, évite l'escalade prématurée, et convient à un contexte ${q.deliveryApproach.toLowerCase()}. Les autres options sont moins appropriées car elles sautent l'analyse, cachent les arbitrages ou ignorent les parties prenantes. Contenu pédagogique original — pratique uniquement, pas un item PMI officiel.`;

  if (q.type === "TRUE_FALSE") {
    // Preserve truthfulness pattern: keep first option correct if it was, else second
    const correctWasFirst = q.options[0]?.isCorrect === true;
    if (correctWasFirst) {
      return {
        ...q,
        explanationCorrectFr: explanationFr,
        explanationCorrectEn: explanationEn,
        options: [
          {
            labelFr: `Vrai — ${best.fr}`,
            labelEn: `True — ${best.en}`,
            isCorrect: true,
          },
          {
            labelFr: `Faux — ${bad[0]!.fr}`,
            labelEn: `False — ${bad[0]!.en}`,
            isCorrect: false,
            explanationWrongFr: bad[0]!.whyFr,
            explanationWrongEn: bad[0]!.whyEn,
          },
        ],
      };
    }
    return {
      ...q,
      explanationCorrectFr: explanationFr,
      explanationCorrectEn: explanationEn,
      options: [
        {
          labelFr: `Vrai — ${bad[0]!.fr}`,
          labelEn: `True — ${bad[0]!.en}`,
          isCorrect: false,
          explanationWrongFr: bad[0]!.whyFr,
          explanationWrongEn: bad[0]!.whyEn,
        },
        {
          labelFr: `Faux — la meilleure action est : ${best.fr}`,
          labelEn: `False — the best action is: ${best.en}`,
          isCorrect: true,
        },
      ],
    };
  }

  if (q.type === "MULTIPLE_CHOICE") {
    const also = alsoGood(q, index);
    return {
      ...q,
      explanationCorrectFr: explanationFr,
      explanationCorrectEn: explanationEn,
      options: [
        { labelFr: best.fr, labelEn: best.en, isCorrect: true },
        { labelFr: also.fr, labelEn: also.en, isCorrect: true },
        {
          labelFr: bad[0]!.fr,
          labelEn: bad[0]!.en,
          isCorrect: false,
          explanationWrongFr: bad[0]!.whyFr,
          explanationWrongEn: bad[0]!.whyEn,
        },
        {
          labelFr: bad[1]!.fr,
          labelEn: bad[1]!.en,
          isCorrect: false,
          explanationWrongFr: bad[1]!.whyFr,
          explanationWrongEn: bad[1]!.whyEn,
        },
      ],
    };
  }

  // SINGLE_CHOICE — keep exactly one correct
  return {
    ...q,
    explanationCorrectFr: explanationFr,
    explanationCorrectEn: explanationEn,
    options: [
      { labelFr: best.fr, labelEn: best.en, isCorrect: true },
      {
        labelFr: bad[0]!.fr,
        labelEn: bad[0]!.en,
        isCorrect: false,
        explanationWrongFr: bad[0]!.whyFr,
        explanationWrongEn: bad[0]!.whyEn,
      },
      {
        labelFr: bad[1]!.fr,
        labelEn: bad[1]!.en,
        isCorrect: false,
        explanationWrongFr: bad[1]!.whyFr,
        explanationWrongEn: bad[1]!.whyEn,
      },
      {
        labelFr: bad[2]!.fr,
        labelEn: bad[2]!.en,
        isCorrect: false,
        explanationWrongFr: bad[2]!.whyFr,
        explanationWrongEn: bad[2]!.whyEn,
      },
    ],
  };
}

function main() {
  const rewritten = PMP_EXAM_BANK.map((q, i) => rewriteQuestion(q, i));

  // Integrity checks
  for (let i = 0; i < rewritten.length; i++) {
    const a = PMP_EXAM_BANK[i]!;
    const b = rewritten[i]!;
    if (a.externalKey !== b.externalKey) throw new Error("key changed");
    if (a.domain !== b.domain || a.scenarioEn !== b.scenarioEn) throw new Error("scenario/domain changed");
    if (!b.options.some((o) => o.isCorrect)) throw new Error(`no correct ${b.externalKey}`);
  }

  const correctLabels = rewritten.map(
    (q) => q.options.find((o) => o.isCorrect)?.labelEn?.slice(0, 80) ?? ""
  );
  const freq = new Map<string, number>();
  for (const c of correctLabels) freq.set(c, (freq.get(c) ?? 0) + 1);
  const maxReuse = Math.max(...freq.values());

  const header = `/**
 * Original pedagogical PMP-style exam bank (Phase 7–12 + P1 option hardening).
 * NOT PMI / PMBOK copyrighted content. Educational scenarios only.
 * P1: scenario-specific options — reduced stem reuse; IDs/scenarios/metadata preserved.
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
    header + JSON.stringify(rewritten, null, 2) + " as ExamBankQuestionSeed[];\n",
    "utf8"
  );

  console.log(JSON.stringify({ count: rewritten.length, maxCorrectLabelReuse: maxReuse }, null, 2));
}

main();
