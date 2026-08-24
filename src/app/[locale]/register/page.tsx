import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/modules/localization/navigation";
import { RegisterForm } from "@/app/[locale]/components/auth/RegisterForm";
import type { Locale } from "@/shared/types/locale";

export default async function RegisterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("auth");
  const loc = locale as Locale;

  return (
    <section className="mx-auto max-w-md rounded-xl border bg-white p-6 shadow-sm" data-testid="register-page">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">{t("registerTitle")}</h1>
      <p className="mb-6 text-sm text-gray-600">{t("registerSubtitle")}</p>
      <RegisterForm
        locale={loc}
        labels={{
          email: t("email"),
          password: t("password"),
          confirmPassword: t("confirmPassword"),
          register: t("registerButton"),
          emailExists: t("emailExists"),
          invalidEmail: t("invalidEmail"),
          passwordMismatch: t("passwordMismatch"),
          passwordWeak: t("passwordWeak"),
          genericError: t("genericError"),
        }}
      />
      <p className="mt-4 text-sm text-gray-600">
        {t("haveAccount")} {" "}
        <Link href="/login" className="text-blue-600 hover:underline" data-testid="go-login-link">
          {t("loginLink")}
        </Link>
      </p>
    </section>
  );
}
