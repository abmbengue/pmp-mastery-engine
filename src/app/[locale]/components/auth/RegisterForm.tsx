"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RegisterFormProps {
  locale: "fr" | "en";
  labels: {
    email: string;
    password: string;
    confirmPassword: string;
    register: string;
    emailExists: string;
    invalidEmail: string;
    passwordMismatch: string;
    passwordWeak: string;
    genericError: string;
  };
}

export function RegisterForm({ locale, labels }: RegisterFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError(labels.passwordMismatch);
      return;
    }

    setLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, confirmPassword, locale }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setLoading(false);
      switch (data.error) {
        case "email_exists":
          setError(labels.emailExists);
          return;
        case "rate_limited":
          setError(labels.genericError);
          return;
        case "password_mismatch":
          setError(labels.passwordMismatch);
          return;
        case "password_uppercase":
        case "password_lowercase":
        case "password_number":
          setError(labels.passwordWeak);
          return;
        default:
          setError(labels.genericError);
          return;
      }
    }

    const signInResult = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);
    if (signInResult?.error) {
      setError(labels.genericError);
      return;
    }

    router.push(`/${locale}/dashboard`);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="register-form">
      <div>
        <label htmlFor="register-email" className="mb-1 block text-sm font-medium text-gray-700">
          {labels.email}
        </label>
        <input
          id="register-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          data-testid="register-email"
        />
      </div>
      <div>
        <label htmlFor="register-password" className="mb-1 block text-sm font-medium text-gray-700">
          {labels.password}
        </label>
        <input
          id="register-password"
          type="password"
          required
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          data-testid="register-password"
        />
      </div>
      <div>
        <label htmlFor="register-confirm-password" className="mb-1 block text-sm font-medium text-gray-700">
          {labels.confirmPassword}
        </label>
        <input
          id="register-confirm-password"
          type="password"
          required
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          data-testid="register-confirm-password"
        />
      </div>
      {error && (
        <p className="text-sm text-red-600" role="alert" data-testid="register-error">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="min-h-11 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
        data-testid="register-submit"
      >
        {loading ? "…" : labels.register}
      </button>
    </form>
  );
}
