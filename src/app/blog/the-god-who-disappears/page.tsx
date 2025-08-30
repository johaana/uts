
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "The God Who Disappears: The Mystery of the Kerala Festival Where the Main Idol is Hidden", 
    image: "https://i.postimg.cc/zGMjGxrS/attuvela-mahotsavam.webp",
    excerpt: "At most temple festivals, the main idol leads the procession. But at this unique water carnival in Kerala, the god’s idol is nowhere to be seen. This is the story of a festival that isn't about worship, but about a brother welcoming his sister home."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
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
        slug: "thrissur-pooram",
        title: "Thrissur Pooram",
        image: "https://i.postimg.cc/j28kQ9WT/thrissur-puram-festival-2.jpg",
        type: "Blog",
        link: "/blog/thrissur-pooram-keralas-grandest-festival",
        hint: "kerala temple festival"
    },
    {
        slug: "onam",
        title: "Onam Festival Guide",
        image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
        type: "Festival",
        link: "/festivals/onam",
        hint: "onam feast"
    },
    {
        slug: "raksha-bandhan",
        title: "Raksha Bandhan",
        image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg",
        type: "Festival",
        link: "/festivals/raksha-bandhan",
        hint: "rakhi thread"
    }
];

export default function TheGodWhoDisappearsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="kerala water festival" className="rounded-lg"/>
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
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>In the grand theater of Hindu festivals, the procession of the temple deity is the main event. Magnificent idols, adorned in silk and jewels, are paraded on colossal chariots or majestic elephants for millions to see. The very purpose is 'darshan'—the sacred act of beholding the divine. But deep in the tranquil backwaters of Kerala, there is a temple festival where the opposite happens. It is a grand procession where the main deity, Lord Shiva, is intentionally kept hidden, his idol never leaving the sanctum. This is the beautiful and heartwarming mystery of the Attuvela Mahotsavam.</p>
                        
                        <p>Held at the Elankavu Sree Bhagavathy Temple in Vadayar, this unique water carnival takes place over two days in the month of Meenam (March/April). The highlight is a dazzling water procession where a massive, brilliantly illuminated replica of the temple itself, accompanied by smaller, decorated canoes, floats down the river. The spectacle is breathtaking, but it begs the question: if this is a festival for the temple's main god, why is he the one guest who never shows up?</p>

                        <blockquote>
                            <p>The answer reveals that this festival is not about a god displaying his power to his devotees, but about a brother preparing to welcome his sister home.</p>
                        </blockquote>

                        <h3>A Divine Welcome</h3>
                        <p>The story behind Attuvela Mahotsavam is a beautiful tale of sibling love among the gods. The procession is a ceremonial welcome for the Goddess of Kodungalloor, who is believed to be the sister of the Vadayar deity. Every year, she makes the journey to visit her brother. The magnificent floating temple replica is the grand welcome party he throws for her arrival. The procession travels to the Muvattupuzha river to ceremonially receive the goddess and escort her back to the temple.</p>
                        
                        <p>And why does Lord Shiva remain hidden? In an act of profound divine hospitality, he stays within his sanctum to personally receive his sister when she arrives. He forgoes his own procession to be the perfect host. This makes the Attuvela Mahotsavam one of the most unique festivals in India. It is not a display of divine power, but a celebration of a much more relatable, human emotion: the simple, profound joy of a family reunion. It’s a reminder that even among the gods, the bond between a brother and sister is a sacred event worth celebrating.</p>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
