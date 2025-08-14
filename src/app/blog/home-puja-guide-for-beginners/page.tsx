
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";

const post = { 
    title: "A Beginner's Guide to Setting Up a Home Puja (Altar)", 
    image: "https://i.postimg.cc/8PYnpyjS/home-puja.webp",
    excerpt: "New to Hindu rituals? This simple, accessible guide walks you through creating a sacred space at home, basic offerings, and the philosophy behind daily worship. No prior knowledge needed."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-09-05').toISOString(),
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
        slug: "diwali",
        title: "Diwali",
        image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg",
        type: "Festival",
        link: "/festivals/diwali",
        hint: "diwali celebration"
    },
    {
        slug: "significance-of-diyas-in-diwali",
        title: "The Significance of Diyas",
        image: "https://i.postimg.cc/brM9vjDZ/Diya-diwali.webp",
        type: "Blog",
        link: "/blog/significance-of-diyas-in-diwali",
        hint: "diwali lamps"
    },
    {
        slug: "why-do-we-break-coconuts",
        title: "Why Do We Break Coconuts?",
        image: "https://i.postimg.cc/dVF0D97h/coconut.webp",
        type: "Blog",
        link: "/blog/why-do-we-break-coconuts",
        hint: "coconut ritual"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="home altar" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on September 05, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>For many Hindus, daily puja (worship) is a cornerstone of spiritual life. It's a quiet time to connect with the divine, express gratitude, and set a positive tone for the day. If you're new to Hindu traditions or simply wish to create a sacred space in your home, setting up a home altar can seem daunting. But it doesn't have to be. The most important ingredient is your devotion ('bhakti'). This guide will walk you through the basics in a simple, accessible way.</p>

                        <h3>1. Choosing the Sacred Space</h3>
                        <p>The first step is to find a suitable location. Ideally, this should be a quiet, clean, and peaceful corner of your home where you won't be easily disturbed. The northeast corner of a room is traditionally considered the most auspicious direction. However, if that's not possible, any clean and respectful space will do. The idea is to create a dedicated area for spiritual focus. You can place a small, clean table, a shelf on the wall, or even a dedicated puja unit.</p>

                        <h3>2. Placing the Deities</h3>
                        <p>Next, choose the deities you feel a personal connection with. You can have small idols ('murtis') or framed pictures. It's not necessary to have a large number of them. A picture of Lord Ganesha is traditionally placed first, as he is the remover of obstacles. You can also include your 'Ishta Devata' (personal deity) or 'Kula Devata' (family deity). Arrange them on a clean cloth, usually red or yellow, on your altar.</p>

                        <h3>3. The Essential Puja Items (Thali)</h3>
                        <p>You don't need elaborate items to start. A simple puja thali (plate) can hold the basics. Here's a simple list to get you started:</p>
                        <ul>
                            <li><strong>A Diya (Lamp):</strong> This is the most essential item. A small lamp, filled with ghee or oil, symbolizes the dispelling of darkness and ignorance and the presence of the divine light.</li>
                            <li><strong>Incense Sticks (Agarbatti):</strong> The fragrant smoke is believed to purify the atmosphere and carry your prayers to the gods.</li>
                            <li><strong>Flowers:</strong> A simple, fresh flower is a beautiful offering representing your devotion.</li>
                            <li><strong>Water:</strong> A small vessel (lota) of clean water is kept, symbolizing the life-giving essence of nature.</li>
                            <li><strong>Prasad (Offering):</strong> A small offering of food, such as a piece of fruit or a spoonful of sugar, can be placed before the deities. This is later consumed by the family as a blessed offering.</li>
                        </ul>
                        
                        <div className="not-prose my-8 p-6 bg-primary/10 rounded-lg">
                           <h4 className="font-headline text-2xl font-bold text-primary mb-4 text-center">Shop for Your Puja Thali</h4>
                           <p className="text-center mb-6">For a beautiful and complete setup, you might consider a traditional brass Puja Thali set which contains all the essential items in one elegant plate.</p>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <ProductCard 
                                    name="INDIAN ART VILLA Brass Thali Set" 
                                    price="1955" 
                                    link="https://www.amazon.in/INDIAN-ART-VILLA-Religious-DIameter-10-1/dp/B07RPYGYZC?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja%2Bthali%2Bbrass&qid=1755163260&sprefix=pooja%2Bthali%2Caps%2C365&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=utsavs-21&linkId=7182456d6dc168d67a3fca216df0ecba&language=en_IN&ref_=as_li_ss_tl" 
                                    image="https://i.postimg.cc/8cmY9Ydk/thali1.jpg"
                                    description="A large, 10-inch pure brass thali with an elegant floral embossed design." 
                                />
                                <ProductCard 
                                    name="BENGALEN 8-Inch Brass Thali Set" 
                                    price="1199" 
                                    link="https://www.amazon.in/BENGALEN-Silver-Plated-Pooja-Thali/dp/B089QT2XKN?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja+thali+brass&qid=1755163260&sprefix=pooja+thali%2Caps%2C365&sr=8-9&linkCode=ll1&tag=utsavs-21&linkId=4544394948780cd384b657ba12a40c20&language=en_IN&ref_=as_li_ss_tl" 
                                    image="https://i.postimg.cc/pT5pGhx5/thali2.jpg" 
                                    description="This complete 8-inch set includes a Kuber Diya, bell, kalash, spoon, and agarbatti stand." 
                                />
                                 <ProductCard 
                                    name="Amazon Solimo Puja Thali" 
                                    price="429" 
                                    link="https://www.amazon.in/Amazon-Brand-Solimo-Worship-Flower-Engraved/dp/B0BBG18TWR?crid=2X07QB4GNXO95&dib=eyJ2IjoiMSJ9.q1InaOXNtmW86QjqFt-ZHzHW25RyyVo6nFW39sweTF_I8ON0iNh_8rvXIU0fljKmjLxzoojk4Y0k6JLCD5QTMdPnWlytE6gLPQYNfbGSUhcQWQ-a3NwV92xvv6igRrLxIScLXloIN0WtKs-Eyb365RF2vlNWqF-xQMXhbDau0d_raxaDSxsXz7duEKZXMJQ4yUl_klj1IcGMiN3iCPJ4rem9OTl0e_KEQqK1RKs_Der988xe2kbb1nbd4YePSW8w7-YYeALlR-gMdZ-FmSCYggsT4Ry8h8G3ZFgfs6G9rwM.jOgBmpI1HwkYLymFIiVFZtRBsmpxrIZXVOewFRPSWks&dib_tag=se&keywords=pooja%2Bthali%2Bbrass&qid=1755163260&sprefix=pooja%2Bthali%2Caps%2C365&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=utsavs-21&linkId=835835eaf1a00c036785a96dc6f0bffc&language=en_IN&ref_=as_li_ss_tl" 
                                    image="https://i.postimg.cc/prpyZJ7G/thali3.jpg"
                                    description="A simple and elegant 6.5-inch flower-engraved brass thali, perfect for daily worship." 
                                />
                           </div>
                        </div>

                        <h3>4. A Simple Puja Routine</h3>
                        <p>Your daily puja can be as short as five minutes. The goal is consistency and sincerity.</p>
                        <ol>
                            <li>Begin by cleaning yourself (taking a bath) and the altar space.</li>
                            <li>Light the diya and the incense stick.</li>
                            <li>Offer a fresh flower to the deities.</li>
                            <li>Close your eyes for a moment and focus your thoughts on the divine. You can chant a simple mantra, like the Gayatri Mantra or "Om Namah Shivaya," or simply speak from your heart, expressing gratitude and your prayers for the day.</li>
                            <li>Perform a small 'aarti' by circling the lit diya in front of the deities in a clockwise motion a few times.</li>
                            <li>Conclude by bowing your head in respect.</li>
                        </ol>

                        <blockquote>
                            <p>Remember, the essence of puja is not in the grandeur of the ritual, but in the sincerity of the heart. A simple flower offered with love is more valuable than a grand feast offered without devotion.</p>
                        </blockquote>

                        <p>Start small and simple. As you become more comfortable, you can learn more specific mantras or rituals if you wish. The most important thing is to create a personal connection and a daily habit of gratitude and reflection.</p>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
