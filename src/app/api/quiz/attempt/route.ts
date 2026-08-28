import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { recordQuizAttempt, computeQuizScore } from "@/modules/assessment-engine/scoring-service";
import { parseConfidenceInput } from "@/modules/mastery-engine/confidence";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import prisma from "@/data/prisma-client";

const confidenceLevelSchema = z.union([
  z.number().int().min(1).max(5),
  z.enum(["VERY_LOW", "LOW", "MEDIUM", "HIGH", "VERY_HIGH"]),
]);

const bodySchema = z.object({
  learningItemId: z.string(),
  answers: z.array(
    z.object({
      questionId: z.string(),
      selectedOptionIds: z.array(z.string()),
      confidenceLevel: confidenceLevelSchema.optional(),
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

  for (const a of answers) {
    if (a.confidenceLevel != null && parseConfidenceInput(a.confidenceLevel) == null) {
      return NextResponse.json({ error: "Invalid confidence level" }, { status: 400 });
    }
  }

  const results = await Promise.all(
    answers.map(async (a) => {
      const confidence = parseConfidenceInput(a.confidenceLevel);

      const { attempt, validation } = await recordQuizAttempt(
        session.user.id,
        a.questionId,
        a.selectedOptionIds,
        learningItemId,
        confidence
      );
      const question = await prisma.question.findUnique({
        where: { id: a.questionId },
        include: { answerOptions: { orderBy: { sortOrder: "asc" } }, skill: true },
      });
      return {
        attemptId: attempt.id,
        questionId: a.questionId,
        isCorrect: validation.isCorrect,
        score: validation.score,
        correctOptionIds: validation.correctOptionIds,
        selectedOptionIds: a.selectedOptionIds,
        confidenceLevel: confidence,
        question,
      };
    })
  );

  const masteryResult = await processQuizMasteryForAttempts(
    session.user.id,
    results.map((r) => r.attemptId)
  );

  const overallScore = computeQuizScore(
    results.map((r) => ({ isCorrect: r.isCorrect, score: r.score, correctOptionIds: r.correctOptionIds }))
  );

  return NextResponse.json({
    score: overallScore,
    results,
    skillSnapshots: masteryResult.skillSnapshots,
  });
}
