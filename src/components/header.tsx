"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "/date-intelligence", label: "Date Intelligence" },
  { href: "/travel-insurance", label: "Travel Insurance" },
  { href: "/festivals", label: "Stories ↗" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header>
      <nav className="wrap">
        <Link href="/" className="logo">
          Utsavs
          <span>from occasion to impact</span>
        </Link>
        
        <div className="hidden md:flex navlinks">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                pathname === link.href && "active"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-muted hover:text-paper transition-colors" aria-label="Toggle menu">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 border-none w-full max-w-[300px]">
              <MobileNav setOpen={setOpen} />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
