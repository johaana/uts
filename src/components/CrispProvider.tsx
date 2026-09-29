'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * CrispProvider Component
 * 
 * Manages route-specific customizations for the Crisp Chatbot.
 * Uses the standard SDK to override welcome messages and push session context
 * to the dashboard (available on the free tier).
 */
export function CrispProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure Crisp is initialized
    const crisp = (window as any).$crisp;
    if (!crisp) return;

    // Define context-aware messages
    let message: string[] = ["Welcome to Utsavs.", "How can we help with your global planning today?"];
    let contextLabel = "General Hub";

    if (pathname.startsWith('/api')) {
      message = [
        "Hi there! Interested in our data?", 
        "I can help you with an API key request or technical integration questions right now."
      ];
      contextLabel = "API Documentation";
    } else if (pathname.startsWith('/international-insurance')) {
      message = [
        "Planning a journey?", 
        "Ask me about compliance for F1 student visas or corporate group risk cover."
      ];
      contextLabel = "International Insurance";
    } else if (pathname.startsWith('/built-for')) {
      message = [
        "Exploring our use cases?", 
        "How can our temporal intelligence help your team's specific workflow?"
      ];
      contextLabel = "Product Use Cases";
    } else if (pathname === '/') {
      message = [
        "Welcome to the Global Hub.", 
        "Which jurisdiction or specific date can I help you verify today?"
      ];
      contextLabel = "Homepage Explorer";
    }

    // Update welcome message dynamically
    crisp.push(["set", "chat:welcome:message", message]);
    
    // Push session data (Visible in your Crisp Dashboard sidebar)
    crisp.push(["set", "session:data", [[
      ["viewed_section", contextLabel],
      ["active_route", pathname],
      ["last_update", new Date().toLocaleTimeString()]
    ]]]);

  }, [pathname]);

  return null;
}
