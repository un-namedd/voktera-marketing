/**
 * Copy legal markdown from the Voktera app repo into this marketing repo.
 * Edit legal text in the app first, then run: npm run sync:legal
 */
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const marketingRoot = path.join(__dirname, "..");
const defaultAppRoot = path.join(
  marketingRoot,
  "..",
  "Personal Dashboard Application Website",
);

const appRoot = process.env.VOKTERA_APP_ROOT ?? defaultAppRoot;
const sourceDir = path.join(appRoot, "src", "content", "legal");
const destDir = path.join(marketingRoot, "src", "content", "legal");

const files = ["privacy.md", "terms.md", "cookies.md", "legal-notice.md"];

await mkdir(destDir, { recursive: true });
for (const file of files) {
  await copyFile(path.join(sourceDir, file), path.join(destDir, file));
  console.log(`Copied ${file}`);
}
console.log("Done. Review and commit if changed.");
