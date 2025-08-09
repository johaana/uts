
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
    { slug: "raksha-bandhan-the-true-spirit-of-siblinghood", title: "More Than a Thread: The True Spirit of Raksha Bandhan", excerpt: "Explore the deep history and heartfelt traditions of Raksha Bandhan. Discover thoughtful gift ideas that go beyond the material to truly celebrate the unbreakable bond between siblings.", author: "Team Utsavs", date: "August 8, 2025", image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg", hint: "rakhi thread" },
    { slug: "celebrate-with-conscience-eco-friendly-festivals", title: "Celebrate with Conscience: Your Guide to Vibrant and Eco-Friendly Indian Festivals", excerpt: "Discover how to blend rich cultural traditions with sustainable practices. Our guide explores the importance of eco-friendly festivals and offers creative, conscious ways to celebrate with joy.", author: "Team Utsavs", date: "August 12, 2025", image: "https://i.postimg.cc/XNyGGLXt/eco-friendly.jpg", hint: "eco-friendly decor" },
    { slug: "significance-of-diyas-in-diwali", title: "The Significance of Diyas in Diwali", excerpt: "Discover the deep cultural and spiritual meaning behind lighting diyas during the festival of lights. From symbolizing the victory of good over evil to welcoming the goddess Lakshmi, the humble diya holds a universe of meaning.", author: "Team Utsavs", date: "June 20, 2025", image: "https://i.postimg.cc/brM9vjDZ/Diya-diwali.webp", hint: "diwali lamps" },
    { slug: "guide-to-natural-holi-colors", title: "A Guide to Natural Holi Colors", excerpt: "Before chemical colors became popular, Holi was played with fragrant, skin-friendly colors made from flowers and herbs. Learn how to make your own natural gulal and celebrate a safe, eco-friendly Holi.", author: "Team Utsavs", date: "May 15, 2025", image: "https://i.postimg.cc/gkXKTrQ8/organic-holi-colours.webp", hint: "holi colors" },
    { slug: "top-5-rangoli-designs-for-beginners", title: "Top 5 Rangoli Designs for Beginners", excerpt: "Get inspired with these easy-to-make yet beautiful rangoli patterns. From simple floral designs to geometric wonders, we provide step-by-step guides to adorn your home for any festive occasion.", author: "Team Utsavs", date: "June 18, 2025", image: "https://i.postimg.cc/fRYfMpwb/Rangoli.jpg", hint: "rangoli design" },
    { slug: "9-avatars-of-durga-a-navratri-special", title: "The 9 Avatars of Durga: A Navratri Special", excerpt: "Explore the nine powerful forms of Goddess Durga worshipped during the nine nights of Navratri. Each avatar has a unique story and significance, representing a different aspect of the divine feminine.", author: "Team Utsavs", date: "July 01, 2025", image: "https://i.postimg.cc/GhWjwdnN/Navratri.jpg", hint: "garba dance" },
    { slug: "onam-sadya-a-feast-for-the-senses", title: "Onam Sadya: A Feast for the Senses", excerpt: "The Onam Sadya is more than just a meal; it's a grand vegetarian feast that is the centerpiece of Onam celebrations. We take you through the 26+ dishes that make up this incredible culinary experience.", author: "Team Utsavs", date: "July 07, 2025", image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam feast" },
    { slug: "festive-fashion-a-guide-to-traditional-indian-attire", title: "Festive Fashion: A Guide to Traditional Indian Attire", excerpt: "From vibrant sarees and lehengas to elegant kurtas and sherwanis, find inspiration for your festive wardrobe. We explore the significance of different colors and fabrics in Indian festive wear.", author: "Team Utsavs", date: "July 05, 2025", image: "https://i.postimg.cc/Kj45FYzX/festive-Indian-attire.png", hint: "indian fashion" },
    { slug: "bikaner-camel-festival-a-royal-spectacle", title: "Bikaner's Royal Spectacle: The Famous Camel Festival", excerpt: "Explore the vibrant Bikaner Camel Festival, a unique celebration of Rajasthan's 'Ship of the Desert'. Discover dates, traditions, and what makes this event a photographer's paradise.", author: "Team Utsavs", date: "May 20, 2025", image: "https://i.postimg.cc/1tK9P9dK/bikaner-camel.jpg", hint: "bikaner camel festival" },
    { slug: "kerala-village-fair-gramam", title: "Gramam: Step Into the Heart of Kerala's Culture", excerpt: "Experience the authentic culture of Kerala at the Gramam village fair. A celebration of traditional arts, crafts, and food near Kovalam.", author: "Team Utsavs", date: "May 24, 2025", image: "https://i.postimg.cc/FKgpVqq6/gramam-kerala.jpg", hint: "kerala village fair" },
    { slug: "pushkar-camel-fair-an-unforgettable-experience", title: "Pushkar Camel Fair: More Than Just a Market", excerpt: "Discover the world's largest camel fair in Pushkar, Rajasthan. A vibrant blend of livestock trading, cultural events, and spiritual experiences.", author: "Team Utsavs", date: "June 25, 2025", image: "https://i.postimg.cc/rmVJnj2w/Pushkar-Camel-Fair.avif", hint: "pushkar camel fair" },
    { slug: "hampi-utsav-a-journey-back-in-time", title: "Hampi Utsav: Where Ancient Ruins Come Alive", excerpt: "Experience the grandeur of the Vijayanagar empire at the Hampi Festival. A cultural extravaganza of music, dance, and art amidst a UNESCO World Heritage Site.", author: "Team Utsavs", date: "May 22, 2025", image: "https://i.postimg.cc/9Qp5rxbW/hampi-utsav1.webp", hint: "hampi ruins" },
    { slug: "kumbh-mela-a-dip-in-immortality", title: "Kumbh Mela: A Spiritual Gathering of Millions", excerpt: "Understand the significance of the Kumbh Mela, the largest peaceful gathering in the world and a cornerstone of Hindu faith.", author: "Team Utsavs", date: "May 28, 2025", image: "https://i.postimg.cc/ncg3FqB3/kumbh-mela-2.jpg", hint: "kumbh mela pilgrimage" },
    { slug: "sula-fest-wine-music-and-more", title: "Sula Fest: India's Premier Vineyard Music Festival", excerpt: "Discover Sula Fest, a unique blend of live music, gourmet food, and fine wine in the picturesque vineyards of Nashik.", author: "Team Utsavs", date: "June 02, 2025", image: "https://i.postimg.cc/Gpm0Ykgv/sula-fest-1.jpg", hint: "sula vineyards" },
    { slug: "tarnetar-mela-a-unique-gujarati-fair", title: "Tarnetar Mela: The Vibrant Matchmaking Fair of Gujarat", excerpt: "Explore the Tarnetar Mela, a colorful and romantic fair where Gujarat's tribal youth find their life partners amidst folk dance and music.", author: "Team Utsavs", date: "June 05, 2025", image: "https://i.postimg.cc/N0qYH9q4/tarnetar-mela.jpg", hint: "gujarat fair" },
    { slug: "losar-festival-the-tibetan-new-year", title: "Losar Festival: Celebrating the Tibetan New Year in the Himalayas", excerpt: "Discover the Losar festival, a vibrant celebration marking the Tibetan New Year with colorful rituals, music, and dance in Sikkim and Ladakh.", author: "Team Utsavs", date: "June 10, 2025", image: "https://i.postimg.cc/mDBXxRCR/losar-2.jpg", hint: "ladakh festival" },
    { slug: "torgya-monastery-festival-a-splash-of-color", title: "Torgya: The Masked Dances of Tawang Monastery", excerpt: "Witness the stunning Torgya festival in Arunachal Pradesh, where monks perform sacred 'Chham' dances to chase away evil spirits.", author: "Team Utsavs", date: "June 12, 2025", image: "https://i.postimg.cc/Cxn6kcwy/torgya-2.jpg", hint: "tawang monastery" },
    { slug: "thrissur-pooram-keralas-grandest-festival", title: "Thrissur Pooram: Kerala's Spectacle of Elephants and Percussion", excerpt: "Experience the magic of Thrissur Pooram, a grand temple festival in Kerala featuring caparisoned elephants, traditional music, and a dazzling fireworks display.", author: "Team Utsavs", date: "June 15, 2025", image: "https://i.postimg.cc/j28kQ9WT/thrissur-puram-festival-2.jpg", hint: "kerala temple festival" },
    { slug: "10-unknown-festivals-of-india", title: "10 Indian Festivals You've Probably Never Heard Of", excerpt: "Venture off the beaten path and discover some of India's most unique and fascinating regional festivals, from tribal celebrations to ancient rituals.", author: "Team Utsavs", date: "July 15, 2025", image: "https://i.postimg.cc/ncrHbfGv/unique-festivals-1.jpg", hint: "tribal festival" },
    { slug: "long-weekends-2025", title: "Maximize Your Vacations: Your Ultimate Guide to India's Long Weekends in 2025", excerpt: "Unlock your 2025 travel potential! This guide details all the long weekends in India, offering festival-based travel ideas to help you plan your holidays and make the most of every break.", author: "Team Utsavs", date: "January 18, 2025", image: "https://i.postimg.cc/VLQf0kKF/long-weekend-1.jpg", hint: "holiday planning calendar" },
];

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="text-center mb-12">
                <h1 className="font-headline text-3xl md:text-5xl font-bold">Utsavs Blog</h1>
                <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                    Dive deeper into the culture, stories, and traditions that make Indian festivals so special. Your definitive source for festive knowledge.
                </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {blogPosts.map((post) => (
                    <Card key={post.slug} className="overflow-hidden group flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative h-40 md:h-56 w-full bg-black/5">
                           <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint={post.hint}/>
                        </div>
                        <CardHeader className="p-3 md:p-4 flex-grow">
                            <CardTitle className="font-headline text-lg md:text-xl">{post.title}</CardTitle>
                             <p className="text-xs text-muted-foreground pt-1">By {post.author} on {post.date}</p>
                        </CardHeader>
                        <CardContent className="p-3 pt-0 md:p-4 md:pt-0 flex flex-col">
                            <p className="text-xs md:text-sm text-foreground/80 mb-4 flex-grow">{post.excerpt}</p>
                            <Link href={`/blog/${post.slug}`} className="mt-auto">
                                <Button variant="link" className="p-0 text-accent hover:text-accent/90">
                                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
