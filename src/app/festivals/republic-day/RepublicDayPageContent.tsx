
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, Flag } from "lucide-react";

const pageContent = [
    {
        id: "overview",
        title: "Overview",
        icon: BookOpen,
        content: (
             <>
                <h2 className="font-headline text-3xl font-bold mb-4">A Nation's Foundation</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Republic Day, celebrated annually on the 26th of January, is a national holiday that honors the date on which the Constitution of India came into effect in 1950. While India achieved its hard-won independence from British rule on August 15, 1947, it was on this historic day that the country formally transitioned from being a dominion of the British Crown to a sovereign, socialist, secular, and democratic republic. This day marks the culmination of a long and arduous struggle by countless freedom fighters and the adoption of a comprehensive constitution that lays down the fundamental framework for the nation's governance. It is a day to celebrate the supreme law of the land, which ensures justice, liberty, equality, and fraternity for all its citizens.</p>
                </div>
            </>
        )
    },
    {
        id: "parade",
        title: "The Parade",
        icon: Flag,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">A Spectacle of Unity and Strength</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>The main Republic Day celebration is a grand and impressive affair held in the national capital, New Delhi, along the Kartavya Path (formerly known as Rajpath). The day begins with the President of India hoisting the national flag, followed by a magnificent parade. This parade is the centerpiece of the celebration, showcasing India's formidable military might, rich cultural diversity, and remarkable technological progress. Regiments of the Indian Army, Navy, and Air Force march in perfect synchronization, along with their bands playing patriotic tunes. The parade also features vibrant and imaginative tableaus (floats) from various states and union territories, each depicting a unique aspect of its culture, history, or development. The event culminates with a breathtaking airshow by the Indian Air Force, with jets painting the sky in the colors of the Indian flag. It's a powerful and moving display of national pride and unity in diversity.</p>
                </div>
            </>
        )
    },
    {
        id: "significance",
        title: "Significance",
        icon: Sparkles,
        content: (
            <>
            <h2 className="font-headline text-3xl font-bold mb-4">A Day of Pride</h2>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Patriotic Fervor</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/80">Across the country, Republic Day is celebrated with immense patriotic fervor. Flag-hoisting ceremonies are held in schools, colleges, and government offices. Cultural programs, patriotic songs, and speeches mark the day, reminding citizens of their duties as citizens and the cherished values of democracy and pluralism that are enshrined in the Constitution.</p>
                    </CardContent>
                </Card>
            </div>
            </>
        )
    }
];

export function RepublicDayPageContent() {

    const pageSections = pageContent.map(item => ({
        id: item.id,
        title: item.title,
        icon: item.icon,
    }));

    return (
         <>
            <div className="mb-10 p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <h2 className="font-headline text-2xl font-bold mb-4">In This Article</h2>
                <ul className="space-y-2">
                    {pageSections.map(section => (
                        <li key={section.id}>
                            <a href={`#${section.id}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                                <section.icon className="w-5 h-5 text-accent" />
                                <span className="font-semibold">{section.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
             <article className="space-y-12">
                {pageContent.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-20">
                        {section.content}
                    </section>
                ))}
            </article>
        </>
    );
}
