"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { MessageSquare } from 'lucide-react';

const navLinks = [
  { href: "/date-intelligence", label: "Date Intelligence" },
  { href: "/built-for", label: "Built For" },
  { href: "/api", label: "API" },
  { href: "/travel-insurance", label: "Travel Insurance" },
  { href: "https://utsavs.com", label: "Stories ↗", external: true },
];

export function MobileNav({ setOpen }: { setOpen: (open: boolean) => void }) {
  const pathname = usePathname();
  const WHATSAPP_LINK = "https://wa.me/919860997711";

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="p-6 border-b text-left">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
            Utsavs
            <span>from occasion to impact</span>
        </Link>
      </div>
      <nav className="flex flex-col p-6 space-y-6 text-left">
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
      <div className="mt-auto p-6 border-t bg-muted/10">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button className="w-full font-bold h-12 rounded-full bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888]">
            <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp Us
          </Button>
        </a>
      </div>
    </div>
  );
}
