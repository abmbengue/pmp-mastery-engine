"use client";

import { Link } from "@/modules/localization/navigation";

export function ReadinessReportActions({
  labels,
}: {
  labels: { print: string; back: string };
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-2 print:hidden">
      <button
        type="button"
        className="min-h-11 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => window.print()}
        data-testid="readiness-print"
      >
        {labels.print}
      </button>
      <Link
        href="/pmp-exam"
        className="min-h-11 rounded-lg border px-4 py-2 text-sm font-medium"
        data-testid="readiness-back-exam"
      >
        {labels.back}
      </Link>
    </div>
  );
}
