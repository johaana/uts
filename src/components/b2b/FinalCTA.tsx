
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8">Build with a better understanding of the world's calendar.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" variant="gradient" className="h-16 px-10 text-xl font-bold shadow-2xl hover:scale-105 transition-all">
                    Explore Utsavs
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-xl border-2 hover:bg-secondary">
                    Join the API Preview
                </Button>
            </div>
            <p className="mt-12 text-muted-foreground font-medium">
                Standardizing global holiday intelligence for the next generation of applications.
            </p>
        </div>
      </div>
    </section>
  );
}
