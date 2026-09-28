
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "/date-intelligence", label: "Date Intelligence" },
  { href: "/festivals", label: "Stories ↗" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // Check if we are on a "Cultural" page (Paper theme)
  const isEditorial = pathname.startsWith('/festivals') || pathname.startsWith('/blog') || pathname === '/about';

  return (
    <header className={cn("sticky top-0 z-50 transition-colors duration-300", isEditorial ? "bg-[#F4F1E8]/86 border-[#17151A]/10" : "bg-[#0F1428]/86 border-white/5", "backdrop-blur-md")}>
      <nav className="wrap h-[76px] flex items-center justify-between">
        <Link href="/" className={cn("logo", isEditorial && "text-[#17151A]")}>
          Utsavs
          <span className={cn(isEditorial && "text-[#6D6870]")}>from occasion to impact</span>
        </Link>
        
        <div className="hidden md:flex gap-9 text-[14.5px] font-bold uppercase tracking-widest font-ui">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors",
                isEditorial 
                  ? (pathname === link.href ? "text-[#17151A]" : "text-[#6D6870] hover:text-[#17151A]")
                  : (pathname === link.href ? "text-white" : "text-[#9AA1C0] hover:text-white")
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className={cn("p-2 transition-colors", isEditorial ? "text-[#17151A]" : "text-muted")} aria-label="Toggle menu">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 border-none w-full max-w-[300px]">
              <MobileNav setOpen={setOpen} />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
