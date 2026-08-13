import type { Metadata } from "next";

import { CardGrid, type CardItem } from "@/components/card-grid";
import { PageHero } from "@/components/page-hero";
import { PrizeGrid } from "@/components/prize-grid";
import { RuleGrid } from "@/components/rule-grid";
import { Section, SectionHead } from "@/components/section";
import { Timeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "Competition | LA Pokerbots",
  description: "LA Pokerbots competition format, schedule, rules, and prizes.",
};

const cards: CardItem[] = [
  {
    num: "01 / LEARN",
    title: "Weekly workshops",
    body: "Hand equity, expected value, CFR, opponent modeling, and exploitative play.",
  },
  {
    num: "02 / BUILD",
    title: "Nightly scrimmages",
    body: "Submit your latest bot and review fresh results, hand histories, and rankings.",
  },
  {
    num: "03 / COMPETE",
    title: "Live finals",
    body: "The top eight teams enter a bracket with live commentary and visualization.",
  },
];

export default function Competition() {
  return (
    <>
      <PageHero eyebrow="The competition" title="Build. Test." accent="Compete.">
        Four weeks of workshops and scrimmages lead to a massive qualifier and a
        live championship bracket.
      </PageHero>

      <Section>
        <CardGrid items={cards} />
        <Timeline />
      </Section>

      <Section>
        <SectionHead eyebrow="Prize pool" heading="Play for the pot." />
        <PrizeGrid />
      </Section>

      <Section>
        <SectionHead eyebrow="Rules" heading="Simple constraints. Deep strategy." />
        <RuleGrid />
      </Section>
    </>
  );
}
