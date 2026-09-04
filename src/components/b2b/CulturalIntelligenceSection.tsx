
import { Heart } from 'lucide-react';

export function CulturalIntelligenceSection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl border p-12 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <Heart className="w-32 h-32 text-primary" />
            </div>
            
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Data with cultural context.</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic">
                "Structured enough for machines. Meaningful enough for people."
            </p>
            <div className="max-w-2xl mx-auto space-y-6 text-left">
                <p className="text-muted-foreground leading-relaxed">
                    A holiday record in Utsavs is more than just a key-value pair. We include concise, verified cultural context that explains why a day is celebrated, what it commemorates, and how it varies by region.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-primary">
                    <div className="p-3 bg-primary/5 rounded border border-primary/10">Traditions</div>
                    <div className="p-3 bg-primary/5 rounded border border-primary/10">Regional Nuance</div>
                    <div className="p-3 bg-primary/5 rounded border border-primary/10">Classic Foods</div>
                    <div className="p-3 bg-primary/5 rounded border border-primary/10">Historical Significance</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
