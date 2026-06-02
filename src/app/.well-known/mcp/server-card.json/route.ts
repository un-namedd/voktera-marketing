import { siteConfig } from "@/lib/site-config";

/**
 * No dedicated MCP server endpoint today. Card documents WebMCP tools on the marketing site
 * and points agents to the web app for product actions.
 */
export function GET() {
  return Response.json(
    {
      $schema:
        "https://raw.githubusercontent.com/modelcontextprotocol/modelcontextprotocol/main/schema/server-card.schema.json",
      serverInfo: {
        name: `${siteConfig.serviceName} (Web)`,
        version: "0.2.0",
      },
      transport: {
        type: "webmcp",
        documentation: `${siteConfig.websiteUrl}/docs/agents#webmcp`,
      },
      capabilities: {
        tools: {
          listChanged: false,
        },
      },
      endpoints: {
        webApp: siteConfig.appUrl,
        documentation: `${siteConfig.websiteUrl}/docs/agents`,
      },
    },
    { headers: { "Cache-Control": "public, max-age=3600" } },
  );
}
