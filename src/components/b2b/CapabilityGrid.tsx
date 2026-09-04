
import { Calendar, Brain, Clock, Sun, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const capabilities = [
  {
    title: "Holiday Data",
    description: "Global public, regional, bank, religious and cultural calendars in one unified format.",
    icon: Calendar,
  },
  {
    title: "Holiday Intelligence",
    description: "In-depth attributes including classifications, verification status, confidence, and source attribution.",
    icon: Brain,
  },
  {
    title: "Working Days",
    description: "Advanced logic to calculate actual business days accounting for local, regional, and bank closures.",
    icon: Clock,
  },
  {
    title: "Long Weekends",
    description: "Automated identification of consecutive holidays and strategic leave opportunities for planning.",
    icon: Sun,
  },
  {
    title: "Change Intelligence",
    description: "Continuous tracking of date adjustments and new official announcements with historical audit trails.",
    icon: RefreshCw,
  }
];

export function CapabilityGrid() {
  return (
    <section id="capabilities" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">One intelligence layer. Five capabilities.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utsavs provides a comprehensive foundation for any system that needs to understand the global calendar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {capabilities.map((cap) => (
            <Card key={cap.title} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card/50">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
