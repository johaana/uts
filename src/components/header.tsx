"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

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

  return (
    <header className="site-header">
      <nav className="wrap site-nav">
        <Link href="/" className="brand" aria-label="Utsavs home">
          <span className="brand-name">Utsavs</span>
          <span className="brand-sub">DATE INTELLIGENCE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="navlinks">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={cn(
                pathname === link.href && "active"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="/api" className="navcta hidden md:inline-block">
            Get API access
          </Link>
          
          <button 
            className="md:hidden p-2 text-[#F4F1E8] hover:bg-white/5 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

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
             <Link href="/api" onClick={() => setIsMenuOpen(false)} className="navcta w-full block text-center">
                Get API Access
             </Link>
          </div>
        </div>
      )}
    </header>
  );
}
