"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "./MobileNav";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/date-intelligence", label: "Date Intelligence" },
  { href: "/built-for", label: "Built For" },
  { href: "/api", label: "API" },
  { href: "/travel-insurance", label: "Travel Insurance" },
  { href: "https://utsavs.com", label: "Stories ↗", external: true },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300",
        isScrolled ? "h-16 bg-background/95 backdrop-blur-sm shadow-sm" : "h-20 bg-background"
    )}>
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <div className="flex items-center">
            <Link href="/" className="flex flex-col items-start group">
                <span className="font-headline text-3xl font-bold text-primary">Utsavs</span>
                <span className="text-[10px] text-foreground/60 font-mono font-bold uppercase tracking-widest mt-0.5">Global Calendar Intelligence</span>
            </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={cn(
                "text-sm font-bold transition-colors relative py-1",
                !link.external && pathname === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full">
                    <MobileNav setOpen={setIsSheetOpen} />
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
