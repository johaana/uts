
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { OperationalFAQ } from "@/components/operational/OperationalFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Plane, Briefcase, GraduationCap, Truck, HeartHandshake, MapPin, Landmark, UserCheck } from "lucide-react";
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
  },
  {
    title: "Global Mobility",
    tag: "Choosing when to relocate",
    icon: UserCheck,
    desc: "Plan employee relocation and visa processing around jurisdictional and institutional availability."
  }
];

export default function BuiltForPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <section className="py-12 text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight">Different plans need<br/>different dates.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The question is not simply whether a date is a holiday. It is whether that date works for what you are trying to do.
          </p>
        </section>

        <section className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <Card key={i} className="hover:border-primary/30 transition-all duration-300 bg-card">
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
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-center">The Context Layer</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Jurisdiction", sub: "National vs. Local rules", icon: MapPin },
                { label: "Institution", sub: "Banks, Markets, Ports", icon: Landmark },
                { label: "Purpose", sub: "Work vs. Leisure", icon: Briefcase },
                { label: "Implication", sub: "Practical consequence", icon: Globe }
              ].map((item) => (
                <div key={item.label} className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg">{item.label}</h4>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OperationalFAQ />
      </div>
      <Footer />
    </div>
  );
}
