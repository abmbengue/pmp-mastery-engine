import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/modules/localization/navigation";
import { LoginForm } from "@/app/[locale]/components/auth/LoginForm";
import type { Locale } from "@/shared/types/locale";

export default async function LoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("auth");
  const loc = locale as Locale;

  return (
    <section className="mx-auto max-w-md rounded-xl border bg-white p-6 shadow-sm" data-testid="login-page">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">{t("loginTitle")}</h1>
      <p className="mb-6 text-sm text-gray-600">{t("loginSubtitle")}</p>
      <LoginForm
        locale={loc}
        labels={{
          email: t("email"),
          password: t("password"),
          login: t("loginButton"),
          invalidCredentials: t("invalidCredentials"),
          rateLimited: t("rateLimited"),
          forgotPassword: t("forgotPassword"),
        }}
      />
      <p className="mt-4 text-sm text-gray-600">
        {t("noAccount")} {" "}
        <Link href="/register" className="text-blue-600 hover:underline" data-testid="go-register-link">
          {t("registerLink")}
        </Link>
      </p>
    </section>
  );
}
