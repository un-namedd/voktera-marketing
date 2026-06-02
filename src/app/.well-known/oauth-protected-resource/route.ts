import { agentPaths } from "@/lib/agent/constants";
import {
  jsonMetadataResponse,
  oauthProtectedResourceMetadata,
} from "@/lib/agent/oauth-metadata";
import { siteConfig } from "@/lib/site-config";

/** PRM for the marketing origin (RFC 9728). */
export function GET() {
  const resource = siteConfig.websiteUrl.replace(/\/$/, "");
  const metadata = oauthProtectedResourceMetadata(resource);

  if (!metadata) {
    return jsonMetadataResponse(
      {
        error: "not_configured",
        message:
          "Set NEXT_PUBLIC_SUPABASE_URL on this Vercel project to publish OAuth protected resource metadata.",
        documentation: `${siteConfig.websiteUrl}${agentPaths.authMd}`,
      },
      503,
    );
  }

  return jsonMetadataResponse(metadata);
}
