import type { Metadata } from "next";

import { CardGrid, type CardItem } from "@/components/card-grid";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHead } from "@/components/section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About | LA Pokerbots",
  description: "About LA Pokerbots, LA's poker AI competition.",
};

const stats = [
  { value: "1–4", label: "students per team" },
  { value: "500K+", label: "hands simulated" },
  { value: "3", label: "supported languages" },
];

const cards: CardItem[] = [
  {
    num: "01 / ACCESS",
    title: "Beginner friendly",
    body: "No poker experience is required. We teach the fundamentals before the first scrimmage.",
  },
  {
    num: "02 / SUPPORT",
    title: "Built to learn",
    body: "Starter bots and workshops help teams focus on strategic decisions rather than infrastructure.",
  },
  {
    num: "03 / COMMUNITY",
    title: "UCLA powered",
    body: "Meet technical students across majors through a shared competitive challenge.",
  },
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About LA Pokerbots" title="Code meets" accent="cards.">
        We are a UCLA student competition for people who would rather out-code
        the table than outplay it.
      </PageHero>

      <Section>
        <SectionHead
          eyebrow="Our mission"
          heading="Make strategic AI tangible."
          lede="Poker is a compact laboratory for decision-making under uncertainty. We make it approachable with starter code, technical workshops, and a community built around experimentation."
        />
        <Reveal className="grid min-h-[430px] grid-cols-[1.5fr_0.5fr] border border-line max-mid:grid-cols-1">
          <div className="min-h-[620px] overflow-hidden border border-line bg-panel max-mid:min-h-[700px]">
            <iframe
              src={site.luma}
              title="LA Pokerbots competitor application on Luma"
              allow="fullscreen; payment"
              className="block h-[620px] w-full border-0 max-mid:h-[700px]"
            />
          </div>
          <div className="grid">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col justify-center border-b border-line p-[34px] last:border-0"
              >
                <b className="text-num-sm font-mono font-normal text-pink">
                  {stat.value}
                </b>
                <span className="text-[0.9rem] text-dim">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <CardGrid items={cards} />
      </Section>
    </>
  );
}
