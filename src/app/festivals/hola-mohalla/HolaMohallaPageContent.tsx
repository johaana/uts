
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";

const pageContent = [
    {
        id: "overview",
        title: "Overview",
        icon: BookOpen,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">The Birth of Hola Mohalla</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Hola Mohalla is a significant Sikh festival, celebrated with great enthusiasm, particularly in Anandpur Sahib, Punjab. Established in 1701 by the tenth Sikh Guru, Guru Gobind Singh, it was created as an occasion for Sikhs to showcase their martial skills and military preparedness. The name itself signifies this, with 'Hola' being a masculine form of Holi, and 'Mohalla' meaning a military parade.</p>
                    <p>Unlike the playful color-throwing of Holi, Hola Mohalla is a day for demonstrating courage, strength, and discipline through mock battles, Gatka (Sikh martial arts), and horse-riding stunts. It was Guru Gobind Singh's way of instilling a warrior spirit and a sense of unity among the Khalsa (the collective body of initiated Sikhs) to defend their faith against persecution.</p>
                </div>
            </>
        )
    },
    {
        id: "traditions",
        title: "Celebrations",
        icon: Sparkles,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">A Spectacle of Sikh Valor</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>The festival is a multi-day event, with the main attraction being the grand procession led by the Nihang Singhs, an ancient order of Sikh warriors known for their distinctive blue robes and large turbans. They perform thrilling displays of swordsmanship, archery, and tent-pegging. The air is filled with religious hymns, poetry recitals, and the spirit of 'seva' (selfless service), with massive 'langars' (community kitchens) serving free meals to thousands of visitors. It's a vibrant and powerful display of Sikh heritage and community spirit.</p>
                </div>
            </>
        )
    },
    {
        id: "significance",
        title: "Significance",
        icon: MessageSquareQuote,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">Community and Faith</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Chardi Kala - Eternal Optimism</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">Hola Mohalla is more than just a martial display; it is a deep spiritual experience. It reinforces the Sikh ideal of 'Chardi Kala', maintaining a state of eternal optimism and high spirits, even in the face of adversity. The festival is a powerful reminder of the Sikh community's history of courage, their commitment to protecting the innocent, and their unwavering faith.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function HolaMohallaPageContent() {
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
