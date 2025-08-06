
"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "./ui/input";
import Image from "next/image";

const navLinks = [
  { href: "/festivals", label: "Festivals" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
];

function SearchDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                 <h2 className="font-headline text-xl font-bold mb-4">Search Utsavs</h2>
                 <p className="text-sm text-muted-foreground">
                    Search for festivals, recipes, and blog posts.
                 </p>
                 <Input placeholder="e.g. Diwali" />
            </DialogContent>
        </Dialog>
    )
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background/95 border-b backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-24 items-center px-4">
        
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="flex flex-col gap-6 pt-10">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Image src="/logo.svg" alt="Utsavs Logo" width={40} height={40}/>
                  <span className="font-bold font-headline text-2xl">Utsavs</span>
                </Link>
                {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname.startsWith(link.href) ? "text-primary" : "text-foreground"
                    )}
                    >
                    {link.label}
                    </Link>
                ))}
                </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1 flex justify-center md:justify-start">
             <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.svg" alt="Utsavs Logo" width={50} height={50}/>
                <span className="font-bold font-headline text-3xl hidden md:inline-block">Utsavs</span>
            </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-end items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                pathname.startsWith(link.href) ? "text-primary font-bold" : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
           <SearchDialog />
        </nav>
        
        <div className="md:hidden flex-1 flex justify-end">
            <SearchDialog />
        </div>

      </div>
    </header>
  );
}
