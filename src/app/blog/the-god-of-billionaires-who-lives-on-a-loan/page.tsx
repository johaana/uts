
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "The God of Billionaires Who Lives on a Loan: Why Millions Offer Their Hair at Tirupati", 
    image: "https://i.postimg.cc/pT3kck0L/tirumala-tirupati-balaji-original.jpg",
    excerpt: "The Tirupati Temple is one of the richest in the world, yet its deity is eternally in debt. This is the story of a divine loan, a celestial wedding, and why millions of devotees offer their hair as repayment."
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
        slug: "famous-prasads-and-their-stories",
        title: "The Stories Behind India's Most Famous Temple Foods",
        image: "https://i.postimg.cc/K858TgLJ/tirupati-laddu.jpg",
        type: "Blog",
        link: "/blog/famous-prasads-and-their-stories",
        hint: "temple food"
    },
    {
        slug: "akshaya-tritiya",
        title: "Akshaya Tritiya",
        image: "https://i.postimg.cc/Rh92QWRF/dhanteras1.webp",
        type: "Festival",
        link: "/festivals/akshaya-tritiya",
        hint: "gold coins"
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

export default function TheGodInDebtPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="venkateswara idol" className="rounded-lg"/>
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

                        <p>The Sri Venkateswara Temple in Tirumala, Andhra Pradesh, is a place of staggering contradictions. It is one of the richest religious institutions on Earth, with daily donations running into crores of rupees and vaults filled with gold. Yet its presiding deity, Lord Venkateswara (a form of Vishnu), is believed to be eternally and unimaginably in debt. This divine paradox is the key to understanding one of the most visible and unique acts of faith in the world: the ritual offering of hair, or 'tonsuring', by millions of devotees who throng the temple every year.</p>
                        
                        <p>The story isn't just about faith; it's a tale of celestial romance, divine finance, and a cosmic loan that can never be fully repaid. To understand why so many offer their hair, one must first understand the story of their god's magnificent, and astronomically expensive, wedding.</p>

                        <h3>The Celestial Wedding and the Cosmic Loan</h3>
                        <p>According to legend, Lord Venkateswara fell in love with the beautiful princess Padmavati. To win her hand, he had to gain the consent of her father, the king. The king, however, demanded a colossal bridal price, a dowry fit for a celestial wedding of unprecedented grandeur. Venkateswara, having left his divine abode, did not possess the required wealth on Earth. Determined to marry his love, he sought a loan from Kubera, the treasurer of the gods and the deity of wealth.</p>
                        
                        <p>Kubera granted the loan, but on one condition: it had to be repaid with interest, and the repayment would last until the end of the current cosmic age, the Kali Yuga. Lord Venkateswara agreed, and the wedding was celebrated with unimaginable splendor. But it left the Lord of the Seven Hills in perpetual debt. This is the heart of the belief at Tirupati: the Lord himself is indebted, and his devotees have a personal role in helping him manage this cosmic liability.</p>

                        <div className="my-8 flex justify-center">
                            <Image src="https://i.postimg.cc/pT3kck0L/tirumala-tirupati-balaji-original.jpg" width={600} height={400} alt="Lord Venkateswara Idol" className="rounded-lg shadow-lg" data-ai-hint="venkateswara idol"/>
                        </div>
                        
                        <h3>The Offering of Hair: A Sacrifice of Ego</h3>
                        <p>This is where the ritual of hair offering comes in. In Hindu philosophy, hair is often seen as a symbol of physical beauty, vanity, and the ego ('ahamkara'). By shaving their heads and offering their hair to the temple, devotees are performing a powerful act of surrender. They are symbolically shedding their ego, their pride, and their worldly attachments at the feet of the Lord. It is an act of ultimate humility, a declaration that their devotion is greater than their vanity.</p>
                        
                        <p>But there's another layer to it. It is believed that Goddess Lakshmi, Vishnu's consort, considers the hair of devotees as a form of wealth. The temple sells the offered hair to international markets, where it is used for wigs and extensions, generating enormous revenue. Devotees believe that this money goes directly towards repaying Lord Venkateswara's loan to Kubera. Therefore, their sacrifice of ego is also a literal, tangible contribution to their god's divine financial obligation. This unique belief system creates an incredibly personal and participatory form of devotion. The devotee is not just a supplicant asking for favors; they are an active participant in their god's own cosmic drama.</p>

                        <blockquote>
                            <p>Every strand of hair offered at Tirupati is more than just a ritual; it is a transaction of faith—a surrendering of personal vanity to help a divine billionaire pay off an eternal loan.</p>
                        </blockquote>

                        <p>So, the next time you see a pilgrim with a shaved head returning from Tirupati, you see not just a person who has completed a ritual, but someone who has left their ego at the temple gates and, in their own small way, contributed a payment toward the most famous loan in the cosmos.</p>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
