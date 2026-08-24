"use server";

import { performDemoLogin } from "@/modules/demo/demo-login";

export async function enterDemo(locale: string) {
  await performDemoLogin(locale);
}
