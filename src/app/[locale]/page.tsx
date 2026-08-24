import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/modules/localization/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <section data-testid="landing-page">
      <h1 className="mb-4 text-3xl font-bold">{t("app.title")}</h1>
      <p className="mb-8 text-lg text-gray-600">{t("app.tagline")}</p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/academies"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          data-testid="start-learning"
        >
          {t("app.startLearning")}
        </Link>
        <Link
          href="/login"
          className="inline-block rounded-lg border border-gray-300 px-6 py-3 text-gray-800 hover:bg-gray-50"
          data-testid="landing-login-link"
        >
          {t("auth.loginButton")}
        </Link>
        <Link
          href="/register"
          className="inline-block rounded-lg border border-gray-300 px-6 py-3 text-gray-800 hover:bg-gray-50"
          data-testid="landing-register-link"
        >
          {t("auth.registerButton")}
        </Link>
      </div>
    </section>
  );
}
