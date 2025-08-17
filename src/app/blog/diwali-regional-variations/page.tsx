
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Same Festival, Different Flavors: How “Diwali Season” Shines Across Regions", 
    image: "https://i.postimg.cc/mg1bYqXc/Diwali-blog-same-fest.jpg",
    excerpt: "Discover how Diwali (and related festivals like Nepal’s Tihar) is celebrated differently across regions — rituals, foods, myths, and modern innovations."
};

export const metadata: Metadata = {
  title: "How Diwali is Celebrated Differently Across India and the World | Utsavs",
  description: post.excerpt,
  openGraph: {
    title: `Same Festival, Different Flavors | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-10-15').toISOString(),
    authors: ['Utsavs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Same Festival, Different Flavors | Utsavs`,
    description: post.excerpt,
    images: [post.image],
  },
};

const relatedContent: RelatedItem[] = [
    {
        slug: "diwali",
        title: "Diwali Festival Guide",
        image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg",
        type: "Festival",
        link: "/festivals/diwali",
        hint: "diwali celebration"
    },
    {
        slug: "durga-puja",
        title: "Durga Puja Festival Guide",
        image: "https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp",
        type: "Festival",
        link: "/festivals/durga-puja",
        hint: "durga idol"
    },
     {
        slug: "kukur-tihar",
        title: "Kukur Tihar: Nepal's 'Day of the Dogs'",
        image: "https://i.postimg.cc/RCcT1Twd/kukur-tihar1.avif",
        type: "Festival",
        link: "/festivals/kukur-tihar",
        hint: "dog worship"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="diwali collage" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on October 15, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>Diwali is famous as the “Festival of Lights,” but calling it a single festival is a little like calling the English language “one word.” Across South Asia and the diaspora, the same season of lights is a constellation of rituals, myths, community habits, and sensory textures. From the oil-bathed dawns of Tamil households to Nepal’s affectionate <Link href="/festivals/kukur-tihar" className="text-accent">Kukur Tihar</Link> (festival of dogs), the heart of Diwali is recognition—light over darkness, order over chaos—but its expressions vary widely. For culturally curious readers and travelers, knowing these regional flavors turns a holiday into a cultural itinerary.</p>
                        
                        <h3>A Quick Map of Diwali Season in India</h3>
                        <p><strong>North India:</strong> Here, Diwali’s central story is usually Rama’s return to Ayodhya. Lakshmi puja (worship of the goddess of wealth) on the new-moon night is common. Families light lamps, exchange sweets, gamble lightly, and set off fireworks.</p>
                        <p><strong>South India:</strong> Many households centre on Naraka Chaturdashi (celebrating Krishna’s defeat of Narakasura) with pre-dawn oil baths (abhyanga snāna) and sweet feasts. Ritual priorities shift—less about Lakshmi in some regions, more about cleansing, seasonal rites, and community kitchens.</p>
                        <p><strong>Eastern India (Bengal):</strong> For Bengalis, Diwali night often becomes <Link href="/festivals/durga-puja" className="text-accent">Kali Puja</Link>, a fierce, ecstatic worship of the goddess Kali rather than the gentle Lakshmi imagery common elsewhere.</p>
                        
                        <blockquote className="my-8">
                           <p>The small differences mean a lot. A handful of everyday practices decisively shape the festival experience.</p>
                        </blockquote>

                        <h3>Global Diwali: A Celebration Across Continents</h3>
                        
                        <h4>Nepal (Tihar)</h4>
                        <div className="flex flex-col md:flex-row gap-6 my-8">
                            <div className="md:w-1/2">
                                <p>In Nepal, Diwali is known as Tihar. It's a unique five-day festival with distinct animal-focused days—Kaag (crows), <Link href="/festivals/kukur-tihar" className="text-accent">Kukur (dogs)</Link>, Gai/Lakshmi (cows and wealth), Govardhan/Mha Puja (self/household), and Bhai Tika (sibling blessings). Kukur Tihar is especially famous, where pet and street dogs alike are adorned with garlands, tika, and feasts.</p>
                            </div>
                            <div className="md:w-1/2">
                                <Image src="https://i.postimg.cc/nVTcpq9L/Diwali-celebrations-in-Nepal.webp" alt="Diwali in Nepal" width={400} height={250} className="rounded-lg shadow-lg w-full" data-ai-hint="dog worship"/>
                            </div>
                        </div>

                        <h4>Singapore & Malaysia</h4>
                        <p>In Tamil-origin communities, Diwali appears as Deepavali with spectacular public light-ups. Little India in Singapore becomes a vibrant hub with festive bazaars, exhibitions, and open-air concerts. Tekka Market is a popular spot for purchasing traditional attire and puja essentials.</p>

                        <h4>United Arab Emirates</h4>
                        <div className="flex flex-col md:flex-row gap-6 my-8">
                             <div className="md:w-1/2 md:order-2">
                                <p>Dubai hosts some of the most spectacular Diwali celebrations. The Burj Khalifa puts on a magnificent light and sound show, while destinations like Dubai Creek and The Pointe at Palm Jumeirah feature dazzling fireworks. For a traditional feel, Al Seef offers diya lighting ceremonies, henna counters, and Bollywood performances.</p>
                            </div>
                            <div className="md:w-1/2 md:order-1">
                                <Image src="https://i.postimg.cc/BvWJMgkm/Diwali-celebrations-in-UAE.webp" alt="Diwali in UAE" width={400} height={250} className="rounded-lg shadow-lg w-full" data-ai-hint="dubai diwali"/>
                            </div>
                        </div>

                        <h4>United Kingdom</h4>
                        <p>Despite the chilly weather, the Indian diaspora in the UK celebrates with immense enthusiasm. Leicester hosts one of the largest Diwali celebrations outside India, featuring a giant Ferris wheel called the 'Diwali Wheel of Light'. London's Trafalgar Square also hosts a grand fiesta with dance performances, cookery demonstrations, and cultural shows.</p>

                        <h4>USA</h4>
                        <div className="flex flex-col md:flex-row gap-6 my-8">
                            <div className="md:w-1/2">
                                <p>With a large Indian diaspora, Diwali is celebrated with zeal across the United States. New York City recently declared it a public school holiday. The annual fireworks at the Hudson River are a major attraction, and events in places like Times Square often feature famous performers. Temples organize prayers and communal feasts, while universities host cultural events.</p>
                            </div>
                            <div className="md:w-1/2">
                                <Image src="https://i.postimg.cc/Yq929jQz/Diwali-celebrations-in-USA.webp" alt="Diwali in USA" width={400} height={250} className="rounded-lg shadow-lg w-full" data-ai-hint="usa diwali"/>
                            </div>
                        </div>

                        <h3>Modern Pressures and Creative Adaptations</h3>
                        <p>Urban realities—air pollution, noise regulations, and public health—are reshaping Diwali. Many Indian cities have banned or heavily restricted fireworks, experimenting with laser and drone light-shows as low-emission alternatives. These shifts create friction between tradition and collective well-being, but they also open creative new spectacles.</p>

                        <h3>Conclusion: Pluralism as the Festival’s Deeper Gift</h3>
                        <p>Diwali season is a lesson in cultural pluralism: one season of rituals, refracted into many local logics. Whether you want the domestic intimacy of Lakshmi puja, the playful dog-adoration of Kukur Tihar, or the public spectacle of Singapore’s Deepavali light-up, the festival invites curiosity. The trick for modern celebrants is to keep the light—and lose the smoke: preserving meaning while adapting practice.</p>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
