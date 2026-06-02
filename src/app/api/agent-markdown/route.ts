import { markdownForPath, markdownTokenHeader } from "@/lib/agent/markdown";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") ?? "/";

  const markdown = await markdownForPath(path);
  if (!markdown) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": markdownTokenHeader(markdown),
      Vary: "Accept",
    },
  });
}
