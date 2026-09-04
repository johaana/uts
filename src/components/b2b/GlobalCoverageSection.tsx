import { ArrowRight } from 'lucide-react';

export function GlobalCoverageSection() {
  return (
    <section id="data" className="py-24 overflow-hidden border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1 w-full max-w-lg">
                <div className="bg-muted/20 border p-8 rounded-xl space-y-6">
                    {[
                        { country: "India", region: "Maharashtra", state: "Holiday" },
                        { country: "United States", region: "California", state: "Holiday" },
                        { country: "Canada", region: "Ontario", state: "Holiday" },
                        { country: "Japan", region: "Prefecture", state: "Holiday" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-sm">
                            <span className="font-bold w-24">{item.country}</span>
                            <ArrowRight className="w-3 h-3 text-muted-foreground" />
                            <span className="text-muted-foreground w-20">{item.region}</span>
                            <ArrowRight className="w-3 h-3 text-muted-foreground" />
                            <span className="font-bold text-primary">{item.state}</span>
                        </div>
                    ))}
                    <div className="pt-4 border-t border-border/50 text-[10px] uppercase font-bold text-muted-foreground tracking-widest text-center">
                        Global Schema Architecture
                    </div>
                </div>
            </div>

            <div className="flex-1 order-1 lg:order-2">
                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">One world. <br/>Many calendars.</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Designed for country and regional holiday intelligence worldwide. Utsavs captures the nuances of states, provinces, and local jurisdictions.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm font-bold uppercase tracking-wide">ISO-3166-2 Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm font-bold uppercase tracking-wide">Local Name Transliteration</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
