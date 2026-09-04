
import { Check, X } from 'lucide-react';

export function ComparisonSection() {
  return (
    <section className="py-24 border-b">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">More than a holiday list.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Basic APIs tell you when. Utsavs tells you what, where, why, how certain, and what it means for your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="p-8 bg-muted/20 rounded-2xl border border-border/50">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                        <X className="w-4 h-4" />
                    </span>
                    Basic Holiday Data
                </h3>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"></div>
                        <span>Date and Year</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"></div>
                        <span>Holiday Name</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"></div>
                        <span>Country</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground/40 italic">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/20"></div>
                        <span>Unverified data sources</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground/40 italic">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/20"></div>
                        <span>Missing regional context</span>
                    </li>
                </ul>
            </div>

            <div className="p-8 bg-primary/5 rounded-2xl border border-primary/20 shadow-inner">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        <Check className="w-4 h-4" />
                    </span>
                    Utsavs Global Intelligence
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 font-medium">
                            <Check className="w-4 h-4 text-primary" />
                            <span>Verification Status</span>
                        </li>
                        <li className="flex items-center gap-3 font-medium">
                            <Check className="w-4 h-4 text-primary" />
                            <span>Source Attribution</span>
                        </li>
                        <li className="flex items-center gap-3 font-medium">
                            <Check className="w-4 h-4 text-primary" />
                            <span>Detailed Classifications</span>
                        </li>
                        <li className="flex items-center gap-3 font-medium">
                            <Check className="w-4 h-4 text-primary" />
                            <span>Regional Scope (State/Prov)</span>
                        </li>
                    </ul>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 font-medium">
                            <Check className="w-4 h-4 text-primary" />
                            <span>Cultural Context</span>
                        </li>
                        <li className="flex items-center gap-3 font-medium">
                            <Check className="w-4 h-4 text-primary" />
                            <span>Operational Impact</span>
                        </li>
                        <li className="flex items-center gap-3 font-medium">
                            <Check className="w-4 h-4 text-primary" />
                            <span>Date Confidence Scores</span>
                        </li>
                        <li className="flex items-center gap-3 font-medium">
                            <Check className="w-4 h-4 text-primary" />
                            <span>Historical Audit Logs</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
