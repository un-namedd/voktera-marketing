import { proofItems } from "@/content/marketing/home";
import { RevealOnScroll } from "@/components/RevealOnScroll";

function ProofIcon({ type }: { type: (typeof proofItems)[number]["icon"] }) {
  const className = "h-6 w-6 text-violet-600";
  switch (type) {
    case "layers":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="7"
            y="2"
            width="10"
            height="20"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path d="M11 18h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export function ProofStrip() {
  return (
    <section className="border-y border-zinc-200/80 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {proofItems.map((item) => (
          <RevealOnScroll key={item.label}>
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100">
                <ProofIcon type={item.icon} />
              </div>
              <p className="font-semibold text-zinc-900">{item.label}</p>
              <p className="mt-1 text-sm text-zinc-600">{item.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
