
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, Music } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Celebrations", icon: Sparkles },
    { id: "music", title: "Music & Dance", icon: Music },
];

export default function YaoshangPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-pink-500/10">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image src="https://i.postimg.cc/X7rc60G5/Yaoshang1.webp" alt="Yaoshang festival" layout="fill" objectFit="cover" data-ai-hint="manipur festival" />
                </div>
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-pink-900 drop-shadow-lg">Yaoshang</h1>
                    <p className="text-xl md:text-2xl mt-4 text-pink-800/90 drop-shadow-md">The Holi of Manipur</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">A Five-Day Extravaganza</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Yaoshang is widely considered to be the most important festival of Manipur, celebrated with immense zeal and fervor. Often called the 'Holi of Manipur' due to its timing and the tradition of playing with colors, Yaoshang is a vibrant five-day extravaganza that commences on the full moon day of the Phalguna month (February/March). While it coincides with Holi, Yaoshang has its own unique customs and a deeper cultural significance for the Meitei people of Manipur, blending indigenous Meitei traditions with elements of Vaishnavite Hinduism. It's a time of great joy, community bonding, cultural expression, and sporting spirit, making it a unique celebration in the Indian festival landscape.</p>
                                </div>
                            </section>
                            
                            <section id="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Unique Customs</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The festival kicks off in the evening with 'Yaoshang Meithaba', the burning of a symbolic thatch hut, which is similar in spirit to the Holika Dahan of North India. A unique and charming tradition of Yaoshang is 'Nakatheng', where children, dressed in their finest, go from house to house to collect monetary donations, which they use for their festive expenses. In a significant departure from other festivals, Yaoshang has evolved to become a major platform for sports. Local clubs and communities organize a wide range of sporting events, from football and athletics to tug-of-war, encouraging a spirit of friendly competition and physical fitness among the youth. And, of course, the festival is also marked by the joyous playing with 'abeer' (colored powder) and water, bringing everyone together in a spirit of fun and camaraderie.</p>
                                </div>
                            </section>

                             <section id="music">
                                <h2 className="font-headline text-3xl font-bold mb-4">Thabal Chongba</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>The Moonlight Dance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                                <div className="md:w-2/3">
                                                    <p className="text-foreground/80">'Thabal Chongba', which translates to 'dancing in the moonlight', is a traditional Manipuri folk dance that is the pulsating heart of Yaoshang celebrations. In the evenings, young boys and girls from different localities gather in open grounds under the full moon. They join hands, form a circle, and dance together to the rhythmic beat of folk music, particularly the dholak (drum). This dance, which allows young people to meet and socialize, is a beautiful, lively, and inclusive celebration of community, spring, and togetherness.</p>
                                                </div>
                                                <div className="md:w-1/3">
                                                    <Image src="https://i.postimg.cc/cLm7G7MK/Thabal-chongba.jpg" alt="Thabal Chongba Dance" width={300} height={200} className="rounded-lg shadow-lg w-full" data-ai-hint="manipuri folk dance" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="not-prose my-10">
                                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Get in the Festive Spirit</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
                                        <ProductCard product={products.rangoliPowder} />
                                        <ProductCard product={products.rangoliMat} />
                                    </div>
                                </div>
                            </section>
                        </article>
                        <ShareButtons title="Yaoshang" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
