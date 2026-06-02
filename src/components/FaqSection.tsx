import { faqItems } from "@/content/marketing/home";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <RevealOnScroll>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-zinc-600">
            Quick answers about Voktera. More detail in our legal pages.
          </p>
        </RevealOnScroll>
        <div className="mt-10 space-y-3">
          {faqItems.map((item) => (
            <RevealOnScroll key={item.question}>
              <details className="group rounded-xl border border-zinc-200 bg-zinc-50/50 open:bg-white open:shadow-sm">
                <summary className="cursor-pointer list-none px-5 py-4 font-medium text-zinc-900 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span
                      className="text-violet-500 transition group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-zinc-100 px-5 pb-4 pt-2 text-sm leading-relaxed text-zinc-600">
                  {item.answer}
                </p>
              </details>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export { faqItems };
