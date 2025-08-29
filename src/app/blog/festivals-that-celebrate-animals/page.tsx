
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "A Guide to Animal Festivals: From Sacred Elephants to Worshipped Dogs", 
    image: "https://i.postimg.cc/yYMqHNjd/animal-fest-blog.png",
    excerpt: "From Nepal’s Kukur Tihar to Thailand’s Monkey Buffet, explore how festivals honour animals, the myths behind them, and contemporary welfare and conservation issues."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-10-12').toISOString(),
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
        slug: "kukur-tihar",
        title: "He Refused to Enter Heaven Without His Dog. How That Single Act of Loyalty Created a National Holiday.",
        image: "https://i.postimg.cc/RCcT1Twd/kukur-tihar1.avif",
        type: "Festival",
        link: "/festivals/kukur-tihar",
        hint: "dog worship"
    },
    {
        slug: "pongal",
        title: "Pongal",
        image: "https://i.postimg.cc/bvmpScwr/pongal.jpg",
        type: "Festival",
        link: "/festivals/pongal",
        hint: "pongal dish"
    },
    {
        slug: "nag-panchami",
        title: "Nag Panchami",
        image: "https://i.postimg.cc/SRFm0QGF/nag-panchami.webp",
        type: "Festival",
        link: "/festivals/nag-panchami",
        hint: "snake worship"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="animal worship" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on October 12, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>Across cultures, animals appear in festivals as guardians, ancestors, workforce partners, and cosmological symbols. These rituals are rarely mere symbolism; they encode reciprocal relationships between humans and nonhumans—forms of gratitude, protection, and ecological memory. This post surveys notable animal-centered festivals, explores their mythic backgrounds, and examines modern ethical tensions and conservation opportunities.</p>

                        <h3><Link href="/festivals/kukur-tihar" className="text-accent">Kukur Tihar (Nepal)</Link> — Dogs Garlanded and Honoured</h3>
                        <p>On the second day of Nepal’s five-day Tihar festival, dogs—both pet and stray—are decorated with marigold garlands, red tika marks, and offered food. The ritual acknowledges dogs’ loyalty and assigns them a sacred role connected with Yama, the Hindu god of death, for whom dogs are emissaries. Kukur Tihar blends civic compassion (street dogs are fed and cared for) with devotional ritual.</p>

                        <h3><Link href="/festivals/pongal" className="text-accent">Mattu Pongal (Tamil Nadu, India)</Link> — Cows and the Agrarian Ethic</h3>
                        <p>Mattu Pongal, the third day of the four-day harvest festival Pongal, honors cattle. Farmers bathe, decorate, and feed their cows and bulls—often including a ceremonial aarti and offering of sakkarai pongal (a sweet rice dish). This is a ritualized recognition of animals’ central role in agrarian production.</p>

                        <h3><Link href="/festivals/nag-panchami" className="text-accent">Nag Panchami (India)</Link> — Snake Veneration and the Conservation Paradox</h3>
                        <p>On Naga (snake) Panchami, devotees worship serpent deities—sometimes offering milk and cloth, sometimes performing rituals at snake shrines. Historically, real snakes were sometimes brought into ritual contexts, a practice that has become controversial as wildlife law and conservation awareness rise.</p>
                        
                        <h3><Link href="/blog/bail-pola-festival" className="text-accent">Bail Pola (Maharashtra & Chhattisgarh, India)</Link> — Gratitude for Bulls</h3>
                        <p>A significant festival for farmers where bulls are honored for their hard work in the fields. They are bathed, decorated, and given a day of rest, reinforcing the deep bond between farmers and their essential partners in agriculture.</p>

                        <h3><Link href="/blog/maad-festival-himachal-pradesh" className="text-accent">Maad Festival (Himachal Pradesh, India)</Link> — Honoring Livestock</h3>
                        <p>A unique celebration where communities in Himachal Pradesh honor their livestock, particularly cows and bulls. This festival reinforces the essential relationship between farmers and their animals, with rituals involving decorating the cattle and offering them special food like khichdi and ghee.</p>

                        <blockquote>
                            <p>Festivals that celebrate animals carry complex legacies: gratitude, exploitation, myth, and livelihood. Today’s challenge is to hold the first two while removing the latter two.</p>
                        </blockquote>

                        <h3>Golden Eagle Festival (Bayan-Ölgii, Mongolia) — Partnership, Heritage, Tourism</h3>
                        <p>The Golden Eagle Festival showcases the Kazakh falconry tradition in western Mongolia: trained golden eagles hunt on horseback, demonstrating extraordinary handler-bird coordination. The festival celebrates a living cultural heritage (bürkitshi) and attracts international tourists and documentary-makers.</p>

                        <h3>Monkey Buffet Festival (Lopburi, Thailand) — Spectacle and Critique</h3>
                        <p>Lopburi stages a lavish fruit-and-vegetable banquet for the city’s macaque population each year. The event is playful and draws tourists, but it also raises questions about habituation, health impacts for both monkeys and humans, and how urban wildlife should be managed.</p>

                        <h3>Ethics, Welfare, and the Path Forward</h3>
                        <p>The modern ethical movement seeks to transform spectacle into stewardship—keep cultural recognition while phasing out harmful practices. Festivals are ideal moments to stage vaccination drives, veterinary outreach, and community education. The goal is to create festival forms that honor animals, protect biodiversity, and support local communities.</p>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
