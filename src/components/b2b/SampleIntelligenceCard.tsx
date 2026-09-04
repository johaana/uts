
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Info, ShieldCheck, History, ExternalLink } from 'lucide-react';

export function SampleIntelligenceCard() {
  return (
    <Card className="shadow-2xl border-2 border-primary/10">
      <CardHeader className="bg-primary/5 p-8 border-b">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-start">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-4xl font-headline font-bold">Diwali</h2>
                    <Badge className="bg-green-500/10 text-green-600 border-green-200">Verified</Badge>
                </div>
                <p className="text-xl text-muted-foreground font-medium">India · National & Regional Scope</p>
            </div>
            <div className="text-left md:text-right">
                <p className="text-3xl font-bold text-primary">8 Nov 2026</p>
                <p className="text-sm font-semibold text-muted-foreground">Lunisolar · Confirmed Date</p>
            </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3 flex items-center gap-2">
                        <Info className="w-4 h-4 text-primary" /> Why Celebrated
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                        Widely celebrated as the "Festival of Lights," Diwali symbolizes the spiritual victory of light over darkness, good over evil, and knowledge over ignorance. For Hindus, it often marks the return of Lord Rama to Ayodhya.
                    </p>
                </section>
                
                <div className="grid sm:grid-cols-2 gap-8">
                    <section>
                        <h4 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">Cultural Quick View</h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                            Centered on themes of homecoming and renewal. Key rituals include lighting earthen lamps (diyas), creating floor art (rangoli), and exchanging traditional sweets (mithai).
                        </p>
                    </section>
                    <section>
                        <h4 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">Regional Variations</h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                            In South India, Naraka Chaturdashi is the primary ritual. In Bengal, it coincides with Kali Puja. Some regions observe long business closures while others maintain partial operations.
                        </p>
                    </section>
                </div>

                <div className="p-4 bg-muted/20 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Badge variant="outline" className="bg-background">Commercial Item</Badge>
                        <span className="text-sm font-medium">Business Impact: High (Major Retail/Market Closures)</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
            </div>

            <div className="space-y-8 bg-secondary/20 p-6 rounded-xl border border-border/50">
                <section>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" /> Verification
                    </h4>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <p className="text-[10px] text-muted-foreground">Primary Source</p>
                            <p className="text-xs font-bold">Government of India Gazette</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] text-muted-foreground">Confidence Score</p>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[99%]"></div>
                                </div>
                                <span className="text-xs font-bold">99%</span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] text-muted-foreground">Last Verified</p>
                            <p className="text-xs font-bold">12 Jan 2024</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4 flex items-center gap-2">
                        <History className="w-4 h-4 text-primary" /> Change History
                    </h4>
                    <div className="space-y-3">
                        <div className="border-l-2 border-primary/20 pl-3 py-1">
                            <p className="text-[10px] font-bold text-primary">Dec 2023</p>
                            <p className="text-[10px]">Status: Provisional → Confirmed</p>
                        </div>
                        <p className="text-[10px] text-muted-foreground italic">No further changes detected</p>
                    </div>
                </section>

                <div className="pt-4 mt-auto">
                    <p className="text-[10px] text-muted-foreground text-center">
                        Sample data for illustrative purposes.
                    </p>
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
