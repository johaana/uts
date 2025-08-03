import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { UtsavsLogo } from "./icons";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center text-center mb-8">
            <Link href="/" className="flex items-center gap-2 mb-4">
                <UtsavsLogo className="text-primary" />
            </Link>
            <p className="text-foreground/80 max-w-xs">
              Your guide to the vibrant world of Indian festivals.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-4 font-headline text-lg">Explore</h3>
              <ul className="space-y-3">
                <li><Link href="/festivals" className="text-foreground/80 hover:text-primary">Festivals</Link></li>
                <li><Link href="/recipes" className="text-foreground/80 hover:text-primary">Recipes</Link></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-4 font-headline text-lg">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="/blog" className="text-foreground/80 hover:text-primary">Blog</Link></li>
                <li><Link href="/downloads" className="text-foreground/80 hover:text-primary">Downloads</Link></li>
              </ul>
            </div>
             <div className="col-span-2 text-center md:text-left">
              <h3 className="font-bold mb-4 font-headline text-lg">Newsletter</h3>
              <p className="text-foreground/80 mb-4 text-sm max-w-sm mx-auto md:mx-0">Get festival updates and new recipes in your inbox.</p>
              <form className="flex gap-2 max-w-sm mx-auto md:mx-0">
                <Input type="email" placeholder="Email" className="bg-background" />
                <Button type="submit" size="icon" className="bg-accent hover:bg-accent/90 shrink-0"><span className="sr-only">Subscribe</span>&rarr;</Button>
              </form>
            </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Utsavopedia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
