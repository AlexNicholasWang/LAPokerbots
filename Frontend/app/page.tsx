import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CardGrid, type CardItem } from "@/components/card-grid";
import { Rise } from "@/components/motion";
import { Eyebrow, Section, SectionHead } from "@/components/section";
import { site } from "@/content/site";

const cards: CardItem[] = [
  {
    num: "01 / ABOUT",
    title: "Why Pokerbots?",
    body: "Meet the student community behind UCLA's poker AI competition.",
    href: "/about",
  },
  {
    num: "02 / COMPETITION",
    title: "How it works",
    body: "Explore the format, schedule, rules, and prize pool.",
    href: "/competition",
  },
  {
    num: "03 / JOIN US",
    title: "Join the team",
    body: "Help organize LA Pokerbots, build the event, and support the competitor community.",
    href: "/join",
  },
];

export default function Home() {
  return (
    <>
      <header className="relative grid min-h-[calc(100vh-76px)] items-center py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[160px] -right-[190px] size-[650px] bg-[radial-gradient(circle,rgba(118,112,255,0.22),transparent_68%)]"
        />
        <div className="wrap">
          <div className="relative z-[1] grid grid-cols-[1.25fr_0.75fr] items-end gap-[70px] max-mid:grid-cols-1">
            <div>
              <Rise>
                <Eyebrow>UCLA · Winter 2027 · Westwood</Eyebrow>
              </Rise>
              <Rise delay={0.08}>
                <h1 className="text-display leading-[0.82] font-medium tracking-[-0.075em] uppercase">
                  Build the
                  <br />
                  <span className="text-pink">best bluff.</span>
                </h1>
              </Rise>
              <Rise delay={0.16}>
                <p className="mt-[34px] max-w-[560px] text-[1.1rem] text-fog">
                  LA Pokerbots is UCLA&apos;s poker AI competition. Build an
                  autonomous bot, test your strategy, and compete across hundreds
                  of thousands of hands.
                </p>
              </Rise>
              <Rise delay={0.24}>
                <div className="mt-[34px] flex flex-wrap gap-[14px]">
                  <Button asChild variant="apply" size="cta">
                    <a href={site.luma} target="_blank" rel="noopener">
                      Apply on Luma ↗
                    </a>
                  </Button>
                  <Button asChild variant="line" size="cta">
                    <Link href="/competition">Explore competition</Link>
                  </Button>
                </div>
              </Rise>
            </div>
            <Rise delay={0.32} className="max-mid:hidden">
              <div className="border-t border-line pt-[22px]">
                <strong className="text-num-md block font-mono leading-none font-normal text-pink">
                  01
                </strong>
                <span className="mt-2.5 block text-[0.9rem] text-dim">
                  Week to turn game theory, probability, and code into a winning
                  player.
                </span>
              </div>
            </Rise>
          </div>
        </div>
      </header>

      <Section>
        <SectionHead
          eyebrow="LA Pokerbots"
          heading="One competition. Four weeks. Thousands of decisions."
          lede="Learn the fundamentals, build your strategy, test against the field, and earn your seat at the final table."
        />
        <CardGrid items={cards} />
      </Section>
    </>
  );
}
