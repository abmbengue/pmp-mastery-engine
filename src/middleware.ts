import createMiddleware from "next-intl/middleware";
import { routing } from "@/modules/localization/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(fr|en)/:path*"],
};
