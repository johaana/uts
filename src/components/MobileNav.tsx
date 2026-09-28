
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { MessageSquare } from 'lucide-react';

const navLinks = [
  { href: "/date-intelligence", label: "Date Intelligence" },
  { href: "/travel-insurance", label: "Insurance" },
  { href: "/api", label: "API" },
  { href: "/built-for", label: "Built For" },
  { href: "/festivals", label: "Stories ↗" },
];

export function MobileNav({ setOpen }: { setOpen: (open: boolean) => void }) {
  const pathname = usePathname();
  const WHATSAPP_LINK = "https://wa.me/919860997711";

  return (
    <div className="flex flex-col h-full bg-background text-left">
      <div className="p-6 border-b">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
            Utsavs
            <span>from occasion to impact</span>
        </Link>
      </div>
      <nav className="flex flex-col p-6 space-y-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={cn(
              "text-lg font-bold transition-colors",
              pathname === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
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
