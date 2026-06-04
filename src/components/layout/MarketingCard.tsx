import type { ReactNode } from "react";

type MarketingCardProps = {
  children: ReactNode;
  className?: string;
};

export function MarketingCard({ children, className = "" }: MarketingCardProps) {
  return (
    <div
      className={`w-full max-w-md rounded-2xl border border-card-border/80 bg-card/90 p-6 shadow-lg backdrop-blur-sm sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
