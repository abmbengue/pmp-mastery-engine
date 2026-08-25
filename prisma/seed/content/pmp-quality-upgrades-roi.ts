/**
 * PMP ROI quality upgrades — HIGH-ROI B-tier enriched situational lessons (FR/EN).
 * ORIGINAL PLA pedagogical content — NOT PMI / PMBOK reproduction.
 */

import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

export const PMP_ROI_QUALITY_UPGRADES: PmpLesson[] = [
  // ── People: leadership (sortOrder 0) ───────────────────────────────────────
  buildPmpLesson({
    slug: "leadership",
    titleFr: "Leadership en projet",
    titleEn: "Leadership in Projects",
    descriptionFr:
      "Mobiliser une équipe autour d'une direction claire sans confondre autorité et influence.",
    descriptionEn:
      "Mobilize a team around a clear direction without confusing authority and influence.",
    moduleSlug: "people",
    sortOrder: 0,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "leadership",
    learningObjective: "DECIDE",
    objectiveFr:
      "Choisir un comportement de leadership adapté quand sponsor et équipe technique divergent sur une date Helios.",
    objectiveEn:
      "Choose leadership behavior when sponsor and technical team diverge on a Helios date.",
    explanationFr:
      "En projet, le leadership ne dépend pas du titre : il clarifie le « pourquoi », crée la confiance et adapte le style (directif en urgence, participatif en exploration). Sur Helios chez Nordia Retail, Marie n'est pas la manager de Thomas mais l'équipe la suit parce qu'elle expose les risques avec des faits et propose des scénarios au lieu d'un « oui » silencieux. Le leadership sert la livraison collective, pas la visibilité personnelle.",
    explanationEn:
      "In projects, leadership does not depend on title: it clarifies the “why,” builds trust, and adapts style (directive in urgency, participative in exploration). On Helios at Nordia Retail, Marie is not Thomas's manager yet the team follows because she surfaces risks with facts and offers scenarios instead of a silent “yes.” Leadership serves collective delivery, not personal visibility.",
    exampleFr:
      "Marie pilote la migration Helios : le sponsor exige une date fixe, l'équipe doute. Elle convoque un atelier 45 min, demande à Thomas d'exposer les risques chiffrés, puis présente trois scénarios au sponsor.",
    exampleEn:
      "Marie leads the Helios migration: the sponsor demands a fixed date, the team doubts feasibility. She runs a 45-minute workshop, asks Thomas to present quantified risks, then offers the sponsor three scenarios.",
    practicalFr:
      "Avant une réunion tendue, préparez le « pourquoi » en une phrase et identifiez qui parle en expert.",
    practicalEn:
      "Before a tense meeting, prepare the “why” in one sentence and identify who speaks as expert.",
    mistakeFr:
      "Micro-manager chaque livrable ou imposer une solution technique sans écouter les experts.",
    mistakeEn:
      "Micromanaging every deliverable or imposing a technical solution without hearing experts.",
    takeawayFr:
      "Leadership projet = direction claire + confiance + style adapté au contexte.",
    takeawayEn:
      "Project leadership = clear direction + trust + style adapted to context.",
    decisionFr:
      "Ne tranchez pas seul une date qui impacte la livraison : facilitez un échange structuré avec options chiffrées.",
    decisionEn:
      "Do not decide alone on a date that affects delivery: facilitate structured exchange with quantified options.",
    flashcardFrontFr: "Leadership vs autorité",
    flashcardFrontEn: "Leadership vs authority",
    flashcardBackFr: "Influencer par vision et confiance, pas seulement par le titre.",
    flashcardBackEn: "Influence through vision and trust, not title alone.",
    exercisePromptFr:
      "Rédigez en trois lignes le « pourquoi » que Marie devrait partager avant de discuter du planning Helios.",
    exercisePromptEn:
      "Draft in three lines the “why” Marie should share before discussing the Helios schedule.",
    situation: {
      scenarioFr:
        "Nordia Retail — projet Helios : le sponsor impose le 15 juin pour la foire commerciale. Thomas (lead dev) estime qu'il manque 3 semaines de tests paiement. L'équipe attend une décision.",
      scenarioEn:
        "Nordia Retail — Helios project: the sponsor imposes June 15 for the trade show. Thomas (dev lead) estimates 3 weeks of payment testing are missing. The team awaits a decision.",
      problemFr:
        "Conflit date vs faisabilité sans cadre de décision partagé.",
      problemEn:
        "Date vs feasibility conflict without a shared decision frame.",
      bestActionFr:
        "Faciliter un atelier court : risques chiffrés + 2–3 scénarios (date, scope, qualité) avant tout engagement.",
      bestActionEn:
        "Facilitate a short workshop: quantified risks + 2–3 scenarios (date, scope, quality) before any commitment.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation Helios : le sponsor exige le 15 juin, Thomas alerte sur 3 semaines de tests manquantes. Quelle première action de leadership ?",
      promptEn:
        "Helios situation: sponsor demands June 15, Thomas flags 3 weeks of missing tests. What first leadership action?",
      explanationCorrectFr:
        "Exposer risques et scénarios crée une décision éclairée sans micro-management.",
      explanationCorrectEn:
        "Surfacing risks and scenarios enables an informed decision without micromanagement.",
      difficulty: 2,
      options: [
        opt(
          "Promettre la date au sponsor sans consulter l'équipe",
          "Promise the date to the sponsor without consulting the team",
          false,
          "Un « oui » silencieux détruit la confiance et masque le risque qualité.",
          "A silent “yes” destroys trust and hides quality risk."
        ),
        opt(
          "Atelier 45 min : risques chiffrés + scénarios date/scope/qualité",
          "45-min workshop: quantified risks + date/scope/quality scenarios",
          true
        ),
        opt(
          "Imposer la solution technique de Marie",
          "Impose Marie's technical solution",
          false,
          "Imposer sans débat ressemble au commandement, pas au leadership mobilisateur.",
          "Imposing without debate is command, not mobilizing leadership."
        ),
        opt(
          "Reporter la réunion jusqu'à ce que l'équipe soit d'accord",
          "Postpone the meeting until the team agrees",
          false,
          "L'évitement laisse le sponsor et l'équipe dans l'incertitude.",
          "Avoidance leaves sponsor and team in uncertainty."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Amira (UX) refuse de présenter les risques devant le sponsor. Marie sent de la peur sur la qualité. Meilleure réponse ?",
        promptEn:
          "Situation: Amira (UX) refuses to present risks to the sponsor. Marie senses fear about quality. Best response?",
        explanationCorrectFr:
          "Reformuler la crainte et proposer un format sûr (Thomas expert, Marie facilitation) ouvre le dialogue.",
        explanationCorrectEn:
          "Paraphrasing the fear and offering a safe format (Thomas as expert, Marie facilitating) opens dialogue.",
        difficulty: 2,
        options: [
          opt(
            "Forcer Amira à parler devant tout le comité",
            "Force Amira to speak in front of the full committee",
            false,
            "Humiliation publique ferme la communication.",
            "Public humiliation shuts down communication."
          ),
          opt(
            "Reformuler la crainte et proposer Thomas comme porte-parole technique",
            "Paraphrase the fear and propose Thomas as technical spokesperson",
            true
          ),
          opt(
            "Ignorer l'émotion et valider la date",
            "Ignore emotion and confirm the date",
            false,
            "Le risque non exprimé persiste en production.",
            "Unspoken risk persists in production."
          ),
          opt(
            "Annuler le projet Helios",
            "Cancel the Helios project",
            false,
            "Disproportionné sans analyse d'options.",
            "Disproportionate without options analysis."
          ),
        ],
      }),
    ],
  }),

  // ── People: conflict-management-basics (sortOrder 3) ───────────────────────
  buildPmpLesson({
    slug: "conflict-management-basics",
    titleFr: "Bases de la gestion des conflits",
    titleEn: "Conflict Management Basics",
    descriptionFr:
      "Comprendre l'origine des conflits projet et choisir une approche de résolution proportionnée.",
    descriptionEn:
      "Understand project conflict origins and choose a proportionate resolution approach.",
    moduleSlug: "people",
    sortOrder: 3,
    estimatedMinutes: 6,
    difficulty: "BEGINNER",
    skillSlug: "conflict-management",
    learningObjective: "DECIDE",
    isShort: true,
    shortDurationSeconds: 165,
    objectiveFr:
      "Décider d'une stratégie de résolution quand deux experts s'opposent avec livraison Helios dans 48 h.",
    objectiveEn:
      "Decide a resolution strategy when two experts disagree with Helios delivery in 48 hours.",
    explanationFr:
      "Les conflits projet naissent souvent de priorités, ressources ou informations incomplètes — pas seulement d'ego. Sur Helios, Thomas veut refactoriser le paiement ; Amira insiste sur l'UI checkout. Marie facilite un échange sur critères et impacts client avant compromis ou escalade. Un conflit abordé tôt avec des faits améliore la décision ; ignoré, il crée des camps silencieux.",
    explanationEn:
      "Project conflicts often stem from priorities, resources, or incomplete information — not just ego. On Helios, Thomas wants payment refactor; Amira insists on checkout UI. Marie facilitates exchange on criteria and client impact before compromise or escalation. Conflict addressed early with facts improves decisions; ignored, it creates silent camps.",
    exampleFr:
      "Helios : Marie convoque 30 min, demande l'impact client chiffré, propose UI checkout sprint 1 + dette technique sprint 2.",
    exampleEn:
      "Helios: Marie calls 30 minutes, asks for quantified client impact, proposes checkout UI sprint 1 + tech debt sprint 2.",
    practicalFr:
      "Reformulez un conflit récent en deux intérêts respectifs avant de choisir éviter, compromettre ou co-construire.",
    practicalEn:
      "Reframe a recent conflict as two respective interests before choosing avoid, compromise, or co-create.",
    mistakeFr:
      "Imposer une solution « du chef de projet » sur un débat technique entre pairs sans écouter les critères.",
    mistakeEn:
      "Imposing a “PM solution” on a technical peer debate without hearing criteria.",
    takeawayFr:
      "Clarifier intérêts et faits avant d'éviter, compromettre ou co-construire.",
    takeawayEn:
      "Clarify interests and facts before avoid, compromise, or co-create.",
    decisionFr:
      "Si le conflit bloque une livraison critique, planifiez une session courte avec critères écrits.",
    decisionEn:
      "If conflict blocks critical delivery, schedule a short session with written criteria.",
    flashcardFrontFr: "Conflit d'intérêts",
    flashcardFrontEn: "Interest conflict",
    flashcardBackFr: "Priorités ou ressources différentes — pas forcément incompatibilité personnelle.",
    flashcardBackEn: "Different priorities or resources — not necessarily personal incompatibility.",
    exercisePromptFr:
      "Reformulez le conflit Thomas/Amira Helios en deux intérêts respectifs.",
    exercisePromptEn:
      "Reframe the Helios Thomas/Amira conflict as two respective interests.",
    situation: {
      scenarioFr:
        "Helios, J-2 avant démo Nordia : Thomas veut refactoriser le module paiement (risque dette) ; Amira exige l'UI checkout pour la foire. Aucun compromis informel n'a été documenté.",
      scenarioEn:
        "Helios, 2 days before Nordia demo: Thomas wants payment module refactor (debt risk); Amira demands checkout UI for the trade show. No informal compromise was documented.",
      problemFr:
        "Priorités techniques opposées sous pression de date — risque de décision implicite.",
      problemEn:
        "Opposing technical priorities under date pressure — risk of implicit decision.",
      bestActionFr:
        "Session structurée 30 min : critères client, impact chiffré, compromis documenté (UI sprint 1, dette sprint 2).",
      bestActionEn:
        "Structured 30-min session: client criteria, quantified impact, documented compromise (UI sprint 1, debt sprint 2).",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation Helios : Thomas et Amira s'opposent sur architecture avec livraison dans 48 h. Première approche ?",
      promptEn:
        "Helios situation: Thomas and Amira disagree on architecture with delivery in 48 hours. First approach?",
      explanationCorrectFr:
        "Un échange structuré sur critères et impacts permet un compromis sans évitement total.",
      explanationCorrectEn:
        "Structured exchange on criteria and impacts enables compromise without total avoidance.",
      difficulty: 2,
      options: [
        opt("Reporter indéfiniment", "Postpone indefinitely", false, "L'évitement laisse le blocage intact.", "Avoidance leaves block intact."),
        opt(
          "Faciliter un échange structuré sur critères et impacts client",
          "Facilitate structured exchange on criteria and client impact",
          true
        ),
        opt("Trancher seul sans consulter", "Decide alone without consulting", false, "Ignore l'expertise des pairs.", "Ignores peer expertise."),
        opt("Retirer un expert immédiatement", "Remove an expert immediately", false, "Disproportionné sous pression courte.", "Disproportionate under short pressure."),
      ],
    }),
    questions: [
      q({
        type: "TRUE_FALSE",
        promptFr:
          "Situation : après l'atelier Helios, Thomas et Amira documentent un compromis. Un conflit bien géré peut améliorer la qualité de décision.",
        promptEn:
          "Situation: after the Helios workshop, Thomas and Amira document a compromise. A well-managed conflict can improve decision quality.",
        explanationCorrectFr: "Vrai : des perspectives différentes révèlent des risques oubliés.",
        explanationCorrectEn: "True: different perspectives reveal overlooked risks.",
        difficulty: 1,
        options: [opt("Vrai", "True", true), opt("Faux", "False", false, "Un conflit structuré enrichit l'analyse.", "Structured conflict enriches analysis.")],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : le sponsor demande à Marie de « trancher vite » sans réunion. Quelle erreur éviter ?",
        promptEn:
          "Situation: the sponsor asks Marie to “decide fast” without a meeting. What mistake to avoid?",
        explanationCorrectFr:
          "Imposer sans critères écrits recrée le conflit au sprint suivant.",
        explanationCorrectEn:
          "Imposing without written criteria recreates conflict next sprint.",
        difficulty: 2,
        options: [
          opt(
            "Imposer la solution du sponsor sans critères",
            "Impose the sponsor's solution without criteria",
            false,
            "Décision unilatérale sans critères = conflit latent.",
            "Unilateral decision without criteria = latent conflict."
          ),
          opt(
            "Proposer un créneau court avec critères client documentés",
            "Propose a short slot with documented client criteria",
            true
          ),
          opt(
            "Ignorer le conflit jusqu'à la démo",
            "Ignore the conflict until the demo",
            false,
            "Le blocage technique peut exploser en démo.",
            "Technical block may explode at demo."
          ),
          opt(
            "Licencier Thomas pour gagner du temps",
            "Fire Thomas to save time",
            false,
            "Disproportionné et destructeur pour l'équipe.",
            "Disproportionate and destructive for the team."
          ),
        ],
      }),
    ],
  }),

  // ── People: communication (sortOrder 5) ──────────────────────────────────
  buildPmpLesson({
    slug: "communication",
    titleFr: "Communication en projet",
    titleEn: "Project Communication",
    descriptionFr:
      "Structurer qui reçoit quoi, quand et par quel canal pour réduire le bruit et l'anxiété.",
    descriptionEn:
      "Structure who gets what, when, and through which channel to reduce noise and anxiety.",
    moduleSlug: "people",
    sortOrder: 5,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "communication",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider du canal et du message quand des rumeurs circulent sur une date Helios non confirmée.",
    objectiveEn:
      "Decide channel and message when rumors spread about an unconfirmed Helios date.",
    explanationFr:
      "La communication projet répond à qui, quoi, quand, comment. Le sponsor veut synthèse et risques ; l'équipe veut priorités claires ; les clients veulent l'impact sans jargon. Multiplier les canaux sans règles crée fatigue et rumeurs. Marie envoie un statut hebdo d'une page au sponsor Helios et réserve #helios-decisions aux changements validés.",
    explanationEn:
      "Project communication answers who, what, when, how. Sponsors want summaries and risks; the team wants clear priorities; clients want impact without jargon. Multiplying channels without rules creates fatigue and rumors. Marie sends a one-page weekly status to the Helios sponsor and reserves #helios-decisions for validated changes.",
    exampleFr:
      "Helios : lundi = e-mail sponsor (feu vert/orange, 3 risques, 1 décision) ; standup 15 min ; Slack #helios-decisions pour changements validés.",
    exampleEn:
      "Helios: Monday = sponsor email (green/amber, 3 risks, 1 decision); 15-min standup; Slack #helios-decisions for validated changes.",
    practicalFr:
      "Rédigez un modèle de statut hebdo en 5 lignes pour votre sponsor.",
    practicalEn:
      "Draft a 5-line weekly status template for your sponsor.",
    mistakeFr:
      "Copier-coller le même message technique au sponsor et aux utilisateurs finaux.",
    mistakeEn:
      "Copy-pasting the same technical message to sponsor and end users.",
    takeawayFr:
      "Adapter message, canal et fréquence à l'audience ; écouter autant que diffuser.",
    takeawayEn:
      "Adapt message, channel, and frequency to the audience; listen as much as you broadcast.",
    decisionFr:
      "Avant un changement majeur, rédigez une version distincte pour sponsor, équipe et clients.",
    decisionEn:
      "Before a major change, draft a distinct version for sponsor, team, and clients.",
    flashcardFrontFr: "Plan de communication",
    flashcardFrontEn: "Communication plan",
    flashcardBackFr: "Qui, quoi, quand, comment — aligné aux besoins de chaque audience.",
    flashcardBackEn: "Who, what, when, how — aligned to each audience's needs.",
    exercisePromptFr:
      "Écrivez deux versions du même changement de date Helios : sponsor vs équipe.",
    exercisePromptEn:
      "Write two versions of the same Helios date change: sponsor vs team.",
    situation: {
      scenarioFr:
        "Sur Helios, des rumeurs circulent sur une « date secrète » du 15 juin. L'équipe ralentit les estimations ; le sponsor n'a pas encore validé.",
      scenarioEn:
        "On Helios, rumors spread about a “secret” June 15 date. The team slows estimates; the sponsor has not validated yet.",
      problemFr:
        "Bruit informationnel et anxiété — absence de canal officiel.",
      problemEn:
        "Information noise and anxiety — no official channel.",
      bestActionFr:
        "Publier un statut clair sur le canal officiel : état réel, ce qui est confirmé, invitation aux questions.",
      bestActionEn:
        "Publish clear status on official channel: actual state, what is confirmed, invite questions.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation Helios : rumeurs sur une date non confirmée, moral de l'équipe en baisse. Quelle action corrige le mieux ?",
      promptEn:
        "Helios situation: rumors about unconfirmed date, team morale dropping. Which action best fixes it?",
      explanationCorrectFr:
        "Un canal officiel avec statut validé réduit le bruit et rétablit la confiance.",
      explanationCorrectEn:
        "An official channel with validated status reduces noise and restores trust.",
      difficulty: 2,
      options: [
        opt("Ignorer jusqu'à la décision finale", "Ignore until final decision", false, "Le silence alimente les rumeurs.", "Silence feeds rumors."),
        opt(
          "Publier un statut clair sur canal officiel et inviter les questions",
          "Publish clear status on official channel and invite questions",
          true
        ),
        opt(
          "Répondre individuellement à chaque rumeur par chat privé",
          "Reply individually to each rumor by private chat",
          false,
          "Inefficace et incohérent à l'échelle.",
          "Inefficient and inconsistent at scale."
        ),
        opt(
          "Partager tous les brouillons internes",
          "Share all internal drafts",
          false,
          "Expose des hypothèses non validées.",
          "Exposes unvalidated hypotheses."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : le sponsor Helios demande le détail technique des bugs ; l'équipe support veut savoir ce qui change pour les clients. Marie doit…",
        promptEn:
          "Situation: the Helios sponsor wants technical bug detail; customer support wants to know what changes for clients. Marie should…",
        explanationCorrectFr:
          "Adapter le message : synthèse risques pour le sponsor, impact client pour le support.",
        explanationCorrectEn:
          "Adapt the message: risk summary for sponsor, client impact for support.",
        difficulty: 2,
        options: [
          opt(
            "Envoyer le même e-mail technique à tous",
            "Send the same technical email to everyone",
            false,
            "Chaque audience a un besoin différent.",
            "Each audience has different needs."
          ),
          opt(
            "Deux messages distincts : risques/décisions vs impact client",
            "Two distinct messages: risks/decisions vs client impact",
            true
          ),
          opt(
            "Ne communiquer qu'après go-live",
            "Communicate only after go-live",
            false,
            "Le support doit se préparer avant le changement.",
            "Support must prepare before the change."
          ),
          opt(
            "Publier uniquement sur les réseaux sociaux",
            "Publish only on social media",
            false,
            "Canal inadapté et non contrôlé pour un statut projet.",
            "Wrong, uncontrolled channel for project status."
          ),
        ],
      }),
    ],
  }),

  // ── People: stakeholders-basics (sortOrder 6) ────────────────────────────
  buildPmpLesson({
    slug: "stakeholders-basics",
    titleFr: "Qu'est-ce qu'une partie prenante ?",
    titleEn: "What is a Stakeholder?",
    descriptionFr:
      "Identifier qui influence ou subit le projet et prioriser l'engagement selon influence et intérêt.",
    descriptionEn:
      "Identify who influences or is affected by the project and prioritize engagement by influence and interest.",
    moduleSlug: "people",
    sortOrder: 6,
    estimatedMinutes: 6,
    difficulty: "BEGINNER",
    skillSlug: "stakeholder-engagement",
    learningObjective: "DECIDE",
    isShort: true,
    objectiveFr:
      "Décider qui engager en priorité après un changement de périmètre Helios qui oublie le support client.",
    objectiveEn:
      "Decide who to engage first after a Helios scope change that omitted customer support.",
    explanationFr:
      "Une partie prenante influence ou subit les résultats du projet : utilisateurs, finance, juridique, opérations, régulateurs. L'analyse influence/intérêt priorise l'engagement. Sur Helios, Marie cartographie sponsor (haute/haute), PCI compliance (haute/moyenne), support client (moyenne/haute). Oublier le support au kickoff avait bloqué un déploiement test.",
    explanationEn:
      "A stakeholder influences or is affected by project results: users, finance, legal, operations, regulators. Influence/interest analysis prioritizes engagement. On Helios, Marie maps sponsor (high/high), PCI compliance (high/medium), customer support (medium/high). Omitting support at kickoff had blocked a test deployment.",
    exampleFr:
      "Helios : atelier mensuel compliance + support après oubli initial — évite le veto post go-live.",
    exampleEn:
      "Helios: monthly compliance + support workshop after initial omission — avoids post go-live veto.",
    practicalFr:
      "Listez huit parties prenantes et placez-les sur une matrice influence/intérêt.",
    practicalEn:
      "List eight stakeholders and place them on an influence/interest matrix.",
    mistakeFr:
      "Limiter la liste au sponsor et à l'équipe projet — les fonctions transverses ont souvent un veto informel.",
    mistakeEn:
      "Limiting the list to sponsor and project team — cross-functional groups often hold informal veto power.",
    takeawayFr:
      "Cartographier tôt, revisiter souvent ; engagement proportionné à influence et intérêt.",
    takeawayEn:
      "Map early, revisit often; engagement proportional to influence and interest.",
    decisionFr:
      "Après chaque changement de périmètre, ajoutez « qui a été oublié ? » à l'ordre du jour.",
    decisionEn:
      "After each scope change, add “who was forgotten?” to the review agenda.",
    flashcardFrontFr: "Partie prenante",
    flashcardFrontEn: "Stakeholder",
    flashcardBackFr: "Influence ou subit les résultats du projet — au-delà de l'équipe core.",
    flashcardBackEn: "Influences or is affected by project results — beyond the core team.",
    exercisePromptFr:
      "Identifiez une partie prenante oubliée sur Helios et son niveau influence/intérêt.",
    exercisePromptEn:
      "Identify one forgotten Helios stakeholder and their influence/interest level.",
    situation: {
      scenarioFr:
        "Helios ajoute le paiement en 3 clics. L'équipe projet et le sponsor sont alignés, mais le support client n'a pas été consulté et découvre le changement via une rumeur Slack.",
      scenarioEn:
        "Helios adds 3-click payment. The project team and sponsor are aligned, but customer support was not consulted and learns of the change via a Slack rumor.",
      problemFr:
        "Partie prenante à haute influence sur l'adoption post go-live absente de la boucle.",
      problemEn:
        "High-influence stakeholder for post go-live adoption missing from the loop.",
      bestActionFr:
        "Engager le support client immédiatement : impact, formation, FAQ — avant le prochain déploiement test.",
      bestActionEn:
        "Engage customer support immediately: impact, training, FAQ — before the next test deployment.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation Helios : le support client apprend le changement paiement par rumeur et menace de bloquer le déploiement test. Première action ?",
      promptEn:
        "Helios situation: customer support learns of payment change via rumor and threatens to block test deployment. First action?",
      explanationCorrectFr:
        "Engagement ciblé du support (haute influence sur l'adoption) avec plan concret.",
      explanationCorrectEn:
        "Targeted support engagement (high influence on adoption) with concrete plan.",
      difficulty: 2,
      options: [
        opt(
          "Ignorer — le support n'est pas dans l'équipe projet",
          "Ignore — support is not on the project team",
          false,
          "Le support a un veto informel sur l'adoption.",
          "Support holds informal veto on adoption."
        ),
        opt(
          "Atelier urgent : impact, formation, FAQ avant déploiement test",
          "Urgent workshop: impact, training, FAQ before test deployment",
          true
        ),
        opt(
          "Déployer quand même pour respecter la date",
          "Deploy anyway to meet the date",
          false,
          "Risque d'incident client et résistance post go-live.",
          "Risk of client incident and post go-live resistance."
        ),
        opt(
          "Remplacer tout le support",
          "Replace all of support",
          false,
          "Disproportionné — le problème est l'engagement, pas les personnes.",
          "Disproportionate — the issue is engagement, not people."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : PCI compliance (haute influence, intérêt moyen) n'a pas reçu d'update depuis 6 semaines. Quel risque ?",
        promptEn:
          "Situation: PCI compliance (high influence, medium interest) has had no update for 6 weeks. What risk?",
        explanationCorrectFr:
          "Surprise tardive et blocage réglementaire au go-live.",
        explanationCorrectEn:
          "Late surprise and regulatory block at go-live.",
        difficulty: 2,
        options: [
          opt(
            "Aucun — faible intérêt signifie ignorer",
            "None — low interest means ignore",
            false,
            "Haute influence exige au minimum une information ciblée.",
            "High influence requires at least targeted information."
          ),
          opt(
            "Blocage ou retard au go-live par surprise réglementaire",
            "Go-live block or delay from regulatory surprise",
            true
          ),
          opt(
            "L'équipe dev devient sponsor",
            "The dev team becomes sponsor",
            false,
            "Sans lien avec l'engagement des parties prenantes.",
            "Unrelated to stakeholder engagement."
          ),
          opt(
            "Le scope diminue automatiquement",
            "Scope shrinks automatically",
            false,
            "L'inaction n'ajuste pas le périmètre.",
            "Inaction does not adjust scope."
          ),
        ],
      }),
    ],
  }),

  // ── People: servant-leadership (sortOrder 8) ─────────────────────────────
  buildPmpLesson({
    slug: "servant-leadership",
    titleFr: "Servant leadership en projet",
    titleEn: "Servant Leadership in Projects",
    descriptionFr:
      "Servir la réussite de l'équipe en levant obstacles plutôt qu'en accumulant le contrôle.",
    descriptionEn:
      "Serve team success by removing obstacles rather than accumulating control.",
    moduleSlug: "people",
    sortOrder: 8,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "leadership",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider quelle action « service » lever pour Helios sans retirer la responsabilité de l'équipe.",
    objectiveEn:
      "Decide which “service” action to take for Helios without removing team responsibility.",
    explanationFr:
      "Le servant leadership sert la vision, protège le focus, obtient ressources et enlève la bureaucratie. Ce n'est pas faire le travail des experts ni éviter les décisions difficiles. Marie négocie des plages focus Helios et absorbe un reporting lourd pour libérer Thomas et Amira — l'équipe garde la responsabilité des livrables.",
    explanationEn:
      "Servant leadership serves vision, protects focus, secures resources, and removes bureaucracy. It is not doing experts' work or avoiding hard decisions. Marie negotiates Helios focus blocks and absorbs heavy reporting to free Thomas and Amira — the team keeps deliverable responsibility.",
    exampleFr:
      "Helios : Marie supprime 2 h/semaine de réunions transverses et prend le reporting mensuel pour protéger le sprint.",
    exampleEn:
      "Helios: Marie cuts 2 h/week of cross meetings and handles monthly reporting to protect the sprint.",
    practicalFr:
      "Listez deux obstacles systémiques que vous pourriez lever cette semaine pour votre équipe.",
    practicalEn:
      "List two systemic obstacles you could remove this week for your team.",
    mistakeFr:
      "Confondre servant leadership et absence de décision — le vide n'est pas de l'autonomie.",
    mistakeEn:
      "Confusing servant leadership with no decisions — a vacuum is not autonomy.",
    takeawayFr:
      "Servir = clarifier, protéger, débloquer — l'équipe reste responsable des livrables.",
    takeawayEn:
      "Serve = clarify, protect, unblock — the team remains responsible for deliverables.",
    decisionFr:
      "Avant d'ajouter une réunion, demandez : « quel obstacle enlève-t-elle réellement ? »",
    decisionEn:
      "Before adding a meeting, ask: “what obstacle does it actually remove?”",
    flashcardFrontFr: "Servant leadership",
    flashcardFrontEn: "Servant leadership",
    flashcardBackFr: "Lever obstacles et clarifier le cadre — pas faire le travail des experts.",
    flashcardBackEn: "Remove obstacles and clarify the frame — not do experts' work.",
    exercisePromptFr:
      "Proposez une action « service » concrète pour Helios sans micro-manager.",
    exercisePromptEn:
      "Propose one concrete “service” action for Helios without micromanaging.",
    situation: {
      scenarioFr:
        "Équipe Helios : deux heures/semaine perdues en réunions transverses non liées au sprint. Thomas et Amira signalent l'épuisement ; le reporting mensuel sponsor prend une demi-journée.",
      scenarioEn:
        "Helios team: two hours/week lost in cross meetings unrelated to the sprint. Thomas and Amira report burnout; monthly sponsor reporting takes half a day.",
      problemFr:
        "Obstacles systémiques qui empêchent le travail profond — pas un problème de compétence.",
      problemEn:
        "Systemic obstacles blocking deep work — not a skills problem.",
      bestActionFr:
        "Négocier plages focus + absorber ou simplifier le reporting non essentiel.",
      bestActionEn:
        "Negotiate focus blocks + absorb or simplify nonessential reporting.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation Helios : l'équipe perd 2 h/semaine en réunions hors sprint et le reporting mensuel consomme une demi-journée. Meilleure action servant leadership ?",
      promptEn:
        "Helios situation: team loses 2 h/week in off-sprint meetings and monthly reporting consumes half a day. Best servant leadership action?",
      explanationCorrectFr:
        "Protéger le focus et lever les obstacles système sert l'équipe sans retirer sa responsabilité.",
      explanationCorrectEn:
        "Protecting focus and removing system obstacles serves the team without removing responsibility.",
      difficulty: 2,
      options: [
        opt(
          "Coder le module paiement à la place de Thomas",
          "Code the payment module for Thomas",
          false,
          "Remplace l'expert au lieu de lever un obstacle.",
          "Replaces the expert instead of removing an obstacle."
        ),
        opt(
          "Négocier plages focus et simplifier le reporting mensuel",
          "Negotiate focus blocks and simplify monthly reporting",
          true
        ),
        opt(
          "Supprimer toutes les revues qualité",
          "Remove all quality reviews",
          false,
          "Retire les garde-fous — pas du service.",
          "Removes safeguards — not service."
        ),
        opt(
          "Refuser toute escalade au sponsor",
          "Refuse any sponsor escalation",
          false,
          "Peut laisser des obstacles politiques intacts.",
          "May leave political obstacles intact."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Marie veut « aider » en relisant chaque pull request Helios. Quel piège ?",
        promptEn:
          "Situation: Marie wants to “help” by reviewing every Helios pull request. What trap?",
        explanationCorrectFr:
          "Micro-management masqué en service — l'équipe perd l'autonomie.",
        explanationCorrectEn:
          "Micromanagement disguised as service — the team loses autonomy.",
        difficulty: 2,
        options: [
          opt(
            "C'est du servant leadership exemplaire",
            "This is exemplary servant leadership",
            false,
            "Relire tout = contrôle, pas levée d'obstacle systémique.",
            "Reviewing everything = control, not systemic obstacle removal."
          ),
          opt(
            "Micro-management déguisé — mieux vaut lever un obstacle process",
            "Disguised micromanagement — better to remove a process obstacle",
            true
          ),
          opt(
            "L'équipe n'a plus besoin de revues",
            "The team no longer needs reviews",
            false,
            "Les revues ciblées restent utiles ; c'est l'excès qui pose problème.",
            "Targeted reviews remain useful; excess is the issue."
          ),
          opt(
            "Le sponsor doit coder à la place",
            "The sponsor should code instead",
            false,
            "Hors rôle du sponsor.",
            "Outside sponsor role."
          ),
        ],
      }),
    ],
  }),

  // ── Process: scope (sortOrder 2) ─────────────────────────────────────────
  buildPmpLesson({
    slug: "scope",
    titleFr: "Gestion du périmètre",
    titleEn: "Scope Management",
    descriptionFr:
      "Définir, valider et contrôler ce qui est inclus — et explicitement exclu — du projet.",
    descriptionEn:
      "Define, validate, and control what is included — and explicitly excluded — from the project.",
    moduleSlug: "process",
    sortOrder: 2,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "scope",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider comment traiter une demande hors baseline sur HelioRoute sans scope creep.",
    objectiveEn:
      "Decide how to handle an out-of-baseline request on HelioRoute without scope creep.",
    explanationFr:
      "Le périmètre décrit livrables, travail et exclusions explicites. La WBS structure le travail en packages mesurables. Chez HelioRoute, « module TMS mobile chauffeurs » est in-scope ; « refonte site marketing » est out-of-scope. Toute demande hors baseline sans changement formel = scope creep.",
    explanationEn:
      "Scope describes deliverables, work, and explicit exclusions. The WBS structures work into measurable packages. At HelioRoute, 'mobile TMS module for drivers' is in-scope; 'marketing website redesign' is out-of-scope. Any out-of-baseline request without formal change = scope creep.",
    exampleFr:
      "HelioRoute WBS : 1.0 TMS Core → 1.1 Routing, 1.2 Tracking, 1.3 Reporting — chaque package a un owner.",
    exampleEn:
      "HelioRoute WBS: 1.0 TMS Core → 1.1 Routing, 1.2 Tracking, 1.3 Reporting — each package has an owner.",
    practicalFr:
      "Décomposez un livrable majeur en trois packages WBS avec critères d'acceptation.",
    practicalEn:
      "Decompose one major deliverable into three WBS packages with acceptance criteria.",
    mistakeFr:
      "Accepter des ajouts non documentés pour « faire plaisir » au sponsor.",
    mistakeEn:
      "Accepting undocumented add-ons to 'please' the sponsor.",
    takeawayFr:
      "Périmètre = livrables + exclusions ; traiter tout ajout comme demande de changement.",
    takeawayEn:
      "Scope = deliverables + exclusions; treat every add-on as a change request.",
    decisionFr:
      "Toute demande hors baseline = demande de changement, pas travail gratuit.",
    decisionEn:
      "Every out-of-baseline request = change request, not free work.",
    flashcardFrontFr: "WBS",
    flashcardFrontEn: "WBS",
    flashcardBackFr: "Décomposition hiérarchique du travail en packages mesurables.",
    flashcardBackEn: "Hierarchical decomposition of work into measurable packages.",
    exercisePromptFr:
      "HelioRoute : sponsor veut un dashboard exécutif non prévu. Quelle action de gestion du périmètre ?",
    exercisePromptEn:
      "HelioRoute: sponsor wants unplanned executive dashboard. What scope management action?",
    situation: {
      scenarioFr:
        "HelioRoute : le sponsor demande un « petit » dashboard exécutif en passant, sans CR. L'équipe a déjà commencé les maquettes « pour faire plaisir ».",
      scenarioEn:
        "HelioRoute: the sponsor asks for a “small” executive dashboard on the side, without a CR. The team already started mockups “to please.”",
      problemFr:
        "Scope creep non documenté — menace délais et budget baseline.",
      problemEn:
        "Undocumented scope creep — threatens schedule and budget baseline.",
      bestActionFr:
        "Arrêter le travail non autorisé, ouvrir une demande de changement avec analyse d'impact.",
      bestActionEn:
        "Stop unauthorized work, open change request with impact analysis.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation HelioRoute : dashboard exécutif demandé « en passant », maquettes déjà lancées sans CR. Première action ?",
      promptEn:
        "HelioRoute situation: executive dashboard requested “on the side,” mockups already started without CR. First action?",
      explanationCorrectFr:
        "Stopper le creep et formaliser via demande de changement avec impact.",
      explanationCorrectEn:
        "Stop creep and formalize via change request with impact.",
      difficulty: 2,
      options: [
        opt(
          "Continuer les maquettes pour garder le sponsor content",
          "Continue mockups to keep sponsor happy",
          false,
          "Travail gratuit qui dilue le baseline.",
          "Free work that dilutes the baseline."
        ),
        opt(
          "Geler le travail non autorisé et ouvrir une demande de changement",
          "Freeze unauthorized work and open a change request",
          true
        ),
        opt(
          "Ajouter le dashboard à la WBS sans analyse",
          "Add dashboard to WBS without analysis",
          false,
          "Modification baseline sans traçabilité.",
          "Baseline change without traceability."
        ),
        opt(
          "Supprimer le module TMS pour financer le dashboard",
          "Drop TMS module to fund the dashboard",
          false,
          "Décision drastique sans analyse d'impact.",
          "Drastic decision without impact analysis."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : un chef de produit HelioRoute insiste que « refonte site marketing » est dans le TMS. Comment répondre ?",
        promptEn:
          "Situation: a HelioRoute product lead insists “marketing website redesign” is in the TMS. How to respond?",
        explanationCorrectFr:
          "Renvoyer aux exclusions documentées et proposer un CR si le sponsor veut l'ajouter.",
        explanationCorrectEn:
          "Refer to documented exclusions and offer a CR if the sponsor wants to add it.",
        difficulty: 2,
        options: [
          opt(
            "Accepter car le sponsor a raison implicitement",
            "Accept because the sponsor is implicitly right",
            false,
            "Sans baseline documenté, tout devient négociable à l'oral.",
            "Without documented baseline, everything becomes orally negotiable."
          ),
          opt(
            "Montrer l'exclusion out-of-scope et proposer une demande de changement",
            "Show out-of-scope exclusion and propose a change request",
            true
          ),
          opt(
            "Ignorer et espérer que ça passe",
            "Ignore and hope it passes",
            false,
            "Dette de périmètre garantie.",
            "Guaranteed scope debt."
          ),
          opt(
            "Licencier le chef de produit",
            "Fire the product lead",
            false,
            "Disproportionné — c'est un problème de gouvernance du périmètre.",
            "Disproportionate — this is a scope governance issue."
          ),
        ],
      }),
    ],
  }),

  // ── Process: cost (sortOrder 6) ──────────────────────────────────────────
  buildPmpLesson({
    slug: "cost",
    titleFr: "Gestion des coûts",
    titleEn: "Cost Management",
    descriptionFr:
      "Estimer, budgéter et contrôler les coûts du projet avec EAC et contingence.",
    descriptionEn:
      "Estimate, budget, and control project costs with EAC and contingency.",
    moduleSlug: "process",
    sortOrder: 6,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cost",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider quelle option présenter au sponsor HelioRoute quand CPI < 0,9 à mi-parcours.",
    objectiveEn:
      "Decide which option to present to the HelioRoute sponsor when CPI < 0.9 mid-flight.",
    explanationFr:
      "La gestion des coûts suit estimation, baseline et dérives. L'EAC projette le coût total selon la performance (CPI). HelioRoute : BAC 1,2 M€, 45 % avancement, 650 k€ dépensés → EV ≈ 540 k€, CPI ≈ 0,83 → EAC ≈ 1,45 M€ si tendance continue. Présenter options (scope swap, budget additionnel, replanification) dès CPI < 0,9.",
    explanationEn:
      "Cost management tracks estimation, baseline, and variances. EAC projects total cost from performance (CPI). HelioRoute: BAC €1.2M, 45% progress, €650k spent → EV ≈ €540k, CPI ≈ 0.83 → EAC ≈ €1.45M if trend continues. Present options (scope swap, additional budget, replanning) once CPI < 0.9.",
    exampleFr:
      "HelioRoute : CPI 0,83 → comité : options scope swap, +60 k€ budget, ou date +3 sem.",
    exampleEn:
      "HelioRoute: CPI 0.83 → committee: scope swap, +€60k budget, or date +3 wk options.",
    practicalFr:
      "Calculez CPI sur un mini-cas : BAC, % avancement, montant dépensé.",
    practicalEn:
      "Compute CPI on a mini-case: BAC, % progress, amount spent.",
    mistakeFr:
      "Confondre budget approuvé et EAC — l'EAC projette la réalité, pas le souhait initial.",
    mistakeEn:
      "Confusing approved budget and EAC — EAC projects reality, not initial wish.",
    takeawayFr:
      "Baseline + contingence + CPI → décisions de correction avant la crise.",
    takeawayEn:
      "Baseline + contingency + CPI → corrective decisions before crisis.",
    decisionFr:
      "Présenter EAC et options dès CPI < 0,9 en phase critique.",
    decisionEn:
      "Present EAC and options once CPI < 0.9 in critical phase.",
    flashcardFrontFr: "EAC",
    flashcardFrontEn: "EAC",
    flashcardBackFr: "Estimation du coût total à la fin selon performance actuelle.",
    flashcardBackEn: "Estimate of total cost at end based on current performance.",
    exercisePromptFr:
      "HelioRoute : BAC 1 200 k€, 45 % avancement, 650 k€ dépensés. Estimez CPI et EAC.",
    exercisePromptEn:
      "HelioRoute: BAC €1,200k, 45% progress, €650k spent. Estimate CPI and EAC.",
    situation: {
      scenarioFr:
        "HelioRoute mi-parcours : BAC 1 200 k€, 45 % d'avancement physique, 650 k€ déjà dépensés (AC). Le sponsor demande si le budget tient.",
      scenarioEn:
        "HelioRoute mid-flight: BAC €1.2M, 45% physical progress, €650k already spent (AC). The sponsor asks if the budget holds.",
      problemFr:
        "CPI ≈ 0,83 — tendance de dépassement si aucune action.",
      problemEn:
        "CPI ≈ 0.83 — overrun trend if no action.",
      bestActionFr:
        "Présenter CPI, EAC projeté (~1,45 M€) et 2–3 options chiffrées (scope, budget, date).",
      bestActionEn:
        "Present CPI, projected EAC (~€1.45M), and 2–3 quantified options (scope, budget, date).",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation HelioRoute : BAC 1 200 k€, 45 % avancement, 650 k€ dépensés. CPI ≈ 0,83. Quelle décision pour le sponsor ?",
      promptEn:
        "HelioRoute situation: BAC €1.2M, 45% progress, €650k spent. CPI ≈ 0.83. What decision for the sponsor?",
      explanationCorrectFr:
        "EAC projeté + options explicites permettent un arbitrage éclairé.",
      explanationCorrectEn:
        "Projected EAC + explicit options enable informed arbitration.",
      difficulty: 3,
      options: [
        opt(
          "Rassurer que le budget initial suffit sans chiffres",
          "Reassure that initial budget is enough without numbers",
          false,
          "CPI < 1 signale un dépassement probable — silence dangereux.",
          "CPI < 1 signals likely overrun — silence is dangerous."
        ),
        opt(
          "Présenter EAC ~1,45 M€ et options scope/budget/date",
          "Present EAC ~€1.45M and scope/budget/date options",
          true
        ),
        opt(
          "Couper tous les tests pour économiser",
          "Cut all testing to save money",
          false,
          "Économie court terme, coût qualité long terme.",
          "Short-term savings, long-term quality cost."
        ),
        opt(
          "Doubler l'équipe sans analyser l'impact",
          "Double the team without analyzing impact",
          false,
          "Plus de ressources peut augmenter les coûts (loi de Brooks).",
          "More resources can increase cost (Brooks's law)."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : le sponsor HelioRoute propose d'utiliser la réserve de contingence (80 k€) pour couvrir tout l'écart. Meilleure réponse ?",
        promptEn:
          "Situation: the HelioRoute sponsor proposes using contingency reserve (€80k) to cover the entire gap. Best response?",
        explanationCorrectFr:
          "La contingence couvre les risques connus — l'écart structurel demande arbitrage scope/budget.",
        explanationCorrectEn:
          "Contingency covers known risks — structural gap needs scope/budget arbitration.",
        difficulty: 2,
        options: [
          opt(
            "Oui, la contingence existe pour ça",
            "Yes, contingency exists for that",
            false,
            "80 k€ ne couvre pas un écart EAC de ~250 k€.",
            "€80k does not cover a ~€250k EAC gap."
          ),
          opt(
            "Expliquer que contingence ≠ budget illimité ; proposer arbitrage formel",
            "Explain contingency ≠ unlimited budget; propose formal arbitration",
            true
          ),
          opt(
            "Refuser de parler des chiffres",
            "Refuse to discuss numbers",
            false,
            "Le sponsor ne peut pas décider sans transparence.",
            "Sponsor cannot decide without transparency."
          ),
          opt(
            "Abandonner le module GPS",
            "Drop the GPS module",
            false,
            "Décision scope sans analyse d'impact.",
            "Scope decision without impact analysis."
          ),
        ],
      }),
    ],
  }),

  // ── Process: quality (sortOrder 9) ───────────────────────────────────────
  buildPmpLesson({
    slug: "quality",
    titleFr: "Gestion de la qualité",
    titleEn: "Quality Management",
    descriptionFr:
      "Planifier la qualité, assurer les processus et contrôler les livrables.",
    descriptionEn:
      "Plan quality, assure processes, and control deliverables.",
    moduleSlug: "process",
    sortOrder: 9,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "quality",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider comment répondre quand le sponsor HelioRoute veut go-live sans UAT complet.",
    objectiveEn:
      "Decide how to respond when the HelioRoute sponsor wants go-live without full UAT.",
    explanationFr:
      "Qualité = livrables conformes et adaptés à l'usage. Assurance qualité = processus (revues, DoD, formations). Contrôle qualité = vérification des résultats (tests UAT). HelioRoute : assurance = revue code + DoD ; contrôle = 98 % scénarios UAT avant go-live.",
    explanationEn:
      "Quality = deliverables meet requirements and fit for use. Quality assurance = process (reviews, DoD, training). Quality control = result verification (UAT tests). HelioRoute: assurance = code review + DoD; control = 98% UAT scenarios before go-live.",
    exampleFr:
      "HelioRoute : gate go-live exige rapport UAT 98 % ; sponsor veut avancer → options présentées.",
    exampleEn:
      "HelioRoute: go-live gate requires 98% UAT report; sponsor wants to advance → options presented.",
    practicalFr:
      "Donnez un exemple d'assurance et un de contrôle qualité sur votre projet.",
    practicalEn:
      "Give one quality assurance and one quality control example on your project.",
    mistakeFr:
      "Tester uniquement en fin de projet — le contrôle doit être continu.",
    mistakeEn:
      "Testing only at project end — control must be continuous.",
    takeawayFr:
      "Assurance = prévenir par processus ; contrôle = vérifier les résultats.",
    takeawayEn:
      "Assurance = prevent via process; control = verify results.",
    decisionFr:
      "Bloquer un jalon si les critères de contrôle qualité ne sont pas satisfaits.",
    decisionEn:
      "Block a milestone if quality control criteria are not met.",
    flashcardFrontFr: "Assurance vs contrôle qualité",
    flashcardFrontEn: "QA vs QC",
    flashcardBackFr: "Assurance = processus ; contrôle = vérification des livrables.",
    flashcardBackEn: "Assurance = process; control = deliverable verification.",
    exercisePromptFr:
      "HelioRoute : sponsor veut go-live sans UAT complet. Argument qualité et alternative ?",
    exercisePromptEn:
      "HelioRoute: sponsor wants go-live without full UAT. Quality argument and alternative?",
    situation: {
      scenarioFr:
        "HelioRoute : UAT à 91 % (seuil 98 %). Le sponsor menace de lancer pour la foire transport dans 5 jours.",
      scenarioEn:
        "HelioRoute: UAT at 91% (threshold 98%). The sponsor threatens launch for the transport trade show in 5 days.",
      problemFr:
        "Pression date vs critère de contrôle qualité non satisfait.",
      problemEn:
        "Date pressure vs unsatisfied quality control criterion.",
      bestActionFr:
        "Présenter risques chiffrés + option go-live partiel (scope réduit) ou report avec plan UAT accéléré.",
      bestActionEn:
        "Present quantified risks + partial go-live option (reduced scope) or delay with accelerated UAT plan.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation HelioRoute : UAT 91 % (seuil 98 %), foire dans 5 jours. Quelle décision qualité ?",
      promptEn:
        "HelioRoute situation: UAT 91% (threshold 98%), trade show in 5 days. What quality decision?",
      explanationCorrectFr:
        "Ne pas violer le gate sans arbitrage : risques + alternative scope/date documentés.",
      explanationCorrectEn:
        "Do not violate gate without arbitration: documented risks + scope/date alternative.",
      difficulty: 2,
      options: [
        opt(
          "Go-live complet immédiat pour satisfaire le sponsor",
          "Immediate full go-live to satisfy sponsor",
          false,
          "Violer le contrôle qualité expose incidents clients.",
          "Violating quality control exposes client incidents."
        ),
        opt(
          "Risques chiffrés + go-live partiel ou report avec plan UAT",
          "Quantified risks + partial go-live or delay with UAT plan",
          true
        ),
        opt(
          "Supprimer les tests restants",
          "Remove remaining tests",
          false,
          "Réduit le contrôle, pas le risque réel.",
          "Reduces control, not real risk."
        ),
        opt(
          "Mentir sur le pourcentage UAT",
          "Lie about UAT percentage",
          false,
          "Frauduleux et destructeur pour la gouvernance.",
          "Fraudulent and destructive to governance."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : l'équipe HelioRoute propose d'ajouter une revue de code obligatoire (pas encore en place). Assurance ou contrôle ?",
        promptEn:
          "Situation: the HelioRoute team proposes mandatory code review (not yet in place). Assurance or control?",
        explanationCorrectFr:
          "Revue de code = assurance qualité (prévention via processus).",
        explanationCorrectEn:
          "Code review = quality assurance (prevention via process).",
        difficulty: 2,
        options: [
          opt(
            "Contrôle qualité — vérification du livrable fini",
            "Quality control — finished deliverable verification",
            false,
            "La revue prévient les défauts en amont.",
            "Review prevents defects upstream."
          ),
          opt(
            "Assurance qualité — processus préventif",
            "Quality assurance — preventive process",
            true
          ),
          opt(
            "Ni l'un ni l'autre — documentation seulement",
            "Neither — documentation only",
            false,
            "Une revue active est bien de l'assurance.",
            "Active review is assurance."
          ),
          opt(
            "Gestion des coûts uniquement",
            "Cost management only",
            false,
            "Hors sujet qualité.",
            "Off-topic for quality."
          ),
        ],
      }),
    ],
  }),

  // ── Process: change-management-basics (sortOrder 10) ───────────────────────
  buildPmpLesson({
    slug: "change-management-basics",
    titleFr: "Bases du change management",
    titleEn: "Change Management Basics",
    descriptionFr:
      "Gérer les demandes de changement avec traçabilité, analyse d'impact et décision.",
    descriptionEn:
      "Manage change requests with traceability, impact analysis, and decision.",
    moduleSlug: "process",
    sortOrder: 10,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "change-management",
    learningObjective: "DECIDE",
    isShort: true,
    shortDurationSeconds: 140,
    objectiveFr:
      "Décider la première action quand le sponsor HelioRoute exige une intégration réglementaire non prévue.",
    objectiveEn:
      "Decide the first action when the HelioRoute sponsor demands unplanned regulatory integration.",
    explanationFr:
      "Le change management traite les modifications baseline via processus formel : demande, analyse multidomaine, décision, mise à jour. HelioRoute CR-007 « intégration réglementaire » : +4 sem., +80 k€, chemin critique. Distinguer changement produit (fonctionnalité TMS) et organisationnel (adoption chauffeurs).",
    explanationEn:
      "Change management handles baseline modifications via formal process: request, cross-domain analysis, decision, update. HelioRoute CR-007 'regulatory integration': +4 wk, +€80k, critical path. Distinguish product change (TMS feature) from organizational change (driver adoption).",
    exampleFr:
      "CR-007 HelioRoute : impact +4 sem., +80 k€ → options au comité avant approbation.",
    exampleEn:
      "HelioRoute CR-007: impact +4 wk, +€80k → options to committee before approval.",
    practicalFr:
      "Décrivez les étapes d'une demande de changement typique sur HelioRoute.",
    practicalEn:
      "Describe the steps of a typical change request on HelioRoute.",
    mistakeFr:
      "Exécuter un changement « urgent » du sponsor sans analyse d'impact.",
    mistakeEn:
      "Executing an 'urgent' sponsor change without impact analysis.",
    takeawayFr:
      "Pas de changement baseline sans traçabilité : demande, impact, décision, mise à jour.",
    takeawayEn:
      "No baseline change without traceability: request, impact, decision, update.",
    decisionFr:
      "Refuser l'exécution d'un changement majeur non passé par le processus formel.",
    decisionEn:
      "Refuse execution of a major change not processed through formal flow.",
    flashcardFrontFr: "Demande de changement",
    flashcardFrontEn: "Change request",
    flashcardBackFr: "Proposition formelle de modifier le baseline avec analyse d'impact.",
    flashcardBackEn: "Formal proposal to modify baseline with impact analysis.",
    exercisePromptFr:
      "HelioRoute CR-007 : listez trois domaines d'impact à analyser avant décision.",
    exercisePromptEn:
      "HelioRoute CR-007: list three impact domains to analyze before decision.",
    situation: {
      scenarioFr:
        "HelioRoute : le sponsor exige l'intégration réglementaire transport (CR non ouvert) avant la foire — +4 sem. sur chemin critique, équipe déjà engagée sur GPS.",
      scenarioEn:
        "HelioRoute: sponsor demands transport regulatory integration (no CR opened) before trade show — +4 wk on critical path, team already committed to GPS.",
      problemFr:
        "Changement majeur baseline sans traçabilité — risque dérive planning/coût.",
      problemEn:
        "Major baseline change without traceability — schedule/cost drift risk.",
      bestActionFr:
        "Ouvrir CR-007, analyser impact scope/planning/coût/qualité, présenter options au comité.",
      bestActionEn:
        "Open CR-007, analyze scope/schedule/cost/quality impact, present options to committee.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation HelioRoute : intégration réglementaire non prévue (+4 sem., chemin critique). Première action ?",
      promptEn:
        "HelioRoute situation: unplanned regulatory integration (+4 wk, critical path). First action?",
      explanationCorrectFr:
        "Ouvrir une demande de changement formelle et lancer l'analyse d'impact.",
      explanationCorrectEn:
        "Open formal change request and launch impact analysis.",
      difficulty: 2,
      options: [
        opt(
          "Ouvrir une demande de changement et analyser l'impact",
          "Open change request and analyze impact",
          true
        ),
        opt(
          "Démarrer le développement immédiatement",
          "Start development immediately",
          false,
          "Exécution sans analyse = dérive baseline non maîtrisée.",
          "Execution without analysis = uncontrolled baseline drift."
        ),
        opt(
          "Refuser sans discussion",
          "Refuse without discussion",
          false,
          "Refuser sans analyse ni options n'est pas professionnel.",
          "Refusing without analysis or options is not professional."
        ),
        opt(
          "Modifier le Gantt sans informer le sponsor",
          "Update Gantt without informing sponsor",
          false,
          "Changement non communiqué = rupture de confiance.",
          "Undisclosed change = broken trust."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : CR-007 approuvé côté produit, mais les chauffeurs HelioRoute ne sont pas formés. Quel type de changement manque ?",
        promptEn:
          "Situation: CR-007 approved on product side, but HelioRoute drivers are not trained. What type of change is missing?",
        explanationCorrectFr:
          "Changement organisationnel — adoption et comportements utilisateurs.",
        explanationCorrectEn:
          "Organizational change — user adoption and behaviors.",
        difficulty: 2,
        options: [
          opt(
            "Changement organisationnel — plan d'adoption chauffeurs",
            "Organizational change — driver adoption plan",
            true
          ),
          opt(
            "Aucun — le produit livré suffit",
            "None — delivered product is enough",
            false,
            "Livrer sans adoption = bénéfice non réalisé.",
            "Delivering without adoption = unrealized benefit."
          ),
          opt(
            "Changement produit supplémentaire uniquement",
            "Additional product change only",
            false,
            "Le produit est livré ; le gap est côté utilisateurs.",
            "Product is delivered; gap is on user side."
          ),
          opt(
            "Gestion des coûts uniquement",
            "Cost management only",
            false,
            "La formation relève du changement organisationnel.",
            "Training is organizational change."
          ),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : le sponsor insiste « faites-le vite, on documentera après ». Meilleure réponse PLA ?",
        promptEn:
          "Situation: sponsor insists “do it fast, we'll document later.” Best PLA response?",
        explanationCorrectFr:
          "Accélérer le processus de changement, pas le contourner — traçabilité minimale avant exécution.",
        explanationCorrectEn:
          "Speed the change process, don't bypass it — minimal traceability before execution.",
        difficulty: 2,
        options: [
          opt(
            "Exécuter sans CR — le sponsor a autorité",
            "Execute without CR — sponsor has authority",
            false,
            "L'urgence n'annule pas la gouvernance baseline.",
            "Urgency does not cancel baseline governance."
          ),
          opt(
            "CR accéléré avec analyse d'impact condensée avant démarrage",
            "Accelerated CR with condensed impact analysis before start",
            true
          ),
          opt(
            "Quitter le projet",
            "Quit the project",
            false,
            "Disproportionné — proposer processus accéléré.",
            "Disproportionate — propose accelerated process."
          ),
          opt(
            "Cacher le changement au comité",
            "Hide the change from the committee",
            false,
            "Dette de gouvernance garantie.",
            "Guaranteed governance debt."
          ),
        ],
      }),
    ],
  }),

  // ── Process: procurement-basics (sortOrder 11) ───────────────────────────
  buildPmpLesson({
    slug: "procurement-basics",
    titleFr: "Bases de l'approvisionnement",
    titleEn: "Procurement Basics",
    descriptionFr:
      "Acheter biens et services externes avec critères, contrats et suivi fournisseur.",
    descriptionEn:
      "Acquire external goods and services with criteria, contracts, and vendor tracking.",
    moduleSlug: "process",
    sortOrder: 11,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-process",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider make-or-buy et critères de sélection pour le module GPS HelioRoute.",
    objectiveEn:
      "Decide make-or-buy and selection criteria for the HelioRoute GPS module.",
    explanationFr:
      "L'approvisionnement couvre make-or-buy, critères (prix, délai, qualité, support), contrat (SLA, pénalités) et suivi. HelioRoute GPS : buy (expertise externe, délai court). Grille pondérée : délai 40 %, prix 30 %, qualité 30 %. Contrat avec pénalités retard et clause de sortie.",
    explanationEn:
      "Procurement covers make-or-buy, criteria (price, lead time, quality, support), contract (SLA, penalties), and tracking. HelioRoute GPS: buy (external expertise, short timeline). Weighted grid: lead time 40%, price 30%, quality 30%. Contract with delay penalties and exit clause.",
    exampleFr:
      "HelioRoute GPS : RFP 3 fournisseurs, grille pondérée, SLA 24/7, pénalités retard.",
    exampleEn:
      "HelioRoute GPS: RFP to 3 vendors, weighted grid, 24/7 SLA, delay penalties.",
    practicalFr:
      "Listez trois critères de sélection pour un fournisseur logiciel critique.",
    practicalEn:
      "List three selection criteria for a critical software vendor.",
    mistakeFr:
      "Choisir le moins cher sans SLA ni pénalités.",
    mistakeEn:
      "Choosing cheapest without SLA or penalties.",
    takeawayFr:
      "Approvisionnement = critères clairs + contrat + suivi.",
    takeawayEn:
      "Procurement = clear criteria + contract + tracking.",
    decisionFr:
      "Inclure SLA, pénalités et critères d'acceptation dans tout contrat critique.",
    decisionEn:
      "Include SLA, penalties, and acceptance criteria in every critical contract.",
    flashcardFrontFr: "Make-or-buy",
    flashcardFrontEn: "Make-or-buy",
    flashcardBackFr: "Décision : produire en interne ou acheter à un fournisseur externe.",
    flashcardBackEn: "Decision: build in-house or buy from external vendor.",
    exercisePromptFr:
      "HelioRoute GPS : justifiez make-or-buy et deux clauses contractuelles essentielles.",
    exercisePromptEn:
      "HelioRoute GPS: justify make-or-buy and two essential contract clauses.",
    situation: {
      scenarioFr:
        "HelioRoute : besoin module GPS sur chemin critique. Équipe interne sans expertise, délai 8 semaines. Trois fournisseurs : A (moins cher, délai 12 sem.), B (milieu), C (cher, délai 6 sem., références transport).",
      scenarioEn:
        "HelioRoute: GPS module needed on critical path. Internal team lacks expertise, 8-week deadline. Three vendors: A (cheapest, 12 wk lead), B (mid), C (expensive, 6 wk lead, transport references).",
      problemFr:
        "Choix fournisseur sous contrainte délai + qualité, pas prix seul.",
      problemEn:
        "Vendor choice under deadline + quality constraint, not price alone.",
      bestActionFr:
        "Buy avec grille pondérée (délai 40 %) + contrat SLA/pénalités — probablement C malgré coût.",
      bestActionEn:
        "Buy with weighted grid (lead time 40%) + SLA/penalty contract — likely C despite cost.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation HelioRoute : GPS sur chemin critique, 8 sem. max, pas d'expertise interne. Make-or-buy et critère dominant ?",
      promptEn:
        "HelioRoute situation: GPS on critical path, 8 wk max, no internal expertise. Make-or-buy and dominant criterion?",
      explanationCorrectFr:
        "Buy — expertise externe ; délai pondéré fortement car chemin critique.",
      explanationCorrectEn:
        "Buy — external expertise; lead time heavily weighted because critical path.",
      difficulty: 2,
      options: [
        opt(
          "Make en interne — économiser le contrat",
          "Make in-house — save contract cost",
          false,
          "Sans expertise, risque délai et qualité explosent.",
          "Without expertise, schedule and quality risk explode."
        ),
        opt(
          "Buy — grille pondérée délai 40 % + SLA/pénalités",
          "Buy — weighted grid lead time 40% + SLA/penalties",
          true
        ),
        opt(
          "Reporter la décision 3 mois",
          "Postpone decision 3 months",
          false,
          "Bloque le chemin critique.",
          "Blocks critical path."
        ),
        opt(
          "Choisir le moins cher (fournisseur A, 12 sem.)",
          "Choose cheapest (vendor A, 12 wk)",
          false,
          "12 sem. > 8 sem. max — viole la contrainte.",
          "12 wk > 8 wk max — violates constraint."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : fournisseur GPS HelioRoute en retard de 2 semaines sans pénalités contractuelles. Quelle leçon ?",
        promptEn:
          "Situation: HelioRoute GPS vendor 2 weeks late with no contract penalties. What lesson?",
        explanationCorrectFr:
          "Contrat sans pénalités SLA = aucun levier de recours — erreur d'approvisionnement.",
        explanationCorrectEn:
          "Contract without SLA penalties = no recourse lever — procurement error.",
        difficulty: 2,
        options: [
          opt(
            "Aucun problème — les retards sont normaux",
            "No problem — delays are normal",
            false,
            "Sans levier contractuel, le PM n'a que l'escalade relationnelle.",
            "Without contract lever, PM has only relational escalation."
          ),
          opt(
            "Les pénalités retard auraient dû figurer au contrat initial",
            "Delay penalties should have been in the initial contract",
            true
          ),
          opt(
            "Abandonner le fournisseur sans clause de sortie",
            "Drop vendor without exit clause",
            false,
            "Sans clause de sortie, risque juridique et planning.",
            "Without exit clause, legal and schedule risk."
          ),
          opt(
            "Doubler l'équipe interne du jour au lendemain",
            "Double internal team overnight",
            false,
            "Ne résout pas le retard fournisseur existant.",
            "Does not fix existing vendor delay."
          ),
        ],
      }),
    ],
  }),

  // ── Business: governance (sortOrder 0) ─────────────────────────────────────
  buildPmpLesson({
    slug: "governance",
    titleFr: "Gouvernance de projet",
    titleEn: "Project Governance",
    descriptionFr:
      "Structures de décision, escalade et alignement avec l'organisation.",
    descriptionEn:
      "Decision structures, escalation, and organizational alignment.",
    moduleSlug: "business-environment",
    sortOrder: 0,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "governance",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider comment escalader un conflit de priorités entre deux projets Helios Cloud.",
    objectiveEn:
      "Decide how to escalate a priority conflict between two Helios Cloud projects.",
    explanationFr:
      "La gouvernance définit qui approuve budget, valide les changements majeurs et arbitre les conflits. Le comité de pilotage reçoit statut synthétique et demandes de décision. Le PM exécute dans le cadre approuvé et escalade au-delà de son mandat. Programme Helios Cloud : comité trimestriel pour budgets > 50 k€ et arbitrages inter-projets.",
    explanationEn:
      "Governance defines who approves budget, validates major changes, and arbitrates conflicts. The steering committee receives synthesized status and decision requests. The PM executes within the approved frame and escalates beyond mandate. Helios Cloud program: quarterly committee for budgets > €50k and inter-project arbitration.",
    exampleFr:
      "Helios Cloud : PM migration escalade conflit calendrier avec projet sécurité → comité tranche en une session.",
    exampleEn:
      "Helios Cloud: migration PM escalates schedule conflict with security project → committee decides in one session.",
    practicalFr:
      "Dessinez la chaîne d'escalade PM → comité → sponsor sur votre programme.",
    practicalEn:
      "Draw escalation chain PM → committee → sponsor on your program.",
    mistakeFr:
      "Confondre gouvernance et micro-management — le comité arbitre, pas les tâches quotidiennes.",
    mistakeEn:
      "Confusing governance with micromanagement — committee arbitrates, not daily tasks.",
    takeawayFr:
      "Gouvernance = cadre de décision et escalade, pas exécution opérationnelle.",
    takeawayEn:
      "Governance = decision framework and escalation, not operational execution.",
    decisionFr:
      "Documenter qui approuve quoi avant le premier conflit de priorités.",
    decisionEn:
      "Document who approves what before the first priority conflict.",
    flashcardFrontFr: "Gouvernance",
    flashcardFrontEn: "Governance",
    flashcardBackFr: "Cadre de décision, escalade et alignement organisationnel.",
    flashcardBackEn: "Decision framework, escalation, and organizational alignment.",
    exercisePromptFr:
      "Décrivez le rôle du comité Helios Cloud. Une erreur fréquente à éviter ?",
    exercisePromptEn:
      "Describe the Helios Cloud committee role. One common mistake to avoid?",
    situation: {
      scenarioFr:
        "Programme Helios Cloud : le PM migration et le PM sécurité se disputent la même fenêtre de maintenance — chacun promet la date au sponsor sans passer par le comité.",
      scenarioEn:
        "Helios Cloud program: migration PM and security PM dispute the same maintenance window — each promises the date to the sponsor without going through the committee.",
      problemFr:
        "Décisions parallèles (« corridor ») sans cadre d'arbitrage.",
      problemEn:
        "Parallel “corridor” decisions without arbitration frame.",
      bestActionFr:
        "Escalader au comité avec impact chiffré et options — une seule date validée.",
      bestActionEn:
        "Escalate to committee with quantified impact and options — one validated date.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation Helios Cloud : deux PM promettent la même fenêtre maintenance au sponsor sans comité. Première action de gouvernance ?",
      promptEn:
        "Helios Cloud situation: two PMs promise the same maintenance window to sponsor without committee. First governance action?",
      explanationCorrectFr:
        "Escalade formelle au comité avec options — évite les décisions parallèles.",
      explanationCorrectEn:
        "Formal committee escalation with options — avoids parallel decisions.",
      difficulty: 2,
      options: [
        opt(
          "Laisser les PM négocier seuls en coulisses",
          "Let PMs negotiate alone behind the scenes",
          false,
          "Décisions parallèles = date globale qui glisse.",
          "Parallel decisions = overall date slips."
        ),
        opt(
          "Escalader au comité avec impacts et options d'arbitrage",
          "Escalate to committee with impacts and arbitration options",
          true
        ),
        opt(
          "Micro-manager le planning quotidien du comité",
          "Micromanage the committee's daily schedule",
          false,
          "Le comité arbitre les trade-offs, pas les tâches.",
          "Committee arbitrates trade-offs, not tasks."
        ),
        opt(
          "Supprimer le sponsor",
          "Remove the sponsor",
          false,
          "Le sponsor est central à la gouvernance.",
          "Sponsor is central to governance."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : changement Helios Cloud > 50 k€ sans passage comité. Que faire ?",
        promptEn:
          "Situation: Helios Cloud change > €50k without committee review. What to do?",
        explanationCorrectFr:
          "Bloquer l'exécution jusqu'à validation gouvernance — traçabilité budget.",
        explanationCorrectEn:
          "Block execution until governance validation — budget traceability.",
        difficulty: 2,
        options: [
          opt(
            "Exécuter — le sponsor a dit oui",
            "Execute — sponsor said yes",
            false,
            "Seuil comité existe pour les arbitrages portfolio.",
            "Committee threshold exists for portfolio arbitration."
          ),
          opt(
            "Geler et soumettre au comité avec analyse d'impact",
            "Freeze and submit to committee with impact analysis",
            true
          ),
          opt(
            "Cacher le montant dans le budget ops",
            "Hide amount in ops budget",
            false,
            "Contournement de gouvernance.",
            "Governance bypass."
          ),
          opt(
            "Annuler tout le programme",
            "Cancel entire program",
            false,
            "Disproportionné — appliquer la règle d'escalade.",
            "Disproportionate — apply escalation rule."
          ),
        ],
      }),
    ],
  }),

  // ── Business: benefits-realization (sortOrder 5) ───────────────────────────
  buildPmpLesson({
    slug: "benefits-realization",
    titleFr: "Réalisation des bénéfices",
    titleEn: "Benefits Realization",
    descriptionFr:
      "Assurer le suivi post-projet avec un owner des bénéfices distinct du chef de projet.",
    descriptionEn:
      "Ensure post-project tracking with a benefits owner distinct from the project manager.",
    moduleSlug: "business-environment",
    sortOrder: 5,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-business-environment",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider qui mesure les bénéfices Helios CRM 6 mois après go-live et quoi faire si sous cible.",
    objectiveEn:
      "Decide who measures Helios CRM benefits 6 months after go-live and what to do if below target.",
    explanationFr:
      "La réalisation des bénéfices commence avant clôture : owner nommé, baseline indicateurs, plan de transition. À la clôture, le PM transfère le livrable — l'owner métier mesure les outcomes sur 6–18 mois. Helios CRM : directrice commerciale suit leads qualifiés/trimestre vs baseline.",
    explanationEn:
      "Benefits realization starts before closing: named owner, indicator baseline, transition plan. At closing, PM hands over deliverable — business owner measures outcomes over 6–18 months. Helios CRM: sales director tracks qualified leads/quarter vs baseline.",
    exampleFr:
      "Helios CRM clôture : PM → support IT ; benefits owner mesure 4 trimestres ; plan d'adoption si −5 % à T+2.",
    exampleEn:
      "Helios CRM closing: PM → IT support; benefits owner measures 4 quarters; adoption plan if −5% at T+2.",
    practicalFr:
      "Pour un projet terminé : qui mesure encore les bénéfices ? À quelle fréquence ?",
    practicalEn:
      "For a finished project: who still measures benefits? How often?",
    mistakeFr:
      "Clôturer sans benefits owner — le succès reste une opinion.",
    mistakeEn:
      "Closing without benefits owner — success stays opinion.",
    takeawayFr:
      "Réalisation des bénéfices = suivi post-projet par un owner métier.",
    takeawayEn:
      "Benefits realization = post-project tracking by business owner.",
    decisionFr:
      "Nommer l'owner des bénéfices et la fréquence de mesure avant clôture formelle.",
    decisionEn:
      "Name benefits owner and measurement frequency before formal closing.",
    flashcardFrontFr: "Benefits owner",
    flashcardFrontEn: "Benefits owner",
    flashcardBackFr: "Rôle métier qui mesure les outcomes après clôture projet.",
    flashcardBackEn: "Business role measuring outcomes after project closing.",
    exercisePromptFr:
      "Helios CRM vient de clôturer. Qui suit les leads qualifiés ? Que faire si T+1 sous cible ?",
    exercisePromptEn:
      "Helios CRM just closed. Who tracks qualified leads? What if T+1 below target?",
    situation: {
      scenarioFr:
        "Helios CRM go-live réussi il y a 6 mois. Le PM a quitté le projet. Les leads qualifiés sont −8 % vs business case ; personne ne pilote l'adoption commerciale.",
      scenarioEn:
        "Helios CRM go-live succeeded 6 months ago. PM left the project. Qualified leads are −8% vs business case; no one drives commercial adoption.",
      problemFr:
        "Absence de benefits owner post-clôture — output sans outcome mesuré.",
      problemEn:
        "No benefits owner post-closing — output without measured outcome.",
      bestActionFr:
        "Nommer owner métier, baseline révisée, plan d'adoption (formation, process) — pas blâmer l'ancien PM.",
      bestActionEn:
        "Name business owner, revised baseline, adoption plan (training, process) — not blame former PM.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation Helios CRM : 6 mois post go-live, leads −8 % vs cible, PM parti. Première action ?",
      promptEn:
        "Helios CRM situation: 6 months post go-live, leads −8% vs target, PM gone. First action?",
      explanationCorrectFr:
        "Activer benefits owner métier et plan d'adoption — le PM n'est plus responsable du suivi.",
      explanationCorrectEn:
        "Activate business benefits owner and adoption plan — PM no longer owns tracking.",
      difficulty: 2,
      options: [
        opt(
          "Rappeler l'ancien PM pour corriger",
          "Recall former PM to fix",
          false,
          "Le suivi post-clôture relève de l'owner métier.",
          "Post-closing tracking is business owner's role."
        ),
        opt(
          "Nommer benefits owner et lancer plan d'adoption commerciale",
          "Name benefits owner and launch commercial adoption plan",
          true
        ),
        opt(
          "Déclarer le projet réussi car go-live OK",
          "Declare project successful because go-live OK",
          false,
          "Output ≠ bénéfice réalisé.",
          "Output ≠ realized benefit."
        ),
        opt(
          "Abandonner le CRM",
          "Abandon the CRM",
          false,
          "Disproportionné sans diagnostic adoption.",
          "Disproportionate without adoption diagnosis."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : avant clôture Helios CRM, quelle décision évite le scénario « personne ne mesure » ?",
        promptEn:
          "Situation: before Helios CRM closing, which decision avoids “no one measures” scenario?",
        explanationCorrectFr:
          "Nommer benefits owner + fréquence de mesure + baseline avant clôture formelle.",
        explanationCorrectEn:
          "Name benefits owner + measurement frequency + baseline before formal closing.",
        difficulty: 2,
        options: [
          opt(
            "Clôturer dès go-live sans handoff",
            "Close at go-live without handoff",
            false,
            "Sans handoff, les bénéfices ne sont pas suivis.",
            "Without handoff, benefits are not tracked."
          ),
          opt(
            "Nommer owner métier et plan de mesure 4 trimestres avant clôture",
            "Name business owner and 4-quarter measurement plan before closing",
            true
          ),
          opt(
            "Laisser le PM suivre indéfiniment",
            "Let PM track indefinitely",
            false,
            "Le PM clôture ; l'owner métier prend le relais.",
            "PM closes; business owner takes over."
          ),
          opt(
            "Supprimer les indicateurs du business case",
            "Remove indicators from business case",
            false,
            "Sans indicateurs, impossible de mesurer le succès.",
            "Without indicators, success cannot be measured."
          ),
        ],
      }),
    ],
  }),

  // ── Agile: definition-of-done (sortOrder 7) ────────────────────────────────
  buildPmpLesson({
    slug: "definition-of-done",
    titleFr: "Definition of Done",
    titleEn: "Definition of Done",
    descriptionFr:
      "Critères partagés pour qu'un incrément soit réellement terminé et livrable.",
    descriptionEn:
      "Shared criteria for when an increment is truly finished and shippable.",
    moduleSlug: "agile",
    sortOrder: 7,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "pmp-agile",
    learningObjective: "DECIDE",
    isShort: true,
    shortDurationSeconds: 170,
    objectiveFr:
      "Décider si une story FlowMart est Done quand le code est écrit mais tests et staging manquent.",
    objectiveEn:
      "Decide if a FlowMart story is Done when code is written but tests and staging are missing.",
    explanationFr:
      "La DoD est l'accord équipe sur « terminé » : code revu, tests passants, staging, validation PO, release note. FlowMart sans DoD = « fini » signifie des choses différentes pour dev, PO et support. DoD ≠ critères d'acceptation d'une story.",
    explanationEn:
      "DoD is team agreement on “done”: code reviewed, tests passing, staging, PO validation, release note. FlowMart without DoD = “finished” means different things for dev, PO, and support. DoD ≠ a story's acceptance criteria.",
    exampleFr:
      "FlowMart story paiement CB : critère = retry 3 fois ; DoD = tests + staging + PO OK.",
    exampleEn:
      "FlowMart card payment story: criterion = retry 3 times; DoD = tests + staging + PO OK.",
    practicalFr:
      "Listez 5 items vérifiables pour une DoD d'équipe.",
    practicalEn:
      "List 5 verifiable items for a team DoD.",
    mistakeFr:
      "Confondre « dev terminé » et « incrément Done ».",
    mistakeEn:
      "Confusing “dev complete” and “Done increment.”",
    takeawayFr:
      "DoD = barre de qualité commune — chaque story de l'incrément la respecte.",
    takeawayEn:
      "DoD = shared quality bar — every increment story meets it.",
    decisionFr:
      "Avant la review : l'incrément satisfait-il toute la DoD ? Sinon, pas « Done ».",
    decisionEn:
      "Before review: does increment meet full DoD? If not, not “Done.”",
    flashcardFrontFr: "Definition of Done",
    flashcardFrontEn: "Definition of Done",
    flashcardBackFr: "Critères partagés « terminé » — qualité livrable.",
    flashcardBackEn: "Shared “done” criteria — shippable quality.",
    exercisePromptFr:
      "Story FlowMart « code OK » mais pas testée. Done ? Justifiez DoD vs critères d'acceptation.",
    exercisePromptEn:
      "FlowMart story “code OK” but untested. Done? Justify DoD vs acceptance criteria.",
    situation: {
      scenarioFr:
        "FlowMart, veille de sprint review : 3 stories « code OK » mais sans tests automatisés ni déploiement staging. Le PO veut démontrer quand même.",
      scenarioEn:
        "FlowMart, day before sprint review: 3 stories “code OK” but no automated tests or staging deployment. PO wants to demo anyway.",
      problemFr:
        "Incrément présenté comme Done sans satisfaire la DoD équipe.",
      problemEn:
        "Increment presented as Done without meeting team DoD.",
      bestActionFr:
        "Ne pas marquer Done ; démo uniquement des stories conformes DoD ou en mode « work in progress » explicite.",
      bestActionEn:
        "Do not mark Done; demo only DoD-compliant stories or explicitly as work in progress.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation FlowMart : code OK, pas de tests ni staging, review demain. Décision sur le statut Done ?",
      promptEn:
        "FlowMart situation: code OK, no tests or staging, review tomorrow. Decision on Done status?",
      explanationCorrectFr:
        "DoD non satisfaite → pas Done ; démo partielle ou report.",
      explanationCorrectEn:
        "DoD not met → not Done; partial demo or defer.",
      difficulty: 2,
      options: [
        opt(
          "Marquer Done — le dev a terminé",
          "Mark Done — dev finished",
          false,
          "« Dev terminé » ≠ Done selon la DoD.",
          "“Dev finished” ≠ Done per DoD."
        ),
        opt(
          "Ne pas marquer Done ; démo des stories conformes DoD seulement",
          "Do not mark Done; demo only DoD-compliant stories",
          true
        ),
        opt(
          "Done si le PO est pressé",
          "Done if PO is rushed",
          false,
          "La DoD ne se négocie pas sous pression.",
          "DoD is not negotiated under pressure."
        ),
        opt(
          "Done — les tests viendront plus tard",
          "Done — tests will come later",
          false,
          "Reporter les tests viole la DoD et crée de la dette.",
          "Deferring tests violates DoD and creates debt."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation FlowMart : critère d'acceptation « retry 3 fois » validé, mais revue de code non faite (DoD). Statut ?",
        promptEn:
          "FlowMart situation: acceptance criterion “retry 3 times” validated, but code review not done (DoD). Status?",
        explanationCorrectFr:
          "Critère story OK ≠ DoD complète — pas Done pour l'incrément.",
        explanationCorrectEn:
          "Story criterion OK ≠ full DoD — not Done for increment.",
        difficulty: 2,
        options: [
          opt(
            "Done — critères d'acceptation suffisent",
            "Done — acceptance criteria are enough",
            false,
            "DoD s'applique à chaque story de l'incrément.",
            "DoD applies to every increment story."
          ),
          opt(
            "Pas Done — revue de code manquante dans la DoD",
            "Not Done — code review missing from DoD",
            true
          ),
          opt(
            "Done en production directement",
            "Done straight to production",
            false,
            "Staging fait partie de la DoD FlowMart.",
            "Staging is part of FlowMart DoD."
          ),
          opt(
            "Annuler la story",
            "Cancel the story",
            false,
            "Compléter la revue, pas annuler.",
            "Complete review, don't cancel."
          ),
        ],
      }),
    ],
  }),

  // ── Agile: impediments-management (sortOrder 11) ───────────────────────────
  buildPmpLesson({
    slug: "impediments-management",
    titleFr: "Gestion des impediments",
    titleEn: "Impediments Management",
    descriptionFr:
      "Identifier, escalader et lever les blocages qui ralentissent l'équipe agile.",
    descriptionEn:
      "Identify, escalate, and remove blockers slowing the agile team.",
    moduleSlug: "agile",
    sortOrder: 11,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-agile",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider l'escalade quand la sandbox paiement FlowMart est bloquée depuis 5 jours.",
    objectiveEn:
      "Decide escalation when FlowMart payment sandbox has been blocked for 5 days.",
    explanationFr:
      "Un impediment bloque l'équipe sans qu'elle puisse le résoudre seule. FlowMart : sandbox refusée → escalade PM → IT security. Tracker l'âge du blocage ; > 48 h sans plan = signal gouvernance. PM lève obstacles organisationnels ; équipe résout le technique qu'elle maîtrise.",
    explanationEn:
      "An impediment blocks the team without them resolving it alone. FlowMart: sandbox denied → PM escalates to IT security. Track blocker age; > 48 h with no plan = governance signal. PM removes organizational obstacles; team solves technical problems they own.",
    exampleFr:
      "FlowMart sandbox J+5 : PM escalade, accès J+7 ; 2 stories reportées documentées.",
    exampleEn:
      "FlowMart sandbox day 5: PM escalates, access day 7; 2 stories deferred documented.",
    practicalFr:
      "Listez 2 impediments récents : équipe seule ou escalade ?",
    practicalEn:
      "List 2 recent impediments: team alone or escalation?",
    mistakeFr:
      "Noter les blocages seulement en retro — sprint déjà impacté.",
    mistakeEn:
      "Only noting blockers in retro — sprint already impacted.",
    takeawayFr:
      "Impediments visibles, âge tracké, escalade rapide.",
    takeawayEn:
      "Visible impediments, tracked age, fast escalation.",
    decisionFr:
      "Blocage > 2 jours : owner de levée + deadline.",
    decisionEn:
      "Blocker > 2 days: removal owner + deadline.",
    flashcardFrontFr: "Impediment",
    flashcardFrontEn: "Impediment",
    flashcardBackFr: "Blocage que l'équipe ne peut pas lever seule.",
    flashcardBackEn: "Blocker the team cannot remove alone.",
    exercisePromptFr:
      "Sandbox FlowMart bloquée 5 jours. Rédigez l'escalade (qui, quoi, impact).",
    exercisePromptEn:
      "FlowMart sandbox blocked 5 days. Draft escalation (who, what, impact).",
    situation: {
      scenarioFr:
        "FlowMart sprint 8 : accès sandbox paiement refusé par IT security depuis 5 jours. Deux stories bloquées ; l'équipe attend sans plan visible.",
      scenarioEn:
        "FlowMart sprint 8: payment sandbox access denied by IT security for 5 days. Two stories blocked; team waits with no visible plan.",
      problemFr:
        "Impediment organisationnel > 48 h sans owner ni escalade formelle.",
      problemEn:
        "Organizational impediment > 48 h without owner or formal escalation.",
      bestActionFr:
        "PM escalade écrite à IT security + sponsor : impact sprint, date cible accès, stories reportées.",
      bestActionEn:
        "PM written escalation to IT security + sponsor: sprint impact, target access date, deferred stories.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation FlowMart : sandbox bloquée 5 jours, 2 stories en attente. Première action ?",
      promptEn:
        "FlowMart situation: sandbox blocked 5 days, 2 stories waiting. First action?",
      explanationCorrectFr:
        "Escalade PM vers IT security avec impact chiffré et deadline — impediment organisationnel.",
      explanationCorrectEn:
        "PM escalation to IT security with quantified impact and deadline — organizational impediment.",
      difficulty: 2,
      options: [
        opt(
          "Attendre patiemment la prochaine retro",
          "Wait patiently for next retro",
          false,
          "5 jours = sprint déjà impacté ; retro trop tard.",
          "5 days = sprint already impacted; retro too late."
        ),
        opt(
          "Escalade écrite PM → IT security avec impact et date cible",
          "Written PM escalation → IT security with impact and target date",
          true
        ),
        opt(
          "Coder en production sans sandbox",
          "Code in production without sandbox",
          false,
          "Risque conformité et qualité.",
          "Compliance and quality risk."
        ),
        opt(
          "Blâmer l'équipe dev pour lenteur",
          "Blame dev team for slowness",
          false,
          "Blocage externe — pas compétence équipe.",
          "External block — not team skill."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation FlowMart : manque compétence React (interne). Impediment ou problème équipe ?",
        promptEn:
          "FlowMart situation: missing React skill (internal). Impediment or team problem?",
        explanationCorrectFr:
          "L'équipe peut résoudre via formation/pairing — pas escalade organisationnelle immédiate.",
        explanationCorrectEn:
          "Team can resolve via training/pairing — not immediate organizational escalation.",
        difficulty: 2,
        options: [
          opt(
            "Impediment — escalade sponsor immédiate",
            "Impediment — immediate sponsor escalation",
            false,
            "Compétence interne = l'équipe peut agir (formation, pair).",
            "Internal skill = team can act (training, pair)."
          ),
          opt(
            "Problème équipe — formation ou pairing d'abord",
            "Team problem — training or pairing first",
            true
          ),
          opt(
            "Ignorer jusqu'à fin de sprint",
            "Ignore until sprint end",
            false,
            "Sans plan, la vélocité chute.",
            "Without plan, velocity drops."
          ),
          opt(
            "Embaucher 10 développeurs externes",
            "Hire 10 external developers",
            false,
            "Disproportionné avant tentatives internes.",
            "Disproportionate before internal attempts."
          ),
        ],
      }),
    ],
  }),

  // ── Hybrid: when-to-use-hybrid (sortOrder 1) ───────────────────────────────
  buildPmpLesson({
    slug: "when-to-use-hybrid",
    titleFr: "Quand utiliser le hybride",
    titleEn: "When to Use Hybrid",
    descriptionFr:
      "Critères de choix : incertitude mixte, régulation, dépendances et maturité organisationnelle.",
    descriptionEn:
      "Selection criteria: mixed uncertainty, regulation, dependencies, and org maturity.",
    moduleSlug: "hybrid",
    sortOrder: 1,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-hybrid",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider hybride vs prédictif vs agile pur sur trois scénarios Helios.",
    objectiveEn:
      "Decide hybrid vs predictive vs pure agile on three Helios scenarios.",
    explanationFr:
      "Hybride convient quand parties stables (infra, sécurité) coexistent avec incertitude UX, liées par dépendances. Prédictif pur : scope et régulation figés. Agile pur : greenfield sans contrainte lourde. Helios B2B PCI = hybride. Anti-pattern : hybride par défaut pour éviter de choisir.",
    explanationEn:
      "Hybrid fits when stable parts (infra, security) coexist with UX uncertainty, linked by dependencies. Pure predictive: fixed scope and regulation. Pure agile: greenfield without heavy constraint. Helios B2B PCI = hybrid. Anti-pattern: hybrid by default to avoid choosing.",
    exampleFr:
      "1) App interne sans compliance → agile. 2) Helios B2B PCI → hybride. 3) ERP régulé → prédictif.",
    exampleEn:
      "1) Internal app no compliance → agile. 2) Helios B2B PCI → hybrid. 3) Regulated ERP → predictive.",
    practicalFr:
      "Évaluez votre projet : % scope stable vs incertain — hybride ?",
    practicalEn:
      "Assess your project: % stable vs uncertain scope — hybrid?",
    mistakeFr:
      "Hybride pour satisfaire deux sponsors sans arbitrage.",
    mistakeEn:
      "Hybrid to satisfy two sponsors without arbitration.",
    takeawayFr:
      "Hybride quand incertitude et stabilité coexistent — pas pour éviter de décider.",
    takeawayEn:
      "Hybrid when uncertainty and stability coexist — not to avoid deciding.",
    decisionFr:
      "Documenter le « pourquoi hybride » en une page — critères et frontières.",
    decisionEn:
      "Document “why hybrid” in one page — criteria and boundaries.",
    flashcardFrontFr: "Quand hybride ?",
    flashcardFrontEn: "When hybrid?",
    flashcardBackFr: "Incertitude mixte + dépendances + contraintes réglementaires.",
    flashcardBackEn: "Mixed uncertainty + dependencies + regulatory constraints.",
    exercisePromptFr:
      "Projet A : site marketing. Projet B : plateforme paiement Helios. Prédictif, agile ou hybride ?",
    exercisePromptEn:
      "Project A: marketing site. Project B: Helios payment platform. Predictive, agile, or hybrid?",
    situation: {
      scenarioFr:
        "Helios lance une plateforme B2B PCI : socle infra/certification stable (prédictif) + parcours portail développeurs incertain (agile), liés par API sandbox.",
      scenarioEn:
        "Helios launches B2B PCI platform: stable infra/certification core (predictive) + uncertain developer portal journeys (agile), linked by API sandbox.",
      problemFr:
        "Choisir une approche unique risque sous-planifier l'infra ou sur-contraindre l'UX.",
      problemEn:
        "Choosing one approach risks under-planning infra or over-constraining UX.",
      bestActionFr:
        "Hybride documenté : streams infra (jalons) + portail (sprints) avec interface sandbox contractuelle.",
      bestActionEn:
        "Documented hybrid: infra streams (milestones) + portal (sprints) with contractual sandbox interface.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation Helios : socle PCI stable + UX portail incertaine, dépendance API. Quelle approche ?",
      promptEn:
        "Helios situation: stable PCI core + uncertain portal UX, API dependency. Which approach?",
      explanationCorrectFr:
        "Hybride — stabilité réglementaire + exploration UX liées par dépendances.",
      explanationCorrectEn:
        "Hybrid — regulatory stability + UX exploration linked by dependencies.",
      difficulty: 2,
      options: [
        opt(
          "100 % prédictif sur 18 mois",
          "100% predictive over 18 months",
          false,
          "UX incertaine mal servie par Gantt long.",
          "Uncertain UX poorly served by long Gantt."
        ),
        opt(
          "Hybride : infra jalons + portail agile avec interface API",
          "Hybrid: infra milestones + agile portal with API interface",
          true
        ),
        opt(
          "100 % agile sans jalons infra",
          "100% agile without infra milestones",
          false,
          "PCI et infra exigent traçabilité et gates.",
          "PCI and infra require traceability and gates."
        ),
        opt(
          "Reporter le projet 2 ans",
          "Postpone project 2 years",
          false,
          "Évite le choix sans résoudre le besoin business.",
          "Avoids choice without solving business need."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : refonte site marketing Helios, pas de compliance lourde, équipe mature agile. Approche ?",
        promptEn:
          "Situation: Helios marketing site redesign, no heavy compliance, mature agile team. Approach?",
        explanationCorrectFr:
          "Agile pur — faible contrainte réglementaire et incertitude UX dominante.",
        explanationCorrectEn:
          "Pure agile — low regulatory constraint and dominant UX uncertainty.",
        difficulty: 2,
        options: [
          opt(
            "Agile pur avec itérations courtes",
            "Pure agile with short iterations",
            true
          ),
          opt(
            "Hybride obligatoire car « tout le monde le fait »",
            "Hybrid mandatory because “everyone does it”",
            false,
            "Hybride par défaut double la gouvernance sans raison.",
            "Hybrid by default doubles governance for no reason."
          ),
          opt(
            "Prédictif 24 mois détaillé",
            "24-month detailed predictive",
            false,
            "Site marketing = forte incertitude contenu/UX.",
            "Marketing site = high content/UX uncertainty."
          ),
          opt(
            "Aucune méthode — chaos",
            "No method — chaos",
            false,
            "Même agile léger vaut mieux que chaos.",
            "Even light agile beats chaos."
          ),
        ],
      }),
    ],
  }),

  // ── Hybrid: delivery-strategy (sortOrder 9) ────────────────────────────────
  buildPmpLesson({
    slug: "delivery-strategy",
    titleFr: "Stratégie de livraison",
    titleEn: "Delivery Strategy",
    descriptionFr:
      "Définir cadence, critères de succès et assemblage des incréments en valeur business.",
    descriptionEn:
      "Define cadence, success criteria, and how increments assemble into business value.",
    moduleSlug: "hybrid",
    sortOrder: 9,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-hybrid",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider comment communiquer un changement de cadence portail Helios avant le gate Q2.",
    objectiveEn:
      "Decide how to communicate a Helios portal cadence change before Q2 gate.",
    explanationFr:
      "Stratégie hybride : gates majeurs (infra PCI Q2) + incréments portail toutes les 2 semaines. Critères mixtes : conformité (0 finding audit) + adoption API (500 devs actifs). Changer cadence sans communication casse support et marketing. PM publie stratégie une page : cadence, critères, freeze, rollback.",
    explanationEn:
      "Hybrid strategy: major gates (PCI infra Q2) + portal increments every 2 weeks. Mixed criteria: compliance (0 audit findings) + API adoption (500 active devs). Changing cadence without communication breaks support and marketing. PM publishes one-page strategy: cadence, criteria, freeze, rollback.",
    exampleFr:
      "Helios : gate Q2 + trains portail 1/15 + KPI conformité + KPI adoption API.",
    exampleEn:
      "Helios: Q2 gate + portal trains 1st/15th + compliance KPI + API adoption KPI.",
    practicalFr:
      "Définissez 1 critère prédictif et 1 agile pour votre programme.",
    practicalEn:
      "Define 1 predictive and 1 agile success criterion for your program.",
    mistakeFr:
      "Stratégie implicite — chaque équipe ship quand elle peut.",
    mistakeEn:
      "Implicit strategy — each team ships when they can.",
    takeawayFr:
      "Stratégie hybride = cadence visible + critères Done + points d'intégration.",
    takeawayEn:
      "Hybrid strategy = visible cadence + Done criteria + integration points.",
    decisionFr:
      "Avant changement de cadence : qui est impacté ? Plan de communication ?",
    decisionEn:
      "Before cadence change: who is impacted? Communication plan?",
    flashcardFrontFr: "Stratégie de livraison",
    flashcardFrontEn: "Delivery strategy",
    flashcardBackFr: "Gates majeurs + incréments continus + critères partagés.",
    flashcardBackEn: "Major gates + continuous increments + shared criteria.",
    exercisePromptFr:
      "Helios veut trains portail hebdo avant gate Q2. Listez 3 impacts à anticiper.",
    exercisePromptEn:
      "Helios wants weekly portal trains before Q2 gate. List 3 impacts to anticipate.",
    situation: {
      scenarioFr:
        "Helios : le PO portail veut passer de releases bi-mensuelles à hebdomadaires avant le gate Q2 PCI, sans avoir informé support, marketing ni le stream infra.",
      scenarioEn:
        "Helios: portal PO wants to move from biweekly to weekly releases before Q2 PCI gate, without informing support, marketing, or infra stream.",
      problemFr:
        "Changement de cadence non communiqué — risque incidents support et conflit gate PCI.",
      problemEn:
        "Uncommunicated cadence change — support incident risk and PCI gate conflict.",
      bestActionFr:
        "Publier mise à jour stratégie une page + sync support/marketing/infra avant changement.",
      bestActionEn:
        "Publish one-page strategy update + sync support/marketing/infra before change.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation Helios : passage trains portail bi-mensuels → hebdo avant gate Q2, parties prenantes non informées. Première action ?",
      promptEn:
        "Helios situation: portal trains biweekly → weekly before Q2 gate, stakeholders not informed. First action?",
      explanationCorrectFr:
        "Communiquer stratégie mise à jour et aligner support/marketing/infra avant changement.",
      explanationCorrectEn:
        "Communicate updated strategy and align support/marketing/infra before change.",
      difficulty: 2,
      options: [
        opt(
          "Changer la cadence immédiatement — plus de valeur",
          "Change cadence immediately — more value",
          false,
          "Sans alignement, support et marketing sont pris au dépourvu.",
          "Without alignment, support and marketing are caught off guard."
        ),
        opt(
          "Publier stratégie mise à jour et aligner parties prenantes impactées",
          "Publish updated strategy and align impacted stakeholders",
          true
        ),
        opt(
          "Annuler tous les gates PCI",
          "Cancel all PCI gates",
          false,
          "La conformité reste non négociable.",
          "Compliance remains non-negotiable."
        ),
        opt(
          "Laisser chaque équipe choisir sa cadence",
          "Let each team pick its cadence",
          false,
          "Stratégie implicite = conflits d'intégration.",
          "Implicit strategy = integration conflicts."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation Helios gate Q2 : infra exige 0 finding audit critique ; portail veut ship une feature non testée PCI. Décision stratégie livraison ?",
        promptEn:
          "Helios Q2 gate situation: infra requires 0 critical audit findings; portal wants to ship PCI-untested feature. Delivery strategy decision?",
        explanationCorrectFr:
          "Point d'intégration commun avant prod client — pas de bypass gate conformité.",
        explanationCorrectEn:
          "Common integration point before client prod — no compliance gate bypass.",
        difficulty: 3,
        options: [
          opt(
            "Ship portail quand même — vélocité d'abord",
            "Ship portal anyway — velocity first",
            false,
            "Viole critère succès prédictif (conformité).",
            "Violates predictive success criterion (compliance)."
          ),
          opt(
            "Bloquer release jusqu'à intégration PCI validée ou scope réduit hors PCI",
            "Block release until PCI integration validated or PCI-excluded reduced scope",
            true
          ),
          opt(
            "Fusionner infra et portail en une équipe sans critères",
            "Merge infra and portal into one team without criteria",
            false,
            "DoD réglementaire ≠ DoD produit.",
            "Regulatory DoD ≠ product DoD."
          ),
          opt(
            "Abandonner le programme Helios",
            "Abandon Helios program",
            false,
            "Disproportionné — arbitrage cadence et critères.",
            "Disproportionate — arbitrate cadence and criteria."
          ),
        ],
      }),
    ],
  }),

  // ── Foundations: what-is-project-management (sortOrder 0) ──────────────────
  buildPmpLesson({
    slug: "what-is-project-management",
    titleFr: "Qu'est-ce que la gestion de projet ?",
    titleEn: "What is Project Management?",
    descriptionFr:
      "Distinguer projet et opérations, et situer la gestion de projet comme coordination temporaire vers un résultat unique.",
    descriptionEn:
      "Distinguish projects from operations, and place project management as temporary coordination toward a unique result.",
    moduleSlug: "foundations",
    sortOrder: 0,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pmp-foundations",
    learningObjective: "DECIDE",
    isShort: true,
    shortDurationSeconds: 155,
    objectiveFr:
      "Décider si une initiative Helios Retail est un projet ou une opération courante.",
    objectiveEn:
      "Decide whether a Helios Retail initiative is a project or ongoing operation.",
    explanationFr:
      "Un projet est temporaire et crée un résultat unique ; les opérations sont répétitives et permanentes. Helios Retail : refonte e-commerce 6 mois = projet ; traitement commandes quotidien = opérations. Confondre les deux mène au mauvais niveau de formalisme.",
    explanationEn:
      "A project is temporary and creates a unique result; operations are repetitive and permanent. Helios Retail: 6-month e-commerce redesign = project; daily order processing = operations. Confusing them leads to wrong formality level.",
    exampleFr:
      "Helios : migration 200 magasins POS 18 mois = projet ; encaissement ventes quotidien = opérations.",
    exampleEn:
      "Helios: 200-store POS migration 18 months = project; daily sales recording = operations.",
    practicalFr:
      "Listez trois initiatives : temporaire ou permanent ? Unique ou répétitif ?",
    practicalEn:
      "List three initiatives: temporary or permanent? Unique or repetitive?",
    mistakeFr:
      "Appeler « projet » toute tâche urgente.",
    mistakeEn:
      "Calling every urgent task a 'project.'",
    takeawayFr:
      "Projet = temporaire + résultat unique ; opérations = répétitif + permanent.",
    takeawayEn:
      "Project = temporary + unique result; operations = repetitive + permanent.",
    decisionFr:
      "Avant de lancer : « Temporaire avec livrable unique, ou activité récurrente ? »",
    decisionEn:
      "Before launching: “Temporary with unique deliverable, or recurring activity?”",
    flashcardFrontFr: "Projet",
    flashcardFrontEn: "Project",
    flashcardBackFr: "Initiative temporaire créant un résultat unique.",
    flashcardBackEn: "Temporary initiative creating a unique result.",
    exercisePromptFr:
      "Identifiez un projet et une opération chez Helios Retail.",
    exercisePromptEn:
      "Identify one project and one operation at Helios Retail.",
    situation: {
      scenarioFr:
        "Helios Retail : le directeur ops demande de « lancer un projet » pour traiter les retours SAV du lundi — activité hebdomadaire récurrente avec procédure existante.",
      scenarioEn:
        "Helios Retail: ops director asks to “launch a project” for Monday SAV returns — recurring weekly activity with existing procedure.",
      problemFr:
        "Étiquette « projet » sur une opération — sur-formalisme inutile.",
      problemEn:
        "“Project” label on an operation — unnecessary over-formalization.",
      bestActionFr:
        "Traiter comme opération améliorée (process), pas projet — sauf si changement unique majeur.",
      bestActionEn:
        "Treat as improved operation (process), not project — unless major unique change.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation Helios : retours SAV du lundi, procédure hebdomadaire récurrente. Projet ou opération ?",
      promptEn:
        "Helios situation: Monday SAV returns, recurring weekly procedure. Project or operation?",
      explanationCorrectFr:
        "Activité répétitive permanente = opération, pas projet.",
      explanationCorrectEn:
        "Repetitive permanent activity = operation, not project.",
      difficulty: 2,
      options: [
        opt(
          "Projet — car c'est urgent le lundi",
          "Project — because it's urgent on Monday",
          false,
          "L'urgence ne définit pas un projet.",
          "Urgency does not define a project."
        ),
        opt(
          "Opération — activité récurrente avec procédure existante",
          "Operation — recurring activity with existing procedure",
          true
        ),
        opt(
          "Ni l'un ni l'autre",
          "Neither",
          false,
          "Toute activité organisationnelle est l'une ou l'autre.",
          "Every organizational activity is one or the other."
        ),
        opt(
          "Projet car il faut un chef de projet",
          "Project because a PM is needed",
          false,
          "Le besoin de coordination ne suffit pas à définir un projet.",
          "Coordination need alone does not define a project."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Helios migre 200 magasins vers nouveau POS en 18 mois, équipe dédiée, budget fixe. Classification ?",
        promptEn:
          "Situation: Helios migrates 200 stores to new POS over 18 months, dedicated team, fixed budget. Classification?",
        explanationCorrectFr:
          "Temporaire + résultat unique = projet.",
        explanationCorrectEn:
          "Temporary + unique result = project.",
        difficulty: 1,
        options: [
          opt(
            "Projet — temporaire et résultat unique",
            "Project — temporary and unique result",
            true
          ),
          opt(
            "Opération — car ce sont des magasins",
            "Operation — because they are stores",
            false,
            "La migration unique sur 18 mois n'est pas récurrente.",
            "Unique 18-month migration is not recurring."
          ),
          opt(
            "Opération — budget fixe",
            "Operation — fixed budget",
            false,
            "Les opérations peuvent aussi avoir un budget.",
            "Operations can also have budgets."
          ),
          opt(
            "Projet permanent",
            "Permanent project",
            false,
            "Un projet a une fin ; la permanence caractérise les opérations.",
            "A project has an end; permanence characterizes operations."
          ),
        ],
      }),
    ],
  }),

  // ── Foundations: project-roles (sortOrder 1) ───────────────────────────────
  buildPmpLesson({
    slug: "project-roles",
    titleFr: "Rôles et responsabilités",
    titleEn: "Project Roles and Responsibilities",
    descriptionFr:
      "Clarifier sponsor, chef de projet, équipe et parties prenantes pour accélérer les décisions.",
    descriptionEn:
      "Clarify sponsor, project manager, team, and stakeholders to speed decisions.",
    moduleSlug: "foundations",
    sortOrder: 1,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pmp-foundations",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider qui doit agir quand un conflit priorités CRM Helios dépasse le mandat du PM.",
    objectiveEn:
      "Decide who should act when a Helios CRM priority conflict exceeds the PM's mandate.",
    explanationFr:
      "Sponsor = autorité, financement, escalade organisationnelle. PM = coordination, intégration, communication. Équipe = livrables. Parties prenantes influencent sans toujours exécuter. Rôles flous = décisions parallèles.",
    explanationEn:
      "Sponsor = authority, funding, organizational escalation. PM = coordination, integration, communication. Team = deliverables. Stakeholders influence without always executing. Unclear roles = parallel decisions.",
    exampleFr:
      "CRM Helios : sponsor débloque budget ; PM planifie ; dev/UX livrent ; conformité valide sans coder.",
    exampleEn:
      "Helios CRM: sponsor unlocks budget; PM plans; dev/UX deliver; compliance validates without coding.",
    practicalFr:
      "Qui est sponsor, qui exécute, qui influence sur votre projet ?",
    practicalEn:
      "Who is sponsor, who executes, who influences on your project?",
    mistakeFr:
      "Demander au sponsor de coordonner le planning quotidien.",
    mistakeEn:
      "Asking sponsor to coordinate daily scheduling.",
    takeawayFr:
      "Sponsor = autorité ; PM = intégration ; équipe = livrables.",
    takeawayEn:
      "Sponsor = authority; PM = integration; team = deliverables.",
    decisionFr:
      "Blocage hors pouvoir PM → escalade sponsor avec options.",
    decisionEn:
      "Blockage beyond PM power → escalate to sponsor with options.",
    flashcardFrontFr: "Sponsor",
    flashcardFrontEn: "Sponsor",
    flashcardBackFr: "Autorité, financement et levée d'obstacles organisationnels.",
    flashcardBackEn: "Authority, funding, and organizational obstacle removal.",
    exercisePromptFr:
      "Décrivez PM vs sponsor sur CRM Helios. Une erreur à éviter ?",
    exercisePromptEn:
      "Describe PM vs sponsor on Helios CRM. One mistake to avoid?",
    situation: {
      scenarioFr:
        "CRM Helios : conflit priorités ventes vs conformité, budget supplémentaire 80 k€ requis. Le PM propose des options ; les deux directeurs refusent de céder.",
      scenarioEn:
        "Helios CRM: sales vs compliance priority conflict, €80k additional budget needed. PM proposes options; both directors refuse to yield.",
      problemFr:
        "Décision hors mandat PM — besoin arbitrage sponsor.",
      problemEn:
        "Decision beyond PM mandate — sponsor arbitration needed.",
      bestActionFr:
        "PM escalade au sponsor avec options chiffrées — ne pas improviser seul.",
      bestActionEn:
        "PM escalates to sponsor with quantified options — do not improvise alone.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation CRM Helios : conflit priorités + budget 80 k€, PM sans autorité pour trancher. Qui doit arbitrer ?",
      promptEn:
        "Helios CRM situation: priority conflict + €80k budget, PM lacks authority to decide. Who should arbitrate?",
      explanationCorrectFr:
        "Le sponsor arbitre au-delà du mandat PM.",
      explanationCorrectEn:
        "Sponsor arbitrates beyond PM mandate.",
      difficulty: 2,
      options: [
        opt(
          "Le développeur junior",
          "The junior developer",
          false,
          "L'équipe exécute, n'arbitre pas budget cross-fonction.",
          "Team executes, does not arbitrate cross-functional budget."
        ),
        opt(
          "Le sponsor avec les options présentées par le PM",
          "The sponsor with options presented by the PM",
          true
        ),
        opt(
          "Le PM impose sa solution",
          "The PM imposes their solution",
          false,
          "Hors mandat sur budget et priorités métier.",
          "Beyond mandate on budget and business priorities."
        ),
        opt(
          "Personne — attendre que ça se résolve",
          "Nobody — wait for it to resolve",
          false,
          "L'inaction retarde la livraison.",
          "Inaction delays delivery."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : le sponsor Helios CRM demande au PM de micro-manager chaque tâche dev. Meilleure réponse ?",
        promptEn:
          "Situation: Helios CRM sponsor asks PM to micromanage every dev task. Best response?",
        explanationCorrectFr:
          "Rappeler le rôle PM (coordination/intégration) vs équipe (livrables techniques).",
        explanationCorrectEn:
          "Clarify PM role (coordination/integration) vs team (technical deliverables).",
        difficulty: 2,
        options: [
          opt(
            "Accepter — le sponsor a autorité",
            "Accept — sponsor has authority",
            false,
            "Micro-management n'est pas le rôle PM.",
            "Micromanagement is not PM role."
          ),
          opt(
            "Clarifier rôles : PM coordonne, équipe livre les tâches techniques",
            "Clarify roles: PM coordinates, team delivers technical tasks",
            true
          ),
          opt(
            "Démissionner immédiatement",
            "Resign immediately",
            false,
            "Clarification de rôles suffit souvent.",
            "Role clarification often suffices."
          ),
          opt(
            "Demander au sponsor de coder",
            "Ask sponsor to code",
            false,
            "Hors rôle du sponsor.",
            "Outside sponsor role."
          ),
        ],
      }),
    ],
  }),

  // ── Foundations: project-lifecycle-basics (sortOrder 2) ──────────────────
  buildPmpLesson({
    slug: "project-lifecycle-basics",
    titleFr: "Cycle de vie projet — bases",
    titleEn: "Project Lifecycle Basics",
    descriptionFr:
      "Parcourir démarrage, planification, exécution, suivi et clôture — et savoir où agir.",
    descriptionEn:
      "Walk through initiating, planning, executing, monitoring, and closing — and know where to act.",
    moduleSlug: "foundations",
    sortOrder: 2,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-foundations",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider dans quelle phase placer une demande d'intégration majeure Helios ERP.",
    objectiveEn:
      "Decide which phase to place a major Helios ERP integration request.",
    explanationFr:
      "Cycle de vie : démarrage (charte), planification (baseline), exécution (livrables), suivi/contrôle (écarts, changements), clôture (leçons apprises). Ajouter une intégration majeure en exécution sans analyse = mélange phases.",
    explanationEn:
      "Lifecycle: initiating (charter), planning (baseline), executing (deliverables), monitoring/controlling (variances, changes), closing (lessons learned). Adding major integration during execution without analysis = mixing phases.",
    exampleFr:
      "Helios ERP : charte démarrage ; WBS planification ; dev exécution ; écarts suivi ; rétro clôture.",
    exampleEn:
      "Helios ERP: charter initiating; WBS planning; dev executing; variance monitoring; retro closing.",
    practicalFr:
      "Sur un projet passé : où charte ? Où baseline ? Où leçons apprises ?",
    practicalEn:
      "On a past project: where charter? Where baseline? Where lessons learned?",
    mistakeFr:
      "Passer à l'exécution sans baseline ni critères d'acceptation.",
    mistakeEn:
      "Jumping to execution without baseline or acceptance criteria.",
    takeawayFr:
      "Chaque phase a un but — ne pas les fusionner par défaut.",
    takeawayEn:
      "Each phase has a purpose — do not merge by default.",
    decisionFr:
      "Avant action majeure : planification, exécution ou contrôle ? Artefact adapté.",
    decisionEn:
      "Before major action: planning, executing, or controlling? Right artifact.",
    flashcardFrontFr: "Cycle de vie",
    flashcardFrontEn: "Lifecycle",
    flashcardBackFr: "Démarrage → planification → exécution → suivi → clôture.",
    flashcardBackEn: "Initiating → planning → executing → monitoring → closing.",
    exercisePromptFr:
      "Helios ERP : date ferme avant planification détaillée. Phase sautée ? Risque ?",
    exercisePromptEn:
      "Helios ERP: firm date before detailed planning. Phase skipped? Risk?",
    situation: {
      scenarioFr:
        "Helios ERP en exécution : le sponsor demande une intégration majeure module paie (+6 sem.) sans demande de changement ni analyse d'impact.",
      scenarioEn:
        "Helios ERP executing: sponsor requests major payroll module integration (+6 wk) without change request or impact analysis.",
      problemFr:
        "Changement baseline traité en exécution pure — saute suivi/contrôle.",
      problemEn:
        "Baseline change treated as pure execution — skips monitoring/controlling.",
      bestActionFr:
        "Traiter via processus contrôle/changement : CR + analyse impact avant exécution.",
      bestActionEn:
        "Handle via control/change process: CR + impact analysis before execution.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation Helios ERP : intégration paie majeure demandée en cours d'exécution sans CR. Quelle phase/processus ?",
      promptEn:
        "Helios ERP situation: major payroll integration requested during execution without CR. Which phase/process?",
      explanationCorrectFr:
        "Suivi et contrôle + change management — pas exécution directe.",
      explanationCorrectEn:
        "Monitoring and controlling + change management — not direct execution.",
      difficulty: 2,
      options: [
        opt(
          "Exécuter immédiatement — on est en phase exécution",
          "Execute immediately — we are in executing phase",
          false,
          "Modification baseline exige contrôle et changement formel.",
          "Baseline modification requires control and formal change."
        ),
        opt(
          "Ouvrir CR et analyse d'impact (suivi/contrôle)",
          "Open CR and impact analysis (monitoring/controlling)",
          true
        ),
        opt(
          "Retourner en démarrage pour nouvelle charte",
          "Return to initiating for new charter",
          false,
          "Excessif — le changement passe par contrôle, pas redémarrage complet.",
          "Excessive — change goes through control, not full restart."
        ),
        opt(
          "Reporter à la clôture",
          "Defer to closing",
          false,
          "6 semaines d'impact ne peuvent pas attendre la clôture.",
          "6-week impact cannot wait until closing."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : équipe Helios ERP veut capturer leçons apprises. Dans quelle phase ?",
        promptEn:
          "Situation: Helios ERP team wants to capture lessons learned. In which phase?",
        explanationCorrectFr:
          "Clôture — avec transfert formel des livrables.",
        explanationCorrectEn:
          "Closing — with formal deliverable handover.",
        difficulty: 1,
        options: [
          opt(
            "Clôture",
            "Closing",
            true
          ),
          opt(
            "Démarrage avant charte",
            "Initiating before charter",
            false,
            "Le démarrage pose le cadre ; les leçons viennent après l'expérience.",
            "Initiating sets frame; lessons come after experience."
          ),
          opt(
            "Uniquement planification",
            "Planning only",
            false,
            "La planification anticipe ; les leçons documentent ce qui s'est passé.",
            "Planning anticipates; lessons document what happened."
          ),
          opt(
            "Exécution seule",
            "Executing only",
            false,
            "Les leçons formelles sont typiquement en clôture.",
            "Formal lessons are typically at closing."
          ),
        ],
      }),
    ],
  }),
];

export const PMP_ROI_UPGRADE_SLUGS = PMP_ROI_QUALITY_UPGRADES.map((l) => l.slug);
