
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Celebrations", icon: Sparkles },
    { id: "significance", title: "Significance", icon: MessageSquareQuote },
];

const pageContent = [
    {
        id: "overview",
        content: (
             <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:order-2 md:w-1/3">
                    <Image src="https://i.postimg.cc/wMVZW9fk/dussehra.jpg" alt="Ramlila performance" width={400} height={400} className="rounded-lg shadow-lg w-full" data-ai-hint="dussehra celebration"/>
                </div>
                <div className="md:order-1 md:w-2/3">
                    <h2 className="font-headline text-3xl font-bold mb-4">The Tenth Day of Victory</h2>
                    <div className="space-y-4 text-foreground/80 prose max-w-none">
                        <p>Dussehra, also known as Vijayadashami, is a momentous Hindu festival celebrated with great zeal at the culmination of the nine nights of Navratri. The name 'Dussehra' itself is derived from the Sanskrit words 'Dasha' (ten) and 'Hara' (defeat), vividly capturing the essence of the festival: the defeat of the ten-headed demon king, Ravana, by Lord Rama. This victory is a cornerstone of the epic Ramayana and stands as one of the most powerful narratives in Hinduism, symbolizing the decisive and ultimate triumph of Dharma (righteousness) over Adharma (unrighteousness), light over darkness, and good over evil.</p>
                        <p>The festival also celebrates the victory of another powerful deity, Goddess Durga, who vanquished the buffalo demon Mahishasura after a nine-day battle, as celebrated during <Link href="/festivals/durga-puja" className="text-accent hover:underline">Durga Puja</Link>. Thus, the day is also called 'Vijayadashami', the 'tenth day of victory'. While the celebrations vary across India's diverse cultural landscape, the underlying theme remains a universal celebration of the power of truth and virtue to conquer all forms of wickedness.</p>
                    </div>
                </div>
            </div>
        )
    },
     {
        id: "traditions",
        content: (
            <>
            <h2 className="font-headline text-3xl font-bold mb-4">Ramlila and Ravan Dahan</h2>
            <div className="space-y-4 text-foreground/80 prose max-w-none">
               <p>The most iconic tradition of North Indian Dussehra celebrations is the 'Ramlila'. These are vibrant and dramatic folk reenactments of the life of Lord Rama, staged in community grounds for several nights leading up to the festival. Actors portray key events from the Ramayana, from Rama's birth to his final, epic battle with Ravana. These performances are not just entertainment; they are a form of community storytelling that reinforces moral and spiritual values.</p>
               <p>The celebration reaches its climax with 'Ravan Dahan'. On the evening of Dussehra, colossal effigies of Ravana, his brother Kumbhakarna, and his son Meghanada are erected in large open fields. These effigies, often stuffed with firecrackers, are set ablaze by an actor playing Lord Rama, who shoots a flaming arrow into them. The fiery spectacle, witnessed by massive crowds, symbolizes the dramatic destruction of evil and is followed by a dazzling display of fireworks, illuminating the night sky in a triumphant celebration of good's victory.</p>
            </div>
            </>
        )
    },
     {
        id: "significance",
        content: (
            <>
            <h2 className="font-headline text-3xl font-bold mb-4">A Day for New Beginnings</h2>
             <div className="not-prose my-10">
                <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Items for Your Celebration</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <ProductCard product={products.rajasthanKraftToran} />
                    <ProductCard product={products.handicraftsParadiseChowki} />
                    <ProductCard product={products.indianArtVillaThali} />
                </div>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Auspiciousness of Vijayadashami</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/80">Vijayadashami is considered one of the most auspicious days in the Hindu calendar. It is a time for new beginnings, making it a popular day to start a new business, purchase a new home or vehicle, or initiate a child's education (a ritual known as 'Vidyarambham'). The festival powerfully reinforces the core Hindu belief that no matter how formidable evil may appear, it is ultimately transient and will be vanquished by the enduring power of good, truth, and righteousness.</p>
                    </CardContent>
                </Card>
            </div>
            </>
        )
    }
]

export function DussehraPageContent({ isSideNav = false }: { isSideNav?: boolean }) {
    
    if (isSideNav) {
        return (
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
        )
    }

    return (
        <article className="space-y-12">
            {pageContent.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-20">
                    {section.content}
                </section>
            ))}
        </article>
    );
}
