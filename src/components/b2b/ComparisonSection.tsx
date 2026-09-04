import { Check, ArrowRight } from 'lucide-react';

export function ComparisonSection() {
  return (
    <section className="py-24 border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">From dates to intelligence.</h2>
                <p className="text-lg text-muted-foreground">
                    Basic APIs tell you when. Utsavs tells you what, where, why, and how certain.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                <div className="space-y-6">
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-2">Traditional holiday data</h3>
                    <div className="bg-muted/20 border border-border/50 rounded-xl p-6 space-y-3">
                        {['Date', 'Name', 'Country'].map(item => (
                            <div key={item} className="flex items-center gap-3 text-muted-foreground/60 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/20"></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-widest px-2">Utsavs Global Intelligence</h3>
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-inner grid grid-cols-2 gap-x-4 gap-y-3">
                        {[
                            'Date', 'Country', 'Region', 'Classification', 
                            'Verification', 'Source', 'Cultural context', 
                            'Date intelligence', 'Operational context'
                        ].map(item => (
                            <div key={item} className="flex items-center gap-2 text-foreground font-semibold text-sm">
                                <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
