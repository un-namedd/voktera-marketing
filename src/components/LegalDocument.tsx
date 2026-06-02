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
      <header className="mb-8 space-y-3 border-b border-zinc-200 pb-6">
        <Link href="/" className="text-sm text-violet-600 hover:underline">
          ← Home
        </Link>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h1>
      </header>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </article>
  );
}
