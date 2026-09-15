"use client";

import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <div>Utsavs · global calendar intelligence · 2026 · <span style={{ color: 'var(--muted-dim)' }}>Curated data last reviewed 8 Sept 2026</span></div>
        <div>
          <a href="https://utsavs.com" target="_blank" rel="noopener">Explore Utsavs.com</a>
          <Link href="/date-intelligence">Full calendar</Link>
          <Link href="/api">Join API preview</Link>
        </div>
      </div>
      <div className="wrap foot-disclaimer">
        Each record carries a date state and, where available, a named source. Institutional closures are sourced separately from calendar events. Lunar, Hijri and government-declared dates can change; Utsavs keeps the source and last-checked date visible so users can verify the underlying authority.
      </div>
    </footer>
  );
}
