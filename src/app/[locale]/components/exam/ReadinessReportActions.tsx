"use client";

import { Link } from "@/modules/localization/navigation";

export function ReadinessReportActions({
  labels,
  locale,
}: {
  labels: { print: string; back: string; downloadPdf: string; backDashboard: string };
  locale: string;
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-2 print:hidden">
      <a
        href={`/api/exam/readiness-report/pdf?locale=${locale === "fr" ? "fr" : "en"}`}
        className="inline-flex min-h-11 items-center rounded-lg bg-indigo-800 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        data-testid="readiness-download-pdf"
      >
        {labels.downloadPdf}
      </a>
      <button
        type="button"
        className="min-h-11 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => window.print()}
        data-testid="readiness-print"
      >
        {labels.print}
      </button>
      <Link
        href="/dashboard"
        className="min-h-11 rounded-lg border px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
        data-testid="readiness-back-dashboard"
      >
        {labels.backDashboard}
      </Link>
      <Link
        href="/pmp-exam"
        className="min-h-11 rounded-lg border px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
        data-testid="readiness-back-exam"
      >
        {labels.back}
      </Link>
    </div>
  );
}
