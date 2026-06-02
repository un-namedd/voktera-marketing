import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const features = [
  {
    title: "Food",
    description:
      "Log meals, track nutrients, scan labels, and hit daily targets without spreadsheet chaos.",
  },
  {
    title: "Gym",
    description:
      "Run workout plans, log sets and reps, and see what you did last week at a glance.",
  },
  {
    title: "Tasks",
    description:
      "Today’s todos, repeats, and goals in one hub — built for how you actually plan your week.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.18),transparent)]"
        aria-hidden
      />
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-12 text-center md:pt-20">
        <Image
          src="/brand/logo-light.png"
          alt=""
          width={120}
          height={120}
          className="mx-auto mb-8 h-28 w-28 md:h-32 md:w-32"
          priority
        />
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          {siteConfig.serviceName}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
          {siteConfig.tagline}. A personal dashboard for nutrition, training, and
          daily focus — mobile-first and installable.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`${siteConfig.appUrl}/login`}
            className="inline-flex min-w-[200px] items-center justify-center rounded-xl bg-violet-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500"
          >
            Try the app
          </a>
          <a
            href="/privacy"
            className="inline-flex min-w-[200px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-8 py-3.5 text-base font-medium text-zinc-700 transition hover:border-zinc-400"
          >
            Privacy policy
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-24 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-violet-700">{feature.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
