
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Bot, Languages, Menu, Sparkles } from "lucide-react";
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

const languages = [
    { name: 'English', code: 'en' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Spanish', code: 'es' },
    { name: 'French', code: 'fr' },
    { name: 'German', code: 'de' },
    { name: 'Mandarin', code: 'zh-CN' },
    { name: 'Arabic', code: 'ar' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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

  const changeLanguage = (langCode: string) => {
    const googleTranslateElement = document.getElementById('google_translate_element');
    if (googleTranslateElement) {
        const langSelect = googleTranslateElement.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (langSelect) {
            langSelect.value = langCode;
            langSelect.dispatchEvent(new Event('change'));
        }
    }
  };

  return (
    <header className={cn(
        "bg-background/80 backdrop-blur-sm border-b sticky top-0 z-40 transition-all duration-300",
        isScrolled ? 'h-16' : 'h-20'
    )}>
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        
        <div className="flex-1 md:flex-none justify-start">
            <Link href="/" className="flex items-center gap-2 py-1 group">
                 <Sparkles className={cn(
                    "transition-all duration-300 text-primary drop-shadow-[0_1px_2px_hsl(var(--primary)/0.5)]",
                    isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                  )} />
                <span className="hidden md:block font-headline text-3xl font-bold self-center transition-transform duration-300 group-hover:scale-105 bg-gradient-to-r from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))] text-transparent bg-clip-text" style={{textShadow: '1px 1px 3px hsla(var(--primary), 0.1)'}}>Utsavs</span>
            </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-end gap-2 lg:gap-4">
          <nav className="flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-headline transition-colors relative py-2 group",
                  pathname.startsWith(link.href) ? "text-accent font-bold" : "text-foreground/80 hover:text-accent"
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
              <Button variant="outline" size="sm" className="hidden lg:inline-flex">
                <Languages className="h-4 w-4 mr-2" />
                Translate
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => changeLanguage(lang.code)}>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

           <Link href="/planner">
                <Button 
                  variant="gradient"
                  size="sm"
                  className={cn(
                    "font-bold tracking-wide shadow-lg hover:shadow-primary/50 rounded-full px-4 hover:scale-105 transition-all duration-300 py-1"
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
