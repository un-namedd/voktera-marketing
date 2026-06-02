import { siteConfig } from "@/lib/site-config";

export function GET() {
  const body = `User-agent: *
Allow: /
Content-Signal: ai-train=no, search=yes, ai-input=no

Sitemap: ${siteConfig.websiteUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
