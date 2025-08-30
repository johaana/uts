
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Beyond Diwali: 10 Secret Festivals That Reveal the True Soul of India", 
    image: "https://i.postimg.cc/59X4N23Q/unique-festivals1.webp",
    excerpt: "Venture off the beaten path and discover some of India's most unique and fascinating regional festivals that reveal the nation's true cultural heart."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-07-15').toISOString(),
    authors: ['Utsavs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [post.image],
  },
};

const relatedContent: RelatedItem[] = [
    {
        slug: "bastar-dussehra",
        title: "Bastar Dussehra",
        image: "https://i.postimg.cc/wMVZW9fk/dussehra.jpg",
        type: "Festival",
        link: "/festivals/bastar-dussehra",
        hint: "dussehra celebration"
    },
    {
        slug: "theyyam",
        title: "Theyyam",
        image: "https://i.postimg.cc/HW7r9WfV/Theyyam.jpg",
        type: "Festival",
        link: "/festivals/theyyam",
        hint: "theyyam dancer"
    },
    {
        slug: "hornbill-festival",
        title: "Hornbill Festival",
        image: "https://i.postimg.cc/6pL9wGsd/Hornbill-Festival.webp",
        type: "Festival",
        link: "/festivals/hornbill-festival",
        hint: "naga festival"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt="Indian tribal festival" layout="fill" objectFit="cover" data-ai-hint="tribal festival" className="rounded-lg"/>
            </div>
            <Card className="overflow-hidden md:-mt-16 relative z-10 md:rounded-t-2xl">
                <CardContent className="p-6 md:p-10">
                    <div className="mb-8">
                        <Link href="/blog">
                            <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Button>
                        </Link>
                    </div>

                    <article className="prose max-w-none text-foreground/80">
                         <div className="text-center mb-8">
                            <p className="text-sm text-muted-foreground">By Team Utsavs on July 15, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>While Diwali's lights and Holi's colors capture global attention, India's cultural heart beats strongest in its lesser-known regional festivals. These are not just events; they are raw, authentic celebrations of life, community, and ancient traditions. For the traveler seeking to go beyond the tourist trail, these festivals offer an unparalleled window into the soul of India. Here are 10 such celebrations that promise an unforgettable experience.</p>

                        <h3>1. Sekrenyi Festival, Nagaland</h3>
                        <p>Celebrated by the Angami Naga tribe in February, Sekrenyi is a ten-day festival of purification and sanctification. It involves elaborate rituals, traditional songs, and feasting, all aimed at cleansing the body and soul. The highlight is the 'Thekra Hie', where young people of the village gather to sing, dance, and feast together.</p>

                        <h3>2. Sume-Gelirak Festival, Odisha</h3>
                        <p>A vibrant festival of the Bonda tribe, Sume-Gelirak is a time for forgiveness, love, and the selection of life partners. Celebrated over ten days, it involves the entire community participating in dance, music, and the consumption of locally brewed liquor. It's a fascinating display of ancient tribal customs.</p>

                        <h3>3. Mim Kut, Mizoram</h3>
                        <p>This harvest festival of the Kuki-Chin-Mizo tribes is celebrated in August or September after the maize harvest. Mim Kut is a time of thanksgiving, where people honor their ancestors and celebrate with traditional dances, songs, and a grand feast featuring dishes made from maize.</p>

                        <h3>4. Cheiraoba Festival, Manipur</h3>
                        <p>The Manipuri New Year, Cheiraoba, is celebrated in April with great enthusiasm. The festival involves cleaning and decorating homes, preparing special festive dishes, and the unique custom of climbing the nearest hilltop in the evening to pray for a prosperous year ahead.</p>
                        
                        <h3>5. <Link href="/festivals/shigmo-festival" className="text-accent hover:underline">Shigmo, Goa</Link></h3>
                        <p>While Goa is famous for its Carnival, Shigmo is its vibrant Hindu spring festival. It's a spectacular celebration of color, music, and folk dances like the Ghode Modni (horse dance) and Fugdi. The streets come alive with grand parades depicting scenes from mythology.</p>

                        <h3>6. Puli Kali, Kerala</h3>
                        <p>Performed during Onam, Puli Kali, or the "Tiger Dance," is a folk art form where performers, painted like tigers and hunters, dance to the rhythm of traditional percussion instruments. It's a thrilling and colorful spectacle that takes place on the streets of Thrissur.</p>

                        <h3>7. <Link href="/festivals/madai-festival" className="text-accent hover:underline">Madai Festival, Chhattisgarh</Link></h3>
                        <p>One of the most prominent festivals of the Gond tribe, the Madai festival travels from one village to another in Chhattisgarh. It's a vibrant affair involving rituals, folk dances, music, and a large fair where tribal communities gather to trade goods and celebrate.</p>

                        <h3>8. Nongkrem Dance Festival, Meghalaya</h3>
                        <p>This five-day harvest festival of the Khasi tribe is held in November. The highlight is the Nongkrem dance, performed by young men and women in traditional attire, to appease the all-powerful Goddess Ka Blei Synshar for a rich harvest and prosperity.</p>

                        <h3>9. Yargon Tungshak, Ladakh</h3>
                        <p>A lesser-known festival of the Nubra Valley in Ladakh, Yargon Tungshak is celebrated with great fanfare in winter. It involves masked dances (Chams), prayers at the local monastery, and a vibrant coming together of the community against the stark, beautiful landscape.</p>

                        <h3>10. Kaila Polud, Karnataka</h3>
                        <p>Celebrated in the Coorg (Kodagu) region, Kaila Polud is a unique festival dedicated to weapons. It marks the end of the agricultural season, and on this day, the Kodava community takes out their arms, cleans them, and worships them. The festival also includes rural sports and games.</p>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
