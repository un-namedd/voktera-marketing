import type { Metadata } from "next";
import { ChangelogView } from "@/components/ChangelogView";
import { buildPageMetadata } from "@/lib/seo/site-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: `Changelog — ${siteConfig.serviceName}`,
  description:
    "Release notes and product updates for Voktera — food tracking, gym logs, tasks, and the voktera.com marketing site.",
  path: "/changelog",
});

export default function ChangelogPage() {
  return <ChangelogView />;
}
