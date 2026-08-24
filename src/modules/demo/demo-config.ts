export const DEMO_USER_EMAIL = "demo@pla.local";

/** Demo mode is enabled only when explicitly configured. */
export function isDemoModeEnabled(): boolean {
  return process.env.DEMO_MODE === "true";
}

/** Server-only demo password — never sent to the browser. */
export function getDemoPassword(): string | null {
  if (!isDemoModeEnabled()) return null;
  const password = process.env.DEMO_USER_PASSWORD;
  return password && password.length >= 8 ? password : null;
}

export function isDemoUserEmail(email: string | null | undefined): boolean {
  return email?.toLowerCase() === DEMO_USER_EMAIL;
}

export function isDemoUserSession(
  session: { user?: { id?: string; email?: string | null } } | null | undefined
): boolean {
  return isDemoUserEmail(session?.user?.email);
}
