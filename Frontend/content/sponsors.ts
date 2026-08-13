export type Sponsor = {
  name: string;
  logo: string;
};

/** Confirmed sponsors. Both the sponsor grid and the ticker read from here. */
export const sponsors: Sponsor[] = [
  { name: "OpenTrade", logo: "/sponsors/opentrade.jpg" },
];

/** The grid always shows 8 tiles; unfilled ones render as placeholders. */
export const SPONSOR_SLOTS = 8;

/** Unfilled pills shown in the ticker alongside the confirmed sponsors. */
export const TICKER_SLOTS = 4;
