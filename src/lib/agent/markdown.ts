import { readFile } from "node:fs/promises";
import path from "node:path";
import { changelogEntries, formatChangelogDate } from "@/content/marketing/changelog";
import { faqItems, features, howItWorks, proofItems } from "@/content/marketing/home";
import { loadLegalDocument } from "@/lib/load-legal-doc";
import { siteConfig } from "@/lib/site-config";

function estimateTokens(text: string): string {
  return String(Math.ceil(text.length / 4));
}

export async function markdownForPath(pathname: string): Promise<string | null> {
  const markdown = await renderMarkdown(pathname);
  return markdown;
}

export function markdownTokenHeader(markdown: string): string {
  return estimateTokens(markdown);
}

async function renderMarkdown(pathname: string): Promise<string | null> {
  switch (pathname) {
    case "/":
      return homeMarkdown();
    case "/changelog":
      return changelogMarkdown();
    case "/privacy":
      return loadLegalDocument("privacy");
    case "/terms":
      return loadLegalDocument("terms");
    case "/cookies":
      return loadLegalDocument("cookies");
    case "/legal-notice":
      return loadLegalDocument("legal-notice");
    case "/auth.md":
      return readAuthMd();
    default:
      return null;
  }
}

async function readAuthMd(): Promise<string> {
  const filePath = path.join(process.cwd(), "public", "auth.md");
  return readFile(filePath, "utf8");
}

function homeMarkdown(): string {
  const lines: string[] = [
    `# ${siteConfig.serviceName}`,
    "",
    siteConfig.seo.description,
    "",
    `**Web app:** ${siteConfig.appUrl}/login`,
    "",
    "## Highlights",
    "",
    ...proofItems.map((p) => `- **${p.label}:** ${p.description}`),
    "",
    "## Features",
    "",
  ];

  for (const f of features) {
    lines.push(`### ${f.title}`, "", f.headline, "");
    for (const b of f.bullets) lines.push(`- ${b}`);
    lines.push("");
  }

  lines.push("## How it works", "");
  for (const step of howItWorks) {
    lines.push(`### ${step.step}. ${step.title}`, "", step.description, "");
  }

  lines.push("## FAQ", "");
  for (const item of faqItems) {
    lines.push(`### ${item.question}`, "", item.answer, "");
  }

  lines.push(
    "## Links",
    "",
    `- [Privacy](${siteConfig.websiteUrl}/privacy)`,
    `- [Terms](${siteConfig.websiteUrl}/terms)`,
    `- [Changelog](${siteConfig.websiteUrl}/changelog)`,
    `- [API catalog](${siteConfig.websiteUrl}/.well-known/api-catalog)`,
    "",
  );

  return lines.join("\n");
}

function changelogMarkdown(): string {
  const lines: string[] = ["# Changelog", ""];
  for (const entry of changelogEntries) {
    lines.push(
      `## ${formatChangelogDate(entry.date)}${entry.version ? ` (v${entry.version})` : ""}`,
      "",
      `### ${entry.title}`,
      "",
      entry.summary,
      "",
    );
    for (const item of entry.items) lines.push(`- ${item}`);
    lines.push("");
  }
  return lines.join("\n");
}

export { markdownNegotiablePaths } from "@/lib/agent/markdown-paths";
