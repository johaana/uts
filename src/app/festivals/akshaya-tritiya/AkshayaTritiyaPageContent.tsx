'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";

const recipes = [
    { name: "Sweet Pongal", link: "/recipes/sakkarai-pongal" },
    { name: "Payasam", link: "/recipes/payasam" },
]

const pageContent = [
    {
        value: "overview",
        title: "Overview",
        icon: BookOpen,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">The Promise of Never-Diminishing Prosperity</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Akshaya Tritiya, celebrated on the third lunar day of the bright half of the Vaishakha month, is revered as one of the most auspicious and powerful days in the Hindu calendar. The very name of the festival holds its promise: 'Akshaya' in Sanskrit means 'never diminishing', 'imperishable', or 'eternal'. The day is believed to be imbued with a unique divine energy that ensures that any venture started, any investment made, or any act of charity performed on this day will be blessed with everlasting prosperity and success. It is a day that is free from all malefic effects, a perfect celestial alignment for new beginnings.</p>
                    <p>The day is incredibly rich with mythological significance, woven with tales of divine boons and auspicious events. It is celebrated as the birthday of Lord Parashurama, the sixth powerful incarnation of Lord Vishnu. It is also believed to be the day when the Treta Yuga, the second of the four great epochs in Hindu cosmology, began. It was on Akshaya Tritiya that the sacred river Ganga descended to Earth from the heavens. A particularly famous tale associated with this day is that of Lord Krishna and his impoverished childhood friend, Sudama. On this very day, Sudama visited Krishna with a humble gift of puffed rice, the only thing he had to offer. In return for this simple act of devotion, Krishna blessed him with immense and inexhaustible wealth. This story powerfully reinforces the core belief of Akshaya Tritiya: that acts of devotion and charity, no matter how small, yield manifold and unending rewards.</p>
                </div>
            </>
        )
    },
    {
        value: "traditions",
        title: "Traditions",
        icon: Sparkles,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">How to Observe Akshaya Tritiya</h2>
                <ul className="space-y-4 pl-4">
                    <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                        <div>
                            <h4 className="font-bold">Purchasing Gold</h4>
                            <p className="text-foreground/80">One of the most popular traditions is buying gold, as it is believed to symbolize wealth and is thought to never diminish if purchased on this day.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                        <div>
                            <h4 className="font-bold">Charity (Daan)</h4>
                            <p className="text-foreground/80">Giving to charity is a key ritual. It is believed that 'daan' (donations) made on this day brings inexhaustible merit.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                        <div>
                            <h4 className="font-bold">Starting New Ventures</h4>
                            <p className="text-foreground/80">The day is considered perfect for starting new businesses, construction projects, or any significant new beginning.</p>
                        </div>
                    </li>
                </ul>
            </>
        )
    },
    {
        value: "recipes",
        title: "Foods",
        icon: Utensils,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">Auspicious Foods</h2>
                <p className="mb-6 text-foreground/80 prose max-w-none">Foods prepared on Akshaya Tritiya are typically simple, sattvic (pure), and often yellow or white in color, symbolizing prosperity and purity.</p>
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
            </>
        )
    },
    {
        value: "chants",
        title: "Chants",
        icon: MessageSquareQuote,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">Mantras for Prosperity</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Lakshmi Mantra</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg font-serif italic">"Om Shreem Hreem Shreem Kamale Kamalalaye Praseed Praseed, Om Shreem Hreem Shreem Mahalakshmaye Namah"</p>
                            <p className="mt-2 text-foreground/80">Chanting mantras dedicated to Goddess Lakshmi, the goddess of wealth, is a common practice to invite prosperity into the home.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function AkshayaTritiyaPageContent() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const pageSections = pageContent.map(item => ({
        id: item.value,
        title: item.title,
        icon: item.icon,
    }));

    return (
        <>
            <div className="mb-10 p-4 border-l-4 border-primary bg-primary/5">
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
            <article className="space-y-12">
                {pageContent.map((section) => (
                    <section key={section.value} id={section.value}>
                        {section.content}
                    </section>
                ))}
            </article>
        </>
    );
}
