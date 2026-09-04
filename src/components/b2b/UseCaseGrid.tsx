import { Users, Briefcase, Plane, Landmark } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const useCases = [
    {
        title: "HR & Operations",
        desc: "Automate working-day calculations, closures and track regional holidays for global teams.",
        icon: Users
    },
    {
        title: "Travel & Hospitality",
        desc: "Enhance itineraries with verified local festivals and automated long-weekend discovery.",
        icon: Plane
    },
    {
        title: "Fintech & Global Business",
        desc: "Plan for market closures and regional bank holidays with verified, source-aware data.",
        icon: Landmark
    },
    {
        title: "Developers & Platforms",
        desc: "Build richer, culturally-aware calendar and scheduling experiences for your users.",
        icon: Briefcase
    }
];

export function UseCaseGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Built for systems that <br className="hidden md:block" /> need to understand the calendar.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From internal operations to consumer-facing apps, Utsavs powers smarter scheduling.
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((uc) => (
                <Card key={uc.title} className="hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                    <CardContent className="p-8">
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mb-6">
                            <uc.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg mb-3">{uc.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
