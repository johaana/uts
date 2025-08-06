'use client';

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { Search } from "lucide-react";

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
            <div className="lg:col-span-4">
                 <Link href="/" className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-headline text-3xl mb-4">
                    U
                </Link>
                <p className="text-foreground/80 max-w-xs text-sm">
                  Your definitive guide to the vibrant world of Indian festivals. Explore dates, traditions, recipes, and stories.
                </p>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-bold mb-4 font-headline text-lg text-primary">Explore</h3>
              <ul className="space-y-3">
                <li><Link href="/festivals" className="text-foreground/80 hover:text-primary">Festivals</Link></li>
                <li><Link href="/recipes" className="text-foreground/80 hover:text-primary">Recipes</Link></li>
                 <li><Link href="/blog" className="text-foreground/80 hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            
             <div className="md:col-span-2 lg:col-span-6">
              <h3 className="font-bold mb-4 font-headline text-lg text-primary">Search Utsavs</h3>
              <p className="text-foreground/80 mb-4 text-sm">Looking for something specific? Find it here.</p>
              <form className="flex gap-2 max-w-sm" onSubmit={handleSearch}>
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
