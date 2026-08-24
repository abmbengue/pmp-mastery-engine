import { cache } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const getCurrentSession = cache(async () => auth());

export async function requireSession(locale: string) {
  const session = await getCurrentSession();
  if (!session?.user?.id) {
    redirect(`/${locale}/login`);
  }
  return session;
}
