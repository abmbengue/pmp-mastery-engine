import { getTranslations } from "next-intl/server";
import { Link } from "@/modules/localization/navigation";
import { DemoResetButton } from "@/app/[locale]/components/demo/DemoResetButton";

export async function DemoBanner() {
  const t = await getTranslations("demo");

  return (
    <div
      className="border-b border-amber-200 bg-amber-50 px-6 py-2 text-sm text-amber-950"
      data-testid="demo-banner"
      role="status"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2">
        <span className="font-medium">{t("banner")}</span>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/register"
            className="text-xs font-medium text-amber-900 underline hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            data-testid="demo-create-account-link"
          >
            {t("createAccount")}
          </Link>
          <DemoResetButton label={t("reset")} />
        </div>
      </div>
    </div>
  );
}
