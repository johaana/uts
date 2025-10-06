
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Bot, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MobileNavProps {
    navLinks: { href: string; label: string }[];
    setOpen: (open: boolean) => void;
}

const navLinksMobile = [
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

export function MobileNav({ navLinks, setOpen }: MobileNavProps) {
  const pathname = usePathname();

  const changeLanguage = (langCode: string) => {
    const googleTranslateElement = document.getElementById('google_translate_element');
    if (googleTranslateElement) {
        const langSelect = googleTranslateElement.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (langSelect) {
            langSelect.value = langCode;
            langSelect.dispatchEvent(new Event('change'));
        }
    }
    setOpen(false);
  };


  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="font-headline text-2xl font-bold bg-gradient-to-r from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))] text-transparent bg-clip-text">Utsavs</span>
        </Link>
      </div>
      <nav className="flex flex-col p-4 space-y-2 flex-grow">
        {navLinksMobile.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={cn(
              "text-lg font-medium transition-colors hover:text-primary p-2 rounded-md",
              pathname.startsWith(link.href) ? "text-primary bg-muted" : "text-foreground/80"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t space-y-4">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full">
                <Languages className="h-4 w-4 mr-2" />
                Translate Page
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[--radix-dropdown-menu-trigger-width]]">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => changeLanguage(lang.code)}>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

        <Link href="/planner" onClick={() => setOpen(false)}>
            <Button 
              variant="gradient"
              size="lg"
              className="w-full font-bold tracking-wide shadow-lg"
            >
                <Bot className="w-5 h-5 mr-2"/>
                AI Holiday Planner
            </Button>
        </Link>
      </div>
    </div>
  );
}
