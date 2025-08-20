
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "legacy", title: "Legacy", icon: Sparkles },
];

export default function GuruGobindSinghJayantiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-orange-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/3x9jQJr3/Guru-Gobind-Singh-jayanti.jpg" alt="Guru Gobind Singh" layout="fill" objectFit="cover" data-ai-hint="sikh guru" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-orange-900 drop-shadow-lg">Guru Gobind Singh Jayanti</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-orange-800/90 drop-shadow-md">Celebrating the Tenth Sikh Guru</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">A Warrior, Poet, and Philosopher</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Guru Gobind Singh Jayanti celebrates the birth of the tenth Sikh Guru, a revered spiritual master, warrior, poet, and philosopher. He was a pivotal figure in Sikh history, known for his immense courage and his contributions to the faith. He established the Khalsa, a warrior community, and introduced the Five Ks, the articles of faith that Sikhs wear. His life was dedicated to fighting against oppression and upholding justice and equality.</p>
                                </div>
                            </section>
                            
                             <section id="legacy">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Eternal Guru</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>The Guru Granth Sahib</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">One of Guru Gobind Singh's most significant acts was declaring the Guru Granth Sahib, the holy scripture of Sikhism, as the eternal living Guru for the Sikhs. Celebrations on his Jayanti include prayer meetings, processions (Nagar Kirtan), and the singing of devotional hymns (kirtan) in Gurdwaras. His teachings on bravery, compassion, and devotion continue to inspire millions.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="not-prose my-10">
                                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Gurpurab Essentials</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
                                        <ProductCard product={products.bengalenThali8Inch} />
                                        <ProductCard product={products.spillboxThali} />
                                    </div>
                                </div>
                            </section>
                        </article>
                        
                        <ShareButtons title="Guru Gobind Singh Jayanti" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
