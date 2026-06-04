import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { siteConfig } from "@/lib/site-config";

export function FeatureSection({
  id,
  title,
  headline,
  bullets,
  accent,
  reverse = false,
}: {
  id: string;
  title: string;
  headline: string;
  bullets: readonly string[];
  accent: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-20 px-6 py-16 md:py-20">
      <RevealOnScroll>
        <div
          className={`mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          <div
            className={`flex min-h-[200px] flex-1 items-center justify-center rounded-3xl bg-gradient-to-br p-10 ${accent}`}
          >
            <span className="text-5xl font-bold tracking-tight text-accent-purple/90 md:text-6xl">
              {title}
            </span>
          </div>
          <div className="flex-1 rounded-2xl border border-card-border/80 bg-card/90 p-6 shadow-lg backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-purple">
              {title}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text md:text-3xl">
              {headline}
            </h2>
            <ul className="mt-6 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-muted">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-purple"
                    aria-hidden
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href={`${siteConfig.appUrl}/login`}
              className="mt-8 inline-flex text-sm font-semibold text-accent-purple hover:opacity-80"
            >
              Open the app →
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
