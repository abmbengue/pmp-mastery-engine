/**
 * Mobile-first pedagogical micro-structures for P0 lessons (Phase B.3).
 * Used by mastery engine / UI hooks — not exam bank items.
 * Mini-scenarios are pedagogical only — never added to protected exam bank.
 */

import type { ContentProvenance, EcoTaskStableId } from "./types";

export type PedagogyScreenIntent =
  | "OBJECTIVE"
  | "WHY_IT_MATTERS"
  | "CONCEPT"
  | "DISTINCTION"
  | "RECOGNIZE"
  | "MINI_CASE"
  | "DECISION_RULE"
  | "VISUAL"
  | "MISCONCEPTION"
  | "QUICK_RECALL"
  | "PRACTICE_HOOK";

export type PedagogyScreen = {
  intent: PedagogyScreenIntent;
  titleFr: string;
  titleEn: string;
  bodyFr: string;
  bodyEn: string;
  choices?: Array<{ id: string; labelFr: string; labelEn: string; correct?: boolean }>;
  whyFr?: string;
  whyEn?: string;
};

export type LessonPedagogyPack = {
  lessonId: string;
  ecoTaskIds: EcoTaskStableId[];
  provenance: ContentProvenance;
  objectiveFr: string;
  objectiveEn: string;
  whyItMattersFr: string;
  whyItMattersEn: string;
  concepts: string[];
  skills: string[];
  distinctions: Array<{ a: string; b: string; ruleFr: string; ruleEn: string }>;
  misconceptions: Array<{ wrongFr: string; wrongEn: string; rightFr: string; rightEn: string }>;
  decisionRules: Array<{ fr: string; en: string }>;
  visualModel: { id: string; linesFr: string[]; linesEn: string[] };
  screens: PedagogyScreen[];
  masteryHooks: {
    conceptIds: string[];
    skillIds: string[];
    noteFr: string;
    noteEn: string;
  };
};

export const P0_LESSON_PEDAGOGY: readonly LessonPedagogyPack[] = [
  {
    lessonId: "shared-vision",
    ecoTaskIds: ["PEOPLE-T01", "PEOPLE-T05"],
    provenance: "INSTRUCTOR_DERIVED",
    objectiveFr:
      "Construire et maintenir une vision partagée avec les parties prenantes clés.",
    objectiveEn:
      "Build and sustain a shared vision with key stakeholders.",
    whyItMattersFr:
      "Sans vision partagée, les équipes livrent des livrables divergents et les critères de réussite restent ambigus.",
    whyItMattersEn:
      "Without shared vision, teams ship divergent deliverables and success criteria stay ambiguous.",
    concepts: ["shared-vision"],
    skills: ["skill-promote-shared-vision", "skill-facilitate-shared-vision"],
    distinctions: [
      {
        a: "Livrable",
        b: "Résultat / Valeur",
        ruleFr: "Livrable = ce qui est produit. Résultat = ce qui change. Valeur = bénéfice perçu.",
        ruleEn: "Deliverable = what is produced. Outcome = what changes. Value = perceived benefit.",
      },
      {
        a: "Charte",
        b: "Vision",
        ruleFr: "La charte autorise et cadre. La vision inspire et aligne l'image du succès.",
        ruleEn: "Charter authorizes and frames. Vision inspires and aligns the success picture.",
      },
    ],
    misconceptions: [
      {
        wrongFr: "La vision = la liste des livrables.",
        wrongEn: "Vision = the deliverable list.",
        rightFr: "La vision décrit le meilleur résultat possible et crée une image commune.",
        rightEn: "Vision describes the best possible outcome and creates a shared picture.",
      },
    ],
    decisionRules: [
      {
        fr: "Si les attentes divergent → impliquer les parties, approfondir, identifier causes (5 Whys), clarifier le résultat convenu.",
        en: "If expectations diverge → involve parties, dig deeper, find causes (5 Whys), clarify agreed outcome.",
      },
      {
        fr: "Avant d'exécuter → vérifier vision + objectifs + contexte métier + accords (SOW/SLA).",
        en: "Before executing → verify vision + objectives + business context + agreements (SOW/SLA).",
      },
    ],
    visualModel: {
      id: "vision-alignment",
      linesFr: [
        "Objectif stratégique",
        "↓",
        "Vision projet",
        "↓",
        "Compréhension partagée",
        "↓",
        "Parties alignées",
        "↓",
        "Valeur",
      ],
      linesEn: [
        "Strategic objective",
        "↓",
        "Project vision",
        "↓",
        "Shared understanding",
        "↓",
        "Aligned stakeholders",
        "↓",
        "Value",
      ],
    },
    screens: [
      {
        intent: "OBJECTIVE",
        titleFr: "Objectif",
        titleEn: "Objective",
        bodyFr: "Développer une vision commune — PEOPLE-T01.",
        bodyEn: "Develop a common vision — PEOPLE-T01.",
      },
      {
        intent: "DISTINCTION",
        titleFr: "Livrable ≠ Résultat ≠ Valeur",
        titleEn: "Deliverable ≠ Outcome ≠ Value",
        bodyFr: "Ne confondez pas ce qui est livré, ce qui change, et le bénéfice perçu.",
        bodyEn: "Do not confuse what is shipped, what changes, and perceived benefit.",
      },
      {
        intent: "MINI_CASE",
        titleFr: "Mini-cas",
        titleEn: "Mini-case",
        bodyFr:
          "Sponsor et équipe ont des images différentes du « succès ». Que faire EN PREMIER ?",
        bodyEn:
          "Sponsor and team have different pictures of “success.” What FIRST?",
        choices: [
          { id: "a", labelFr: "Accélérer le backlog", labelEn: "Speed up the backlog" },
          {
            id: "b",
            labelFr: "Faciliter un atelier de vision partagée",
            labelEn: "Facilitate a shared-vision workshop",
            correct: true,
          },
          { id: "c", labelFr: "Escalader au PMO", labelEn: "Escalate to the PMO" },
          { id: "d", labelFr: "Geler le scope", labelEn: "Freeze scope" },
        ],
        whyFr: "Sans image commune, accélérer amplifie le désalignement.",
        whyEn: "Without a shared picture, speeding up amplifies misalignment.",
      },
      {
        intent: "DECISION_RULE",
        titleFr: "Règle PMP",
        titleEn: "PMP rule",
        bodyFr: "Qui impliquer ? Pourquoi ? Comment ? À quel niveau d'engagement ?",
        bodyEn: "Whom to involve? Why? How? At what engagement level?",
      },
    ],
    masteryHooks: {
      conceptIds: ["shared-vision"],
      skillIds: ["skill-promote-shared-vision", "skill-facilitate-shared-vision"],
      noteFr: "Voir la lesson ≠ maîtrise. Preuves : pratique, questions, rétention.",
      noteEn: "Seeing the lesson ≠ mastery. Evidence: practice, questions, retention.",
    },
  },
  {
    lessonId: "knowledge-transfer",
    ecoTaskIds: ["PEOPLE-T07"],
    provenance: "INSTRUCTOR_DERIVED",
    objectiveFr:
      "Identifier les connaissances critiques et choisir une méthode adaptée (tacite vs explicite).",
    objectiveEn:
      "Identify critical knowledge and choose a fit method (tacit vs explicit).",
    whyItMattersFr:
      "La connaissance est un actif. Sans transfert, la capacité disparaît à la clôture ou au départ d'experts.",
    whyItMattersEn:
      "Knowledge is an asset. Without transfer, capability vanishes at closure or when experts leave.",
    concepts: ["knowledge-transfer", "tacit-vs-explicit-knowledge"],
    skills: ["skill-enable-knowledge-transfer", "skill-choose-knowledge-transfer-method"],
    distinctions: [
      {
        a: "T07 Transfert de connaissances",
        b: "T08 Communication",
        ruleFr:
          "T07 = faire circuler le SAVOIR pour préserver/développer la capacité. T08 = faire circuler l'INFORMATION au bon moment/canal.",
        ruleEn:
          "T07 = circulate KNOW-HOW to preserve/grow capability. T08 = circulate INFORMATION at the right time/channel.",
      },
      {
        a: "Tacite",
        b: "Explicite",
        ruleFr: "Tacite → interaction, coaching, observation. Explicite → docs, repository.",
        ruleEn: "Tacit → interaction, coaching, observation. Explicit → docs, repository.",
      },
    ],
    misconceptions: [
      {
        wrongFr: "Documenter = transfert de connaissances.",
        wrongEn: "Documenting = knowledge transfer.",
        rightFr: "Le tacite se transfère surtout par interaction, observation, mentorat.",
        rightEn: "Tacit knowledge transfers mainly via interaction, observation, mentoring.",
      },
      {
        wrongFr: "T07 = même chose que T04 engagement.",
        wrongEn: "T07 = same as T04 engagement.",
        rightFr: "Engagement (T04) ≠ transfert de savoir (T07) ≠ communication (T08).",
        rightEn: "Engagement (T04) ≠ knowledge transfer (T07) ≠ communication (T08).",
      },
    ],
    decisionRules: [
      {
        fr: "Connaissance critique tacite → pairing / coaching / observation en situation.",
        en: "Critical tacit knowledge → pairing / coaching / on-the-job observation.",
      },
      {
        fr: "À la clôture → rétrospective + archive + repository + transfert client — pas seulement un ZIP de docs.",
        en: "At closure → retrospective + archive + repository + client handover — not just a ZIP of docs.",
      },
    ],
    visualModel: {
      id: "knowledge-tacit-explicit",
      linesFr: [
        "Tacite ↔ Interaction / coaching / mentorat",
        "Explicite ↔ Documentation / repository",
        "Individu → Projet → Organisation",
      ],
      linesEn: [
        "Tacit ↔ Interaction / coaching / mentoring",
        "Explicit ↔ Documentation / repository",
        "Individual → Project → Organization",
      ],
    },
    screens: [
      {
        intent: "DISTINCTION",
        titleFr: "T07 ≠ T08",
        titleEn: "T07 ≠ T08",
        bodyFr: "Savoir / capacité vs information / canal.",
        bodyEn: "Know-how / capability vs information / channel.",
      },
      {
        intent: "MINI_CASE",
        titleFr: "Mini-cas",
        titleEn: "Mini-case",
        bodyFr:
          "L'expert unique part dans 3 semaines. Que faire d'abord pour préserver la capacité ?",
        bodyEn:
          "The sole expert leaves in 3 weeks. What first to preserve capability?",
        choices: [
          { id: "a", labelFr: "Envoyer un statut email hebdo", labelEn: "Send weekly status email" },
          {
            id: "b",
            labelFr: "Organiser pairing + capturer le critique",
            labelEn: "Set up pairing + capture critical knowledge",
            correct: true,
          },
          { id: "c", labelFr: "Augmenter le reporting", labelEn: "Increase reporting" },
          { id: "d", labelFr: "Attendre la rétrospective finale", labelEn: "Wait for final retrospective" },
        ],
        whyFr: "T07 exige un transfert actif, pas seulement plus d'information push (T08).",
        whyEn: "T07 needs active transfer, not merely more information push (T08).",
      },
    ],
    masteryHooks: {
      conceptIds: ["knowledge-transfer", "tacit-vs-explicit-knowledge"],
      skillIds: ["skill-enable-knowledge-transfer", "skill-choose-knowledge-transfer-method"],
      noteFr: "Pas de nouvelles questions d'examen dans B.3 — hook pour phase ultérieure.",
      noteEn: "No new exam questions in B.3 — hook for a later phase.",
    },
  },
  {
    lessonId: "communication",
    ecoTaskIds: ["PEOPLE-T08"],
    provenance: "INSTRUCTOR_DERIVED",
    objectiveFr:
      "Choisir canal, contenu, fréquence et feedback adaptés au besoin d'information.",
    objectiveEn:
      "Choose channel, content, frequency, and feedback fit to information need.",
    whyItMattersFr:
      "Mauvaise communication = bruit, rumeurs, décisions retardées — même si l'engagement existe.",
    whyItMattersEn:
      "Poor communication = noise, rumors, delayed decisions — even when engagement exists.",
    concepts: ["communication-planning", "communication-vs-engagement"],
    skills: [
      "skill-communication-strategy",
      "skill-tailor-communication",
      "skill-distinguish-communication-engagement",
    ],
    distinctions: [
      {
        a: "T08 Communication",
        b: "T04 Engagement",
        ruleFr: "Informer ≠ impliquer. T08 planifie l'info ; T04 construit l'engagement.",
        ruleEn: "Informing ≠ engaging. T08 plans information; T04 builds engagement.",
      },
      {
        a: "Interactive / Push / Pull",
        b: "Un seul canal pour tous",
        ruleFr: "Adapter le type au besoin : réunion, email, repository.",
        ruleEn: "Match type to need: meeting, email, repository.",
      },
    ],
    misconceptions: [
      {
        wrongFr: "Plus d'emails = meilleure communication.",
        wrongEn: "More emails = better communication.",
        rightFr: "Adapter sujet, fréquence, canal, détail — et boucles de feedback.",
        rightEn: "Tailor topic, frequency, channel, detail — plus feedback loops.",
      },
    ],
    decisionRules: [
      {
        fr: "Urgence + besoin de dialogue → interactive. Diffusion large → push. Référence durable → pull.",
        en: "Urgency + dialogue need → interactive. Broad broadcast → push. Durable reference → pull.",
      },
    ],
    visualModel: {
      id: "comm-modes",
      linesFr: ["Interactive (réunion)", "Push (email / rapport)", "Pull (intranet / repo)"],
      linesEn: ["Interactive (meeting)", "Push (email / report)", "Pull (intranet / repo)"],
    },
    screens: [
      {
        intent: "DISTINCTION",
        titleFr: "T08 ≠ T04 ≠ T07",
        titleEn: "T08 ≠ T04 ≠ T07",
        bodyFr: "Communication · Engagement · Transfert de connaissances — trois tâches ECO.",
        bodyEn: "Communication · Engagement · Knowledge transfer — three ECO tasks.",
      },
      {
        intent: "MINI_CASE",
        titleFr: "Quelle méthode ?",
        titleEn: "Which method?",
        bodyFr: "Décision urgente avec 3 décideurs en désaccord. Meilleure approche ?",
        bodyEn: "Urgent decision; 3 decision-makers disagree. Best approach?",
        choices: [
          { id: "a", labelFr: "Push email long", labelEn: "Long push email" },
          {
            id: "b",
            labelFr: "Atelier interactif court",
            labelEn: "Short interactive workshop",
            correct: true,
          },
          { id: "c", labelFr: "Pull sur intranet seulement", labelEn: "Pull on intranet only" },
          { id: "d", labelFr: "Silence jusqu'à consensus", labelEn: "Silence until consensus" },
        ],
      },
    ],
    masteryHooks: {
      conceptIds: ["communication-planning", "communication-vs-engagement"],
      skillIds: [
        "skill-communication-strategy",
        "skill-tailor-communication",
        "skill-distinguish-communication-engagement",
      ],
      noteFr: "Maîtrise = preuves multi-contextes, pas lecture seule.",
      noteEn: "Mastery = multi-context evidence, not reading alone.",
    },
  },
  {
    lessonId: "cost",
    ecoTaskIds: ["PROCESS-T06"],
    provenance: "INSTRUCTOR_DERIVED",
    objectiveFr:
      "Interpréter PV/EV/AC → CPI/SPI → prévision → décision (pas du calcul isolé).",
    objectiveEn:
      "Interpret PV/EV/AC → CPI/SPI → forecast → decision (not isolated math).",
    whyItMattersFr:
      "Les métriques servent à répondre : que se passe-t-il ? pourquoi ? quelle prévision ? quelle action ?",
    whyItMattersEn:
      "Metrics answer: what is happening? why? what forecast? what action?",
    concepts: ["project-finance", "status-vs-forecast"],
    skills: ["skill-plan-budget", "skill-track-cost-variance", "skill-interpret-evm"],
    distinctions: [
      {
        a: "BAC / budget baseline",
        b: "EAC",
        ruleFr: "BAC = plan approuvé. EAC = projection si performance continue (ex. BAC/CPI).",
        ruleEn: "BAC = approved plan. EAC = projection if performance continues (e.g. BAC/CPI).",
      },
      {
        a: "État (status)",
        b: "Prévision (forecast)",
        ruleFr: "Status = ce qui s'est passé. Forecast = ce qui est attendu.",
        ruleEn: "Status = what happened. Forecast = what is expected.",
      },
    ],
    misconceptions: [
      {
        wrongFr: "EVM = exercice mathématique pour l'examen seulement.",
        wrongEn: "EVM = exam math drill only.",
        rightFr: "EVM = signal pour décider (scope, budget, rythme, escalade).",
        rightEn: "EVM = signal to decide (scope, budget, pace, escalate).",
      },
    ],
    decisionRules: [
      {
        fr: "CPI < 1 et tendance stable → EAC ≈ BAC/CPI ; ETC = EAC − AC ; présenter options au sponsor.",
        en: "CPI < 1 with stable trend → EAC ≈ BAC/CPI; ETC = EAC − AC; present options to sponsor.",
      },
      {
        fr: "Adaptive/hybrid : budgets plus courts, révision périodique, priorisation — même logique métrique→décision.",
        en: "Adaptive/hybrid: shorter budgets, periodic review, prioritization — same metric→decision logic.",
      },
    ],
    visualModel: {
      id: "evm-decision",
      linesFr: [
        "PV / EV / AC",
        "↓",
        "CPI / SPI",
        "↓",
        "Prévision (EAC/ETC)",
        "↓",
        "Décision",
      ],
      linesEn: [
        "PV / EV / AC",
        "↓",
        "CPI / SPI",
        "↓",
        "Forecast (EAC/ETC)",
        "↓",
        "Decision",
      ],
    },
    screens: [
      {
        intent: "VISUAL",
        titleFr: "Chaîne EVM",
        titleEn: "EVM chain",
        bodyFr: "Métrique → interprétation → prévision → action.",
        bodyEn: "Metric → interpretation → forecast → action.",
      },
      {
        intent: "MINI_CASE",
        titleFr: "Que faire ?",
        titleEn: "What next?",
        bodyFr: "BAC 1200, EV 540, AC 650 → CPI ≈ 0,83. Quelle meilleure action ?",
        bodyEn: "BAC 1200, EV 540, AC 650 → CPI ≈ 0.83. Best action?",
        choices: [
          { id: "a", labelFr: "Ignorer — le BAC reste la vérité", labelEn: "Ignore — BAC remains truth" },
          {
            id: "b",
            labelFr: "Calculer EAC, analyser causes, proposer options",
            labelEn: "Compute EAC, analyze causes, propose options",
            correct: true,
          },
          { id: "c", labelFr: "Changer la baseline sans processus", labelEn: "Change baseline without process" },
          { id: "d", labelFr: "Arrêter tout reporting", labelEn: "Stop all reporting" },
        ],
      },
    ],
    masteryHooks: {
      conceptIds: ["project-finance", "status-vs-forecast"],
      skillIds: ["skill-interpret-evm", "skill-track-cost-variance"],
      noteFr: "Maîtrise = décider à partir des indicateurs, pas réciter des formules.",
      noteEn: "Mastery = decide from indicators, not recite formulas.",
    },
  },
  {
    lessonId: "project-lifecycle-basics",
    ecoTaskIds: ["PROCESS-T10"],
    provenance: "INSTRUCTOR_DERIVED",
    objectiveFr:
      "Vérifier les conditions de clôture et préparer la transition avant de libérer les ressources.",
    objectiveEn:
      "Verify closure conditions and prepare transition before releasing resources.",
    whyItMattersFr:
      "Clôturer trop tôt laisse obligations, bénéfices et readiness non traités.",
    whyItMattersEn:
      "Closing too early leaves obligations, benefits, and readiness unaddressed.",
    concepts: ["project-closure"],
    skills: ["skill-close-project", "skill-transition-operations"],
    distinctions: [
      {
        a: "Acceptance livrable",
        b: "Transition readiness",
        ruleFr: "Accepté ≠ ops/users prêts. Vérifier readiness client/support.",
        ruleEn: "Accepted ≠ ops/users ready. Verify client/support readiness.",
      },
    ],
    misconceptions: [
      {
        wrongFr: "Livrables Done = projet clos.",
        wrongEn: "Deliverables Done = project closed.",
        rightFr: "Il faut acceptation, contrats, finances, transition, archives, LL.",
        rightEn: "Need acceptance, contracts, finance, transition, archives, LL.",
      },
    ],
    decisionRules: [
      {
        fr: "Ne pas clôturer sans acceptation / obligations résolues",
        en: "Do not close without acceptance / obligations resolved",
      },
      {
        fr: "Inclure transfert de connaissances client dans la clôture",
        en: "Include client knowledge transfer in closure",
      },
    ],
    visualModel: {
      id: "closure-checklist",
      linesFr: [
        "Acceptation",
        "→ Transition readiness",
        "→ Finances / contrats",
        "→ Archives + LL",
        "→ Libération ressources",
      ],
      linesEn: [
        "Acceptance",
        "→ Transition readiness",
        "→ Finance / contracts",
        "→ Archives + LL",
        "→ Release resources",
      ],
    },
    screens: [
      {
        intent: "MINI_CASE",
        titleFr: "Clôturer ?",
        titleEn: "Close?",
        bodyFr: "Livrables acceptés ; ops non prêtes. Sponsor veut clôturer. Ensuite ?",
        bodyEn: "Deliverables accepted; ops not ready. Sponsor wants to close. Next?",
        choices: [
          { id: "a", labelFr: "Clôturer immédiatement", labelEn: "Close immediately" },
          {
            id: "b",
            labelFr: "Évaluer readiness et planifier la transition",
            labelEn: "Assess readiness and plan transition",
            correct: true,
          },
          { id: "c", labelFr: "Ignorer ops", labelEn: "Ignore ops" },
          { id: "d", labelFr: "Rouvrir le scope entier", labelEn: "Reopen full scope" },
        ],
      },
    ],
    masteryHooks: {
      conceptIds: ["project-closure"],
      skillIds: ["skill-close-project", "skill-transition-operations"],
      noteFr: "Blueprint L10 — body PLA encore thin ; enrichissement seed ultérieur possible.",
      noteEn: "L10 blueprint — PLA body still thin; later seed enrichment possible.",
    },
  },
  {
    lessonId: "lessons-learned",
    ecoTaskIds: ["BUSINESS-T06", "PEOPLE-T07"],
    provenance: "INSTRUCTOR_DERIVED",
    objectiveFr:
      "Transformer les lessons learned en amélioration organisationnelle, pas en archive morte.",
    objectiveEn:
      "Turn lessons learned into organizational improvement, not a dead archive.",
    whyItMattersFr: "Archiver sans action = même erreur sur le prochain projet.",
    whyItMattersEn: "Archiving without action = same error on the next project.",
    concepts: ["continuous-improvement", "knowledge-transfer"],
    skills: ["skill-capture-lessons", "skill-update-process-assets"],
    distinctions: [
      {
        a: "OPA",
        b: "EEF",
        ruleFr: "OPA = actifs internes. EEF = facteurs environnementaux externes/influents.",
        ruleEn: "OPA = internal assets. EEF = influencing environmental factors.",
      },
    ],
    misconceptions: [
      {
        wrongFr: "LL uniquement à la clôture.",
        wrongEn: "LL only at closure.",
        rightFr: "Collecter tout au long ; intégrer aux processus et OPA.",
        rightEn: "Collect throughout; integrate into processes and OPA.",
      },
    ],
    decisionRules: [
      {
        fr: "LESSON LEARNED → ANALYSIS → IMPROVEMENT → ORGANIZATIONAL LEARNING",
        en: "LESSON LEARNED → ANALYSIS → IMPROVEMENT → ORGANIZATIONAL LEARNING",
      },
    ],
    visualModel: {
      id: "ci-loop",
      linesFr: ["Data/Feedback", "→ Root cause", "→ Experiment", "→ Improve", "→ Standardize/Share"],
      linesEn: ["Data/Feedback", "→ Root cause", "→ Experiment", "→ Improve", "→ Standardize/Share"],
    },
    screens: [
      {
        intent: "DECISION_RULE",
        titleFr: "Ne pas archiver pour oublier",
        titleEn: "Do not archive to forget",
        bodyFr: "Chaque LL actionnable doit avoir un owner et une mise à jour OPA/pratique.",
        bodyEn: "Each actionable LL needs an owner and an OPA/practice update.",
      },
    ],
    masteryHooks: {
      conceptIds: ["continuous-improvement"],
      skillIds: ["skill-capture-lessons", "skill-update-process-assets"],
      noteFr: "Preuves = amélioration réelle, pas lecture seule.",
      noteEn: "Evidence = real improvement, not reading alone.",
    },
  },
  {
    lessonId: "risk-vs-issue",
    ecoTaskIds: ["BUSINESS-T04", "BUSINESS-T05"],
    provenance: "INSTRUCTOR_DERIVED",
    objectiveFr: "Classifier risk / issue / impediment et choisir la bonne réponse.",
    objectiveEn: "Classify risk / issue / impediment and choose the right response.",
    whyItMattersFr: "Mauvaise classification → mauvaise action (CCB vs unblock vs risk response).",
    whyItMattersEn: "Wrong classification → wrong action (CCB vs unblock vs risk response).",
    concepts: ["risk-vs-issue", "risk-management", "issue-management"],
    skills: ["skill-distinguish-risk-issue", "skill-respond-risks", "skill-resolve-issues"],
    distinctions: [
      {
        a: "Risk",
        b: "Issue / Impediment",
        ruleFr: "Risk = futur. Issue = maintenant. Impediment = bloque l'équipe maintenant.",
        ruleEn: "Risk = future. Issue = now. Impediment = blocks the team now.",
      },
      {
        a: "Predictive change",
        b: "Adaptive change",
        ruleFr: "CCB formel vs backlog/PO — lire l'approche d'abord.",
        ruleEn: "Formal CCB vs backlog/PO — read the approach first.",
      },
    ],
    misconceptions: [
      {
        wrongFr: "Tout problème = risque à mitiger.",
        wrongEn: "Every problem = a risk to mitigate.",
        rightFr: "Si c'est déjà là → issue/impediment.",
        rightEn: "If it is already here → issue/impediment.",
      },
    ],
    decisionRules: [
      {
        fr: "Lire predictive/adaptive avant le processus de changement",
        en: "Read predictive/adaptive before the change process",
      },
    ],
    visualModel: {
      id: "risk-issue-change",
      linesFr: ["Futur? → Risk", "Présent? → Issue", "Bloque équipe? → Impediment", "Changement? → lire l'approche"],
      linesEn: ["Future? → Risk", "Present? → Issue", "Blocks team? → Impediment", "Change? → read approach"],
    },
    screens: [
      {
        intent: "DISTINCTION",
        titleFr: "Risk ≠ Issue ≠ Impediment",
        titleEn: "Risk ≠ Issue ≠ Impediment",
        bodyFr: "Trois objets, trois leviers.",
        bodyEn: "Three objects, three levers.",
      },
    ],
    masteryHooks: {
      conceptIds: ["risk-vs-issue"],
      skillIds: ["skill-distinguish-risk-issue"],
      noteFr: "Maîtrise = classification + action adaptée au contexte.",
      noteEn: "Mastery = classification + context-fit action.",
    },
  },
];

export function getLessonPedagogy(lessonId: string): LessonPedagogyPack | undefined {
  return P0_LESSON_PEDAGOGY.find((p) => p.lessonId === lessonId);
}

export const MOBILE_LESSON_UX_GUIDANCE = {
  oneIntentPerScreen: true,
  avoidLongParagraphs: true,
  prefer: [
    "cards",
    "A/B/C/D choices",
    "toggles",
    "mini-diagrams",
    "matrices",
    "timelines",
    "comparisons",
    "What would you do first?",
    "What is the BEST action?",
    "What should the PM do NEXT?",
  ],
  chrome: ["progress indicator", "section navigation", "bookmarks", "quick review"],
} as const;
