
import { ShieldCheck, Search, Database, Scale, BellRing } from 'lucide-react';

const trustPillars = [
    {
        title: "Source-aware",
        desc: "Every record is attributed to an official or authoritative source, with full auditability.",
        icon: Database
    },
    {
        title: "Verification-aware",
        desc: "A clear system to distinguish verified, provisional, and estimated dates.",
        icon: ShieldCheck
    },
    {
        title: "Date-aware",
        desc: "Advanced logic for fixed, lunar, lunisolar, and government-declared date models.",
        icon: Search
    },
    {
        title: "Region-aware",
        desc: "Nuanced understanding that a holiday in one state may not exist in the next.",
        icon: Scale
    },
    {
        title: "Change-aware",
        desc: "Continuous monitoring for official date changes and substitute holiday declarations.",
        icon: BellRing
    }
];

export function DataTrustSection() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Built for trust.</h2>
            <p className="text-xl text-muted-foreground">
                Holiday information is not equally certain everywhere. Utsavs exposes the certainty, origin, and verification status of every date we provide.
            </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
            {trustPillars.map((p) => (
                <div key={p.title} className="space-y-4">
                    <div className="w-10 h-10 bg-background rounded-lg shadow-sm flex items-center justify-center">
                        <p.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold">{p.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        {p.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
