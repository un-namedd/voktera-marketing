import { agentPaths } from "@/lib/agent/constants";
import { siteConfig } from "@/lib/site-config";

export function supabaseAuthIssuer(): string | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
  if (!url) return null;
  return `${url}/auth/v1`;
}

const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "public, max-age=3600",
} as const;

export function oauthProtectedResourceMetadata(resource: string) {
  const issuer = supabaseAuthIssuer();
  if (!issuer) return null;

  return {
    resource,
    authorization_servers: [issuer],
    bearer_methods_supported: ["header"] as const,
    scopes_supported: ["openid", "email", "profile"],
    resource_documentation: `${siteConfig.websiteUrl}${agentPaths.authMd}`,
  };
}

export function oauthAuthorizationServerMetadata() {
  const issuer = supabaseAuthIssuer();
  if (!issuer) return null;

  const authMd = `${siteConfig.websiteUrl}${agentPaths.authMd}`;
  const agentSkillsIndex = `${siteConfig.websiteUrl}${agentPaths.agentSkillsIndex}`;

  return {
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
    service_documentation: authMd,
    agent_auth: {
      skill: agentSkillsIndex,
      register_uri: `${siteConfig.appUrl}/login`,
      identity_types_supported: ["verified_email"],
      identity_assertion: {
        assertion_types_supported: ["verified_email"],
      },
      credential_types_supported: ["otp"],
      claim_uri: `${siteConfig.appUrl}/login`,
      documentation: authMd,
    },
  };
}

export function jsonMetadataResponse(body: unknown, status = 200) {
  return Response.json(body, { status, headers: jsonHeaders });
}
