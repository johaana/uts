"use client";

import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="footer-brand font-headline text-2xl font-bold">
            Utsavs
          </Link>
          <p className="text-sm text-muted-dim max-w-xs mt-2">
            Date intelligence for a world that does not run on one calendar.
          </p>
        </div>

        <div className="footer-links flex flex-col gap-3">
          <Link href="/date-intelligence" className="hover:text-white transition-colors">Date Intelligence</Link>
          <Link href="/built-for" className="hover:text-white transition-colors">Built For</Link>
          <Link href="/api" className="hover:text-white transition-colors">API</Link>
          <Link href="/travel-insurance" className="hover:text-white transition-colors">Travel Insurance</Link>
          <a href="https://utsavs.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">
            Stories ↗
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-muted-dim">
        <span>Utsavs · 2026</span>
        <span className="max-w-xl text-right md:text-left">
          Date states and named sources are shown where available.
          Institutional information is kept separate from calendar events.
        </span>
      </div>
    </footer>
  );
}
