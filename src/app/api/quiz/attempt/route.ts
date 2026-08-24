import { NextResponse } from "next/server";
import { z } from "zod";
import { findUserByEmail } from "@/data/repositories/user-repository";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import { computeQuizScore } from "@/modules/assessment-engine/scoring-service";
import prisma from "@/data/prisma-client";

const bodySchema = z.object({
  userEmail: z.string().email(),
  learningItemId: z.string(),
  answers: z.array(
    z.object({
      questionId: z.string(),
      selectedOptionIds: z.array(z.string()),
    })
  ),
});

export async function POST(request: Request) {
  const raw = await request.json();
  const parsed = bodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  const { userEmail, learningItemId, answers } = parsed.data;

  const user = await findUserByEmail(userEmail);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const results = await Promise.all(
    answers.map(async (a) => {
      const { validation } = await recordQuizAttempt(
        user.id,
        a.questionId,
        a.selectedOptionIds,
        learningItemId
      );
      // Fetch options for explanation
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

  const overallScore = computeQuizScore(results.map((r) => ({ isCorrect: r.isCorrect, score: r.score, correctOptionIds: r.correctOptionIds })));

  return NextResponse.json({ score: overallScore, results });
}
