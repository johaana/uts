"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "./MobileNav";

export const NAV_LINKS = [
  { href: "/built-for", label: "Built For" },
  { href: "/api", label: "API" },
  { href: "/festivals", label: "Stories" },
  { href: "/international-insurance", label: "International Insurance" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all duration-500 backdrop-blur-md border-b bg-[#0F1428]/86 border-white/5">
      <nav className="wrap h-[72px] flex items-center justify-between">
        <Link href="/" className="logo text-white">
          Utsavs
          <span className="text-muted">from occasion to impact</span>
        </Link>
        
        <div className="hidden md:flex gap-9 text-[11px] font-bold uppercase tracking-[0.2em] font-ui">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors duration-300",
                (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                  ? "text-white" 
                  : "text-[#9AA1C0] hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 transition-colors text-paper" aria-label="Toggle menu">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 border-none w-full max-w-[300px] bg-[#0F1428]">
              <MobileNav setOpen={setOpen} />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
