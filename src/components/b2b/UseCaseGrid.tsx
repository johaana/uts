
import { Users, Briefcase, Plane, Landmark, Layout, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const useCases = [
    {
        title: "HR & Payroll",
        desc: "Automate working-day calculations and track regional holidays for global teams.",
        icon: Users
    },
    {
        title: "Global Operations",
        desc: "Optimize staffing and project schedules by understanding holiday impacts worldwide.",
        icon: Briefcase
    },
    {
        title: "Travel & Hospitality",
        desc: "Enhance itineraries with verified local festivals and long-weekend discovery.",
        icon: Plane
    },
    {
        title: "Fintech & Payments",
        desc: "Plan for market closures and regional bank holidays with verified data.",
        icon: Landmark
    },
    {
        title: "Calendars",
        desc: "Build richer, culturally-aware calendar experiences for your users.",
        icon: Layout
    },
    {
        title: "Developers",
        desc: "A single, structured source of truth for global calendar intelligence.",
        icon: Code
    }
];

export function UseCaseGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Built for systems that <br/>need to understand the calendar.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From internal operations to consumer-facing apps, Utsavs powers smarter scheduling.
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc) => (
                <Card key={uc.title} className="hover:border-primary/30 transition-colors shadow-sm">
                    <CardContent className="p-6">
                        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-6">
                            <uc.icon className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">{uc.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
