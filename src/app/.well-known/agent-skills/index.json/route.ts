import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { siteConfig } from "@/lib/site-config";

const SCHEMA = "https://schemas.agentskills.io/discovery/0.2.0/schema.json";
const SKILLS_DIR = path.join(process.cwd(), "public", "agent-skills");

async function discoverSkills() {
  const entries = await readdir(SKILLS_DIR, { withFileTypes: true });
  const skills = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const skillPath = path.join(SKILLS_DIR, entry.name, "SKILL.md");
    try {
      const body = await readFile(skillPath, "utf8");
      const digest = `sha256:${createHash("sha256").update(body).digest("hex")}`;
      const firstLine = body.split("\n").find((l) => l.startsWith("description:"));
      const description =
        firstLine?.replace(/^description:\s*/, "").trim() ??
        `Voktera agent skill: ${entry.name}`;

      skills.push({
        name: entry.name,
        type: "skill-md",
        description,
        url: `${siteConfig.websiteUrl}/agent-skills/${entry.name}/SKILL.md`,
        digest,
      });
    } catch {
      // skip missing SKILL.md
    }
  }

  return skills;
}

export async function GET() {
  const skills = await discoverSkills();

  return Response.json(
    {
      $schema: SCHEMA,
      publisher: siteConfig.websiteUrl,
      skills,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300",
      },
    },
  );
}
