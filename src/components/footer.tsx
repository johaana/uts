import Link from "next/link";
import { UtsavsLogo } from "./icons";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
                 <Link href="/" className="flex items-center gap-2 mb-4">
                    <UtsavsLogo />
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
              </ul>
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <h3 className="font-bold mb-4 font-headline text-lg">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="/blog" className="text-foreground/80 hover:text-primary">Blog</Link></li>
              </ul>
            </div>
             <div className="md:col-span-4 lg:col-span-5">
              <h3 className="font-bold mb-4 font-headline text-lg">Newsletter</h3>
              <p className="text-foreground/80 mb-4 text-sm">Get festival updates and new recipes in your inbox.</p>
              {/* This form is for styling purposes and does not submit data. */}
              <form className="flex gap-2 max-w-sm">
                <input type="email" placeholder="Email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
                <button type="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10">
                    <span className="sr-only">Subscribe</span>&rarr;
                </button>
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
