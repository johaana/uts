
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Utensils, Sparkles, MessageSquareQuote, CalendarDays, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const recipes = [
    { name: "Ladoo", link: "/recipes/ladoo" },
    { name: "Kaju Katli", link: "/recipes/kaju-katli" },
    { name: "Gajar Ka Halwa", link: "/recipes/gajar-ka-halwa" },
]

const relatedContent: RelatedItem[] = [
    {
        slug: "diwali-regional-variations",
        title: "How Diwali is Celebrated Across India",
        image: "https://i.postimg.cc/mg1bYqXc/Diwali-blog-same-fest.jpg",
        type: "Blog",
        link: "/blog/diwali-regional-variations",
        hint: "diwali collage"
    },
    {
        slug: "significance-of-diyas-in-diwali",
        title: "The Significance of Diyas",
        image: "https://i.postimg.cc/brM9vjDZ/Diya-diwali.webp",
        type: "Blog",
        link: "/blog/significance-of-diyas-in-diwali",
        hint: "diwali lamps"
    },
    {
        slug: "raksha-bandhan",
        title: "Raksha Bandhan",
        image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg",
        type: "Festival",
        link: "/festivals/raksha-bandhan",
        hint: "rakhi thread"
    }
];

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "five-days", title: "The Five Days", icon: CalendarDays },
    { id: "rituals", title: "Rituals", icon: Sparkles },
    { id: "recipes", title: "Recipes", icon: Utensils },
    { id: "chants", title: "Chants", icon: MessageSquareQuote },
    { id: "eco-friendly", title: "Eco-Friendly", icon: Leaf },
];

export function DiwaliPageContent() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Diwali</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The Festival of Lights: A Triumph of Good Over Evil</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="hidden md:block md:col-span-4 lg:col-span-3">
                                <div className="sticky top-24">
                                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                                        <h2 className="font-headline text-2xl font-bold mb-4">In This Article</h2>
                                        <ul className="space-y-2">
                                            {pageSections.map(section => (
                                                <li key={section.id}>
                                                    <a href={`#${section.id}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                                                        <section.icon className="w-5 h-5 text-accent" />
                                                        <span className="font-semibold">{section.title}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </aside>

                            <main className="md:col-span-8 lg:col-span-9">
                                <article className="space-y-12">
                                    <section id="overview" className="scroll-mt-20">
                                        <div className="flex flex-col md:flex-row gap-8 items-center">
                                            <div className="md:w-2/3">
                                                <h2 className="font-headline text-3xl font-bold mb-4">The Luminous Celebration of Good's Triumph</h2>
                                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                                    <p>Diwali, or Deepavali, the 'Festival of Lights', is one of the most significant and radiant festivals celebrated across India and by the Indian diaspora worldwide. Its name, derived from the Sanskrit 'Deepavali', literally means "row of lighted lamps." This imagery is the very essence of the festival, where countless 'diyas' (earthen lamps) flicker against the dark canvas of the night, each flame a powerful beacon of hope, a universal symbol of the enduring victory of light over darkness, good over evil, and knowledge over ignorance.</p>
                                                    <p>While most famously linked to the Ramayana and the return of Lord Rama to Ayodhya after defeating Ravana, Diwali's significance is multifaceted. For many, it is intrinsically linked to **Lakshmi Puja**, a day of worshipping Goddess Lakshmi, the bestower of wealth and prosperity. Homes are cleaned and illuminated to welcome her blessings for the coming year. In Jainism, Diwali marks the anniversary of Lord Mahavira's attainment of moksha (liberation), while in Sikhism, it is celebrated as 'Bandi Chhor Divas', commemorating the release of Guru Hargobind from prison. At its core, Diwali is a profound celebration of homecoming, righteousness, new beginnings, and the definitive dispelling of all that is dark and malevolent from human life.</p>
                                                </div>
                                            </div>
                                            <div className="md:w-1/3">
                                                <Image src="https://i.postimg.cc/SjF8HhM1/Diwali2.jpg" alt="Woman lighting Diwali Diya" width={400} height={600} className="rounded-lg shadow-lg" data-ai-hint="diwali celebration"/>
                                            </div>
                                        </div>
                                    </section>
                                    
                                     <div className="md:hidden sticky top-16 z-30 bg-background/95 backdrop-blur-sm py-2 -mx-6 px-6 mb-8 border-b">
                                        <h3 className="font-headline text-lg font-bold mb-2">In This Article</h3>
                                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                                            {pageSections.map(section => (
                                                <a key={section.id} href={`#${section.id}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                                                    <section.icon className="w-4 h-4 text-accent" />
                                                    {section.title}
                                                </a>
                                            ))}
                                        </div>
                                     </div>

                                     <section id="five-days" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Five Days of Diwali: A Detailed Guide</h2>
                                        <div className="space-y-10 prose max-w-none text-foreground/80">
                                            <div className="p-6 bg-secondary/30 rounded-lg">
                                                <div className="flex flex-col md:flex-row gap-6 items-center">
                                                    <div className="md:w-2/3">
                                                        <h3 className="font-headline text-2xl text-primary mb-2">Day 1: Dhanteras - The Festival of Wealth</h3>
                                                        <p>The Diwali festivities begin with Dhanteras. 'Dhan' means wealth. On this day, homes are deep-cleaned and decorated to welcome Goddess Lakshmi. The most significant tradition is the purchasing of new items, particularly gold, silver, or new utensils. This act symbolizes bringing prosperity and good fortune into the home.</p>
                                                    </div>
                                                    <div className="md:w-1/3">
                                                        <Image src="https://i.postimg.cc/wv37wS6p/dhanteras.avif" alt="Dhanteras" width={300} height={200} className="rounded-lg shadow-md w-full" data-ai-hint="gold coins jewellery" />
                                                    </div>
                                                </div>
                                            </div>
                                             <div className="p-6 bg-secondary/30 rounded-lg">
                                                <div className="flex flex-col md:flex-row gap-6 items-center">
                                                     <div className="md:w-1/3 md:order-2">
                                                        <Image src="https://i.postimg.cc/L8ZgSdf6/narak-chaturdashi.webp" alt="Naraka Chaturdashi" width={300} height={200} className="rounded-lg shadow-md w-full" data-ai-hint="abhyanga snan" />
                                                    </div>
                                                    <div className="md:w-2/3 md:order-1">
                                                        <h3 className="font-headline text-2xl text-primary mb-2">Day 2: Naraka Chaturdashi - The Day of Liberation</h3>
                                                        <p>Also known as 'Choti Diwali', the second day celebrates Lord Krishna's triumphant victory over the demon Narakasura. This day signifies the victory of good over evil. The main ritual involves taking a sacred bath before sunrise, known as 'Abhyanga Snan', using aromatic oils and 'ubtan' paste to cleanse the body and soul. In 2025, this falls on the same day as Lakshmi Puja.</p>
                                                    </div>
                                                </div>
                                            </div>
                                             <div className="p-6 bg-secondary/30 rounded-lg">
                                                <div className="flex flex-col md:flex-row gap-6 items-center">
                                                    <div className="md:w-2/3">
                                                        <h3 className="font-headline text-2xl text-primary mb-2">Day 3: Lakshmi Puja - The Worship of the Goddess</h3>
                                                        <p>This is the most important day of the festival. After sunset, families gather to perform the Lakshmi Puja, an elaborate worship ceremony dedicated to Goddess Lakshmi for wealth and prosperity. Homes are brightly illuminated with rows of diyas and rangoli.</p>
                                                    </div>
                                                    <div className="md:w-1/3">
                                                        <Image src="https://i.postimg.cc/TYs5B2K4/lakshmi_puja.webp" alt="Lakshmi Puja" width={300} height={200} className="rounded-lg shadow-md w-full" data-ai-hint="lakshmi ganesh puja" />
                                                    </div>
                                                </div>
                                            </div>
                                             <div className="p-6 bg-secondary/30 rounded-lg">
                                                <div className="flex flex-col md:flex-row gap-6 items-center">
                                                     <div className="md:w-1/3 md:order-2">
                                                        <Image src="https://i.postimg.cc/yNLDXVCj/padwa-diwali.webp" alt="Govardhan Puja" width={300} height={200} className="rounded-lg shadow-md w-full" data-ai-hint="govardhan puja" />
                                                    </div>
                                                    <div className="md:w-2/3 md:order-1">
                                                        <h3 className="font-headline text-2xl text-primary mb-2">Day 4: Govardhan Puja - Honouring Nature's Bounty</h3>
                                                        <p>This day commemorates Lord Krishna lifting the Govardhan Hill to shelter villagers from torrential rains. Devotees create a miniature hillock of food ('Annakut') to honor this event. In some regions, it's celebrated as 'Padwa', honoring the marital bond.</p>
                                                    </div>
                                                </div>
                                            </div>
                                             <div className="p-6 bg-secondary/30 rounded-lg">
                                                <div className="flex flex-col md:flex-row gap-6 items-center">
                                                    <div className="md:w-2/3">
                                                        <h3 className="font-headline text-2xl text-primary mb-2">Day 5: Bhai Dooj - Celebrating the Sibling Bond</h3>
                                                        <p>The festival culminates with Bhai Dooj, a day celebrating the bond between brothers and sisters, similar to <Link href="/festivals/raksha-bandhan" className="text-accent hover:underline">Raksha Bandhan</Link>. Sisters apply a 'tilak' on their brother's forehead, praying for his long life, and brothers give gifts in return, vowing to protect them.</p>
                                                    </div>
                                                    <div className="md:w-1/3">
                                                        <Image src="https://i.postimg.cc/CKhZqRXd/bhaidooj-pooja-vidhi.jpg" alt="Bhai Dooj" width={300} height={200} className="rounded-lg shadow-md w-full" data-ai-hint="bhai dooj" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="rituals" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Diwali</h2>
                                        <div className="space-y-6">
                                            <p className="text-foreground/80 prose max-w-none">Celebrating Diwali involves a series of beautiful rituals that fill the home with light and joy. The main event is the Lakshmi Puja.</p>
                                            <div>
                                                <h3 className="font-bold text-lg mb-2">Step-by-Step Lakshmi Puja:</h3>
                                                <ul className="space-y-4 pl-4 prose max-w-none">
                                                     <li className="flex items-start">
                                                        <span className="font-bold text-primary mr-3">1.</span>
                                                        <div>
                                                            <h4 className="font-bold">Clean and Decorate</h4>
                                                            <p className="text-foreground/80">Thoroughly clean your home and decorate it with rangoli, flowers, and strings of light. A clean, beautiful home is believed to welcome Goddess Lakshmi.</p>
                                                        </div>
                                                    </li>
                                                     <li className="flex items-start">
                                                        <span className="font-bold text-primary mr-3">2.</span>
                                                        <div>
                                                            <h4 className="font-bold">Light Diyas</h4>
                                                            <p className="text-foreground/80">Light countless diyas (earthen lamps) and place them in every corner of your home to banish darkness and evil spirits.</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="font-bold text-primary mr-3">3.</span>
                                                        <div>
                                                            <h4 className="font-bold">Perform Puja</h4>
                                                            <p className="text-foreground/80">Perform the Lakshmi Puja in the evening. Worship Goddess Lakshmi for wealth and Lord Ganesha to remove obstacles. Offer flowers, sweets, and prayers.</p>
                                                        </div>
                                                    </li>
                                                     <li className="flex items-start">
                                                        <span className="font-bold text-primary mr-3">4.</span>
                                                        <div>
                                                            <h4 className="font-bold">Exchange Gifts & Sweets</h4>
                                                            <p className="text-foreground/80">Share joy and goodwill by exchanging sweets and gifts with family, friends, and neighbors.</p>
                                                        </div>
                                                    </li>
                                                     <li className="flex items-start">
                                                        <span className="font-bold text-primary mr-3">5.</span>
                                                        <div>
                                                            <h4 className="font-bold">Enjoy Fireworks</h4>
                                                            <p className="text-foreground/80">Celebrate the triumph of light with firecrackers, though many now opt for more eco-friendly celebrations.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                         <div className="not-prose my-10">
                                            <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Get Ready for the Celebration</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                                <ProductCard product={products.rangoliMat} />
                                                <ProductCard product={products.rajasthanKraftToran} />
                                                <ProductCard product={products.jhGalleryCandleHolder} />
                                                <ProductCard product={products.swahaCowGheeDiya} />
                                            </div>
                                        </div>
                                    </section>

                                    <section id="recipes" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Festival Foods & Delicacies</h2>
                                        <p className="mb-6 text-foreground/80 prose max-w-none">Diwali is a time for feasting, where kitchens come alive with the aroma of spices and sweets. Families prepare an array of 'mithai' (sweets) and savory snacks to share. Here are some quintessential Diwali dishes.</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {recipes.map(recipe => (
                                               <Link href={recipe.link} key={recipe.name}>
                                                    <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                                                        <CardContent className="p-4">
                                                            <h3 className="font-headline text-xl font-bold text-center text-primary h-14 flex items-center justify-center">{recipe.name}</h3>
                                                        </CardContent>
                                                    </Card>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="text-center mt-6">
                                            <Link href="/recipes" className="text-accent hover:underline font-semibold">
                                                Find more Diwali recipes &rarr;
                                            </Link>
                                        </div>
                                    </section>
                                     <section id="chants" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Important Mantras and Chants</h2>
                                        <div className="space-y-6">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Lakshmi Ashtottara Shatanamavali</CardTitle>
                                                    <p className="text-sm text-muted-foreground">108 Names of Goddess Lakshmi</p>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-lg font-serif italic">"Om Prakrityai Namah, Om Vikrityai Namah..."</p>
                                                    <p className="mt-2 text-foreground/80">Chanting the 108 names of Goddess Lakshmi is a powerful way to invoke her blessings for prosperity, wealth, and well-being.</p>
                                                </CardContent>
                                            </Card>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Kuber Mantra</CardTitle>
                                                    <p className="text-sm text-muted-foreground">For Wealth and Fortune</p>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-lg font-serif italic">"Om Yakshaya Kuberaya Vaishravanaya Dhanadhanyadhipataye, Dhanadhanyasamriddhim Me Dehi Dapaya Swaha"</p>
                                                    <p className="mt-2 text-foreground/80">This mantra is chanted to seek the blessings of Lord Kuber, the treasurer of the gods, for material wealth and success.</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </section>
                                    <section id="eco-friendly" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Celebrating a Green Diwali</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Celebrate the festival of lights while being mindful of Mother Earth. A few small changes can make a big difference in reducing the environmental impact of the festivities.</p>
                                            <ul className="space-y-4 pl-4">
                                                <li className="flex items-start">
                                                    <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                                    <div>
                                                        <h4 className="font-bold">Choose Earthen Lamps</h4>
                                                        <p>Opt for traditional clay diyas instead of plastic, electric lights. They are biodegradable and support local artisans. You can even paint them yourself for a personal touch.</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                                    <div>
                                                        <h4 className="font-bold">Natural Rangoli</h4>
                                                        <p>Create beautiful rangoli using natural colors like rice flour, turmeric, coffee powder, and flower petals instead of synthetic powders that contain harmful chemicals.</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                                    <div>
                                                        <h4 className="font-bold">Say No to Crackers</h4>
                                                        <p>Fireworks cause significant air and noise pollution, which is harmful to humans, animals, and the environment. Celebrate with light, not noise. Consider organizing a community light show or a laser show instead.</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                                    <div>
                                                        <h4 className="font-bold">Eco-Friendly Gifting</h4>
                                                        <p>Wrap gifts in newspaper or cloth instead of plastic-based wrappers. Gift plants, handmade sweets, or eco-friendly products to your loved ones.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                </article>

                                <ShareButtons title="Diwali" />
                                <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
