import type { ReactNode } from "react";

import { Rise } from "@/components/motion";
import { Eyebrow } from "@/components/section";

/** Full-width page header used by every page except the home page. */
export function PageHero({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <header className="border-b border-line pt-[100px] pb-[72px] max-mid:pt-[70px] max-mid:pb-[55px]">
      <div className="wrap">
        <Rise>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Rise>
        <Rise delay={0.08}>
          <h1 className="text-page mt-6 leading-[0.82] font-medium tracking-[-0.075em] uppercase">
            {title}
            <br />
            <span className="text-pink">{accent}</span>
          </h1>
        </Rise>
        <Rise delay={0.16}>
          <p className="mt-7 max-w-[700px] text-[1.12rem] text-fog">{children}</p>
        </Rise>
      </div>
    </header>
  );
}
