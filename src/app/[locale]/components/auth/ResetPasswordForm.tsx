"use client";

import { Link, useRouter } from "@/modules/localization/navigation";
import { useState } from "react";

interface ResetPasswordFormProps {
  token: string;
  labels: {
    password: string;
    confirmPassword: string;
    submit: string;
    success: string;
    invalid: string;
    passwordMismatch: string;
    passwordWeak: string;
    backToLogin: string;
  };
}

export function ResetPasswordForm({ token, labels }: ResetPasswordFormProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError(labels.passwordMismatch);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password, confirmPassword }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        if (body.error === "password_mismatch") {
          setError(labels.passwordMismatch);
        } else if (
          body.error === "password_uppercase" ||
          body.error === "password_lowercase" ||
          body.error === "password_number" ||
          String(body.error ?? "").includes("password")
        ) {
          setError(labels.passwordWeak);
        } else {
          setError(labels.invalid);
        }
        return;
      }

      setSuccess(true);
      setTimeout(() => router.push("/login"), 1200);
    } catch {
      setError(labels.invalid);
    } finally {
      setLoading(false);
    }
  }

  if (!token) {
    return (
      <p className="text-sm text-red-600" role="alert" data-testid="reset-missing-token">
        {labels.invalid}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="reset-password-form">
      {error ? (
        <p className="text-sm text-red-600" role="alert" data-testid="reset-error">
          {error}
        </p>
      ) : null}
      {success ? (
        <p
          className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800"
          role="status"
          data-testid="reset-success"
        >
          {labels.success}
        </p>
      ) : null}
      <div>
        <label htmlFor="reset-password" className="mb-1 block text-sm font-medium text-gray-700">
          {labels.password}
        </label>
        <input
          id="reset-password"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          data-testid="reset-password"
        />
      </div>
      <div>
        <label htmlFor="reset-confirm" className="mb-1 block text-sm font-medium text-gray-700">
          {labels.confirmPassword}
        </label>
        <input
          id="reset-confirm"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          data-testid="reset-confirm"
        />
      </div>
      <button
        type="submit"
        disabled={loading || success}
        className="min-h-11 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
        data-testid="reset-submit"
      >
        {loading ? "…" : labels.submit}
      </button>
      <p className="text-center text-sm text-gray-600">
        <Link href="/login" className="text-blue-600 hover:underline" data-testid="reset-back-login">
          {labels.backToLogin}
        </Link>
      </p>
    </form>
  );
}
