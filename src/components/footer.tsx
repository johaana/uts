"use client";

import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            Utsavs
          </Link>
          <p>
            Date intelligence for a world
            that does not run on one calendar.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/date-intelligence">Date Intelligence</Link>
          <Link href="/built-for">Built For</Link>
          <Link href="/api">API</Link>
          <Link href="/travel-insurance">Travel Insurance</Link>
          <a href="https://utsavs.com" target="_blank" rel="noopener">
            Stories ↗
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>Utsavs · 2026</span>
        <span>
          Date states and named sources are shown where available.
          Institutional information is kept separate from calendar events.
        </span>
      </div>
    </footer>
  );
}
