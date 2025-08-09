
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { Bot } from "lucide-react";

const navLinks = [
  { href: "/festivals", label: "Festivals" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "bg-background/80 backdrop-blur-sm border-b sticky top-0 z-40 transition-all duration-300",
        isScrolled ? "py-0" : "py-2"
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        
        {/* Logo */}
        <div className="flex-1 md:flex-none justify-start">
            <Link href="/" className="flex items-center gap-2 py-1">
                <Image 
                  src="https://i.postimg.cc/vZTZ0Br5/utsavs-logo.png" 
                  alt="Utsavs Logo" 
                  width={80}
                  height={80}
                  className={cn("transition-all duration-300", isScrolled ? "w-16 h-16" : "w-20 h-20")}
                />
            </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-6">
          <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary relative py-2 group",
                  pathname.startsWith(link.href) ? "text-primary font-bold" : "text-foreground/80"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100",
                    { "scale-x-100": pathname.startsWith(link.href) }
                  )}
                />
              </Link>
            ))}
          </nav>
           <Link href="/planner">
                <Button 
                  size="sm"
                  className={cn(
                    "text-white font-bold tracking-wide shadow-lg hover:shadow-blue-500/50 rounded-full px-4 hover:scale-105 transition-all duration-300 py-1 bg-gradient-to-r from-blue-500 to-blue-600"
                  )}
                >
                    <Bot className="w-4 h-4 mr-2"/>
                    AI Holiday Planner
                </Button>
            </Link>
        </div>
        
        {/* Mobile Planner Button */}
        <div className="flex-1 flex justify-end md:hidden">
          <Link href="/planner">
              <Button 
                size="sm"
                className={cn(
                  "text-white font-bold tracking-wide shadow-lg hover:shadow-blue-500/50 rounded-full px-4 hover:scale-105 transition-all duration-300 py-1 text-xs bg-gradient-to-r from-blue-500 to-blue-600"
                )}
              >
                  <Bot className="w-4 h-4 mr-1.5"/>
                  AI Planner
              </Button>
          </Link>
        </div>

      </div>
    </header>
  );
}
