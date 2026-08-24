/**
 * Password reset email port — no real provider required for pilot.
 * Swap DevPasswordResetEmail for SMTP/API implementation later.
 */

export type PasswordResetEmailPayload = {
  to: string;
  resetUrl: string;
  locale: "fr" | "en";
  expiresAt: Date;
};

export interface PasswordResetEmailPort {
  readonly providerName: string;
  sendResetEmail(payload: PasswordResetEmailPayload): Promise<void>;
}

type DevSinkGlobal = typeof globalThis & {
  __plaPasswordResetDevSink?: {
    lastPayload: PasswordResetEmailPayload | null;
    history: PasswordResetEmailPayload[];
  };
};

function sink() {
  const g = globalThis as DevSinkGlobal;
  if (!g.__plaPasswordResetDevSink) {
    g.__plaPasswordResetDevSink = { lastPayload: null, history: [] };
  }
  return g.__plaPasswordResetDevSink;
}

/**
 * Dev/test sink: records last payloads; logs URL without secrets beyond the opaque token path.
 */
export class DevPasswordResetEmail implements PasswordResetEmailPort {
  readonly providerName = "dev";

  static get lastPayload() {
    return sink().lastPayload;
  }

  static get history() {
    return sink().history;
  }

  async sendResetEmail(payload: PasswordResetEmailPayload): Promise<void> {
    const s = sink();
    s.lastPayload = payload;
    s.history.push(payload);
    console.info(
      JSON.stringify({
        event: "password_reset_email_dev",
        to: payload.to,
        locale: payload.locale,
        // Do not log full URL in production adapters; OK for local/dev sink
        resetUrl: payload.resetUrl,
        ts: new Date().toISOString(),
      })
    );
  }

  static reset() {
    const s = sink();
    s.lastPayload = null;
    s.history = [];
  }
}

let emailPort: PasswordResetEmailPort = new DevPasswordResetEmail();

export function getPasswordResetEmailPort(): PasswordResetEmailPort {
  return emailPort;
}

/** Test helper */
export function setPasswordResetEmailPort(port: PasswordResetEmailPort) {
  emailPort = port;
}
