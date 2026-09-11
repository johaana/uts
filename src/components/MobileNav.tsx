"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinksMobile = [
  { href: "/festivals", label: "Festivals" },
  { href: "/recipes", label: "Recipes" },
  { href: "/calendar", label: "Explore by Month" },
  { href: "https://utsavs.com", label: "Stories ↗" },
];

export function MobileNav({ setOpen }: { setOpen: (open: boolean) => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <Link href="/" className="flex flex-col items-start" onClick={() => setOpen(false)}>
            <span className="font-headline text-2xl font-bold text-primary">Utsavs</span>
            <span className="text-xs text-foreground/80 font-sans font-bold">Every Festival Tells a Story</span>
        </Link>
      </div>
      <nav className="flex flex-col p-4 space-y-2 flex-grow">
        {navLinksMobile.map((link) => {
          const isExternal = link.href.startsWith('http');
          return (
          <Link
            key={link.href}
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            onClick={() => setOpen(false)}
            className={cn(
              "text-lg font-bold transition-colors p-2 rounded-md",
              !isExternal && pathname.startsWith(link.href) ? "text-primary bg-muted" : "text-foreground/80 hover:text-primary"
            )}
          >
            {link.label}
          </Link>
        )})}
      </nav>
      <div className="p-4 border-t space-y-4">
        <Link href="/planner" onClick={() => setOpen(false)}>
            <Button 
              variant="gradient"
              size="lg"
              className="w-full font-bold tracking-wide shadow-lg"
            >
                <Bot className="w-5 h-5 mr-2"/>
                AI Holiday Planner
            </Button>
        </Link>
      </div>
    </div>
  );
}
