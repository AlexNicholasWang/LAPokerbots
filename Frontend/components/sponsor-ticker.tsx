import Image from "next/image";

import { sponsors, TICKER_SLOTS, type Sponsor } from "@/content/sponsors";

const pillClass =
  "mx-2 flex h-[72px] min-w-[196px] items-center justify-center gap-2.5 rounded-[6px] border px-[22px] py-2.5 font-mono text-[0.78rem] font-bold tracking-[0.08em] uppercase";

type Pill = { sponsor: Sponsor } | { label: string };

const pills: Pill[] = [
  ...sponsors.map((sponsor) => ({ sponsor })),
  ...Array.from({ length: Math.max(0, TICKER_SLOTS - sponsors.length) }, (_, i) => ({
    label: `Sponsor 0${sponsors.length + i + 1}`,
  })),
];

/** The track is rendered twice so the -50% marquee loops seamlessly. */
export function SponsorTicker() {
  return (
    <div className="group relative overflow-hidden border-y border-line bg-[#0b0b0f] py-5 [contain:paint]">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 z-0 h-0.5 bg-[linear-gradient(90deg,var(--color-blue),var(--color-pink)_24%,var(--color-pink)_76%,var(--color-blue))] shadow-[0_0_18px_rgba(255,93,158,0.42)]"
      />
      <div className="relative z-[1] flex w-max animate-marquee items-center group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...pills, ...pills].map((pill, i) =>
          "sponsor" in pill ? (
            <div
              key={i}
              className={`${pillClass} border-bone bg-bone text-[#17171c]`}
            >
              <Image
                src={pill.sponsor.logo}
                alt=""
                width={44}
                height={44}
                className="size-11 rounded-full object-contain"
              />
              <span>{pill.sponsor.name}</span>
            </div>
          ) : (
            <div
              key={i}
              className={`${pillClass} border-white/[0.14] bg-soft text-[#a9a6af]`}
            >
              {pill.label}
            </div>
          )
        )}
      </div>
    </div>
  );
}
