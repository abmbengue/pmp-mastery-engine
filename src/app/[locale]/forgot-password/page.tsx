import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/modules/localization/navigation";
import { ForgotPasswordForm } from "@/app/[locale]/components/auth/ForgotPasswordForm";
import type { Locale } from "@/shared/types/locale";

export default async function ForgotPasswordPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("auth");
  const loc = locale as Locale;

  return (
    <section
      className="mx-auto max-w-md rounded-xl border bg-white p-6 shadow-sm"
      data-testid="forgot-password-page"
    >
      <h1 className="mb-2 text-2xl font-bold text-gray-900">{t("forgotPasswordTitle")}</h1>
      <p className="mb-6 text-sm text-gray-600">{t("forgotPasswordSubtitle")}</p>
      <ForgotPasswordForm
        locale={loc}
        labels={{
          email: t("email"),
          submit: t("forgotPasswordSubmit"),
          sent: t("forgotPasswordSent"),
        }}
      />
      <p className="mt-4 text-sm text-gray-600">
        <Link href="/login" className="text-blue-600 hover:underline" data-testid="forgot-back-login">
          {t("backToLogin")}
        </Link>
      </p>
    </section>
  );
}
