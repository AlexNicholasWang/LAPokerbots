import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LA Pokerbots 2027 | Los Angeles Poker AI Competition",
  description: "LA Pokerbots is UCLA's Los Angeles poker AI competition — build an autonomous bot, compete over 500,000+ hands, and play for the prize pool."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
