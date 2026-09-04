
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Globe2 } from 'lucide-react';

export function B2BHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <Badge variant="outline" className="mb-6 py-1 px-4 border-primary/20 text-primary bg-primary/5">
                Now in Private Beta
            </Badge>
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight mb-6">
              Global Holiday <br/>
              <span className="text-gradient">Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              The world's structured, verified holiday, festival and observance intelligence. Built for scale. Optimized for trust.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" variant="gradient" className="h-14 px-8 text-lg font-bold shadow-xl">
                Explore the Intelligence
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2">
                For Developers
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Source-Verified</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Regional Scope</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Cultural Context</span>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl">
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl rounded-full opacity-50"></div>
                <div className="relative bg-card border rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-muted/50 p-4 border-b flex items-center justify-between">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">holiday_intelligence_v1</span>
                    </div>
                    <div className="p-8">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-3xl font-headline font-bold text-primary">Diwali</h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                    <Globe2 className="w-4 h-4" />
                                    <span>India · National</span>
                                </div>
                            </div>
                            <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">✓ Verified</Badge>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Date</p>
                                    <p className="font-bold">8 November 2026</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Determination</p>
                                    <p className="font-bold">Lunisolar</p>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Classifications</p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="text-[10px]">Public Holiday</Badge>
                                    <Badge variant="secondary" className="text-[10px]">Religious Festival</Badge>
                                    <Badge variant="secondary" className="text-[10px]">Cultural Festival</Badge>
                                </div>
                            </div>

                            <div className="p-4 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
                                <p className="text-[11px] italic text-muted-foreground">"Diwali celebrates the triumph of light over darkness and knowledge over ignorance..."</p>
                                <div className="mt-2 text-[10px] font-bold text-primary">View cultural intelligence →</div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-muted">
                                <p className="text-[10px] font-medium text-muted-foreground">Source: Ministry of Personnel (India)</p>
                                <p className="text-[10px] font-medium text-muted-foreground">Confidence: 99%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
