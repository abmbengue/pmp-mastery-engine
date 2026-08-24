import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { buildPmpReadinessReport } from "@/modules/assessment-engine/readiness-report-service";
import { generateReadinessReportPdf } from "@/modules/assessment-engine/readiness-report-pdf";
import type { Locale } from "@/shared/types/locale";

/**
 * PDF download for the authenticated user only.
 * Never trusts client-supplied userId/email.
 */
export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const localeParam = url.searchParams.get("locale");
  const locale: Locale = localeParam === "fr" ? "fr" : "en";

  const report = await buildPmpReadinessReport(session.user.id, locale);
  const pdf = generateReadinessReportPdf(report, locale);

  return new NextResponse(Buffer.from(pdf), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="pmp-readiness-report-${locale}.pdf"`,
      "Cache-Control": "no-store",
    },
  });
}
