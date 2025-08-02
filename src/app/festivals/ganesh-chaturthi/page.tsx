import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Modak", image: "https://images.unsplash.com/photo-1625391029258-a53655383921?q=80&w=400&h=300&fit=crop", hint: "sweet dumpling", link: "/recipes/modak" },
    { name: "Puran Poli", image: "https://images.unsplash.com/photo-1625391029258-a53655383921?q=80&w=400&h=300&fit=crop", hint: "sweet flatbread", link: "/recipes/puran-poli" },
    { name: "Ladoo", image: "https://images.unsplash.com/photo-1613542911293-9a572a135316?q=80&w=400&h=300&fit=crop", hint: "chickpea sweet", link: "/recipes/ladoo" },
]

export default function GaneshChaturthiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://i.postimg.cc/Vrm8pqKj/ganpati1.jpg" alt="Ganesh Chaturthi celebration" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="ganesha idol festival"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Ganesh Chaturthi</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">Celebrating the Birth of the Elephant God</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6">
                                <TabsTrigger value="overview"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="chants"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                                <TabsTrigger value="eco-friendly"><Leaf className="w-4 h-4 mr-2" />Eco-Friendly</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Story of Ganesh Chaturthi</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Ganesh Chaturthi is a spectacular festival that celebrates the birth of Lord Ganesha, the beloved elephant-headed son of Shiva and Parvati. Revered as the god of wisdom, prosperity, and good fortune, and the remover of obstacles ('Vighnaharta'), Ganesha's birth is a story of divine creation and devotion. Legend has it that Goddess Parvati created Ganesha from sandalwood paste to guard her chambers. When Lord Shiva returned and was denied entry by the boy, a fierce battle ensued, and Shiva, in his rage, severed Ganesha's head. A distraught Parvati explained what had happened, and a remorseful Shiva promised to bring the boy back to life, replacing his head with that of the first living creature he could find—an elephant.</p>
                                    <p>The festival was transformed from a private, household celebration into a grand public event by the freedom fighter Lokmanya Tilak in the late 19th century. He envisioned it as a way to bridge the gap between different castes and unite the people of India against British rule. Today, the festival is celebrated with immense fervor, especially in Maharashtra. Devotees bring home beautifully crafted clay idols of Ganesha, worshipping him for ten days with prayers, songs, and his favorite sweet, 'modak'. The festival culminates in the 'visarjan' (immersion) ceremony, where the idol is carried in a grand procession to a nearby body of water. This symbolizes Ganesha's journey back to his celestial abode, taking with him the misfortunes of his devotees and promising to return the following year.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Ganesh Chaturthi</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Idol Installation (Sthapana)</h4>
                                            <p className="text-foreground/80">Bring a clay idol of Lord Ganesha home and place it on a decorated platform. Perform a ritual to invoke his presence in the idol.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Daily Worship (Puja)</h4>
                                            <p className="text-foreground/80">Offer daily prayers, flowers, and Ganesha's favorite sweet, 'modak'. Light lamps and incense, and perform aarti (a ritual of waving lights).</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Immersion (Visarjan)</h4>
                                            <p className="text-foreground/80">After 1, 3, 5, 7, or 10 days, the idol is taken in a grand procession for immersion in a river or the sea, accompanied by singing and dancing.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Ganesha's Favorite Foods</h2>
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
                                 <div className="text-center mt-6">
                                    <Link href="/recipes" className="text-accent hover:underline font-semibold">
                                        Find more festive recipes &rarr;
                                    </Link>
                                </div>
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Invocations to Ganesha</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Jai Ganesh Deva Aarti</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="prose prose-sm max-w-none text-foreground/80">
                                                <p className="italic">Jai Ganesh, Jai Ganesh, Jai Ganesh Deva. Mata Jaaki Parvati, Pita Mahadeva.</p>
                                                <p className="italic">Ek Dant Dayavant, Chaar Bhuja Dhaari. Maathe Pe Sindhoor Sohe, Muse Ki Savari.</p>
                                                <p className="italic">Paan Chadhe, Phool Chadhe, Aur Chadhe Meva. Ladduan Ka Bhog Lage, Sant Karein Seva.</p>
                                                <p className="italic">Andhan Ko Aankh Det, Kodhin Ko Kaaya. Baanjhan Ko Putra Det, Nirdhan Ko Maaya.</p>
                                                <p className="italic">'Soor' Shyaam Sharan Aaye, Safal Kije Seva. Jai Ganesh, Jai Ganesh, Jai Ganesh Deva.</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Vakratunda Mahakaya Mantra</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva Sarva-Kaaryeshu Sarvada."</p>
                                            <p className="mt-2 text-foreground/80">This powerful mantra describes Ganesha's form and seeks his blessings to make all endeavors free of obstacles.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                             <TabsContent value="eco-friendly">
                                <h2 className="font-headline text-3xl font-bold mb-4">Celebrating a Green Ganesh Chaturthi</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Welcome Lord Ganesha into your home in an environmentally conscious way. Here’s how you can make your celebrations sustainable.</p>
                                    <ul className="space-y-4 pl-4">
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Choose a Clay Ganesha Idol</h4>
                                                <p>Opt for idols made from natural, unbaked clay (shadu mati) instead of Plaster of Paris (PoP). PoP idols contain harmful chemicals that pollute water bodies. Clay idols dissolve easily in water.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Symbolic Immersion (Visarjan)</h4>
                                                <p>Immerse your clay idol at home in a bucket or a drum. The dissolved clay can then be used in your garden. This prevents the pollution of natural water bodies.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Natural Decorations</h4>
                                                <p>Use fresh flowers, leaves, and cloth for decorations instead of plastic and thermocol. These materials are biodegradable and look beautiful.</p>
                                            </div>
                                        </li>
                                         <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Reduce Waste</h4>
                                                <p>Minimize waste by using reusable plates and cutlery for serving prasad. Compost flower offerings and other organic materials after the puja.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
