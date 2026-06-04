import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { FeatureSection } from "@/components/FeatureSection";
import { HomeJsonLd } from "@/components/JsonLd";
import { ProofStrip } from "@/components/ProofStrip";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { DownloadSection } from "@/components/DownloadSection";
import { BrandPanel } from "@/components/layout/BrandPanel";
import { MarketingCard } from "@/components/layout/MarketingCard";
import { features, howItWorks } from "@/content/marketing/home";
import { buildPageMetadata } from "@/lib/seo/site-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <div className="relative overflow-hidden">
        <main className="flex flex-col lg:grid lg:min-h-[calc(100dvh-4.5rem)] lg:grid-cols-2">
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:border-r lg:border-card-border/40">
            <BrandPanel />
          </div>

          <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
            <div className="w-full max-w-md ambient-page-in">
              <div className="lg:hidden">
                <BrandPanel compact />
              </div>

              <MarketingCard>
                <h2 className="text-center text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                  Your personal dashboard for food, gym, and tasks
                </h2>
                <p className="mx-auto mt-3 text-center text-sm text-muted sm:text-base">
                  {siteConfig.tagline}. Track nutrition, log workouts, and manage your
                  day in one mobile-first app — installable from the browser.
                </p>
                <div className="mt-8 flex flex-col items-center">
                  <DownloadSection compact />
                </div>
                <p className="mt-6 text-center">
                  <a
                    href="#features"
                    className="text-sm font-medium text-accent-purple hover:underline"
                  >
                    See what&apos;s inside ↓
                  </a>
                </p>
              </MarketingCard>
            </div>
          </div>
        </main>

        <ProofStrip />

        <div id="features" className="scroll-mt-20">
          {features.map((feature, index) => (
            <FeatureSection
              key={feature.id}
              id={feature.id}
              title={feature.title}
              headline={feature.headline}
              bullets={feature.bullets}
              accent={feature.accent}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <section
          id="how-it-works"
          className="scroll-mt-20 border-t border-card-border/80 bg-card/30 px-6 py-16 md:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <RevealOnScroll>
              <h2 className="text-center text-3xl font-semibold tracking-tight text-text">
                How it works
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-center text-muted">
                Three steps from sign-in to your daily snapshot.
              </p>
            </RevealOnScroll>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {howItWorks.map((step) => (
                <RevealOnScroll key={step.step}>
                  <div className="rounded-2xl border border-card-border/80 bg-card/90 p-6 shadow-lg backdrop-blur-sm">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-purple text-sm font-bold text-white">
                      {step.step}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-text">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <FaqSection />
        <CtaBand />
      </div>
    </>
  );
}
