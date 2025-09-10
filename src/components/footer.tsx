
'use client';

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { Search, Mail } from "lucide-react";
import Image from "next/image";

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
                    <Image src="https://i.postimg.cc/vZTZ0Br5/utsavs-logo.png" alt="Utsavs Logo" width={64} height={64} />
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
                <li><Link href="/calendar" className="text-foreground/80 hover:text-primary">Calendar</Link></li>
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
