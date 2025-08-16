
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
        slug: "ladoo",
        title: "Besan Ladoo Recipe",
        image: "https://i.postimg.cc/9MkWX5gm/Besan-Laddoo.webp",
        type: "Recipe",
        link: "/recipes/ladoo",
        hint: "gram flour ladoo"
    },
    {
        slug: "payasam",
        title: "Payasam Recipe",
        image: "https://i.postimg.cc/59n9d7My/payasam.jpg",
        type: "Recipe",
        link: "/recipes/payasam",
        hint: "rice pudding"
    },
    {
        slug: "maha-shivaratri",
        title: "Maha Shivaratri",
        image: "https://i.postimg.cc/52NbWR80/mahashivratri.jpg",
        type: "Festival",
        link: "/festivals/maha-shivaratri",
        hint: "shiva statue"
    }
];

export default function JanmashtamiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Janmashtami</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">Celebrating the Birth of Lord Krishna</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="chants" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Divine Advent</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Janmashtami, also known as Krishna Janmashtami, is a vibrant and joyous festival celebrating the birth of Lord Krishna, the eighth and one of the most beloved avatars of Lord Vishnu. The festival is observed with immense devotion on the eighth day (Ashtami) of the dark fortnight (Krishna Paksha) of the Hindu month of Bhadrapada. Lord Krishna is a central figure in Hinduism, revered as a mischievous child, a divine lover, a compassionate guide who revealed the sacred wisdom of the Bhagavad Gita, and the ultimate protector of dharma.</p>
                                    <p>His birth story is a tale of hope in a time of darkness. He was born in a prison cell in Mathura to Devaki and Vasudeva. Devaki's tyrannical brother, King Kansa, had imprisoned them after a prophecy foretold that their eighth son would be his destroyer. On the stormy night of Krishna's birth, a series of miracles occurred. The prison guards fell into a deep slumber, the chains fell open, and the prison doors unlocked. To save him from Kansa's wrath, his father Vasudeva carried the divine infant across the raging Yamuna river to the safety of Nanda and Yashoda's home in Gokul. Janmashtami celebrates this divine birth, a symbol of the victory of good over evil and a promise of hope and liberation for all humanity.</p>
                                </div>
                                <div className="not-prose my-10">
                                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Check these products on Amazon</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                        <ProductCard product={products.bengalenGopalThali} />
                                        <ProductCard product={products.marigoldGarland} />
                                        <ProductCard product={products.divyakoshLotusHanging} />
                                    </div>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Janmashtami</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Fasting and Puja</h4>
                                            <p className="text-foreground/80">Devotees observe a fast throughout the day, which is broken at midnight, the traditional hour of Krishna's birth. Temples and homes are decorated, and idols of infant Krishna are bathed, adorned, and placed in cradles.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Ras Leela</h4>
                                            <p className="text-foreground/80">In places like Mathura and Vrindavan, 'Ras Leela' performances, which are dramatic enactments of Krishna's life, are organized. These dance-dramas beautifully depict his playful antics and his divine love story with Radha.</p>
                                        </div>
                                    </li>
                                </ul>
                                <Card className="my-8 overflow-hidden">
                                     <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/2 p-6 flex flex-col justify-center">
                                            <h3 className="font-headline text-2xl font-bold mb-2">Dahi Handi</h3>
                                            <p className="text-foreground/80">In Maharashtra and other regions, the boisterous 'Dahi Handi' tradition reenacts Krishna's playful childhood love for butter and curd. Young men, or 'Govindas', form human pyramids to reach and break an earthen pot filled with curd that is hung high in the air, celebrating teamwork and youthful energy.</p>
                                        </div>
                                        <div className="md:w-1/2 relative h-64 md:h-auto">
                                             <Image src="https://i.postimg.cc/T3ccXCRv/dahi-handi.jpg" alt="Dahi Handi celebration" layout="fill" objectFit="cover" data-ai-hint="dahi handi" />
                                        </div>
                                    </div>
                                </Card>
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Hare Krishna Mahamantra</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>The Great Chant for Deliverance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama, Hare Rama, Rama Rama, Hare Hare"</p>
                                            <p className="mt-2 text-foreground/80">This sixteen-word mantra is one of the most widely recognized and chanted mantras in the world. It is a call to the divine energies of Krishna and Rama. Chanting it with devotion, especially on Janmashtami, is believed to purify the consciousness, bring inner peace, and foster a deep connection with the divine.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Janmashtami" />
                        <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
