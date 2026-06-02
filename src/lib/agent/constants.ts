import { siteConfig } from "@/lib/site-config";

const base = siteConfig.websiteUrl;

export const agentPaths = {
  apiCatalog: "/.well-known/api-catalog",
  agentSkillsIndex: "/.well-known/agent-skills/index.json",
  oauthAuthorizationServer: "/.well-known/oauth-authorization-server",
  oauthProtectedResource: "/.well-known/oauth-protected-resource",
  openIdConfiguration: "/.well-known/openid-configuration",
  mcpServerCard: "/.well-known/mcp/server-card.json",
  authMd: "/auth.md",
  llmsTxt: "/llms.txt",
  agentDocs: "/docs/agents",
} as const;

/** RFC 8288 Link header values for the homepage (comma-separated). */
export function homepageLinkHeader(): string {
  return [
    `<${base}${agentPaths.apiCatalog}>; rel="api-catalog"`,
    `<${base}${agentPaths.agentSkillsIndex}>; rel="describedby"`,
    `<${base}${agentPaths.authMd}>; rel="service-doc"`,
    `<${base}${agentPaths.llmsTxt}>; rel="describedby"`,
    `<${siteConfig.appUrl}/login>; rel="service-doc"`,
  ].join(", ");
}

export { supabaseAuthIssuer } from "@/lib/agent/oauth-metadata";
