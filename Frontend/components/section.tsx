import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-mono text-[0.72rem] font-bold tracking-[0.18em] text-pink uppercase",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn("border-b border-line py-[90px] max-mid:py-[70px]", className)}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

/** The narrow-eyebrow / wide-heading pair used at the top of most sections. */
export function SectionHead({
  eyebrow,
  heading,
  lede,
}: {
  eyebrow: string;
  heading: string;
  lede?: string;
}) {
  return (
    <Reveal className="mb-[50px] grid grid-cols-[0.5fr_1.5fr] gap-10 max-mid:grid-cols-1">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div>
        <h2 className="text-section leading-[0.95] font-medium tracking-[-0.055em]">
          {heading}
        </h2>
        {lede && (
          <p className="mt-[22px] max-w-[680px] text-[1.05rem] text-dim">{lede}</p>
        )}
      </div>
    </Reveal>
  );
}
