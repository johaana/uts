import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { UtsavsLogo } from "./icons";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary/10 border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
                <UtsavsLogo />
                <span className="font-headline text-2xl font-bold text-primary">Utsavs</span>
            </Link>
            <p className="text-foreground/80 max-w-xs">
              Your guide to the vibrant world of Indian festivals.
            </p>
            <div className="mt-6 flex gap-4">
                <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-foreground/70 hover:text-primary" /></Link>
                <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-foreground/70 hover:text-primary" /></Link>
                <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-foreground/70 hover:text-primary" /></Link>
                <Link href="#" aria-label="YouTube"><Youtube className="h-6 w-6 text-foreground/70 hover:text-primary" /></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-2">
            <div>
              <h3 className="font-bold mb-4 font-headline text-lg">Explore</h3>
              <ul className="space-y-3">
                <li><Link href="/festivals" className="text-foreground/80 hover:text-primary">Festivals</Link></li>
                <li><Link href="/recipes" className="text-foreground/80 hover:text-primary">Recipes</Link></li>
                <li><Link href="/calendar" className="text-foreground/80 hover:text-primary">Calendar</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 font-headline text-lg">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="/blog" className="text-foreground/80 hover:text-primary">Blog</Link></li>
                <li><Link href="/downloads" className="text-foreground/80 hover:text-primary">Downloads</Link></li>
                <li><Link href="/shop" className="text-foreground/80 hover:text-primary">Affiliate Shop</Link></li>
              </ul>
            </div>
             <div>
              <h3 className="font-bold mb-4 font-headline text-lg">Newsletter</h3>
              <p className="text-foreground/80 mb-4 text-sm">Get festival updates and new recipes in your inbox.</p>
              <form className="flex gap-2">
                <Input type="email" placeholder="Email" className="bg-background" />
                <Button type="submit" size="icon" className="bg-accent hover:bg-accent/90 shrink-0"><span className="sr-only">Subscribe</span>&rarr;</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Utsavs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
