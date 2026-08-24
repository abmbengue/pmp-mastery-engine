import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";

const bodySchema = z.object({
  questionId: z.string(),
  selectedOptionIds: z.array(z.string()).min(1),
});

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { questionId, selectedOptionIds } = parsed.data;
  const { validation } = await recordQuizAttempt(
    session.user.id,
    questionId,
    selectedOptionIds
  );

  return NextResponse.json({
    isCorrect: validation.isCorrect,
    score: validation.score,
  });
}
