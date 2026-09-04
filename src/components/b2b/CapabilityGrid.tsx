import { Calendar, Brain, Clock, Sun, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const capabilities = [
  {
    title: "Holiday Data",
    description: "Public, regional, bank, religious & cultural calendars.",
    icon: Calendar,
  },
  {
    title: "Holiday Intelligence",
    description: "Dates, classifications, regions, verification & sources.",
    icon: Brain,
  },
  {
    title: "Working Days",
    description: "Calculate business days around local calendars.",
    icon: Clock,
  },
  {
    title: "Long Weekends",
    description: "Find consecutive holidays and leave opportunities.",
    icon: Sun,
  },
  {
    title: "Change Intelligence",
    description: "Track official date changes and announcements.",
    icon: RefreshCw,
  }
];

export function CapabilityGrid() {
  return (
    <section id="capabilities" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">One intelligence layer. Five capabilities.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utsavs provides one unified system for global calendar intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {capabilities.map((cap) => (
            <Card key={cap.title} className="border border-border/40 shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <cap.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-2">{cap.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
