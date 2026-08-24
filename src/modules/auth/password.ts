import bcrypt from "bcryptjs";
import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().trim().email(),
    password: z
      .string()
      .min(8)
      .regex(/[A-Z]/, "password_uppercase")
      .regex(/[a-z]/, "password_lowercase")
      .regex(/[0-9]/, "password_number"),
    confirmPassword: z.string().min(8),
    locale: z.enum(["fr", "en"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password_mismatch",
    path: ["confirmPassword"],
  });

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function deriveDisplayNameFromEmail(email: string): string {
  return email.split("@")[0].replace(/[._-]+/g, " ").trim() || "Learner";
}
