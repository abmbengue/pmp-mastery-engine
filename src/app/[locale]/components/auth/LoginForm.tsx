"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LoginFormProps {
  locale: "fr" | "en";
  labels: {
    email: string;
    password: string;
    login: string;
    invalidCredentials: string;
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

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError(labels.invalidCredentials);
      return;
    }

    router.push(`/${locale}/dashboard`);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="login-form">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">{labels.email}</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          data-testid="login-email"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">{labels.password}</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          data-testid="login-password"
        />
      </div>
      {error && (
        <p className="text-sm text-red-600" data-testid="login-error">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
        data-testid="login-submit"
      >
        {loading ? "…" : labels.login}
      </button>
    </form>
  );
}
