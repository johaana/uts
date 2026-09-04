
import Link from 'next/link';

export function B2BFooter() {
  return (
    <footer className="py-20 border-t bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
                <Link href="/" className="flex flex-col items-start mb-6">
                    <span className="font-headline text-2xl font-bold text-primary">UTSAVS</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Global Holiday Intelligence</span>
                </Link>
                <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                    The world's structured, verified holiday, festival and observance intelligence.
                </p>
            </div>
            
            <div className="space-y-4">
                <h4 className="font-bold text-sm">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="#" className="hover:text-primary transition-colors">Holiday Data</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Working Days</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Long Weekends</Link></li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold text-sm">Developers</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="#" className="hover:text-primary transition-colors">API Preview</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Status</Link></li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold text-sm">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                </ul>
            </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-medium">
            <p>&copy; {new Date().getFullYear()} Utsavs Global Holiday Intelligence. All rights reserved.</p>
            <div className="flex gap-6">
                <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
