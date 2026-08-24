import { getTranslations, setRequestLocale } from "next-intl/server";
import { ResetPasswordForm } from "@/app/[locale]/components/auth/ResetPasswordForm";

export default async function ResetPasswordPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { locale } = await params;
  const { token = "" } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("auth");

  return (
    <section
      className="mx-auto max-w-md rounded-xl border bg-white p-6 shadow-sm"
      data-testid="reset-password-page"
    >
      <h1 className="mb-2 text-2xl font-bold text-gray-900">{t("resetPasswordTitle")}</h1>
      <p className="mb-6 text-sm text-gray-600">{t("resetPasswordSubtitle")}</p>
      <ResetPasswordForm
        token={token}
        labels={{
          password: t("password"),
          confirmPassword: t("confirmPassword"),
          submit: t("resetPasswordSubmit"),
          success: t("resetPasswordSuccess"),
          invalid: t("resetTokenInvalid"),
          passwordMismatch: t("passwordMismatch"),
          passwordWeak: t("passwordWeak"),
          backToLogin: t("backToLogin"),
        }}
      />
    </section>
  );
}
