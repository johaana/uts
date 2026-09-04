import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ApiExampleSection() {
  const jsonCode = `{
  "name": "Diwali",
  "date": "2027-10-29",
  "country": "IN",
  "scope": "national",
  "categories": ["religious", "cultural"],
  "dateStatus": "CONFIRMED",
  "verificationStatus": "VERIFIED"
}`;

  return (
    <section id="api" className="py-24 border-b bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">One API. <br/>Global intelligence.</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Build calendars, scheduling tools, travel experiences and operational systems on structured holiday intelligence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="gradient" className="font-bold">Join API Preview</Button>
                    <Button variant="ghost" className="font-semibold text-muted-foreground">View JSON Schema</Button>
                </div>
            </div>

            <div className="flex-1 w-full max-w-lg">
                <Card className="bg-zinc-950 border-zinc-800 shadow-2xl overflow-hidden font-mono">
                    <div className="p-3 border-b border-zinc-800 flex items-center justify-between text-[10px]">
                        <span className="text-zinc-500 uppercase tracking-tighter">Request: GET /v1/holidays</span>
                        <span className="text-zinc-500 italic">Illustrative API response</span>
                    </div>
                    <CardContent className="p-6 text-[13px] leading-relaxed">
                        <div className="text-zinc-400 mb-4 flex gap-2">
                            <span className="text-emerald-400 font-bold">GET</span> 
                            <span>?country=IN&year=2027</span>
                        </div>
                        <pre className="text-zinc-300">
                            <code>{jsonCode}</code>
                        </pre>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
