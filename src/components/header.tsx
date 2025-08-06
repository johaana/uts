"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get('search') as string;
    if (searchQuery.trim()) {
      router.push(`/festivals?search=${searchQuery.trim()}`);
      setOpen(false);
    }
  };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
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
                 <form onSubmit={handleSearch}>
                    <Input name="search" placeholder="e.g. Diwali" />
                 </form>
            </DialogContent>
        </Dialog>
    )
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-background/80 border-b backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-20 items-center px-4">
        <div className="flex-1 flex justify-start">
            <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="flex flex-col gap-6 pt-10">
                    <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                    <Image src="https://i.postimg.cc/tJggpS12/utsavs-logo.png" alt="Utsavs Logo" width={60} height={60}/>
                    </Link>
                    {navLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
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
            <Link href="/" className="hidden md:flex items-center gap-2">
                <Image src="https://i.postimg.cc/tJggpS12/utsavs-logo.png" alt="Utsavs Logo" width={60} height={60}/>
            </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
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
        </nav>
        
        <div className="flex-1 flex justify-end">
            <SearchDialog />
        </div>

      </div>
    </header>
  );
}
