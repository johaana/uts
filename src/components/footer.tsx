
"use client";

import Link from "next/link";
import React from "react";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
                <Link href="/" className="flex flex-col items-start group">
                    <span className="font-headline text-3xl font-bold text-primary transition-colors group-hover:text-primary/90">Utsavs</span>
                    <span className="text-[10px] text-muted-foreground font-mono font-bold uppercase tracking-widest mt-0.5">Global Calendar Intelligence</span>
                </Link>
                <p className="text-muted-foreground max-w-sm text-sm leading-relaxed font-medium">
                  Authoritative, source-aware date intelligence for travel, business, study and global operations.
                </p>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-bold uppercase tracking-widest text-[10px] text-primary">Product</h3>
              <ul className="space-y-3 text-sm font-semibold">
                <li><Link href="/date-intelligence" className="text-muted-foreground hover:text-primary transition-colors">Date Intelligence</Link></li>
                <li><Link href="/built-for" className="text-muted-foreground hover:text-primary transition-colors">Built For</Link></li>
                <li><Link href="/api" className="text-muted-foreground hover:text-primary transition-colors">API</Link></li>
                <li><Link href="/travel-insurance" className="text-muted-foreground hover:text-primary transition-colors">Travel Insurance</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-bold uppercase tracking-widest text-[10px] text-primary">Resources</h3>
              <ul className="space-y-3 text-sm font-semibold">
                <li><a href="https://utsavs.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Stories ↗</a></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              </ul>
            </div>
            
            <div className="lg:col-span-4 space-y-4 md:text-right">
              <h3 className="font-bold uppercase tracking-widest text-[10px] text-primary">Contact</h3>
              <div className="space-y-4">
                  <a href="mailto:joy@utsavs.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary justify-start md:justify-end transition-colors">
                      <Mail className="w-4 h-4"/>
                      <span className="font-bold">joy@utsavs.com</span>
                  </a>
                  <p className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-widest font-bold">
                    &copy; {new Date().getFullYear()} Utsavs Global Calendar Intelligence
                  </p>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
