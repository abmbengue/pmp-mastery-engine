/**
 * Auth module — V1 stub.
 * Full authentication (Auth.js) will be implemented in Phase 3.
 * This module defines the extensible interface for future auth integration.
 */

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  locale: "fr" | "en";
}

export interface AuthSession {
  user: AuthUser;
  expiresAt: Date;
}

/** Placeholder — returns demo user session for V1 development */
export function getDemoSession(): AuthSession {
  return {
    user: {
      id: "demo",
      email: "demo@pla.local",
      name: "Demo User",
      locale: "fr",
    },
    expiresAt: new Date(Date.now() + 86400000),
  };
}
