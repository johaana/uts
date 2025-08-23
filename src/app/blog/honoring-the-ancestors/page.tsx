
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Conversations with the Departed: How the World Honors Its Ancestors", 
    image: "https://i.postimg.cc/05F4GWkS/Dia-de-los-Muertos-Day-of-the-Dead-3.avif",
    excerpt: "From Mexico's vibrant Día de los Muertos to Japan's serene Obon festival, discover the beautiful and profound ways different cultures maintain a living connection with those who have passed on."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date().toISOString(),
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
        slug: "dia-de-los-muertos",
        title: "Día de los Muertos: A Joyful Celebration of Life",
        image: "https://i.postimg.cc/05F4GWkS/Dia-de-los-Muertos-Day-of-the-Dead-3.avif",
        type: "Festival",
        link: "/festivals/dia-de-los-muertos",
        hint: "day of the dead"
    },
    {
        slug: "obon-festival",
        title: "Obon Festival: Guiding the Ancestors Home",
        image: "https://i.postimg.cc/jdW1Dkgy/obon1.jpg",
        type: "Festival",
        link: "/festivals/obon-festival",
        hint: "japanese lanterns"
    },
    {
        slug: "famadihana",
        title: "Famadihana: The Turning of the Bones",
        image: "https://i.postimg.cc/jq39drXs/Famadihana.jpg",
        type: "Festival",
        link: "/festivals/famadihana",
        hint: "turning of bones"
    }
];

export default function HonoringAncestorsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="day of the dead" className="rounded-lg"/>
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
                             <p className="text-sm text-muted-foreground">By Team Utsavs on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>Death is a universal human experience, but how we remember and honor those who have passed is incredibly diverse. For many cultures, the line between the living and the dead is not a final, impenetrable wall, but a permeable veil. Festivals dedicated to the dead are not always somber occasions; often, they are joyous, colorful, and life-affirming celebrations that keep the memory and spirit of ancestors alive. Let's explore some of the most beautiful and profound traditions of ancestor worship from around the globe.</p>

                        <h3><Link href="/festivals/dia-de-los-muertos" className="text-accent hover:underline">Día de los Muertos (Mexico):</Link> A Vibrant Reunion</h3>
                        <p>Perhaps the most famous festival of the dead, Día de los Muertos is a two-day explosion of color and joy. It is believed that on these days, the souls of the deceased return to earth to be with their families. Far from being feared, these spirits are welcomed as honored guests. Families build beautiful altars, or 'ofrendas', laden with the favorite foods, drinks, and photos of their departed loved ones. Graves are cleaned and decorated with bright marigold flowers, and families gather in cemeteries to picnic, play music, and share stories, turning the graveyard into a place of lively reunion.</p>

                        <div className="my-8 flex justify-center">
                            <Image src="https://i.postimg.cc/jdW1Dkgy/obon1.jpg" alt="Obon Festival" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="floating lanterns"/>
                        </div>

                        <h3><Link href="/festivals/obon-festival" className="text-accent hover:underline">Obon Festival (Japan):</Link> Guiding the Spirits Home</h3>
                        <p>Obon is a serene and beautiful Japanese Buddhist festival to honor the spirits of one's ancestors. It is believed that during Obon, the spirits of ancestors return to this world to visit their relatives. The celebration is a quiet and respectful affair. Families clean their homes and the graves of their ancestors, and offer food at home altars. The most iconic part of Obon is the 'Toro Nagashi', or the floating of lanterns. On the last evening of the festival, paper lanterns are illuminated and floated down rivers or into the sea. This breathtaking spectacle symbolizes the guiding of the ancestral spirits back to the spirit world, a gentle and poignant farewell.</p>
                        
                        <div className="my-8 flex justify-center">
                             <Image src="https://i.postimg.cc/jq39drXs/Famadihana.jpg" alt="Famadihana" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="turning of bones"/>
                        </div>

                        <h3><Link href="/festivals/famadihana" className="text-accent hover:underline">Famadihana (Madagascar):</Link> The Turning of the Bones</h3>
                        <p>One of the most unique and intimate ancestor rituals is the 'Famadihana' of Madagascar. Every few years, families hold a grand celebration where they exhume the remains of their ancestors from the family crypt. They carefully re-wrap the bodies in fresh, fine silk shrouds and then, in an act of joyous communion, they dance with the bodies to live music. It's a time for the living to update the deceased on family news and to ask for their blessings. For the Malagasy people, Famadihana is a powerful act of love and remembrance, a way to maintain a physical and spiritual connection with those who came before them.</p>

                        <blockquote>
                            <p>These festivals teach us a profound lesson: that memory is a form of love, and that as long as we tell their stories, our loved ones are never truly gone.</p>
                        </blockquote>
                        
                        <p>While the rituals may differ, the underlying sentiment is universal. These celebrations are a powerful testament to the enduring bond of family, the importance of lineage, and the human need to believe that our connections with those we love can transcend even death itself.</p>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
