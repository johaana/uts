
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface MobileNavProps {
    navLinks: { href: string; label: string }[];
    setOpen: (open: boolean) => void;
}

export function MobileNav({ navLinks, setOpen }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image 
                src="https://i.postimg.cc/vZTZ0Br5/utsavs-logo.png" 
                alt="Utsavs Logo" 
                width={48} 
                height={48} 
            />
            <span className="font-headline text-xl font-bold text-primary">Utsavs</span>
        </Link>
      </div>
      <nav className="flex flex-col p-4 space-y-2 flex-grow">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={cn(
              "text-lg font-medium transition-colors hover:text-primary p-2 rounded-md",
              pathname.startsWith(link.href) ? "text-primary bg-muted" : "text-foreground/80"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t">
        <Link href="/planner" onClick={() => setOpen(false)}>
            <Button 
              size="lg"
              className="w-full text-white font-bold tracking-wide shadow-lg bg-gradient-to-r from-blue-500 to-blue-600"
            >
                <Bot className="w-5 h-5 mr-2"/>
                AI Holiday Planner
            </Button>
        </Link>
      </div>
    </div>
  );
}
