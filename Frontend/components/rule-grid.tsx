import { Reveal } from "@/components/motion";
import { rules } from "@/content/rules";

export function RuleGrid() {
  return (
    <Reveal className="grid grid-cols-2 gap-px border border-line bg-line max-xs:grid-cols-1">
      {rules.map((rule) => (
        <div key={rule.num} className="bg-panel p-[30px]">
          <b className="font-mono text-[0.68rem] font-bold text-pink">
            {rule.num}
          </b>
          <h3 className="mt-[22px] mb-2 text-[1.17rem]">{rule.title}</h3>
          <p className="text-dim">{rule.detail}</p>
        </div>
      ))}
    </Reveal>
  );
}
