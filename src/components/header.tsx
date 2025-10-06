
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Bot, Languages, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "/festivals", label: "Festivals" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
  { href: "/calendar", label: "Explore by Month" },
];

export function Header() {
  const pathname = usePathname();
  const { setTheme } = useTheme();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const scriptId = 'google-translate-script';
      if (document.getElementById(scriptId)) {
        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
            existingScript.remove();
        }
      }
      
      const addScript = document.createElement('script');
      addScript.id = scriptId;
      addScript.type = 'text/javascript';
      addScript.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
      document.body.appendChild(addScript);

      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          autoDisplay: false
        }, 'google_translate_element');
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <header className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300",
        isScrolled || !isHomePage ? "bg-background shadow-md" : "bg-transparent border-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        
        <div className="flex items-center">
            <Link href="/" className="flex flex-col items-center group">
                <span className="font-headline text-3xl font-bold transition-transform duration-300 group-hover:scale-105 text-gradient">Utsavs</span>
                <span className="text-[10px] text-muted-foreground italic tracking-tight">Every Festival Tells a Story</span>
            </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-end gap-2 lg:gap-4">
          <nav className="flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-bold transition-colors relative py-2 group",
                  pathname.startsWith(link.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
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
          
          <div id="google_translate_element" style={{ display: 'none' }}></div>
          
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

           <Link href="/planner">
                <Button 
                  variant="gradient"
                  size="sm"
                  className={cn(
                    "font-bold tracking-wide shadow-lg hover:shadow-accent/50 rounded-full px-4 hover:scale-105 transition-all duration-300 py-1"
                  )}
                >
                    <Bot className="w-4 w-4 mr-2"/>
                    AI Planner
                </Button>
            </Link>
        </div>
        
        <div className="flex-1 flex justify-end items-center gap-2 md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full">
                    <MobileNav navLinks={navLinks} setOpen={setIsSheetOpen} />
                </SheetContent>
            </Sheet>
        </div>

      </div>
    </header>
  );
}
