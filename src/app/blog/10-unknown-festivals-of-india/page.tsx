import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Beyond Diwali: 10 Secret Festivals That Reveal the True Soul of India", 
    excerpt: "Venture off the beaten path and discover some of India's most unique and fascinating regional festivals that reveal the nation's true cultural heart."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
};

const relatedContent: RelatedItem[] = [
    { slug: "bastar-dussehra", title: "Bastar Dussehra", image: "", type: "Festival", link: "/festivals/bastar-dussehra", hint: "" },
    { slug: "theyyam", title: "Theyyam", image: "", type: "Festival", link: "/festivals/theyyam", hint: "" },
    { slug: "hornbill-festival", title: "Hornbill Festival", image: "", type: "Festival", link: "/festivals/hornbill-festival", hint: "" }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-8">
                <Link href="/blog">
                    <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Button>
                </Link>
            </div>

            <div className="bg-primary/5 rounded-2xl p-10 md:p-20 text-center mb-12 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <p className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em]">CULTURAL INTELLIGENCE</p>
                <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter leading-none">{post.title}</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">By Team Utsavs · July 15, 2025</p>
            </div>

            <Card className="overflow-hidden border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                    <article className="prose max-w-4xl mx-auto text-foreground/80 text-lg leading-relaxed">
                        <p>While Diwali's lights and Holi's colors capture global attention, India's cultural heart beats strongest in its lesser-known regional festivals. These are not just events; they are raw, authentic celebrations of life, community, and ancient traditions.</p>

                        <h3 className="font-headline text-2xl font-bold text-primary mt-12 mb-4">1. Sekrenyi Festival, Nagaland</h3>
                        <p>Celebrated by the Angami Naga tribe in February, Sekrenyi is a ten-day festival of purification and sanctification. It involves elaborate rituals, traditional songs, and feasting, all aimed at cleansing the body and soul.</p>

                        <h3 className="font-headline text-2xl font-bold text-primary mt-12 mb-4">2. Sume-Gelirak Festival, Odisha</h3>
                        <p>A vibrant festival of the Bonda tribe, Sume-Gelirak is a time for forgiveness, love, and the selection of life partners. Celebrated over ten days, it involves the entire community participating in dance and music.</p>

                        <h3 className="font-headline text-2xl font-bold text-primary mt-12 mb-4">3. Mim Kut, Mizoram</h3>
                        <p>This harvest festival of the Kuki-Chin-Mizo tribes is celebrated in August or September after the maize harvest. Mim Kut is a time of thanksgiving, where people honor their ancestors.</p>

                        <h3 className="font-headline text-2xl font-bold text-primary mt-12 mb-4">4. <Link href="/festivals/shigmo-festival" className="text-accent hover:underline">Shigmo, Goa</Link></h3>
                        <p>While Goa is famous for its Carnival, Shigmo is its vibrant Hindu spring festival. It's a spectacular celebration of color, music, and folk dances like the Ghode Modni (horse dance) and Fugdi.</p>

                        <h3 className="font-headline text-2xl font-bold text-primary mt-12 mb-4">5. Puli Kali, Kerala</h3>
                        <p>Performed during Onam, Puli Kali, or the "Tiger Dance," is a folk art form where performers, painted like tigers and hunters, dance to the rhythm of traditional percussion instruments.</p>
                    </article>
                    <div className="max-w-4xl mx-auto">
                        <ShareButtons title={post.title} />
                        <RelatedContent items={relatedContent} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
