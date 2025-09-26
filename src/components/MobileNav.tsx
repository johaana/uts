
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
  <rect width="512" height="512" rx="76.8" fill="hsl(0 0% 100%)"/>
  <path d="M128 204.8C134.4 179.2 153.6 160 172.8 160C192 160 204.8 172.8 204.8 192C204.8 211.2 192 224 172.8 224C153.6 224 134.4 243.2 128 268.8M384 204.8C377.6 179.2 358.4 160 339.2 160C319.999 160 307.2 172.8 307.2 192C307.2 211.2 319.999 224 339.2 224C358.4 224 377.6 243.2 384 268.8" stroke="hsl(270 70% 55%)" stroke-width="19.2"/>
  <path d="M172.8 160C179.2 121.6 211.2 96 256 96C300.8 96 332.8 121.6 339.2 160M172.8 352C179.2 390.4 211.2 416 256 416C300.8 416 332.8 390.4 339.2 352" stroke="hsl(270 70% 55%)" stroke-width="19.2" stroke-linecap="round"/>
  <path d="M128 307.2C134.4 332.8 153.6 352 172.8 352C192 352 204.8 339.2 204.8 320C204.8 300.8 192 288 172.8 288C153.6 288 134.4 268.8 128 243.2M384 307.2C377.6 332.8 358.4 352 339.2 352C319.999 352 307.2 339.2 307.2 320C307.2 300.8 319.999 288 339.2 288C358.4 288 377.6 268.8 384 243.2" stroke="hsl(270 70% 55%)" stroke-width="19.2"/>
  <path d="M256 224C281.6 224 300.8 243.2 300.8 268.8C300.8 294.4 281.6 313.6 256 313.6C230.4 313.6 211.2 294.4 211.2 268.8C211.2 243.2 230.4 224 256 224Z" fill="hsl(270 70% 55%)" stroke="hsl(0 0% 100%)" stroke-width="12.8"/>
  <path d="M256 204.8C263.467 204.8 268.8 211.433 268.8 217.6C268.8 223.767 263.467 230.4 256 230.4C248.533 230.4 243.2 223.767 243.2 217.6C243.2 211.433 248.533 204.8 256 204.8Z" fill="#fff"/>
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
