import { setRequestLocale } from "next-intl/server";
import { enterDemo } from "@/app/[locale]/demo/actions";

export default async function DemoEntryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  await enterDemo(locale);
}
