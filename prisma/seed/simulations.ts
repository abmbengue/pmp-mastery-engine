import type { PrismaClient } from "../../src/generated/prisma/client";
import { SIMULATION_CATALOG } from "../../src/modules/simulation-engine/simulation-service";
import type { SimulationType } from "../../src/modules/simulation-engine/types";

const COPY: Record<
  SimulationType,
  {
    titleFr: string;
    titleEn: string;
    descriptionFr: string;
    descriptionEn: string;
    whatIsThisFr: string;
    whatIsThisEn: string;
    howItWorksFr: string;
    howItWorksEn: string;
    whatToNoticeFr: string;
    whatToNoticeEn: string;
  }
> = {
  COMPOUND_INTEREST: {
    titleFr: "Simulateur d'intérêt composé",
    titleEn: "Compound Interest Simulator",
    descriptionFr: "Modifiez taux, durée et cotisations pour observer la croissance.",
    descriptionEn: "Change rate, duration, and contributions to observe growth.",
    whatIsThisFr: "Comprendre la capitalisation dans le temps.",
    whatIsThisEn: "Understand compounding over time.",
    howItWorksFr: "Les intérêts s'ajoutent au capital chaque mois.",
    howItWorksEn: "Interest is added to the balance each month.",
    whatToNoticeFr: "Que se passe-t-il si le taux augmente ?",
    whatToNoticeEn: "What happens when the rate increases?",
  },
  BUDGET: {
    titleFr: "Simulateur de budget",
    titleEn: "Budget Simulator",
    descriptionFr: "Allouez un revenu et observez le taux d'épargne.",
    descriptionEn: "Allocate income and observe the savings rate.",
    whatIsThisFr: "Visualiser surplus ou déficit.",
    whatIsThisEn: "Visualize surplus or deficit.",
    howItWorksFr: "Reste = revenu − dépenses.",
    howItWorksEn: "Remaining = income − expenses.",
    whatToNoticeFr: "Essayez d'atteindre 20 % d'épargne.",
    whatToNoticeEn: "Try reaching a 20% savings rate.",
  },
  DEBT_REPAYMENT: {
    titleFr: "Simulateur de remboursement de dette",
    titleEn: "Debt Repayment Simulator",
    descriptionFr: "Comparez deux paiements mensuels.",
    descriptionEn: "Compare two monthly payments.",
    whatIsThisFr: "Estimer durée et intérêts.",
    whatIsThisEn: "Estimate duration and interest.",
    howItWorksFr: "Intérêts puis paiement chaque mois.",
    howItWorksEn: "Interest then payment each month.",
    whatToNoticeFr: "Combien d'intérêts économisés avec un paiement plus élevé ?",
    whatToNoticeEn: "How much interest is saved with a higher payment?",
  },
  VALUATION_MULTIPLES: {
    titleFr: "Simulateur de multiples",
    titleEn: "Valuation Multiples Simulator",
    descriptionFr: "EV = EBITDA × multiple (outil pédagogique).",
    descriptionEn: "EV = EBITDA × multiple (educational tool).",
    whatIsThisFr: "Lier un multiple à EV et Equity Value.",
    whatIsThisEn: "Link a multiple to EV and Equity Value.",
    howItWorksFr: "Equity Value = EV − dette nette.",
    howItWorksEn: "Equity Value = EV − net debt.",
    whatToNoticeFr: "Comment le multiple change-t-il l'EV ?",
    whatToNoticeEn: "How does the multiple change EV?",
  },
  DCF_BASICS: {
    titleFr: "Simulateur DCF (bases)",
    titleEn: "DCF Basics Simulator",
    descriptionFr: "Actualisez des FCF et une valeur terminale.",
    descriptionEn: "Discount FCFs and a terminal value.",
    whatIsThisFr: "Introduction pédagogique au DCF.",
    whatIsThisEn: "Pedagogical introduction to DCF.",
    howItWorksFr: "VA des FCF + VA de la valeur terminale.",
    howItWorksEn: "PV of FCF + PV of terminal value.",
    whatToNoticeFr: "Que se passe-t-il si le WACC augmente ?",
    whatToNoticeEn: "What happens when WACC increases?",
  },
};

export async function seedSimulationItems(prisma: PrismaClient) {
  for (const entry of SIMULATION_CATALOG) {
    const lesson = await prisma.lesson.findFirst({
      where: {
        slug: entry.lessonSlug,
        module: {
          slug: entry.moduleSlug,
          course: {
            slug: entry.courseSlug,
            academy: { slug: entry.academySlug },
          },
        },
      },
      include: { learningItems: true },
    });
    if (!lesson) continue;

    const already = lesson.learningItems.some((item) => {
      if (item.type !== "SIMULATION") return false;
      const payload = item.payload as { simulationType?: string };
      return payload.simulationType === entry.type;
    });
    if (already) continue;

    const copy = COPY[entry.type];
    const maxOrder = lesson.learningItems.reduce((m, i) => Math.max(m, i.sortOrder), 0);

    await prisma.learningItem.create({
      data: {
        lessonId: lesson.id,
        type: "SIMULATION",
        sortOrder: maxOrder + 1,
        difficulty: entry.difficulty === "ADVANCED" ? 3 : entry.difficulty === "INTERMEDIATE" ? 2 : 1,
        payload: {
          simulationType: entry.type,
          titleFr: copy.titleFr,
          titleEn: copy.titleEn,
          descriptionFr: copy.descriptionFr,
          descriptionEn: copy.descriptionEn,
          difficulty: entry.difficulty,
          estimatedMinutes: entry.estimatedMinutes,
          configuration: {},
          isPlaceholder: false,
          whatIsThisFr: copy.whatIsThisFr,
          whatIsThisEn: copy.whatIsThisEn,
          howItWorksFr: copy.howItWorksFr,
          howItWorksEn: copy.howItWorksEn,
          whatToNoticeFr: copy.whatToNoticeFr,
          whatToNoticeEn: copy.whatToNoticeEn,
        },
      },
    });
  }
}
