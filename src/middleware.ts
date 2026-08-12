import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale } from "@/lib/i18n";

// English is the default locale for first-time visitors: redirect the
// bare root ("/") to "/en" without ever rendering an unlocalized page.
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
