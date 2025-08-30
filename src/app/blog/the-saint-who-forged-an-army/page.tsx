
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "The Saint Who Forged an Army: The Story of Guru Gobind Singh and the Birth of the Khalsa", 
    image: "https://i.postimg.cc/XvpjNQWp/hola-mohalla3.jpg",
    excerpt: "How did a spiritual tradition of peace give rise to a formidable community of warrior-saints? This is the dramatic story of Guru Gobind Singh and the day he created the Khalsa."
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
        slug: "hola-mohalla",
        title: "Hola Mohalla",
        image: "https://i.postimg.cc/XvpjNQWp/hola-mohalla3.jpg",
        type: "Festival",
        link: "/festivals/hola-mohalla",
        hint: "sikh warriors"
    },
    {
        slug: "guru-nanak-jayanti",
        title: "Guru Nanak Jayanti",
        image: "https://i.postimg.cc/029q7BWf/guru-nanak-jayanti.webp",
        type: "Festival",
        link: "/festivals/guru-nanak-jayanti",
        hint: "sikh prayer"
    },
    {
        slug: "vaisakhi",
        title: "Vaisakhi / Bihu",
        image: "https://i.postimg.cc/k5GJKp5Z/vaisakhi.webp",
        type: "Festival",
        link: "/festivals/bihu",
        hint: "harvest festival"
    }
];

export default function KhalsaCreationPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="sikh warriors" className="rounded-lg"/>
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

                        <p>How does a spiritual path rooted in meditation, peace, and the concept of one God give birth to a formidable community of warrior-saints? This is one of the most powerful and dramatic stories in Sikh history, a tale of transformation that revolves around the tenth Guru, Guru Gobind Singh. It is the story of how, in a single day of profound sacrifice and rebirth, he created the Khalsa, a collective body of initiated Sikhs dedicated to serving and protecting the innocent against tyranny.</p>

                        <h3>A Call for a Head</h3>
                        <p>The year was 1699, a time of great turmoil and persecution. On the day of Vaisakhi, the harvest festival, Guru Gobind Singh called a massive congregation at Anandpur Sahib. After a stirring sermon, he did something extraordinary. He emerged from a tent with a sword in hand and made a shocking demand: "I need a head. Who among you is willing to sacrifice his life for his Guru and his faith?"</p>
                        <p>A deathly silence fell over the crowd. Fear and confusion rippled through the thousands gathered. Finally, one man, Daya Ram, a humble shopkeeper, stood up and offered his life. The Guru took him into the tent. A thud was heard, and the Guru emerged alone, his sword dripping with fresh blood. He asked for another head. Another man, Dharam Das, volunteered and was taken into the tent. This happened three more times, with three more brave men offering their lives. The crowd was in a state of shock and terror, believing their Guru had killed five of his most devout followers.</p>

                        <h3>The Birth of the Panj Pyare</h3>
                        <p>But then, the tent flap opened again. To the astonishment of all, the five men emerged, alive and well, dressed in new, majestic blue robes. The Guru had not killed them; he had tested their courage and faith. He initiated them into a new order through a ceremony called 'Amrit Sanchar'. He prepared a nectar (Amrit) by stirring water and sugar crystals with a double-edged sword while reciting holy scriptures. These five men, who had been willing to give their heads, were reborn as the 'Panj Pyare'—the Five Beloved Ones.</p>
                        
                        <p>In a revolutionary act that shattered all social hierarchies, the Guru then knelt before the Panj Pyare and asked them to initiate him, making himself their disciple. This act established the Khalsa as a community where there was no difference between the Guru and the disciple. All were equal, bound by a common code of conduct and a shared commitment to justice, service, and spiritual discipline.</p>

                        <blockquote>
                            <p>The creation of the Khalsa was not a departure from the path of peace, but an assertion that true spirituality must also have the courage to stand up against injustice.</p>
                        </blockquote>

                        <p>The story of the Khalsa's birth is a powerful reminder that faith is not a passive state, but an active commitment. It is a tale of immense courage, the symbolic death of the ego, and the birth of a new identity dedicated to serving humanity.</p>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
