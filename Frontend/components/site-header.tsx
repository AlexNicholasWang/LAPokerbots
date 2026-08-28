"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/content/site";

const linkClass =
  "font-mono text-[0.67rem] font-bold tracking-[0.14em] uppercase no-underline text-dim hover:text-bone";

function ApplyButton({ className }: { className?: string }) {
  return (
    <Button asChild variant="apply" size="cta" className={className}>
      <a href="#register">Compete ↗</a>
    </Button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-20 border-b border-line bg-ink/90 backdrop-blur-[18px]">
      <div className="wrap flex h-[76px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-mono text-[0.9rem] font-bold tracking-[0.08em] no-underline"
        >
          <span className="grid size-9 place-items-center rounded-full border border-pink shadow-[inset_0_0_0_4px_var(--color-ink),inset_0_0_0_5px_var(--color-blue)]">
            ♠
          </span>
          {site.wordmark}
        </Link>

        <div className="flex items-center gap-[30px] max-mid:hidden">
          {nav.map(({ href, label }) => (
            <a key={href} href={href} className={linkClass}>
              {label}
            </a>
          ))}
          <ApplyButton />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="border border-line p-2 font-mono text-[0.72rem] font-bold mid:hidden"
            >
              MENU
            </button>
          </SheetTrigger>
          <SheetContent side="top" className="gap-6 border-line bg-ink p-6 pt-8">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="flex flex-col gap-5">
              {nav.map(({ href, label }) => (
                
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  {label}
                </a>
              ))}
              <ApplyButton className="self-start" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}