
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const pageContent = [
    {
        id: "story",
        title: "The Story",
        icon: BookOpen,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">A Test of Unwavering Devotion</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Deep within the heart of Tamil culture lies a festival of such intense faith and physical devotion that it captivates and astounds onlookers from around the world. This is Thaipusam, a vibrant and powerful day dedicated to Lord Murugan, the Hindu god of war, victory, and wisdom. The festival commemorates a divine gift: the moment the goddess Parvati bestowed upon her son Murugan an invincible spear, the 'Vel', to vanquish the formidable demon Soorapadman. This story of divine power and righteousness is the spiritual bedrock of Thaipusam.</p>
                    <p>The festival is more than just a mythological reenactment. It is a deeply personal journey of penance and thanksgiving. For weeks, devotees cleanse their souls, observing strict fasts and maintaining a state of spiritual purity. They prepare to offer their very bodies as a testament to their faith, a living, breathing prayer for answered vows, for healing, and for spiritual liberation. It is a spectacle of endurance where the lines between the physical and spiritual worlds seem to blur, and the power of human faith is made breathtakingly visible. You can read more about such intense celebrations in our blog, <Link href="/blog/extreme-festivals-of-the-world" className="text-accent hover:underline">Gods, Guts, and Glory: A Journey into the World's Most Extreme Festivals</Link>.</p>
                </div>
            </>
        )
    },
    {
        id: "ritual",
        title: "The Ritual",
        icon: Sparkles,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">The Kavadi Aattam: A Dance of Burden</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>The central ritual of Thaipusam is the 'Kavadi Aattam' or 'Burden Dance'. This is where faith takes physical form. Devotees carry a 'kavadi'—a physical burden—on a long pilgrimage to a Murugan temple. In its simplest form, this is a pot of milk or a wooden arch decorated with peacock feathers. But for many, the burden is far more extreme.</p>
                   <p>In a stunning display of devotion, many participants pierce their skin, cheeks, and tongues with silver skewers and hooks. They attach heavy, ornate structures to their bodies, pulling them for miles. It is believed that their deep meditative state, a trance of pure devotion, protects them from pain and leaves no scars. To the rhythmic, hypnotic beat of drums and the fervent chanting of "Vel! Vel!", these devotees move in a procession, their physical sacrifice a powerful, outward expression of an inner spiritual transformation. It's a raw, visceral, and unforgettable testament to the depths of human belief.</p>
                </div>
                <div className="not-prose my-10">
                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Items for Puja</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <ProductCard product={products.indianArtVillaThali} />
                        <ProductCard product={products.signamioDhoopStand} />
                        <ProductCard product={products.sandalwoodHavanCups} />
                    </div>
                </div>
            </>
        )
    },
    {
        id: "meaning",
        title: "The Meaning",
        icon: MessageSquareQuote,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">Mortifying the Flesh, Freeing the Soul</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Why Endure Such Pain?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">To an outsider, the rituals of Thaipusam may seem shocking. But for the devotee, it is a profound act of purification. The physical pain is a way to "mortify the flesh," to subdue the ego and worldly desires, thereby cleansing the soul. By enduring this self-imposed trial, they believe they earn the grace of Lord Murugan, who will forgive their sins and grant their heartfelt prayers. It is a powerful reminder that sometimes, the path to spiritual liberation is through the crucible of physical sacrifice, a journey where faith conquers all fear and pain.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function ThaipusamPageContent({ isContent = false }: { isContent?: boolean }) {
    const pageSections = pageContent.map(item => ({
        id: item.id,
        title: item.title,
        icon: item.icon,
    }));
    
    if (isContent) {
        return (
             <article className="space-y-12">
                {pageContent.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-20">
                        {section.content}
                    </section>
                ))}
            </article>
        )
    }

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
    );
}
