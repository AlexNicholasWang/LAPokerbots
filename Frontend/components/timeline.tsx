import { Reveal } from "@/components/motion";
import { schedule } from "@/content/schedule";

export function Timeline() {
  return (
    <div className="mt-[70px] border-t border-line">
      {schedule.map((event, i) => (
        <Reveal
          key={event.date}
          delay={i * 0.06}
          className="grid grid-cols-[0.45fr_1.15fr_1fr] gap-[35px] border-b border-line py-[34px] max-mid:grid-cols-1 max-mid:gap-2"
        >
          <time className="font-mono text-[0.72rem] font-bold tracking-[0.1em] text-pink uppercase">
            {event.date}
          </time>
          <h3 className="text-[1.25rem]">{event.title}</h3>
          <p className="text-dim">{event.detail}</p>
        </Reveal>
      ))}
    </div>
  );
}
