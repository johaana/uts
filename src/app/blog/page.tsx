import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
    { slug: "significance-of-diyas-in-diwali", title: "The Significance of Diyas in Diwali", excerpt: "Discover the deep cultural and spiritual meaning behind lighting diyas during the festival of lights. From symbolizing the victory of good over evil to welcoming the goddess Lakshmi, the humble diya holds a universe of meaning.", author: "Priya Sharma", date: "October 20, 2025", image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", hint: "diwali lamps" },
    { slug: "guide-to-natural-holi-colors", title: "A Guide to Natural Holi Colors", excerpt: "Before chemical colors became popular, Holi was played with fragrant, skin-friendly colors made from flowers and herbs. Learn how to make your own natural gulal and celebrate a safe, eco-friendly Holi.", author: "Raj Patel", date: "March 10, 2026", image: "https://i.postimg.cc/fWFvx4J9/aceofnet-PNd98-z-An-U0-unsplash.jpg", hint: "holi colors" },
    { slug: "top-5-rangoli-designs-for-beginners", title: "Top 5 Rangoli Designs for Beginners", excerpt: "Get inspired with these easy-to-make yet beautiful rangoli patterns. From simple floral designs to geometric wonders, we provide step-by-step guides to adorn your home for any festive occasion.", author: "Anjali Mehta", date: "October 18, 2025", image: "https://i.postimg.cc/VN1gdj5Z/prchi-palwe-NLq-NQ10ppe0-unsplash.jpg", hint: "rangoli design" },
    { slug: "9-avatars-of-durga-a-navratri-special", title: "The 9 Avatars of Durga: A Navratri Special", excerpt: "Explore the nine powerful forms of Goddess Durga worshipped during the nine nights of Navratri. Each avatar has a unique story and significance, representing a different aspect of the divine feminine.", author: "Vikram Singh", date: "September 25, 2025", image: "https://i.postimg.cc/0Nffmbwk/sanin-sn-B4-ZQ2m-KEiq-Y-unsplash.jpg", hint: "garba dance" },
    { slug: "onam-sadya-a-feast-for-the-senses", title: "Onam Sadya: A Feast for the Senses", excerpt: "The Onam Sadya is more than just a meal; it's a grand vegetarian feast that is the centerpiece of Onam celebrations. We take you through the 26+ dishes that make up this incredible culinary experience.", author: "Lakshmi Nair", date: "September 07, 2025", image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam feast" },
    { slug: "festive-fashion-a-guide-to-traditional-indian-attire", title: "Festive Fashion: A Guide to Traditional Indian Attire", excerpt: "From vibrant sarees and lehengas to elegant kurtas and sherwanis, find inspiration for your festive wardrobe. We explore the significance of different colors and fabrics in Indian festive wear.", author: "Riya Desai", date: "August 25, 2025", image: "https://i.postimg.cc/g234zMc6/monoswita-palchowdhury-P7r11-LLRg-M-unsplash.jpg", hint: "indian fashion" },
    { slug: "bikaner-camel-festival-a-royal-spectacle", title: "Bikaner's Royal Spectacle: The Famous Camel Festival", excerpt: "Explore the vibrant Bikaner Camel Festival, a unique celebration of Rajasthan's 'Ship of the Desert'. Discover dates, traditions, and what makes this event a photographer's paradise.", author: "Jignesh Gohel", date: "January 11, 2025", image: "https://i.postimg.cc/kG6pM4vB/Camel-Festival-Bikaner-Rajasthan.jpg", hint: "bikaner camel festival" },
    { slug: "kerala-village-fair-gramam", title: "Gramam: Step Into the Heart of Kerala's Culture", excerpt: "Experience the authentic culture of Kerala at the Gramam village fair. A celebration of traditional arts, crafts, and food near Kovalam.", author: "Adotrip", date: "January 15, 2025", image: "https://i.postimg.cc/prgQW4B1/thaipusam.jpg", hint: "kerala village fair" },
    { slug: "pushkar-camel-fair-an-unforgettable-experience", title: "Pushkar Camel Fair: More Than Just a Market", excerpt: "Discover the world's largest camel fair in Pushkar, Rajasthan. A vibrant blend of livestock trading, cultural events, and spiritual experiences.", author: "Jignesh Gohel", date: "November 1, 2025", image: "https://i.postimg.cc/MHWxGgXJ/Camel-Pushkar-fair.jpg", hint: "pushkar camel fair" },
    { slug: "hampi-utsav-a-journey-back-in-time", title: "Hampi Utsav: Where Ancient Ruins Come Alive", excerpt: "Experience the grandeur of the Vijayanagar empire at the Hampi Festival. A cultural extravaganza of music, dance, and art amidst a UNESCO World Heritage Site.", author: "Jignesh Gohel", date: "January 3, 2025", image: "https://i.postimg.cc/YSpNpMyJ/sudarshan-poojary-FZw-Bem-Sc-Rc0-unsplash.jpg", hint: "hampi ruins" },
    { slug: "kumbh-mela-a-dip-in-immortality", title: "Kumbh Mela: A Spiritual Gathering of Millions", excerpt: "Understand the significance of the Kumbh Mela, the largest peaceful gathering in the world and a cornerstone of Hindu faith.", author: "Jignesh Gohel", date: "January 13, 2025", image: "https://i.postimg.cc/T1gD4R6R/nag-panchami1.jpg", hint: "kumbh mela pilgrimage" },
    { slug: "sula-fest-wine-music-and-more", title: "Sula Fest: India's Premier Vineyard Music Festival", excerpt: "Discover Sula Fest, a unique blend of live music, gourmet food, and fine wine in the picturesque vineyards of Nashik.", author: "Jignesh Gohel", date: "February 8, 2025", image: "https://i.postimg.cc/kDmD9PDV/christmas-cake.jpg", hint: "sula vineyards" },
    { slug: "tarnetar-mela-a-unique-gujarati-fair", title: "Tarnetar Mela: The Vibrant Matchmaking Fair of Gujarat", excerpt: "Explore the Tarnetar Mela, a colorful and romantic fair where Gujarat's tribal youth find their life partners amidst folk dance and music.", author: "Jignesh Gohel", date: "September 1, 2025", image: "https://i.postimg.cc/BZRyqQpL/garba-navratri.jpg", hint: "gujarat fair" },
    { slug: "losar-festival-the-tibetan-new-year", title: "Losar Festival: Celebrating the Tibetan New Year in the Himalayas", excerpt: "Discover the Losar festival, a vibrant celebration marking the Tibetan New Year with colorful rituals, music, and dance in Sikkim and Ladakh.", author: "Jignesh Gohel", date: "February 28, 2025", image: "https://i.postimg.cc/k4WjTjj3/hemis-tsechu.jpg", hint: "ladakh festival" },
    { slug: "torgya-monastery-festival-a-splash-of-color", title: "Torgya: The Masked Dances of Tawang Monastery", excerpt: "Witness the stunning Torgya festival in Arunachal Pradesh, where monks perform sacred 'Chham' dances to chase away evil spirits.", author: "Jignesh Gohel", date: "January 20, 2025", image: "https://i.postimg.cc/GmnJ5kP3/nilendrajyoti-halder-v32-Ac-NJ4-Q-Q-unsplash.jpg", hint: "tawang monastery" },
    { slug: "thrissur-pooram-keralas-grandest-festival", title: "Thrissur Pooram: Kerala's Spectacle of Elephants and Percussion", excerpt: "Experience the magic of Thrissur Pooram, a grand temple festival in Kerala featuring caparisoned elephants, traditional music, and a dazzling fireworks display.", author: "Jignesh Gohel", date: "April 29, 2025", image: "https://i.postimg.cc/9fkfFs47/Onam.webp", hint: "kerala temple festival" },
    { slug: "10-unknown-festivals-of-india", title: "10 Indian Festivals You've Probably Never Heard Of", excerpt: "Venture off the beaten path and discover some of India's most unique and fascinating regional festivals, from tribal celebrations to ancient rituals.", author: "Travel Desk", date: "July 15, 2024", image: "https://i.postimg.cc/tJnB8vjD/Hornbill-Festival.jpg", hint: "tribal festival" },
    { slug: "long-weekends-2025", title: "Maximize Your Vacations: Your Ultimate Guide to India's Long Weekends in 2025", excerpt: "Unlock your 2025 travel potential! This guide details all the long weekends in India, offering festival-based travel ideas to help you plan your holidays and make the most of every break.", author: "Utsavs Team", date: "October 15, 2024", image: "https://i.postimg.cc/kgQyP7Ym/makar-sankranti1.webp", hint: "holiday planning calendar" },
];

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Utsavopedia Blog</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Dive deeper into the culture, stories, and traditions that make Indian festivals so special. Your definitive source for festive knowledge.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Card key={post.slug} className="overflow-hidden group flex flex-col">
                        <div className="relative h-64 w-full bg-black/5">
                           <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint={post.hint}/>
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl h-16">{post.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">By {post.author} on {post.date}</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-foreground/80">{post.excerpt}</p>
                        </CardContent>
                        <CardContent>
                            <Link href={`/blog/${post.slug}`}>
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
