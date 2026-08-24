/**
 * Phase 12 — enrich PF/CF/PMP compact lesson catalogs in place.
 * Run: npx tsx scripts/phase12-enrich-lessons.ts
 */
import { writeFileSync } from "node:fs";
import {
  enrichLegacyBody,
  buildShortScript,
} from "../prisma/seed/content/pedagogy";
import type { CompactLesson } from "../prisma/seed/content/compact";

type LessonWithExtras = CompactLesson & {
  situation?: unknown;
  shortScriptFr?: string;
  shortScriptEn?: string;
  keyTakeawayFr?: string;
  keyTakeawayEn?: string;
};

function serializeLesson(l: LessonWithExtras): string {
  const lines: string[] = ["  {"];
  const push = (k: string, v: unknown) => {
    lines.push(`    ${k}: ${JSON.stringify(v)},`);
  };
  push("slug", l.slug);
  push("titleFr", l.titleFr);
  push("titleEn", l.titleEn);
  push("descriptionFr", l.descriptionFr);
  push("descriptionEn", l.descriptionEn);
  push("moduleSlug", l.moduleSlug);
  push("sortOrder", l.sortOrder);
  push("estimatedMinutes", l.estimatedMinutes);
  push("difficulty", l.difficulty);
  push("skillSlug", l.skillSlug);
  push("learningObjective", l.learningObjective);
  if (l.isShort) {
    push("isShort", true);
    if (l.shortTopic) push("shortTopic", l.shortTopic);
    if (l.shortDurationSeconds != null)
      push("shortDurationSeconds", l.shortDurationSeconds);
  }
  if (l.shortScriptFr) push("shortScriptFr", l.shortScriptFr);
  if (l.shortScriptEn) push("shortScriptEn", l.shortScriptEn);
  if (l.keyTakeawayFr) push("keyTakeawayFr", l.keyTakeawayFr);
  if (l.keyTakeawayEn) push("keyTakeawayEn", l.keyTakeawayEn);
  push("textBodyFr", l.textBodyFr);
  push("textBodyEn", l.textBodyEn);
  push("flashcardFrontFr", l.flashcardFrontFr);
  push("flashcardFrontEn", l.flashcardFrontEn);
  push("flashcardBackFr", l.flashcardBackFr);
  push("flashcardBackEn", l.flashcardBackEn);
  push("exercisePromptFr", l.exercisePromptFr);
  push("exercisePromptEn", l.exercisePromptEn);
  if (l.situation) {
    lines.push(`    situation: ${JSON.stringify(l.situation, null, 6).replace(/\n/g, "\n    ")},`);
  }
  // question with optional wrong explanations
  const q = l.question;
  lines.push(`    question: {`);
  pushIndented(lines, "type", q.type, 6);
  pushIndented(lines, "promptFr", q.promptFr, 6);
  pushIndented(lines, "promptEn", q.promptEn, 6);
  pushIndented(lines, "explanationCorrectFr", q.explanationCorrectFr, 6);
  pushIndented(lines, "explanationCorrectEn", q.explanationCorrectEn, 6);
  pushIndented(lines, "difficulty", q.difficulty, 6);
  lines.push(`      options: [`);
  for (const opt of q.options) {
    const o: Record<string, unknown> = {
      labelFr: opt.labelFr,
      labelEn: opt.labelEn,
      isCorrect: opt.isCorrect,
    };
    if ("explanationWrongFr" in opt && (opt as { explanationWrongFr?: string }).explanationWrongFr) {
      o.explanationWrongFr = (opt as { explanationWrongFr?: string }).explanationWrongFr;
      o.explanationWrongEn = (opt as { explanationWrongEn?: string }).explanationWrongEn;
    } else if (!opt.isCorrect) {
      o.explanationWrongFr = `Cette option est moins appropriée pour « ${l.titleFr} ». Relisez l'explication et l'exemple.`;
      o.explanationWrongEn = `This option is less appropriate for “${l.titleEn}”. Re-read the explanation and example.`;
    }
    lines.push(`        ${JSON.stringify(o)},`);
  }
  lines.push(`      ],`);
  lines.push(`    },`);
  lines.push(`  }`);
  return lines.join("\n");
}

function pushIndented(lines: string[], k: string, v: unknown, spaces: number) {
  lines.push(`${" ".repeat(spaces)}${k}: ${JSON.stringify(v)},`);
}

function enrichLesson(l: LessonWithExtras): LessonWithExtras {
  const bodies = enrichLegacyBody(l);
  const exerciseFr = l.exercisePromptFr.includes(":")
    ? l.exercisePromptFr
    : `Pratique : ${l.exercisePromptFr} Puis notez une erreur à éviter.`;
  const exerciseEn = l.exercisePromptEn.includes(":")
    ? l.exercisePromptEn
    : `Practice: ${l.exercisePromptEn} Then note one mistake to avoid.`;

  const next: LessonWithExtras = {
    ...l,
    textBodyFr: bodies.textBodyFr,
    textBodyEn: bodies.textBodyEn,
    exercisePromptFr: exerciseFr,
    exercisePromptEn: exerciseEn,
    estimatedMinutes: Math.max(l.estimatedMinutes, 8),
  };

  if (l.isShort) {
    const short = buildShortScript({
      titleFr: l.titleFr,
      titleEn: l.titleEn,
      textBodyFr: bodies.textBodyFr,
      textBodyEn: bodies.textBodyEn,
    });
    next.shortScriptFr = short.scriptFr;
    next.shortScriptEn = short.scriptEn;
    next.keyTakeawayFr = short.takeawayFr;
    next.keyTakeawayEn = short.takeawayEn;
    next.shortDurationSeconds = Math.min(
      180,
      Math.max(90, l.shortDurationSeconds ?? 150)
    );
  }

  return next;
}

function writeCatalog(
  path: string,
  header: string,
  modulesExport: string,
  lessonsName: string,
  lessons: LessonWithExtras[],
  extraType?: string
) {
  const body = lessons.map((l, i) => {
    const s = serializeLesson(l);
    return i < lessons.length - 1 ? s + "," : s;
  }).join("\n");

  const content = `${header}
${extraType ?? ""}
${modulesExport}

export const ${lessonsName}: CompactLesson[] = [
${body}
];
`;
  writeFileSync(path, content, "utf8");
}

async function main() {
  const { PF_LESSONS, PF_MODULES } = await import("../prisma/seed/content/pf-lessons");
  const { CF_LESSONS, CF_MODULES } = await import("../prisma/seed/content/cf-lessons");
  const { PMP_LESSONS, PMP_MODULES } = await import("../prisma/seed/content/pmp-lessons");

  const pf = (PF_LESSONS as LessonWithExtras[]).map(enrichLesson);
  const cf = (CF_LESSONS as LessonWithExtras[]).map(enrichLesson);

  // Add CF capital structure lessons if missing
  const extraCf: LessonWithExtras[] = [];
  if (!cf.some((l) => l.slug === "capital-structure-basics")) {
    extraCf.push(
      enrichLesson({
        slug: "capital-structure-basics",
        titleFr: "Bases de la structure du capital",
        titleEn: "Capital Structure Basics",
        descriptionFr: "Comprendre comment dette et capitaux propres financent l'entreprise.",
        descriptionEn: "Understand how debt and equity fund the firm.",
        moduleSlug: "dcf",
        sortOrder: 100,
        estimatedMinutes: 9,
        difficulty: "INTERMEDIATE",
        skillSlug: "cf-capital-structure",
        learningObjective: "ANALYZE",
        textBodyFr:
          "La structure du capital décrit le mix entre dette et capitaux propres. Plus de dette peut amplifier le rendement des fonds propres mais augmente le risque financier. C'est un arbitrage pédagogique risque/coût — pas une recommandation de levier.",
        textBodyEn:
          "Capital structure describes the mix of debt and equity. More debt can amplify equity returns but raises financial risk. It is a pedagogical risk/cost trade-off — not a leverage recommendation.",
        flashcardFrontFr: "Structure du capital",
        flashcardFrontEn: "Capital structure",
        flashcardBackFr: "Mix dette / capitaux propres finançant l'actif.",
        flashcardBackEn: "Debt / equity mix funding the firm's assets.",
        exercisePromptFr: "Citez un avantage et un risque d'augmenter la dette.",
        exercisePromptEn: "Name one benefit and one risk of increasing debt.",
        question: {
          type: "SINGLE_CHOICE",
          promptFr: "Augmenter la dette dans la structure du capital…",
          promptEn: "Increasing debt in the capital structure…",
          explanationCorrectFr:
            "Peut amplifier le rendement des fonds propres mais augmente le risque financier.",
          explanationCorrectEn:
            "Can amplify equity returns but increases financial risk.",
          difficulty: 2,
          options: [
            { labelFr: "Supprime tout risque", labelEn: "Removes all risk", isCorrect: false },
            {
              labelFr: "Peut amplifier rendement et risque",
              labelEn: "Can amplify return and risk",
              isCorrect: true,
            },
            { labelFr: "N'a aucun effet", labelEn: "Has no effect", isCorrect: false },
          ],
        },
      })
    );
  }
  if (!cf.some((l) => l.slug === "cost-of-debt")) {
    extraCf.push(
      enrichLesson({
        slug: "cost-of-debt",
        titleFr: "Coût de la dette",
        titleEn: "Cost of Debt",
        descriptionFr: "Estimer le coût pédagogique de la dette avant WACC.",
        descriptionEn: "Estimate the pedagogical cost of debt before WACC.",
        moduleSlug: "dcf",
        sortOrder: 101,
        estimatedMinutes: 9,
        difficulty: "INTERMEDIATE",
        skillSlug: "cf-capital-structure",
        learningObjective: "APPLY",
        textBodyFr:
          "Le coût de la dette est le taux effectif que l'entreprise paie sur ses emprunts, souvent après effet fiscal pédagogique. Un coût de dette plus élevé augmente le WACC et baisse la valeur actualisée dans un DCF simplifié.",
        textBodyEn:
          "Cost of debt is the effective rate the firm pays on borrowings, often after a pedagogical tax effect. A higher debt cost raises WACC and lowers present value in a simplified DCF.",
        flashcardFrontFr: "Coût de la dette",
        flashcardFrontEn: "Cost of debt",
        flashcardBackFr: "Taux effectif payé sur les emprunts.",
        flashcardBackEn: "Effective rate paid on borrowings.",
        exercisePromptFr: "Pourquoi le coût de la dette entre dans le WACC ?",
        exercisePromptEn: "Why does cost of debt enter WACC?",
        question: {
          type: "TRUE_FALSE",
          promptFr: "Le coût de la dette influence le WACC.",
          promptEn: "Cost of debt influences WACC.",
          explanationCorrectFr: "Vrai. Le WACC pondère coût de la dette et coût des fonds propres.",
          explanationCorrectEn: "True. WACC weights cost of debt and cost of equity.",
          difficulty: 2,
          options: [
            { labelFr: "Vrai", labelEn: "True", isCorrect: true },
            { labelFr: "Faux", labelEn: "False", isCorrect: false },
          ],
        },
      })
    );
  }
  if (!cf.some((l) => l.slug === "cost-of-equity")) {
    extraCf.push(
      enrichLesson({
        slug: "cost-of-equity",
        titleFr: "Coût des fonds propres",
        titleEn: "Cost of Equity",
        descriptionFr: "Comprendre le rendement exigé par les actionnaires (pédagogique).",
        descriptionEn: "Understand the return required by equity holders (educational).",
        moduleSlug: "dcf",
        sortOrder: 102,
        estimatedMinutes: 9,
        difficulty: "INTERMEDIATE",
        skillSlug: "cf-capital-structure",
        learningObjective: "ANALYZE",
        textBodyFr:
          "Le coût des fonds propres représente le rendement exigé par les actionnaires pour le risque supporté. Plus le risque perçu est élevé, plus ce coût monte — ce qui augmente le WACC. Illustration pédagogique, pas un modèle CAPM certifié.",
        textBodyEn:
          "Cost of equity is the return equity holders require for the risk they bear. Higher perceived risk raises this cost — and WACC. Pedagogical illustration, not a certified CAPM model.",
        flashcardFrontFr: "Coût des fonds propres",
        flashcardFrontEn: "Cost of equity",
        flashcardBackFr: "Rendement exigé par les actionnaires.",
        flashcardBackEn: "Return required by equity holders.",
        exercisePromptFr: "Reliez risque perçu et coût des fonds propres en une phrase.",
        exercisePromptEn: "Link perceived risk and cost of equity in one sentence.",
        question: {
          type: "SINGLE_CHOICE",
          promptFr: "Si le risque perçu augmente, le coût des fonds propres…",
          promptEn: "If perceived risk rises, cost of equity…",
          explanationCorrectFr: "Tend à augmenter, ce qui peut hausser le WACC.",
          explanationCorrectEn: "Tends to increase, which can raise WACC.",
          difficulty: 2,
          options: [
            { labelFr: "Baisse toujours", labelEn: "Always falls", isCorrect: false },
            { labelFr: "Tend à augmenter", labelEn: "Tends to increase", isCorrect: true },
            { labelFr: "Devient nul", labelEn: "Becomes zero", isCorrect: false },
          ],
        },
      })
    );
  }

  const cfAll = [...cf, ...extraCf].map((l) =>
    l.moduleSlug === "dcf" && l.sortOrder >= 100
      ? { ...l, sortOrder: 6 + (l.sortOrder - 100) }
      : l
  );

  const pmp = (PMP_LESSONS as LessonWithExtras[]).map(enrichLesson);

  const header = `import type { CompactLesson } from "./compact";\n`;

  writeCatalog(
    "prisma/seed/content/pf-lessons.ts",
    header,
    `export const PF_MODULES = ${JSON.stringify(PF_MODULES, null, 2)};`,
    "PF_LESSONS",
    pf
  );
  writeCatalog(
    "prisma/seed/content/cf-lessons.ts",
    header,
    `export const CF_MODULES = ${JSON.stringify(CF_MODULES, null, 2)};`,
    "CF_LESSONS",
    cfAll
  );

  // PMP keeps situation type — rewrite with type export preserved
  const pmpHeader = `import type { CompactLesson } from "./compact";

export type PmpLesson = CompactLesson & {
  situation?: {
    scenarioFr: string;
    scenarioEn: string;
    problemFr: string;
    problemEn: string;
    bestActionFr: string;
    bestActionEn: string;
  };
};
`;
  writeCatalog(
    "prisma/seed/content/pmp-lessons.ts",
    pmpHeader,
    `export const PMP_MODULES = ${JSON.stringify(PMP_MODULES, null, 2)};`,
    "PMP_LESSONS",
    pmp,
    ""
  );
  // Fix type name for PMP
  writeFileSync(
    "prisma/seed/content/pmp-lessons.ts",
    pmpHeader +
      `\nexport const PMP_MODULES = ${JSON.stringify(PMP_MODULES, null, 2)};\n\n` +
      `export const PMP_LESSONS: PmpLesson[] = [\n` +
      pmp.map((l, i) => serializeLesson(l) + (i < pmp.length - 1 ? "," : "")).join("\n") +
      `\n];\n`,
    "utf8"
  );

  console.log(
    JSON.stringify({
      pf: pf.length,
      cf: cfAll.length,
      pmp: pmp.length,
      shorts: [...pf, ...cfAll, ...pmp].filter((l) => l.isShort).length,
      avgPfFr: Math.round(pf.reduce((a, l) => a + l.textBodyFr.length, 0) / pf.length),
    })
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
