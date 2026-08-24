import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/modules/localization/routing";
import { getCurrentSession } from "@/modules/auth/session";
import { Link } from "@/modules/localization/navigation";

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

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white px-6 py-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
            <span className="text-lg font-semibold" data-testid="app-title">
              Professional Learning Academy
            </span>
            <nav className="flex flex-wrap items-center gap-4 text-sm">
              <Link href="/" data-testid="nav-home">{t("home")}</Link>
              <Link href="/academies" data-testid="nav-academies">{t("academies")}</Link>
              {session?.user ? (
                <>
                  <Link href="/dashboard" data-testid="nav-dashboard">{t("dashboard")}</Link>
                  <Link href="/settings" data-testid="nav-settings">{t("settings")}</Link>
                </>
              ) : (
                <>
                  <Link href="/login" data-testid="nav-login">{t("login")}</Link>
                  <Link href="/register" data-testid="nav-register">{t("register")}</Link>
                </>
              )}
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
      </div>
    </NextIntlClientProvider>
  );
}
