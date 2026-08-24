import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/modules/localization/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("app");

  return (
    <section data-testid="landing-page">
      <h1 className="mb-4 text-3xl font-bold">{t("title")}</h1>
      <p className="mb-8 text-lg text-gray-600">{t("tagline")}</p>
      <Link
        href="/academies"
        className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        data-testid="start-learning"
      >
        {t("startLearning")}
      </Link>
    </section>
  );
}
