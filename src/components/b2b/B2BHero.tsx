import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe2, CheckCircle2 } from 'lucide-react';

export function B2BHero() {
  return (
    <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <Badge variant="outline" className="mb-6 py-1 px-4 border-primary/20 text-primary bg-primary/5 font-bold tracking-wider uppercase text-[10px]">
                Global Holiday Intelligence
            </Badge>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Understand the <br/>world's calendar.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Structured, verified intelligence for holidays, festivals and observances — by country, region, date and source.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" variant="gradient" className="h-14 px-8 text-base font-bold shadow-xl">
                Explore the Intelligence
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-2 font-bold">
                API Preview
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
                <div className="relative bg-card border rounded-xl shadow-2xl overflow-hidden">
                    <div className="bg-muted/30 p-3 border-b flex items-center justify-between">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Intelligence Record</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200 text-[9px] font-bold py-0">VERIFIED</Badge>
                    </div>
                    <div className="p-6 lg:p-8">
                        <div className="mb-6">
                            <h3 className="text-3xl font-headline font-bold text-primary mb-1">Diwali</h3>
                            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                                <Globe2 className="w-4 h-4" />
                                <span>India · National Scope</span>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <p className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground">Confirmed Date</p>
                                    <p className="font-bold text-sm">8 November 2026</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground">Determination</p>
                                    <p className="font-bold text-sm">Lunisolar</p>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <p className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground">Classifications</p>
                                <div className="flex flex-wrap gap-1.5">
                                    <Badge variant="secondary" className="text-[9px] font-bold px-2 py-0">PUBLIC HOLIDAY</Badge>
                                    <Badge variant="secondary" className="text-[9px] font-bold px-2 py-0">RELIGIOUS FESTIVAL</Badge>
                                    <Badge variant="secondary" className="text-[9px] font-bold px-2 py-0">CULTURAL FESTIVAL</Badge>
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-muted">
                                <div>
                                    <p className="text-[10px] font-bold text-primary mb-1">Why it matters</p>
                                    <p className="text-[11px] leading-relaxed text-muted-foreground">The Festival of Lights, symbolizing the spiritual victory of light over darkness and knowledge over ignorance.</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-primary mb-1">Regional Context</p>
                                    <p className="text-[11px] leading-relaxed text-muted-foreground">Date variations apply in South India (Naraka Chaturdashi). Commercial closures vary by state.</p>
                                </div>
                                <div className="pt-2 flex items-center justify-between">
                                    <p className="text-[9px] font-bold text-muted-foreground">Source: Authoritative reference</p>
                                    <p className="text-[9px] font-bold text-muted-foreground italic">Illustrative record</p>
                                </div>
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
