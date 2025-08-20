
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "The Ceremony", icon: Sparkles },
    { id: "significance", title: "Significance", icon: MessageSquareQuote },
];

export default function TulsiVivahPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-600/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/dVLB1Lgv/tulsi-vivah.jpg" alt="Tulsi Vivah" layout="fill" objectFit="cover" data-ai-hint="sacred marriage" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-green-900 drop-shadow-lg">Tulsi Vivah</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-green-800/90 drop-shadow-md">The Celestial Wedding of the Holy Basil</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">A Divine Matrimony</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Tulsi Vivah is a beautiful and unique Hindu festival that celebrates the ceremonial marriage of the Tulsi plant (Holy Basil) to the Hindu god Vishnu, in his Shaligram form. The Tulsi plant is not just a herb in Hinduism; it is revered as a goddess, an incarnation of Lakshmi, and a symbol of purity, protection, and motherhood. This celestial wedding marks the end of the monsoon season and the beginning of the auspicious Hindu wedding season.</p>
                                    <p>The festival is celebrated between Prabodhini Ekadashi (the eleventh lunar day of the bright fortnight of the Hindu month of Kartik) and Kartik Poornima (the full moon of the month). The ceremony is performed with all the rituals of a traditional Hindu wedding, turning homes and temples into miniature wedding venues.</p>
                                </div>
                            </section>
                            
                            <section id="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Wedding Rituals</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The Tulsi Vivah ceremony is a joyous affair. The Tulsi plant, representing the bride, is lovingly adorned with a small saree, jewelry, and vermilion. A makeshift 'mandap' (wedding canopy) is created around the plant. An idol or a picture of Lord Vishnu, or more traditionally, a Shaligram stone, represents the groom. The wedding rituals are performed in full, including the 'kanyadaan' (giving away the bride) and the 'saptapadi' (seven steps around the sacred fire). Devotees sing wedding songs and offer prayers. A grand vegetarian feast is prepared and shared among family and friends after the ceremony is complete.</p>
                                </div>
                                <div className="not-prose my-10">
                                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Puja Items</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
                                        <ProductCard product={products.handicraftsParadiseChowki} />
                                        <ProductCard product={products.spillboxThali} />
                                    </div>
                                </div>
                            </section>

                             <section id="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Blessings of a Happy Home</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Symbolism and Blessings</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Tulsi Vivah holds immense significance for Hindu households. Performing the marriage of Tulsi to Vishnu is believed to bestow great merit and blessings upon the family, especially the women. It is considered highly auspicious for unmarried girls seeking a good husband and for childless couples praying for progeny. The festival reinforces the sanctity of the institution of marriage and highlights the deep reverence for nature in Hindu culture, celebrating the Tulsi plant as a life-giving and divine entity.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>
                        </article>
                        <ShareButtons title="Tulsi Vivah" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
