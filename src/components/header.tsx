
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "/festivals", label: "Festivals" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
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
        "bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50 transition-all duration-300"
      )}
    >
      <div className="container mx-auto flex flex-col px-4">
        <div className="flex items-center justify-between w-full h-16">
          <div className="flex items-center justify-start flex-1 md:flex-none">
              <Link href="/" className="flex items-center gap-2 py-1">
                  <Image 
                    src="https://i.postimg.cc/vZTZ0Br5/utsavs-logo.png" 
                    alt="Utsavs Logo" 
                    width={72}
                    height={72}
                    className="transition-all duration-300"
                  />
              </Link>
          </div>
          
          <div className="flex justify-end items-center flex-1 md:flex-none">
              <Link href="/planner">
                  <Button 
                    size="sm"
                    className={cn(
                      "bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide uppercase shadow-lg hover:shadow-blue-500/50 rounded-full px-4 hover:scale-105 transition-all duration-300 py-1"
                    )}
                  >
                      AI Holiday Planner
                  </Button>
              </Link>
          </div>
        </div>
        
        <nav className="flex md:hidden items-center justify-around w-full border-t">
          {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary relative py-2 group flex-1 text-center",
              pathname.startsWith(link.href) ? "text-primary font-bold" : "text-foreground/80"
            )}
          >
            {link.label}
            <span
              className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100",
                { "scale-x-100": pathname.startsWith(link.href) }
              )}
            />
          </Link>
        ))}
      </nav>

      <nav className="hidden md:flex flex-1 justify-center items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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

      </div>
    </header>
  );
}
