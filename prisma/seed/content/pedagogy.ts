/**
 * Phase 12 — pedagogical micro-learning body builder.
 * Keeps lessons short but complete: objective → explain → examples → mistake → takeaway.
 */

export type PedagogicalSections = {
  objectiveFr: string;
  objectiveEn: string;
  explanationFr: string;
  explanationEn: string;
  exampleFr: string;
  exampleEn: string;
  practicalFr: string;
  practicalEn: string;
  mistakeFr: string;
  mistakeEn: string;
  takeawayFr: string;
  takeawayEn: string;
};

export function buildPedagogicalBody(s: PedagogicalSections): {
  textBodyFr: string;
  textBodyEn: string;
} {
  return {
    textBodyFr: [
      `Objectif\n${s.objectiveFr}`,
      `Explication\n${s.explanationFr}`,
      `Exemple\n${s.exampleFr}`,
      `Exemple pratique\n${s.practicalFr}`,
      `Erreur fréquente\n${s.mistakeFr}`,
      `À retenir\n${s.takeawayFr}`,
    ].join("\n\n"),
    textBodyEn: [
      `Objective\n${s.objectiveEn}`,
      `Explanation\n${s.explanationEn}`,
      `Example\n${s.exampleEn}`,
      `Practical example\n${s.practicalEn}`,
      `Common mistake\n${s.mistakeEn}`,
      `Key takeaway\n${s.takeawayEn}`,
    ].join("\n\n"),
  };
}

/** Expand a short legacy body into a structured micro-lesson (FR/EN equivalent). */
export function enrichLegacyBody(input: {
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  textBodyFr: string;
  textBodyEn: string;
  skillSlug: string;
}): { textBodyFr: string; textBodyEn: string } {
  // Already structured Phase 12 content
  if (
    input.textBodyFr.includes("Objectif\n") &&
    input.textBodyEn.includes("Objective\n") &&
    input.textBodyFr.length > 700
  ) {
    return { textBodyFr: input.textBodyFr, textBodyEn: input.textBodyEn };
  }

  const coreFr = input.textBodyFr.trim();
  const coreEn = input.textBodyEn.trim();

  return buildPedagogicalBody({
    objectiveFr: `Comprendre « ${input.titleFr} » et pouvoir l'appliquer dans une situation simple.`,
    objectiveEn: `Understand “${input.titleEn}” and apply it in a simple situation.`,
    explanationFr: `${coreFr} ${input.descriptionFr}`,
    explanationEn: `${coreEn} ${input.descriptionEn}`,
    exampleFr: `Illustration : dans un contexte professionnel courant, « ${input.titleFr} » aide à clarifier la décision avant d'agir.`,
    exampleEn: `Illustration: in a common professional context, “${input.titleEn}” clarifies the decision before acting.`,
    practicalFr: `Exercice mental : reformulez le concept en une phrase, puis citez un chiffre ou un fait que vous vérifieriez dans la vraie vie (contenu pédagogique — pas un conseil personnalisé).`,
    practicalEn: `Mental exercise: restate the concept in one sentence, then name one figure or fact you would verify in real life (educational — not personalized advice).`,
    mistakeFr: `Erreur fréquente : mémoriser le label sans relier le concept à une décision concrète liée à « ${input.skillSlug} ».`,
    mistakeEn: `Common mistake: memorizing the label without linking the concept to a concrete decision related to “${input.skillSlug}”.`,
    takeawayFr: `À retenir : maîtrisez l'idée centrale de « ${input.titleFr} », puis passez à la pratique et au quiz pour ancrer le skill.`,
    takeawayEn: `Key takeaway: master the core idea of “${input.titleEn}”, then practice and quiz to lock in the skill.`,
  });
}

export function buildShortScript(input: {
  titleFr: string;
  titleEn: string;
  textBodyFr: string;
  textBodyEn: string;
  takeawayFr?: string;
  takeawayEn?: string;
}): {
  scriptFr: string;
  scriptEn: string;
  takeawayFr: string;
  takeawayEn: string;
} {
  const takeFr =
    input.takeawayFr ??
    extractSection(input.textBodyFr, "À retenir") ??
    `Retenez l'idée clé de « ${input.titleFr} » en moins de 3 minutes.`;
  const takeEn =
    input.takeawayEn ??
    extractSection(input.textBodyEn, "Key takeaway") ??
    `Remember the key idea of “${input.titleEn}” in under 3 minutes.`;

  const explainFr =
    extractSection(input.textBodyFr, "Explication") ?? input.textBodyFr.slice(0, 280);
  const explainEn =
    extractSection(input.textBodyEn, "Explanation") ?? input.textBodyEn.slice(0, 280);
  const exFr = extractSection(input.textBodyFr, "Exemple") ?? "";
  const exEn = extractSection(input.textBodyEn, "Example") ?? "";

  return {
    scriptFr: [
      `Hook : Pourquoi « ${input.titleFr} » compte maintenant.`,
      `Concept : ${explainFr}`,
      exFr ? `Exemple : ${exFr}` : null,
      `Takeaway : ${takeFr}`,
    ]
      .filter(Boolean)
      .join("\n"),
    scriptEn: [
      `Hook: Why “${input.titleEn}” matters now.`,
      `Concept: ${explainEn}`,
      exEn ? `Example: ${exEn}` : null,
      `Takeaway: ${takeEn}`,
    ]
      .filter(Boolean)
      .join("\n"),
    takeawayFr: takeFr,
    takeawayEn: takeEn,
  };
}

function extractSection(body: string, heading: string): string | null {
  const parts = body.split(/\n\n+/);
  for (const part of parts) {
    if (part.startsWith(`${heading}\n`)) {
      return part.slice(heading.length + 1).trim();
    }
  }
  return null;
}
