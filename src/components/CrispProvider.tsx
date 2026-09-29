'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * CrispProvider Component
 * 
 * Manages route-specific customizations for the Crisp Chatbot.
 * Uses the standard SDK to push session context to the dashboard.
 */
export function CrispProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure Crisp is initialized
    const crisp = (window as any).$crisp;
    if (!crisp) return;

    // Define context-aware labels for the dashboard
    let contextLabel = "General Hub";

    if (pathname.startsWith('/api')) {
      contextLabel = "API Documentation";
    } else if (pathname.startsWith('/international-insurance')) {
      contextLabel = "International Insurance";
    } else if (pathname.startsWith('/built-for')) {
      contextLabel = "Product Use Cases";
    } else if (pathname === '/') {
      contextLabel = "Homepage Explorer";
    }
    
    // Push session data (Visible in your Crisp Dashboard sidebar)
    // This helps you know exactly where the user is when they reach out.
    crisp.push(["set", "session:data", [[
      ["viewed_section", contextLabel],
      ["active_route", pathname],
      ["last_update", new Date().toLocaleTimeString()]
    ]]]);

  }, [pathname]);

  return null;
}
