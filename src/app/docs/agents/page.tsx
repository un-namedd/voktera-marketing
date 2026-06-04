import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/site-metadata";
import { siteConfig } from "@/lib/site-config";
import { agentPaths } from "@/lib/agent/constants";

export const metadata: Metadata = buildPageMetadata({
  title: `Agents & API discovery — ${siteConfig.serviceName}`,
  description:
    "Machine-readable discovery for AI agents: API catalog, OAuth metadata, agent skills, and content negotiation on voktera.com.",
  path: "/docs/agents",
});

const links = [
  { href: agentPaths.apiCatalog, label: "API catalog (RFC 9727)" },
  { href: agentPaths.agentSkillsIndex, label: "Agent Skills index" },
  { href: agentPaths.oauthAuthorizationServer, label: "OAuth authorization server" },
  { href: agentPaths.openIdConfiguration, label: "OpenID configuration" },
  { href: agentPaths.oauthProtectedResource, label: "OAuth protected resource" },
  { href: agentPaths.mcpServerCard, label: "MCP server card" },
  { href: agentPaths.authMd, label: "auth.md" },
  { href: agentPaths.llmsTxt, label: "llms.txt" },
] as const;

export default function AgentsDocPage() {
  return (
    <article className="legal-prose mx-auto max-w-2xl px-6 py-12">
      <Link href="/" className="text-sm font-medium text-accent-purple hover:underline">
        ← Home
      </Link>
      <h1 className="mt-4 text-3xl font-semibold text-text">Agents &amp; API discovery</h1>
      <p className="mt-4 text-muted">
        voktera.com publishes discovery metadata for automated agents. The product API runs on{" "}
        <a href={siteConfig.appUrl} className="text-accent-purple hover:underline">
          {siteConfig.appUrl.replace(/^https?:\/\//, "")}
        </a>
        .
      </p>

      <h2 className="mt-10 text-xl font-semibold text-text">Well-known resources</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="font-medium text-accent-purple hover:underline">
              {link.label}
            </a>
            <span className="text-muted"> — {link.href}</span>
          </li>
        ))}
      </ul>

      <h2 id="webmcp" className="mt-10 text-xl font-semibold text-text">
        WebMCP
      </h2>
      <p className="mt-3 text-sm text-muted">
        When supported, this site registers browser tools via{" "}
        <code className="rounded border border-card-border bg-card/80 px-1 text-text">
          navigator.modelContext
        </code>
        : open app, view changelog, fetch API catalog.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-text">Markdown for agents</h2>
      <p className="mt-3 text-sm text-muted">
        Send{" "}
        <code className="rounded border border-card-border bg-card/80 px-1 text-text">
          Accept: text/markdown
        </code>{" "}
        on HTML pages to receive a markdown representation with{" "}
        <code className="rounded border border-card-border bg-card/80 px-1 text-text">
          Content-Type: text/markdown
        </code>
        .
      </p>

      <h2 className="mt-10 text-xl font-semibold text-text">DNS-AID</h2>
      <p className="mt-3 text-sm text-muted">
        DNS-based agent discovery (DNS-AID) is configured at the DNS provider. See{" "}
        <Link href="/docs/dns-aid" className="text-accent-purple hover:underline">
          DNS-AID setup
        </Link>
        .
      </p>
    </article>
  );
}
