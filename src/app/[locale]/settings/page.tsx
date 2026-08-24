import { getTranslations, setRequestLocale } from "next-intl/server";
import { requireSession } from "@/modules/auth/session";
import { updateUserLocale } from "@/data/repositories/user-repository";
import { redirect } from "next/navigation";
import { Link } from "@/modules/localization/navigation";

export default async function SettingsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await requireSession(locale);
  const t = await getTranslations("settings");

  async function updateLocaleAction(formData: FormData) {
    "use server";
    const nextLocale = formData.get("locale");
    if (nextLocale !== "fr" && nextLocale !== "en") {
      redirect(`/${locale}/settings`);
    }
    await updateUserLocale(session.user.id, nextLocale);
    redirect(`/${nextLocale}/settings`);
  }

  return (
    <section className="mx-auto max-w-2xl" data-testid="settings-page">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
          <p className="mt-1 text-sm text-gray-600">{t("subtitle")}</p>
        </div>
        <Link href="/dashboard" className="text-sm text-blue-600 hover:underline">{t("backToDashboard")}</Link>
      </div>

      <div className="rounded-xl border bg-white p-6">
        <p className="mb-4 text-sm text-gray-500">{t("email")}</p>
        <p className="mb-6 text-base font-medium text-gray-900" data-testid="settings-email">{session.user.email}</p>

        <form action={updateLocaleAction} className="space-y-4">
          <fieldset>
            <legend className="mb-3 text-sm font-medium text-gray-700">{t("language")}</legend>
            <div className="space-y-3">
              <label className="flex items-center gap-3 rounded-lg border p-3">
                <input type="radio" name="locale" value="fr" defaultChecked={locale === "fr"} data-testid="locale-fr" />
                <span>Francais</span>
              </label>
              <label className="flex items-center gap-3 rounded-lg border p-3">
                <input type="radio" name="locale" value="en" defaultChecked={locale === "en"} data-testid="locale-en" />
                <span>English</span>
              </label>
            </div>
          </fieldset>
          <button type="submit" className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700" data-testid="save-settings-button">
            {t("save")}
          </button>
        </form>
      </div>
    </section>
  );
}
