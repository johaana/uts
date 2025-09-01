
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { Bot, Languages } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const navLinks = [
  { href: "/festivals", label: "Festivals" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  const handleTranslate = () => {
    // This is a bit of a hack to trigger the Google Translate dropdown.
    // The library creates a select element which we can programmatically click.
    const translateElement = document.getElementById('google_translate_element');
    const select = translateElement?.querySelector('select');
    if (select) {
      select.click();
    }
  };

  useEffect(() => {
    setIsScrolled(window.scrollY > 10);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Function to initialize Google Translate
    const googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en', 
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE, 
        autoDisplay: false
      }, 'google_translate_element');
    };
    
    // Check if the script already exists to avoid duplicates
    if (!document.getElementById('google-translate-script')) {
      const addScript = document.createElement('script');
      addScript.id = 'google-translate-script';
      addScript.type = 'text/javascript';
      addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(addScript);
      (window as any).googleTranslateElementInit = googleTranslateElementInit;
    }
    
    // Show a one-time toast to inform users about the translation feature
    const translationToastShown = sessionStorage.getItem('translationToastShown');
    if (!translationToastShown) {
      toast({
        title: "Translate this page!",
        description: "Click the 'Translate' button in the header to view this site in your preferred language.",
        duration: 8000,
      });
      sessionStorage.setItem('translationToastShown', 'true');
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [toast]);


  return (
    <header 
      className={cn(
        "bg-background/80 backdrop-blur-sm border-b sticky top-0 z-40 transition-all duration-300",
        isScrolled ? "h-16" : "h-20"
      )}
    >
      <div id="google_translate_element" className="fixed top-20 right-4 z-50" style={{display: 'none'}}></div>
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        
        <div className="flex-1 md:flex-none justify-start">
            <Link href="/" className="flex items-center gap-2 py-1 group">
                <Image 
                  src="https://i.postimg.cc/vZTZ0Br5/utsavs-logo.png" 
                  alt="Utsavs Logo" 
                  className={cn(
                    "transition-all duration-300 group-hover:scale-105", 
                    isScrolled ? "w-12 h-12" : "w-16 h-16"
                  )}
                  width={isScrolled ? 48 : 64}
                  height={isScrolled ? 48 : 64}
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
            <Button 
                variant="outline" 
                size="sm" 
                onClick={handleTranslate}
                className="rounded-full px-4 py-1"
                >
                <Languages className="w-4 h-4 mr-2"/>
                Translate
            </Button>
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
            <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleTranslate}
                >
                <Languages className="w-5 h-5"/>
                 <span className="sr-only">Translate</span>
            </Button>
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
