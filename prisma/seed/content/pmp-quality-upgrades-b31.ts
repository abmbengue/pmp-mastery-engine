/**
 * Phase B.3.1 — lesson content quality + mobile readiness upgrades.
 * Decision/scenario pedagogy — NOT exam bank items, NOT PMI official wording.
 * Provenance: INSTRUCTOR_DERIVED (authorized blueprint) + PLA_INTERNAL.
 * Later entries win in applyPmpQualityUpgrades.
 */

import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

export const PMP_B31_QUALITY_UPGRADES: PmpLesson[] = [
  // ── P0: Closure (PROCESS-T10) ───────────────────────────────────────────
  buildPmpLesson({
    slug: "project-lifecycle-basics",
    titleFr: "Clôturer le projet avec succès",
    titleEn: "Close the Project Successfully",
    descriptionFr:
      "Vérifier readiness, acceptation, transition, archives et libération des ressources (ECO PROCESS-T10).",
    descriptionEn:
      "Verify readiness, acceptance, transition, archives, and resource release (ECO PROCESS-T10).",
    moduleSlug: "foundations",
    sortOrder: 2,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-foundations",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider si un projet Helios peut être clôturé et quoi faire ENSUITE si la transition ops n'est pas prête.",
    objectiveEn:
      "Decide whether a Helios project can close and what to do NEXT if ops transition is not ready.",
    explanationFr:
      "PROCESS-T10 — clôture. Checklist : livrables terminés et acceptés, exigences satisfaites, problèmes/risques résiduels traités ou transférés, contrats/finances clos, obligations légales, readiness client/users/support, transfert de connaissances, final report, OPA/archives, libération des ressources. Predictive : acceptance finale puis clôture formelle. Adaptive : DoD + acceptance + transition selon contexte. Bénéfices : certains immédiats, d'autres suivis après (benefits owner). Ne pas clôturer uniquement parce que le code est Done. Contenu PLA — blueprint instructeur Lesson 10 (INSTRUCTOR_DERIVED).",
    explanationEn:
      "PROCESS-T10 — closure. Checklist: deliverables done and accepted, requirements met, residual issues/risks handled or handed over, contracts/finance closed, legal obligations, client/users/support readiness, knowledge transfer, final report, OPA/archives, resource release. Predictive: final acceptance then formal close. Adaptive: DoD + acceptance + transition by context. Benefits: some immediate, others tracked later (benefits owner). Do not close only because code is Done. PLA content — instructor Lesson 10 blueprint (INSTRUCTOR_DERIVED).",
    exampleFr:
      "Helios : UAT OK, mais runbook ops manquant et hypercare non planifié → pas de clôture ; plan transition 2 semaines.",
    exampleEn:
      "Helios: UAT OK, but ops runbook missing and hypercare unplanned → no close; 2-week transition plan.",
    practicalFr:
      "Checklist 6 cases : acceptation / contrats / finances / readiness / LL / ressources — cochez ce qui manque.",
    practicalEn:
      "6-box checklist: acceptance / contracts / finance / readiness / LL / resources — tick what is missing.",
    mistakeFr:
      "Clôturer dès que les livrables sont Done sans readiness ops ni transfert client.",
    mistakeEn:
      "Closing as soon as deliverables are Done without ops readiness or client handover.",
    takeawayFr:
      "Clôture = acceptation + transition + archives + libération — pas seulement « Done technique ».",
    takeawayEn:
      "Closure = acceptance + transition + archives + release — not only “technical Done.”",
    decisionFr:
      "Si readiness incomplète → planifier transition/support avant de libérer l'équipe.",
    decisionEn:
      "If readiness incomplete → plan transition/support before releasing the team.",
    flashcardFrontFr: "Conditions de clôture",
    flashcardFrontEn: "Closure conditions",
    flashcardBackFr: "Acceptation, obligations, transition, archives, ressources, LL.",
    flashcardBackEn: "Acceptance, obligations, transition, archives, resources, LL.",
    exercisePromptFr:
      "Rédigez un plan transition Helios en 5 lignes (formation, runbook, hypercare, owner, date).",
    exercisePromptEn:
      "Write a 5-line Helios transition plan (training, runbook, hypercare, owner, date).",
    situation: {
      scenarioFr:
        "Helios : livrables acceptés. Le sponsor veut clôturer demain. Ops n'a ni runbook ni astreinte.",
      scenarioEn:
        "Helios: deliverables accepted. Sponsor wants to close tomorrow. Ops has neither runbook nor on-call.",
      problemFr: "Acceptation ≠ readiness de transition.",
      problemEn: "Acceptance ≠ transition readiness.",
      bestActionFr:
        "Reporter la clôture administrative, évaluer readiness, planifier transition/hypercare, puis clôturer.",
      bestActionEn:
        "Defer administrative closure, assess readiness, plan transition/hypercare, then close.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Livrables acceptés, ops non prêtes, sponsor veut clôturer demain. Que faire ENSUITE ?",
      promptEn:
        "Deliverables accepted, ops not ready, sponsor wants to close tomorrow. What NEXT?",
      explanationCorrectFr:
        "PROCESS-T10 exige readiness/transition — pas une clôture précipitée.",
      explanationCorrectEn:
        "PROCESS-T10 requires readiness/transition — not a rushed close.",
      difficulty: 2,
      options: [
        opt(
          "Clôturer immédiatement et libérer toute l'équipe",
          "Close immediately and release the whole team",
          false,
          "Ignore readiness et support.",
          "Ignores readiness and support."
        ),
        opt(
          "Évaluer readiness et planifier la transition avant clôture",
          "Assess readiness and plan transition before closure",
          true
        ),
        opt(
          "Rouvrir tout le scope produit",
          "Reopen the entire product scope",
          false,
          "Hors sujet si l'acceptation est déjà faite.",
          "Off-topic if acceptance is already done."
        ),
        opt(
          "Archiver sans informer ops",
          "Archive without informing ops",
          false,
          "Ops doit être partie de la transition.",
          "Ops must be part of the transition."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "En contexte adaptatif, quelle affirmation sur la clôture est la plus juste ?",
        promptEn: "In an adaptive context, which closure statement is most accurate?",
        explanationCorrectFr: "DoD + acceptance + transition selon contexte — pas seulement un CCB final.",
        explanationCorrectEn: "DoD + acceptance + transition by context — not only a final CCB.",
        difficulty: 2,
        options: [
          opt(
            "DoD, acceptance et transition restent nécessaires selon le contexte",
            "DoD, acceptance, and transition remain needed by context",
            true
          ),
          opt(
            "Aucun critère d'acceptation n'est requis en agile",
            "No acceptance criteria are required in agile",
            false,
            "L'acceptation reste critique.",
            "Acceptance remains critical."
          ),
          opt(
            "La clôture se limite à archiver le backlog",
            "Closure is only archiving the backlog",
            false,
            "Il manque transition, contrats, LL, ressources.",
            "Missing transition, contracts, LL, resources."
          ),
          opt(
            "On clôture uniquement après 12 sprints fixes",
            "You close only after 12 fixed sprints",
            false,
            "La durée n'est pas le critère de clôture.",
            "Duration is not the closure criterion."
          ),
        ],
      }),
    ],
  }),

  // ── P0: Resources (PROCESS-T04) — was thin ──────────────────────────────
  buildPmpLesson({
    slug: "resource-management",
    titleFr: "Planifier et gérer les ressources",
    titleEn: "Plan and Manage Resources",
    descriptionFr:
      "RACI, calendriers, compétences et conflits d'allocation (ECO PROCESS-T04).",
    descriptionEn:
      "RACI, calendars, skills, and allocation conflicts (ECO PROCESS-T04).",
    moduleSlug: "process",
    sortOrder: 12,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-process",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider quoi faire quand deux projets sur-allouent les mêmes experts sur le chemin critique.",
    objectiveEn:
      "Decide what to do when two projects over-allocate the same experts on the critical path.",
    explanationFr:
      "PROCESS-T04 — ressources. Planifier personnes/équipements, rôles, autorité, compétences, formation, reconnaissance, contrôle. RACI : ≥1 R, un seul A par tâche, C contribue, I informé. Calendriers de ressources = disponibilité réelle. Rolling wave : détail court terme. Predictive : allocations et baselines plus stables. Adaptive : capacité par sprint, WIP limits. Conflit sur chemin critique → escalader avec impact + options (reprioriser, emprunter, former, décaler). Contenu PLA — Lesson 4 blueprint (INSTRUCTOR_DERIVED).",
    explanationEn:
      "PROCESS-T04 — resources. Plan people/equipment, roles, authority, skills, training, recognition, control. RACI: ≥1 R, exactly one A per task, C contributes, I informed. Resource calendars = real availability. Rolling wave: near-term detail. Predictive: more stable allocations and baselines. Adaptive: capacity per sprint, WIP limits. Critical-path conflict → escalate with impact + options (reprioritize, borrow, train, shift). PLA content — Lesson 4 blueprint (INSTRUCTOR_DERIVED).",
    exampleFr:
      "HelioRoute : 2 experts GPS à 50 % ailleurs en Q2 → SPI menacé ; PM propose options au PMO.",
    exampleEn:
      "HelioRoute: 2 GPS experts at 50% elsewhere in Q2 → SPI threatened; PM proposes options to PMO.",
    practicalFr: "Corrigez un RACI avec deux A sur la même tâche.",
    practicalEn: "Fix a RACI that has two As on the same task.",
    mistakeFr: "Deux Accountable, ou ressources planifiées à 100 % sur 3 projets.",
    mistakeEn: "Two Accountables, or resources planned at 100% on 3 projects.",
    takeawayFr: "Ressources = capacité réelle + RACI clair + escalade tôt sur le critique.",
    takeawayEn: "Resources = real capacity + clear RACI + early escalate on critical path.",
    decisionFr: "Sur-allocation critique → options chiffrées avant d'ajouter du scope.",
    decisionEn: "Critical over-allocation → quantified options before adding scope.",
    flashcardFrontFr: "RACI — règle d'or",
    flashcardFrontEn: "RACI — golden rule",
    flashcardBackFr: "≥1 R ; un seul A ; C et I distincts.",
    flashcardBackEn: "≥1 R; exactly one A; distinct C and I.",
    exercisePromptFr: "Proposez 3 options pour un conflit d'experts GPS.",
    exercisePromptEn: "Propose 3 options for a GPS expert conflict.",
    situation: {
      scenarioFr:
        "HelioRoute : experts GPS partagés ; chemin critique en danger dans 3 semaines.",
      scenarioEn:
        "HelioRoute: shared GPS experts; critical path at risk in 3 weeks.",
      problemFr: "Capacité insuffisante — décision PROCESS-T04.",
      problemEn: "Insufficient capacity — PROCESS-T04 decision.",
      bestActionFr:
        "Escalader avec impact planning + 2–3 options (réallocation, décalage, renfort).",
      bestActionEn:
        "Escalate with schedule impact + 2–3 options (reallocation, shift, surge).",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Experts critiques sur-alloués, chemin critique menacé. Meilleure action IMMÉDIATE ?",
      promptEn:
        "Critical experts over-allocated, critical path threatened. Best IMMEDIATE action?",
      explanationCorrectFr: "Escalade avec impact et options — pas ignorer ni ajouter du travail.",
      explanationCorrectEn: "Escalate with impact and options — do not ignore or add work.",
      difficulty: 2,
      options: [
        opt(
          "Escalader, quantifier l'impact, proposer options d'allocation",
          "Escalate, quantify impact, propose allocation options",
          true
        ),
        opt(
          "Ignorer jusqu'à la rétrospective",
          "Ignore until the retrospective",
          false,
          "Le chemin critique n'attend pas.",
          "The critical path will not wait."
        ),
        opt(
          "Ajouter des stories sans changer la capacité",
          "Add stories without changing capacity",
          false,
          "Plus de travail sans capacité empire le problème.",
          "More work without capacity worsens the problem."
        ),
        opt(
          "Remplacer le RACI par un email unique au sponsor",
          "Replace the RACI with a single email to the sponsor",
          false,
          "L'email n'alloue pas la capacité.",
          "Email does not allocate capacity."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Deux personnes sont Accountable sur la même tâche RACI. Que faire ?",
        promptEn: "Two people are Accountable on the same RACI task. What to do?",
        explanationCorrectFr: "Un seul A par tâche — clarifier l'autorité.",
        explanationCorrectEn: "Exactly one A per task — clarify authority.",
        difficulty: 2,
        options: [
          opt("Conserver un seul A et clarifier les R", "Keep a single A and clarify the Rs", true),
          opt("Ajouter encore un A pour plus de contrôle", "Add another A for more control", false, "Multiplie la confusion.", "Multiplies confusion."),
          opt("Supprimer tous les R", "Remove all Rs", false, "Il faut au moins un R.", "Need at least one R."),
          opt("Ignorer RACI en agile", "Ignore RACI in agile", false, "La clarté des rôles reste utile.", "Role clarity remains useful."),
        ],
      }),
    ],
  }),

  // ── P0 reinforce: shared-vision ─────────────────────────────────────────
  buildPmpLesson({
    slug: "shared-vision",
    titleFr: "Vision partagée",
    titleEn: "Shared Vision",
    descriptionFr:
      "Aligner les parties sur une image commune du succès (ECO PEOPLE-T01).",
    descriptionEn:
      "Align parties on a common picture of success (ECO PEOPLE-T01).",
    moduleSlug: "people",
    sortOrder: 15,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "leadership",
    learningObjective: "DECIDE",
    objectiveFr:
      "Choisir la première action quand sponsor et équipe divergent sur le succès.",
    objectiveEn:
      "Choose the first action when sponsor and team diverge on success.",
    explanationFr:
      "PEOPLE-T01 — vision commune. Chaîne : vision → alignement → objectifs partagés → compréhension → décisions cohérentes. Vision ≠ liste de livrables ; livrable ≠ résultat ≠ valeur. Charte autorise ; vision aligne. Techniques : atelier, product box, métaphore, négociation. Si malentendu : impliquer, approfondir, 5 Whys/Ishikawa, clarifier le résultat convenu. Predictive : vision figée plus tôt. Adaptive : vision produit vivante + feedback. Hybrid : cadre stable + détail évolutif. Piège : accélérer le backlog sans image commune. PLA — Lesson 2 blueprint (INSTRUCTOR_DERIVED).",
    explanationEn:
      "PEOPLE-T01 — common vision. Chain: vision → alignment → shared goals → understanding → coherent decisions. Vision ≠ deliverable list; deliverable ≠ outcome ≠ value. Charter authorizes; vision aligns. Techniques: workshop, product box, metaphor, negotiation. If misunderstanding: involve, dig, 5 Whys/Ishikawa, clarify agreed outcome. Predictive: vision locked earlier. Adaptive: living product vision + feedback. Hybrid: stable frame + evolving detail. Trap: speeding the backlog without a shared picture. PLA — Lesson 2 blueprint (INSTRUCTOR_DERIVED).",
    exampleFr:
      "Helios : « moderniser le commerce » vs « réécrire le POS » → atelier vision + non-buts + critères.",
    exampleEn:
      "Helios: “modernize retail” vs “rewrite POS” → vision workshop + non-goals + criteria.",
    practicalFr: "Écrivez vision / livrable / résultat / valeur en 4 lignes.",
    practicalEn: "Write vision / deliverable / outcome / value in 4 lines.",
    mistakeFr: "Traiter la vision comme un WBS, ou escalader sans clarification.",
    mistakeEn: "Treating vision as a WBS, or escalating without clarification.",
    takeawayFr: "Sans vision partagée, toute accélération amplifie le désalignement.",
    takeawayEn: "Without shared vision, any acceleration amplifies misalignment.",
    decisionFr: "Divergence sur le succès → atelier d'alignement AVANT plus de scope.",
    decisionEn: "Success divergence → alignment workshop BEFORE more scope.",
    flashcardFrontFr: "Vision → décisions",
    flashcardFrontEn: "Vision → decisions",
    flashcardBackFr: "Image commune du succès avant d'exécuter.",
    flashcardBackEn: "Shared success picture before executing.",
    exercisePromptFr: "Préparez l'agenda d'un atelier vision de 45 min.",
    exercisePromptEn: "Prepare a 45-min vision workshop agenda.",
    situation: {
      scenarioFr:
        "Sponsor parle expérience client ; équipe livre des tickets POS. Critères de succès divergents.",
      scenarioEn:
        "Sponsor talks customer experience; team ships POS tickets. Success criteria diverge.",
      problemFr: "Absence de vision partagée (T01).",
      problemEn: "Missing shared vision (T01).",
      bestActionFr: "Faciliter un atelier vision avec parties clés.",
      bestActionEn: "Facilitate a vision workshop with key parties.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Sponsor et équipe n'ont pas la même image du succès. Première action ?",
      promptEn: "Sponsor and team lack the same success picture. First action?",
      explanationCorrectFr: "PEOPLE-T01 : aligner la vision avant d'accélérer.",
      explanationCorrectEn: "PEOPLE-T01: align vision before accelerating.",
      difficulty: 2,
      options: [
        opt("Accélérer le backlog pour montrer du progrès", "Speed the backlog to show progress", false, "Amplifie le désalignement.", "Amplifies misalignment."),
        opt("Faciliter un atelier de vision partagée", "Facilitate a shared-vision workshop", true),
        opt("Escalader sans clarification", "Escalate without clarification", false, "Déplace le conflit.", "Moves the conflict."),
        opt("Geler tout jusqu'à la fin", "Freeze everything until the end", false, "Bloque la valeur sans aligner.", "Blocks value without aligning."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Quelle chaîne est la plus correcte ?",
        promptEn: "Which chain is most correct?",
        explanationCorrectFr: "Vision → alignement → décisions cohérentes.",
        explanationCorrectEn: "Vision → alignment → coherent decisions.",
        difficulty: 2,
        options: [
          opt("Vision → alignement → objectifs partagés → décisions cohérentes", "Vision → alignment → shared goals → coherent decisions", true),
          opt("WBS → vision → engagement sponsor uniquement", "WBS → vision → sponsor engagement only", false, "Inverse l'ordre pédagogique.", "Reverses pedagogical order."),
          opt("Vision = liste exhaustive des tickets", "Vision = exhaustive ticket list", false, "Vision ≠ backlog.", "Vision ≠ backlog."),
          opt("Charte remplace toute vision", "Charter replaces any vision", false, "Charte autorise ; vision aligne.", "Charter authorizes; vision aligns."),
        ],
      }),
    ],
  }),

  // ── P0 reinforce: knowledge-transfer ────────────────────────────────────
  buildPmpLesson({
    slug: "knowledge-transfer",
    titleFr: "Transfert des connaissances",
    titleEn: "Knowledge Transfer",
    descriptionFr:
      "Préserver et faire circuler le savoir critique (ECO PEOPLE-T07) — ≠ T08 communication.",
    descriptionEn:
      "Preserve and circulate critical know-how (ECO PEOPLE-T07) — ≠ T08 communication.",
    moduleSlug: "people",
    sortOrder: 16,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-people",
    learningObjective: "DECIDE",
    objectiveFr:
      "Choisir une méthode de transfert et vérifier que la capacité a réellement changé de mains.",
    objectiveEn:
      "Choose a transfer method and verify capability actually changed hands.",
    explanationFr:
      "PEOPLE-T07 — ensure knowledge transfer. Documentation ≠ transfert. Capture ≠ transfert. Communication (T08) ≠ transfert. Engagement (T04) ≠ transfert. Tacite → pairing/coaching/observation. Explicite → docs/repo. Niveaux : individu / projet / organisation. Vérifier le transfert : la personne cible réalise la tâche sans l'expert. Clôture : rétrospective, LL, archive, repository, transfert client. PLA — Lesson 6-A (INSTRUCTOR_DERIVED).",
    explanationEn:
      "PEOPLE-T07 — ensure knowledge transfer. Documentation ≠ transfer. Capture ≠ transfer. Communication (T08) ≠ transfer. Engagement (T04) ≠ transfer. Tacit → pairing/coaching/observation. Explicit → docs/repo. Levels: individual / project / organization. Verify transfer: target person performs without the expert. Closure: retrospective, LL, archive, repository, client handover. PLA — Lesson 6-A (INSTRUCTOR_DERIVED).",
    exampleFr:
      "Expert GPS part : pairing 2 semaines + capture décisions + démonstration solo par le fill-in.",
    exampleEn:
      "GPS expert leaving: 2-week pairing + decision capture + solo demo by the fill-in.",
    practicalFr: "3 connaissances critiques : tacite/explicite ? méthode ? critère de succès ?",
    practicalEn: "3 critical knowledge items: tacit/explicit? method? success criterion?",
    mistakeFr: "Croire qu'un wiki ou plus d'emails = T07.",
    mistakeEn: "Believing a wiki or more emails = T07.",
    takeawayFr: "T07 = capacité démontrée chez d'autres personnes — pas seulement des fichiers.",
    takeawayEn: "T07 = demonstrated capability in other people — not only files.",
    decisionFr: "Expert critique qui part → pairing immédiat + critère de vérification.",
    decisionEn: "Critical expert leaving → immediate pairing + verification criterion.",
    flashcardFrontFr: "T07 vs T08 vs T04",
    flashcardFrontEn: "T07 vs T08 vs T04",
    flashcardBackFr: "Savoir/capacité · Information/canal · Engagement/relation",
    flashcardBackEn: "Know-how/capability · Information/channel · Engagement/relationship",
    exercisePromptFr: "Plan 10 jours de transfert avec critère « fait sans l'expert ».",
    exercisePromptEn: "10-day transfer plan with “done without the expert” criterion.",
    situation: {
      scenarioFr:
        "Expert unique part dans 3 semaines. L'équipe demande « plus d'emails de statut ».",
      scenarioEn:
        "Sole expert leaves in 3 weeks. Team asks for “more status emails.”",
      problemFr: "Ils demandent T08 ; le besoin réel est T07.",
      problemEn: "They ask for T08; the real need is T07.",
      bestActionFr: "Organiser pairing/coaching et vérifier la capacité transférée.",
      bestActionEn: "Set up pairing/coaching and verify transferred capability.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Expert unique part bientôt. Quelle action sert PEOPLE-T07 ?",
      promptEn: "Sole expert leaving soon. Which action serves PEOPLE-T07?",
      explanationCorrectFr: "Transfert de capacité via interaction — pas seulement push info.",
      explanationCorrectEn: "Capability transfer via interaction — not only info push.",
      difficulty: 2,
      options: [
        opt("Augmenter les emails de statut", "Increase status emails", false, "T08, insuffisant pour le tacite.", "T08, insufficient for tacit."),
        opt("Organiser pairing et vérifier que le fill-in exécute sans l'expert", "Set up pairing and verify the fill-in performs without the expert", true),
        opt("Attendre uniquement la rétrospective finale", "Wait only for the final retrospective", false, "Trop tard.", "Too late."),
        opt("Remplacer par plus de réunions d'engagement sponsor", "Replace with more sponsor engagement meetings", false, "T04 ≠ T07.", "T04 ≠ T07."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Comment vérifier qu'un transfert a réellement eu lieu ?",
        promptEn: "How do you verify transfer actually happened?",
        explanationCorrectFr: "La cible réalise la tâche sans l'expert — preuve de capacité.",
        explanationCorrectEn: "Target performs without the expert — capability proof.",
        difficulty: 2,
        options: [
          opt("La personne cible exécute la tâche critique sans l'expert", "The target person performs the critical task without the expert", true),
          opt("Un document a été déposé sur le wiki", "A document was uploaded to the wiki", false, "Capture ≠ transfert vérifié.", "Capture ≠ verified transfer."),
          opt("Le sponsor a reçu un rapport", "The sponsor received a report", false, "Reporting = T08.", "Reporting = T08."),
          opt("L'équipe a voté « on a compris »", "The team voted “we understand”", false, "Déclaration ≠ démonstration.", "Statement ≠ demonstration."),
        ],
      }),
    ],
  }),

  // ── P0 reinforce: cost/EVM ──────────────────────────────────────────────
  buildPmpLesson({
    slug: "cost",
    titleFr: "Finances projet et décisions EVM",
    titleEn: "Project Finance and EVM Decisions",
    descriptionFr:
      "PV→EV→AC→CPI/SPI→EAC/ETC→décision (ECO PROCESS-T06).",
    descriptionEn:
      "PV→EV→AC→CPI/SPI→EAC/ETC→decision (ECO PROCESS-T06).",
    moduleSlug: "process",
    sortOrder: 6,
    estimatedMinutes: 12,
    difficulty: "INTERMEDIATE",
    skillSlug: "cost",
    learningObjective: "DECIDE",
    objectiveFr:
      "Interpréter un tableau PV/EV/AC et choisir quoi présenter au sponsor.",
    objectiveEn:
      "Interpret a PV/EV/AC table and choose what to present to the sponsor.",
    explanationFr:
      "PROCESS-T06. Carte mobile : PV (planifié) · EV (accompli valorisé) · AC (dépensé) → CPI=EV/AC · SPI=EV/PV → si tendance coûts stable EAC=BAC/CPI · ETC=EAC−AC → options (scope, budget, rythme). CPI<1 = coût excessif pour la valeur acquise. SPI<1 = retard vs plan. Ne pas confondre BAC (plan) et EAC (prévision). Adaptive : mêmes signaux sur horizons plus courts. PLA — Lesson 4 (INSTRUCTOR_DERIVED).",
    explanationEn:
      "PROCESS-T06. Mobile card: PV (planned) · EV (earned) · AC (spent) → CPI=EV/AC · SPI=EV/PV → if cost trend stable EAC=BAC/CPI · ETC=EAC−AC → options (scope, budget, pace). CPI<1 = too much cost for earned value. SPI<1 = behind plan. Do not confuse BAC (plan) and EAC (forecast). Adaptive: same signals on shorter horizons. PLA — Lesson 4 (INSTRUCTOR_DERIVED).",
    exampleFr:
      "BAC 1200 · EV 540 · AC 650 → CPI≈0,83 → EAC≈1446 → ETC≈796 → options au comité.",
    exampleEn:
      "BAC 1200 · EV 540 · AC 650 → CPI≈0.83 → EAC≈1446 → ETC≈796 → options to committee.",
    practicalFr: "BAC 800, EV 300, AC 400 : CPI, EAC, une phrase de décision.",
    practicalEn: "BAC 800, EV 300, AC 400: CPI, EAC, one decision sentence.",
    mistakeFr: "Présenter le BAC comme si c'était encore la vérité sans EAC.",
    mistakeEn: "Presenting BAC as still true without EAC.",
    takeawayFr: "EVM sert à décider, pas à réciter des formules.",
    takeawayEn: "EVM exists to decide, not to recite formulas.",
    decisionFr: "CPI<0,9 critique → EAC + causes + options avant de toucher la baseline.",
    decisionEn: "Critical CPI<0.9 → EAC + causes + options before touching baseline.",
    flashcardFrontFr: "Chaîne EVM",
    flashcardFrontEn: "EVM chain",
    flashcardBackFr: "PV/EV/AC → CPI/SPI → EAC/ETC → décision",
    flashcardBackEn: "PV/EV/AC → CPI/SPI → EAC/ETC → decision",
    exercisePromptFr: "Dessinez la chaîne EVM en 6 cases sur une note téléphone.",
    exercisePromptEn: "Draw the EVM chain in 6 boxes on a phone note.",
    situation: {
      scenarioFr: "HelioRoute mi-parcours : BAC 1200, EV 540, AC 650. Sponsor : « on est OK ? »",
      scenarioEn: "HelioRoute mid-flight: BAC 1200, EV 540, AC 650. Sponsor: “are we OK?”",
      problemFr: "CPI<1 — besoin de prévision et d'options.",
      problemEn: "CPI<1 — need forecast and options.",
      bestActionFr: "Calculer CPI/EAC, analyser causes, proposer options.",
      bestActionEn: "Compute CPI/EAC, analyze causes, propose options.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "BAC 1200, EV 540, AC 650. Meilleure prochaine action du PM ?",
      promptEn: "BAC 1200, EV 540, AC 650. PM’s best next action?",
      explanationCorrectFr: "Interpréter → prévoir → décider avec options.",
      explanationCorrectEn: "Interpret → forecast → decide with options.",
      difficulty: 2,
      options: [
        opt("Dire que le BAC reste la vérité et continuer", "Say BAC remains truth and continue", false, "BAC≠prévision.", "BAC≠forecast."),
        opt("Calculer CPI/EAC, analyser causes, proposer options", "Compute CPI/EAC, analyze causes, propose options", true),
        opt("Changer la baseline sans processus", "Change baseline without process", false, "Baseline = change formel.", "Baseline = formal change."),
        opt("Arrêter le reporting financier", "Stop financial reporting", false, "Supprime le signal.", "Removes the signal."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Si la performance coûts se poursuit, quelle formule EAC utiliser ?",
        promptEn: "If cost performance continues, which EAC formula?",
        explanationCorrectFr: "EAC = BAC / CPI.",
        explanationCorrectEn: "EAC = BAC / CPI.",
        difficulty: 2,
        options: [
          opt("EAC = BAC / CPI", "EAC = BAC / CPI", true),
          opt("EAC = AC seulement", "EAC = AC only", false, "AC = à date.", "AC = to date."),
          opt("EAC = PV − EV", "EAC = PV − EV", false, "Écart planning.", "Schedule variance."),
          opt("EAC = SPI × BAC", "EAC = SPI × BAC", false, "SPI≠coût.", "SPI≠cost."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Après EAC, comment obtenir ETC ?",
        promptEn: "After EAC, how do you get ETC?",
        explanationCorrectFr: "ETC = EAC − AC.",
        explanationCorrectEn: "ETC = EAC − AC.",
        difficulty: 2,
        options: [
          opt("ETC = EAC − AC", "ETC = EAC − AC", true),
          opt("ETC = BAC − PV", "ETC = BAC − PV", false, "Pas ETC.", "Not ETC."),
          opt("ETC = CPI × SPI", "ETC = CPI × SPI", false, "Pas un coût restant.", "Not remaining cost."),
          opt("ETC = EV / AC", "ETC = EV / AC", false, "C'est CPI.", "That is CPI."),
        ],
      }),
    ],
  }),

  // ── P1: stakeholders expectations T05/T06 ───────────────────────────────
  buildPmpLesson({
    slug: "stakeholders-basics",
    titleFr: "Parties prenantes : engagement et attentes",
    titleEn: "Stakeholders: Engagement and Expectations",
    descriptionFr:
      "Identifier, analyser, engager et aligner les attentes (ECO PEOPLE-T04/T05/T06).",
    descriptionEn:
      "Identify, analyze, engage, and align expectations (ECO PEOPLE-T04/T05/T06).",
    moduleSlug: "people",
    sortOrder: 6,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "stakeholder-engagement",
    learningObjective: "DECIDE",
    isShort: true,
    shortDurationSeconds: 170,
    objectiveFr:
      "Choisir entre engager (T04) et seulement informer (T08) quand les attentes divergent.",
    objectiveEn:
      "Choose between engaging (T04) and only informing (T08) when expectations diverge.",
    explanationFr:
      "T04 engagement = implication/relation. T05 alignement des attentes. T06 pilotage satisfaction. Matrices pouvoir/intérêt. Niveaux : unaware→leading. T08 = canaux/info — utile mais ≠ engagement. Si attentes irréalistes : transparence, clarification, feedback, documenter accords. PLA — Lesson 2 (INSTRUCTOR_DERIVED).",
    explanationEn:
      "T04 engagement = involvement/relationship. T05 expectation alignment. T06 satisfaction management. Power/interest matrices. Levels: unaware→leading. T08 = channels/info — useful but ≠ engagement. If unrealistic expectations: transparency, clarification, feedback, document agreements. PLA — Lesson 2 (INSTRUCTOR_DERIVED).",
    exampleFr:
      "Sponsor veut date impossible : atelier d'alignement (T05) + options, pas seulement un email (T08).",
    exampleEn:
      "Sponsor wants impossible date: alignment workshop (T05) + options, not only an email (T08).",
    practicalFr: "Classez 4 acteurs : engagement actuel vs désiré.",
    practicalEn: "Classify 4 actors: current vs desired engagement.",
    mistakeFr: "Croire qu'informer = engager.",
    mistakeEn: "Believing informing = engaging.",
    takeawayFr: "ENGAGEMENT ≠ COMMUNICATION ≠ KNOWLEDGE TRANSFER",
    takeawayEn: "ENGAGEMENT ≠ COMMUNICATION ≠ KNOWLEDGE TRANSFER",
    decisionFr: "Attentes divergentes → clarification collaborative avant promesse.",
    decisionEn: "Divergent expectations → collaborative clarification before promising.",
    flashcardFrontFr: "T04 vs T08",
    flashcardFrontEn: "T04 vs T08",
    flashcardBackFr: "Impliquer ≠ seulement informer",
    flashcardBackEn: "Involve ≠ only inform",
    exercisePromptFr: "Pour un résistant clé : 1 action T04 et 1 action T08 distinctes.",
    exercisePromptEn: "For a key resistant: 1 T04 action and 1 distinct T08 action.",
    situation: {
      scenarioFr:
        "Client interne exige une date irréaliste. L'équipe veut seulement « envoyer le planning ».",
      scenarioEn:
        "Internal client demands an unrealistic date. Team only wants to “send the schedule.”",
      problemFr: "Besoin d'alignement (T05), pas seulement push info (T08).",
      problemEn: "Need alignment (T05), not only info push (T08).",
      bestActionFr: "Faciliter l'alignement des attentes avec options réalistes.",
      bestActionEn: "Facilitate expectation alignment with realistic options.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Attentes client irréalistes. Meilleure action ?",
      promptEn: "Unrealistic client expectations. Best action?",
      explanationCorrectFr: "Aligner/clarifier (T05/T06) — pas seulement diffuser un planning.",
      explanationCorrectEn: "Align/clarify (T05/T06) — not only broadcast a schedule.",
      difficulty: 2,
      options: [
        opt("Envoyer uniquement le Gantt par email", "Only email the Gantt", false, "Informer ≠ aligner.", "Informing ≠ aligning."),
        opt("Faciliter une session d'alignement avec options réalistes", "Facilitate an alignment session with realistic options", true),
        opt("Accepter silencieusement la date", "Silently accept the date", false, "Crée un échec prévisible.", "Creates predictable failure."),
        opt("Ignorer le client", "Ignore the client", false, "Détruit l'engagement.", "Destroys engagement."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Quelle carte mentale est correcte ?",
        promptEn: "Which mental map is correct?",
        explanationCorrectFr: "T04 engagement · T08 communication · T07 knowledge transfer — distincts.",
        explanationCorrectEn: "T04 engagement · T08 communication · T07 knowledge transfer — distinct.",
        difficulty: 2,
        options: [
          opt("Engagement ≠ Communication ≠ Knowledge transfer", "Engagement ≠ Communication ≠ Knowledge transfer", true),
          opt("Engagement = Communication = Knowledge transfer", "Engagement = Communication = Knowledge transfer", false, "Trois tâches ECO distinctes.", "Three distinct ECO tasks."),
          opt("T08 remplace T04", "T08 replaces T04", false, "Non.", "No."),
          opt("T07 remplace T08", "T07 replaces T08", false, "Non.", "No."),
        ],
      }),
    ],
  }),

  // ── P1: DoR vs DoD ──────────────────────────────────────────────────────
  buildPmpLesson({
    slug: "definition-of-done",
    titleFr: "DoR vs DoD",
    titleEn: "DoR vs DoD",
    descriptionFr:
      "Prêt à commencer (DoR) vs réellement terminé (DoD) — critères de qualité et de scope.",
    descriptionEn:
      "Ready to start (DoR) vs actually done (DoD) — quality and scope criteria.",
    moduleSlug: "agile",
    sortOrder: 7,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pmp-agile",
    learningObjective: "DECIDE",
    isShort: true,
    shortDurationSeconds: 165,
    objectiveFr:
      "Refuser de démarrer un item non Ready et refuser de clôturer un item non Done.",
    objectiveEn:
      "Refuse to start an unready item and refuse to close an item that is not Done.",
    explanationFr:
      "DoR = sommes-nous prêts à commencer ? (clarté, dépendances, critères). DoD = le travail est-il réellement terminé ? (tests, docs, acceptance). Predictive : critères d'acceptation / phase gates. Adaptive : DoR/DoD d'équipe. Piège : démarrer flou ou déclarer Done sans preuves. PLA — Lesson 3/5 blueprint (INSTRUCTOR_DERIVED).",
    explanationEn:
      "DoR = are we ready to start? (clarity, dependencies, criteria). DoD = is work actually finished? (tests, docs, acceptance). Predictive: acceptance criteria / phase gates. Adaptive: team DoR/DoD. Trap: starting vague work or calling Done without evidence. PLA — Lesson 3/5 blueprint (INSTRUCTOR_DERIVED).",
    exampleFr: "Story sans critères → pas Ready. Code sans tests → pas Done.",
    exampleEn: "Story without criteria → not Ready. Code without tests → not Done.",
    practicalFr: "Écrivez 3 critères DoR et 3 critères DoD pour votre équipe.",
    practicalEn: "Write 3 DoR and 3 DoD criteria for your team.",
    mistakeFr: "Confondre DoR et DoD, ou Done = « code poussé ».",
    mistakeEn: "Confusing DoR and DoD, or Done = “code pushed.”",
    takeawayFr: "DoR protège le début ; DoD protège la fin.",
    takeawayEn: "DoR protects the start; DoD protects the finish.",
    decisionFr: "Item flou en sprint planning → affiner ou sortir ; ne pas démarrer.",
    decisionEn: "Vague item in sprint planning → refine or drop; do not start.",
    flashcardFrontFr: "DoR vs DoD",
    flashcardFrontEn: "DoR vs DoD",
    flashcardBackFr: "Prêt à commencer ? / Réellement terminé ?",
    flashcardBackEn: "Ready to start? / Actually finished?",
    exercisePromptFr: "Classez 5 situations Helios en DoR manquant ou DoD manquant.",
    exercisePromptEn: "Classify 5 Helios situations as missing DoR or missing DoD.",
    situation: {
      scenarioFr: "L'équipe tire une story floue pour « avancer ». Pas de critères d'acceptation.",
      scenarioEn: "Team pulls a vague story to “make progress.” No acceptance criteria.",
      problemFr: "DoR non respecté.",
      problemEn: "DoR violated.",
      bestActionFr: "Stopper le démarrage ; clarifier DoR ou reporter l'item.",
      bestActionEn: "Stop starting; clarify DoR or defer the item.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Story sans critères d'acceptation en planning. Que faire ?",
      promptEn: "Story without acceptance criteria in planning. What to do?",
      explanationCorrectFr: "Pas Ready → ne pas démarrer.",
      explanationCorrectEn: "Not Ready → do not start.",
      difficulty: 2,
      options: [
        opt("Démarrer quand même pour gagner du temps", "Start anyway to save time", false, "Crée du rework.", "Creates rework."),
        opt("Clarifier jusqu'au DoR ou sortir l'item du sprint", "Clarify to DoR or remove the item from the sprint", true),
        opt("Déclarer Done immédiatement", "Declare Done immediately", false, "DoD non atteint.", "DoD not met."),
        opt("Ignorer DoR en hybrid", "Ignore DoR in hybrid", false, "La clarté reste requise.", "Clarity is still required."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Code mergé sans tests ni revue. Statut ?",
        promptEn: "Code merged without tests or review. Status?",
        explanationCorrectFr: "Pas Done — DoD incomplet.",
        explanationCorrectEn: "Not Done — incomplete DoD.",
        difficulty: 2,
        options: [
          opt("Pas Done — DoD incomplet", "Not Done — incomplete DoD", true),
          opt("Done car mergé", "Done because merged", false, "Merge ≠ Done.", "Merge ≠ Done."),
          opt("Uniquement un problème DoR", "Only a DoR problem", false, "Le travail a déjà commencé.", "Work already started."),
          opt("Ignorable si le PO est pressé", "Ignorable if the PO is rushed", false, "La qualité reste due.", "Quality remains due."),
        ],
      }),
    ],
  }),

  // ── P1: lessons-learned + OPA/EEF ───────────────────────────────────────
  buildPmpLesson({
    slug: "lessons-learned",
    titleFr: "Lessons learned et amélioration continue",
    titleEn: "Lessons Learned and Continuous Improvement",
    descriptionFr:
      "Transformer les enseignements en OPA/pratiques — pas archiver pour oublier (ECO BUSINESS-T06).",
    descriptionEn:
      "Turn learnings into OPA/practices — do not archive to forget (ECO BUSINESS-T06).",
    moduleSlug: "process",
    sortOrder: 14,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-process",
    learningObjective: "DECIDE",
    objectiveFr:
      "Choisir l'action après une erreur répétée : mettre à jour OPA, pas seulement archiver.",
    objectiveEn:
      "Choose the action after a repeated error: update OPA, not only archive.",
    explanationFr:
      "BUSINESS-T06 — amélioration continue. LL tout au long du projet. Chaîne : data → analyse → amélioration → standardiser/partager. OPA = actifs internes (templates, historiques, knowledge base). EEF = facteurs environnementaux influençant le projet (marché, régulation, culture externe). Ne pas confondre. PLA — Lessons 6/11 (INSTRUCTOR_DERIVED).",
    explanationEn:
      "BUSINESS-T06 — continuous improvement. LL throughout the project. Chain: data → analysis → improve → standardize/share. OPA = internal assets (templates, history, knowledge base). EEF = environmental factors influencing the project (market, regulation, external culture). Do not confuse them. PLA — Lessons 6/11 (INSTRUCTOR_DERIVED).",
    exampleFr:
      "Même erreur d'estimation GPS sur 3 projets → mettre à jour template d'estimation OPA + formation.",
    exampleEn:
      "Same GPS estimation error on 3 projects → update OPA estimation template + training.",
    practicalFr: "Pour une LL récente : owner, action OPA, date.",
    practicalEn: "For a recent LL: owner, OPA action, date.",
    mistakeFr: "Archiver LL sans action, ou appeler OPA une régulation externe (EEF).",
    mistakeEn: "Archiving LL with no action, or calling an external regulation an OPA.",
    takeawayFr: "LL → amélioration → OPA. EEF s'observe et s'adapte.",
    takeawayEn: "LL → improvement → OPA. EEF is observed and adapted to.",
    decisionFr: "Erreur répétée → root cause + update OPA + partage leadership.",
    decisionEn: "Repeated error → root cause + OPA update + leadership share.",
    flashcardFrontFr: "OPA vs EEF",
    flashcardFrontEn: "OPA vs EEF",
    flashcardBackFr: "Actifs internes vs facteurs d'environnement",
    flashcardBackEn: "Internal assets vs environmental factors",
    exercisePromptFr: "Classez 5 items : OPA ou EEF ?",
    exercisePromptEn: "Classify 5 items: OPA or EEF?",
    situation: {
      scenarioFr: "Même défaut d'estimation sur 3 projets. LL archivées, rien changé.",
      scenarioEn: "Same estimation defect across 3 projects. LL archived, nothing changed.",
      problemFr: "Archive morte — pas d'amélioration.",
      problemEn: "Dead archive — no improvement.",
      bestActionFr: "Analyser, mettre à jour OPA/pratiques, partager, suivre.",
      bestActionEn: "Analyze, update OPA/practices, share, follow up.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Erreur d'estimation répétée sur 3 projets. Meilleure action ?",
      promptEn: "Repeated estimation error across 3 projects. Best action?",
      explanationCorrectFr: "Amélioration = update OPA/pratiques, pas archive seule.",
      explanationCorrectEn: "Improvement = OPA/practice update, not archive alone.",
      difficulty: 2,
      options: [
        opt("Archiver une LL et passer à autre chose", "Archive a LL and move on", false, "Sans action, l'erreur revient.", "Without action, the error returns."),
        opt("Analyser la cause et mettre à jour les OPA/pratiques", "Analyze the cause and update OPA/practices", true),
        opt("Ignorer car chaque projet est unique", "Ignore because each project is unique", false, "Les patterns se répètent.", "Patterns repeat."),
        opt("Attendre uniquement la clôture du portfolio", "Wait only for portfolio closure", false, "Trop tard.", "Too late."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Une nouvelle régulation marché impacte le backlog. C'est surtout :",
        promptEn: "A new market regulation impacts the backlog. This is mainly:",
        explanationCorrectFr: "EEF — facteur environnemental externe.",
        explanationCorrectEn: "EEF — external environmental factor.",
        difficulty: 2,
        options: [
          opt("Un EEF à évaluer puis adapter scope/risques", "An EEF to assess then adapt scope/risks", true),
          opt("Un OPA à archiver comme template", "An OPA to archive as a template", false, "Régulation externe ≠ OPA.", "External regulation ≠ OPA."),
          opt("Uniquement un conflit d'équipe", "Only a team conflict", false, "Hors sujet.", "Off-topic."),
          opt("Ignorable en agile", "Ignorable in agile", false, "La conformité reste due.", "Compliance remains due."),
        ],
      }),
    ],
  }),

  // ── P1: risk vs issue (+ impediment / change cue) ───────────────────────
  buildPmpLesson({
    slug: "risk-vs-issue",
    titleFr: "Risque, issue et obstacle",
    titleEn: "Risk, Issue, and Impediment",
    descriptionFr:
      "Classifier futur vs présent vs blocage d'équipe — puis choisir la bonne réponse.",
    descriptionEn:
      "Classify future vs present vs team blocker — then choose the right response.",
    moduleSlug: "process",
    sortOrder: 7,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "risk-management",
    learningObjective: "DECIDE",
    isShort: true,
    shortDurationSeconds: 170,
    objectiveFr:
      "Classifier une situation HelioRoute en risk / issue / impediment et choisir l'action.",
    objectiveEn:
      "Classify a HelioRoute situation as risk / issue / impediment and choose the action.",
    explanationFr:
      "Risk = futur incertain (threat/opportunity). Issue = condition actuelle. Impediment = bloque/ralentit l'équipe maintenant. Matérialisé → fermer risque, ouvrir issue. Changement : predictive = CCB ; adaptive = backlog/PO — lire l'approche d'abord. PLA — Lesson 8 blueprint (INSTRUCTOR_DERIVED).",
    explanationEn:
      "Risk = uncertain future (threat/opportunity). Issue = present condition. Impediment = blocks/slows the team now. Materialized → close risk, open issue. Change: predictive = CCB; adaptive = backlog/PO — read the approach first. PLA — Lesson 8 blueprint (INSTRUCTOR_DERIVED).",
    exampleFr:
      "« Fournisseur pourrait retarder » = risk. « Retard confirmé hier » = issue. « Build cassé bloque le sprint » = impediment.",
    exampleEn:
      "“Vendor might delay” = risk. “Delay confirmed yesterday” = issue. “Broken build blocks the sprint” = impediment.",
    practicalFr: "Classez 5 situations récentes en risk/issue/impediment.",
    practicalEn: "Classify 5 recent situations as risk/issue/impediment.",
    mistakeFr: "Traiter une issue comme un risque à re-analyser, ou forcer un CCB en sprint.",
    mistakeEn: "Treating an issue as a risk to re-analyze, or forcing CCB mid-sprint.",
    takeawayFr: "Futur → risk. Présent → issue. Bloque l'équipe → impediment.",
    takeawayEn: "Future → risk. Present → issue. Blocks the team → impediment.",
    decisionFr: "Déjà arrivé → action issue/impediment immédiate avec owner.",
    decisionEn: "Already happened → immediate issue/impediment action with owner.",
    flashcardFrontFr: "Risk / Issue / Impediment",
    flashcardFrontEn: "Risk / Issue / Impediment",
    flashcardBackFr: "Futur / Présent / Blocage équipe",
    flashcardBackEn: "Future / Present / Team blocker",
    exercisePromptFr: "Pour un retard fournisseur confirmé : registre, owner, prochaine action.",
    exercisePromptEn: "For a confirmed vendor delay: register, owner, next action.",
    situation: {
      scenarioFr: "Build cassé depuis hier ; l'équipe ne peut plus livrer l'incrément.",
      scenarioEn: "Build broken since yesterday; team cannot deliver the increment.",
      problemFr: "Impediment présent — pas un risque futur.",
      problemEn: "Present impediment — not a future risk.",
      bestActionFr: "Traiter comme impediment : owner, lever le blocage, communiquer statut.",
      bestActionEn: "Treat as impediment: owner, remove blocker, communicate status.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Build cassé depuis hier, sprint bloqué. Classification ?",
      promptEn: "Build broken since yesterday, sprint blocked. Classification?",
      explanationCorrectFr: "Condition actuelle qui bloque → impediment/issue.",
      explanationCorrectEn: "Present blocking condition → impediment/issue.",
      difficulty: 2,
      options: [
        opt("Impediment / issue à lever immédiatement", "Impediment / issue to remove immediately", true),
        opt("Risque futur à surveiller seulement", "Future risk to monitor only", false, "C'est déjà là.", "It is already here."),
        opt("Opportunité à exploiter", "Opportunity to exploit", false, "Pas une opportunité.", "Not an opportunity."),
        opt("Ignorable jusqu'à la fin du trimestre", "Ignorable until quarter end", false, "Le sprint est bloqué.", "The sprint is blocked."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Nouvelle feature demandée en plein sprint adaptatif. Meilleure réponse ?",
        promptEn: "New feature requested mid adaptive sprint. Best response?",
        explanationCorrectFr: "Adaptive : backlog/PO — pas CCB automatique.",
        explanationCorrectEn: "Adaptive: backlog/PO — not automatic CCB.",
        difficulty: 2,
        options: [
          opt("Orienter vers le PO / backlog selon la valeur", "Route to PO / backlog by value", true),
          opt("Lancer automatiquement un CCB formel", "Automatically launch a formal CCB", false, "Ne colle pas à chaque sprint.", "Does not fit every sprint."),
          opt("Ignorer toute demande", "Ignore every request", false, "Trop rigide.", "Too rigid."),
          opt("Ajouter sans priorisation", "Add without prioritization", false, "Détruit le focus.", "Destroys focus."),
        ],
      }),
    ],
  }),

  // ── P1: procurement strengthen ──────────────────────────────────────────
  buildPmpLesson({
    slug: "procurement-basics",
    titleFr: "Approvisionnement et performance fournisseur",
    titleEn: "Procurement and Vendor Performance",
    descriptionFr:
      "Make/buy, contrats, critères et revue fournisseur (ECO PROCESS-T05).",
    descriptionEn:
      "Make/buy, contracts, criteria, and vendor review (ECO PROCESS-T05).",
    moduleSlug: "process",
    sortOrder: 11,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "procurement",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider la prochaine action quand un fournisseur manque des jalons répétés.",
    objectiveEn:
      "Decide the next action when a vendor repeatedly misses milestones.",
    explanationFr:
      "PROCESS-T05 — planifier make/buy, critères (coût total, technique, capacité, historique, IP, garantie), contrats avec juridique, mesurer performance dès le début, revue, problèmes proactifs, clôture formelle + OPA. PLA — Lesson 5 (INSTRUCTOR_DERIVED).",
    explanationEn:
      "PROCESS-T05 — plan make/buy, criteria (total cost, technical, capacity, history, IP, warranty), contracts with legal, measure performance from the start, review, proactive issues, formal close + OPA. PLA — Lesson 5 (INSTRUCTOR_DERIVED).",
    exampleFr:
      "GPS vendor en retard récurrent → revue vs critères contrat + plan correctif ou escalade.",
    exampleEn:
      "GPS vendor repeatedly late → review vs contract criteria + corrective plan or escalate.",
    practicalFr: "Listez 5 critères de sélection fournisseur pour un composant critique.",
    practicalEn: "List 5 vendor selection criteria for a critical component.",
    mistakeFr: "Signer sans critères de performance, ou attendre la clôture pour mesurer.",
    mistakeEn: "Signing without performance criteria, or waiting until closure to measure.",
    takeawayFr: "Mesurer tôt vs critères définis — ne pas « espérer ».",
    takeawayEn: "Measure early against defined criteria — do not “hope.”",
    decisionFr: "Retards répétés → revue performance + options contractuelles.",
    decisionEn: "Repeated delays → performance review + contractual options.",
    flashcardFrontFr: "Clôture fournisseur",
    flashcardFrontEn: "Vendor closeout",
    flashcardBackFr: "Revue perf · obligations · acceptation · OPA",
    flashcardBackEn: "Perf review · obligations · acceptance · OPA",
    exercisePromptFr: "Draft 4 lignes de revue performance fournisseur.",
    exercisePromptEn: "Draft 4 lines of vendor performance review.",
    situation: {
      scenarioFr: "Fournisseur GPS rate 3 jalons. Aucune revue formelle n'existe.",
      scenarioEn: "GPS vendor misses 3 milestones. No formal review exists.",
      problemFr: "Performance non gérée.",
      problemEn: "Performance unmanaged.",
      bestActionFr: "Lancer revue vs critères contrat et plan d'action / escalade.",
      bestActionEn: "Launch review vs contract criteria and action / escalate plan.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Fournisseur rate des jalons répétés. Meilleure prochaine action ?",
      promptEn: "Vendor repeatedly misses milestones. Best next action?",
      explanationCorrectFr: "Mesurer vs critères et agir — pas attendre la fin.",
      explanationCorrectEn: "Measure vs criteria and act — do not wait until the end.",
      difficulty: 2,
      options: [
        opt("Revue de performance vs critères contrat + plan d'action", "Performance review vs contract criteria + action plan", true),
        opt("Attendre la clôture du projet pour en parler", "Wait until project close to discuss", false, "Trop tard.", "Too late."),
        opt("Ignorer si le prix est bas", "Ignore if price is low", false, "Le risque livraison reste.", "Delivery risk remains."),
        opt("Changer de fournisseur sans revue ni juridique", "Switch vendor without review or legal", false, "Risque contractuel.", "Contractual risk."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Avant de signer, que doit inclure le dispositif fournisseur ?",
        promptEn: "Before signing, what should the vendor setup include?",
        explanationCorrectFr: "Critères de performance définis dès le début.",
        explanationCorrectEn: "Performance criteria defined from the start.",
        difficulty: 2,
        options: [
          opt("Critères de performance et responsabilités clairs", "Clear performance criteria and responsibilities", true),
          opt("Uniquement le prix le plus bas", "Only the lowest price", false, "Coût total et aptitude comptent.", "Total cost and fitness matter."),
          opt("Aucune clause de revue", "No review clause", false, "Empêche le pilotage.", "Prevents steering."),
          opt("Promesse orale seulement", "Oral promise only", false, "Insuffisant.", "Insufficient."),
        ],
      }),
    ],
  }),

  // ── P1: compliance light reinforce ──────────────────────────────────────
  buildPmpLesson({
    slug: "compliance",
    titleFr: "Conformité",
    titleEn: "Compliance",
    descriptionFr:
      "Identifier, catégoriser, valider et corriger les exigences de conformité (ECO BUSINESS-T02).",
    descriptionEn:
      "Identify, categorize, validate, and correct compliance requirements (ECO BUSINESS-T02).",
    moduleSlug: "business-environment",
    sortOrder: 1,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "compliance",
    learningObjective: "DECIDE",
    objectiveFr:
      "Prioriser une non-conformité découverte en UAT avant la mise en production.",
    objectiveEn:
      "Prioritize a noncompliance found in UAT before go-live.",
    explanationFr:
      "BUSINESS-T02 — conformité. Identifier exigences, catégories, menaces, tester/valider, approbation autorisée, mesurer, corriger. Non-conformité → délai/coût/risque. Lié Lesson 3 valeur/scope. PLA — INSTRUCTOR_DERIVED + ECO_VERIFIED task.",
    explanationEn:
      "BUSINESS-T02 — compliance. Identify requirements, categories, threats, test/validate, authorized approval, measure, correct. Noncompliance → schedule/cost/risk. Linked to Lesson 3 value/scope. PLA — INSTRUCTOR_DERIVED + ECO_VERIFIED task.",
    exampleFr:
      "UAT Nordia Pay : manque journal d'audit réglementaire → bloquer go-live, corriger, revalider.",
    exampleEn:
      "Nordia Pay UAT: missing regulatory audit log → block go-live, fix, revalidate.",
    practicalFr: "Listez 3 exigences conformité de votre contexte et leur preuve.",
    practicalEn: "List 3 compliance requirements in your context and their evidence.",
    mistakeFr: "Traiter la conformité comme « nice to have » après la livraison.",
    mistakeEn: "Treating compliance as a post-delivery nice-to-have.",
    takeawayFr: "Conformité = exigence prioritaire avec preuve et approbation.",
    takeawayEn: "Compliance = priority requirement with evidence and approval.",
    decisionFr: "Non-conformité critique avant go-live → bloquer, corriger, retester.",
    decisionEn: "Critical noncompliance before go-live → block, fix, retest.",
    flashcardFrontFr: "Flux conformité",
    flashcardFrontEn: "Compliance flow",
    flashcardBackFr: "Identifier → tester → approuver → mesurer → corriger",
    flashcardBackEn: "Identify → test → approve → measure → correct",
    exercisePromptFr: "Draft un plan correctif 5 lignes pour une non-conformité UAT.",
    exercisePromptEn: "Draft a 5-line corrective plan for a UAT noncompliance.",
    situation: {
      scenarioFr: "UAT : contrôle réglementaire manquant. Marketing veut lancer demain.",
      scenarioEn: "UAT: missing regulatory control. Marketing wants to launch tomorrow.",
      problemFr: "Non-conformité vs pression go-live.",
      problemEn: "Noncompliance vs go-live pressure.",
      bestActionFr: "Bloquer le go-live, corriger, obtenir approbation, puis relancer.",
      bestActionEn: "Block go-live, fix, obtain approval, then relaunch.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Non-conformité réglementaire en UAT, pression pour lancer. Ensuite ?",
      promptEn: "Regulatory noncompliance in UAT, pressure to launch. Next?",
      explanationCorrectFr: "Conformité prioritaire — bloquer et corriger.",
      explanationCorrectEn: "Compliance is priority — block and fix.",
      difficulty: 2,
      options: [
        opt("Lancer quand même pour tenir la date marketing", "Launch anyway to hit marketing date", false, "Risque conformité.", "Compliance risk."),
        opt("Bloquer le go-live, corriger et revalider", "Block go-live, fix and revalidate", true),
        opt("Archiver le défaut comme leçon future seulement", "Archive the defect as a future lesson only", false, "Trop passif.", "Too passive."),
        opt("Transférer la responsabilité à l'équipe marketing", "Transfer responsibility to marketing", false, "Le projet reste accountable.", "Project remains accountable."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Quel ordre de flux conformité est le plus sain ?",
        promptEn: "Which compliance flow order is healthiest?",
        explanationCorrectFr: "Identifier → tester/valider → approuver → mesurer → corriger.",
        explanationCorrectEn: "Identify → test/validate → approve → measure → correct.",
        difficulty: 2,
        options: [
          opt("Identifier → tester → approuver → mesurer → corriger", "Identify → test → approve → measure → correct", true),
          opt("Livrer → découvrir → ignorer", "Deliver → discover → ignore", false, "Inverse le flux.", "Reverses the flow."),
          opt("Approuver sans identifier", "Approve without identifying", false, "Sans base.", "No basis."),
          opt("Corriger uniquement après audit externe", "Correct only after external audit", false, "Trop tardif.", "Too late."),
        ],
      }),
    ],
  }),
];

export const PMP_B31_UPGRADE_SLUGS = PMP_B31_QUALITY_UPGRADES.map((l) => l.slug);
