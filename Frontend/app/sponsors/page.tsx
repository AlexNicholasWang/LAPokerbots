import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section, SectionHead } from "@/components/section";
import { SponsorGrid } from "@/components/sponsor-grid";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Sponsors | LA Pokerbots",
  description: "Sponsor LA Pokerbots at UCLA.",
};

export default function Sponsors() {
  return (
    <>
      <PageHero eyebrow="Our partners" title="Back the" accent="builders.">
        Connect with ambitious UCLA students working at the intersection of AI,
        quantitative thinking, and competitive strategy.
      </PageHero>

      <Section>
        <SectionHead
          eyebrow="Sponsors"
          heading="Our Partners."
          lede="Thank you for your geneorsity"
        />
        <SponsorGrid />
      </Section>

      <Section>
        <div className="grid grid-cols-2 items-start gap-[70px] max-mid:grid-cols-1">
          <Reveal>
            <Eyebrow>Become a partner</Eyebrow>
            <h2 className="text-panel mt-[22px] leading-none font-medium tracking-[-0.055em]">
              Meet technical talent where they build.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="border border-line bg-panel p-10">
            <h2 className="text-[2rem]">Start a conversation.</h2>
            <p className="mt-[15px] mb-[26px] text-dim">
              Support prizes, workshops, recruiting touchpoints, and the live
              final. Sponsorship details can be tailored to fit your team.
            </p>
            <Button asChild variant="apply" size="cta">
              <a href={`mailto:${site.email}`}>Email sponsorships ↗</a>
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
