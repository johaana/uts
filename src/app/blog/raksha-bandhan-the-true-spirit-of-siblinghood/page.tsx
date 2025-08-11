
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = {
    title: "More Than a Thread: The True Spirit of Raksha Bandhan",
    image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg",
    excerpt: "Explore the deep history and heartfelt traditions of Raksha Bandhan. Discover thoughtful gift ideas that go beyond the material to truly celebrate the unbreakable bond between siblings."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
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
        slug: "coconut-barfi",
        title: "Coconut Barfi Recipe",
        image: "https://i.postimg.cc/V5QmM9c2/Coconut-Burfi.jpg",
        type: "Recipe",
        link: "/recipes/coconut-barfi",
        hint: "coconut fudge"
    },
    {
        slug: "diwali",
        title: "Diwali",
        image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg",
        type: "Festival",
        link: "/festivals/diwali",
        hint: "diwali celebration"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src="https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg" alt="A sister tying a rakhi on her brother's wrist" layout="fill" objectFit="cover" data-ai-hint="rakhi thread" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on August 8, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>Every year, as the monsoon rains soften the earth, a festival of profound emotional depth arrives, weaving together threads of love, memory, and an unspoken promise. Raksha Bandhan, the "bond of protection," is a celebration of the unique, irreplaceable relationship between siblings. It's a day that transcends the simple tying of a thread; it’s a reaffirmation of a connection that has weathered childhood squabbles, shared secrets, and the test of time. It’s a day to honor the person who is both your first friend and your fiercest rival, your confidant and your constant.</p>

                        <h3>The Stories Behind the Sacred Thread</h3>
                        <p>The essence of Raksha Bandhan is captured in timeless legends that highlight its power. The most famous story comes from the epic Mahabharata, involving Lord Krishna and Draupadi. When Krishna cut his finger, Draupadi, without hesitation, tore a strip from her elegant saree and tied it around his wound. Touched by her pure, selfless affection, Krishna vowed to protect her always. He fulfilled this promise in her darkest hour, saving her from public humiliation in the Kaurava court. This tale beautifully illustrates that the Rakhi bond isn't limited by blood; it's forged in love and care.</p>
                        <p>Another powerful story from history is that of Rani Karnavati of Chittor and the Mughal Emperor Humayun. When her kingdom was threatened, the widowed queen sent a rakhi to Humayun, seeking his protection. The Emperor, honoring the sacred call of the thread, abandoned his own military campaign to defend her kingdom. These stories elevate the Rakhi from a mere ritual to a potent symbol of unity, loyalty, and protection.</p>

                        <h3>Beyond the Gift Box: Thoughtful Rakhi Gifts Your Sister Will Actually Love</h3>
                        <p>While the exchange of gifts is a joyful part of the day, the most cherished presents often aren't the most expensive ones. This year, think beyond the conventional. What does your sister truly value?</p>
                        
                        <blockquote>
                            <p>The best gifts are often not things, but time, attention, and a genuine understanding of what makes someone happy.</p>
                        </blockquote>

                        <ul>
                            <li><strong>The Gift of Time:</strong> In our busy lives, dedicated time is the ultimate luxury. Plan a "sibling date." Recreate a favorite childhood meal, go for a long drive with a playlist of your old favorite songs, or have a movie marathon of films you both loved growing up. It’s about creating new memories while honoring the old ones.</li>
                            <li><strong>The Gift of a Helping Hand:</strong> Does she need help with something she finds tedious? Maybe it’s assembling that new piece of furniture, offering some much-needed tech support for her laptop, or simply doing the grocery run for her. Offering your skills and effort is a practical and deeply caring gesture.</li>
                            <li><strong>The Gift of Support:</strong> Is she passionate about a cause, a hobby, or learning a new skill? Gift her a subscription to a masterclass, buy her that set of paintbrushes she’s been eyeing, or make a donation in her name to a charity she supports. Championing her dreams is one of the greatest gifts you can give.</li>
                        </ul>

                        <h3>Simple & Sweet Ideas (When a Box is Still a Must!)</h3>
                        <p>If you do want to give a physical gift, make it personal.</p>
                        <ul>
                            <li><strong>A Curated Box of Joy:</strong> Fill a simple box with her favorite things—the imported chocolate she loves, a comforting scented candle, a book by her favorite author, a nourishing face mask. It shows you pay attention to the little things.</li>
                            <li><strong>Personalized Jewelry:</strong> A delicate bracelet with her initial or a charm that represents an inside joke is far more meaningful than something generic.</li>
                            <li><strong>A Plant or a Sapling:</strong> Gift her a beautiful indoor plant or a sapling that you can plant together. It's a living, growing symbol of your enduring bond.</li>
                        </ul>

                        <p>Ultimately, Raksha Bandhan is a celebration of a promise—a promise to look out for each other, to be a pillar of support, and to be a keeper of each other's stories. The rakhi tied on the wrist is just the beautiful, visible reminder of the invisible thread that connects your hearts, forever.</p>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
