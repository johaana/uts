
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const relatedContent: RelatedItem[] = [
    {
        slug: "dussehra",
        title: "Dussehra",
        image: "https://i.postimg.cc/wMVZW9fk/dussehra.jpg",
        type: "Festival",
        link: "/festivals/dussehra",
        hint: "dussehra celebration"
    },
    {
        slug: "hanuman-jayanti",
        title: "Hanuman Jayanti",
        image: "https://i.postimg.cc/9fCpCJPR/hanuman-jayanti3.jpg",
        type: "Festival",
        link: "/festivals/hanuman-jayanti",
        hint: "hanuman idol"
    },
    {
        slug: "diwali",
        title: "Diwali",
        image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg",
        type: "Festival",
        link: "/festivals/diwali",
        hint: "diwali celebration"
    }
];

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Traditions", icon: Sparkles },
    { id: "chants", title: "Chants", icon: MessageSquareQuote },
];


export default function RamNavamiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Ram Navami</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">Celebrating the Birth of Lord Rama</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                            <aside className="md:col-span-4 lg:col-span-3">
                                <div className="sticky top-24">
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
                                </div>
                            </aside>

                            <main className="md:col-span-8 lg:col-span-9">
                                <article className="space-y-12">
                                    <section id="overview" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Advent of the Ideal Man</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Ram Navami is a cherished Hindu festival that celebrates the birth of Lord Rama, the seventh and one of the most revered avatars of Lord Vishnu. Observed on the ninth day (Navami) of the bright fortnight (Shukla Paksha) in the Hindu month of Chaitra, this day marks a momentous occasion in Hindu tradition. Lord Rama is the central figure of the epic Ramayana, a story that is not just a religious text but a guiding light on morality, duty, and righteousness. He is revered as 'Maryada Purushottam', the perfect or ideal man, the very embodiment of dharma, compassion, courage, and devotion.</p>
                                            <p>The story of his birth is one of divine intervention. The noble King Dasharatha of Ayodhya, despite having three wives, was childless and longed for an heir. On the advice of the sages, he performed a grand 'Putrakameshti Yajna' (a sacred fire ritual for progeny). From the sacrificial fire, a divine being emerged, bestowing upon the king a bowl of divine kheer (pudding) to be shared among his queens. As a result, his eldest queen, Kaushalya, gave birth to Rama. His birth was a divine answer to the prayers of the gods and the earth, to vanquish the tyrannical demon king Ravana of Lanka. Ram Navami, therefore, is not just a birthday celebration; it is a festival that reaffirms the power of good, the importance of living a righteous life, and the promise that divinity will always descend to Earth to conquer the forces of evil.</p>
                                        </div>
                                    </section>
                                    
                                    <section id="traditions" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Ram Navami</h2>
                                        <ul className="space-y-4 pl-4">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Prayers and Fasting</h4>
                                                    <p className="text-foreground/80">Devotees observe a day-long fast, breaking it only at midnight, the time of Rama's birth. Temples dedicated to Lord Rama are beautifully decorated, and special prayers and pujas are conducted. An image or idol of infant Rama is often placed in a cradle and rocked by devotees.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Reading the Ramayana</h4>
                                                    <p className="text-foreground/80">Continuous chanting of the epic Ramayana, especially the 'Akhand Path' (unbroken reading), is organized in many temples and homes. This immersion in his life story is a key part of the celebration.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Rathayatras</h4>
                                                    <p className="text-foreground/80">In several places, chariot processions, known as 'Rathayatras', are taken out, with people dressed as Rama, Sita, Lakshmana, and Hanuman, reenacting scenes from their lives.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </section>

                                     <section id="chants" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Sacred Mantras of Rama</h2>
                                        <div className="space-y-6">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>The Taraka Mantra</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-lg font-serif italic">"Shri Ram Jai Ram Jai Jai Ram"</p>
                                                    <p className="mt-2 text-foreground/80">This powerful and popular mantra, known as the 'Taraka Mantra' (the chant that liberates), is chanted by devotees. It is believed that its continuous repetition brings peace, purifies the soul, and leads one across the ocean of worldly existence.</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </section>
                                </article>
                                <ShareButtons title="Ram Navami" />
                                <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
