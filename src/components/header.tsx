
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Bot, Languages, Menu, Calendar, Rss } from "lucide-react";
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
  { href: "/color-palettes", label: "Color Palettes" },
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
                <Image 
                  src="https://i.postimg.cc/vZTZ0Br5/utsavs-logo.png" 
                  alt="Utsavs Logo" 
                  width={64}
                  height={64}
                  className={cn(
                    "transition-all duration-300 group-hover:scale-105",
                    isScrolled ? 'w-14 h-14' : 'w-16 h-16'
                  )}
                  style={{ objectFit: 'contain' }}
                />
                <span className="hidden md:block font-headline text-2xl font-bold self-center drop-shadow-sm transition-transform duration-300 group-hover:scale-105 text-primary" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.1)'}}>Utsavs</span>
            </Link>
        </div>

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
          
          <div id="google_translate_element" style={{ display: 'none' }}></div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
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
