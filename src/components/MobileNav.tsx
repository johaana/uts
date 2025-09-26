
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

const logoSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="flameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:hsl(var(--gradient-from));stop-opacity:1" />
            <stop offset="100%" style="stop-color:hsl(var(--gradient-to));stop-opacity:1" />
        </linearGradient>
    </defs>
    <path d="M256 364.8C256 364.8 256 384 256 384C198.4 384 150.4 336 150.4 278.4C150.4 220.8 198.4 172.8 256 172.8C313.6 172.8 361.6 220.8 361.6 278.4C361.6 336 313.6 384 256 384C256 384 256 364.8 256 364.8Z" fill="hsl(var(--accent))"/>
    <path d="M256 211.2C241.067 211.2 228.8 221.933 228.8 236.8C228.8 259.2 256 291.2 256 291.2C256 291.2 283.2 259.2 283.2 236.8C283.2 221.933 270.933 211.2 256 211.2Z" fill="url(#flameGradient)"/>
</svg>
`;

const logoDataUri = `data:image/svg+xml;base64,${btoa(logoSvg)}`;

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
            <Image 
                src={logoDataUri}
                alt="Utsavs Logo" 
                width={48} 
                height={48} 
            />
            <span className="font-headline text-xl font-bold text-primary">Utsavs</span>
        </Link>
      </div>
      <nav className="flex flex-col p-4 space-y-2 flex-grow">
        {navLinks.map((link) => (
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
