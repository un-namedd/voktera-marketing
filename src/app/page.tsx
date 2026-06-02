import Image from "next/image";
import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { DownloadSection } from "@/components/DownloadSection";
import { FaqSection } from "@/components/FaqSection";
import { FeatureSection } from "@/components/FeatureSection";
import { HomeJsonLd } from "@/components/JsonLd";
import { ProofStrip } from "@/components/ProofStrip";
import { RevealOnScroll } from "@/components/RevealOnScroll";
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
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.22),transparent)]"
          aria-hidden
        />
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-center md:pt-16">
          <RevealOnScroll>
            <Image
              src="/brand/logo-light.png"
              alt=""
              width={112}
              height={112}
              className="mx-auto mb-6 h-24 w-24 md:h-28 md:w-28"
              priority
            />
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl md:leading-tight">
              Your personal dashboard for food, gym, and tasks
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
              {siteConfig.tagline}. Track nutrition, log workouts, and manage your
              day in one mobile-first app — installable from the browser.
            </p>
            <div className="mt-10 flex flex-col items-center">
              <DownloadSection compact />
            </div>
            <p className="mt-6">
              <a href="#features" className="text-sm font-medium text-violet-600 hover:underline">
                See what&apos;s inside ↓
              </a>
            </p>
          </RevealOnScroll>
        </section>

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
          className="scroll-mt-20 border-t border-zinc-200/80 bg-zinc-50/80 px-6 py-16 md:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <RevealOnScroll>
              <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900">
                How it works
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-center text-zinc-600">
                Three steps from sign-in to your daily snapshot.
              </p>
            </RevealOnScroll>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {howItWorks.map((step) => (
                <RevealOnScroll key={step.step}>
                  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                      {step.step}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-zinc-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
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
