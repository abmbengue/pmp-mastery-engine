import { routing } from "@/modules/localization/routing";
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
