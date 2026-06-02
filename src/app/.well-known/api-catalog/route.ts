import { apiCatalogContentType, buildApiCatalogLinkset } from "@/lib/agent/api-catalog";

export function GET() {
  return Response.json(buildApiCatalogLinkset(), {
    headers: {
      "Content-Type": apiCatalogContentType,
      "Cache-Control": "public, max-age=3600",
    },
  });
}

export function HEAD() {
  return new Response(null, {
    status: 200,
    headers: {
      "Content-Type": apiCatalogContentType,
      Link: '</.well-known/api-catalog>; rel="self"',
    },
  });
}
