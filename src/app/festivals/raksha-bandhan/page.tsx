import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Kaju Katli", image: "https://images.unsplash.com/photo-1574263539400-38823b2b8315?q=80&w=400&h=300&fit=crop", hint: "cashew fudge", link: "/recipes/kaju-katli" },
    { name: "Ladoo", image: "https://images.unsplash.com/photo-1598164879222-74d324976134?q=80&w=400&h=300&fit=crop", hint: "gram flour sweet", link: "/recipes/ladoo" },
    { name: "Coconut Barfi", image: "https://images.unsplash.com/photo-1606550212039-9b76e2c9e7a2?q=80&w=400&h=300&fit=crop", hint: "coconut fudge", link: "/recipes/coconut-barfi" },
]

export default function RakshaBandhanPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://images.unsplash.com/photo-1597753258833-66881a535496?q=80&w=1600&h=800&fit=crop" alt="Raksha Bandhan" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="rakhi celebration"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Raksha Bandhan</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Sacred Thread of Protection</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
                                <TabsTrigger value="overview"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="chants"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Bond of Siblinghood</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Raksha Bandhan, meaning 'the bond of protection', is a heartwarming festival that celebrates the pure and cherished relationship between brothers and sisters. At its heart is a simple yet profound ritual: a sister ties a sacred thread, or 'rakhi', on her brother's wrist. This thread is not merely decorative; it is a powerful symbol of her love, prayers for his well-being, and her faith in his protection. In return, the brother presents her with a gift and takes a solemn vow to protect her from all harm, for all his life. This beautiful exchange transcends the material, reinforcing the deep-seated emotional ties that form the bedrock of a family.</p>
                                    <p>The festival's roots run deep into mythology and history. One of the most famous stories is that of Lord Krishna and Draupadi. When Krishna cut his finger, Draupadi tore a piece from her saree and tied it around the wound to stop the bleeding. Touched by her gesture, Krishna promised to protect her always, a promise he fulfilled by miraculously elongating her saree to save her from dishonor in the court of the Kauravas. Another tale tells of Rani Karnavati of Chittor, who sent a rakhi to the Mughal Emperor Humayun, seeking his protection from an invasion. Though he couldn't arrive in time, the story stands as a testament to the fact that the bond of Rakhi can extend beyond blood relations, uniting people in a relationship of love and responsibility.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Rakhi Ceremony</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Tie the Rakhi</h4>
                                            <p className="text-foreground/80">The sister ties the rakhi on her brother's wrist while chanting a prayer for his long life and happiness.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Exchange Sweets and Gifts</h4>
                                            <p className="text-foreground/80">After the rakhi is tied, sweets are exchanged. The brother gives his sister a gift as a token of his love and promise of protection.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Sweet Treats for Siblings</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recipes.map(recipe => (
                                        <Link href={recipe.link} key={recipe.name}>
                                            <Card className="overflow-hidden h-full">
                                                <Image src={recipe.image} alt={recipe.name} width={400} height={300} className="w-full h-40 object-cover" data-ai-hint={recipe.hint}/>
                                                <CardContent className="p-4">
                                                    <h3 className="font-headline text-xl font-bold text-center">{recipe.name}</h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Sacred Mantras</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Raksha Sutra Mantra</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Yena baddho Baliraja danavendro mahabalah, tena twam anubadhnami rakshe ma chala ma chala."</p>
                                            <p className="mt-2 text-foreground/80">**Translation:** "I tie upon you the same rakhi with which the most powerful and generous King Bali was bound. O Rakhi, please do not be unstable." This ancient mantra from the scriptures is chanted by the sister, invoking the power of the sacred thread to protect her brother from all harm.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
