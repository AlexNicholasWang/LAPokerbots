"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/content/site";

const linkClass =
  "font-mono text-[0.67rem] font-bold tracking-[0.14em] uppercase no-underline";

function ApplyButton({ className }: { className?: string }) {
  return (
    <Button asChild variant="apply" size="cta" className={className}>
      <a href={site.luma} target="_blank" rel="noopener">
        Compete ↗
      </a>
    </Button>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
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
          {nav.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  linkClass,
                  active ? "text-bone" : "text-dim hover:text-bone"
                )}
              >
                {label}
                {active && <span className="mt-[7px] block h-0.5 bg-pink" />}
              </Link>
            );
          })}
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
          <SheetContent
            side="top"
            className="gap-6 border-line bg-ink p-6 pt-8"
          >
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="flex flex-col gap-5">
              {nav.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === href ? "page" : undefined}
                  className={cn(
                    linkClass,
                    pathname === href ? "text-bone" : "text-dim"
                  )}
                >
                  {label}
                </Link>
              ))}
              <ApplyButton className="self-start" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
