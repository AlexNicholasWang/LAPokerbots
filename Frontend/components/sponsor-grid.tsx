import Image from "next/image";

import { sponsors, SPONSOR_SLOTS } from "@/content/sponsors";

const tileClass =
  "grid h-[170px] place-items-center text-center font-mono text-[0.72rem] font-bold tracking-[0.12em] uppercase";

const placeholders = Array.from(
  { length: Math.max(0, SPONSOR_SLOTS - sponsors.length) },
  (_, i) => `Logo 0${sponsors.length + i + 1}`
);

export function SponsorGrid() {
  return (
    <div className="full-bleed grid grid-cols-4 gap-px border-y border-line bg-line max-mid:grid-cols-2 max-xs:grid-cols-1">
      {sponsors.map((sponsor) => (
        <div
          key={sponsor.name}
          className={`${tileClass} bg-bone text-[#17171c]`}
        >
          <div>
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={112}
              height={112}
              className="mx-auto mb-2.5 block size-28 rounded-full object-contain"
            />
            <strong className="block tracking-[0.1em]">{sponsor.name}</strong>
          </div>
        </div>
      ))}
      {placeholders.map((label) => (
        <div key={label} className={`${tileClass} bg-panel text-[#77747d]`}>
          <div>
            <span className="mx-auto mb-2.5 block h-8 w-14 -skew-x-12 border border-[#55525c]" />
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
