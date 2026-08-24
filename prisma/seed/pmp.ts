import type { PrismaClient } from "../../src/generated/prisma/client";
import { seedLessonWithContent, upsertSkill, type LessonSeedConfig } from "./helpers";

const MODULE_1_LESSONS: LessonSeedConfig[] = [
  {
    slug: "what-is-project-management",
    titleFr: "Qu'est-ce que la gestion de projet ?",
    titleEn: "What is Project Management?",
    descriptionFr: "Découvrez la définition et les objectifs de la gestion de projet.",
    descriptionEn: "Discover the definition and objectives of project management.",
    sortOrder: 0,
    estimatedMinutes: 8,
    learnMinutes: 3,
    practiceMinutes: 2,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "Un projet est une entreprise temporaire visant à créer un produit, service ou résultat unique. La gestion de projet applique connaissances, compétences, outils et techniques pour atteindre les objectifs du projet.",
    textBodyEn:
      "A project is a temporary endeavor to create a unique product, service, or result. Project management applies knowledge, skills, tools, and techniques to achieve project objectives.",
    videoTitleFr: "Introduction à la gestion de projet",
    videoTitleEn: "Introduction to Project Management",
    flashcardFrontFr: "Projet",
    flashcardFrontEn: "Project",
    flashcardBackFr: "Entreprise temporaire créant un résultat unique.",
    flashcardBackEn: "Temporary endeavor creating a unique result.",
    exercisePromptFr: "Identifiez un projet et une opération courante dans votre organisation.",
    exercisePromptEn: "Identify one project and one ongoing operation in your organization.",
    question: {
      type: "SINGLE_CHOICE",
      promptFr: "Quelle caractéristique distingue un projet d'une opération courante ?",
      promptEn: "Which characteristic distinguishes a project from ongoing operations?",
      explanationCorrectFr: "Un projet est temporaire et produit un résultat unique.",
      explanationCorrectEn: "A project is temporary and produces a unique result.",
      difficulty: 1,
      options: [
        { labelFr: "Il est permanent", labelEn: "It is permanent", isCorrect: false },
        { labelFr: "Il est temporaire et unique", labelEn: "It is temporary and unique", isCorrect: true },
        { labelFr: "Il n'a pas d'objectif", labelEn: "It has no objective", isCorrect: false },
      ],
    },
  },
  {
    slug: "project-roles",
    titleFr: "Rôles et responsabilités",
    titleEn: "Project Roles and Responsibilities",
    descriptionFr: "Comprenez les rôles clés dans un projet.",
    descriptionEn: "Understand key roles in a project.",
    sortOrder: 1,
    estimatedMinutes: 8,
    learnMinutes: 3,
    practiceMinutes: 2,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "Les rôles essentiels incluent le sponsor (finance et soutien), le chef de projet (coordination quotidienne) et l'équipe projet (exécution). Chaque rôle a des responsabilités distinctes.",
    textBodyEn:
      "Essential roles include the sponsor (funding and support), the project manager (day-to-day coordination), and the project team (execution). Each role has distinct responsibilities.",
    videoTitleFr: "Les rôles dans un projet",
    videoTitleEn: "Roles in a Project",
    flashcardFrontFr: "Sponsor",
    flashcardFrontEn: "Sponsor",
    flashcardBackFr: "Personne qui fournit ressources et soutien au projet.",
    flashcardBackEn: "Person who provides resources and support for the project.",
    exercisePromptFr: "Décrivez le rôle du chef de projet dans un projet que vous connaissez.",
    exercisePromptEn: "Describe the project manager's role in a project you know.",
    question: {
      type: "TRUE_FALSE",
      promptFr: "Le sponsor est responsable de la coordination quotidienne du projet.",
      promptEn: "The sponsor is responsible for day-to-day project coordination.",
      explanationCorrectFr: "Faux. La coordination quotidienne est du ressort du chef de projet.",
      explanationCorrectEn: "False. Day-to-day coordination is the project manager's responsibility.",
      difficulty: 1,
      options: [
        { labelFr: "Vrai", labelEn: "True", isCorrect: false },
        { labelFr: "Faux", labelEn: "False", isCorrect: true },
      ],
    },
  },
  {
    slug: "project-lifecycle",
    titleFr: "Cycle de vie du projet",
    titleEn: "Project Lifecycle Overview",
    descriptionFr: "Explorez les phases typiques d'un projet.",
    descriptionEn: "Explore the typical phases of a project.",
    sortOrder: 2,
    estimatedMinutes: 10,
    learnMinutes: 3,
    practiceMinutes: 3,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "Un cycle de vie de projet comprend généralement : initiation, planification, exécution, suivi/contrôle et clôture. Ces phases peuvent varier selon la méthodologie utilisée.",
    textBodyEn:
      "A project lifecycle typically includes: initiating, planning, executing, monitoring/controlling, and closing. These phases may vary depending on the methodology used.",
    videoTitleFr: "Phases du cycle de vie",
    videoTitleEn: "Lifecycle Phases",
    flashcardFrontFr: "Clôture",
    flashcardFrontEn: "Closing",
    flashcardBackFr: "Phase finale : livraison, documentation et leçons apprises.",
    flashcardBackEn: "Final phase: delivery, documentation, and lessons learned.",
    exercisePromptFr: "Placez ces activités dans la bonne phase : rédiger le plan, livrer le produit, obtenir l'autorisation.",
    exercisePromptEn: "Place these activities in the correct phase: write the plan, deliver the product, obtain authorization.",
    question: {
      type: "SINGLE_CHOICE",
      promptFr: "Quelle phase inclut la réalisation du plan de management de projet ?",
      promptEn: "Which phase includes developing the project management plan?",
      explanationCorrectFr: "La planification est la phase où le plan de management est élaboré.",
      explanationCorrectEn: "Planning is the phase where the management plan is developed.",
      difficulty: 2,
      options: [
        { labelFr: "Initiation", labelEn: "Initiating", isCorrect: false },
        { labelFr: "Planification", labelEn: "Planning", isCorrect: true },
        { labelFr: "Clôture", labelEn: "Closing", isCorrect: false },
      ],
    },
  },
];

const MODULE_2_LESSONS: LessonSeedConfig[] = [
  {
    slug: "predictive-vs-adaptive",
    titleFr: "Approches prédictives vs adaptatives",
    titleEn: "Predictive vs Adaptive Approaches",
    descriptionFr: "Comparez les approches prédictives et adaptatives en gestion de projet.",
    descriptionEn: "Compare predictive and adaptive approaches in project management.",
    sortOrder: 0,
    estimatedMinutes: 10,
    learnMinutes: 3,
    practiceMinutes: 3,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "L'approche prédictive planifie en détail en amont. L'approche adaptative (agile) itère par cycles courts avec des retours fréquents. Le choix dépend de l'incertitude et de la stabilité des exigences.",
    textBodyEn:
      "The predictive approach plans in detail upfront. The adaptive (agile) approach iterates in short cycles with frequent feedback. The choice depends on uncertainty and requirements stability.",
    videoTitleFr: "Prédictif vs adaptatif",
    videoTitleEn: "Predictive vs Adaptive",
    flashcardFrontFr: "Approche adaptative",
    flashcardFrontEn: "Adaptive approach",
    flashcardBackFr: "Itérations courtes avec retours fréquents (ex. Scrum).",
    flashcardBackEn: "Short iterations with frequent feedback (e.g. Scrum).",
    exercisePromptFr: "Identifiez quel type de projet convient à une approche adaptative.",
    exercisePromptEn: "Identify which type of project suits an adaptive approach.",
    question: {
      type: "SINGLE_CHOICE",
      promptFr: "Quand l'approche adaptative est-elle généralement préférable ?",
      promptEn: "When is the adaptive approach generally preferred?",
      explanationCorrectFr: "L'adaptatif convient quand les exigences évoluent et l'incertitude est élevée.",
      explanationCorrectEn: "Adaptive suits when requirements evolve and uncertainty is high.",
      difficulty: 2,
      options: [
        { labelFr: "Exigences stables et bien définies", labelEn: "Stable and well-defined requirements", isCorrect: false },
        { labelFr: "Exigences changeantes et incertitude élevée", labelEn: "Changing requirements and high uncertainty", isCorrect: true },
        { labelFr: "Projet sans équipe", labelEn: "Project without a team", isCorrect: false },
      ],
    },
  },
  {
    slug: "agile-principles",
    titleFr: "Principes agiles",
    titleEn: "Agile Principles",
    descriptionFr: "Découvrez les principes fondamentaux des méthodes agiles.",
    descriptionEn: "Discover the fundamental principles of agile methods.",
    sortOrder: 1,
    estimatedMinutes: 10,
    learnMinutes: 3,
    practiceMinutes: 3,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "Les méthodes agiles valorisent les individus, la collaboration, la réponse au changement et la livraison fréquente de valeur. Scrum et Kanban sont des cadres populaires basés sur ces principes.",
    textBodyEn:
      "Agile methods value individuals, collaboration, responding to change, and frequent value delivery. Scrum and Kanban are popular frameworks based on these principles.",
    videoTitleFr: "Principes agiles",
    videoTitleEn: "Agile Principles",
    flashcardFrontFr: "Itération (Sprint)",
    flashcardFrontEn: "Iteration (Sprint)",
    flashcardBackFr: "Cycle de travail fixe produisant un incrément de valeur.",
    flashcardBackEn: "Fixed work cycle producing an increment of value.",
    exercisePromptFr: "Comparez Scrum et Kanban en une phrase chacun.",
    exercisePromptEn: "Compare Scrum and Kanban in one sentence each.",
    question: {
      type: "MULTIPLE_CHOICE",
      promptFr: "Quels éléments sont associés à Scrum ? (Plusieurs réponses)",
      promptEn: "Which elements are associated with Scrum? (Multiple answers)",
      explanationCorrectFr: "Scrum utilise des sprints, des rôles définis et des cérémonies régulières.",
      explanationCorrectEn: "Scrum uses sprints, defined roles, and regular ceremonies.",
      difficulty: 2,
      options: [
        { labelFr: "Sprints", labelEn: "Sprints", isCorrect: true },
        { labelFr: "Product Owner", labelEn: "Product Owner", isCorrect: true },
        { labelFr: "Plan détaillé sur 2 ans", labelEn: "Detailed 2-year plan", isCorrect: false },
        { labelFr: "Daily standup", labelEn: "Daily standup", isCorrect: true },
      ],
    },
  },
  {
    slug: "hybrid-project-management",
    titleFr: "Gestion de projet hybride",
    titleEn: "Hybrid Project Management",
    descriptionFr: "Comprenez comment combiner approches prédictives et adaptatives.",
    descriptionEn: "Understand how to combine predictive and adaptive approaches.",
    sortOrder: 2,
    estimatedMinutes: 8,
    learnMinutes: 3,
    practiceMinutes: 2,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "L'approche hybride combine planification prédictive pour certaines parties et exécution agile pour d'autres. C'est courant dans les projets complexes avec des composants variés.",
    textBodyEn:
      "The hybrid approach combines predictive planning for some parts and agile execution for others. It is common in complex projects with varied components.",
    videoTitleFr: "Approche hybride",
    videoTitleEn: "Hybrid Approach",
    flashcardFrontFr: "Hybride",
    flashcardFrontEn: "Hybrid",
    flashcardBackFr: "Combinaison d'approches prédictives et adaptatives dans un même projet.",
    flashcardBackEn: "Combination of predictive and adaptive approaches in one project.",
    exercisePromptFr: "Proposez un exemple de projet utilisant une approche hybride.",
    exercisePromptEn: "Propose an example of a project using a hybrid approach.",
    question: {
      type: "TRUE_FALSE",
      promptFr: "L'approche hybride permet de combiner planification détaillée et itérations courtes.",
      promptEn: "The hybrid approach allows combining detailed planning and short iterations.",
      explanationCorrectFr: "Vrai. C'est précisément l'objectif de l'approche hybride.",
      explanationCorrectEn: "True. That is precisely the goal of the hybrid approach.",
      difficulty: 1,
      options: [
        { labelFr: "Vrai", labelEn: "True", isCorrect: true },
        { labelFr: "Faux", labelEn: "False", isCorrect: false },
      ],
    },
  },
];

export async function seedPmp(prisma: PrismaClient) {
  const academy = await prisma.academy.upsert({
    where: { slug: "pmp-project-management" },
    create: {
      slug: "pmp-project-management",
      titleFr: "PMP / Gestion de Projet",
      titleEn: "PMP / Project Management",
      descriptionFr: "Préparez-vous à la certification PMP avec du contenu pédagogique original.",
      descriptionEn: "Prepare for PMP certification with original educational content.",
      status: "ACTIVE",
      sortOrder: 1,
    },
    update: { status: "ACTIVE" },
  });

  const course = await prisma.course.upsert({
    where: { academyId_slug: { academyId: academy.id, slug: "foundations" } },
    create: {
      academyId: academy.id,
      slug: "foundations",
      titleFr: "Fondamentaux PMP",
      titleEn: "PMP Foundations",
      descriptionFr: "Parcours introductif à la gestion de projet et à la préparation PMP.",
      descriptionEn: "Introductory path to project management and PMP preparation.",
      sortOrder: 0,
      estimatedMinutes: 50,
    },
    update: {},
  });

  const skillFoundations = await upsertSkill(prisma, {
    slug: "pmp-foundations",
    titleFr: "Fondamentaux gestion de projet",
    titleEn: "Project management foundations",
  });

  const skillPeople = await upsertSkill(prisma, {
    slug: "pmp-people",
    titleFr: "People",
    titleEn: "People",
  });

  const skillProcess = await upsertSkill(prisma, {
    slug: "pmp-process",
    titleFr: "Process",
    titleEn: "Process",
  });

  const skillBusinessEnv = await upsertSkill(prisma, {
    slug: "pmp-business-environment",
    titleFr: "Environnement business",
    titleEn: "Business Environment",
  });

  const skillMethodologies = await upsertSkill(prisma, {
    slug: "pmp-methodologies",
    titleFr: "Méthodologies de projet",
    titleEn: "Project methodologies",
  });

  const skillAgile = await upsertSkill(prisma, {
    slug: "pmp-agile",
    titleFr: "Agile",
    titleEn: "Agile",
  });

  const skillHybrid = await upsertSkill(prisma, {
    slug: "pmp-hybrid",
    titleFr: "Hybride",
    titleEn: "Hybrid",
  });

  const skillSituational = await upsertSkill(prisma, {
    slug: "pmp-situational-thinking",
    titleFr: "Pensée situationnelle",
    titleEn: "Situational Thinking",
  });

  const module1 = await prisma.module.create({
    data: {
      courseId: course.id,
      slug: "pm-foundations",
      titleFr: "Fondamentaux de la gestion de projet",
      titleEn: "Project Management Foundations",
      descriptionFr: "People, Process et Business Environment — définitions, rôles et cycle de vie.",
      descriptionEn: "People, Process, and Business Environment — definitions, roles, and lifecycle.",
      category: "PROCESS",
      sortOrder: 0,
      estimatedMinutes: 26,
    },
  });

  for (const lessonConfig of MODULE_1_LESSONS) {
    const extras =
      lessonConfig.slug === "project-roles"
        ? [skillPeople.id]
        : lessonConfig.slug === "project-lifecycle"
          ? [skillProcess.id, skillBusinessEnv.id]
          : [skillProcess.id];
    await seedLessonWithContent(prisma, module1.id, skillFoundations.id, {
      ...lessonConfig,
      difficulty: "BEGINNER",
      isShort: lessonConfig.slug === "what-is-project-management",
      shortTopic: "project-management",
      shortDurationSeconds: 155,
    }, {
      academySlug: "pmp-project-management",
      extraSkillIds: extras,
    });
  }

  const module2 = await prisma.module.create({
    data: {
      courseId: course.id,
      slug: "methodologies",
      titleFr: "Méthodologies et approches",
      titleEn: "Methodologies & Approaches",
      descriptionFr: "Agile, hybride et pensée situationnelle.",
      descriptionEn: "Agile, hybrid, and situational thinking.",
      category: "AGILE",
      sortOrder: 1,
      estimatedMinutes: 26,
    },
  });

  for (const lessonConfig of MODULE_2_LESSONS) {
    const extras =
      lessonConfig.slug === "agile-principles"
        ? [skillAgile.id]
        : lessonConfig.slug === "hybrid-project-management"
          ? [skillHybrid.id, skillSituational.id]
          : [skillAgile.id];
    await seedLessonWithContent(prisma, module2.id, skillMethodologies.id, {
      ...lessonConfig,
      difficulty: lessonConfig.slug === "hybrid-project-management" ? "INTERMEDIATE" : "BEGINNER",
    }, {
      academySlug: "pmp-project-management",
      extraSkillIds: extras,
    });
  }

  return { academy, course };
}
