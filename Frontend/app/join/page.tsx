import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { CardGrid, type CardItem } from "@/components/card-grid";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section, SectionHead } from "@/components/section";

export const metadata: Metadata = {
  title: "Join Us | LA Pokerbots",
  description: "Join the LA Pokerbots organizing team at UCLA.",
};

const details = [
  { term: "Who", value: "Current UCLA students" },
  { term: "Work", value: "Events, engineering, design, and partnerships" },
  { term: "Experience", value: "Curiosity matters most" },
  { term: "Application", value: "Google Form - open now" },
];

const cards: CardItem[] = [
  {
    num: "01 / PRODUCT",
    title: "Build the experience",
    body: "Shape the rules, participant journey, workshops, and live final.",
  },
  {
    num: "02 / ENGINEERING",
    title: "Run the competition",
    body: "Help develop tournament systems, tooling, and visualizations.",
  },
  {
    num: "03 / COMMUNITY",
    title: "Grow the network",
    body: "Work with students, mentors, speakers, and company partners.",
  },
];

export default function Join() {
  return (
    <>
      <PageHero
        eyebrow="Join our organizing team"
        title="Help build"
        accent="the table."
      >
        This application is for students interested in joining the team that
        organizes LA Pokerbots—not for competition participants.
      </PageHero>

      <Section>
        <div className="grid grid-cols-2 items-start gap-[70px] max-mid:grid-cols-1">
          <Reveal>
            <Eyebrow>Team applications</Eyebrow>
            <h2 className="text-panel mt-[22px] leading-none font-medium tracking-[-0.055em]">
              Shape the next LA Pokerbots season.
            </h2>
            <ul className="mt-7 list-none border-t border-line">
              {details.map((detail) => (
                <li
                  key={detail.term}
                  className="flex justify-between gap-5 border-b border-line py-[18px]"
                >
                  <b className="font-mono text-[0.68rem] font-bold text-pink uppercase">
                    {detail.term}
                  </b>
                  <span className="text-right text-dim">{detail.value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="border border-line bg-panel p-10">
            <h2 className="text-[2rem]">Join the LA Pokerbots team.</h2>
            <p className="mt-[15px] mb-[26px] text-dim">
              Help design the competition, support participants, build tournament
              infrastructure, and grow our UCLA community.
            </p>
    <Button asChild variant="apply" size="cta">
      <a
      href="https://forms.gle/6kf5s7wPwwiPQLm86"
      target="_blank"
      rel="noopener"
      >
      Apply to the team ↗
      </a>
    </Button>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Ways to contribute"
          heading="There is a seat for every kind of builder."
        />
        <CardGrid items={cards} />
      </Section>
    </>
  );
}
