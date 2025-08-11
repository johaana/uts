
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = {
    title: "The 9 Avatars of Durga: A Navratri Special",
    image: "https://i.postimg.cc/GhWjwdnN/Navratri.jpg",
    excerpt: "Explore the nine powerful forms of Goddess Durga worshipped during the nine nights of Navratri. Each avatar has a unique story and significance, representing a different aspect of the divine feminine."
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
        slug: "navratri",
        title: "Navratri Festival Guide",
        image: "https://i.postimg.cc/J4JFtVYT/navratri1.jpg",
        type: "Festival",
        link: "/festivals/navratri",
        hint: "garba dance"
    },
    {
        slug: "dussehra",
        title: "Dussehra",
        image: "https://i.postimg.cc/wMVZW9fk/dussehra.jpg",
        type: "Festival",
        link: "/festivals/dussehra",
        hint: "dussehra celebration"
    },
    {
        slug: "sabudana-khichdi",
        title: "Sabudana Khichdi Recipe",
        image: "https://i.postimg.cc/3wRdZZ1y/sabudana-khichdi.jpg",
        type: "Recipe",
        link: "/recipes/sabudana-khichdi",
        hint: "tapioca pearl dish"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="garba dance" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on July 01, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>Navratri is a nine-night spiritual odyssey celebrating the divine feminine. Each night is dedicated to one of the nine powerful forms of Goddess Durga, known as the Navadurgas. These avatars are not just different idols; they represent the various stages of Parvati's life and her journey to becoming the ultimate source of power, or 'Shakti'. Worshipping them in sequence is a journey of spiritual evolution, from inner strength to ultimate liberation. Let's delve into the story and symbolism of each divine form.</p>

                        <h3>Day 1: Shailaputri - The Daughter of the Mountains</h3>
                        <p>The first night honours Shailaputri, the daughter of the mountain king, Himavan. She represents nature, purity, and unwavering strength. As the first stage of Durga, she embodies the power of intention and the beginning of a spiritual journey. Devotees pray to her for fortitude and stability in their lives.</p>

                        <h3>Day 2: Brahmacharini - The Ascetic</h3>
                        <p>The second form is Brahmacharini, representing Parvati's phase of intense penance to win Lord Shiva as her husband. She symbolizes devotion, determination, and the pursuit of knowledge. Worshipping her blesses devotees with the strength to overcome any obstacle through sheer willpower and focus.</p>

                        <h3>Day 3: Chandraghanta - The Bearer of the Half-Moon Bell</h3>
                        <p>On the third day, we worship Chandraghanta. After her marriage to Shiva, Parvati adorned her forehead with a bell-shaped half-moon, giving her this name. She is a symbol of beauty, bravery, and alertness. Her third eye is always open, ready to fight against evil, and the sound of her bell is said to drive away all negativity.</p>

                        <h3>Day 4: Kushmanda - The Cosmic Creator</h3>
                        <p>Goddess Kushmanda is revered on the fourth night. It is believed that with her divine smile, she created the entire universe, the 'cosmic egg' (Brahmanda), when there was nothing but darkness. She resides in the core of the sun, providing energy to the cosmos. Her worship is believed to bestow health, wealth, and strength.</p>

                        <h3>Day 5: Skandamata - The Mother of Skanda</h3>
                        <p>The fifth form is Skandamata, the mother of the war god, Kartikeya (or Skanda). She represents the pure, unconditional love of a mother. By worshipping her, devotees also receive the blessings of her son, Lord Skanda. She is a symbol of compassion and the power of motherhood.</p>

                        <h3>Day 6: Katyayani - The Warrior Goddess</h3>
                        <p>On the sixth day, we worship Katyayani, the fierce form of Durga born at the hermitage of sage Katyayana to destroy the demon Mahishasura. She embodies righteous anger against injustice and is a symbol of immense power. Young women often pray to her for a good husband and a happy married life.</p>

                        <h3>Day 7: Kalaratri - The Dark Night</h3>
                        <p>Kalaratri is the most ferocious form of the Goddess, worshipped on the seventh night. With her dark complexion and fearsome appearance, she is the destroyer of all darkness, demons, and negative energies. While she appears terrifying, she is also the 'Shubhankari' or auspicious one, protecting her devotees from all harm and fear.</p>

                        <h3>Day 8: Mahagauri - The Great White Goddess</h3>
                        <p>The eighth form is Mahagauri, representing absolute purity. After years of penance, Parvati's body had turned black. Lord Shiva cleansed her with the holy water of the Ganga, restoring her radiant beauty. Her worship is believed to cleanse the soul, forgive sins, and fulfill all desires.</p>

                        <h3>Day 9: Siddhidatri - The Bestower of Supernatural Powers</h3>
                        <p>The final night is dedicated to Siddhidatri, the bestower of all 'siddhis' or supernatural powers. She is the culmination of the Navadurga journey, representing perfection and spiritual liberation (moksha). Worshipping her is believed to grant wisdom, fulfillment, and the attainment of all spiritual goals.</p>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
