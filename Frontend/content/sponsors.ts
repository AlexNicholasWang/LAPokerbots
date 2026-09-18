export type Sponsor = {
  name: string;
  logo: string;
  /** Sponsor's website. Clicking their tile opens it in a new tab. */
  url: string;
};

/** Confirmed sponsors. The sponsor grid reads from here. */
export const sponsors: Sponsor[] = [
  { name: "Jane Street", logo: "/sponsors/jane-street.png", url: "https://www.janestreet.com/" },
  { name: "DRW", logo: "/sponsors/DRW.png", url: "https://www.drw.com/" },
  { name: "Walleye Capital", logo: "/sponsors/walleye-capital.svg", url: "https://walleyecapital.com/" },
  { name: "AXQ Capital", logo: "/sponsors/AXQ-Capital.png", url: "https://www.axqcap.com/" },
  { name: "Freeport Markets", logo: "/sponsors/freeport-markets.png", url: "https://freeportmarkets.com/" },
];

/** The grid always shows 8 tiles; unfilled ones render as placeholders. */
export const SPONSOR_SLOTS = 8;