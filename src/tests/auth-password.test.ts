import { describe, it, expect } from "vitest";
import { deriveDisplayNameFromEmail, hashPassword, registerSchema, verifyPassword } from "@/modules/auth/password";

describe("auth password and registration validation", () => {
  it("accepts a valid registration payload", () => {
    const parsed = registerSchema.safeParse({
      email: "user@example.com",
      password: "StrongPass1",
      confirmPassword: "StrongPass1",
      locale: "fr",
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const parsed = registerSchema.safeParse({
      email: "bad-email",
      password: "StrongPass1",
      confirmPassword: "StrongPass1",
      locale: "fr",
    });
    expect(parsed.success).toBe(false);
  });

  it("rejects mismatched passwords", () => {
    const parsed = registerSchema.safeParse({
      email: "user@example.com",
      password: "StrongPass1",
      confirmPassword: "StrongPass2",
      locale: "fr",
    });
    expect(parsed.success).toBe(false);
  });

  it("rejects weak passwords", () => {
    const parsed = registerSchema.safeParse({
      email: "user@example.com",
      password: "weakpass",
      confirmPassword: "weakpass",
      locale: "fr",
    });
    expect(parsed.success).toBe(false);
  });

  it("hashes and verifies a password", async () => {
    const hash = await hashPassword("StrongPass1");
    expect(hash).not.toBe("StrongPass1");
    expect(await verifyPassword("StrongPass1", hash)).toBe(true);
    expect(await verifyPassword("WrongPass1", hash)).toBe(false);
  });

  it("derives display name from email", () => {
    expect(deriveDisplayNameFromEmail("john.doe@example.com")).toBe("john doe");
  });
});
