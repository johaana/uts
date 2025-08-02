import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Modak", link: "/recipes/modak" },
    { name: "Puran Poli", link: "/recipes/puran-poli" },
    { name: "Ladoo", link: "/recipes/ladoo" },
]

export default function GaneshChaturthiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                 <Image src="https://i.postimg.cc/vBZvvbrW/prchi-palwe-Wci-Kb-LIFGxc-unsplash.jpg" alt="Ganesh Idol" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="ganesha idol" />
                <div className="relative text-center text-primary-foreground z-10">
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
                                <TabsTrigger value="chants"><MessageSquareQuote className="w-4 h-4 mr-2" />Aartis</TabsTrigger>
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
                                            <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                                                <CardContent className="p-4">
                                                    <h3 className="font-headline text-xl font-bold text-center text-primary">{recipe.name}</h3>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">Marathi Aartis for Lord Ganesha</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Sukhkarta Dukhharta</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="prose prose-sm max-w-none text-foreground/80">
                                                <p className="italic">Sukhkarta Dukhharta Varta Vighnachi, Nurvi Purvi Prem Krupa Jayachi</p>
                                                <p className="italic">Sarvangi Sundar Uti Shendurachi, Kanti Jhalke Mal Mukataphalaanchi</p>
                                                <p className="italic">Jaidev Jaidev Jai Mangal Murti, Darshan Matre Manokamana Purti</p>
                                                <br/>
                                                <p className="italic">Ratnakhachit Phara Tujh Gaurikumra, Chandanachi Uti Kumkum Keshara</p>
                                                <p className="italic">Hirejadit Mukut Shobhato Bara, Runjhunati Nupure Charani Ghagaria</p>
                                                <p className="italic">Jaidev Jaidev Jai Mangal Murti, Darshan Matre Manokamana Purti</p>
                                                <br/>
                                                <p className="italic">Lambodar Pitambar Phanivarvandana, Saral Sond Vakratunda Trinayana</p>
                                                <p className="italic">Das Ramacha Vat Pahe Sadana, Sankati Pavave Nirvani Rakshave Survarvandana</p>
                                                <p className="italic">Jaidev Jaidev Jai Mangal Murti, Darshan Matre Manokamana Purti</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Shendur Lal Chadhayo</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="prose prose-sm max-w-none text-foreground/80">
                                                <p className="italic">Shendur laal chadhaayo achchhaa gajamukha ko</p>
                                                <p className="italic">Dondil laal biraaje sut gaurihar ko</p>
                                                <p className="italic">Hath liye gud laddu saai survarko</p>
                                                <p className="italic">Mahimaa kahe na jaay laagat hun pad ko</p>
                                                <br/>
                                                <p className="italic">Jay dev, jay dev</p>
                                                <br/>
                                                <p className="italic">Jay jay jay jay jay jay jay ganeshaji</p>
                                                <p className="italic">Jay jay jay jay jay jay jay ganeshaji</p>
                                                <br/>
                                                <p className="italic">Ghaalin lotangan vandin charan, Dolyanni paahin rup tujhe</p>
                                                <p className="italic">Preme alingin anande pujin, Bhave ovalin mhane nama</p>
                                                <p className="italic">Tvamev mata, pita tvamev, Tvamev bandhushch sakha tvamev</p>
                                                <p className="italic">Tvamev vidya, dravinm tvamev, Tvamev sarvm mam dev dev</p>
                                                <br/>
                                                <p className="italic">Kayen vacha manasendriyenva, Buddhayatmna va prakrutiswabhavat</p>
                                                <p className="italic">Karomi yadyat sakalm parasmai, Narayanayeti samarpayami</p>
                                                <p className="italic">Achyutm keshvm ramnarayanm, krushanadamodarm vasudevm hari</p>
                                                <p className="italic">Shri dharam madhavm gopikavallabham, janakinayakm ramchandram bhaje</p>
                                            </div>
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
