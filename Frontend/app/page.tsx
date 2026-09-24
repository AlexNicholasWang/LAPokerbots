const faqs = [
  {
    q: "Why Poker?",
    a: "Poker is a game of incomplete information, probability, and strategy. LA Pokerbots turns those ideas into a programming competition where teams build autonomous agents that make decisions under uncertainty."
  },
  {
    q: "Is this a programming competition?",
    a: "Yes. Teams build a fully autonomous poker bot and compete against other teams. You can write your bot in Python, C++, or Java."
  },
  {
    q: "How much coding experience do I need?",
    a: "All experience levels are welcome. Prior programming experience helps, but the event is designed so motivated students can learn quickly during the sprint."
  },
  {
    q: "How many people can be on a team?",
    a: "Teams may have 1–4 members."
  },
  {
    q: "What is the tournament format?",
    a: "Bots compete over 500,000+ hands to reduce variance. The top 8 teams from the qualifier advance to a live finals bracket."
  },
  {
    q: "When is LA Pokerbots?",
    a: "Kickoff is January 10, 2027. Teams build and scrimmage January 10–15, qualifiers are January 16, and live finals are January 17."
  }
];

const sponsors = [
  {
    name: "Jane Street",
    url: "https://www.janestreet.com/",
    logo: "/sponsors/jane-street.png"
  },
  {
    name: "DRW",
    url: "https://www.drw.com/",
    logo: "/sponsors/drw.png"
  },
  {
    name: "AXQ Capital",
    url: "https://www.axqcap.com/",
    logo: "/sponsors/axq-capital.png"
  },
  {
    name: "Freeport Markets",
    url: "https://freeportmarkets.com/",
    logo: "/sponsors/freeport-markets.png"
  },
  {
    name: "Walleye Capital",
    url: "https://walleyecapital.com/",
    logo: "/sponsors/walleye-capital.png"
  }
];

function LASkyline() {
  return (
    <svg className="la-skyline" viewBox="0 0 1200 260" aria-hidden="true" preserveAspectRatio="none">
      <path className="hills" d="M0 185 C120 150 210 156 306 128 C420 95 505 138 602 108 C720 72 824 118 928 92 C1034 65 1104 91 1200 70 L1200 260 L0 260 Z" />
      <path className="city" d="M0 214 H72 V182 H105 V201 H142 V163 H178 V210 H220 V180 H250 V206 H290 V140 H329 V193 H366 V174 H392 V213 H438 V160 H470 V190 H508 V121 H545 V209 H588 V166 H622 V197 H652 V148 H686 V207 H727 V176 H754 V120 H787 V204 H823 V156 H860 V194 H890 V134 H928 V207 H964 V178 H1002 V151 H1036 V205 H1072 V171 H1106 V194 H1142 V143 H1174 V211 H1200 V260 H0 Z" />
      <g className="palm palm-one" transform="translate(92 84)">
        <path d="M28 55 C31 94 25 132 18 180" />
        <path d="M29 58 C7 45 3 31 0 22 C19 24 28 35 31 53" />
        <path d="M29 58 C18 34 22 20 29 8 C40 27 38 43 31 56" />
        <path d="M30 58 C45 35 58 31 70 31 C59 47 47 55 31 60" />
        <path d="M29 59 C8 61 -3 70 -10 82 C11 80 22 72 31 61" />
      </g>
      <g className="palm palm-two" transform="translate(1040 100) scale(.82)">
        <path d="M28 55 C31 94 25 132 18 180" />
        <path d="M29 58 C7 45 3 31 0 22 C19 24 28 35 31 53" />
        <path d="M29 58 C18 34 22 20 29 8 C40 27 38 43 31 56" />
        <path d="M30 58 C45 35 58 31 70 31 C59 47 47 55 31 60" />
        <path d="M29 59 C8 61 -3 70 -10 82 C11 80 22 72 31 61" />
      </g>
    </svg>
  );
}

function PokerCards() {
  return (
    <div className="card-stage" aria-hidden="true">
      <div className="sun-disc" />
      <div className="playing-card card-back" />
      <div className="playing-card card-front">
        <span className="card-corner">A<br />♠</span>
        <span className="big-spade">♠</span>
        <span className="la-stamp">LOS<br />ANGELES</span>
        <span className="card-corner bottom">A<br />♠</span>
      </div>
      <div className="floating-chip chip-one">LA</div>
      <div className="floating-chip chip-two">♠</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="section-shell">
          <nav className="nav">
            <a className="brand" href="#top" aria-label="LA Pokerbots home">
              <span className="brand-mark">♠</span>
              <span>LA Pokerbots</span>
            </a>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#faq">FAQ</a>
              <a href="#sponsors">Sponsors</a>
              <a href="#team">Team</a>
            </div>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy-wrap">
              <div className="location-row">
                <p className="eyebrow">UCLA · LOS ANGELES · WINTER 2027</p>
                <span className="coordinates">34.0522° N · 118.2437° W</span>
              </div>
              <h1><span>LA</span><br />Pokerbots</h1>
              <p className="hero-copy">
                One week. One autonomous poker bot. A city built on bold bets.
                Build your strategy in Los Angeles and battle it out over 500,000+ hands.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="https://lu.ma/" target="_blank" rel="noreferrer">Register</a>
                <a className="button secondary" href="#about">Explore the competition</a>
              </div>
              <div className="la-tags" aria-label="Los Angeles theme">
                <span>WEST COAST AI</span><i />
                <span>GAME THEORY</span><i />
                <span>POKER</span><i />
                <span>LOS ANGELES</span>
              </div>
            </div>

            <PokerCards />
          </div>
        </div>
        <LASkyline />
      </section>
      <section className="content-section section-shell" id="about">
        <p className="eyebrow warm">WHAT IS LA POKERBOTS?</p>
        <div className="two-column">
          <h2>New Pokerbots Arena.<br /><em>Los Angeles attitude.</em></h2>
          <div className="body-copy">
            <p>
              LA Pokerbots is a student-run computerized poker tournament.
              Teams have one week to design, build, and refine a completely autonomous poker agent.
            </p>
            <p>
              Competitors combine computer science, mathematics, economics, game theory, machine learning,
              and decision-making under uncertainty—then put those ideas to the test head-to-head.
            </p>
          </div>
        </div>

        <div className="stats-grid">
          <div><span className="stat-kicker">TEAM SIZE</span><strong>1–4</strong><span>students per team</span></div>
          <div><span className="stat-kicker">VOLUME</span><strong>500K+</strong><span>hands played</span></div>
          <div><span className="stat-kicker">FINALS</span><strong>8</strong><span>top teams advance</span></div>
          <div><span className="stat-kicker">PRIZES</span><strong>$6K</strong><span>on the line</span></div>
        </div>
      </section>

      <section className="la-break">
        <div className="section-shell la-break-inner">
          <div>
            <p className="eyebrow sunset">BUILT ON THE WEST COAST</p>
            <h2>Code by day.<br />Compete by night.</h2>
          </div>
          <div className="sunset-copy">
            <p>Fast builds, high-variance ideas, late-night scrimmages, and one live finals bracket.</p>
            <div className="neighborhood-line"><span>WESTWOOD</span><span>DTLA</span><span>PACIFIC</span><span>LA</span></div>
          </div>
        </div>
        <div className="ocean-lines" aria-hidden="true"><span /><span /><span /></div>
      </section>

      <section className="dark-section" id="faq">
        <div className="stars" aria-hidden="true" />
        <div className="section-shell night-content">
          <p className="eyebrow night">FAQ · AFTER DARK</p>
          <div className="faq-header">
            <h2>Everything before<br />you ante up.</h2>
            <span className="mini-sign">LA<br />2027</span>
          </div>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <details key={item.q} open={i === 0}>
                <summary>{item.q}<span>+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section sponsor-section" id="sponsors">
        <div className="section-shell">
          <p className="eyebrow warm">2027 SPONSORS</p>
          <h2 className="section-title">Backed by firms that know how to make a calculated bet.</h2>
          <div className="sponsor-grid">
            {sponsors.map((sponsor, index) => (
              <a
                className={`sponsor-card sponsor-${index + 1}`}
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${sponsor.name}`}
              >
                <span className="sponsor-number">0{index + 1}</span>
                <img
                  className="sponsor-logo"
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                />
                <span className="sponsor-link">VISIT ↗</span>
              </a>
            ))}
          </div>
          <p className="sponsor-note">
            Interested in sponsoring LA Pokerbots? Reach out at <a href="mailto:alexwang770@g.ucla.edu">alexwang770@g.ucla.edu</a>.
          </p>
        </div>
      </section>

      <section className="prize-section">
        <div className="prize-sun" aria-hidden="true" />
        <div className="section-shell prize-grid">
          <div>
            <p className="eyebrow sunset">THE POT</p>
            <h2>Play for the<br />LA podium.</h2>
            <p className="prize-copy">Three places. Six thousand dollars. One week to build something worth betting on.</p>
          </div>
          <div className="prizes">
            <div><span>01 · FIRST</span><strong>$3,000</strong></div>
            <div><span>02 · SECOND</span><strong>$2,000</strong></div>
            <div><span>03 · THIRD</span><strong>$1,000</strong></div>
          </div>
        </div>
      </section>

      <section className="content-section section-shell" id="team">
        <p className="eyebrow warm">MEET THE TEAM</p>
        <div className="two-column team-intro">
          <h2>Built in LA.<br /><em>Run by students.</em></h2>
          <p className="body-copy">LA Pokerbots brings the spirit of AI Poker to Los Angeles with a compact, high-intensity competition built around strategy, engineering, and community.</p>
        </div>
        <div className="team-grid">
          <div className="team-card featured">
            <div className="avatar">AW</div>
            <div><strong>Alexander Wang</strong><span>Founder · UCLA</span></div>
          </div>
          <div className="team-card">
            <div className="avatar alt">LA</div>
            <div><strong>LA Pokerbots Team</strong><span>2027 Organizers</span></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-sunset" aria-hidden="true" />
        <div className="section-shell footer-grid">
          <div>
            <div className="brand footer-brand"><span className="brand-mark">♠</span><span>LA Pokerbots</span></div>
            <h3>See you in Los Angeles.</h3>
            <p>Questions, comments, or sponsorship inquiries?</p>
            <a href="mailto:alexwang770@g.ucla.edu">alexwang770@g.ucla.edu</a>
          </div>
          <div className="footer-right">
            <p>34.0522° N · 118.2437° W</p>
            <p>© LA Pokerbots 2027</p>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
        <LASkyline />
      </footer>
    </main>
  );
}