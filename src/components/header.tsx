"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";

const navLinks = [
  { href: "/date-intelligence", label: "Date Intelligence" },
  { href: "/built-for", label: "Built For" },
  { href: "/api", label: "API" },
  { href: "/travel-insurance", label: "Travel Insurance" },
  { href: "https://utsavs.com", label: "Stories ↗", external: true },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="wrap">
        <Link href="/" className="logo">
          Utsavs
          <span>from occasion to impact</span>
        </Link>
        
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
        
        <Link href="/api" className="navcta">Get API Access</Link>
      </nav>
    </header>
  );
}
