import { PageLayout } from "@/components/PageLayout";
import { OperationalFAQ } from "@/components/operational/OperationalFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Plane, Briefcase, GraduationCap, Truck, HeartHandshake, MapPin, Landmark } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Built For | Decisions Powered by Date Intelligence | Utsavs",
  description: "Different plans need different dates. Explore how Utsavs helps travel, corporate, and logistics teams plan effectively.",
  alternates: { canonical: '/built-for' }
};

const useCases = [
  {
    title: "Travel",
    tag: "Choosing when to go",
    icon: Plane,
    desc: "Understand festival periods, public holidays, and likely closures before building an itinerary."
  },
  {
    title: "Corporate / HR",
    tag: "Choosing when to operate",
    icon: Briefcase,
    desc: "Check destination calendars before approving international travel or scheduling regional activities."
  },
  {
    title: "Business & Finance",
    tag: "Choosing when to schedule",
    icon: Globe,
    desc: "Compare origin and destination calendars before scheduling market-sensitive deadlines."
  },
  {
    title: "Study",
    tag: "Choosing when to arrive",
    icon: GraduationCap,
    desc: "Check host-country holidays alongside institutional orientation and registration dates."
  },
  {
    title: "Logistics",
    tag: "Choosing when to move",
    icon: Truck,
    desc: "Cross-check field operations and deliveries against local religious and cultural calendars."
  },
  {
    title: "Travel Protection",
    tag: "Planning around real periods",
    icon: HeartHandshake,
    desc: "Identify relevant periods to provide context-aware protection options for travellers."
  }
];

export default function BuiltForPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <PageLayout>
        <section className="py-20 text-center max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">Different plans need<br/>different dates.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The question is not simply whether a date is a holiday. It is whether that date works for what you are trying to do.
          </p>
        </section>

        <section className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc, i) => (
              <Card key={i} className="hover:bg-muted/5 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <uc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">{uc.tag}</p>
                  <CardTitle className="font-headline text-2xl">{uc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{uc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* HIERARCHY EXPLAINER */}
        <section className="py-24 border-t">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline text-3xl font-bold mb-12 text-center">The Context Layer</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold">Jurisdiction</h4>
                <p className="text-xs text-muted-foreground">National vs. Local rules</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Landmark className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold">Institution</h4>
                <p className="text-xs text-muted-foreground">Banks, Markets, Ports</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold">Purpose</h4>
                <p className="text-xs text-muted-foreground">Work vs. Leisure</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold">Implication</h4>
                <p className="text-xs text-muted-foreground">Practical consequence</p>
              </div>
            </div>
          </div>
        </section>

        <OperationalFAQ />
      </PageLayout>
    </div>
  );
}
