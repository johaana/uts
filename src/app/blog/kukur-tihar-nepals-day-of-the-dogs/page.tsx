
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';

const post = { 
    title: "Kukur Tihar: Nepal's Beautiful 'Day of the Dogs'", 
    image: "https://i.postimg.cc/RCcT1Twd/kukur-tihar1.avif",
    excerpt: "A deep dive into the heartwarming festival where dogs are worshipped for their loyalty. Discover the rituals, mythology, and the global fascination with this unique celebration of companionship."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: "A dog being worshipped during Kukur Tihar" }],
    type: 'article',
    publishedTime: new Date('2025-10-10').toISOString(),
    authors: ['Utsavs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [post.image],
  },
};

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="dog worship" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on October 10, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>In a corner of the world nestled among the Himalayas, the faithful and ancient bond between humans and dogs is celebrated not just with casual affection, but with flowers, food, and profound reverence. This is Kukur Tihar, Nepal's beautiful "Day of the Dogs." It is a day where every dog, from a pampered pet to a humble street stray, is honored as a divine being. This heartwarming festival serves as a powerful reminder of loyalty, companionship, and a spiritual connection that transcends species.</p>
                        
                        <h3>What is Tihar? A Festival of Lights and Life</h3>
                        <p>To understand Kukur Tihar, one must first understand Tihar, the five-day Hindu festival of lights celebrated in Nepal. While it shares some similarities with Diwali in India, Tihar has its own unique and beautiful traditions, with each day dedicated to honoring different beings. This five-day cycle reinforces the interconnectedness of all life:
                           <ul>
                                <li><strong>Day 1 - Kaag Tihar:</strong> Worship of crows, believed to be the messengers of Yama, the god of death.</li>
                                <li><strong>Day 2 - Kukur Tihar:</strong> Worship of dogs, the loyal guardians of the afterlife.</li>
                                <li><strong>Day 3 - Gai Tihar & Laxmi Puja:</strong> Worship of cows, symbols of prosperity, and the Goddess of Wealth.</li>
                                <li><strong>Day 4 - Govardhan Puja:</strong> Worship of the ox, a vital partner in agriculture.</li>
                                <li><strong>Day 5 - Bhai Tika:</strong> A day for brothers and sisters to celebrate their unique bond.</li>
                           </ul>
                        This context shows that Kukur Tihar is part of a larger, deeply meaningful celebration of life in all its forms.</p>

                        <h3>The Heartwarming Rituals of Kukur Tihar</h3>
                        <p>On the second day of Tihar, the entire nation turns its attention to its canine friends. The rituals are simple, yet performed with immense love and sincerity.</p>
                        <ul>
                            <li><strong>Mala (Flower Garlands):</strong> The first order of the day is to adorn every dog with a beautiful garland of marigold flowers. This 'mala' is a mark of respect and dignity, signifying the sacredness of the animal being worshipped.</li>
                            <li><strong>Tika (Vermillion Mark):</strong> A red tika is applied to the dog's forehead. This mark is a powerful blessing, wishing the dog good health and signifying its divine role on this special day.</li>
                            <li><strong>Delicious Food:</strong> The dogs are then offered a grand feast. This isn't just their regular food; it's a special offering of milk, eggs, meat, or high-quality treats. What makes this festival so incredibly touching is that these rituals are not just for pets. People go out of their way to find and honor stray dogs, ensuring that no dog is left un-worshipped or unfed.</li>
                        </ul>
                        
                        <div className="flex justify-center my-8">
                           <Image src="https://i.postimg.cc/7Y8hn4Sm/kukurtihar.webp" alt="A dog with a marigold garland and tika" width={500} height={350} className="rounded-lg shadow-lg" data-ai-hint="dog with garland"/>
                        </div>

                        <h3>Mythology and Meaning: The Guardian of the Afterlife</h3>
                        <p>The reverence for dogs in Hindu mythology is profound. They are considered the messengers of Lord Yama, the god of death, and are believed to guard the gates to the afterlife. In the epic Mahabharata, a dog faithfully follows the Pandava prince Yudhishthira on his final journey to heaven. By honoring dogs on Kukur Tihar, people believe they are pleasing Yama, ensuring a safe passage for the souls of the deceased. More than that, the festival is a celebration of the qualities dogs embody: loyalty, selflessness, and unconditional love. It’s a day for humans to express their gratitude for this pure and unwavering companionship.</p>

                        <h3>A Global Symbol of Compassion</h3>
                        <p>In recent years, Kukur Tihar has captured the hearts of people worldwide. Its beautiful imagery often goes viral on social media, sparking a global conversation about animal welfare. In a world where stray animals are often neglected or mistreated, this festival stands as a powerful counter-narrative. It has become a day for animal rights organizations in Nepal to raise awareness about adoption, vaccination, and responsible pet ownership, blending ancient tradition with modern compassion.</p>
                        
                        <blockquote>
                            <p>Kukur Tihar is more than just a religious ritual; it is a universal lesson in compassion, a reminder that our world is richer and more beautiful when we treat all living beings with dignity and love.</p>
                        </blockquote>

                        <p>The festival teaches a simple but profound truth: the bond of love and loyalty is sacred, and every creature, big or small, deserves our respect and gratitude. It's a day that truly celebrates the best friend a human can have.</p>

                    </article>
                    <ShareButtons title={post.title} />
                </CardContent>
            </Card>
        </div>
    );
}
