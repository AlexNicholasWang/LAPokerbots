import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "LA Pokerbots | UCLA's Poker AI Competition",
  description: "LA Pokerbots — UCLA's student-run poker AI competition.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${dmSans.variable} ${spaceMono.variable} antialiased`}
    >
      <head>
        {/* Animated elements are server-rendered at opacity 0; without JS they
            would never fade in. */}
        <noscript>
          <style>{`[data-motion]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <div aria-hidden className="grid-overlay" />
        <SiteHeader />
        <main className="relative z-[1]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
