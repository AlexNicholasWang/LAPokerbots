export type Sponsor = {
  name: string;
  logo: string;
};

/** Confirmed sponsors. The sponsor grid reads from here. */
export const sponsors: Sponsor[] = [
  { name: "Jane Street", logo: "/sponsors/jane-street.png" },
  { name: "DRW", logo: "/sponsors/DRW.png"},
  { name: "Walleye Capital", logo: "/sponsors/walleye-capital.jpg"},
  { name: "AXQ Capital", logo: "/sponsors/AXQ-Capital.png" },
  { name: "Freeport Markets", logo: "/sponsors/freeport-markets.png" },
];

/** The grid always shows 8 tiles; unfilled ones render as placeholders. */
export const SPONSOR_SLOTS = 8;