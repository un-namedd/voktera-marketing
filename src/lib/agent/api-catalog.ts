import { siteConfig } from "@/lib/site-config";
import { agentPaths } from "@/lib/agent/constants";

const RFC9727_PROFILE = "https://www.rfc-editor.org/info/rfc9727";

export function buildApiCatalogLinkset() {
  const app = siteConfig.appUrl.replace(/\/$/, "");
  const docs = `${siteConfig.websiteUrl}${agentPaths.agentDocs}`;

  return {
    linkset: [
      {
        anchor: `${app}/api`,
        "service-doc": [
          {
            href: docs,
            type: "text/html",
          },
          {
            href: `${siteConfig.websiteUrl}/llms.txt`,
            type: "text/plain",
          },
        ],
        "service-desc": [
          {
            href: `${siteConfig.websiteUrl}${agentPaths.agentSkillsIndex}`,
            type: "application/json",
          },
        ],
        status: [
          {
            href: `${app}/login`,
            type: "text/html",
          },
        ],
      },
    ],
  };
}

export const apiCatalogContentType = `application/linkset+json; profile="${RFC9727_PROFILE}"`;
