import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Globe2 } from 'lucide-react';

export function SampleIntelligenceCard() {
  return (
    <Card className="shadow-2xl border border-primary/10 overflow-hidden">
      <CardHeader className="bg-primary/5 p-8 border-b">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-4xl font-headline font-bold">Diwali</h2>
                    <Badge className="bg-green-500/10 text-green-600 border-green-200 font-bold text-[10px]">VERIFIED</Badge>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-semibold">
                    <Globe2 className="w-4 h-4" />
                    <span>India · National & Regional Scope</span>
                </div>
            </div>
            <div className="text-left md:text-right space-y-1">
                <p className="text-3xl font-bold text-primary">8 November 2026</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Lunisolar · Confirmed</p>
            </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="space-y-6">
                <section>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">What is it</h4>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-[10px] font-bold">PUBLIC HOLIDAY</Badge>
                        <Badge variant="secondary" className="text-[10px] font-bold">RELIGIOUS FESTIVAL</Badge>
                        <Badge variant="secondary" className="text-[10px] font-bold">CULTURAL FESTIVAL</Badge>
                    </div>
                </section>
                
                <section>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Why Celebrated</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                        Associated with light overcoming darkness and good overcoming evil. In Hindu tradition, it marks the return of Lord Rama to Ayodhya.
                    </p>
                </section>
            </div>

            <div className="space-y-6">
                <section>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Regional Context</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                        Specific rituals like Naraka Chaturdashi apply in South India. Coincides with Kali Puja in East India. Business impacts vary by state jurisdiction.
                    </p>
                </section>

                <div className="p-4 bg-secondary/30 rounded-lg border border-dashed border-border/50">
                    <div className="flex flex-col gap-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Intelligence Source</p>
                        <p className="text-xs font-bold">Illustrative authoritative source</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-12 pt-4 border-t border-muted text-center">
            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Sample intelligence record for evaluation</p>
        </div>
      </CardContent>
    </Card>
  );
}
