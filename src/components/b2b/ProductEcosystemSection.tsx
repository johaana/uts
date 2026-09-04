
import { ArrowDown } from 'lucide-react';

export function ProductEcosystemSection() {
  return (
    <section className="py-24 border-b">
      <div className="container mx-auto px-4">
        <div className="text-center">
            <h2 className="font-headline text-3xl font-bold mb-16">The Utsavs Ecosystem</h2>
            <div className="flex flex-col items-center gap-6">
                <div className="w-full max-w-sm p-6 bg-muted/30 rounded-xl border border-dashed text-center">
                    <p className="font-bold text-lg">Utsavs.com</p>
                    <p className="text-xs text-muted-foreground mt-1">Culture · Stories · Recipes · Festival Guides</p>
                </div>
                
                <ArrowDown className="w-8 h-8 text-primary animate-bounce" />

                <div className="w-full max-w-sm p-6 bg-primary/5 rounded-xl border border-primary/20 text-center shadow-lg">
                    <p className="font-bold text-xl text-primary">Global Holiday Intelligence</p>
                    <p className="text-xs text-muted-foreground mt-1">Structured · Verified · Regional · Source-aware</p>
                </div>

                <ArrowDown className="w-8 h-8 text-primary" />

                <div className="w-full max-w-sm p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center shadow-2xl">
                    <p className="font-bold text-lg text-white">Utsavs Intelligence API</p>
                    <p className="text-xs text-zinc-500 mt-1">For Developers and Businesses</p>
                </div>
            </div>
            
            <p className="mt-16 text-muted-foreground max-w-2xl mx-auto">
                While the Utsavs website remains the premier destination for cultural discovery, our intelligence layer powers the technical systems of the future.
            </p>
        </div>
      </div>
    </section>
  );
}
