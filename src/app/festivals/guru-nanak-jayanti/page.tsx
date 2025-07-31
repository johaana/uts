import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Karah Prasad", image: "https://images.unsplash.com/photo-1613542911293-9a572a135316?q=80&w=400&h=300&fit=crop", hint: "wheat halwa", link: "/recipes/karah-prasad" },
    { name: "Langar Dal", image: "https://images.unsplash.com/photo-1599422501066-8b43f990f133?q=80&w=400&h=300&fit=crop", hint: "lentil soup", link: "#" },
    { name: "Aloo Gobi", image: "https://images.unsplash.com/photo-1628848177430-a7d0352520da?q=80&w=400&h=300&fit=crop", hint: "potato cauliflower", link: "#" },
]

export default function GuruNanakJayantiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://images.unsplash.com/photo-1588970014102-53d7153a0604?q=80&w=1600&h=800&fit=crop" alt="Golden Temple" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="golden temple amritsar"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Guru Nanak Jayanti</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">Celebrating the Founder of Sikhism</p>
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
                                <TabsTrigger value="hymns"><MessageSquareQuote className="w-4 h-4 mr-2" />Hymns</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Life and Teachings of Guru Nanak Dev Ji</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Guru Nanak Jayanti, also known as Gurpurab, is one of the most sacred festivals in Sikhism, celebrating the birth of the first Sikh Guru, Guru Nanak Dev Ji. Born in 1469 in Talwandi (now Nankana Sahib, Pakistan), Guru Nanak was a revolutionary spiritual teacher who preached a message of 'Ik Onkar' (One God), equality, selfless service, and honest living. He challenged the existing social and religious structures, speaking out against the caste system, ritualism, and hypocrisy.</p>
                                    <p>His teachings form the fundamental beliefs of Sikhism, documented in the holy scripture, the Guru Granth Sahib. Guru Nanak undertook long journeys, known as 'Udasis', across Asia to spread his message of peace and compassion. The celebration of his birth is a time for Sikhs to reflect on his teachings, to remember his life of service, and to recommit themselves to the path of spiritual wisdom and social responsibility that he laid down. The festival is filled with devotion, humility, and a profound sense of community.</p>
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
