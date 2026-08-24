"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function PracticeTargetForm({
  initialTarget,
  labels,
}: {
  initialTarget: number;
  labels: { targetScore: string; saveTarget: string };
}) {
  const router = useRouter();
  const [value, setValue] = useState(initialTarget);
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    await fetch("/api/exam/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "set_target", targetScorePercent: value }),
    });
    setSaving(false);
    router.refresh();
  }

  return (
    <div className="mt-3 flex flex-wrap items-end gap-2" data-testid="practice-target-form">
      <label className="text-sm">
        <span className="block text-gray-500">{labels.targetScore}</span>
        <select
          className="mt-1 rounded border px-2 py-1"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          data-testid="practice-target-select"
          aria-label={labels.targetScore}
        >
          {[70, 75, 80, 85].map((n) => (
            <option key={n} value={n}>
              {n}%
            </option>
          ))}
        </select>
      </label>
      <button
        type="button"
        className="rounded-lg bg-indigo-700 px-3 py-1.5 text-sm font-medium text-white"
        onClick={() => void save()}
        disabled={saving}
        data-testid="practice-target-save"
      >
        {labels.saveTarget}
      </button>
    </div>
  );
}
