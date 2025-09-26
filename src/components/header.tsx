
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

const logoSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="76.8" fill="hsl(0 0% 100%)"/>
  <path d="M128 204.8C134.4 179.2 153.6 160 172.8 160C192 160 204.8 172.8 204.8 192C204.8 211.2 192 224 172.8 224C153.6 224 134.4 243.2 128 268.8M384 204.8C377.6 179.2 358.4 160 339.2 160C319.999 160 307.2 172.8 307.2 192C307.2 211.2 319.999 224 339.2 224C358.4 224 377.6 243.2 384 268.8" stroke="hsl(330 80% 55%)" stroke-width="19.2"/>
  <path d="M172.8 160C179.2 121.6 211.2 96 256 96C300.8 96 332.8 121.6 339.2 160M172.8 352C179.2 390.4 211.2 416 256 416C300.8 416 332.8 390.4 339.2 352" stroke="hsl(330 80% 55%)" stroke-width="19.2" stroke-linecap="round"/>
  <path d="M128 307.2C134.4 332.8 153.6 352 172.8 352C192 352 204.8 339.2 204.8 320C204.8 300.8 192 288 172.8 288C153.6 288 134.4 268.8 128 243.2M384 307.2C377.6 332.8 358.4 352 339.2 352C319.999 352 307.2 339.2 307.2 320C307.2 300.8 319.999 288 339.2 288C358.4 288 377.6 268.8 384 243.2" stroke="hsl(330 80% 55%)" stroke-width="19.2"/>
  <path d="M256 224C281.6 224 300.8 243.2 300.8 268.8C300.8 294.4 281.6 313.6 256 313.6C230.4 313.6 211.2 294.4 211.2 268.8C211.2 243.2 230.4 224 256 224Z" fill="hsl(330 80% 55%)" stroke="hsl(0 0% 100%)" stroke-width="12.8"/>
  <path d="M256 204.8C263.467 204.8 268.8 211.433 268.8 217.6C268.8 223.767 263.467 230.4 256 230.4C248.533 230.4 243.2 223.767 243.2 217.6C243.2 211.433 248.533 204.8 256 204.8Z" fill="#fff"/>
</svg>
`;

const logoDataUri = `data:image/svg+xml;base64,${btoa(logoSvg)}`;

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
                  src={logoDataUri}
                  alt="Utsavs Logo" 
                  width={64}
                  height={64}
                  className={cn(
                    "transition-all duration-300 group-hover:scale-105",
                    isScrolled ? 'w-14 h-14' : 'w-16 h-16'
                  )}
                  style={{ objectFit: 'contain' }}
                />
                <span className="hidden md:block font-headline text-2xl font-bold self-center drop-shadow-sm transition-transform duration-300 group-hover:scale-105 text-[hsl(var(--primary))]" style={{textShadow: '1px 1px 3px hsla(var(--primary), 0.1)'}}>Utsavs</span>
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
                  variant="gradient"
                  size="sm"
                  className={cn(
                    "font-bold tracking-wide shadow-lg hover:shadow-primary/50 rounded-full px-4 hover:scale-105 transition-all duration-300 py-1"
                  )}
                >
                    <Bot className="w-4 w-4 mr-2"/>
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
