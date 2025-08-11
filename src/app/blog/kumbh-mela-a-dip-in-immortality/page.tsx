
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Kumbh Mela: A Spiritual Gathering of Millions", 
    image: "https://i.postimg.cc/ncg3FqB3/kumbh-mela-2.jpg",
    excerpt: "Understand the significance of the Kumbh Mela, the largest peaceful gathering in the world and a cornerstone of Hindu faith."
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
        slug: "maha-shivaratri",
        title: "Maha Shivaratri",
        image: "https://i.postimg.cc/52NbWR80/mahashivratri.jpg",
        type: "Festival",
        link: "/festivals/maha-shivaratri",
        hint: "shiva statue"
    },
    {
        slug: "ganga-sagar-mela",
        title: "Makar Sankranti",
        image: "https://i.postimg.cc/gJrdvSxD/makar-sankranti.jpg",
        type: "Festival",
        link: "/festivals/makar-sankranti",
        hint: "kites festival"
    },
    {
        slug: "ram-navami",
        title: "Ram Navami",
        image: "https://i.postimg.cc/Vvqmzy7S/ram-navami.webp",
        type: "Festival",
        link: "/festivals/ram-navami",
        hint: "lord rama"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt="Kumbh Mela" layout="fill" objectFit="cover" data-ai-hint="kumbh mela pilgrimage" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on May 28, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <h2>The Largest Peaceful Gathering on Earth</h2>
                        <p>The Kumbh Mela is not just a festival; it is the largest peaceful congregation of humanity on the planet, a spiritual spectacle that unfolds on the banks of India's sacred rivers. Recognized by UNESCO as an Intangible Cultural Heritage of Humanity, it is a pilgrimage of immense faith, where millions of devotees gather to bathe in the holy waters, an act believed to cleanse them of all sins and free them from the cycle of rebirth.</p>

                        <h2>The Legend of the Nectar of Immortality</h2>
                        <p>The origin of the Kumbh Mela is rooted in Hindu mythology. It is believed that during a cosmic battle between the gods (Devas) and demons (Asuras) over a pot (Kumbh) of nectar of immortality, a few drops of the precious liquid fell to Earth at four specific locations: Prayagraj (Allahabad), Haridwar, Ujjain, and Nashik. The Mela is held rotationally at these four sites, with the Maha Kumbh Mela occurring every 12 years.</p>
                        
                        <h3>Key Aspects of the Kumbh Mela:</h3>
                        <ul>
                            <li><strong>The Royal Bath (Shahi Snan):</strong> The most auspicious event of the Mela is the 'Shahi Snan', where various orders of sadhus (holy men) and ascetics lead the bathing ritual. Witnessing this procession of Naga sadhus is a unique and powerful experience.</li>
                            <li><strong>Spiritual Discourses:</strong> The Mela is a hub of spiritual learning, with countless gurus, saints, and yogis offering discourses (pravachans) and teachings.</li>
                            <li><strong>A City of Tents:</strong> A massive temporary city of tents springs up on the riverbanks to accommodate the millions of pilgrims, creating a vibrant, self-sufficient metropolis of faith.</li>
                            <li><strong>Cultural Immersion:</strong> For any traveler seeking to understand the depths of Hindu faith and spirituality, the Kumbh Mela is an unparalleled opportunity. It is an intense, overwhelming, and profoundly moving experience.</li>
                        </ul>

                        <p>Attending the Kumbh Mela is to witness a tradition that has continued unbroken for centuries, a powerful testament to the enduring power of faith in India.</p>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
