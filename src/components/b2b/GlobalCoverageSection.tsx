
import { Globe, Map, Languages } from 'lucide-react';

const countries = [
    { name: "India", regions: "36 States & UTs" },
    { name: "United States", regions: "50 States" },
    { name: "Canada", regions: "13 Provinces" },
    { name: "Australia", regions: "8 States & Territories" },
    { name: "Japan", regions: "47 Prefectures" },
    { name: "United Kingdom", regions: "4 Nations" },
    { name: "Singapore", regions: "National" },
    { name: "UAE", regions: "7 Emirates" },
    { name: "Brazil", regions: "26 States" }
];

export function GlobalCoverageSection() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {countries.map((c) => (
                        <div key={c.name} className="p-4 bg-card border rounded-xl shadow-sm hover:border-primary/50 transition-colors">
                            <p className="font-bold text-lg mb-1">{c.name}</p>
                            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-tighter">{c.regions}</p>
                        </div>
                    ))}
                    <div className="p-4 bg-muted/20 border border-dashed rounded-xl flex items-center justify-center">
                        <span className="text-xs font-bold text-muted-foreground">+ Continuous Expansion</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 order-1 lg:order-2">
                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">One world. <br/>Many calendars.</h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                    Utsavs is designed for global country and regional coverage. We move beyond national-level data to capture the nuances of states, provinces, and local jurisdictions.
                </p>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                            <Map className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-bold mb-1">Administrative Subdivisions</h4>
                            <p className="text-sm text-muted-foreground">Full support for ISO-3166-2 subdivisions, allowing you to filter by specific regions like California or Maharashtra.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                            <Languages className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-bold mb-1">Local Name Transliteration</h4>
                            <p className="text-sm text-muted-foreground">Original script and phonetic transliterations for localized applications.</p>
                        </div>
                    </div>
                </div>
                <p className="mt-12 text-xs font-bold text-muted-foreground italic">
                    * Designed for global coverage. Production availability varies by country.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
