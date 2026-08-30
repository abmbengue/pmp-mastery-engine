import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/modules/localization/routing";
import { getCurrentSession } from "@/modules/auth/session";
import { Link } from "@/modules/localization/navigation";
import {
  isDemoModeEnabled,
  isDemoUserSession,
} from "@/modules/demo/demo-config";
import { DemoBanner } from "@/app/[locale]/components/demo/DemoBanner";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const [messages, t, session] = await Promise.all([
    getMessages(),
    getTranslations("nav"),
    getCurrentSession(),
  ]);

  const showDemoBanner =
    isDemoModeEnabled() && session?.user && isDemoUserSession(session);

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen bg-slate-50 text-gray-900">
        {showDemoBanner ? <DemoBanner /> : null}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow"
          data-testid="skip-to-content"
        >
          {t("skipToContent")}
        </a>
        <header className="border-b border-slate-200 bg-white px-6 py-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
            <Link href="/" className="text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="app-title">
              Professional Learning Academy
            </Link>
            <nav className="flex flex-wrap items-center gap-4 text-sm" aria-label="Main">
              <Link href="/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="nav-home">
                {t("home")}
              </Link>
              <Link href="/academies" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="nav-academies">
                {t("academies")}
              </Link>
              {session?.user ? (
                <>
                  <Link href="/dashboard" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="nav-dashboard">
                    {t("dashboard")}
                  </Link>
                  <Link href="/pmp-exam" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="nav-pmp-exam">
                    {t("pmpExam")}
                  </Link>
                  <Link href="/pmp-study" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="nav-pmp-study">
                    {t("pmpStudy")}
                  </Link>
                  <Link href="/review" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="nav-review">
                    {t("review")}
                  </Link>
                  <Link href="/learning-paths" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="nav-learning-paths">
                    {t("learningPaths")}
                  </Link>
                  <Link href="/pmp-exam/readiness-report" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="nav-readiness-report">
                    {t("readinessReport")}
                  </Link>
                  <Link href="/settings" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="nav-settings">
                    {t("settings")}
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="nav-login">
                    {t("login")}
                  </Link>
                  <Link href="/register" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500" data-testid="nav-register">
                    {t("register")}
                  </Link>
                </>
              )}
            </nav>
          </div>
        </header>
        <main id="main-content" className="mx-auto max-w-5xl px-6 py-8" tabIndex={-1}>
          {children}
        </main>
      </div>
    </NextIntlClientProvider>
  );
}
