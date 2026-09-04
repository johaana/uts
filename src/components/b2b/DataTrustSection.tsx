import { ShieldCheck, Database, Map, CalendarRange } from 'lucide-react';

const pillars = [
    { title: "Source-aware", desc: "Know exactly where the information comes from.", icon: Database },
    { title: "Verification-aware", desc: "Know whether a date is confirmed, provisional or estimated.", icon: ShieldCheck },
    { title: "Region-aware", desc: "Understand differences between countries, states and regions.", icon: Map },
    { title: "Date-aware", desc: "Handle fixed, lunar, lunisolar and declared dates.", icon: CalendarRange },
];

export function DataTrustSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Trust is part of the data.</h2>
            <p className="text-lg text-muted-foreground italic">"Trust is not an afterthought; it is built into the architecture."</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p) => (
                <div key={p.title} className="text-center md:text-left space-y-4 p-6 rounded-xl hover:bg-muted/30 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                        <p.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {p.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
