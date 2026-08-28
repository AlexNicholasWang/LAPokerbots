import { Button } from "@/components/ui/button";
import { Reveal, Rise } from "@/components/motion";
import { Eyebrow, Section, SectionHead } from "@/components/section";
import { SponsorGrid } from "@/components/sponsor-grid";
import { site } from "@/content/site";

const prizes = [
  { place: "1st place", amount: "$2,500" },
  { place: "2nd place", amount: "$1,000" },
  { place: "3rd & 4th place", amount: "$500 each" },
] as const;

const facts = [
  { value: "500K+", label: "Hands simulated" },
  { value: "$4.5K", label: "Cash prizes" },
  { value: "1–4", label: "Students per team" },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero — SCPT style: logo, dates, host line, one big register button. */}
      <header className="relative grid min-h-[calc(100vh-76px)] place-items-center py-[90px] text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(118,112,255,0.20),transparent_60%)]"
        />
        <div className="wrap relative z-[1] flex flex-col items-center">
          <Rise>
            <span className="grid size-[92px] place-items-center rounded-full border-2 border-pink text-[2.6rem] shadow-[inset_0_0_0_8px_var(--color-ink),inset_0_0_0_10px_var(--color-blue)]">
              ♠
            </span>
          </Rise>
          <Rise delay={0.08}>
            <h1 className="text-page mt-8 leading-[0.85] font-medium tracking-[-0.06em] uppercase">
              LA <span className="text-pink">Pokerbots</span>
            </h1>
          </Rise>
          <Rise delay={0.16}>
            <p className="mt-7 font-mono text-[0.95rem] tracking-[0.06em] text-fog">
              Jan 10–17, 2027 @ UCLA · Westwood, CA
            </p>
            <p className="mt-2 font-mono text-[0.78rem] tracking-[0.1em] text-dim uppercase">
              UCLA&apos;s poker AI competition
            </p>
          </Rise>
          <Rise delay={0.24}>
            <Button asChild variant="apply" size="cta" className="mt-9 px-12">
              <a href="#register">Register</a>
            </Button>
          </Rise>
        </div>
      </header>

      <Section className="scroll-mt-6" id="about">
        <SectionHead eyebrow="About" heading="About LA Pokerbots." />
        <Reveal className="grid max-w-[820px] gap-6 text-[1.05rem] text-fog">
          <p>
            LA Pokerbots is a one-week computerized poker tournament held at
            UCLA. Teams of 1–4 program a completely autonomous pokerbot in
            Python, C++, or Java that competes against other bots across 500K+
            simulated hands. This free-to-enter competition is meant to engage
            students in strategic AI — game theory,