import { RevealOnScroll } from "@/components/RevealOnScroll";
import { DownloadSection } from "@/components/DownloadSection";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(124,58,237,0.2),transparent)]"
        aria-hidden
      />
      <RevealOnScroll>
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
            Ready when you are
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Log food, train, and plan your day from one dashboard. Start on the web
            in under a minute.
          </p>
          <div className="mt-10 flex flex-col items-center">
            <DownloadSection id="download" />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
