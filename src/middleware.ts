import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { homepageLinkHeader } from "@/lib/agent/constants";
import { markdownNegotiablePaths } from "@/lib/agent/markdown-paths";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accept = request.headers.get("accept") ?? "";

  if (
    markdownNegotiablePaths.has(pathname) &&
    accept.toLowerCase().includes("text/markdown")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/api/agent-markdown";
    url.searchParams.set("path", pathname);
    return NextResponse.rewrite(url);
  }

  const response = NextResponse.next();

  if (pathname === "/") {
    response.headers.set("Link", homepageLinkHeader());
  }

  return response;
}

export const config = {
  matcher: [
    "/",
    "/changelog",
    "/privacy",
    "/terms",
    "/cookies",
    "/legal-notice",
    "/auth.md",
  ],
};
