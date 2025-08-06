
'use client';

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { Search } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const router = useRouter();
  const { toast } = useToast();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get('search') as string;
    if (searchQuery.trim()) {
      router.push(`/festivals?search=${searchQuery.trim()}`);
    }
  };

  const handleSubscription = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;

    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid email address.",
      });
      return;
    }
    
    // Simple mailto link generation
    window.location.href = `mailto:contact@utsavs.com?subject=Newsletter Subscription&body=Please add ${email} to the newsletter.`;

    toast({
        title: "Redirecting to Email Client",
        description: "Please send the pre-filled email to subscribe.",
    });

    (event.target as HTMLFormElement).reset();
  };


  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
                 <Link href="/" className="flex items-center gap-2 mb-4">
                    <div className="relative h-12 w-40">
                      <Image 
                        src="https://i.postimg.cc/P50LzHXx/Utsavs-Logo-Indigo.png" 
                        alt="Utsavs Logo" 
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                        priority 
                        unoptimized
                      />
                    </div>
                </Link>
                <p className="text-foreground/80 max-w-xs text-sm">
                  Your guide to the vibrant world of Indian festivals.
                </p>
            </div>

            <div className="md:col-span-2 lg:col-span-2">
              <h3 className="font-bold mb-4 font-headline text-lg">Explore</h3>
              <ul className="space-y-3">
                <li><Link href="/festivals" className="text-foreground/80 hover:text-primary">Festivals</Link></li>
                <li><Link href="/recipes" className="text-foreground/80 hover:text-primary">Recipes</Link></li>
                 <li><Link href="/blog" className="text-foreground/80 hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <h3 className="font-bold mb-4 font-headline text-lg">Stay Connected</h3>
                <p className="text-foreground/80 mb-4 text-sm">Subscribe to our newsletter for the latest updates.</p>
               <form className="flex flex-col sm:flex-row gap-2 max-w-sm" onSubmit={handleSubscription}>
                    <Input name="email" type="email" placeholder="Enter your email" className="bg-background" />
                    <Button type="submit">Subscribe</Button>
                </form>
            </div>
             <div className="md:col-span-4 lg:col-span-4">
              <h3 className="font-bold mb-4 font-headline text-lg">Search Utsavs</h3>
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
