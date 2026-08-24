import { performDemoLogin } from "@/modules/demo/demo-login";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  await performDemoLogin(locale);
}
