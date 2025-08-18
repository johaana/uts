
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
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
        slug: "thaipusam",
        title: "The Burden of Faith: Unpacking Thaipusam",
        image: "https://i.postimg.cc/4y7fTLZd/thaipusam.webp",
        type: "Festival",
        link: "/festivals/thaipusam",
        hint: "kavadi"
    },
    {
        slug: "dussehra",
        title: "Dussehra",
        image: "https://i.postimg.cc/wMVZW9fk/dussehra.jpg",
        type: "Festival",
        link: "/festivals/dussehra",
        hint: "dussehra celebration"
    }
];


export default function TheemithiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-red-700/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/KzM0xQYV/theemithi.jpg" alt="Theemithi Fire Walking Festival" layout="fill" objectFit="cover" data-ai-hint="fire walking" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-red-900 drop-shadow-lg">A Walk Through Fire</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-red-800/90 drop-shadow-md">Theemithi, A Festival of Unwavering Faith</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />The Story</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Ritual</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Draupadi's Trial by Fire</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Theemithi, or the Fire-Walking Festival, is a dramatic and awe-inspiring Hindu festival originating from Tamil Nadu, India, and celebrated with immense fervor in Singapore, Sri Lanka, and other countries with large Tamil populations. The festival is held in honor of the goddess Draupadi, the powerful heroine of the epic Mahabharata and the wife of the five Pandava brothers. It reenacts a pivotal moment from the epic, where Draupadi, to prove her purity and innocence after the devastating Kurukshetra war, walks barefoot across a bed of burning embers and emerges completely unscathed. This miraculous act is seen as the ultimate testament to her virtue and the protective power of unwavering faith.</p>
                                    <p>Her story is one of immense resilience. The Theemithi festival celebrates her power, purity, and the idea that true devotion can overcome even the most daunting trials. You can read more about other such intense displays of faith in our <Link href="/blog/extreme-festivals-of-the-world" className="text-accent hover:underline">guide to extreme festivals</Link>.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Path of Embers</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>An Act of Penance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Theemithi is the culmination of weeks of fasting, prayer, and purification for the devotees who have made a vow to participate. The main event involves the creation of a large fire pit, several meters long, filled with burning charcoal. The chief priest is the first to walk across this fiery path, carrying a sacred pot on his head. He is followed by dozens, sometimes hundreds, of male devotees. They walk calmly and deliberately across the embers, their faces showing intense concentration and faith, before stepping into a pool of milk to cool their feet. It is a powerful and visceral performance of devotion, a belief that their purity and faith will protect them from the flames, just as it protected Draupadi.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Theemithi Fire-Walking Festival" />
                        <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
