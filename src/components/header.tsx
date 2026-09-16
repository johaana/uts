"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";

const navLinks = [
  { href: "/", label: "Date Intelligence", key: "home" },
  { href: "/built-for", label: "Built For", key: "built" },
  { href: "/api", label: "API", key: "api" },
  { href: "/travel-insurance", label: "Travel Insurance", key: "insurance" },
  { href: "https://utsavs.com", label: "Stories ↗", external: true },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="wrap">
        <Link href="/" className="logo">Utsavs <span>from occasion to impact</span></Link>
        <div className="navlinks">
          {navLinks.map((link) => (
            <Link
              key={link.key || link.href}
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
