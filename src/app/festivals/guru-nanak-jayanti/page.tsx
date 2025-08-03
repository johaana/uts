
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Karah Prasad", link: "/recipes/karah-prasad" },
    { name: "Langar Dal", link: "/recipes/langar-dal" },
    { name: "Aloo Gobi", link: "/recipes/aloo-gobi" },
]

export default function GuruNanakJayantiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                 <Image src="https://i.postimg.cc/yNnXWvzp/gurunanak-jayanti2.avif" alt="Guru Nanak Jayanti" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="sikh festival" />
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Guru Nanak Jayanti</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">Celebrating the Founder of Sikhism</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes" className="py-2"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="hymns" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Hymns</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Life and Teachings of Guru Nanak Dev Ji</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Guru Nanak Jayanti, also known as Gurpurab, is one of the most sacred festivals in Sikhism, a day of profound reverence celebrating the birth of the first Sikh Guru, Guru Nanak Dev Ji. Born in 1469 in the village of Talwandi (now Nankana Sahib, Pakistan), Guru Nanak was a revolutionary spiritual teacher whose wisdom illuminated a path of truth and equality for all of humanity. He preached a simple yet powerful message of 'Ik Onkar' (One God), emphasizing that the same divine light resides in every person, regardless of their caste, creed, or gender.</p>
                                    <p>At a time of great social and religious strife, Guru Nanak challenged the rigid structures of society, speaking out against the oppressive caste system, meaningless rituals, and religious hypocrisy. His teachings, which form the bedrock of Sikhism, are enshrined in the holy scripture, the Guru Granth Sahib. He was not a Guru who stayed in one place; instead, he undertook four long and arduous spiritual journeys, known as 'Udasis', traveling thousands of miles on foot across Asia to spread his message of peace, compassion, and selfless service. The celebration of his birth is a time for Sikhs and admirers worldwide to reflect on his timeless teachings, to remember his life of humble service, and to recommit themselves to the path of spiritual wisdom and social responsibility that he so beautifully laid down.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Gurpurab</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Akhand Path</h4>
                                            <p className="text-foreground/80">Two days before the festival, a forty-eight-hour non-stop reading of the Guru Granth Sahib, the holy book of the Sikhs, is held in Gurdwaras.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Nagar Kirtan</h4>
                                            <p className="text-foreground/80">A day before the birthday, a procession known as Nagar Kirtan is organized, led by the Panj Pyare (Five Beloved Ones), carrying the Sikh flag and the Guru Granth Sahib in a palanquin.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Langar (Community Kitchen)</h4>
                                            <p className="text-foreground/80">Special community lunches are organized at Gurdwaras, where people from all backgrounds are served free meals by volunteers. This embodies the principle of selfless service and equality.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Langar Delicacies</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recipes.map(recipe => (
                                        <Link href={recipe.link || "#"} key={recipe.name}>
                                            <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                                                <CardContent className="p-4">
                                                    <h3 className="font-headline text-xl font-bold text-center text-primary h-14 flex items-center justify-center">{recipe.name}</h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </TabsContent>

                             <TabsContent value="hymns">
                                <h2 className="font-headline text-3xl font-bold mb-4">Shabads & Hymns</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Gurbani Kirtan</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">On the day of Gurpurab, the celebrations begin early with the singing of Asa-di-Var (morning hymns), followed by the singing of Shabads (hymns) from the Sikh scriptures in praise of the Guru. This devotional music, known as Kirtan, fills the Gurdwaras with a peaceful and spiritual atmosphere.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Mool Mantar</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Ik Onkar, Satnam, Karta Purakh, Nirbhau, Nirvair, Akal Murat, Ajuni Saibhang, Gur Prasad."</p>
                                            <p className="mt-2 text-foreground/80">The Mool Mantar, the opening lines of the Guru Granth Sahib composed by Guru Nanak, encapsulates the core tenets of Sikh philosophy about the nature of God. It is one of the most important compositions in Sikhism.</p>
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
