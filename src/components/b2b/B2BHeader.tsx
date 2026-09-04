
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function B2BHeader() {
  return (
    <header className="h-20 border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
            <Link href="/" className="flex flex-col items-start group">
                <span className="font-headline text-2xl font-bold text-gradient">UTSAVS</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Global Intelligence</span>
            </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#capabilities" className="text-sm font-medium hover:text-primary transition-colors">Product</Link>
          <Link href="#data" className="text-sm font-medium hover:text-primary transition-colors">Data</Link>
          <Link href="#api" className="text-sm font-medium hover:text-primary transition-colors">Developers</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">API Docs</Button>
          <Button variant="gradient" size="sm" className="font-bold shadow-md">Join API Preview</Button>
        </div>
      </div>
    </header>
  );
}
