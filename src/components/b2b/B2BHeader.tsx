'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function B2BHeader() {
  return (
    <header className="h-16 border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center gap-6">
            <Link href="/global-holiday-intelligence" className="flex items-center gap-2 group">
                <span className="font-headline text-2xl font-bold text-primary">Utsavs</span>
                <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider font-bold text-muted-foreground border-l pl-3 h-4 flex items-center">Global Holiday Intelligence</span>
            </Link>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#capabilities" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Product</Link>
          <Link href="#data" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Data</Link>
          <Link href="#api" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Developers</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors hidden md:inline-block">
            ← Utsavs.com
          </Link>
          <Button variant="gradient" size="sm" className="font-bold shadow-sm">
            API Preview
          </Button>
        </div>
      </div>
    </header>
  );
}
