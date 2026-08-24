import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn, signOut } from "@/auth";
import {
  DEMO_USER_EMAIL,
  getDemoPassword,
  isDemoModeEnabled,
} from "@/modules/demo/demo-config";

/** Shared demo login — call only from Route Handlers or Server Actions. */
export async function performDemoLogin(locale: string) {
  if (!isDemoModeEnabled()) {
    redirect(`/${locale}/login`);
  }

  const password = getDemoPassword();
  if (!password) {
    redirect(`/${locale}/login`);
  }

  await signOut({ redirect: false });

  try {
    await signIn("credentials", {
      email: DEMO_USER_EMAIL,
      password,
      redirectTo: `/${locale}/dashboard`,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      redirect(`/${locale}/login`);
    }
    throw error;
  }
}
