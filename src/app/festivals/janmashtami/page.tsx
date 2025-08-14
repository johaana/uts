
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";

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
                                            <h4 className="font-bold">Dahi Handi</h4>
                                            <p className="text-foreground/80">In Maharashtra and other regions, the boisterous 'Dahi Handi' tradition reenacts Krishna's playful childhood love for butter and curd. Young men, or 'Govindas', form human pyramids to reach and break an earthen pot filled with curd that is hung high in the air.</p>
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
                                <div className="not-prose my-8 p-6 bg-primary/10 rounded-lg">
                                   <h4 className="font-headline text-2xl font-bold text-primary mb-4 text-center">Bhog for Laddoo Gopal</h4>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <ProductCard 
                                            name="BENGALEN Small Brass Bhog Thali" 
                                            price="899" 
                                            link="https://www.amazon.in/BENGALEN-Janmashtami-Decoration-Festival-Standard/dp/B0B37XN9JF?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja%2Bthali%2Bbrass&qid=1755163260&sprefix=pooja%2Bthali%2Caps%2C365&sr=8-32&th=1&linkCode=ll1&tag=utsavs-21&linkId=10a4e0f71525510031c66e6ad2be3ee7&language=en_IN&ref_=as_li_ss_tl" 
                                            image="https://i.postimg.cc/66t2w1g9/laddu-gopal-thali.jpg"
                                            description="A beautiful small brass thali set, perfect for offering 'bhog' to your Laddoo Gopal (infant Krishna) idol during Janmashtami puja." 
                                        />
                                   </div>
                                </div>
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
