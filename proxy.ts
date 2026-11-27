import { NextRequest, NextResponse } from "next/server";
import { isLocale, localeCookie, preferredLocale } from "./app/locale";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname === "/") {
    const saved = request.cookies.get(localeCookie)?.value;
    const locale = isLocale(saved)
      ? saved
      : preferredLocale(request.headers.get("accept-language") ?? "");
    const destination = request.nextUrl.clone();
    destination.pathname = `/${locale}`;
    const response = NextResponse.redirect(destination);
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }

  const headers = new Headers(request.headers);
  headers.set("x-portfolio-locale", pathname.split("/")[1]);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/", "/en/:path*", "/pt-br/:path*"],
};
