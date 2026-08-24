"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface DemoResetButtonProps {
  label: string;
}

export function DemoResetButton({ label }: DemoResetButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleReset() {
    setLoading(true);
    try {
      const response = await fetch("/api/demo/reset", { method: "POST" });
      if (response.ok) {
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleReset}
      disabled={loading}
      className="rounded-md border border-amber-300 bg-white px-3 py-1 text-xs font-medium text-amber-900 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-50"
      data-testid="demo-reset-button"
    >
      {loading ? "…" : label}
    </button>
  );
}
