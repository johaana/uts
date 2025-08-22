
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
                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of Goan Song and Dance</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>The Mando Festival is a vibrant and elegant cultural event in Goa dedicated to celebrating a unique and soulful musical tradition known as the 'Mando'. This festival is a beautiful showcase of Goa's rich, syncretic history, masterfully blending Indian sensibilities with Western artistic traditions. It is typically held in December or January, bringing together the best Mando troupes from across the state and beyond to compete and perform, preserving this beautiful art form for future generations.</p>
                    <p>The festival aims to promote and sustain this unique Goan heritage, which serves as a lyrical and musical narrative of Goan life, love, and history. It's an evening of soulful music, graceful dance, and colorful, traditional costumes, offering a nostalgic and romantic glimpse into the aristocratic past of Goa.</p>
                </div>
            </>
        )
    },
    {
        id: "music",
        title: "The Mando",
        icon: Music,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">The Soul of the Mando</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>A Lyrical Dance-Song</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">The Mando is a unique musical form that originated in the 19th century among the Goan Catholic aristocracy, particularly in the salcete region. It is a slow, melancholic, and lyrical song set to a 6/8 time signature, often dealing with themes of love ('mog'), romance, longing, betrayal, and social commentary. The music beautifully combines the Indian 'ghumat' (a traditional percussion instrument made from an earthen pot) with the violin and sometimes guitar, creating a sound that is uniquely Goan. The performance involves a graceful, gliding dance that complements the music's gentle, swaying rhythm. Women wear a traditional, elaborate ceremonial costume called the 'Baju-Tollopp' or 'pano baju', while men are dressed in formal coats, creating a visually elegant and captivating performance that transports the audience to a bygone era.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function MandoFestivalPageContent() {
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

