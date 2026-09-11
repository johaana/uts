import { PageLayout } from "@/components/PageLayout";
import { OperationalFAQ } from "@/components/operational/OperationalFAQ";
import { EmptyState } from "@/components/operational/EmptyState";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, ShieldCheck, Globe2 } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Date Intelligence | Utsavs",
  description: "Check a country and your actual dates before you book, schedule or operate across borders.",
  alternates: { canonical: '/date-intelligence' }
};

export default function DateIntelligencePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <PageLayout>
        {/* HERO */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">Know before you fly.<br/>Know before you schedule.</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.
          </p>
        </section>

        {/* TRACKER SHELL */}
        <section className="mb-24">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-2xl overflow-hidden">
            <div className="bg-primary/5 p-6 border-b flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-primary" />
                <span className="font-bold">Trip Impact Checker</span>
              </div>
              <div className="flex gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary"></div> Sourced</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-accent"></div> Live</span>
              </div>
            </div>
            <CardContent className="p-0">
               <div className="p-8 md:p-12">
                  <EmptyState 
                    title="Select a place and dates to begin" 
                    message="Results will be based on the relevant calendar and institutional sources available for that journey." 
                  />
               </div>
            </CardContent>
          </Card>
        </section>

        {/* WHAT IS IT? */}
        <section className="py-20 border-t">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">What is Date Intelligence?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Date Intelligence brings the calendar, local differences, and relevant institutional information together so you can understand what a particular date may mean for a particular plan. 
              The core question is: <strong>&ldquo;Does this date work for what I am trying to do?&rdquo;</strong>
            </p>
          </div>
        </section>

        {/* LENSES GRID */}
        <section className="py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Travel", desc: "Understand public holidays and regional signals that can change an itinerary." },
            { title: "Business", desc: "Plan around market closures and banking holidays with verified, source-aware data." },
            { title: "Study", desc: "Check host-country holidays alongside institutional academic dates." },
            { title: "Workforce", desc: "Manage leave and scheduling for global teams with jurisdictional awareness." },
            { title: "Logistics", desc: "Identify dates that require a closer look at customs, ports and carrier schedules." },
            { title: "Jurisdiction", desc: "Navigate the complex differences between national, regional and local laws." }
          ].map(lens => (
            <Card key={lens.title} className="hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{lens.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{lens.desc}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* EVIDENCE SECTION */}
        <section className="py-20 border-t bg-muted/5 rounded-3xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-headline text-3xl font-bold mb-6">Trust is built into the data.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              A holiday name is not evidence. Utsavs exposes the origin, status, and context of every single record so you can judge the information for yourself.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="px-4 py-2 border rounded-full">Source-Aware</span>
              <span className="px-4 py-2 border rounded-full">Verification-Aware</span>
              <span className="px-4 py-2 border rounded-full">Date-Aware</span>
            </div>
          </div>
        </section>

        <OperationalFAQ />
      </PageLayout>
    </div>
  );
}
