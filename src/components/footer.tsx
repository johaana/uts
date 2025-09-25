
'use client';

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { Search, Mail } from "lucide-react";
import Image from "next/image";

const logoSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="76.8" fill="hsl(30 50% 98%)"/>
  <path d="M128 204.8C134.4 179.2 153.6 160 172.8 160C192 160 204.8 172.8 204.8 192C204.8 211.2 192 224 172.8 224C153.6 224 134.4 243.2 128 268.8M384 204.8C377.6 179.2 358.4 160 339.2 160C319.999 160 307.2 172.8 307.2 192C307.2 211.2 319.999 224 339.2 224C358.4 224 377.6 243.2 384 268.8" stroke="hsl(10 80% 60%)" stroke-width="19.2"/>
  <path d="M172.8 160C179.2 121.6 211.2 96 256 96C300.8 96 332.8 121.6 339.2 160M172.8 352C179.2 390.4 211.2 416 256 416C300.8 416 332.8 390.4 339.2 352" stroke="hsl(10 80% 60%)" stroke-width="19.2" stroke-linecap="round"/>
  <path d="M128 307.2C134.4 332.8 153.6 352 172.8 352C192 352 204.8 339.2 204.8 320C204.8 300.8 192 288 172.8 288C153.6 288 134.4 268.8 128 243.2M384 307.2C377.6 332.8 358.4 352 339.2 352C319.999 352 307.2 339.2 307.2 320C307.2 300.8 319.999 288 339.2 288C358.4 288 377.6 268.8 384 243.2" stroke="hsl(10 80% 60%)" stroke-width="19.2"/>
  <path d="M256 224C281.6 224 300.8 243.2 300.8 268.8C300.8 294.4 281.6 313.6 256 313.6C230.4 313.6 211.2 294.4 211.2 268.8C211.2 243.2 230.4 224 256 224Z" fill="hsl(10 80% 60%)" stroke="hsl(30 50% 98%)" stroke-width="12.8"/>
  <path d="M256 204.8C263.467 204.8 268.8 211.433 268.8 217.6C268.8 223.767 263.467 230.4 256 230.4C248.533 230.4 243.2 223.767 243.2 217.6C243.2 211.433 248.533 204.8 256 204.8Z" fill="#fff"/>
</svg>
`;

const logoDataUri = `data:image/svg+xml;base64,${btoa(logoSvg)}`;

export function Footer() {
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get('search') as string;
    if (searchQuery.trim()) {
      router.push(`/festivals?search=${searchQuery.trim()}`);
    }
  };

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
                 <Link href="/" className="flex items-center gap-2 mb-4">
                    <Image src={logoDataUri} alt="Utsavs Logo" width={64} height={64} />
                    <span className="font-headline text-2xl font-bold text-primary self-center">Utsavs</span>
                </Link>
                <p className="text-foreground/80 max-w-xs text-sm">
                  Utsavs is your definitive guide to the vibrant world of Indian festivals. Explore dates, traditions, recipes, and the stories that bring them to life.
                </p>
            </div>

            <div className="lg:col-span-2 text-center md:text-left">
              <h3 className="font-bold mb-4 font-headline text-lg text-primary">Explore</h3>
              <ul className="space-y-3">
                <li><Link href="/festivals" className="text-foreground/80 hover:text-primary">Indian Festivals</Link></li>
                <li><Link href="/international-festivals" className="text-foreground/80 hover:text-primary">International</Link></li>
                <li><Link href="/calendar" className="text-foreground/80 hover:text-primary">Explore by Month</Link></li>
                <li><Link href="/recipes" className="text-foreground/80 hover:text-primary">Recipes</Link></li>
                 <li><Link href="/blog" className="text-foreground/80 hover:text-primary">Blog</Link></li>
                 <li><Link href="/planner" className="text-foreground/80 hover:text-primary">AI Planner</Link></li>
                 <li><Link href="/about" className="text-foreground/80 hover:text-primary">About Us</Link></li>
                 <li><Link href="/sitemap.xml" className="text-foreground/80 hover:text-primary">Sitemap</Link></li>
              </ul>
            </div>
            
            <div className="lg:col-span-3 text-center md:text-left">
              <h3 className="font-bold mb-4 font-headline text-lg text-primary">Contact & Legal</h3>
                <div className="space-y-3">
                    <a href="mailto:joy@utsavs.com" className="flex items-center gap-2 text-foreground/80 hover:text-primary justify-center md:justify-start">
                        <Mail className="w-4 h-4"/>
                        <span>joy@utsavs.com</span>
                    </a>
                     <a href="http://paidforadvertising.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-foreground/80 hover:text-primary text-sm">
                        Affiliate Disclosure
                    </a>
                </div>
            </div>

             <div className="md:col-span-2 lg:col-span-4 text-center md:text-left">
              <h3 className="font-bold mb-4 font-headline text-lg text-primary">Search Utsavs</h3>
              <p className="text-foreground/80 mb-4 text-sm">Looking for a specific festival or recipe? Find it here.</p>
              <form className="flex gap-2 max-w-sm mx-auto md:mx-0" onSubmit={handleSearch}>
                <Input name="search" type="search" placeholder="Search festivals..." className="bg-background"/>
                <Button type="submit" size="icon" className="shrink-0">
                    <Search className="h-4 w-4"/>
                    <span className="sr-only">Search</span>
                </Button>
              </form>
            </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Utsavs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
