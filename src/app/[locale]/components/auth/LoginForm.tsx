"use client";

import { signIn } from "next-auth/react";
import { Link } from "@/modules/localization/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LoginFormProps {
  locale: "fr" | "en";
  labels: {
    email: string;
    password: string;
    login: string;
    invalidCredentials: string;
    rateLimited: string;
    forgotPassword: string;
  };
}

export function LoginForm({ locale, labels }: LoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const gate = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (gate.status === 429) {
        setError(labels.rateLimited);
        setLoading(false);
        return;
      }

      if (!gate.ok) {
        setError(labels.invalidCredentials);
        setLoading(false);
        return;
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(labels.invalidCredentials);
        setLoading(false);
        return;
      }

      router.push(`/${locale}/dashboard`);
      router.refresh();
    } catch {
      setError(labels.invalidCredentials);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="login-form">
      <div>
        <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-gray-700">
          {labels.email}
        </label>
        <input
          id="login-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          data-testid="login-email"
        />
      </div>
      <div>
        <label htmlFor="login-password" className="mb-1 block text-sm font-medium text-gray-700">
          {labels.password}
        </label>
        <input
          id="login-password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          data-testid="login-password"
        />
      </div>
      {error && (
        <p className="text-sm text-red-600" role="alert" data-testid="login-error">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="min-h-11 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
        data-testid="login-submit"
      >
        {loading ? "…" : labels.login}
      </button>
      <p className="text-center text-sm text-gray-600">
        <Link
          href="/forgot-password"
          className="font-medium text-blue-700 underline focus:outline-none focus:ring-2 focus:ring-blue-400"
          data-testid="forgot-password-link"
        >
          {labels.forgotPassword}
        </Link>
      </p>
    </form>
  );
}
