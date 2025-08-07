
import { HolidayPlanner } from "@/components/HolidayPlanner";
import { PageLayout } from "@/components/PageLayout";

export default function PlannerPage() {
  return (
    <PageLayout>
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">AI Holiday Planner</h1>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              Unsure where to go? Let our AI assistant craft personalized festival-based travel suggestions for you.
            </p>
          </div>
        <div className="w-full max-w-2xl mx-auto">
            <HolidayPlanner />
        </div>
    </PageLayout>
  );
}
