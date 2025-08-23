
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Music } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Parades and Dances", icon: Music },
];

export default function ShigmoFestivalPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                     <Image src="https://i.postimg.cc/T24CgjxF/Shigmo2.png" alt="Shigmo Festival" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="goa parade" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Shigmo</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">Goa's Vibrant Spring Festival</p>
                    </div>
                    <CardContent className="p-6 md:p-10 pt-0">
                         <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3 -ml-2 hidden md:block">
                                <div className="sticky top-24">
                                     <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
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
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <article className="space-y-12">
                                    <section id="overview" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Goa's Version of Holi</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Shigmo, also known as Shigmotsav, is the vibrant and energetic spring festival of Goa, celebrated with immense fervor by the Hindu community. It's Goa's spectacular version of Holi, a grand celebration that marks the arrival of spring and the farewell to winter. The festival is a colorful and musical extravaganza that spans over two weeks, culminating in grand parades in major cities. It's a time for Goans to honor the local deities, celebrate the harvest, and welcome the season of new life.</p>
                                            <p>Shigmo is a festival of the masses, deeply rooted in the rural and folk traditions of Goa. It's a time when the entire community comes together, setting aside their daily chores to immerse themselves in dance, music, and joyous celebration, turning the streets into a canvas of color and sound.</p>
                                        </div>
                                    </section>
                                     <section id="traditions" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">A Spectacle of Floats and Folk Art</h2>
                                        <div className="space-y-6">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Grand Parades and Folk Dances</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-foreground/80">The highlight of Shigmo is the grand float parade. These parades feature large, elaborate floats depicting scenes from Hindu mythology, especially from the Ramayana and Mahabharata. They are accompanied by troupes of performers in vibrant costumes, showcasing traditional Goan folk dances like the Ghode Modni (a warrior dance with horse puppets), Fugdi, and Rommatamel. The air is filled with the energetic beats of traditional instruments like the dhol, tasha, and cymbals. Dressed in colorful attire, people also play with 'gulal' (colored powder), adding to the festive and joyous atmosphere of this unique Goan celebration.</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </section>
                               </article>
                               <ShareButtons title="Shigmo Festival" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
