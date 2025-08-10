
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote, Leaf, CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

const recipes = [
    { name: "Modak", link: "/recipes/modak" },
    { name: "Puran Poli", link: "/recipes/puran-poli" },
    { name: "Ladoo", link: "/recipes/ladoo" },
]

export default function GaneshChaturthiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Ganesh Chaturthi</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">Celebrating the Birth of the Elephant God</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="ten-days" className="py-2"><CalendarDays className="w-4 h-4 mr-2" />The Festival</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes" className="py-2"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="chants" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Aartis</TabsTrigger>
                                <TabsTrigger value="eco-friendly" className="py-2"><Leaf className="w-4 h-4 mr-2" />Eco-Friendly</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Story of Ganesha's Birth</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Ganesh Chaturthi is a spectacular festival that celebrates the birth of Lord Ganesha, the beloved elephant-headed son of Shiva and Parvati. Revered as the god of wisdom, prosperity, and good fortune, and the remover of obstacles ('Vighnaharta'), Ganesha's birth is a fascinating story of divine creation. Legend has it that Goddess Parvati, wanting a loyal guard for her private chambers, created a boy from the sandalwood paste on her body and breathed life into him. She instructed him not to allow anyone to enter while she bathed.</p>
                                    <p>When her husband, Lord Shiva, returned and was unexpectedly denied entry by this unknown boy, a fierce battle ensued. In his cosmic rage, not realizing the boy was Parvati's creation, Shiva severed the boy's head. When a distraught Parvati saw what had happened, her sorrow was immense. To console her, a remorseful Shiva promised to bring the boy back to life. He instructed his attendants (Ganas) to bring back the head of the first living creature they found with its head facing north. They returned with the head of a mighty elephant, which Shiva placed upon the boy's body, resurrecting him and bestowing upon him the name Ganesha, the lord of all Ganas. He was also blessed to be the first deity worshipped in any ritual, forever to be known as the remover of all obstacles.</p>
                                    <p>The festival was transformed from a private, household celebration into a grand public event by the freedom fighter Lokmanya Tilak in the late 19th century as a way to unite the people of India against British rule. Today, the festival is celebrated with immense fervor, especially in Maharashtra. Devotees bring home beautifully crafted clay idols of Ganesha, worshipping him for ten days with prayers, songs, and his favorite sweet, 'modak'. The festival culminates in the 'visarjan' (immersion) ceremony on Anant Chaturdashi, symbolizing Ganesha's journey back to his celestial abode, taking with him the misfortunes of his devotees and promising to return the following year.</p>
                                </div>
                            </TabsContent>

                            <TabsContent value="ten-days">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Ten-Day Celebration</h2>
                                <div className="space-y-8 prose max-w-none text-foreground/80">
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 1: Avahana and Sthapana</h3>
                                        <p>The festival begins with the installation of a clay idol of Ganesha in the home or a public pandal. A priest performs the 'Pranapratishtha' puja, a ritual to invoke the holy presence of Ganesha into the idol. This is followed by offerings of modaks, flowers (especially red hibiscus), and durva grass.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary">Days 2 to 9: Daily Worship and Gauri Avahan</h3>
                                        <p>For the duration of the festival, daily morning and evening pujas and aartis are performed. The atmosphere is filled with the sound of devotional songs and mantras. A significant event during this period is the worship of Goddess Gauri (an incarnation of Parvati, Ganesha's mother). Idols of Gauri are brought home, and a special puja is performed to celebrate the mother-son bond. This is particularly important in Maharashtra, where married women observe a fast and pray for a long and happy married life.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 10/11: Anant Chaturdashi and Visarjan</h3>
                                        <p>The festival culminates on Anant Chaturdashi. The idols of Ganesha are taken in a vibrant and grand procession to a nearby river, lake, or the sea for immersion ('visarjan'). The streets are filled with music, dance, and chants of "Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya" (Oh Lord Ganesha, come again soon next year). The immersion symbolizes Ganesha's return to his celestial abode, taking with him the obstacles and misfortunes of his devotees, and the cyclical nature of life and creation.</p>
                                    </div>
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
                                            <p className="text-foreground/80">After 1.5, 3, 5, 7, or 10 days, the idol is taken in a grand procession for immersion in a river or the sea, accompanied by singing and dancing. The final day of immersion is known as Anant Chaturdashi.</p>
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
                                                    <h3 className="font-headline text-xl font-bold text-center text-primary h-14 flex items-center justify-center">{recipe.name}</h3>
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
                        <ShareButtons title="Ganesh Chaturthi" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
