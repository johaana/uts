
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Divine Offerings: Famous Prasads of India and Their Stories", 
    image: "https://i.postimg.cc/GmnJ5kP3/nilendrajyoti-halder-v32-Ac-NJ4-Q-Q-unsplash.jpg",
    excerpt: "Journey through the divine flavors of India's most famous temple offerings. Discover the legends and traditions behind iconic prasads like Tirupati Laddu, Jagannath Mahaprasad, and more."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-08-20').toISOString(),
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
        slug: "khechudi",
        title: "Khechudi",
        image: "https://i.postimg.cc/wvFzzvZZ/khechudi.jpg",
        type: "Recipe",
        link: "/recipes/khechudi",
        hint: "rice lentils"
    },
    {
        slug: "ladoo",
        title: "Besan Ladoo Recipe",
        image: "https://i.postimg.cc/9MkWX5gm/Besan-Laddoo.webp",
        type: "Recipe",
        link: "/recipes/ladoo",
        hint: "gram flour ladoo"
    },
    {
        slug: "rath-yatra",
        title: "Rath Yatra",
        image: "https://i.postimg.cc/kXC7f44W/rath-yatra.jpg",
        type: "Festival",
        link: "/festivals/rath-yatra",
        hint: "chariot festival"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="temple food" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on August 20, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>In India, food is more than just sustenance; it is a sacred offering, a symbol of devotion, and a tangible form of divine blessing. 'Prasad' (or 'prasadam') is the food that is first offered to a deity and then distributed among devotees. It is believed to be imbued with the deity's divine grace, and consuming it is an act of spiritual communion. Many temples across India are famous not just for their deities but for their unique and delicious prasads, each with a fascinating story. Let's explore some of the most iconic temple foods of India.</p>

                        <h3>1. Tirupati Laddu, Andhra Pradesh</h3>
                        <p>Arguably the most famous prasad in the world, the Tirupati Laddu from the Sri Venkateswara Temple in Tirumala has a history stretching back over 300 years. This large, fragrant laddu, made from gram flour, sugar, ghee, cardamom, cashews, and raisins, has a unique taste that devotees cherish. Its distribution as a prasad began around 1715. Legend has it that the tradition was started to provide a source of energy for pilgrims who traveled long distances on foot to the temple.</p>
                        <p><strong>The Unique Tradition:</strong> The recipe is a closely guarded secret, prepared in a special temple kitchen called 'potu' by designated priests known as 'pachakas'. The scale of production is monumental, with hundreds of thousands of laddus made daily. The Tirupati Laddu has a Geographical Indication (GI) tag, meaning no one outside the temple can make and sell it under the same name, preserving its sanctity and authenticity.</p>
                         <p><strong>Taste & Recipe:</strong> The laddu is known for its rich, melt-in-the-mouth texture and the distinct flavor of pure ghee and cardamom. While the exact temple recipe is secret, a home version involves making a boondi batter with gram flour, frying it, soaking it in sugar syrup, and then mixing it with nuts, raisins, and cardamom before shaping it into laddus.</p>


                        <h3>2. Mahaprasad of Jagannath Temple, Odisha</h3>
                        <p>The Mahaprasad of the Jagannath Temple in Puri is a culinary marvel and an experience in itself. It consists of 56 different food items ('Chappan Bhog') that are cooked in the world's largest kitchen using only earthen pots stacked one on top of the other, with fire from a sacred hearth. It is believed that Goddess Lakshmi herself supervises the cooking, and if she is displeased with the preparation, a shadow of a dog will appear, and the entire batch has to be discarded and remade.</p>
                        <p><strong>The Unique Tradition:</strong> The cooking process is unique: seven pots are placed one on top of another, and miraculously, the food in the top pot gets cooked first. The food is cooked without onion or garlic and follows ancient sattvic principles. The Mahaprasad is first offered to Lord Jagannath and then to Goddess Bimala, after which it becomes 'Mahaprasad'. It is then shared by thousands of devotees in the temple complex, signifying unity and equality, as people of all castes and backgrounds eat together.</p>
                        <p><strong>Taste & Recipe:</strong> The Mahaprasad includes a vast array of dishes, from rice and dalma to khechudi, various vegetable curries, and sweets. One of the most famous items is the 'Khechudi', a simple yet flavorful mix of rice and lentils cooked with ginger and ghee. It's a wholesome and spiritually fulfilling dish that you can try to make at home.</p>


                        <h3>3. Karah Prasad of the Golden Temple, Punjab</h3>
                        <p>Simple, humble, and profoundly delicious, the Karah Prasad served at the Golden Temple in Amritsar is a symbol of equality and selfless service. This warm, rich halwa is made with just three main ingredients in equal proportions: whole wheat flour (atta), pure ghee, and sugar. This 1:1:1 ratio is strictly maintained to signify the equality of all people.</p>
                        <p><strong>The Unique Tradition:</strong> It is prepared with continuous chanting of Gurbani (Sikh hymns), which is believed to infuse the prasad with spiritual vibrations. The prasad is served to every single visitor, regardless of their faith or background, embodying the core Sikh principles of selfless service ('seva') and the oneness of humanity. It is served in cupped hands as a gesture of humility and respect.</p>
                        <p><strong>Taste & Recipe:</strong> The prasad is incredibly rich, with a smooth, grainy texture and a deep, nutty flavor from the well-roasted wheat flour. To make it, you first prepare a sugar syrup. Then, you roast the wheat flour in an equal amount of ghee until it's fragrant and golden brown. Finally, the hot sugar syrup is carefully added to the roasted flour and cooked until the halwa thickens and ghee separates at the sides.</p>
                        
                        <h3>4. Peda of Banke Bihari Temple, Vrindavan</h3>
                        <p>The holy town of Vrindavan, associated with Lord Krishna's childhood, is famous for its milk-based sweets, and the Peda from the Banke Bihari Temple is a special prasad that devotees flock to taste. Made from khoya (milk solids) and sugar, these small, brownish discs have a distinct, caramelized flavor.</p>
                        <p><strong>The Unique Tradition:</strong> The tradition is rooted in Krishna's legendary love for milk and butter. The pedas are a sweet offering reminiscent of his divine leelas (pastimes) in the Braj region. The unique brown color comes from roasting the khoya for a long time on a low flame, a process that requires great skill and patience.</p>
                        <p><strong>Taste & Recipe:</strong> The taste is rich, milky, and mildly caramelized. To make it at home, you need to slowly roast khoya in a heavy-bottomed pan with ghee until it turns a light brown color. After it cools, powdered sugar and cardamom are added, and the mixture is shaped into small, flat pedas.</p>


                        <h3>5. Panchamirtham of Palani Murugan Temple, Tamil Nadu</h3>
                        <p>This unique prasad from the Palani Dhandayuthapani Swamy Temple in Tamil Nadu is a type of 'divine jam' offered to Lord Murugan. 'Panchamirtham' means 'a mixture of five nectars'. It is made from five main ingredients: bananas, country sugar, ghee, honey, and cardamom. Dates and sugar candies are also added.</p>
                        <p><strong>The Unique Tradition:</strong> The mixture is prepared without adding any water or preservatives, and remarkably, it does not spoil for months due to the natural preservative qualities of its ingredients. The bananas used are a special local variety (Virupakshi), which gives the panchamirtham its unique taste and texture. Like the Tirupati Laddu, the Palani Panchamirtham also has a GI tag.</p>
                        <p><strong>Taste & Recipe:</strong> It has a unique, sweet, and tangy taste. To make it, ripe bananas are mashed and mixed with powdered jaggery or country sugar, honey, and ghee. Cardamom powder is added for fragrance, and small pieces of dates and edible camphor are added for extra flavor and texture.</p>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
