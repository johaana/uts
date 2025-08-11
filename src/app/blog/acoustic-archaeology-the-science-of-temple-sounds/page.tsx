
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Acoustic Archaeology: The Science and Spirit of Temple Sounds", 
    image: "https://i.postimg.cc/Z5hKML4T/temple-bell1.jpg",
    excerpt: "Ever wondered why temple bells have a specific shape, or why a conch shell's sound is so moving? We explore the fascinating intersection of science, sound, and spirituality in Hindu rituals."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-09-22').toISOString(),
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
        slug: "home-puja-guide-for-beginners",
        title: "A Beginner's Guide to Home Puja",
        image: "https://i.postimg.cc/brM9vjDZ/Diya-diwali.webp",
        type: "Blog",
        link: "/blog/home-puja-guide-for-beginners",
        hint: "home altar"
    },
    {
        slug: "maha-shivaratri",
        title: "Maha Shivaratri",
        image: "https://i.postimg.cc/52NbWR80/mahashivratri.jpg",
        type: "Festival",
        link: "/festivals/maha-shivaratri",
        hint: "shiva statue"
    },
    {
        slug: "why-do-we-break-coconuts",
        title: "Why Do We Break Coconuts?",
        image: "https://i.postimg.cc/dVF0D97h/coconut.webp",
        type: "Blog",
        link: "/blog/why-do-we-break-coconuts",
        hint: "coconut ritual"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="temple bell sound" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on September 22, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>Hindu rituals are a multi-sensory experience. The fragrance of incense, the taste of prasad, the sight of the deity—and most profoundly, the sound. From the sharp, resonant ring of a temple bell to the deep, primordial hum of a conch shell, sound is not just an accompaniment to worship; it is worship itself. But is there more to these ancient sounds than just tradition? Welcome to the fascinating field of acoustic archaeology, where we explore the deliberate science and deep spiritual impact behind the soundscape of a Hindu temple.</p>

                        <h3>The Temple Bell (Ghanta): Unifying Mind and Body</h3>
                        <p>When you enter a temple, the first act is often to ring the bell. It’s a call to the divine, an announcement of your arrival. But the science behind its sound is remarkable. Temple bells are not made of ordinary brass. They are crafted from a specific blend of metals, typically including cadmium, lead, copper, zinc, nickel, chromium, and manganese. This unique composition is what gives the bell its sharp, distinct, and enduring sound.</p>
                        
                        <p><strong>The Science:</strong> When struck, the bell produces a sound that creates a clear echo that can last for several seconds. The frequency of this sound is designed to unify the left and right hemispheres of the brain. The moment you ring the bell, your mind is momentarily emptied of thought, entering a transient state of trance. This state of heightened awareness and focus is ideal for prayer and introspection, helping you to become more receptive to the divine vibrations of the temple.</p>

                        <h3>The Conch Shell (Shankha): A Primordial Sound</h3>
                        <p>The blowing of the conch shell, or 'Shankha', is another powerful sonic element in Hindu rituals, especially during an 'aarti'. Its sound is deep, resonant, and believed to be the primordial sound of creation, the 'Om' itself.</p>
                        
                        <p><strong>The Science:</strong> The sound of the Shankha is believed to destroy negative energy and purify the environment. From a scientific perspective, blowing a conch shell provides an excellent exercise for the lungs and respiratory system. The vibrations it produces are said to kill harmful bacteria in the atmosphere. Its sound waves travel far, creating a sense of sacredness and drawing the community's attention towards the ritual.</p>

                        <h3>The Power of Mantras: Brainwave Entrainment</h3>
                        <p>The chanting of mantras is perhaps the most fundamental sound in Hinduism. A mantra is a sacred utterance, a syllable, word, or phrase believed to have spiritual and psychological power. The most basic of all is "Om", considered the sound of the universe.</p>
                        
                        <blockquote>
                            <p>Sound, in Hindu philosophy, is not just a vibration. It is 'Shabda Brahman'—the divine, absolute reality in the form of sound.</p>
                        </blockquote>
                        
                        <p><strong>The Science:</strong> Modern neuroscience is beginning to understand what ancient rishis knew intuitively. The rhythmic, repetitive chanting of mantras can lead to a phenomenon called 'brainwave entrainment'. The brain's own electrical cycles start to synchronize with the rhythm of the chant. This can lead to a decrease in beta waves (associated with active, busy thinking) and an increase in alpha and theta waves, which are associated with relaxed, meditative, and creative states of mind. The vibrations produced by chanting also resonate through the body, which can have a calming effect on the nervous system, reduce blood pressure, and release 'feel-good' neurochemicals.</p>
                        
                        <p>The acoustic design of ancient Hindu temples is another marvel. Many were built with specific geometric proportions and materials that create a unique and powerful sound environment, amplifying these sacred sounds and vibrations. So, the next time you step into a temple, listen closely. You are not just hearing sounds; you are participating in a carefully orchestrated symphony of science and spirit, designed to elevate your consciousness and connect you to the divine.</p>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
