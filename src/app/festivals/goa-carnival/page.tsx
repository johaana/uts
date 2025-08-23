
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, Music } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Highlights", icon: Sparkles },
    { id: "music", title: "Music & Dance", icon: Music },
];

export default function GoaCarnivalPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                     <Image src="https://i.postimg.cc/4xZYzGsQ/Goa-Carnival.jpg" alt="Goa Carnival" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="carnival parade float" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Goa Carnival</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">The Ultimate Street Party</p>
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
                                        <h2 className="font-headline text-3xl font-bold mb-4">A Portuguese Legacy</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>The Goa Carnival is a vibrant, four-day festival of pure revelry held in Goa just before the start of Lent, the 40-day period of fasting and penance in Christianity. The carnival is a spectacular legacy of the state's 450-year-long Portuguese colonial rule and is one of the few carnivals of its kind celebrated in Asia. It's a time of exuberant celebration, where the streets of major Goan cities like Panjim, Mapusa, Margao, and Vasco da Gama erupt in a riot of color, music, and dance.</p>
                                            <p>The festival is officially presided over by the mythical King Momo, a jovial figure who, on the opening day, declares his decree of "Kha, Piye, Aani Majja Kar" (Eat, Drink, and Make Merry). This sets the tone for four days of non-stop festivities, including colorful parades with elaborate floats, masked dancers in vibrant costumes, and electrifying live music. The carnival is a true reflection of Goa's unique and syncretic culture, a beautiful blend of Indian and Western traditions, where people of all faiths and backgrounds come together to celebrate life with unmatched energy and spirit.</p>
                                        </div>
                                    </section>
                                     <section id="traditions" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">What to Experience</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <ul className="list-none p-0">
                                                <li><strong className="font-semibold">Colorful Parades:</strong> The highlight of the carnival is the grand parade with elaborate floats, dancers in vibrant costumes, and live music bands.</li>
                                                <li className="mt-2"><strong className="font-semibold">Red and Black Dance:</strong> The carnival traditionally concludes with the Red and Black dance, where participants dress in red and black attire and dance to the tunes of live bands.</li>
                                                <li className="mt-2"><strong className="font-semibold">Goan Cuisine:</strong> Food stalls line the streets, offering a chance to savor delicious Goan delicacies and the local spirit, Feni.</li>
                                            </ul>
                                        </div>
                                    </section>
                                     <section id="music" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Sound of Celebration</h2>
                                        <div className="space-y-6">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Live Music and Dance</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-foreground/80">Music is the heartbeat of the Goa Carnival. From traditional Goan folk music to modern rock and pop, live bands perform throughout the festival, creating an electrifying atmosphere. People dance on the streets, letting go of their inhibitions in a celebration of life and joy.</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </section>
                               </article>
                               <ShareButtons title="Goa Carnival" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
