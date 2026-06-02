import { agentPaths } from "@/lib/agent/constants";
import { jsonMetadataResponse, supabaseAuthIssuer } from "@/lib/agent/oauth-metadata";
import { siteConfig } from "@/lib/site-config";

/** OpenID Provider metadata (Supabase Auth) for agent discovery. */
export function GET() {
  const issuer = supabaseAuthIssuer();
  if (!issuer) {
    return jsonMetadataResponse(
      {
        error: "not_configured",
        message: "Set NEXT_PUBLIC_SUPABASE_URL to enable OpenID discovery.",
        documentation: `${siteConfig.websiteUrl}${agentPaths.authMd}`,
      },
      503,
    );
  }

  return jsonMetadataResponse({
    issuer,
    authorization_endpoint: `${issuer}/authorize`,
    token_endpoint: `${issuer}/token`,
    jwks_uri: `${issuer}/.well-known/jwks.json`,
    userinfo_endpoint: `${issuer}/userinfo`,
    scopes_supported: ["openid", "email", "profile"],
    response_types_supported: ["code"],
    grant_types_supported: ["authorization_code", "refresh_token"],
    subject_types_supported: ["public"],
    id_token_signing_alg_values_supported: ["RS256", "HS256"],
    token_endpoint_auth_methods_supported: ["none", "client_secret_basic"],
  });
}
