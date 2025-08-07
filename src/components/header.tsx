
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
        "bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50 transition-all duration-300 py-1"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        
        <div className="flex items-center justify-start flex-1">
             <Link href="/" className="flex items-center gap-2">
                <Image 
                  src="https://i.postimg.cc/vZTZ0Br5/utsavs-logo.png" 
                  alt="Utsavs Logo" 
                  width={isScrolled ? 60 : 72} 
                  height={isScrolled ? 60 : 72}
                  className="transition-all duration-300"
                />
             </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
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
        
        <div className="flex justify-end items-center flex-1 gap-2">
            <div className="hidden md:flex">
                 <Link href="/planner">
                    <Button 
                      size="sm" 
                      className="bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-bold tracking-wide uppercase shadow-lg hover:shadow-yellow-400/50 rounded-full px-5 py-2 hover:scale-105 transition-all duration-200"
                    >
                        AI Holiday Planner
                    </Button>
                </Link>
            </div>
             <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="flex flex-col gap-6 pt-10">
                        <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                            <Image src="https://i.postimg.cc/vZTZ0Br5/utsavs-logo.png" alt="Utsavs Logo" width={80} height={80} />
                        </Link>
                        {navLinks.map((link) => (
                            <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "text-lg font-medium transition-colors hover:text-primary",
                                pathname.startsWith(link.href) ? "text-primary" : "text-foreground"
                            )}
                            >
                            {link.label}
                            </Link>
                        ))}
                         <Link href="/planner" onClick={() => setIsOpen(false)}>
                            <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-bold tracking-wide uppercase shadow-lg rounded-full px-5 py-2 w-full mt-4">
                                AI Holiday Planner
                            </Button>
                        </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>

      </div>
    </header>
  );
}
