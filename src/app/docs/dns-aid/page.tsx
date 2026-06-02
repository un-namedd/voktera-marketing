import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/site-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: `DNS-AID — ${siteConfig.serviceName}`,
  description: "DNS for AI Discovery (DNS-AID) records for voktera.com — operator setup guide.",
  path: "/docs/dns-aid",
});

export default function DnsAidPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-12 legal-prose">
      <Link href="/docs/agents" className="text-sm font-medium text-violet-600 hover:underline">
        ← Agents &amp; API discovery
      </Link>
      <h1 className="mt-4 text-3xl font-semibold text-zinc-900">DNS-AID (DNS for AI Discovery)</h1>
      <p>
        DNS-AID lets resolvers discover agent entrypoints via SVCB/HTTPS records. This is configured
        in <strong>Cloudflare DNS</strong>, not in the Next.js app.
      </p>

      <h2>Recommended records (example)</h2>
      <p>After the draft is finalized, publish signed records such as:</p>
      <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-xs">
{`_index._agents.voktera.com.  IN HTTPS 1 . alpn=h3,h2 ipv4hint=...
_a2a._agents.voktera.com.   IN HTTPS 1 voktera.com alpn=h3`}
      </pre>
      <p>
        Point <code>ipv4hint</code> / targets to the same endpoints as your Vercel deployment.
        Enable <strong>DNSSEC</strong> on the zone so validating resolvers receive authenticated
        answers.
      </p>

      <h2>HTTPS discovery on the site</h2>
      <p>
        Until DNS-AID is live, agents should use HTTPS well-known URIs on voktera.com (see{" "}
        <Link href="/docs/agents">Agents &amp; API discovery</Link>).
      </p>
    </article>
  );
}
