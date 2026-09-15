"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "h-[64px] bg-[#0F1428]/86 backdrop-blur-md border-white/10" : "h-[76px] bg-[#0F1428] border-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between h-full px-6">
        <Link href="/" className="flex flex-col items-start group shrink-0">
            <span className="font-headline text-2xl font-semibold text-[#F4F1E8]">Utsavs</span>
            <span className="text-[10px] text-[#E8A33D] font-mono font-medium uppercase tracking-[0.14em] mt-0.5">DATE INTELLIGENCE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={cn(
                "text-[14.5px] font-medium transition-colors relative py-1",
                pathname === link.href ? "text-[#F4F1E8]" : "text-[#9AA1C0] hover:text-[#F4F1E8]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
            <Link href="/api" className="hidden lg:block">
              <Button className="bg-[#F0C888] text-[#0F1428] hover:bg-[#E8A33D] h-10 px-5 text-sm font-medium rounded-full transition-all">
                Join API preview
              </Button>
            </Link>
            
            <button 
              className="md:hidden p-2 text-[#F4F1E8] hover:bg-white/5 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 right-0 bg-[#0F1428] border-b border-white/10 p-6 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-lg font-medium",
                  pathname === link.href ? "text-[#E8A33D]" : "text-[#9AA1C0]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/5">
             <Link href="/api" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#F0C888] text-[#0F1428] font-bold h-12 rounded-full">Get API Access</Button>
             </Link>
          </div>
        </div>
      )}
    </header>
  );
}
