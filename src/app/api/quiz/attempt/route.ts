import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { recordQuizAttempt, computeQuizScore } from "@/modules/assessment-engine/scoring-service";
import prisma from "@/data/prisma-client";

const bodySchema = z.object({
  learningItemId: z.string(),
  answers: z.array(
    z.object({
      questionId: z.string(),
      selectedOptionIds: z.array(z.string()),
    })
  ),
});

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const raw = await request.json();
  const parsed = bodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  const { learningItemId, answers } = parsed.data;

  const results = await Promise.all(
    answers.map(async (a) => {
      const { validation } = await recordQuizAttempt(
        session.user.id,
        a.questionId,
        a.selectedOptionIds,
        learningItemId
      );
      const question = await prisma.question.findUnique({
        where: { id: a.questionId },
        include: { answerOptions: { orderBy: { sortOrder: "asc" } }, skill: true },
      });
      return {
        questionId: a.questionId,
        isCorrect: validation.isCorrect,
        score: validation.score,
        correctOptionIds: validation.correctOptionIds,
        selectedOptionIds: a.selectedOptionIds,
        question,
      };
    })
  );

  const overallScore = computeQuizScore(
    results.map((r) => ({ isCorrect: r.isCorrect, score: r.score, correctOptionIds: r.correctOptionIds }))
  );

  return NextResponse.json({ score: overallScore, results });
}
