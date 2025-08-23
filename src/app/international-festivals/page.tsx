
import { InternationalFestivalsPageContent } from "./InternationalFestivalsPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Festivals | Global Celebrations Calendar | Utsavs",
  description: "Explore the world's most vibrant cultural events with our international festival calendar. From La Tomatina to the Venice Carnival, plan your next global adventure.",
};


export default function InternationalFestivalsPage() {

    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <InternationalFestivalsPageContent />
            </div>
        </div>
    );
}
