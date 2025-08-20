
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Observances", icon: Sparkles },
];

export default function BuddhaPurnimaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-100/20">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image src="https://i.postimg.cc/L438TyHZ/buddha-purnima.webp" alt="Buddha Purnima" layout="fill" objectFit="cover" data-ai-hint="buddha statue" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Buddha Purnima</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">Celebrating the Life of the Enlightened One</p>
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
                                    <div className="md:w-2/3">
                                <h2 className="font-headline text-3xl font-bold mb-4">Birth, Enlightenment, and Nirvana</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Buddha Purnima, also known as Vesak, is the most sacred day for Buddhists worldwide. It commemorates three significant events in the life of Siddhartha Gautama, the Lord Buddha, which all auspiciously occurred on the full moon day of the Vaisakha month: his birth in Lumbini, his enlightenment (Nirvana) under the Bodhi tree in Bodh Gaya, and his passing (Parinirvana) in Kushinagar.</p>
                                    <p>This "thrice-blessed" day is a time for peace, reflection, and compassion. Buddhists reflect on the Buddha's teachings of the Four Noble Truths and the Eightfold Path, which offer a guide to ending suffering and achieving peace.</p>
                                </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/yxj68NfT/Buddha-Purnima.png" alt="Siddhartha Gautama" width={400} height={400} className="rounded-lg shadow-lg w-full" data-ai-hint="buddha illustration"/>
                                    </div>
                                </div>
                            </section>
                            
                             <section id="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day of Peace and Compassion</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Spiritual Observances</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">On Buddha Purnima, devotees visit monasteries and temples to listen to sermons, meditate, and offer prayers. Homes are cleaned and decorated, and people wear white clothes to symbolize purity. Many observe a vegetarian diet and engage in acts of charity, such as giving food and clothes to the poor, embodying the Buddha's teachings of compassion and kindness towards all living beings.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                 <div className="not-prose my-10">
                                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Items for a Serene Puja</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                        <ProductCard product={products.signamioDhoopStand} />
                                        <ProductCard product={products.sandalwoodHavanCups} />
                                        <ProductCard product={products.handicraftsParadiseChowki} />
                                    </div>
                                </div>
                            </section>
                        </article>
                        <ShareButtons title="Buddha Purnima" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
