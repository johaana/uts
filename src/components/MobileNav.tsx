"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: "/date-intelligence", label: "Date Intelligence" },
  { href: "/built-for", label: "Built For" },
  { href: "/api", label: "API" },
  { href: "/travel-insurance", label: "Travel Insurance" },
  { href: "https://utsavs.com", label: "Stories ↗", external: true },
];

export function MobileNav({ setOpen }: { setOpen: (open: boolean) => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <Link href="/" className="flex flex-col items-start" onClick={() => setOpen(false)}>
            <span className="font-headline text-2xl font-bold text-primary">Utsavs</span>
            <span className="text-[10px] text-foreground/60 font-mono font-bold uppercase tracking-widest mt-0.5">Global Calendar Intelligence</span>
        </Link>
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            onClick={() => setOpen(false)}
            className={cn(
              "text-lg font-bold transition-colors",
              !link.external && pathname === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
