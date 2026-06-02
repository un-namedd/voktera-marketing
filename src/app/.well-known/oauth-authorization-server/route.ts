import { supabaseAuthIssuer } from "@/lib/agent/constants";
import { siteConfig } from "@/lib/site-config";

export function GET() {
  const issuer = supabaseAuthIssuer();
  if (!issuer) {
    return Response.json(
      {
        error: "not_configured",
        message:
          "Set NEXT_PUBLIC_SUPABASE_URL on this Vercel project to publish OAuth discovery for the Voktera app.",
        documentation: `${siteConfig.websiteUrl}/auth.md`,
      },
      { status: 503 },
    );
  }

  const metadata = {
    issuer,
    authorization_endpoint: `${issuer}/authorize`,
    token_endpoint: `${issuer}/token`,
    jwks_uri: `${issuer}/.well-known/jwks.json`,
    registration_endpoint: `${issuer}/signup`,
    scopes_supported: ["openid", "email", "profile"],
    response_types_supported: ["code"],
    grant_types_supported: ["authorization_code", "refresh_token"],
    code_challenge_methods_supported: ["S256"],
    token_endpoint_auth_methods_supported: ["none", "client_secret_basic"],
    service_documentation: `${siteConfig.websiteUrl}/auth.md`,
    agent_auth: {
      register_uri: `${siteConfig.appUrl}/login`,
      supported_identity_types: ["email"],
      credential_types: ["otp"],
      documentation: `${siteConfig.websiteUrl}/auth.md`,
    },
  };

  return Response.json(metadata, {
    headers: { "Cache-Control": "public, max-age=3600" },
  });
}
