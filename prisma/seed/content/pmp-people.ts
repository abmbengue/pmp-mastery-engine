import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

const MOD = "people";

export const PMP_PEOPLE_LESSONS: PmpLesson[] = [
  buildPmpLesson({
    slug: "leadership",
    titleFr: "Leadership en projet",
    titleEn: "Leadership in Projects",
    descriptionFr:
      "Mobiliser une équipe autour d'une direction claire sans confondre autorité et influence.",
    descriptionEn:
      "Mobilize a team around a clear direction without confusing authority and influence.",
    moduleSlug: MOD,
    sortOrder: 0,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "leadership",
    learningObjective: "APPLY",
    objectiveFr:
      "Distinguer leadership et management hiérarchique, puis choisir un comportement adapté à une situation d'équipe.",
    objectiveEn:
      "Distinguish leadership from hierarchical management, then choose behavior suited to a team situation.",
    explanationFr:
      "En projet, le leadership ne dépend pas uniquement du titre : il repose sur la capacité à clarifier le « pourquoi », à montrer l'exemple et à créer de la confiance. Un chef de projet peut diriger sans être le supérieur hiérarchique de tous les membres — l'influence vient alors de la crédibilité, de l'écoute et de la cohérence entre paroles et actes. Adapter son style (plus directif en urgence, plus participatif en phase d'exploration) évite les réactions rigides qui fatiguent l'équipe. Le leadership sert les objectifs du projet et la réussite collective, pas la visibilité personnelle du leader.",
    explanationEn:
      "In projects, leadership does not depend on title alone: it rests on clarifying the “why,” role modeling, and building trust. A project manager may lead without being everyone's line manager — influence then comes from credibility, listening, and consistency between words and actions. Adapting style (more directive in urgency, more participative in exploration) avoids rigid reactions that drain the team. Leadership serves project goals and collective success, not the leader's personal visibility.",
    exampleFr:
      "Marie pilote la migration Helios chez Nordia Retail. Le sponsor exige une date fixe, mais l'équipe technique doute de la faisabilité. Marie convoque un atelier de 45 minutes : elle reformule l'enjeu client, demande à Thomas (lead dev) d'exposer les risques chiffrés, puis propose trois scénarios au sponsor au lieu d'imposer un « oui » silencieux.",
    exampleEn:
      "Marie leads the Helios migration at Nordia Retail. The sponsor demands a fixed date, but the technical team doubts feasibility. Marie runs a 45-minute workshop: she reframes the client stake, asks Thomas (dev lead) to present quantified risks, then offers the sponsor three scenarios instead of a silent “yes.”",
    practicalFr:
      "Notez une décision récente où vous avez influencé sans autorité formelle. Qu'avez-vous fait concrètement : clarifier, écouter, arbitrer ou protéger l'équipe ?",
    practicalEn:
      "Note a recent decision where you influenced without formal authority. What did you do concretely: clarify, listen, arbitrate, or shield the team?",
    mistakeFr:
      "Confondre leadership et micro-management : relire chaque ligne de code ou valider chaque e-mail envoie le message que l'équipe n'est pas digne de confiance.",
    mistakeEn:
      "Confusing leadership with micromanagement: reviewing every line of code or email sends the message the team is not trusted.",
    takeawayFr:
      "Leadership projet = direction claire + confiance + adaptation du style au contexte, avec ou sans autorité hiérarchique.",
    takeawayEn:
      "Project leadership = clear direction + trust + style adapted to context, with or without hierarchical authority.",
    decisionFr:
      "Avant une réunion tendue, préparez le « pourquoi » en une phrase, identifiez qui doit parler en expert, et évitez de trancher seul si la décision impacte la livraison.",
    decisionEn:
      "Before a tense meeting, prepare the “why” in one sentence, identify who should speak as expert, and avoid deciding alone if the decision affects delivery.",
    flashcardFrontFr: "Leadership vs autorité",
    flashcardFrontEn: "Leadership vs authority",
    flashcardBackFr: "Influencer par vision et confiance, pas seulement par le titre.",
    flashcardBackEn: "Influence through vision and trust, not title alone.",
    exercisePromptFr:
      "Sur le projet Helios, rédigez en trois lignes le « pourquoi » que Marie devrait partager avant de discuter du planning.",
    exercisePromptEn:
      "On Helios, draft in three lines the “why” Marie should share before discussing the schedule.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Marie n'est pas la manager de Thomas, mais l'équipe la suit sur Helios. Quel facteur explique le mieux ce leadership ?",
      promptEn:
        "Marie is not Thomas's manager, yet the team follows her on Helios. Which factor best explains this leadership?",
      explanationCorrectFr:
        "Crédibilité, écoute et direction claire créent de l'influence sans autorité hiérarchique directe.",
      explanationCorrectEn:
        "Credibility, listening, and clear direction create influence without direct hierarchical authority.",
      difficulty: 1,
      options: [
        opt(
          "Elle contrôle les augmentations de l'équipe",
          "She controls team pay raises",
          false,
          "Les récompenses RH relèvent du manager hiérarchique, pas du leadership projet.",
          "HR rewards belong to the line manager, not project leadership."
        ),
        opt(
          "Elle clarifie le pourquoi et crée un espace sûr pour les risques",
          "She clarifies the why and creates safe space for risks",
          true
        ),
        opt(
          "Elle évite toute discussion sur les contraintes",
          "She avoids any discussion of constraints",
          false,
          "Masquer les contraintes détruit la confiance à long terme.",
          "Hiding constraints destroys long-term trust."
        ),
        opt(
          "Elle impose ses solutions techniques sans débat",
          "She imposes her technical solutions without debate",
          false,
          "Imposer sans débat ressemble au commandement, pas au leadership mobilisateur.",
          "Imposing without debate is command, not mobilizing leadership."
        ),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "team-development",
    titleFr: "Développement d'équipe",
    titleEn: "Team Development",
    descriptionFr:
      "Reconnaître les phases de maturation d'une équipe et intervenir au bon moment.",
    descriptionEn:
      "Recognize team maturity phases and intervene at the right moment.",
    moduleSlug: MOD,
    sortOrder: 1,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "team-development",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Identifier la phase de développement d'une équipe projet et proposer une intervention adaptée.",
    objectiveEn:
      "Identify a project team's development phase and propose a suited intervention.",
    explanationFr:
      "Les équipes projet traversent des étapes prévisibles : formation (découverte mutuelle), tension (désaccords sur rôles et priorités), normalisation (accords de travail), performance (livraison fluide) et parfois dissolution. Reconnaître la phase évite les réponses inadaptées — exiger la performance maximale pendant la phase de tension aggrave les frictions. Le développement d'équipe combine compétences techniques, confiance interpersonnelle et règles explicites sur la communication et les décisions. Un chef de projet facilite cette progression sans forcer artificiellement la convivialité.",
    explanationEn:
      "Project teams move through predictable stages: forming (mutual discovery), tension (disagreements on roles and priorities), norming (working agreements), performing (smooth delivery), and sometimes adjourning. Recognizing the phase avoids mismatched responses — demanding peak performance during tension worsens friction. Team development combines technical skills, interpersonal trust, and explicit rules on communication and decisions. A project manager facilitates this progression without forcing artificial camaraderie.",
    exampleFr:
      "L'équipe Helios vient d'être constituée : Amira (UX), Thomas (dev) et Léa (QA) se connaissent à peine. Les deux premières semaines, les réunions dépassent l'horaire car chacun défend son périmètre. Marie introduit un atelier « règles de travail » : fuseau horaire de réponse, définition de « terminé », et canal d'escalade — les conflits diminuent la semaine suivante.",
    exampleEn:
      "The Helios team was just assembled: Amira (UX), Thomas (dev), and Léa (QA) barely know each other. First two weeks, meetings run over as everyone defends their scope. Marie introduces a “working agreements” workshop: response timezone, definition of done, and escalation channel — conflicts drop the following week.",
    practicalFr:
      "Sur votre équipe actuelle, listez trois signes de la phase (formation, tension, normalisation, performance). Quelle intervention de 30 minutes serait utile cette semaine ?",
    practicalEn:
      "On your current team, list three signs of the phase (forming, storming, norming, performing). What 30-minute intervention would help this week?",
    mistakeFr:
      "Traiter toute friction comme un problème de personnalité alors qu'elle signale souvent des rôles flous ou des priorités contradictoires.",
    mistakeEn:
      "Treating all friction as a personality problem when it often signals unclear roles or conflicting priorities.",
    takeawayFr:
      "Adapter votre intervention à la phase : aligner en tension, autonomiser en performance.",
    takeawayEn:
      "Adapt your intervention to the phase: align during tension, empower during performance.",
    decisionFr:
      "Si les réunions dérapent depuis deux semaines, priorisez un atelier rôles/priorités avant d'ajouter des outils ou des process lourds.",
    decisionEn:
      "If meetings have overrun for two weeks, prioritize a roles/priorities workshop before adding heavy tools or processes.",
    flashcardFrontFr: "Phase de normalisation",
    flashcardFrontEn: "Norming phase",
    flashcardBackFr: "L'équipe établit des règles communes et réduit les frictions récurrentes.",
    flashcardBackEn: "The team establishes shared rules and reduces recurring friction.",
    exercisePromptFr:
      "Rédigez trois règles de travail concrètes pour l'équipe Helios (réponse, qualité, escalade).",
    exercisePromptEn:
      "Draft three concrete working rules for the Helios team (response, quality, escalation).",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Helios : réunions longues, chacun défend son périmètre, équipe nouvelle. Quelle phase domine probablement ?",
      promptEn:
        "Helios: long meetings, everyone defends scope, new team. Which phase likely dominates?",
      explanationCorrectFr:
        "Les désaccords sur rôles et priorités typent la phase de tension après formation.",
      explanationCorrectEn:
        "Disagreements on roles and priorities typify the storming phase after forming.",
      difficulty: 1,
      options: [
        opt("Performance", "Performing", false, "En performance, l'équipe livre avec peu de friction sur les bases.", "In performing, the team delivers with little basic friction."),
        opt("Tension (storming)", "Storming", true),
        opt("Dissolution", "Adjourning", false, "La dissolution arrive en fin de projet, pas au démarrage.", "Adjourning comes at project end, not at kickoff."),
        opt("Normalisation avancée", "Advanced norming", false, "La normalisation suppose déjà des accords explicites partagés.", "Norming already assumes shared explicit agreements."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "team-performance",
    titleFr: "Performance et collaboration d'équipe",
    titleEn: "Team Performance and Collaboration",
    descriptionFr:
      "Transformer une équipe stable en équipe qui livre avec qualité, feedback et co-responsabilité.",
    descriptionEn:
      "Turn a stable team into one that delivers with quality, feedback, and shared ownership.",
    moduleSlug: MOD,
    sortOrder: 2,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-people",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Diagnostiquer les leviers de performance collective et intégrer des pratiques de collaboration transverse.",
    objectiveEn:
      "Diagnose collective performance levers and integrate cross-functional collaboration practices.",
    explanationFr:
      "La performance d'équipe dépasse la somme des compétences individuelles : elle repose sur des objectifs partagés, des métriques visibles (débit, qualité, satisfaction interne) et des boucles de feedback courtes. La collaboration transverse — UX, dev, ops, métier — exige des rituels synchrones (revue hebdo, démo) et asynchrones (documentation décisionnelle, tickets traçables). Un chef de projet facilite la co-création sans remplacer les experts : son rôle est de lever les obstacles inter-silos et de clarifier qui décide quoi. Mesurer uniquement la vitesse sans la qualité ou le bien-être crée une performance fragile qui s'effondre à la première crise.",
    explanationEn:
      "Team performance exceeds the sum of individual skills: it rests on shared goals, visible metrics (throughput, quality, internal satisfaction), and short feedback loops. Cross-functional collaboration — UX, dev, ops, business — needs synchronous rituals (weekly review, demo) and asynchronous ones (decision logs, traceable tickets). A project manager facilitates co-creation without replacing experts: their role is removing cross-silo obstacles and clarifying who decides what. Measuring speed alone without quality or wellbeing creates fragile performance that collapses at the first crisis.",
    exampleFr:
      "Après la normalisation sur Helios, Marie installe un tableau partagé : objectif sprint, taux de retours QA, et un créneau vendredi « leçons apprises » de 20 minutes. Quand le marketing demande une fonction hors périmètre, l'équipe renvoie au backlog commun au lieu de négocier en coulisses — la collaboration devient visible et traçable.",
    exampleEn:
      "After norming on Helios, Marie sets up a shared board: sprint goal, QA return rate, and a 20-minute Friday “lessons learned” slot. When marketing asks for out-of-scope work, the team routes it to the shared backlog instead of negotiating in the shadows — collaboration becomes visible and traceable.",
    practicalFr:
      "Choisissez une métrique de qualité et une métrique de collaboration (ex. temps de réponse inter-équipes) à suivre pendant deux sprints.",
    practicalEn:
      "Pick one quality metric and one collaboration metric (e.g. cross-team response time) to track for two sprints.",
    mistakeFr:
      "Confondre présence en réunion et collaboration réelle — sans décisions documentées, l'équipe recrée les mêmes débats.",
    mistakeEn:
      "Confusing meeting attendance with real collaboration — without documented decisions, the team repeats the same debates.",
    takeawayFr:
      "Performance durable = objectifs communs + feedback régulier + collaboration traçable entre expertises.",
    takeawayEn:
      "Sustainable performance = shared goals + regular feedback + traceable collaboration across expertise.",
    decisionFr:
      "Si deux silos se contredisent chaque semaine, créez un forum décisionnel avec critères écrits plutôt qu'un chat informel.",
    decisionEn:
      "If two silos contradict each other weekly, create a decision forum with written criteria rather than informal chat.",
    flashcardFrontFr: "Performance collective",
    flashcardFrontEn: "Collective performance",
    flashcardBackFr: "Objectifs partagés + métriques + feedback, pas seulement charge individuelle.",
    flashcardBackEn: "Shared goals + metrics + feedback, not individual load alone.",
    exercisePromptFr:
      "Listez un rituel synchrone et un rituel asynchrone à ajouter sur Helios pour renforcer la collaboration UX/dev/QA.",
    exercisePromptEn:
      "List one synchronous and one asynchronous ritual to add on Helios to strengthen UX/dev/QA collaboration.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "L'équipe Helios livre vite mais les retours QA explosent. Quelle action cible le mieux la performance durable ?",
      promptEn:
        "Helios delivers fast but QA returns spike. Which action best targets sustainable performance?",
      explanationCorrectFr:
        "Coupler métriques de qualité et feedback régulier évite la vitesse au détriment de la collaboration.",
      explanationCorrectEn:
        "Pairing quality metrics with regular feedback avoids speed at the expense of collaboration.",
      difficulty: 2,
      options: [
        opt("Supprimer les revues pour gagner du temps", "Remove reviews to save time", false, "Moins de revues masque les défauts.", "Fewer reviews hide defects."),
        opt("Ajouter métrique QA + créneau leçons apprises hebdo", "Add QA metric + weekly lessons-learned slot", true),
        opt("Demander à QA de tester uniquement en fin de projet", "Ask QA to test only at project end", false, "Tester tard multiplie le coût.", "Late testing multiplies fix cost."),
        opt("Isoler chaque expert pour éviter les débats", "Isolate each expert to avoid debates", false, "L'isolation casse la co-responsabilité.", "Isolation breaks shared ownership."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "conflict-management-basics",
    titleFr: "Bases de la gestion des conflits",
    titleEn: "Conflict Management Basics",
    descriptionFr:
      "Comprendre l'origine des conflits projet et choisir une approche de résolution proportionnée.",
    descriptionEn:
      "Understand project conflict origins and choose a proportionate resolution approach.",
    moduleSlug: MOD,
    sortOrder: 3,
    estimatedMinutes: 6,
    difficulty: "BEGINNER",
    skillSlug: "conflict-management",
    learningObjective: "DECIDE",
    isShort: true,
    shortDurationSeconds: 165,
    objectiveFr:
      "Analyser un conflit projet et sélectionner une stratégie adaptée au temps disponible.",
    objectiveEn:
      "Analyze a project conflict and select a strategy suited to available time.",
    explanationFr:
      "Les conflits en projet naissent rarement d'un simple « ego » : priorités contradictoires, ressources limitées, informations incomplètes ou valeurs différentes sont des causes fréquentes. Les stratégies vont de l'évitement (temporaire et risqué si le sujet est critique) à la recherche d'intérêts communs quand la relation compte. Un conflit abordé tôt avec des faits partagés peut améliorer la décision ; un conflit ignoré paralyse la livraison ou crée des camps silencieux. Le chef de projet facilite la conversation et protège le cadre (délais, critères de qualité).",
    explanationEn:
      "Project conflicts rarely stem from simple “ego”: conflicting priorities, limited resources, incomplete information, or different values are frequent causes. Strategies range from avoidance (temporary and risky if critical) to seeking shared interests when the relationship matters. Conflict addressed early with shared facts can improve decisions; ignored conflict stalls delivery or creates silent camps. The project manager facilitates conversation and protects the frame (timeline, quality criteria).",
    exampleFr:
      "Sur Helios, Thomas veut refactoriser le module paiement ; Amira insiste pour livrer la nouvelle interface checkout d'abord. Marie convoque un créneau de 30 minutes, demande l'impact client chiffré, puis propose un compromis : UI checkout en sprint 1, dette technique planifiée en sprint 2.",
    exampleEn:
      "On Helios, Thomas wants to refactor payment; Amira insists on checkout UI first. Marie calls a 30-minute slot, asks for quantified client impact, then proposes compromise: checkout UI sprint 1, technical debt sprint 2.",
    practicalFr:
      "Pensez à un conflit récent : intérêts, faits ou relation ? Quelle stratégie avec 30 minutes ?",
    practicalEn:
      "Think of a recent conflict: interests, facts, or relationship? Which strategy with 30 minutes?",
    mistakeFr:
      "Imposer une solution « du chef de projet » sur un débat technique entre pairs experts sans écouter les critères.",
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
      "Reformulez le conflit Thomas/Amira en deux intérêts respectifs.",
    exercisePromptEn:
      "Reframe Thomas/Amira conflict as two respective interests.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Deux experts s'opposent sur une architecture avec livraison dans 48 h. Première approche ?",
      promptEn:
        "Two experts disagree on architecture with delivery in 48 hours. First approach?",
      explanationCorrectFr:
        "Une session sur critères et impacts permet un compromis sans évitement total.",
      explanationCorrectEn:
        "A session on criteria and impacts enables compromise without total avoidance.",
      difficulty: 2,
      options: [
        opt("Reporter indéfiniment", "Postpone indefinitely", false, "L'évitement laisse le blocage intact.", "Avoidance leaves block intact."),
        opt("Faciliter un échange structuré sur critères et impacts client", "Facilitate structured exchange on criteria and client impact", true),
        opt("Trancher seul sans consulter", "Decide alone without consulting", false, "Ignore l'expertise.", "Ignores expertise."),
        opt("Retirer un expert immédiatement", "Remove an expert immediately", false, "Disproportionné.", "Disproportionate."),
      ],
    }),
    questions: [
      q({
        type: "TRUE_FALSE",
        promptFr: "Un conflit bien géré peut améliorer la qualité d'une décision projet.",
        promptEn: "A well-managed conflict can improve project decision quality.",
        explanationCorrectFr: "Vrai : des perspectives différentes révèlent des risques oubliés.",
        explanationCorrectEn: "True: different perspectives reveal overlooked risks.",
        difficulty: 1,
        options: [opt("Vrai", "True", true), opt("Faux", "False", false)],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "negotiation-basics",
    titleFr: "Bases de la négociation en projet",
    titleEn: "Negotiation Basics in Projects",
    descriptionFr:
      "Préparer et conduire une négociation sur périmètre, délais ou ressources sans relation toxique.",
    descriptionEn:
      "Prepare and run a negotiation on scope, timeline, or resources without a toxic relationship.",
    moduleSlug: MOD,
    sortOrder: 4,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-people",
    learningObjective: "DECIDE",
    objectiveFr:
      "Préparer une négociation avec BATNA, intérêts et options multiples avant d'accepter ou refuser une demande.",
    objectiveEn:
      "Prepare a negotiation with BATNA, interests, and multiple options before accepting or refusing a request.",
    explanationFr:
      "La négociation en projet concerne souvent le triangle portée-délais-ressources : le sponsor veut plus, l'équipe veut du réalisme, les opérations veulent la stabilité. Une préparation solide identifie votre meilleure alternative si aucun accord (BATNA), les intérêts de chaque partie (pas seulement leurs positions) et plusieurs options créatrices au lieu d'un oui/non binaire. Ancher la discussion sur des données partagées (effort, risque, valeur client) réduit les débats opinion contre opinion. Préserver la relation compte : une victoire humiliante aujourd'hui coûte la coopération demain sur le même projet.",
    explanationEn:
      "Project negotiation often involves the scope-time-resources triangle: the sponsor wants more, the team wants realism, operations wants stability. Solid preparation identifies your best alternative if no deal (BATNA), each party's interests (not only positions), and multiple creative options instead of a binary yes/no. Anchoring on shared data (effort, risk, client value) reduces opinion-vs-opinion debates. Preserving the relationship matters: a humiliating win today costs cooperation tomorrow on the same project.",
    exampleFr:
      "Le directeur commercial de Nordia Retail exige la fonction « paiement en 3 clics » pour une foire dans 6 semaines. Marie prépare trois scénarios chiffrés : (A) MVP sans refactor, (B) report foire + qualité, (C) renfort externe temporaire. Elle présente les coûts et risques au sponsor qui choisit (A) avec dette technique documentée plutôt qu'un refus sec.",
    exampleEn:
      "Nordia Retail's sales director demands “3-click payment” for a trade show in 6 weeks. Marie prepares three quantified scenarios: (A) MVP without refactor, (B) postpone show + quality, (C) temporary external reinforcements. She presents costs and risks; the sponsor picks (A) with documented technical debt rather than a flat refusal.",
    practicalFr:
      "Pour une demande de changement récente, notez la position de l'autre partie, son intérêt probable et votre BATNA en une phrase.",
    practicalEn:
      "For a recent change request, note the other party's position, likely interest, and your BATNA in one sentence.",
    mistakeFr:
      "Négocier en direct sans chiffres : « c'est impossible » contre « c'est obligatoire » bloque la conversation.",
    mistakeEn:
      "Negotiating live without numbers: “impossible” vs “mandatory” blocks the conversation.",
    takeawayFr:
      "Préparer options + BATNA + intérêts transforme un ultimatum en choix éclairé.",
    takeawayEn:
      "Preparing options + BATNA + interests turns an ultimatum into an informed choice.",
    decisionFr:
      "Avant d'accepter une date imposée, présentez au minimum deux scénarios chiffrés avec trade-offs explicites.",
    decisionEn:
      "Before accepting an imposed date, present at least two quantified scenarios with explicit trade-offs.",
    flashcardFrontFr: "BATNA",
    flashcardFrontEn: "BATNA",
    flashcardBackFr: "Meilleure alternative si aucun accord — votre plan B réaliste.",
    flashcardBackEn: "Best alternative if no deal — your realistic plan B.",
    exercisePromptFr:
      "Rédigez deux options créatrices pour la demande « paiement en 3 clics en 6 semaines » sur Helios.",
    exercisePromptEn:
      "Draft two creative options for the “3-click payment in 6 weeks” request on Helios.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Le sponsor impose une date sans discuter des risques. Quelle préparation de négociation est la plus utile ?",
      promptEn:
        "The sponsor imposes a date without discussing risks. Which negotiation prep is most useful?",
      explanationCorrectFr:
        "Des scénarios chiffrés ancrent la discussion sur les trade-offs, pas sur l'autorité seule.",
      explanationCorrectEn:
        "Quantified scenarios anchor discussion on trade-offs, not authority alone.",
      difficulty: 2,
      options: [
        opt("Accepter puis informer l'équipe après coup", "Accept then inform the team afterward", false, "Décision unilatérale sans préparation.", "Unilateral decision without preparation."),
        opt("Préparer BATNA et 2–3 scénarios avec coûts/risques", "Prepare BATNA and 2–3 scenarios with costs/risks", true),
        opt("Refuser sans proposer d'alternative", "Refuse without offering alternatives", false, "Refus sec sans BATNA affaiblit la crédibilité.", "Flat refusal without BATNA weakens credibility."),
        opt("Menacer de quitter le projet", "Threaten to quit the project", false, "Menace relationnelle disproportionnée.", "Disproportionate relational threat."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Position vs intérêt : « Je veux la date du 15 » est plutôt…",
        promptEn: "Position vs interest: “I want the 15th date” is rather…",
        explanationCorrectFr: "Une position ; l'intérêt pourrait être « visibilité commerciale à la foire ».",
        explanationCorrectEn: "A position; the interest might be “commercial visibility at the trade show.”",
        difficulty: 2,
        options: [
          opt("Une position", "A position", true),
          opt("Un intérêt sous-jacent", "An underlying interest", false, "L'intérêt explique le pourquoi derrière la demande.", "Interest explains the why behind the ask."),
          opt("Un BATNA", "A BATNA", false, "Le BATNA est votre alternative sans accord.", "BATNA is your alternative without deal."),
          opt("Un critère d'acceptation QA", "A QA acceptance criterion", false, "Sans lien avec la négociation de date.", "Unrelated to date negotiation."),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "communication",
    titleFr: "Communication en projet",
    titleEn: "Project Communication",
    descriptionFr:
      "Structurer qui reçoit quoi, quand et par quel canal pour réduire le bruit et l'anxiété.",
    descriptionEn:
      "Structure who gets what, when, and through which channel to reduce noise and anxiety.",
    moduleSlug: MOD,
    sortOrder: 5,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "communication",
    learningObjective: "APPLY",
    objectiveFr:
      "Concevoir un message projet adapté à l'audience (sponsor, équipe, clients) avec canal et fréquence cohérents.",
    objectiveEn:
      "Design a project message suited to the audience (sponsor, team, clients) with coherent channel and frequency.",
    explanationFr:
      "La communication projet répond à cinq questions : qui, quoi, quand, comment, et avec quel retour attendu. Le sponsor a besoin de synthèse orientée décision et risques ; l'équipe a besoin de clarté sur priorités et changements ; les clients finaux veulent savoir ce qui change pour eux sans jargon interne. Multiplier les canaux sans règles crée fatigue et rumeurs — un canal officiel pour les statuts et un canal rapide pour les urgences suffisent souvent. Écouter activement (reformuler, vérifier la compréhension) est aussi important que diffuser : une équipe qui n'est pas entendue cesse de signaler les problèmes tôt.",
    explanationEn:
      "Project communication answers five questions: who, what, when, how, and with what expected feedback. Sponsors need decision-oriented summaries and risks; the team needs clarity on priorities and changes; end clients want to know what changes for them without internal jargon. Multiplying channels without rules creates fatigue and rumors — one official channel for status and one fast channel for urgencies often suffice. Active listening (paraphrasing, checking understanding) matters as much as broadcasting: a team that is not heard stops raising problems early.",
    exampleFr:
      "Marie envoie chaque lundi un e-mail d'une page au sponsor Helios : feu vert/ orange, trois risques, une décision requise. L'équipe reçoit un standup quotidien de 15 minutes et un canal Slack #helios-decisions réservé aux changements validés — les rumeurs sur une « date secrète » disparaissent en deux semaines.",
    exampleEn:
      "Every Monday Marie sends a one-page email to the Helios sponsor: green/amber, three risks, one decision needed. The team gets a 15-minute daily standup and a Slack #helios-decisions channel for validated changes only — rumors about a “secret date” fade within two weeks.",
    practicalFr:
      "Rédigez un modèle de statut hebdo en 5 lignes pour votre sponsor actuel (état, risques, décision, prochaine étape).",
    practicalEn:
      "Draft a 5-line weekly status template for your current sponsor (state, risks, decision, next step).",
    mistakeFr:
      "Copier-coller le même message détaillé technique au sponsor et aux utilisateurs finaux — chaque audience a un besoin différent.",
    mistakeEn:
      "Copy-pasting the same detailed technical message to sponsor and end users — each audience has different needs.",
    takeawayFr:
      "Adapter message, canal et fréquence à l'audience ; écouter autant que diffuser.",
    takeawayEn:
      "Adapt message, channel, and frequency to the audience; listen as much as you broadcast.",
    decisionFr:
      "Avant un changement majeur, identifiez trois audiences et rédigez une version distincte pour chacune.",
    decisionEn:
      "Before a major change, identify three audiences and draft a distinct version for each.",
    flashcardFrontFr: "Plan de communication",
    flashcardFrontEn: "Communication plan",
    flashcardBackFr: "Qui, quoi, quand, comment — aligné aux besoins de chaque audience.",
    flashcardBackEn: "Who, what, when, how — aligned to each audience's needs.",
    exercisePromptFr:
      "Écrivez deux versions du même changement de date : une pour le sponsor, une pour l'équipe Helios.",
    exercisePromptEn:
      "Write two versions of the same date change: one for the sponsor, one for the Helios team.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Des rumeurs circulent sur une date non confirmée. Quelle action de communication corrige le mieux la situation ?",
      promptEn:
        "Rumors spread about an unconfirmed date. Which communication action best fixes the situation?",
      explanationCorrectFr:
        "Un canal officiel avec statut validé réduit le bruit et rétablit la confiance.",
      explanationCorrectEn:
        "An official channel with validated status reduces noise and restores trust.",
      difficulty: 1,
      options: [
        opt("Ignorer jusqu'à la décision finale", "Ignore until final decision", false, "Le silence alimente les rumeurs.", "Silence feeds rumors."),
        opt("Publier un statut clair sur canal officiel et inviter les questions", "Publish clear status on official channel and invite questions", true),
        opt("Répondre individuellement à chaque rumeur par chat privé", "Reply individually to each rumor by private chat", false, "Inefficace et incohérent.", "Inefficient and inconsistent."),
        opt("Partager tous les brouillons internes", "Share all internal drafts", false, "Expose des hypothèses non validées.", "Exposes unvalidated hypotheses."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "stakeholders-basics",
    titleFr: "Qu'est-ce qu'une partie prenante ?",
    titleEn: "What is a Stakeholder?",
    descriptionFr:
      "Identifier qui influence ou subit le projet et prioriser l'engagement selon influence et intérêt.",
    descriptionEn:
      "Identify who influences or is affected by the project and prioritize engagement by influence and interest.",
    moduleSlug: MOD,
    sortOrder: 6,
    estimatedMinutes: 6,
    difficulty: "BEGINNER",
    skillSlug: "stakeholder-engagement",
    learningObjective: "IDENTIFY",
    isShort: true,
    objectiveFr:
      "Lister les parties prenantes d'un projet et classer leur niveau d'influence et d'intérêt.",
    objectiveEn:
      "List project stakeholders and classify their influence and interest levels.",
    explanationFr:
      "Une partie prenante est toute personne ou groupe capable d'influencer le projet ou affecté par ses résultats : utilisateurs, finance, juridique, opérations, communautés locales, parfois des régulateurs. L'analyse influence/intérêt aide à prioriser : haute influence + haute intérêt méritent un partenariat étroit ; haute influence + faible intérêt demandent au minimum une information ciblée pour éviter les surprises. Oublier une partie prenante clé — par exemple l'équipe support client lors d'un lancement — est une cause fréquente de résistance post go-live. Cartographier tôt et revisiter après chaque changement majeur évite les angles morts.",
    explanationEn:
      "A stakeholder is any person or group able to influence the project or affected by its results: users, finance, legal, operations, local communities, sometimes regulators. Influence/interest analysis helps prioritize: high influence + high interest deserve close partnership; high influence + low interest need at least targeted information to avoid surprises. Forgetting a key stakeholder — e.g. customer support at launch — is a frequent source of post go-live resistance. Mapping early and revisiting after major changes avoids blind spots.",
    exampleFr:
      "Sur Helios, Marie dresse une carte : le sponsor (haute/haute), le responsable PCI compliance (haute/moyenne), le support client (moyenne/haute), la communauté vendeurs (basse/moyenne). Elle planifie un atelier mensuel avec compliance et support — oubliés au kickoff, ils avaient bloqué un déploiement test.",
    exampleEn:
      "On Helios, Marie maps: sponsor (high/high), PCI compliance lead (high/medium), customer support (medium/high), vendor community (low/medium). She plans a monthly workshop with compliance and support — omitted at kickoff, they had blocked a test deployment.",
    practicalFr:
      "Listez huit parties prenantes de votre projet et placez-les sur une matrice influence/intérêt.",
    practicalEn:
      "List eight stakeholders on your project and place them on an influence/interest matrix.",
    mistakeFr:
      "Limiter la liste au sponsor et à l'équipe projet — les fonctions transverses ont souvent un veto informel.",
    mistakeEn:
      "Limiting the list to sponsor and project team — cross-functional groups often hold informal veto power.",
    takeawayFr:
      "Cartographier tôt, revisiter souvent ; engagement proportionné à influence et intérêt.",
    takeawayEn:
      "Map early, revisit often; engagement proportional to influence and interest.",
    decisionFr:
      "Après chaque changement de périmètre, ajoutez « qui a été oublié ? » à l'ordre du jour de revue.",
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
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Qui est une partie prenante du projet Helios ?",
      promptEn: "Who is a stakeholder on project Helios?",
      explanationCorrectFr:
        "Toute personne ou groupe influencé ou capable d'influencer le résultat.",
      explanationCorrectEn:
        "Anyone or any group affected by or able to influence the outcome.",
      difficulty: 1,
      options: [
        opt("Uniquement l'équipe projet", "Only the project team", false, "Trop restrictif.", "Too restrictive."),
        opt("Quiconque influence ou est affecté par Helios", "Anyone who influences or is affected by Helios", true),
        opt("Seulement le sponsor", "Only the sponsor", false, "Le sponsor est clé mais pas exclusif.", "Sponsor is key but not exclusive."),
        opt("Les concurrents externes uniquement", "External competitors only", false, "Hors périmètre direct.", "Outside direct scope."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "emotional-intelligence-pm",
    titleFr: "Intelligence émotionnelle du chef de projet",
    titleEn: "Emotional Intelligence for Project Managers",
    descriptionFr:
      "Reconnaître et réguler émotions propres et collectives pour décider sous pression.",
    descriptionEn:
      "Recognize and regulate your own and collective emotions to decide under pressure.",
    moduleSlug: MOD,
    sortOrder: 7,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-people",
    learningObjective: "APPLY",
    objectiveFr:
      "Appliquer conscience de soi et empathie pour désamorcer une tension sans éviter la décision.",
    objectiveEn:
      "Apply self-awareness and empathy to defuse tension without avoiding the decision.",
    explanationFr:
      "L'intelligence émotionnelle en projet combine conscience de soi (repérer stress, frustration, enthousiasme), autorégulation (pause avant réponse impulsive), empathie (comprendre le ressenti sans tout approuver) et compétences relationnelles (langage clair, feedback respectueux). Sous pression de livraison, les équipes amplifient les signaux émotionnels : un ton sec en standup peut cacher de la peur sur la qualité. Un chef de projet qui nomme calmement l'émotion (« je sens de l'inquiétude sur la date ») ouvre parfois la porte à des informations utiles qu'un débat technique froid masque. Ce n'est pas de la « soft skill » décorative : c'est un levier de risque quand les gens cessent de parler.",
    explanationEn:
      "Emotional intelligence in projects combines self-awareness (spotting stress, frustration, enthusiasm), self-regulation (pause before impulsive reply), empathy (understanding feeling without approving everything), and relational skills (clear language, respectful feedback). Under delivery pressure, teams amplify emotional signals: a sharp tone in standup may hide fear about quality. A project manager who calmly names emotion (“I sense worry about the date”) sometimes opens useful information that cold technical debate hides. This is not decorative “soft skill”: it is a risk lever when people stop speaking up.",
    exampleFr:
      "Lors d'une revue Helios, Thomas hausse le ton : « on va tout casser ». Marie respire, reformule : « tu crains une régression paiement si on accélère l'UI — c'est bien ça ? » Thomas confirme et propose un test automatisé ciblé ; la réunion se termine avec un plan concret au lieu d'un clash.",
    exampleEn:
      "During a Helios review, Thomas raises his voice: “we'll break everything.” Marie breathes, paraphrases: “you fear a payment regression if we accelerate UI — is that it?” Thomas confirms and proposes targeted automated tests; the meeting ends with a concrete plan instead of a clash.",
    practicalFr:
      "Après une réunion tendue, notez une émotion que vous avez ressentie et une que vous avez perçue chez un collègue.",
    practicalEn:
      "After a tense meeting, note one emotion you felt and one you perceived in a colleague.",
    mistakeFr:
      "Confondre empathie et agreement : comprendre une émotion ne signifie pas accepter tous les délais demandés.",
    mistakeEn:
      "Confusing empathy and agreement: understanding emotion does not mean accepting every requested deadline.",
    takeawayFr:
      "Nommer calmement une émotion sous-jacente peut débloquer des faits utiles à la décision.",
    takeawayEn:
      "Calmly naming underlying emotion can unlock facts useful to the decision.",
    decisionFr:
      "Si la tension monte, proposez une pause de 10 minutes ou une reformulation avant de trancher.",
    decisionEn:
      "If tension rises, propose a 10-minute pause or paraphrase before deciding.",
    flashcardFrontFr: "Autorégulation",
    flashcardFrontEn: "Self-regulation",
    flashcardBackFr: "Pause entre stimulus et réponse pour décider, pas réagir.",
    flashcardBackEn: "Pause between stimulus and response to decide, not react.",
    exercisePromptFr:
      "Écrivez une reformulation empathique de la phrase « on va tout casser » de Thomas.",
    exercisePromptEn:
      "Write an empathic paraphrase of Thomas's “we'll break everything.”",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Thomas hausse le ton sur un risque qualité. Quelle réponse illustre le mieux l'intelligence émotionnelle ?",
      promptEn:
        "Thomas raises his voice about a quality risk. Which response best illustrates emotional intelligence?",
      explanationCorrectFr:
        "Reformuler le fond (peur de régression) ouvre un plan concret sans valider l'attaque.",
      explanationCorrectEn:
        "Paraphrasing substance (fear of regression) opens a concrete plan without validating the attack.",
      difficulty: 2,
      options: [
        opt("Répondre sur le même ton pour imposer l'autorité", "Match his tone to impose authority", false, "Escalade émotionnelle.", "Emotional escalation."),
        opt("Reformuler la crainte et demander une proposition concrète", "Paraphrase the fear and ask for a concrete proposal", true),
        opt("Ignorer l'émotion et changer de sujet", "Ignore emotion and change topic", false, "Le risque non exprimé persiste.", "Unspoken risk persists."),
        opt("Accuser Thomas d'être négatif devant tous", "Accuse Thomas of being negative in front of everyone", false, "Humiliation publique.", "Public humiliation."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "servant-leadership",
    titleFr: "Servant leadership en projet",
    titleEn: "Servant Leadership in Projects",
    descriptionFr:
      "Servir la réussite de l'équipe en levant obstacles plutôt qu'en accumulant le contrôle.",
    descriptionEn:
      "Serve team success by removing obstacles rather than accumulating control.",
    moduleSlug: MOD,
    sortOrder: 8,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "leadership",
    learningObjective: "APPLY",
    objectiveFr:
      "Identifier trois obstacles systémiques à lever pour l'équipe sans retirer sa responsabilité.",
    objectiveEn:
      "Identify three systemic obstacles to remove for the team without removing their responsibility.",
    explanationFr:
      "Le servant leadership place les besoins de l'équipe et du client au centre : le leader « sert » en clarifiant la vision, protégeant le focus, obtenant ressources et enlevant bureaucratie inutile. Ce n'est pas faire le travail à la place des experts ni éviter les décisions difficiles — c'est créer les conditions où l'équipe peut livrer avec qualité. En projet, cela se traduit par des allers-retours avec le sponsor pour défendre un périmètre réaliste, des espaces sans interruption pour le travail profond, et une reconnaissance publique du travail invisible (documentation, tests). L'équipe garde la responsabilité des livrables ; le leader porte la responsabilité du système dans lequel elle travaille.",
    explanationEn:
      "Servant leadership puts team and client needs at the center: the leader “serves” by clarifying vision, protecting focus, securing resources, and removing useless bureaucracy. It is not doing experts' work or avoiding hard decisions — it is creating conditions where the team can deliver with quality. In projects, this means advocating with the sponsor for realistic scope, protecting deep-work time, and publicly recognizing invisible work (documentation, tests). The team keeps deliverable responsibility; the leader owns the system they work in.",
    exampleFr:
      "Marie remarque que l'équipe Helios perd deux heures par semaine à des réunions transverses non liées au sprint. Elle négocie avec les managers une fenêtre « focus Helios » mardi/jeudi matin et prend en charge elle-même le reporting mensuel lourd pour libérer Thomas et Amira.",
    exampleEn:
      "Marie notices the Helios team loses two hours weekly in cross meetings unrelated to the sprint. She negotiates “Helios focus” windows Tue/Thu mornings with managers and handles heavy monthly reporting herself to free Thomas and Amira.",
    practicalFr:
      "Listez deux obstacles systémiques (process, outils, réunions) que vous pourriez lever cette semaine pour votre équipe.",
    practicalEn:
      "List two systemic obstacles (process, tools, meetings) you could remove this week for your team.",
    mistakeFr:
      "Confondre servant leadership et absence de leadership — éviter toute décision crée du vide, pas de l'autonomie.",
    mistakeEn:
      "Confusing servant leadership with absence of leadership — avoiding all decisions creates a vacuum, not autonomy.",
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
      "Proposez une action « service » concrète que Marie peut faire pour Helios sans micro-manager.",
    exercisePromptEn:
      "Propose one concrete “service” action Marie can take for Helios without micromanaging.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Quel comportement correspond le mieux au servant leadership sur Helios ?",
      promptEn:
        "Which behavior best matches servant leadership on Helios?",
      explanationCorrectFr:
        "Protéger le focus et négocier le cadre système sert l'équipe sans retirer sa responsabilité.",
      explanationCorrectEn:
        "Protecting focus and negotiating the system frame serves the team without removing responsibility.",
      difficulty: 2,
      options: [
        opt("Coder à la place de Thomas sur le module paiement", "Code payment module for Thomas", false, "Remplace l'expert.", "Replaces the expert."),
        opt("Négocier des plages focus et absorber un reporting non essentiel", "Negotiate focus blocks and absorb nonessential reporting", true),
        opt("Supprimer toute revue qualité pour « faire confiance »", "Remove all quality reviews to “trust”", false, "Retire les garde-fous.", "Removes safeguards."),
        opt("Refuser toute escalade au sponsor", "Refuse any sponsor escalation", false, "Peut laisser des obstacles politiques intacts.", "May leave political obstacles intact."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "coaching-and-mentoring",
    titleFr: "Coaching et mentoring en projet",
    titleEn: "Coaching and Mentoring in Projects",
    descriptionFr:
      "Distinguer accompagnement court terme (coaching) et transmission long terme (mentoring).",
    descriptionEn:
      "Distinguish short-term support (coaching) from long-term transmission (mentoring).",
    moduleSlug: MOD,
    sortOrder: 9,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-people",
    learningObjective: "APPLY",
    objectiveFr:
      "Choisir entre question de coaching, conseil direct ou mentoring selon le besoin de Léa sur Helios.",
    objectiveEn:
      "Choose between coaching question, direct advice, or mentoring based on Léa's need on Helios.",
    explanationFr:
      "Le coaching en projet vise à faire émerger la solution de la personne via questions ouvertes, feedback et objectifs SMART à court terme — utile quand la compétence existe mais la confiance ou la méthode manque. Le mentoring transmet expérience et réseau sur une durée plus longue, souvent hors urgence immédiate. Le conseil direct (« fais X ») a sa place en crise ou lorsque l'apprenant manque de base. Un chef de projet qui coach systématiquement en incident production perd du temps ; qui mentorise uniquement en standup 15 minutes n'approfondit rien. Adapter le mode d'accompagnement à la maturité et au contexte est la compétence clé.",
    explanationEn:
      "Project coaching aims to elicit the person's solution through open questions, feedback, and short-term SMART goals — useful when skill exists but confidence or method is missing. Mentoring transmits experience and network over a longer horizon, often outside immediate urgency. Direct advice (“do X”) fits crisis or missing fundamentals. A project manager who only coaches during a production incident wastes time; who only mentors in a 15-minute standup never goes deep. Adapting support mode to maturity and context is the key skill.",
    exampleFr:
      "Léa (QA junior) hésite à escalader un bug critique. Marie évite « envoie l'e-mail maintenant » et demande : « qu'est-ce qui te bloque ? quelle preuve as-tu ? » Léa rédige elle-même l'escalade ; Marie revoit le brouillon. Séparément, elle présente Léa à un mentor QA senior chez Nordia pour discussions trimestrielles carrière.",
    exampleEn:
      "Léa (junior QA) hesitates to escalate a critical bug. Marie avoids “send the email now” and asks: “what blocks you? what proof do you have?” Léa drafts the escalation herself; Marie reviews the draft. Separately, she introduces Léa to a senior QA mentor at Nordia for quarterly career talks.",
    practicalFr:
      "Préparez trois questions de coaching (ouvertes) pour un collègue bloqué sur une décision.",
    practicalEn:
      "Prepare three coaching questions (open) for a colleague stuck on a decision.",
    mistakeFr:
      "Donner la réponse immédiatement par impatience — cela crée dépendance et réduit l'apprentissage.",
    mistakeEn:
      "Giving the answer immediately out of impatience — it creates dependency and reduces learning.",
    takeawayFr:
      "Coaching = questions + autonomie court terme ; mentoring = transmission long terme ; conseil = urgence ou lacune de base.",
    takeawayEn:
      "Coaching = questions + short-term autonomy; mentoring = long-term transmission; advice = urgency or missing basics.",
    decisionFr:
      "En situation non urgente, posez une question avant de proposer votre solution.",
    decisionEn:
      "In non-urgent situations, ask a question before proposing your solution.",
    flashcardFrontFr: "Coaching vs mentoring",
    flashcardFrontEn: "Coaching vs mentoring",
    flashcardBackFr: "Coaching : faire émerger ; mentoring : transmettre sur la durée.",
    flashcardBackEn: "Coaching: elicit; mentoring: transmit over time.",
    exercisePromptFr:
      "Rédigez deux questions de coaching pour Léa sur l'escalade du bug critique.",
    exercisePromptEn:
      "Draft two coaching questions for Léa on escalating the critical bug.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Léa hésite à escalader un bug critique non urgent pour elle mais bloquant pour les ventes. Approche initiale ?",
      promptEn:
        "Léa hesitates to escalate a critical bug not urgent to her but blocking sales. Initial approach?",
      explanationCorrectFr:
        "Questions de coaching développent confiance et compétence d'escalade.",
      explanationCorrectEn:
        "Coaching questions build confidence and escalation skill.",
      difficulty: 2,
      options: [
        opt("Envoyer l'e-mail à sa place sans la consulter", "Send the email for her without consulting", false, "Crée dépendance.", "Creates dependency."),
        opt("Poser des questions ouvertes puis revoir son brouillon", "Ask open questions then review her draft", true),
        opt("Ignorer car non urgent pour QA", "Ignore because not urgent for QA", false, "Ignore l'impact ventes.", "Ignores sales impact."),
        opt("Planifier mentoring dans six mois seulement", "Schedule mentoring in six months only", false, "Ne résout pas le blocage actuel.", "Does not solve current block."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "motivation",
    titleFr: "Motivation de l'équipe",
    titleEn: "Team Motivation",
    descriptionFr:
      "Activer leviers intrinsèques et extrinsèques sans supposer que tout le monde est motivé pareil.",
    descriptionEn:
      "Activate intrinsic and extrinsic levers without assuming everyone is motivated the same way.",
    moduleSlug: MOD,
    sortOrder: 10,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-people",
    learningObjective: "APPLY",
    objectiveFr:
      "Identifier le levier dominant de deux profils différents et ajuster reconnaissance et feedback.",
    objectiveEn:
      "Identify the dominant lever for two different profiles and adjust recognition and feedback.",
    explanationFr:
      "La motivation combine facteurs intrinsèques (autonomie, maîtrise, sens du travail) et extrinsèques (reconnaissance, récompenses, visibilité). Thomas valorise la qualité technique et déteste les livraisons bâclées ; Amira est motivée par l'impact utilisateur visible ; Léa cherche de la progression de carrière. Appliquer la même recette — bonus générique ou compliment vague — produit des effets inégaux. Connecter chaque tâche au « pourquoi client », offrir des défis calibrés et reconnaître publiquement les contributions spécifiques renforce l'engagement durable. La démotivation survient souvent quand le effort invisible (tests, doc) n'est jamais vu.",
    explanationEn:
      "Motivation combines intrinsic factors (autonomy, mastery, purpose) and extrinsic ones (recognition, rewards, visibility). Thomas values technical quality and hates rushed delivery; Amira is driven by visible user impact; Léa seeks career progression. Applying the same recipe — generic bonus or vague praise — yields uneven effects. Connecting each task to client “why,” offering calibrated challenges, and publicly recognizing specific contributions strengthens sustainable engagement. Demotivation often hits when invisible effort (tests, docs) is never seen.",
    exampleFr:
      "Après un sprint difficile, Marie remercie Thomas publiquement pour les tests paiement qui ont évité une régression, montre à Amira une capture utilisateur positive sur le nouveau checkout, et propose à Léa de présenter son scénario de test au guild QA — trois reconnaissances ciblées au lieu d'un « bravo équipe » générique.",
    exampleEn:
      "After a hard sprint, Marie publicly thanks Thomas for payment tests that prevented regression, shows Amira a positive user screenshot on the new checkout, and offers Léa a slot to present her test scenario at the QA guild — three targeted recognitions instead of generic “great team.”",
    practicalFr:
      "Pour chaque membre clé, notez un levier intrinsèque probable et une reconnaissance concrète cette semaine.",
    practicalEn:
      "For each key member, note one likely intrinsic lever and one concrete recognition this week.",
    mistakeFr:
      "Supposer que tout le monde est motivé par la visibilité managériale — certains préfèrent la maîtrise technique discrète.",
    mistakeEn:
      "Assuming everyone is motivated by management visibility — some prefer quiet technical mastery.",
    takeawayFr:
      "Motivation personnalisée : connecter le travail au sens, calibrer le défi, voir l'invisible.",
    takeawayEn:
      "Personalized motivation: connect work to purpose, calibrate challenge, see the invisible.",
    decisionFr:
      "Avant un sprint, demandez à chacun : « qu'est-ce qui rendrait ce sprint satisfaisant pour toi ? »",
    decisionEn:
      "Before a sprint, ask each person: “what would make this sprint satisfying for you?”",
    flashcardFrontFr: "Motivation intrinsèque",
    flashcardFrontEn: "Intrinsic motivation",
    flashcardBackFr: "Autonomie, maîtrise, sens — au-delà des récompenses externes.",
    flashcardBackEn: "Autonomy, mastery, purpose — beyond external rewards.",
    exercisePromptFr:
      "Proposez une reconnaissance distincte pour Thomas, Amira et Léa après le sprint Helios.",
    exercisePromptEn:
      "Propose distinct recognition for Thomas, Amira, and Léa after the Helios sprint.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Thomas semble démotivé après une livraison bâclée imposée. Quelle action est la plus pertinente ?",
      promptEn:
        "Thomas seems demotivated after an imposed rushed delivery. Which action is most relevant?",
      explanationCorrectFr:
        "Reconnaître la qualité technique et replanifier la dette parle à sa motivation maîtrise/sens.",
      explanationCorrectEn:
        "Recognizing technical quality and replanning debt speaks to mastery/purpose motivation.",
      difficulty: 2,
      options: [
        opt("Ignorer — il est payé pour livrer", "Ignore — he is paid to deliver", false, "Ignore le levier intrinsèque.", "Ignores intrinsic lever."),
        opt("Reconnaître son travail qualité et planifier la dette avec critères", "Recognize quality work and plan debt with criteria", true),
        opt("Promettre un bonus sans changer le process", "Promise bonus without changing process", false, "Extrinsèque seul, problème structurel intact.", "Extrinsic only, structural issue intact."),
        opt("Le retirer du module paiement", "Remove him from payment module", false, "Punit sans adresser la cause.", "Punishes without addressing cause."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "psychological-safety",
    titleFr: "Sécurité psychologique en équipe projet",
    titleEn: "Psychological Safety on Project Teams",
    descriptionFr:
      "Créer un climat où l'équipe signale erreurs et désaccords sans crainte humiliante.",
    descriptionEn:
      "Create a climate where the team reports errors and disagreements without humiliating fear.",
    moduleSlug: MOD,
    sortOrder: 11,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-people",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Repérer trois signaux de faible sécurité psychologique et proposer une intervention concrète.",
    objectiveEn:
      "Spot three signals of low psychological safety and propose a concrete intervention.",
    explanationFr:
      "La sécurité psychologique ne signifie pas l'absence de conflit ni la complaisance : c'est la confiance qu'on peut prendre des risques interpersonnels — poser une question « bête », contredire une idée, admettre une erreur — sans punition humiliante. Sur un projet, son absence se voit quand les problèmes remontent tard, quand personne ne contredit le sponsor en réunion, ou quand les post-mortems blâment des individus au lieu des systèmes. Le chef de projet modélise la vulnérabilité (admettre une mauvaise estimation) et répond aux mauvaises nouvelles par « merci de l'avoir dit tôt » plutôt que par du blâme. Sans ce climat, les risques restent cachés jusqu'à la veille du go-live.",
    explanationEn:
      "Psychological safety does not mean no conflict or indulgence: it is trust that one can take interpersonal risks — ask a “dumb” question, challenge an idea, admit a mistake — without humiliating punishment. On a project, absence shows when problems surface late, no one contradicts the sponsor in meetings, or post-mortems blame individuals instead of systems. The project manager models vulnerability (admitting a bad estimate) and responds to bad news with “thanks for raising it early” rather than blame. Without this climate, risks stay hidden until go-live eve.",
    exampleFr:
      "Léa découvre un bug paiement en préprod mais craint d'être accusée de « casser le sprint ». Marie répond en standup : « merci Léa, c'est exactement le type de signal qu'on veut tôt » et lance un triage sans nommer de coupable. Deux sprints plus tard, Thomas admet une estimation optimiste — même accueil — et l'équipe ajuste le plan avant la foire.",
    exampleEn:
      "Léa finds a payment bug in preprod but fears being accused of “breaking the sprint.” Marie replies in standup: “thanks Léa, that's exactly the signal we want early” and starts triage without naming a culprit. Two sprints later Thomas admits an optimistic estimate — same welcome — and the team adjusts the plan before the trade show.",
    practicalFr:
      "Notez un signal de faible sécurité psychologique sur votre projet (silence, blâme, surprises tardives).",
    practicalEn:
      "Note one signal of low psychological safety on your project (silence, blame, late surprises).",
    mistakeFr:
      "Confondre sécurité psychologique et absence de standards — on peut exiger qualité et rester respectueux.",
    mistakeEn:
      "Confusing psychological safety with no standards — you can demand quality and stay respectful.",
    takeawayFr:
      "Accueillir tôt les mauvaises nouvelles réduit le coût des surprises tardives.",
    takeawayEn:
      "Welcoming bad news early reduces the cost of late surprises.",
    decisionFr:
      "Quand quelqu'un admet une erreur, commencez par « merci de l'avoir partagé » avant le plan correctif.",
    decisionEn:
      "When someone admits an error, start with “thanks for sharing” before the corrective plan.",
    flashcardFrontFr: "Sécurité psychologique",
    flashcardFrontEn: "Psychological safety",
    flashcardBackFr: "Prendre des risques interpersonnels sans peur humiliante — pas zéro exigence.",
    flashcardBackEn: "Take interpersonal risks without humiliating fear — not zero standards.",
    exercisePromptFr:
      "Rédigez la réponse de Marie au bug découvert par Léa en préservant la sécurité psychologique.",
    exercisePromptEn:
      "Draft Marie's response to Léa's bug while preserving psychological safety.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Personne ne contredit le sponsor en comité de pilotage malgré un risque évident. Cause probable ?",
      promptEn:
        "No one contradicts the sponsor in steering committee despite an obvious risk. Likely cause?",
      explanationCorrectFr:
        "Faible sécurité psychologique : peur de punition ou d'humiliation publique.",
      explanationCorrectEn:
        "Low psychological safety: fear of punishment or public humiliation.",
      difficulty: 2,
      options: [
        opt("Faible sécurité psychologique", "Low psychological safety", true),
        opt("Manque de compétence technique", "Lack of technical skill", false, "Le risque est « évident » — compétence probablement présente.", "Risk is “obvious” — skill likely present."),
        opt("Trop de documentation", "Too much documentation", false, "Sans lien direct avec le silence en COPIL.", "Not directly linked to steering silence."),
        opt("Excès de sécurité psychologique", "Excess psychological safety", false, "Excès mènerait à plus de parole, pas au silence.", "Excess would mean more speech, not silence."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "collaboration",
    titleFr: "Collaboration et travail d'équipe",
    titleEn: "Collaboration and Teamwork",
    descriptionFr:
      "Structurer la co-création transverse avec objectifs partagés, rituels et outils communs.",
    descriptionEn:
      "Structure cross-functional co-creation with shared goals, rituals, and common tools.",
    moduleSlug: MOD,
    sortOrder: 12,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-people",
    learningObjective: "APPLY",
    objectiveFr:
      "Mettre en place une règle de collaboration et un rituel pour réduire les handoffs flous sur Helios.",
    objectiveEn:
      "Set one collaboration rule and one ritual to reduce fuzzy handoffs on Helios.",
    explanationFr:
      "La collaboration efficace repose sur un objectif commun visible, des règles explicites (qui décide, délais de réponse, définition de terminé) et des outils partagés où l'état du travail est transparent. Les handoffs flous entre UX, dev et QA créent rework : maquettes « presque finales », code sans critères d'acceptation, tests découverts tard. La co-création avec les parties prenantes métier améliore l'acceptation — montrer tôt une démo partielle vaut mieux qu'un big bang. Le chef de projet facilite la collaboration sans devenir le goulot : il arbitre les priorités quand les règles ne suffisent plus.",
    explanationEn:
      "Effective collaboration rests on a visible shared goal, explicit rules (who decides, response times, definition of done), and shared tools where work state is transparent. Fuzzy handoffs between UX, dev, and QA create rework: “almost final” mockups, code without acceptance criteria, tests discovered late. Co-creation with business stakeholders improves acceptance — showing an early partial demo beats a big bang. The project manager facilitates collaboration without becoming the bottleneck: they arbitrate priorities when rules are insufficient.",
    exampleFr:
      "Marie installe une Definition of Ready Helios : ticket impossible à prendre sans critères d'acceptation UX+QA signés. Chaque mercredi, démo de 30 minutes ouverte au support client — Amira présente le parcours, Thomas les limites techniques, feedback capturé dans le backlog commun.",
    exampleEn:
      "Marie installs a Helios Definition of Ready: no ticket without UX+QA signed acceptance criteria. Every Wednesday, 30-minute demo open to customer support — Amira shows the journey, Thomas the technical limits, feedback captured in the shared backlog.",
    practicalFr:
      "Rédigez une Definition of Ready en cinq bullet points pour votre équipe.",
    practicalEn:
      "Draft a five-bullet Definition of Ready for your team.",
    mistakeFr:
      "Multiplier les outils sans accord : Slack, mail, Jira, Notion sans règle « source de vérité » recrée la confusion.",
    mistakeEn:
      "Multiplying tools without agreement: Slack, email, Jira, Notion with no “source of truth” rule recreates confusion.",
    takeawayFr:
      "Collaboration = objectif commun + règles de handoff + démos tôt avec parties prenantes.",
    takeawayEn:
      "Collaboration = shared goal + handoff rules + early demos with stakeholders.",
    decisionFr:
      "Si le rework dépasse 20 % du sprint, auditez les handoffs UX/dev/QA avant d'ajouter des développeurs.",
    decisionEn:
      "If rework exceeds 20% of the sprint, audit UX/dev/QA handoffs before adding developers.",
    flashcardFrontFr: "Definition of Ready",
    flashcardFrontEn: "Definition of Ready",
    flashcardBackFr: "Critères minimums avant qu'un ticket entre en développement.",
    flashcardBackEn: "Minimum criteria before a ticket enters development.",
    exercisePromptFr:
      "Listez deux règles de handoff entre Amira (UX) et Thomas (dev) sur Helios.",
    exercisePromptEn:
      "List two handoff rules between Amira (UX) and Thomas (dev) on Helios.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Rework élevé entre maquettes et développement sur Helios. Première intervention ?",
      promptEn:
        "High rework between mockups and development on Helios. First intervention?",
      explanationCorrectFr:
        "Definition of Ready et critères d'acceptation clarifient les handoffs.",
      explanationCorrectEn:
        "Definition of Ready and acceptance criteria clarify handoffs.",
      difficulty: 2,
      options: [
        opt("Embaucher deux développeurs supplémentaires", "Hire two more developers", false, "Sans règles, le rework persiste.", "Without rules, rework persists."),
        opt("Definition of Ready avec critères UX/QA signés", "Definition of Ready with signed UX/QA criteria", true),
        opt("Supprimer la phase UX", "Remove UX phase", false, "Aggrave qualité et acceptation.", "Worsens quality and acceptance."),
        opt("Interdire toute démo intermédiaire", "Ban all intermediate demos", false, "Réduit feedback tôt.", "Reduces early feedback."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "distributed-teams",
    titleFr: "Équipes distribuées et remote",
    titleEn: "Distributed and Remote Teams",
    descriptionFr:
      "Piloter des équipes multi-fuseaux avec clarté asynchrone, rituels et inclusion.",
    descriptionEn:
      "Lead multi-timezone teams with async clarity, rituals, and inclusion.",
    moduleSlug: MOD,
    sortOrder: 13,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "pmp-people",
    learningObjective: "DECIDE",
    objectiveFr:
      "Concevoir une semaine type pour une équipe Helios distribuée (Montréal, Paris, Casablanca) limitant la fatigue de réunion.",
    objectiveEn:
      "Design a typical week for a distributed Helios team (Montreal, Paris, Casablanca) limiting meeting fatigue.",
    explanationFr:
      "Les équipes distribuées combinent défis de fuseaux horaires, de communication asynchrone et de sentiment d'exclusion (« équipe du bureau principal » vs autres). Documenter décisions, enregistrer les démos, écrire des comptes-rendus actionnables et définir des plages de chevauchement limitées réduit la fatigue. Les réunions synchrones coûteuses doivent avoir un objectif clair ; le reste vit dans des tickets et documents versionnés. L'inclusion exige de tourner les horaires pénibles et de mesurer qui parle en réunion — certains profils se taisent faute de canal adapté. Un chef de projet avancé choisit explicitement le mode async vs sync pour chaque type de décision.",
    explanationEn:
      "Distributed teams combine timezone, async communication, and exclusion challenges (“head office team” vs others). Documenting decisions, recording demos, writing actionable summaries, and defining limited overlap windows reduce fatigue. Costly synchronous meetings need clear purpose; the rest lives in tickets and versioned docs. Inclusion requires rotating painful hours and noticing who speaks in meetings — some profiles stay silent without a suited channel. An advanced project manager explicitly chooses async vs sync mode for each decision type.",
    exampleFr:
      "Helios s'étend : Thomas à Montréal, Amira à Paris, Léa à Casablanca. Marie fixe un overlap de 90 minutes (14h–15h30 Paris), standup async écrit dans Slack avec template, décisions dans un log Notion horodaté, démo enregistrée pour ceux absents. Les revues lourdes alternent horaire favorable chaque mois — personne n'est toujours à minuit.",
    exampleEn:
      "Helios expands: Thomas in Montreal, Amira in Paris, Léa in Casablanca. Marie sets 90-minute overlap (2–3:30 p.m. Paris), async written standup in Slack with template, decisions in a timestamped Notion log, demo recorded for absentees. Heavy reviews rotate favorable hours monthly — no one is always at midnight.",
    practicalFr:
      "Cartographiez fuseaux de votre équipe et proposez une fenêtre overlap + un rituel async.",
    practicalEn:
      "Map your team timezones and propose one overlap window + one async ritual.",
    mistakeFr:
      "Planifier toutes les réunions à l'heure du bureau principal — épuise les sites distants et crée une classe B.",
    mistakeEn:
      "Scheduling all meetings at head office hours — exhausts remote sites and creates a B-team.",
    takeawayFr:
      "Distribué = overlap limité + async documenté + rotation des horaires pénibles.",
    takeawayEn:
      "Distributed = limited overlap + documented async + rotation of painful hours.",
    decisionFr:
      "Avant d'ajouter une réunion sync multi-sites, demandez si une décision async documentée suffit.",
    decisionEn:
      "Before adding a multi-site sync meeting, ask if a documented async decision suffices.",
    flashcardFrontFr: "Overlap horaire",
    flashcardFrontEn: "Time overlap",
    flashcardBackFr: "Plage courte où sync a du sens — le reste en async traçable.",
    flashcardBackEn: "Short window where sync makes sense — rest in traceable async.",
    exercisePromptFr:
      "Proposez un template de standup async en quatre lignes pour Helios distribué.",
    exercisePromptEn:
      "Propose a four-line async standup template for distributed Helios.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "L'équipe Helios couvre trois fuseaux. Quelle pratique réduit le mieux la fatigue et l'exclusion ?",
      promptEn:
        "Helios spans three timezones. Which practice best reduces fatigue and exclusion?",
      explanationCorrectFr:
        "Overlap limité, async documenté et rotation des horaires pénibles équilibrent inclusion et efficacité.",
      explanationCorrectEn:
        "Limited overlap, documented async, and rotating painful hours balance inclusion and efficiency.",
      difficulty: 3,
      options: [
        opt("Daily standup sync à 8h heure Paris toute l'année", "Daily sync standup at 8 a.m. Paris year-round", false, "Pénalise toujours les mêmes sites.", "Always penalizes same sites."),
        opt("Overlap court + standup async + rotation des revues lourdes", "Short overlap + async standup + rotating heavy reviews", true),
        opt("Zéro documentation — tout en appel improvisé", "Zero documentation — all improvised calls", false, "Exclut les absents et crée amnésie.", "Excludes absentees and creates amnesia."),
        opt("Dissoudre les sites distants", "Disband remote sites", false, "Ignore la réalité distribuée.", "Ignores distributed reality."),
      ],
    }),
  }),
];
