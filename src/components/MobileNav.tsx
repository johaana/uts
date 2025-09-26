
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
        <linearGradient id="flameGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" style="stop-color:hsl(var(--gradient-from));stop-opacity:1" />
            <stop offset="100%" style="stop-color:hsl(var(--gradient-to));stop-opacity:1" />
        </linearGradient>
    </defs>
    <path d="M160 320C160 346.509 181.491 368 208 368H304C330.509 368 352 346.509 352 320V312C352 294.327 337.673 280 320 280H192C174.327 280 160 294.327 160 312V320Z" fill="hsl(var(--accent))"/>
    <path d="M256 280C256 248.667 256 144 256 144C256 144 304 200 256 280Z" fill="url(#flameGradient)"/>
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
