import { agentPaths } from "@/lib/agent/constants";
import {
  jsonMetadataResponse,
  oauthAuthorizationServerMetadata,
} from "@/lib/agent/oauth-metadata";
import { siteConfig } from "@/lib/site-config";

export function GET() {
  const metadata = oauthAuthorizationServerMetadata();

  if (!metadata) {
    return jsonMetadataResponse(
      {
        error: "not_configured",
        message:
          "Set NEXT_PUBLIC_SUPABASE_URL on this Vercel project to publish OAuth discovery for the Voktera app.",
        documentation: `${siteConfig.websiteUrl}${agentPaths.authMd}`,
      },
      503,
    );
  }

  return jsonMetadataResponse(metadata);
}
