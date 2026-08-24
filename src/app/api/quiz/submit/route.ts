import { NextResponse } from "next/server";
import { findUserByEmail } from "@/data/repositories/user-repository";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";

export async function POST(request: Request) {
  const body = await request.json();
  const { questionId, selectedOptionIds, userEmail } = body;

  if (!questionId || !selectedOptionIds || !userEmail) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const user = await findUserByEmail(userEmail);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const { validation } = await recordQuizAttempt(
    user.id,
    questionId,
    selectedOptionIds
  );

  return NextResponse.json({
    isCorrect: validation.isCorrect,
    score: validation.score,
  });
}
