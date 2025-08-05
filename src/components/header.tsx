
"use client";

import Link from "next/link";
import { UtsavsLogo } from "./icons";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/festivals", label: "Festivals" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-40 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
                <UtsavsLogo />
            </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                pathname.startsWith(link.href) ? "text-primary font-bold" : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center">
             <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </Button>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col gap-6 pt-10">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                        <UtsavsLogo />
                    </Link>
                    {navLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            pathname.startsWith(link.href) ? "text-primary" : "text-foreground"
                        )}
                        >
                        {link.label}
                        </Link>
                    ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
        
        {/* Desktop Search */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
