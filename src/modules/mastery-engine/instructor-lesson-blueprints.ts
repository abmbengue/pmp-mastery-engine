/**
 * Full instructor 12-lesson pedagogical blueprints (Phase B.3).
 * Authorized condensé from prompt — NOT a claim of having read the PDFs.
 * Architecture / metadata only — no exam questions generated.
 */

import type { ContentProvenance, EcoTaskStableId } from "./types";
import type { InstructorLessonId } from "./instructor-lessons";

export type DeliveryLens = {
  predictiveFr: string;
  predictiveEn: string;
  adaptiveFr: string;
  adaptiveEn: string;
  hybridFr: string;
  hybridEn: string;
};

export type ScenarioBlueprint = {
  id: string;
  contextFr: string;
  contextEn: string;
  problemFr: string;
  problemEn: string;
  askFr: string;
  askEn: string;
  /** Pedagogical only — never exam-bank items. */
  decisionFocusFr: string;
  decisionFocusEn: string;
};

export type InstructorLessonBlueprint = {
  id: InstructorLessonId;
  purposeFr: string;
  purposeEn: string;
  ecoTaskIds: EcoTaskStableId[];
  learningObjectivesFr: string[];
  learningObjectivesEn: string[];
  coreIdeasFr: string[];
  coreIdeasEn: string[];
  keyDistinctionsIds: string[];
  deliveryLens: DeliveryLens;
  decisionRulesFr: string[];
  decisionRulesEn: string[];
  commonTrapsFr: string[];
  commonTrapsEn: string[];
  scenarioPatterns: ScenarioBlueprint[];
  visualOpportunities: string[];
  interactiveOpportunitiesFr: string[];
  interactiveOpportunitiesEn: string[];
  masteryEvidenceFr: string[];
  masteryEvidenceEn: string[];
  plaLessonIds: string[];
  provenance: ContentProvenance;
  mappingConfidence: "HIGH" | "MEDIUM" | "LOW" | "UNVERIFIED";
};

const pah = (
  pFr: string,
  pEn: string,
  aFr: string,
  aEn: string,
  hFr: string,
  hEn: string
): DeliveryLens => ({
  predictiveFr: pFr,
  predictiveEn: pEn,
  adaptiveFr: aFr,
  adaptiveEn: aEn,
  hybridFr: hFr,
  hybridEn: hEn,
});

export const INSTRUCTOR_LESSON_BLUEPRINTS: readonly InstructorLessonBlueprint[] = [
  {
    id: "INSTRUCTOR-L01",
    purposeFr: "Installer le cadre mental PMP : projet, approches, organisation, tailoring.",
    purposeEn: "Install the PMP mental frame: project, approaches, organization, tailoring.",
    ecoTaskIds: ["PROCESS-T01"],
    learningObjectivesFr: [
      "Distinguer projet / programme / portfolio",
      "Choisir predictive / adaptive / hybrid selon le contexte",
      "Expliquer pourquoi le tailoring est obligatoire",
    ],
    learningObjectivesEn: [
      "Distinguish project / program / portfolio",
      "Choose predictive / adaptive / hybrid by context",
      "Explain why tailoring is mandatory",
    ],
    coreIdeasFr: [
      "Projet = temporaire + unique + valeur",
      "Réussite = valeur perçue justifiant l'effort",
      "Pas de méthode unique pour tous les projets",
      "PMO optionnel (support / contrôle / directif / CoE agile)",
      "Structure org influence autorité du PM",
      "Mindset agile = 4 valeurs",
      "Tailoring = contexte, produit, culture, incertitude",
    ],
    coreIdeasEn: [
      "Project = temporary + unique + value",
      "Success = perceived value justifying effort",
      "No single method fits all projects",
      "PMO optional (support / controlling / directive / agile CoE)",
      "Org structure affects PM authority",
      "Agile mindset = 4 values",
      "Tailoring = context, product, culture, uncertainty",
    ],
    keyDistinctionsIds: ["dist-project-program-portfolio", "dist-pm-vs-po-vs-sm"],
    deliveryLens: pah(
      "Exigences plus stables ; planification séquentielle ; changement contrôlé",
      "More stable requirements; sequential planning; controlled change",
      "Itératif/incrémental ; feedback fréquent ; valeur progressive",
      "Iterative/incremental; frequent feedback; progressive value",
      "Combinaison adaptée au contexte et à l'incertitude",
      "Combination tailored to context and uncertainty"
    ),
    decisionRulesFr: [
      "Choisir l'approche selon incertitude des exigences et cadence de valeur",
      "Adapter gouvernance et processus — ne pas copier un template aveugle",
    ],
    decisionRulesEn: [
      "Choose approach by requirement uncertainty and value cadence",
      "Tailor governance and process — do not blindly copy a template",
    ],
    commonTrapsFr: [
      "Appliquer agile ou waterfall par défaut",
      "Confondre produit et projet",
    ],
    commonTrapsEn: [
      "Defaulting to agile or waterfall",
      "Confusing product and project",
    ],
    scenarioPatterns: [
      {
        id: "l01-lifecycle-choice",
        contextFr: "Exigences volatiles + besoin de feedback client fréquent",
        contextEn: "Volatile requirements + need for frequent customer feedback",
        problemFr: "Le sponsor exige un plan waterfall détaillé sur 18 mois",
        problemEn: "Sponsor demands an 18-month detailed waterfall plan",
        askFr: "Quelle approche recommander et pourquoi ?",
        askEn: "Which approach to recommend and why?",
        decisionFocusFr: "Adaptive/hybrid selon incertitude — expliquer le trade-off",
        decisionFocusEn: "Adaptive/hybrid by uncertainty — explain the trade-off",
      },
    ],
    visualOpportunities: [
      "predictive vs adaptive vs hybrid",
      "portfolio → program → project",
      "org structures",
      "tailoring decision tree",
    ],
    interactiveOpportunitiesFr: ["Quel cycle de vie choisiriez-vous et pourquoi ?"],
    interactiveOpportunitiesEn: ["Which lifecycle would you choose and why?"],
    masteryEvidenceFr: [
      "Choisir une approche adaptée dans 2 contextes différents",
      "Expliquer l'effet de la structure org sur l'autorité du PM",
    ],
    masteryEvidenceEn: [
      "Choose a fit approach in 2 different contexts",
      "Explain org structure effect on PM authority",
    ],
    plaLessonIds: [
      "what-is-project-management",
      "project-lifecycle-basics",
      "project-roles",
      "agile-mindset",
      "tailoring",
      "hybrid-project-basics",
      "when-to-use-hybrid",
    ],
    provenance: "INSTRUCTOR_DERIVED",
    mappingConfidence: "HIGH",
  },
  {
    id: "INSTRUCTOR-L02",
    purposeFr: "Vision partagée, stakeholders, alignement et gouvernance.",
    purposeEn: "Shared vision, stakeholders, alignment, and governance.",
    ecoTaskIds: ["PEOPLE-T01", "PEOPLE-T04", "PEOPLE-T05", "PEOPLE-T06", "BUSINESS-T01"],
    learningObjectivesFr: [
      "Construire et maintenir une vision commune",
      "Analyser et engager les parties prenantes",
      "Clarifier qui décide / escalade (gouvernance)",
    ],
    learningObjectivesEn: [
      "Build and sustain a shared vision",
      "Analyze and engage stakeholders",
      "Clarify who decides / escalates (governance)",
    ],
    coreIdeasFr: [
      "Vision partagée ≠ liste de livrables",
      "Charte autorise ; vision aligne",
      "Mauvaise compréhension → 5 Whys / Ishikawa avant solution",
      "Matrices pouvoir/intérêt / salience",
      "Engagement levels évolutifs",
      "Mentorat structuré",
      "Gouvernance = droits de décision + seuils",
    ],
    coreIdeasEn: [
      "Shared vision ≠ deliverable list",
      "Charter authorizes; vision aligns",
      "Misunderstanding → 5 Whys / Ishikawa before solutions",
      "Power/interest / salience matrices",
      "Engagement levels evolve",
      "Structured mentoring",
      "Governance = decision rights + thresholds",
    ],
    keyDistinctionsIds: [
      "dist-vision-goal-value",
      "dist-engagement-vs-communication",
    ],
    deliveryLens: pah(
      "Charte formelle, comités, jalons d'approbation",
      "Formal charter, committees, approval gates",
      "Vision produit vivante, feedback loops courts",
      "Living product vision, short feedback loops",
      "Gouvernance formelle + rituels adaptatifs",
      "Formal governance + adaptive rituals"
    ),
    decisionRulesFr: [
      "VISION ≠ ENGAGEMENT ≠ COMMUNICATION ≠ GOUVERNANCE",
      "Attentes divergentes → clarifier avant d'exécuter",
    ],
    decisionRulesEn: [
      "VISION ≠ ENGAGEMENT ≠ COMMUNICATION ≠ GOVERNANCE",
      "Divergent expectations → clarify before executing",
    ],
    commonTrapsFr: [
      "Fusionner engagement et communication",
      "Sauter à une solution sans root cause",
    ],
    commonTrapsEn: [
      "Merging engagement and communication",
      "Jumping to a solution without root cause",
    ],
    scenarioPatterns: [
      {
        id: "l02-vision-misalign",
        contextFr: "Sponsor et équipe ont des images différentes du succès",
        contextEn: "Sponsor and team have different success pictures",
        problemFr: "L'équipe accélère le backlog sans alignement",
        problemEn: "Team speeds backlog without alignment",
        askFr: "Que faire EN PREMIER ?",
        askEn: "What FIRST?",
        decisionFocusFr: "Atelier vision / root cause — PEOPLE-T01",
        decisionFocusEn: "Vision workshop / root cause — PEOPLE-T01",
      },
    ],
    visualOpportunities: [
      "power/interest grid",
      "current vs desired engagement",
      "vision → objectives → value",
      "governance decision flow",
    ],
    interactiveOpportunitiesFr: ["Qui impliquer, à quel niveau, avec quelle info ?"],
    interactiveOpportunitiesEn: ["Whom to involve, at what level, with what info?"],
    masteryEvidenceFr: [
      "Choisir une stratégie d'engagement adaptée",
      "Distinguer vision, engagement, communication, gouvernance",
    ],
    masteryEvidenceEn: [
      "Choose a fit engagement strategy",
      "Distinguish vision, engagement, communication, governance",
    ],
    plaLessonIds: [
      "shared-vision",
      "stakeholders-basics",
      "governance",
      "governance-hybrid",
      "root-cause-vs-symptom",
      "coaching-and-mentoring",
    ],
    provenance: "INSTRUCTOR_DERIVED",
    mappingConfidence: "HIGH",
  },
  {
    id: "INSTRUCTOR-L03",
    purposeFr: "Périmètre, exigences, valeur et conformité.",
    purposeEn: "Scope, requirements, value, and compliance.",
    ecoTaskIds: ["PROCESS-T02", "PROCESS-T03", "BUSINESS-T02"],
    learningObjectivesFr: [
      "Distinguer project scope et product scope",
      "Relier deliverable → outcome → benefit → value",
      "Traiter la conformité comme exigence prioritaire",
    ],
    learningObjectivesEn: [
      "Distinguish project scope and product scope",
      "Connect deliverable → outcome → benefit → value",
      "Treat compliance as a priority requirement",
    ],
    coreIdeasFr: [
      "Exigences claires, mesurables, traçables, acceptées",
      "WBS + dictionary",
      "DoR vs DoD",
      "Valeur tangible/intangible",
      "Livrable ≠ valeur automatique",
      "Conformité : identifier, tester, approuver, corriger",
    ],
    coreIdeasEn: [
      "Requirements clear, measurable, traceable, accepted",
      "WBS + dictionary",
      "DoR vs DoD",
      "Tangible/intangible value",
      "Deliverable ≠ automatic value",
      "Compliance: identify, test, approve, correct",
    ],
    keyDistinctionsIds: [
      "dist-project-vs-product-scope",
      "dist-dor-vs-dod",
      "dist-deliverable-outcome-benefit-value",
    ],
    deliveryLens: pah(
      "Baseline scope + change control",
      "Scope baseline + change control",
      "Backlog évolutif + DoR/DoD + valeur incrémentale",
      "Evolving backlog + DoR/DoD + incremental value",
      "Baselines stables + incrément valeur sur parties volatiles",
      "Stable baselines + value increments on volatile parts"
    ),
    decisionRulesFr: [
      "Toujours demander : quelle valeur ce livrable crée-t-il ?",
      "Non-conformité = délai/coût/risque — traiter tôt",
    ],
    decisionRulesEn: [
      "Always ask: what value does this deliverable create?",
      "Noncompliance = schedule/cost/risk — address early",
    ],
    commonTrapsFr: [
      "Confondre DoR et DoD",
      "Croire qu'un livrable = valeur",
    ],
    commonTrapsEn: [
      "Confusing DoR and DoD",
      "Believing a deliverable equals value",
    ],
    scenarioPatterns: [
      {
        id: "l03-value-not-deliverable",
        contextFr: "Feature livrée mais non utilisée",
        contextEn: "Feature shipped but unused",
        problemFr: "L'équipe célèbre le Done technique",
        problemEn: "Team celebrates technical Done",
        askFr: "Que doit faire le PM ensuite ?",
        askEn: "What should the PM do next?",
        decisionFocusFr: "Vérifier outcome/bénéfice/valeur — pas seulement le livrable",
        decisionFocusEn: "Verify outcome/benefit/value — not only the deliverable",
      },
    ],
    visualOpportunities: [
      "scope hierarchy",
      "requirement traceability",
      "DoR vs DoD",
      "deliverable → outcome → benefit → value",
      "compliance flow",
    ],
    interactiveOpportunitiesFr: ["Project scope ou product scope ?"],
    interactiveOpportunitiesEn: ["Project scope or product scope?"],
    masteryEvidenceFr: [
      "Tracer un livrable jusqu'à la valeur",
      "Appliquer DoR/DoD correctement",
    ],
    masteryEvidenceEn: [
      "Trace a deliverable through to value",
      "Apply DoR/DoD correctly",
    ],
    plaLessonIds: [
      "scope",
      "requirements-basics",
      "business-value",
      "benefits",
      "definition-of-done",
      "compliance",
    ],
    provenance: "INSTRUCTOR_DERIVED",
    mappingConfidence: "HIGH",
  },
  {
    id: "INSTRUCTOR-L04",
    purposeFr: "Plan intégré, ressources, finances et décisions EVM.",
    purposeEn: "Integrated plan, resources, finance, and EVM decisions.",
    ecoTaskIds: ["PROCESS-T01", "PROCESS-T04", "PROCESS-T06"],
    learningObjectivesFr: [
      "Relier business case / benefits plan au plan intégré",
      "Appliquer RACI correctement",
      "Interpréter CPI/SPI → EAC/ETC → décision",
    ],
    learningObjectivesEn: [
      "Connect business case / benefits plan to integrated plan",
      "Apply RACI correctly",
      "Interpret CPI/SPI → EAC/ETC → decision",
    ],
    coreIdeasFr: [
      "Besoin/complexité avant plan",
      "Business case ≠ plan de management",
      "Baselines scope/schedule/cost",
      "RACI : ≥1 R, 1 seul A",
      "Rolling wave",
      "EVM = signal de décision",
      "Finance agile : incréments, vélocité, coût/point",
    ],
    coreIdeasEn: [
      "Need/complexity before planning",
      "Business case ≠ management plan",
      "Scope/schedule/cost baselines",
      "RACI: ≥1 R, exactly 1 A",
      "Rolling wave",
      "EVM = decision signal",
      "Agile finance: increments, velocity, cost/point",
    ],
    keyDistinctionsIds: [
      "dist-raci",
      "dist-pv-ev-ac",
      "dist-cpi-vs-spi",
      "dist-eac-vs-etc",
      "dist-contingency-vs-management-reserve",
    ],
    deliveryLens: pah(
      "Baselines formelles + contrôle des coûts",
      "Formal baselines + cost control",
      "Budgets courts, révision périodique, priorisation",
      "Short budgets, periodic review, prioritization",
      "Baseline stable + enveloppes adaptatives",
      "Stable baseline + adaptive envelopes"
    ),
    decisionRulesFr: [
      "Métrique → interprétation → prévision → action",
      "CPI stable < 1 → EAC ≈ BAC/CPI ; ETC = EAC − AC",
    ],
    decisionRulesEn: [
      "Metric → interpretation → forecast → action",
      "Stable CPI < 1 → EAC ≈ BAC/CPI; ETC = EAC − AC",
    ],
    commonTrapsFr: [
      "EVM comme pure math",
      "Deux Accountable sur une tâche",
    ],
    commonTrapsEn: [
      "EVM as pure math",
      "Two Accountables on one task",
    ],
    scenarioPatterns: [
      {
        id: "l04-evm-decision",
        contextFr: "BAC 1200, EV 540, AC 650",
        contextEn: "BAC 1200, EV 540, AC 650",
        problemFr: "Sponsor demande si on est dans les clous",
        problemEn: "Sponsor asks if we are on track",
        askFr: "Quelle meilleure prochaine action ?",
        askEn: "What is the best next action?",
        decisionFocusFr: "CPI/EAC + causes + options",
        decisionFocusEn: "CPI/EAC + causes + options",
      },
    ],
    visualOpportunities: [
      "cost baseline",
      "BAC",
      "PV/EV/AC",
      "CPI/SPI dashboard",
      "EAC/ETC",
    ],
    interactiveOpportunitiesFr: ["Que signifie ce CPI pour la décision sponsor ?"],
    interactiveOpportunitiesEn: ["What does this CPI mean for the sponsor decision?"],
    masteryEvidenceFr: [
      "Calculer et interpréter CPI puis proposer une option",
      "Corriger un RACI invalide",
    ],
    masteryEvidenceEn: [
      "Compute and interpret CPI then propose an option",
      "Fix an invalid RACI",
    ],
    plaLessonIds: [
      "planning",
      "integration",
      "project-initiation",
      "resource-management",
      "cost",
      "product-ownership",
      "combining-predictive-and-agile",
    ],
    provenance: "INSTRUCTOR_DERIVED",
    mappingConfidence: "HIGH",
  },
  {
    id: "INSTRUCTOR-L05",
    purposeFr: "Procurement, qualité et échéancier.",
    purposeEn: "Procurement, quality, and schedule.",
    ecoTaskIds: ["PROCESS-T05", "PROCESS-T07", "PROCESS-T08"],
    learningObjectivesFr: [
      "Planifier make/buy et performance fournisseur",
      "Distinguer prévention et inspection (qualité)",
      "Lire baseline vs actual → variance → action",
    ],
    learningObjectivesEn: [
      "Plan make/buy and vendor performance",
      "Distinguish prevention and inspection (quality)",
      "Read baseline vs actual → variance → action",
    ],
    coreIdeasFr: [
      "Contrats avec juridique",
      "Qualité ≠ inspection finale seule",
      "WBS → activities → schedule → baseline",
      "Critical path / milestones",
      "Adaptive : velocity, flow, sprints",
    ],
    coreIdeasEn: [
      "Contracts with legal",
      "Quality ≠ final inspection only",
      "WBS → activities → schedule → baseline",
      "Critical path / milestones",
      "Adaptive: velocity, flow, sprints",
    ],
    keyDistinctionsIds: ["dist-quality-vs-grade", "dist-dor-vs-dod"],
    deliveryLens: pah(
      "Baseline schedule + change formel",
      "Schedule baseline + formal change",
      "Iterations, backlog, velocity, cycle time",
      "Iterations, backlog, velocity, cycle time",
      "Jalons prédictifs + sprints sur parties volatiles",
      "Predictive milestones + sprints on volatile parts"
    ),
    decisionRulesFr: [
      "BASELINE → ACTUAL → VARIANCE → ANALYSIS → ACTION",
      "Qualité dès le processus, pas seulement en fin",
    ],
    decisionRulesEn: [
      "BASELINE → ACTUAL → VARIANCE → ANALYSIS → ACTION",
      "Quality in the process, not only at the end",
    ],
    commonTrapsFr: ["Qualité = grade", "Changer baseline sans processus"],
    commonTrapsEn: ["Quality = grade", "Changing baseline without process"],
    scenarioPatterns: [
      {
        id: "l05-vendor-performance",
        contextFr: "Fournisseur en retard récurrent",
        contextEn: "Vendor repeatedly late",
        problemFr: "Aucune revue de performance définie",
        problemEn: "No performance review defined",
        askFr: "Que faire ensuite ?",
        askEn: "What next?",
        decisionFocusFr: "Mesurer vs critères contrat + revue proactive",
        decisionFocusEn: "Measure vs contract criteria + proactive review",
      },
    ],
    visualOpportunities: [
      "procurement decision",
      "contract lifecycle",
      "quality loop",
      "network / critical path",
      "sprint/velocity chart",
    ],
    interactiveOpportunitiesFr: ["Make or buy — quels critères ?"],
    interactiveOpportunitiesEn: ["Make or buy — which criteria?"],
    masteryEvidenceFr: ["Expliquer QA vs inspection", "Interpréter un écart de planning"],
    masteryEvidenceEn: ["Explain QA vs inspection", "Interpret a schedule variance"],
    plaLessonIds: ["procurement-basics", "quality", "schedule", "estimation-techniques"],
    provenance: "INSTRUCTOR_DERIVED",
    mappingConfidence: "HIGH",
  },
  {
    id: "INSTRUCTOR-L06",
    purposeFr: "Séparer clairement transfert de connaissances (T07) et communication (T08).",
    purposeEn: "Clearly separate knowledge transfer (T07) and communication (T08).",
    ecoTaskIds: ["PEOPLE-T07", "PEOPLE-T08"],
    learningObjectivesFr: [
      "Choisir méthode tacite vs explicite (T07)",
      "Choisir interactive/push/pull (T08)",
      "Ne jamais fusionner T07, T08 et T04",
    ],
    learningObjectivesEn: [
      "Choose tacit vs explicit method (T07)",
      "Choose interactive/push/pull (T08)",
      "Never merge T07, T08, and T04",
    ],
    coreIdeasFr: [
      "Connaissance = actif",
      "Tacite ≠ document seul",
      "Niveaux individu / projet / organisation",
      "Kickoff, feedback, reporting, PMIS",
      "Gouvernance = transparence proactive",
    ],
    coreIdeasEn: [
      "Knowledge = asset",
      "Tacit ≠ documents alone",
      "Individual / project / organization levels",
      "Kickoff, feedback, reporting, PMIS",
      "Governance = proactive transparency",
    ],
    keyDistinctionsIds: [
      "dist-knowledge-transfer-vs-communication",
      "dist-engagement-vs-communication",
    ],
    deliveryLens: pah(
      "Plans de com formels + archives",
      "Formal comm plans + archives",
      "Radiateurs d'info, rituels, pairing",
      "Information radiators, rituals, pairing",
      "Reporting formel + communautés de pratique",
      "Formal reporting + communities of practice"
    ),
    decisionRulesFr: [
      "Expert qui part → T07",
      "Rumeurs / statut → T08",
      "Résistance stakeholder → T04 (pas seulement plus d'emails)",
    ],
    decisionRulesEn: [
      "Expert leaving → T07",
      "Rumors / status → T08",
      "Stakeholder resistance → T04 (not just more emails)",
    ],
    commonTrapsFr: ["Documenter = transfert", "T04 = T08"],
    commonTrapsEn: ["Documenting = transfer", "T04 = T08"],
    scenarioPatterns: [
      {
        id: "l06-t07-or-t08",
        contextFr: "Expert unique part ; équipe demande plus d'emails",
        contextEn: "Sole expert leaving; team asks for more emails",
        problemFr: "Confusion communication vs transfert",
        problemEn: "Confusion communication vs transfer",
        askFr: "Communiquer ou transférer des connaissances ?",
        askEn: "Communicate or transfer knowledge?",
        decisionFocusFr: "T07 pairing/coaching ; emails seuls = insuffisant",
        decisionFocusEn: "T07 pairing/coaching; emails alone = insufficient",
      },
    ],
    visualOpportunities: ["T07 vs T08 side-by-side", "tacit ↔ interaction", "interactive/push/pull"],
    interactiveOpportunitiesFr: ["Le PM doit-il communiquer ou transférer des connaissances ?"],
    interactiveOpportunitiesEn: ["Should the PM communicate or transfer knowledge?"],
    masteryEvidenceFr: [
      "Classifier 5 situations en T04 / T07 / T08",
      "Choisir une méthode tacite adaptée",
    ],
    masteryEvidenceEn: [
      "Classify 5 situations as T04 / T07 / T08",
      "Choose a fit tacit method",
    ],
    plaLessonIds: [
      "knowledge-transfer",
      "communication",
      "feedback",
      "distributed-teams",
      "lessons-learned",
      "retrospective",
    ],
    provenance: "INSTRUCTOR_DERIVED",
    mappingConfidence: "HIGH",
  },
  {
    id: "INSTRUCTOR-L07",
    purposeFr: "Équipe, leadership, conflits, motivation, EI.",
    purposeEn: "Team, leadership, conflict, motivation, EI.",
    ecoTaskIds: ["PEOPLE-T02", "PEOPLE-T03"],
    learningObjectivesFr: [
      "Choisir une approche de conflit selon le contexte",
      "Adapter le style de leadership",
      "Créer sécurité psychologique",
    ],
    learningObjectivesEn: [
      "Choose conflict approach by context",
      "Adapt leadership style",
      "Create psychological safety",
    ],
    coreIdeasFr: [
      "Focus on issue, not person",
      "Collaborate ≠ compromise",
      "Tuckman",
      "Servant leadership",
      "Motivation via scénarios, pas mémorisation sèche",
      "Recognition vs reward",
    ],
    coreIdeasEn: [
      "Focus on issue, not person",
      "Collaborate ≠ compromise",
      "Tuckman",
      "Servant leadership",
      "Motivation via scenarios, not dry memorization",
      "Recognition vs reward",
    ],
    keyDistinctionsIds: [
      "dist-recognition-vs-reward",
      "dist-leadership-vs-management",
      "dist-pm-vs-po-vs-sm",
    ],
    deliveryLens: pah(
      "Rôles formels, reporting, décisions directives si urgence",
      "Formal roles, reporting, directive decisions if urgent",
      "Auto-organisation, facilitation, coaching",
      "Self-organization, facilitation, coaching",
      "Cadre clair + empowerment local",
      "Clear frame + local empowerment"
    ),
    decisionRulesFr: [
      "Pas de réponse conflit universelle",
      "Agir tôt avant escalade",
    ],
    decisionRulesEn: [
      "No universal conflict answer",
      "Act early before escalation",
    ],
    commonTrapsFr: ["Collaborate = compromise", "Leadership = micro-management"],
    commonTrapsEn: ["Collaborate = compromise", "Leadership = micromanagement"],
    scenarioPatterns: [
      {
        id: "l07-conflict-mode",
        contextFr: "Désaccord technique entre architectes",
        contextEn: "Technical disagreement between architects",
        problemFr: "Le PM force une option",
        problemEn: "PM forces one option",
        askFr: "Quelle approche est la plus adaptée ?",
        askEn: "Which approach fits best?",
        decisionFocusFr: "Collaborate/problem-solve si temps et confiance",
        decisionFocusEn: "Collaborate/problem-solve if time and trust",
      },
    ],
    visualOpportunities: [
      "conflict modes",
      "Tuckman",
      "leadership selector",
      "EI quadrants",
      "decision tree",
    ],
    interactiveOpportunitiesFr: ["Quel comportement du PM correspond à ce besoin ?"],
    interactiveOpportunitiesEn: ["Which PM behavior matches this need?"],
    masteryEvidenceFr: ["Choisir mode de conflit + justifier", "Choisir style de leadership"],
    masteryEvidenceEn: ["Choose conflict mode + justify", "Choose leadership style"],
    plaLessonIds: [
      "conflict-management-basics",
      "collaboration",
      "leadership",
      "servant-leadership",
      "team-development",
      "motivation",
      "psychological-safety",
      "emotional-intelligence-pm",
      "team-conflict-architecture",
    ],
    provenance: "INSTRUCTOR_DERIVED",
    mappingConfidence: "HIGH",
  },
  {
    id: "INSTRUCTOR-L08",
    purposeFr: "Risques, changements et points à traiter / obstacles.",
    purposeEn: "Risks, changes, and issues / impediments.",
    ecoTaskIds: ["BUSINESS-T03", "BUSINESS-T04", "BUSINESS-T05"],
    learningObjectivesFr: [
      "Distinguer risk / issue / impediment",
      "Choisir réponses menace vs opportunité",
      "Appliquer le bon modèle de changement (prédictif vs adaptatif)",
    ],
    learningObjectivesEn: [
      "Distinguish risk / issue / impediment",
      "Choose threat vs opportunity responses",
      "Apply the right change model (predictive vs adaptive)",
    ],
    coreIdeasFr: [
      "Risk = futur ; issue = maintenant",
      "Threat vs opportunity",
      "Appetite vs threshold",
      "Register + owner + monitor",
      "CCB vs backlog/PO",
      "Corrective / preventive / defect repair",
    ],
    coreIdeasEn: [
      "Risk = future; issue = now",
      "Threat vs opportunity",
      "Appetite vs threshold",
      "Register + owner + monitor",
      "CCB vs backlog/PO",
      "Corrective / preventive / defect repair",
    ],
    keyDistinctionsIds: [
      "dist-risk-vs-issue",
      "dist-threat-vs-opportunity",
      "dist-appetite-vs-threshold",
      "dist-corrective-preventive-defect",
      "dist-predictive-vs-adaptive-change",
      "dist-risk-vs-impediment",
    ],
    deliveryLens: pah(
      "Change control formel + CCB",
      "Formal change control + CCB",
      "Backlog évolutif + priorisation PO + feedback",
      "Evolving backlog + PO prioritization + feedback",
      "Contrôle formel sur baselines + flex backlog sur features",
      "Formal control on baselines + backlog flex on features"
    ),
    decisionRulesFr: [
      "Lire l'approche avant de choisir le processus de changement",
      "Déjà arrivé → issue/impediment, pas seulement risk response",
    ],
    decisionRulesEn: [
      "Read the approach before choosing change process",
      "Already happened → issue/impediment, not only risk response",
    ],
    commonTrapsFr: [
      "Appliquer CCB à chaque sprint",
      "Traiter une issue comme un risque futur",
    ],
    commonTrapsEn: [
      "Applying CCB to every sprint",
      "Treating an issue as a future risk",
    ],
    scenarioPatterns: [
      {
        id: "l08-change-model",
        contextFr: "Sprint en cours ; demande de nouvelle feature",
        contextEn: "Sprint in progress; new feature request",
        problemFr: "Quelqu'un lance un CCB complet",
        problemEn: "Someone launches a full CCB",
        askFr: "Quelle approche est la plus appropriée ?",
        askEn: "Which approach is most appropriate?",
        decisionFocusFr: "Adaptive : PO/backlog — pas CCB automatique",
        decisionFocusEn: "Adaptive: PO/backlog — not automatic CCB",
      },
    ],
    visualOpportunities: [
      "risk vs issue",
      "threat vs opportunity",
      "probability-impact matrix",
      "risk register",
      "change-control flow",
      "predictive vs adaptive change",
    ],
    interactiveOpportunitiesFr: ["Risk, issue ou impediment ?"],
    interactiveOpportunitiesEn: ["Risk, issue, or impediment?"],
    masteryEvidenceFr: [
      "Classifier 6 situations risk/issue/impediment",
      "Choisir le modèle de changement selon l'approche",
    ],
    masteryEvidenceEn: [
      "Classify 6 situations risk/issue/impediment",
      "Choose change model by approach",
    ],
    plaLessonIds: [
      "risk-management-hybrid",
      "risk-vs-issue",
      "risk-vs-issue-situational",
      "change-management-basics",
      "change-request-critical-path",
      "issue-management",
      "impediments-management",
    ],
    provenance: "INSTRUCTOR_DERIVED",
    mappingConfidence: "HIGH",
  },
  {
    id: "INSTRUCTOR-L09",
    purposeFr: "Attentes client et statut / performance.",
    purposeEn: "Customer expectations and status / performance.",
    ecoTaskIds: ["PEOPLE-T06", "PROCESS-T09"],
    learningObjectivesFr: [
      "Aligner attentes et satisfaction",
      "Mesurer ce qui compte et décider",
      "Utiliser dashboards / burndown comme outils de décision",
    ],
    learningObjectivesEn: [
      "Align expectations and satisfaction",
      "Measure what matters and decide",
      "Use dashboards / burndown as decision tools",
    ],
    coreIdeasFr: [
      "Measure what matters",
      "Artefacts : à jour, versionnés, sécurisés",
      "Configuration / version control",
      "Dimensions scope/schedule/cost/resources/quality/risk",
      "Exception management si seuil dépassé",
    ],
    coreIdeasEn: [
      "Measure what matters",
      "Artifacts: current, versioned, secured",
      "Configuration / version control",
      "Dimensions scope/schedule/cost/resources/quality/risk",
      "Exception management if threshold exceeded",
    ],
    keyDistinctionsIds: ["dist-pv-ev-ac", "dist-cpi-vs-spi"],
    deliveryLens: pah(
      "Rapports d'écart / jalons / EVM",
      "Variance / milestone / EVM reports",
      "Kanban, burndown/burnup, CFD, velocity",
      "Kanban, burndown/burnup, CFD, velocity",
      "Dashboard mixte jalons + flow",
      "Mixed dashboard milestones + flow"
    ),
    decisionRulesFr: [
      "PERFORMANCE DATA → ANALYSIS → FORECAST → DECISION → ACTION → FOLLOW-UP",
      "Un graphique sert à décider, pas à décorer",
    ],
    decisionRulesEn: [
      "PERFORMANCE DATA → ANALYSIS → FORECAST → DECISION → ACTION → FOLLOW-UP",
      "A chart exists to decide, not decorate",
    ],
    commonTrapsFr: ["Trop de métriques inutiles", "Status sans forecast"],
    commonTrapsEn: ["Too many useless metrics", "Status without forecast"],
    scenarioPatterns: [
      {
        id: "l09-dashboard-decision",
        contextFr: "Burndown montre un écart critique",
        contextEn: "Burndown shows a critical gap",
        problemFr: "L'équipe ignore le signal",
        problemEn: "Team ignores the signal",
        askFr: "Que doit faire le PM ensuite ?",
        askEn: "What should the PM do next?",
        decisionFocusFr: "Analyser, forecast, action, suivi",
        decisionFocusEn: "Analyze, forecast, act, follow up",
      },
    ],
    visualOpportunities: [
      "dashboard",
      "burnup/burndown",
      "cumulative flow",
      "EVM chart",
      "milestone status",
    ],
    interactiveOpportunitiesFr: ["Quelle métrique compte vraiment ici ?"],
    interactiveOpportunitiesEn: ["Which metric truly matters here?"],
    masteryEvidenceFr: ["Lire un dashboard et proposer une action"],
    masteryEvidenceEn: ["Read a dashboard and propose an action"],
    plaLessonIds: [
      "project-controls-metrics",
      "velocity-and-flow",
      "cost",
      "stakeholders-basics",
    ],
    provenance: "INSTRUCTOR_DERIVED",
    mappingConfidence: "HIGH",
  },
  {
    id: "INSTRUCTOR-L10",
    purposeFr: "Clôturer le projet avec succès : acceptation, transition, bénéfices.",
    purposeEn: "Close the project successfully: acceptance, transition, benefits.",
    ecoTaskIds: ["PROCESS-T10"],
    learningObjectivesFr: [
      "Vérifier conditions de clôture",
      "Préparer transition / readiness",
      "Finaliser lessons learned et archives",
    ],
    learningObjectivesEn: [
      "Verify closure conditions",
      "Prepare transition / readiness",
      "Finalize lessons learned and archives",
    ],
    coreIdeasFr: [
      "Acceptation + contrats + finances + ressources",
      "Predictive vs adaptive closure",
      "Transition readiness (client/users/support)",
      "Benefits immédiats vs différés",
      "Sustainment après transition",
      "Final report",
    ],
    coreIdeasEn: [
      "Acceptance + contracts + finance + resources",
      "Predictive vs adaptive closure",
      "Transition readiness (client/users/support)",
      "Immediate vs deferred benefits",
      "Sustainment after transition",
      "Final report",
    ],
    keyDistinctionsIds: ["dist-deliverable-outcome-benefit-value"],
    deliveryLens: pah(
      "Acceptance finale puis clôture formelle",
      "Final acceptance then formal close",
      "DoD + acceptance + transition selon contexte",
      "DoD + acceptance + transition by context",
      "Gates formels + transitions incrémentales",
      "Formal gates + incremental transitions"
    ),
    decisionRulesFr: [
      "Ne pas clôturer sans acceptation / obligations résolues",
      "Transfert de connaissances client fait partie de la clôture",
    ],
    decisionRulesEn: [
      "Do not close without acceptance / obligations resolved",
      "Client knowledge transfer is part of closure",
    ],
    commonTrapsFr: ["Clôturer trop tôt", "Oublier sustainment des bénéfices"],
    commonTrapsEn: ["Closing too early", "Forgetting benefits sustainment"],
    scenarioPatterns: [
      {
        id: "l10-transition-readiness",
        contextFr: "Livrables acceptés ; ops non prêtes",
        contextEn: "Deliverables accepted; ops not ready",
        problemFr: "Le sponsor veut clôturer immédiatement",
        problemEn: "Sponsor wants immediate closure",
        askFr: "Que doit faire le PM ensuite ?",
        askEn: "What should the PM do next?",
        decisionFocusFr: "Évaluer readiness + plan transition/support",
        decisionFocusEn: "Assess readiness + plan transition/support",
      },
    ],
    visualOpportunities: [
      "closure checklist",
      "transition readiness",
      "benefits lifecycle",
      "predictive vs adaptive closure",
    ],
    interactiveOpportunitiesFr: ["Checklist : peut-on clôturer ?"],
    interactiveOpportunitiesEn: ["Checklist: can we close?"],
    masteryEvidenceFr: [
      "Lister conditions de clôture manquantes dans un cas",
      "Proposer un plan de transition",
    ],
    masteryEvidenceEn: [
      "List missing closure conditions in a case",
      "Propose a transition plan",
    ],
    plaLessonIds: [
      "project-lifecycle-basics",
      "lessons-learned",
      "knowledge-transfer",
      "benefits-realization",
    ],
    provenance: "INSTRUCTOR_DERIVED",
    mappingConfidence: "HIGH",
  },
  {
    id: "INSTRUCTOR-L11",
    purposeFr: "Amélioration continue, changement organisationnel, environnement externe.",
    purposeEn: "Continuous improvement, organizational change, external environment.",
    ecoTaskIds: ["BUSINESS-T06", "BUSINESS-T07", "BUSINESS-T08"],
    learningObjectivesFr: [
      "Transformer lessons learned en amélioration",
      "Accompagner le changement sans aliéner",
      "Scanner l'environnement externe et réagir",
    ],
    learningObjectivesEn: [
      "Turn lessons learned into improvement",
      "Support change without alienating",
      "Scan the external environment and respond",
    ],
    coreIdeasFr: [
      "LL tout au long du projet, pas seulement à la fin",
      "OPA vs EEF",
      "Culture organisationnelle",
      "Kotter (idée générale 8 étapes)",
      "PESTLE / TECOP / VUCA",
    ],
    coreIdeasEn: [
      "LL throughout, not only at the end",
      "OPA vs EEF",
      "Organizational culture",
      "Kotter (general 8-step idea)",
      "PESTLE / TECOP / VUCA",
    ],
    keyDistinctionsIds: ["dist-opa-vs-eef"],
    deliveryLens: pah(
      "Mise à jour OPA / standards",
      "OPA / standards updates",
      "Retros → expériences → standards de travail",
      "Retros → experiments → working agreements",
      "Standards stables + expérimentation locale",
      "Stable standards + local experimentation"
    ),
    decisionRulesFr: [
      "LESSON LEARNED → ANALYSIS → IMPROVEMENT → ORGANIZATIONAL LEARNING",
      "Ne pas imposer brutalement le changement",
    ],
    decisionRulesEn: [
      "LESSON LEARNED → ANALYSIS → IMPROVEMENT → ORGANIZATIONAL LEARNING",
      "Do not force change brutally",
    ],
    commonTrapsFr: ["Archiver LL puis oublier", "Ignorer la culture"],
    commonTrapsEn: ["Archive LL then forget", "Ignoring culture"],
    scenarioPatterns: [
      {
        id: "l11-opa-update",
        contextFr: "Même erreur estimation sur 3 projets",
        contextEn: "Same estimation error across 3 projects",
        problemFr: "LL archivées sans action",
        problemEn: "LL archived with no action",
        askFr: "Que faire ?",
        askEn: "What to do?",
        decisionFocusFr: "Analyser → mettre à jour OPA/pratiques → partager",
        decisionFocusEn: "Analyze → update OPA/practices → share",
      },
    ],
    visualOpportunities: ["OPA vs EEF", "change lifecycle", "Kotter", "PESTLE"],
    interactiveOpportunitiesFr: ["OPA ou EEF ?"],
    interactiveOpportunitiesEn: ["OPA or EEF?"],
    masteryEvidenceFr: ["Proposer une amélioration actionnable depuis une LL"],
    masteryEvidenceEn: ["Propose an actionable improvement from a LL"],
    plaLessonIds: [
      "retrospective",
      "lessons-learned",
      "organizational-change",
      "portfolio-context",
      "project-selection",
    ],
    provenance: "INSTRUCTOR_DERIVED",
    mappingConfidence: "HIGH",
  },
  {
    id: "INSTRUCTOR-L12",
    purposeFr: "Transition LEARNING → PRACTICE → WEAKNESS → REVIEW → MOCKS.",
    purposeEn: "Transition LEARNING → PRACTICE → WEAKNESS → REVIEW → MOCKS.",
    ecoTaskIds: [],
    learningObjectivesFr: [
      "Appliquer le réflexe « que doit faire le PM ENSUITE ? »",
      "Utiliser les résultats pour cibler les faiblesses",
      "Préparer mocks / endurance / revue d'erreurs",
    ],
    learningObjectivesEn: [
      "Apply the “what should the PM do NEXT?” reflex",
      "Use results to target weaknesses",
      "Prepare mocks / endurance / error review",
    ],
    coreIdeasFr: [
      "Format examen : utiliser paramètres officiels ECO 2026 si divergence",
      "Types de questions variés",
      "Critical thinking > définitions",
      "Combiner learning + reinforcement + simulation",
    ],
    coreIdeasEn: [
      "Exam format: use official ECO 2026 params if divergence",
      "Varied question types",
      "Critical thinking > definitions",
      "Combine learning + reinforcement + simulation",
    ],
    keyDistinctionsIds: [],
    deliveryLens: pah(
      "S'entraîner aussi aux scénarios prédictifs",
      "Also practice predictive scenarios",
      "S'entraîner aux scénarios adaptatifs",
      "Practice adaptive scenarios",
      "S'entraîner aux scénarios mixtes",
      "Practice mixed scenarios"
    ),
    decisionRulesFr: [
      "1 contexte 2 approche 3 problème réel 4 ECO task 5 éliminer sauts d'étape 6 meilleure action 7 vérifier valeur/stakeholders/risque",
    ],
    decisionRulesEn: [
      "1 context 2 approach 3 real problem 4 ECO task 5 eliminate step-skips 6 best action 7 check value/stakeholders/risk",
    ],
    commonTrapsFr: ["Apprendre uniquement des définitions", "Ignorer l'analyse d'erreurs"],
    commonTrapsEn: ["Learning definitions only", "Ignoring error analysis"],
    scenarioPatterns: [
      {
        id: "l12-next-action",
        contextFr: "Scénario multi-indices ambigu",
        contextEn: "Ambiguous multi-cue scenario",
        problemFr: "L'apprenant choisit trop vite",
        problemEn: "Learner chooses too fast",
        askFr: "Que doit faire le chef de projet ENSUITE ?",
        askEn: "What should the project manager do NEXT?",
        decisionFocusFr: "Appliquer la grille en 7 étapes",
        decisionFocusEn: "Apply the 7-step grid",
      },
    ],
    visualOpportunities: ["exam thinking flowchart", "weakness → review loop"],
    interactiveOpportunitiesFr: ["Grille de raisonnement scénario"],
    interactiveOpportunitiesEn: ["Scenario reasoning grid"],
    masteryEvidenceFr: [
      "Expliquer pourquoi une option est meilleure et pourquoi les autres non",
      "Relier une erreur à une skill/ECO task",
    ],
    masteryEvidenceEn: [
      "Explain why one option is better and others are not",
      "Link an error to a skill/ECO task",
    ],
    plaLessonIds: ["exam-reasoning-integration", "pla-situational-method"],
    provenance: "DERIVED_PEDAGOGICAL",
    mappingConfidence: "MEDIUM",
  },
];

export function getInstructorBlueprint(
  id: InstructorLessonId
): InstructorLessonBlueprint | undefined {
  return INSTRUCTOR_LESSON_BLUEPRINTS.find((b) => b.id === id);
}

export const INSTRUCTOR_BLUEPRINT_COUNT = INSTRUCTOR_LESSON_BLUEPRINTS.length;
