
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { OperationalFAQ } from "@/components/operational/OperationalFAQ";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartPulse, PlaneTakeoff, ShieldAlert, GraduationCap, Landmark, Mail } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Travel Insurance | Plan for Predictability, Protect for Uncertainty | Utsavs",
  description: "Understand the role of insurance in protecting your travel, study, or corporate journey.",
  alternates: { canonical: '/travel-insurance' }
};

export default function TravelInsurancePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <div className="container mx-auto px-4">
        <section className="py-12 md:py-24 text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight">Plan for what you can predict. Protect against what you can't.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Utsavs helps you plan the predictable aspects of your journey. Insurance can help protect against covered events you cannot predict.
          </p>
          <div className="pt-4">
            <a href="mailto:joy@utsavs.com?subject=Travel Protection Inquiry">
              <Button size="lg" className="font-bold px-10 h-14 text-lg group">
                Get in touch with us <Mail className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </Button>
            </a>
          </div>
        </section>

        <section className="py-12 grid md:grid-cols-3 gap-8">
           {[
             { title: "Your Journey", icon: PlaneTakeoff, items: ["Emergency medical expenses", "Evacuation / Repatriation", "Baggage loss or delay", "Trip delay or cancellation"] },
             { title: "Student Protection", icon: GraduationCap, items: ["Health insurance for longer stays", "Study interruption coverage", "Sponsor protection", "Passport/document loss"] },
             { title: "Corporate Groups", icon: Landmark, items: ["Group travel protection", "Employee assistance", "Assignment milestones", "Risk mitigation context"] }
           ].map(section => (
             <Card key={section.title} className="hover:border-primary/30 transition-all duration-300 bg-card shadow-sm">
               <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-6">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map(item => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
               </CardContent>
             </Card>
           ))}
        </section>

        <section className="py-24 border-t">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-headline text-3xl font-bold">Integration & Partnerships</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utsavs is currently working toward connecting travel intelligence with travel protection workflows. We welcome discussions with providers, partners, and corporate users interested in context-aware protection.
              </p>
            </div>

            <div className="bg-muted/10 p-10 rounded-3xl border border-dashed text-left space-y-6">
              <h2 className="font-headline text-2xl font-bold flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-accent" />
                Important Disclosure
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                Insurance is the subject matter of solicitation. Coverage, eligibility, benefits, exclusions and terms are determined by the applicable policy and insurer. Please review the policy wording and applicable requirements before purchase.
              </p>
              <p className="text-xs text-muted-foreground border-t pt-4">
                Utsavs provides planning and date intelligence context. We may work with travel-insurance and international-health-insurance providers on referral or partnership arrangements.
              </p>
            </div>
          </div>
        </section>

        <OperationalFAQ />
      </div>
      <Footer />
    </div>
  );
}
