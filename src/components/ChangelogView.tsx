import Link from "next/link";
import {
  changelogEntries,
  formatChangelogDate,
  type ChangelogEntry,
} from "@/content/marketing/changelog";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { siteConfig } from "@/lib/site-config";

function ChangelogRelease({ entry }: { entry: ChangelogEntry }) {
  return (
    <article className="relative border-l-2 border-violet-200 pl-6 pb-12 last:pb-0">
      <div
        className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-violet-500 shadow-sm"
        aria-hidden
      />
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <time
          dateTime={entry.date}
          className="text-sm font-medium text-violet-600"
        >
          {formatChangelogDate(entry.date)}
        </time>
        {entry.version && (
          <span className="rounded-md bg-violet-100 px-2 py-0.5 text-xs font-semibold text-violet-800">
            v{entry.version}
          </span>
        )}
      </header>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900">
        {entry.title}
      </h2>
      <p className="mt-2 text-zinc-600">{entry.summary}</p>
      <ul className="mt-4 space-y-2">
        {entry.items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-zinc-600">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ChangelogView() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-20 pt-8">
      <header className="mb-10 border-b border-zinc-200 pb-8">
        <Link href="/" className="text-sm font-medium text-violet-600 hover:underline">
          ← Home
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
          Changelog
        </h1>
        <p className="mt-3 text-zinc-600">
          What&apos;s new in Voktera — product updates for the web app and this
          site. For the app itself, open{" "}
          <a
            href={`${siteConfig.appUrl}/login`}
            className="font-medium text-violet-600 hover:underline"
          >
            app.voktera.com
          </a>
          .
        </p>
      </header>
      <div className="space-y-0">
        {changelogEntries.map((entry) => (
          <RevealOnScroll key={`${entry.date}-${entry.title}`}>
            <ChangelogRelease entry={entry} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
