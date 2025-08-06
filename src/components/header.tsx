
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
                 <form className="flex gap-2" onSubmit={handleSearch}>
                    <Input name="search" type="search" placeholder="Search festivals, recipes..." className="bg-background"/>
                    <Button type="submit">Search</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        
        {/* Left Section: Logo */}
        <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
                 <img src="https://i.postimg.cc/9F77pZ5f/Beige-And-Orange-Traditional-Indian-Fashion-Business-Logo-20250803-235803-0002.png" alt="Utsavs Logo" style={{ height: '50px' }} className="rounded-lg"/>
            </Link>
        </div>

        {/* Center Section: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
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
        
        {/* Right Section: Search and Mobile Menu */}
        <div className="flex items-center gap-2">
            <div className="hidden md:flex">
                <SearchDialog />
            </div>
            <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="flex flex-col gap-6 pt-10">
                        <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setOpen(false)}>
                           <img src="https://i.postimg.cc/9F77pZ5f/Beige-And-Orange-Traditional-Indian-Fashion-Business-Logo-20250803-235803-0002.png" alt="Utsavs Logo" style={{height: '50px'}} className="rounded-lg"/>
                        </Link>
                        {navLinks.map((link) => (
                            <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                                "text-lg font-medium transition-colors hover:text-primary",
                                pathname.startsWith(link.href) ? "text-primary" : "text-foreground"
                            )}
                            >
                            {link.label}
                            </Link>
                        ))}
                        <div className="mt-4">
                            <SearchDialog />
                        </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>

      </div>
    </header>
  );
}
