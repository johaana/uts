
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, Music } from "lucide-react";

const pageContent = [
    {
        id: "overview",
        title: "Overview",
        icon: BookOpen,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">The Traveling Festival of the Gonds</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>The Madai Festival is one of the most prominent and vibrant festivals of the Gond tribe, celebrated with great fervor across the state of Chhattisgarh. What makes this festival particularly unique is its traveling nature. The celebrations begin in the Bastar region and move from village to village, creating a chain of festive fairs across different regions from December through March. The festival is a time of immense religious fervor, a grand cultural exchange, and a powerful reaffirmation of community bonds among the various tribal groups of the region.</p>
                    <p>The festival is inaugurated with a procession of the local deity, carried in a palanquin. Devotees and tribal chiefs from neighboring villages congregate to offer prayers and seek blessings from the goddess for a prosperous year and a bountiful harvest. The event also serves as a massive fair, an important social and economic occasion where people trade local handicrafts, agricultural produce, and other essential goods, making it a bustling hub of activity.</p>
                </div>
            </>
        )
    },
    {
        id: "music",
        title: "Music & Dance",
        icon: Music,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">Rituals and Offerings</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Saila, Karma, and Panthi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">The festival serves as a dynamic platform for showcasing a rich variety of folk art forms. Troupes of dancers, adorned in traditional costumes, perform energetic folk dances like the Saila dance, Karma, and Panthi. These performances, accompanied by the rhythmic beats of traditional drums and instruments, narrate stories from mythology, depict scenes from daily life, and express the community's joys and sorrows. The music and dance are not just entertainment; they are a vital, living part of the cultural heritage of the Gond tribe.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function MadaiFestivalPageContent() {
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

