import { NextResponse } from "next/server";
import { findUserByEmail, createUser, enrollUserInActiveV1Courses } from "@/data/repositories/user-repository";
import { deriveDisplayNameFromEmail, hashPassword, registerSchema } from "@/modules/auth/password";

export async function POST(request: Request) {
  const raw = await request.json();
  const parsed = registerSchema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json({
      error: parsed.error.issues[0]?.message ?? "invalid_input",
    }, { status: 400 });
  }

  const { email, password, locale } = parsed.data;
  const existing = await findUserByEmail(email);
  if (existing) {
    return NextResponse.json({ error: "email_exists" }, { status: 409 });
  }

  const passwordHash = await hashPassword(password);
  const user = await createUser({
    email,
    name: deriveDisplayNameFromEmail(email),
    locale,
    passwordHash,
  });

  // V1 simplification: auto-enroll only into active V1 courses.
  await enrollUserInActiveV1Courses(user.id);

  return NextResponse.json({ ok: true, email: user.email });
}
