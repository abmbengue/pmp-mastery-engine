import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export default async function QuizResultPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ score?: string; correct?: string }>;
}) {
  const { locale } = await params;
  const { score, correct } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("app");

  const isCorrect = correct === "true";
  const scoreValue = score ?? "0";

  return (
    <section data-testid="quiz-result-page">
      <h1 className="mb-4 text-2xl font-bold">{t("result")}</h1>
      <p
        className={`mb-4 text-lg ${isCorrect ? "text-green-600" : "text-red-600"}`}
        data-testid="result-message"
      >
        {isCorrect ? t("correct") : t("incorrect")}
      </p>
      <p data-testid="result-score">
        {t("score")}: {scoreValue}%
      </p>
    </section>
  );
}
