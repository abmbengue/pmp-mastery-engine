"use client";

import { useState } from "react";

interface ForgotPasswordFormProps {
  locale: "fr" | "en";
  labels: {
    email: string;
    submit: string;
    sent: string;
  };
}

export function ForgotPasswordForm({ locale, labels }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale }),
      });
      // Always show generic success (anti-enumeration)
      setSent(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="forgot-password-form">
      {sent ? (
        <p
          className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800"
          role="status"
          data-testid="forgot-password-sent"
        >
          {labels.sent}
        </p>
      ) : null}
      <div>
        <label htmlFor="forgot-email" className="mb-1 block text-sm font-medium text-gray-700">
          {labels.email}
        </label>
        <input
          id="forgot-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          data-testid="forgot-email"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="min-h-11 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
        data-testid="forgot-submit"
      >
        {loading ? "…" : labels.submit}
      </button>
    </form>
  );
}
