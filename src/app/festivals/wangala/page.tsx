
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Music, Drum, Utensils } from "lucide-react";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";
import { ShareButtons } from "@/components/ShareButtons";

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Celebrations", icon: Drum },
];

export default function WangalaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/zBTV50wT/wangala.webp" alt="Wangala Festival" layout="fill" objectFit="cover" data-ai-hint="garo dance" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-900 drop-shadow-lg">Wangala Festival</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">The Hundred Drums Festival</p>
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
                                 <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:order-2 md:w-1/3">
                                        <Image src="https://i.postimg.cc/cJprVV3s/wangala2.jpg" alt="Wangala Dance" width={400} height={400} className="rounded-lg shadow-lg w-full" data-ai-hint="garo dance"/>
                                    </div>
                                    <div className="md:order-1 md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">A Garo Tribe Celebration</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Wangala, also famously known as the 'Hundred Drums Festival', is a major post-harvest festival of the Garo tribe, who reside in Meghalaya, Nagaland, and Assam. It marks the end of the agricultural year and is a time of thanksgiving to the Sun God of fertility, Misi-A-Gilpa-Saljong-Galapa.</p>
                                            <p>The festival is a vibrant showcase of Garo culture, filled with music, dance, and feasting. The dates for Wangala vary from village to village and are typically held between September and December. It's a time for the community to come together and celebrate the fruits of their labor.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            <section id="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Music, Dance, and Feasting</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <Music className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Hundred Drums</h4>
                                            <p className="text-foreground/80">The highlight of the festival is the rhythmic and energetic dance performed by men, beating long, oval-shaped drums. The sound of a hundred drums echoing at once gives the festival its famous name.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Utensils className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Rice Beer and Festive Foods</h4>
                                            <p className="text-foreground/80">Various food items made from rice, a staple in the region, are prepared. A special rice beer, known as 'chubitchi' or 'chubok', is also brewed and consumed during the festivities.</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="not-prose my-10">
                                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Get the Festive Look</h3>
                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
                                        <ProductCard product={products.anumalaJuteBag} />
                                        <ProductCard product={products.doubleRCanvasBag} />
                                    </div>
                                </div>
                            </section>
                        </article>
                         <ShareButtons title="Wangala Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
