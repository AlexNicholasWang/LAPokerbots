import { Reveal } from "@/components/motion";
import { prizes } from "@/content/prizes";

export function PrizeGrid() {
  return (
    <Reveal className="grid grid-cols-[1.2fr_0.9fr_0.9fr] gap-px border border-line bg-line max-mid:grid-cols-1">
      {prizes.map((prize, i) => (
        <div
          key={prize.place}
          className={
            i === 0
              ? "min-h-[240px] bg-[linear-gradient(145deg,rgba(255,93,158,0.16),var(--color-panel))] p-[38px]"
              : "min-h-[240px] bg-panel p-[38px]"
          }
        >
          <small className="font-mono text-[0.65rem] font-bold tracking-[0.15em] text-dim uppercase">
            {prize.place}
          </small>
          <b
            className={`text-num-lg mt-[30px] mb-3 block font-mono font-normal ${
              i === 0 ? "text-pink" : ""
            }`}
          >
            {prize.amount}
          </b>
          <p className="text-[0.9rem] text-dim">{prize.detail}</p>
        </div>
      ))}
    </Reveal>
  );
}
