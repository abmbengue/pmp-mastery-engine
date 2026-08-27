/**
 * Phase B.3 quality upgrades — P0 enrichment for communication (T08) and cost/EVM (T06).
 * Later entries win in applyPmpQualityUpgrades. Pedagogical quizzes only — not exam bank.
 */

import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

export const PMP_B3_QUALITY_UPGRADES: PmpLesson[] = [
  buildPmpLesson({
    slug: "communication",
    titleFr: "Planifier et gérer la communication",
    titleEn: "Plan and Manage Communication",
    descriptionFr:
      "Choisir contenu, fréquence, canal et feedback (ECO PEOPLE-T08) — distinct de l'engagement (T04) et du transfert de connaissances (T07).",
    descriptionEn:
      "Choose content, frequency, channel, and feedback (ECO PEOPLE-T08) — distinct from engagement (T04) and knowledge transfer (T07).",
    moduleSlug: "people",
    sortOrder: 5,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "communication",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider interactive / push / pull et distinguer communication (T08) d'engagement (T04) et de transfert (T07).",
    objectiveEn:
      "Decide interactive / push / pull and distinguish communication (T08) from engagement (T04) and transfer (T07).",
    explanationFr:
      "PEOPLE-T08 : planifier et gérer la communication selon parties prenantes, besoin, contenu, fréquence, canal, technologie, contexte. Types : interactive (réunion, atelier), push (email, memo, rapport), pull (intranet, repository). Adapter urgence, fiabilité techno, langue, culture, confidentialité, accessibilité, réglementation. Kickoff, feedback régulier, reporting, PMIS, visualisation. Gouvernance : communication proactive et transparente. DISTINCTIONS CRITIQUES : T08 = faire circuler l'INFORMATION appropriée au bon moment/canal ; T04 = construire l'ENGAGEMENT ; T07 = faire circuler le SAVOIR pour la capacité. Informer ≠ impliquer ≠ transférer le savoir-faire. Contenu PLA — condensé instructeur Lesson 6 branche B.",
    explanationEn:
      "PEOPLE-T08: plan and manage communication by stakeholders, need, content, frequency, channel, technology, context. Types: interactive (meeting, workshop), push (email, memo, report), pull (intranet, repository). Tailor urgency, tech reliability, language, culture, confidentiality, accessibility, regulation. Kickoff, regular feedback, reporting, PMIS, visualization. Governance: proactive transparent communication. CRITICAL DISTINCTIONS: T08 = circulate appropriate INFORMATION at the right time/channel; T04 = build ENGAGEMENT; T07 = circulate KNOW-HOW for capability. Informing ≠ engaging ≠ transferring know-how. PLA content — instructor Lesson 6 branch B condensé.",
    exampleFr:
      "Helios : rumeurs de date → statut officiel (push) + Q&A court (interactive). L'engagement sponsor se gère à part (ateliers T04) ; le départ d'un expert relève de T07.",
    exampleEn:
      "Helios: date rumors → official status (push) + short Q&A (interactive). Sponsor engagement is handled separately (T04 workshops); an expert leaving is T07.",
    practicalFr:
      "Pour un changement majeur : une ligne interactive, une push, une pull — et notez ce qui serait T04 ou T07 à la place.",
    practicalEn:
      "For a major change: one interactive, one push, one pull line — and note what would be T04 or T07 instead.",
    mistakeFr:
      "Fusionner T08 avec T04, ou croire que plus d'emails remplacent engagement et transfert.",
    mistakeEn:
      "Merging T08 with T04, or believing more emails replace engagement and transfer.",
    takeawayFr:
      "T08 = bonne info, bonnes personnes, bon canal/moment — pas T04, pas T07.",
    takeawayEn:
      "T08 = right info, right people, right channel/time — not T04, not T07.",
    decisionFr:
      "Désaccord urgent entre décideurs → interactive courte ; diffusion large → push ; référence → pull.",
    decisionEn:
      "Urgent decision-maker disagreement → short interactive; broad broadcast → push; reference → pull.",
    flashcardFrontFr: "Interactive / Push / Pull",
    flashcardFrontEn: "Interactive / Push / Pull",
    flashcardBackFr: "Dialogue / diffusion / consultation à la demande.",
    flashcardBackEn: "Dialogue / broadcast / on-demand pull.",
    exercisePromptFr:
      "Classez 5 messages Helios en interactive, push ou pull et justifiez.",
    exercisePromptEn:
      "Classify 5 Helios messages as interactive, push, or pull and justify.",
    situation: {
      scenarioFr:
        "Sur Helios, des rumeurs circulent sur une date non confirmée. Le sponsor veut aussi « plus d'engagement » et l'équipe veut « plus d'emails ».",
      scenarioEn:
        "On Helios, rumors spread about an unconfirmed date. The sponsor also wants “more engagement” and the team wants “more emails.”",
      problemFr:
        "Besoin T08 (clarifier l'information) distinct du besoin T04 (engagement) — ne pas tout traiter comme des emails.",
      problemEn:
        "T08 need (clarify information) distinct from T04 need (engagement) — do not treat everything as emails.",
      bestActionFr:
        "Publier un statut clair sur canal officiel (push) + inviter questions (interactive) ; planifier à part l'engagement sponsor si requis.",
      bestActionEn:
        "Publish clear status on official channel (push) + invite questions (interactive); separately plan sponsor engagement if needed.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Rumeurs de date Helios + moral en baisse. Quelle action sert le mieux PEOPLE-T08 ?",
      promptEn:
        "Helios date rumors + morale dropping. Which action best serves PEOPLE-T08?",
      explanationCorrectFr:
        "T08 = information claire via canal adapté + feedback — pas silence ni dump technique.",
      explanationCorrectEn:
        "T08 = clear information via a fit channel + feedback — not silence or tech dump.",
      difficulty: 2,
      options: [
        opt(
          "Ignorer jusqu'à la décision finale",
          "Ignore until final decision",
          false,
          "Le silence alimente les rumeurs.",
          "Silence feeds rumors."
        ),
        opt(
          "Publier un statut clair sur canal officiel et inviter les questions",
          "Publish clear status on official channel and invite questions",
          true
        ),
        opt(
          "Remplacer la communication par un atelier d'engagement d'une journée sans clarifier les faits",
          "Replace communication with a full-day engagement workshop without clarifying facts",
          false,
          "L'engagement (T04) ne remplace pas la clarification d'information (T08).",
          "Engagement (T04) does not replace information clarity (T08)."
        ),
        opt(
          "Partager tous les brouillons internes non validés",
          "Share all unvalidated internal drafts",
          false,
          "Expose des hypothèses et augmente le bruit.",
          "Exposes hypotheses and increases noise."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Trois décideurs sont en désaccord urgent sur une option. Quelle méthode T08 est la plus adaptée ?",
        promptEn:
          "Three decision-makers urgently disagree on an option. Which T08 method fits best?",
        explanationCorrectFr:
          "Urgence + dialogue → communication interactive.",
        explanationCorrectEn:
          "Urgency + dialogue → interactive communication.",
        difficulty: 2,
        options: [
          opt("Atelier ou réunion interactive courte", "Short interactive workshop or meeting", true),
          opt("Seul un dépôt pull sans notification", "Pull repository only with no notification", false, "Le pull seul est trop lent pour l'urgence.", "Pull alone is too slow for urgency."),
          opt("Un email push de 12 pages sans discussion", "A 12-page push email with no discussion", false, "Le push long sans dialogue n'aligne pas les décideurs.", "Long push without dialogue does not align decision-makers."),
          opt("Attendre le transfert de connaissances de clôture", "Wait for closing knowledge transfer", false, "T07 n'est pas le bon levier pour une décision urgente.", "T07 is the wrong lever for an urgent decision."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Quelle distinction est correcte ?",
        promptEn: "Which distinction is correct?",
        explanationCorrectFr: "T04 engagement ≠ T08 communication ≠ T07 knowledge transfer.",
        explanationCorrectEn: "T04 engagement ≠ T08 communication ≠ T07 knowledge transfer.",
        difficulty: 2,
        options: [
          opt(
            "T08 informe ; T04 engage ; T07 transfère le savoir/capacité",
            "T08 informs; T04 engages; T07 transfers know-how/capability",
            true
          ),
          opt(
            "T08 et T04 sont la même tâche ECO",
            "T08 and T04 are the same ECO task",
            false,
            "T04 = engagement ; T08 = communication — tâches distinctes.",
            "T04 = engagement; T08 = communication — distinct tasks."
          ),
          opt(
            "T08 remplace T07 dès qu'un rapport existe",
            "T08 replaces T07 once a report exists",
            false,
            "Un rapport n'équivaut pas au transfert de capacité.",
            "A report is not capability transfer."
          ),
          opt(
            "Seul le pull compte pour le PMP",
            "Only pull matters for the PMP",
            false,
            "Les trois modes existent et s'adaptent au besoin.",
            "All three modes exist and are tailored to need."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "cost",
    titleFr: "Finances projet et décisions EVM",
    titleEn: "Project Finance and EVM Decisions",
    descriptionFr:
      "Relier PV/EV/AC → CPI/SPI → prévision → action (ECO PROCESS-T06) — pas du calcul isolé.",
    descriptionEn:
      "Connect PV/EV/AC → CPI/SPI → forecast → action (ECO PROCESS-T06) — not isolated math.",
    moduleSlug: "process",
    sortOrder: 6,
    estimatedMinutes: 11,
    difficulty: "INTERMEDIATE",
    skillSlug: "cost",
    learningObjective: "DECIDE",
    objectiveFr:
      "Interpréter CPI/SPI, estimer EAC/ETC et choisir quoi présenter au sponsor.",
    objectiveEn:
      "Interpret CPI/SPI, estimate EAC/ETC, and choose what to present to the sponsor.",
    explanationFr:
      "PROCESS-T06 : finances. PV (valeur planifiée), EV (valeur acquise), AC (coût réel) → CPI = EV/AC, SPI = EV/PV. Si la performance coûts se poursuit : EAC = BAC / CPI ; ETC = EAC − AC. Toujours : métrique → interprétation → prévision → décision. HelioRoute : BAC 1 200 k€, EV 540, AC 650 → CPI ≈ 0,83 → EAC ≈ 1 445 k€. Adaptive/hybrid : budgets plus courts, révision périodique, même chaîne décisionnelle. Business case / benefits plan ≠ plan de management de projet. Contenu PLA — condensé instructeur Lesson 4.",
    explanationEn:
      "PROCESS-T06: finance. PV (planned value), EV (earned value), AC (actual cost) → CPI = EV/AC, SPI = EV/PV. If cost performance continues: EAC = BAC / CPI; ETC = EAC − AC. Always: metric → interpretation → forecast → decision. HelioRoute: BAC €1,200k, EV 540, AC 650 → CPI ≈ 0.83 → EAC ≈ €1,445k. Adaptive/hybrid: shorter budgets, periodic review, same decision chain. Business case / benefits plan ≠ project management plan. PLA content — instructor Lesson 4 condensé.",
    exampleFr:
      "Comité HelioRoute : CPI 0,83 → EAC, causes, options (scope swap / budget / replan) — pas « on espère rattraper ».",
    exampleEn:
      "HelioRoute committee: CPI 0.83 → EAC, causes, options (scope swap / budget / replan) — not “we hope to catch up.”",
    practicalFr:
      "Calculez CPI et EAC pour BAC 800, EV 300, AC 400 — puis écrivez une phrase de décision.",
    practicalEn:
      "Compute CPI and EAC for BAC 800, EV 300, AC 400 — then write one decision sentence.",
    mistakeFr:
      "Confondre BAC et EAC, ou présenter des chiffres sans option d'action.",
    mistakeEn:
      "Confusing BAC and EAC, or presenting numbers without an action option.",
    takeawayFr:
      "EVM sert à décider : que se passe-t-il, pourquoi, quelle prévision, quelle action ?",
    takeawayEn:
      "EVM exists to decide: what is happening, why, what forecast, what action?",
    decisionFr:
      "CPI < 0,9 en phase critique → EAC + causes + options au sponsor avant de changer la baseline.",
    decisionEn:
      "CPI < 0.9 in critical phase → EAC + causes + options to sponsor before changing baseline.",
    flashcardFrontFr: "EAC si CPI stable",
    flashcardFrontEn: "EAC if CPI stable",
    flashcardBackFr: "EAC ≈ BAC / CPI ; ETC = EAC − AC.",
    flashcardBackEn: "EAC ≈ BAC / CPI; ETC = EAC − AC.",
    exercisePromptFr:
      "Tracez la chaîne PV/EV/AC → CPI → EAC → décision pour HelioRoute.",
    exercisePromptEn:
      "Trace PV/EV/AC → CPI → EAC → decision for HelioRoute.",
    situation: {
      scenarioFr:
        "HelioRoute à mi-parcours : BAC 1 200 k€, EV 540 k€, AC 650 k€. Le sponsor demande « on est dans les clous ? »",
      scenarioEn:
        "HelioRoute mid-flight: BAC €1,200k, EV €540k, AC €650k. Sponsor asks “are we on track?”",
      problemFr: "CPI < 1 — besoin de prévision et d'options, pas de réassurance vague.",
      problemEn: "CPI < 1 — need forecast and options, not vague reassurance.",
      bestActionFr:
        "Calculer CPI/EAC, analyser causes, présenter options (scope, budget, rythme).",
      bestActionEn:
        "Compute CPI/EAC, analyze causes, present options (scope, budget, pace).",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "BAC 1200, EV 540, AC 650. Quelle est la MEILLEURE prochaine action du PM ?",
      promptEn:
        "BAC 1200, EV 540, AC 650. What is the PM’s BEST next action?",
      explanationCorrectFr:
        "Interpréter (CPI), prévoir (EAC), décider (options) — chaîne Lesson 4.",
      explanationCorrectEn:
        "Interpret (CPI), forecast (EAC), decide (options) — Lesson 4 chain.",
      difficulty: 2,
      options: [
        opt(
          "Dire que le BAC reste la vérité et continuer sans analyse",
          "Say BAC remains truth and continue without analysis",
          false,
          "Le BAC est le plan ; l'EAC projette la réalité.",
          "BAC is the plan; EAC projects reality."
        ),
        opt(
          "Calculer CPI/EAC, analyser les causes et proposer des options au sponsor",
          "Compute CPI/EAC, analyze causes, and propose options to the sponsor",
          true
        ),
        opt(
          "Modifier la baseline immédiatement sans processus de changement",
          "Change the baseline immediately without change control",
          false,
          "Toute modification de baseline suit un processus formel.",
          "Any baseline change follows a formal process."
        ),
        opt(
          "Arrêter tout reporting financier jusqu'à la clôture",
          "Stop all financial reporting until closure",
          false,
          "Cela prive le sponsor de signaux de décision.",
          "That deprives the sponsor of decision signals."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Si la performance coûts actuelle se poursuit, quelle formule EAC est la plus cohérente avec le scénario du cours ?",
        promptEn:
          "If current cost performance continues, which EAC formula best matches the course scenario?",
        explanationCorrectFr: "EAC = BAC / CPI lorsque la tendance coûts se poursuit.",
        explanationCorrectEn: "EAC = BAC / CPI when the cost trend continues.",
        difficulty: 2,
        options: [
          opt("EAC = BAC / CPI", "EAC = BAC / CPI", true),
          opt("EAC = AC seulement", "EAC = AC only", false, "AC est le coût réel à date, pas la projection totale.", "AC is actual to date, not total projection."),
          opt("EAC = PV − EV", "EAC = PV − EV", false, "PV − EV est un écart de planning, pas EAC.", "PV − EV is schedule variance, not EAC."),
          opt("EAC = SPI × BAC", "EAC = SPI × BAC", false, "SPI concerne le planning ; ici la tendance coûts utilise CPI.", "SPI is schedule; cost trend uses CPI."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Après EAC, comment obtenir ETC dans le même scénario ?",
        promptEn: "After EAC, how do you get ETC in the same scenario?",
        explanationCorrectFr: "ETC = EAC − AC.",
        explanationCorrectEn: "ETC = EAC − AC.",
        difficulty: 2,
        options: [
          opt("ETC = EAC − AC", "ETC = EAC − AC", true),
          opt("ETC = BAC − PV", "ETC = BAC − PV", false, "Ce n'est pas ETC.", "That is not ETC."),
          opt("ETC = CPI × SPI", "ETC = CPI × SPI", false, "Produit d'indices ≠ travail restant estimé.", "Index product ≠ remaining work estimate."),
          opt("ETC = EV / AC", "ETC = EV / AC", false, "EV/AC = CPI, pas ETC.", "EV/AC = CPI, not ETC."),
        ],
      }),
    ],
  }),
];

export const PMP_B3_UPGRADE_SLUGS = PMP_B3_QUALITY_UPGRADES.map((l) => l.slug);
