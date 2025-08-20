
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "The Ritual", icon: Sparkles },
    { id: "significance", title: "Significance", icon: MessageSquareQuote },
];


export default function VatPurnimaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/02SFNXSc/vat-purnima.webp" alt="Vat Purnima" layout="fill" objectFit="cover" data-ai-hint="banyan tree worship" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-900 drop-shadow-lg">Vat Purnima</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">The Banyan Tree Vow</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
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
                            <section id="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Legend of Savitri and Satyavan</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Vat Purnima, also known as Vat Savitri Vrat, is a traditional Hindu festival celebrated by married women in Western and parts of Southern India. It is observed on the full moon day (Purnima) of the Hindu month of Jyeshtha. The festival is a celebration of marital fidelity, love, and the devotion of a wife towards her husband. It is inspired by the legendary story of Savitri, whose unwavering devotion and cleverness saved her husband, Satyavan, from the clutches of Yama, the god of death.</p>
                                    <p>According to the Mahabharata, the noble princess Savitri chose to marry Satyavan, a humble woodcutter, despite being warned by the sage Narada that he was destined to die in one year. When the fateful day arrived, Savitri followed Satyavan into the forest. As he fell, Yama appeared to claim his soul. Unwilling to give up, Savitri followed Yama, engaging him in a respectful and intelligent dialogue. Impressed by her wisdom and devotion, Yama granted her several boons, and she cleverly used them to trick him into returning Satyavan's life. The banyan tree ('Vat' vriksha) is central to this story, as it was under a banyan tree that Satyavan died and was brought back to life.</p>
                                </div>
                            </section>
                            
                            <section id="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Worshipping the Banyan Tree</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>On the day of Vat Purnima, married women observe a fast for the long life and well-being of their husbands. They dress in beautiful bridal attire and gather around a banyan tree. The main ritual involves tying a sacred white or yellow thread around the trunk of the banyan tree while circumambulating it seven times. This act symbolizes their prayer for their husband's longevity to be as long-lasting as the life of the tree itself. They offer water, flowers, and fruits to the tree and listen to the story of Savitri and Satyavan, drawing inspiration from her unwavering commitment.</p>
                                </div>
                                <div className="not-prose my-10">
                                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Puja Items</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                        <ProductCard product={products.spillboxThali} />
                                        <ProductCard product={products.bengalenThali8Inch} />
                                        <ProductCard product={products.indianArtVillaThali} />
                                    </div>
                                </div>
                            </section>

                             <section id="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of a Wife's Devotion</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Symbolism of the Banyan Tree</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The banyan tree holds great significance in Hinduism, symbolizing longevity, divinity, and the Trimurti (Brahma, Vishnu, and Shiva). By worshipping the tree, women seek its blessings for a long and prosperous married life. Vat Purnima is a powerful celebration of love, intelligence, and the strength of a wife's devotion, which is believed to be powerful enough to conquer even death.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>
                        </article>
                        <ShareButtons title="Vat Purnima" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
