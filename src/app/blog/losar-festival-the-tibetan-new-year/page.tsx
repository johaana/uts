
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";

export default function SingleBlogPage() {
    const title = "Losar Festival: Celebrating the Tibetan New Year in the Himalayas";
    return (
        <div className="container mx-auto px-4 py-12">
            <Card className="overflow-hidden">
                <CardContent className="p-0 md:p-6 md:p-10">
                     <div className="md:hidden relative h-64 w-full mb-8">
                        <Image src="https://i.postimg.cc/mDBXxRCR/losar-2.jpg" alt="Losar Festival" layout="fill" objectFit="cover" data-ai-hint="ladakh festival" />
                    </div>
                     <div className="p-6 md:p-0">
                        <div className="mb-8">
                            <Link href="/blog">
                                <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Button>
                            </Link>
                        </div>
                     </div>

                    <article className="prose max-w-none text-foreground/80 p-6 pt-0 md:p-0">
                         <div className="text-center mb-8">
                            <p className="text-sm text-muted-foreground">By Team Utsavs on June 10, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{title}</h1>
                        </div>

                         <div className="hidden md:block relative h-96 w-full mb-8">
                            <Image src="https://i.postimg.cc/mDBXxRCR/losar-2.jpg" alt="Losar Festival" layout="fill" objectFit="contain" data-ai-hint="ladakh festival" className="rounded-lg"/>
                        </div>

                        <h2>Welcoming a New Beginning</h2>
                        <p>The Losar Festival is the most important celebration for Tibetan Buddhists in India, marking the beginning of their New Year. Celebrated with great fervor in regions like Ladakh, Sikkim, and Arunachal Pradesh, Losar is a vibrant 15-day festival that combines sacred rituals, traditional performances, and joyous family gatherings. The dates of the festival are determined by the lunar calendar, and it is a time for cleansing, renewal, and ushering in good fortune for the year ahead.</p>

                        <h2>Preparing for Prosperity</h2>
                        <p>Preparations for Losar begin weeks in advance. Homes are thoroughly cleaned and decorated with auspicious symbols to ward off evil spirits and welcome the new year. Old and unused items are discarded, symbolizing the letting go of the past. Lavish offerings, known as 'Lama Losar', are made at monasteries and home altars.</p>

                        <h3>The Rituals and Celebrations:</h3>
                        <ul>
                            <li><strong>Cham Dance:</strong> The festival's main attraction is the sacred masked dance, or 'Cham', performed by monks in monasteries. These dances narrate stories of the victory of good over evil and are accompanied by the powerful sounds of traditional instruments.</li>
                            <li><strong>Religious Offerings:</strong> The festival begins with prayers and religious offerings at monasteries, often led by senior lamas. Special prayers are offered to deities like Goddess Palden Lhamo, the supreme protector of Dharma.</li>
                            <li><strong>Community Feasting:</strong> Losar is a time for family and community. People visit each other, exchange greetings of "Tashi Delek", and share special festive foods like 'Guthuk' (a noodle soup) and 'Kapse' (fried pastries).</li>
                        </ul>
                        
                        <p>Experiencing the Losar festival is a unique opportunity to witness the rich cultural and spiritual traditions of the Himalayan region. It's a celebration that beautifully blends solemn ritual with exuberant joy, offering a memorable experience for any traveler.</p>
                    </article>
                    <div className="p-6 md:p-0">
                        <ShareButtons title={title} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
