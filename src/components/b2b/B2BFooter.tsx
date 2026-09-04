import Link from 'next/link';

export function B2BFooter() {
  return (
    <footer className="b2b-footer pt-32 pb-16 border-t border-[#DED9D0]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-4 space-y-6">
                <Link href="/global-holiday-intelligence" className="flex flex-col">
                    <span className="font-display text-3xl font-bold tracking-tight text-[#17151A]">UTSAVS</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6D6870] mt-1 font-ui">Global Holiday Intelligence</span>
                </Link>
                <p className="text-sm text-[#6D6870] max-w-xs leading-relaxed font-ui">
                    The world's structured, verified holiday, festival and observance intelligence.
                </p>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E94368] font-ui">Product</h4>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-[#6D6870] font-ui">
                    <li><Link href="#product" className="hover:text-[#17151A] transition-colors">Capabilities</Link></li>
                    <li><Link href="#data" className="hover:text-[#17151A] transition-colors">Data Model</Link></li>
                    <li><Link href="#developers" className="hover:text-[#17151A] transition-colors">API</Link></li>
                </ul>
            </div>

            <div className="lg:col-span-2 space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E94368] font-ui">Company</h4>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-[#6D6870] font-ui">
                    <li><Link href="/about" className="hover:text-[#17151A] transition-colors">About Us</Link></li>
                    <li><Link href="/" className="hover:text-[#17151A] transition-colors">Utsavs.com</Link></li>
                </ul>
            </div>

            <div className="lg:col-span-4 space-y-6 lg:text-right">
                <p className="text-[11px] font-bold text-[#6D6870] uppercase tracking-[0.2em] font-ui">Contact</p>
                <p className="text-lg font-display font-bold">joy@utsavs.com</p>
            </div>
        </div>
        
        <div className="pt-8 border-t border-[#DED9D0] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-bold text-[#6D6870] uppercase tracking-widest font-ui">&copy; 2026 Utsavs Global Holiday Intelligence</p>
            <div className="flex gap-8 text-[10px] font-bold text-[#6D6870] uppercase tracking-widest font-ui">
                <Link href="#" className="hover:text-[#E94368]">Privacy</Link>
                <Link href="#" className="hover:text-[#E94368]">Terms</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
