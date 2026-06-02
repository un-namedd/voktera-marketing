import { supabaseAuthIssuer } from "@/lib/agent/constants";
import { siteConfig } from "@/lib/site-config";

export function GET() {
  const issuer = supabaseAuthIssuer();
  const resource = siteConfig.appUrl.replace(/\/$/, "");

  if (!issuer) {
    return Response.json(
      {
        resource,
        message:
          "Authorization server metadata requires NEXT_PUBLIC_SUPABASE_URL. Human sign-in: /login on the app.",
        documentation: `${siteConfig.websiteUrl}/auth.md`,
      },
      { status: 503 },
    );
  }

  return Response.json(
    {
      resource,
      authorization_servers: [issuer],
      bearer_methods_supported: ["header"],
      scopes_supported: ["openid", "email", "profile"],
      resource_documentation: `${siteConfig.websiteUrl}/docs/agents`,
    },
    { headers: { "Cache-Control": "public, max-age=3600" } },
  );
}
