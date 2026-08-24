import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/modules/localization/navigation";
import { isDemoModeEnabled } from "@/modules/demo/demo-config";
import { enterDemo } from "@/app/[locale]/demo/actions";
import { DemoEntryButton } from "@/app/[locale]/components/demo/DemoEntryButton";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const demoEnabled = isDemoModeEnabled();

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
        {demoEnabled ? (
          <form action={enterDemo.bind(null, locale)}>
            <DemoEntryButton
              label={t("demo.tryDemo")}
              className="inline-block rounded-lg border-2 border-blue-600 bg-white px-6 py-3 font-medium text-blue-700 hover:bg-blue-50"
            />
          </form>
        ) : null}
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
      {demoEnabled ? (
        <p className="mt-4 text-sm text-gray-600" data-testid="landing-demo-hint">
          {t("demo.explorePlatform")}
        </p>
      ) : null}
    </section>
  );
}
