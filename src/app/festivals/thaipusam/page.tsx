
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import Link from "next/link";

const relatedContent: RelatedItem[] = [
    {
        slug: "extreme-festivals-of-the-world",
        title: "Gods, Guts, and Glory: The World's Most Extreme Festivals",
        image: "https://i.postimg.cc/KzM0xQYV/theemithi.jpg",
        type: "Blog",
        link: "/blog/extreme-festivals-of-the-world",
        hint: "fire walking"
    },
    {
        slug: "theemithi",
        title: "A Walk Through Fire: The Story of Theemithi",
        image: "https://i.postimg.cc/KzM0xQYV/theemithi.jpg",
        type: "Festival",
        link: "/festivals/theemithi",
        hint: "fire walking"
    },
     {
        slug: "pongal",
        title: "Pongal",
        image: "https://i.postimg.cc/bvmpScwr/pongal.jpg",
        type: "Festival",
        link: "/festivals/pongal",
        hint: "pongal dish"
    }
];

export default function ThaipusamPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                 <Image src="https://i.postimg.cc/4y7fTLZd/thaipusam.webp" alt="Thaipusam festival" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-30" data-ai-hint="kavadi" />
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">The Burden of Faith</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">Unpacking the Intense Rituals of Thaipusam</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />The Story</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Ritual</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />The Meaning</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Test of Unwavering Devotion</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Deep within the heart of Tamil culture lies a festival of such intense faith and physical devotion that it captivates and astounds onlookers from around the world. This is Thaipusam, a vibrant and powerful day dedicated to Lord Murugan, the Hindu god of war, victory, and wisdom. The festival commemorates a divine gift: the moment the goddess Parvati bestowed upon her son Murugan an invincible spear, the 'Vel', to vanquish the formidable demon Soorapadman. This story of divine power and righteousness is the spiritual bedrock of Thaipusam.</p>
                                    <p>But the festival is more than just a mythological reenactment. It is a deeply personal journey of penance and thanksgiving. For weeks, devotees cleanse their souls, observing strict fasts and maintaining a state of spiritual purity. They prepare to offer their very bodies as a testament to their faith, a living, breathing prayer for answered vows, for healing, and for spiritual liberation. It is a spectacle of endurance where the lines between the physical and spiritual worlds seem to blur, and the power of human faith is made breathtakingly visible. You can read more about such intense celebrations in our blog, <Link href="/blog/extreme-festivals-of-the-world" className="text-accent hover:underline">Gods, Guts, and Glory: A Journey into the World's Most Extreme Festivals</Link>.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Kavadi Aattam: A Dance of Burden</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The central ritual of Thaipusam is the 'Kavadi Aattam' or 'Burden Dance'. This is where faith takes physical form. Devotees carry a 'kavadi'—a physical burden—on a long pilgrimage to a Murugan temple. In its simplest form, this is a pot of milk or a wooden arch decorated with peacock feathers. But for many, the burden is far more extreme.</p>
                                   <p>In a stunning display of devotion, many participants pierce their skin, cheeks, and tongues with silver skewers and hooks. They attach heavy, ornate structures to their bodies, pulling them for miles. It is believed that their deep meditative state, a trance of pure devotion, protects them from pain and leaves no scars. To the rhythmic, hypnotic beat of drums and the fervent chanting of "Vel! Vel!", these devotees move in a procession, their physical sacrifice a powerful, outward expression of an inner spiritual transformation. It's a raw, visceral, and unforgettable testament to the depths of human belief.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
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
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="The Burden of Faith: Unpacking the Intense Rituals of Thaipusam" />
                        <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
