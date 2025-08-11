
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "The Sacred Third Gender: The Divine Role of Kinnars in Indian Festivities", 
    image: "https://i.postimg.cc/0NVkrRmQ/kinnar-durga-puja1.jpg",
    excerpt: "A deep dive into the paradoxical role of the Kinnar (Hijra) community in Indian culture, exploring their mythological origins and sacred, auspicious presence in rituals like weddings and childbirth."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-09-18').toISOString(),
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
        slug: "raksha-bandhan",
        title: "Raksha Bandhan Guide",
        image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg",
        type: "Festival",
        link: "/festivals/raksha-bandhan",
        hint: "rakhi thread"
    },
    {
        slug: "diwali",
        title: "Diwali",
        image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg",
        type: "Festival",
        link: "/festivals/diwali",
        hint: "diwali celebration"
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

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="kinnar community" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on September 18, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>In the vibrant, often chaotic, tapestry of Indian festivities, there exists a community that occupies a unique and paradoxical space: the Kinnars, or Hijras. Often marginalized in modern society, this ancient third-gender community holds a surprisingly sacred and respected role within the world of traditional rituals. Their sudden appearance at a wedding or a childbirth ceremony—with their distinctive clap, singing, and dancing—is not seen as an intrusion but as an auspicious omen, a visit from beings believed to hold the power to bless and curse.</p>

                        <h3>Mythological Roots: From the Epics to the Divine</h3>
                        <p>The respected status of the Kinnar community is not a modern invention; it is deeply rooted in Hindu mythology. In the epic Ramayana, when Lord Rama was exiled from Ayodhya, the entire kingdom followed him to the forest. He asked all the "men and women" to return to the city. The Kinnars, not identifying as either, remained at the edge of the forest for the full 14 years of his exile. Impressed by their unwavering devotion, Rama granted them the divine power to bestow blessings on people during auspicious occasions.</p>
                        <p>Furthermore, they are deeply associated with Lord Shiva in his Ardhanarishvara form—a composite of half-man and half-woman, symbolizing the ultimate union of masculine and feminine energies in the universe. This divine androgyny grants the Kinnar community a spiritual legitimacy that sets them apart. They are seen as vessels of this combined divine energy.</p>

                        <blockquote>
                            <p>The presence of a Kinnar at a celebration is a living link to mythology, a reminder that the divine often exists beyond our simple, binary definitions.</p>
                        </blockquote>

                        <h3>The Role in Rituals: Bestowers of Blessings</h3>
                        <p>The primary role of Kinnars in modern festivities is that of blessing. They are most prominently seen at two key life events:</p>
                        <ul>
                            <li><strong>Childbirth:</strong> When a child is born, particularly a son, Kinnars will often visit the family home to sing, dance, and bless the newborn. They check the child's gender and then bestow blessings for a long, healthy, and fertile life. Families offer them gifts and money ('badhai') in exchange for these powerful blessings. It is widely believed that their blessings are potent and that turning them away empty-handed can attract misfortune.</li>
                            <li><strong>Weddings:</strong> Similarly, their presence at weddings is considered highly auspicious. They bless the newly married couple for fertility and a prosperous life together. Their songs and dances are a vital part of the celebratory atmosphere, a ritual that is seen as incomplete without their participation in many communities.</li>
                        </ul>
                        
                        <h3>A Paradoxical Existence</h3>
                        <p>The unique position of the Kinnar community is a study in contrasts. While they are revered and considered auspicious in these specific ritualistic contexts, they often face significant social exclusion, discrimination, and economic hardship in their daily lives. They live on the fringes of society, yet are invited into the most intimate and sacred moments of family life.</p>
                        <p>Understanding their role is crucial to understanding the complex, multi-layered nature of Indian culture. It is a culture that has, for millennia, made space for concepts of gender and identity that are far more fluid than modern Western norms. The sacred space occupied by the Kinnars during festivals is a powerful testament to this ancient inclusivity, a living tradition that continues to challenge and expand our understanding of the divine.</p>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
