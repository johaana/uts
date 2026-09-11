import { PageLayout } from "@/components/PageLayout";
import { OperationalFAQ } from "@/components/operational/OperationalFAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Server, Database, Lock } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "API | Global Date Intelligence for Developers | Utsavs",
  description: "Integrate high-precision global holiday and institutional intelligence into your products and workflows.",
  alternates: { canonical: '/api' }
};

export default function ApiPage() {
  const illustrativeJson = `{
  "name": "Diwali",
  "date": "2026-11-08",
  "country": "IN",
  "scope": "national",
  "categories": ["religious", "cultural", "public"],
  "status": "CONFIRMED",
  "verification": "HIGH",
  "source": "Ministry of Personnel, Public Grievances and Pensions"
}`;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <PageLayout>
        <section className="py-20 text-center max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">One API.<br/>Global intelligence.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Put date intelligence into the products and workflows your users already rely on.
          </p>
          <div className="mt-10">
            <Button size="lg" className="font-bold px-10 h-14 text-lg">Join API Preview</Button>
          </div>
        </section>

        <section className="py-20 border-t grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold mb-6">Built for systems that need to understand the calendar.</h2>
            <p className="text-muted-foreground mb-8">
              Payroll runs, travel planners, and scheduling tools all ask the same question: is this day different anywhere that matters to me?
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-md"><Server className="w-5 h-5 text-primary" /></div>
                <div>
                  <h4 className="font-bold">Structured Data</h4>
                  <p className="text-sm text-muted-foreground">Every record carries a date state and, where available, a named source.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-md"><Database className="w-5 h-5 text-primary" /></div>
                <div>
                  <h4 className="font-bold">Institutional Logic</h4>
                  <p className="text-sm text-muted-foreground">Distinguish between a general holiday and a specific institutional closure.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-md"><Lock className="w-5 h-5 text-primary" /></div>
                <div>
                  <h4 className="font-bold">High Precision</h4>
                  <p className="text-sm text-muted-foreground">Differentiate between confirmed, declared, and estimated observations.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-950 p-6 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden font-mono text-[13px] text-zinc-300">
            <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4 text-zinc-500 text-[10px] uppercase tracking-tighter">
              <Code className="w-3 h-3" />
              <span>Illustrative API Response</span>
            </div>
            <p className="text-emerald-400 mb-2">GET /v1/holidays?country=IN&year=2026</p>
            <pre className="whitespace-pre-wrap leading-relaxed">
              <code>{illustrativeJson}</code>
            </pre>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-24 border-t">
          <h2 className="font-headline text-3xl font-bold mb-12 text-center">API Access & Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-xl">Standard</CardTitle>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">For products & workflows</p>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Standard access to the calendar and intelligence your application needs. Scoped according to volume.
              </CardContent>
            </Card>
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Custom</CardTitle>
                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">For specialised needs</p>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                For particular countries, institutions, or specific operational coverage requirements.
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">For large deployments</p>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                High-volume and organisation-specific requirements including priority support and SLA.
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground italic">
            Commercial pricing is scoped according to coverage, volume and implementation details.
          </p>
        </section>

        <OperationalFAQ />
      </PageLayout>
    </div>
  );
}
