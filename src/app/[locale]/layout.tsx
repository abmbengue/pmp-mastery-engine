import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/modules/localization/routing";

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
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white px-6 py-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <span className="text-lg font-semibold" data-testid="app-title">
              Professional Learning Academy
            </span>
            <nav className="flex gap-4 text-sm">
              <a href={`/${locale}`} data-testid="nav-home">
                Home
              </a>
              <a href={`/${locale}/academies`} data-testid="nav-academies">
                Academies
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
      </div>
    </NextIntlClientProvider>
  );
}
