import { RevealOnScroll } from "@/components/RevealOnScroll";
import { DownloadSection } from "@/components/DownloadSection";
import { MarketingCard } from "@/components/layout/MarketingCard";

export function CtaBand() {
  return (
    <section className="relative px-6 py-20 md:py-28">
      <RevealOnScroll>
        <div className="relative mx-auto max-w-2xl text-center">
          <MarketingCard className="mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
              Ready when you are
            </h2>
            <p className="mt-4 text-lg text-muted">
              Log food, train, and plan your day from one dashboard. Start on the web
              in under a minute.
            </p>
            <div className="mt-10 flex flex-col items-center">
              <DownloadSection id="download" />
            </div>
          </MarketingCard>
        </div>
      </RevealOnScroll>
    </section>
  );
}
