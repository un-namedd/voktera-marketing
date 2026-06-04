import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function LegalDocument({
  title,
  markdown,
}: {
  title: string;
  markdown: string;
}) {
  return (
    <article className="legal-prose mx-auto max-w-2xl px-6 pb-16 pt-4">
      <header className="mb-8 space-y-3 border-b border-card-border pb-6">
        <Link href="/" className="text-sm text-accent-purple hover:underline">
          ← Home
        </Link>
        <h1 className="text-2xl font-semibold tracking-tight text-text">
          {title}
        </h1>
      </header>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </article>
  );
}
