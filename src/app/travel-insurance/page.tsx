import { PageLayout } from "@/components/PageLayout";
import { OperationalFAQ } from "@/components/operational/OperationalFAQ";
import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse, PlaneTakeoff, ShieldAlert, GraduationCap, Landmark } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Travel Insurance | Plan for Predictability, Protect for Uncertainty | Utsavs",
  description: "Understand the role of insurance in protecting your travel, study, or corporate journey.",
  alternates: { canonical: '/travel-insurance' }
};

export default function TravelInsurancePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <PageLayout>
        <section className="py-20 text-center max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">Plan for what you can predict. Protect against what you can't.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Utsavs helps you plan the predictable aspects of your journey. Insurance can help protect against covered events you cannot predict.
          </p>
        </section>

        <section className="py-12 grid md:grid-cols-3 gap-8">
           {[
             { title: "Your Journey", icon: PlaneTakeoff, items: ["Emergency medical expenses", "Evacuation / Repatriation", "Baggage loss or delay", "Trip delay or cancellation"] },
             { title: "Student Protection", icon: GraduationCap, items: ["Health insurance for longer stays", "Study interruption coverage", "Sponsor protection", "Passport/document loss"] },
             { title: "Corporate Groups", icon: Landmark, items: ["Group travel protection", "Employee assistance", "Assignment milestones", "Risk mitigation context"] }
           ].map(section => (
             <Card key={section.title} className="hover:border-primary/30 transition-colors">
               <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-6">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map(item => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
               </CardContent>
             </Card>
           ))}
        </section>

        <section className="py-20 border-t">
          <div className="max-w-4xl mx-auto bg-muted/10 p-10 rounded-3xl border">
            <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-accent" />
              Important Disclosure
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Insurance is the subject matter of solicitation. Coverage, eligibility, benefits, exclusions and terms are determined by the applicable policy and insurer. Please review the policy wording and applicable requirements before purchase.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Utsavs provides planning and date intelligence context. We may work with travel-insurance and international-health-insurance providers on referral or partnership arrangements.
            </p>
          </div>
        </section>

        <OperationalFAQ />
      </PageLayout>
    </div>
  );
}
