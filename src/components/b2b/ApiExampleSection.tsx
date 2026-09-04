
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ApiExampleSection() {
  const jsonCode = `{
  "name": "Diwali",
  "date": "2027-10-29",
  "country": "IN",
  "scope": "national",
  "categories": [
    "religious_festival",
    "cultural_festival"
  ],
  "dateStatus": "CONFIRMED",
  "verificationStatus": "VERIFIED"
}`;

  return (
    <section id="api" className="py-24 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">One API. <br/>Global intelligence.</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    A clean, developer-friendly interface to the world's holiday intelligence. Integrate verified data into your systems with ease.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-none">REST API</Badge>
                        <span className="text-sm font-medium">Standardized JSON responses</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-none">Filtering</Badge>
                        <span className="text-sm font-medium">Query by country, year, and region</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-none">Versioning</Badge>
                        <span className="text-sm font-medium">LTS versions for business stability</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 w-full">
                <Card className="bg-zinc-900 border-none shadow-2xl overflow-hidden">
                    <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                             <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                             <span className="text-[10px] font-mono text-zinc-500">GET /v1/holidays</span>
                        </div>
                        <Badge variant="outline" className="text-[9px] text-zinc-500 border-zinc-700">Illustrative Response</Badge>
                    </div>
                    <CardContent className="p-6 font-mono text-xs md:text-sm">
                        <div className="text-zinc-400 mb-2">
                            <span className="text-blue-400">GET</span> /v1/holidays?country=IN&year=2027
                        </div>
                        <pre className="text-zinc-300 leading-relaxed overflow-x-auto">
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
