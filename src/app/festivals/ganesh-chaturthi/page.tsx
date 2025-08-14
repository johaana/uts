
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote, Leaf, CalendarDays, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { ProductCard } from "@/components/ProductCard";

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
                            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-7 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="ten-days" className="py-2"><CalendarDays className="w-4 h-4 mr-2" />The Festival</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes" className="py-2"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="chants" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Aartis</TabsTrigger>
                                <TabsTrigger value="eco-friendly" className="py-2"><Leaf className="w-4 h-4 mr-2" />Eco-Friendly</TabsTrigger>
                                <TabsTrigger value="shopping" className="py-2"><ShoppingCart className="w-4 h-4 mr-2" />Shopping Guide</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Story of Ganesha's Birth</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Ganesh Chaturthi is a spectacular festival that celebrates the birth of Lord Ganesha, the beloved elephant-headed son of Shiva and Parvati. Revered as the god of wisdom, prosperity, and good fortune, and the remover of obstacles ('Vighnaharta'), Ganesha's birth is a fascinating story of divine creation. Legend has it that Goddess Parvati, wanting a loyal guard for her private chambers, created a boy from the sandalwood paste on her body and breathed life into him. She instructed him not to allow anyone to enter while she bathed.</p>
                                    <p>When her husband, Lord Shiva, returned and was unexpectedly denied entry by this unknown boy, a fierce battle ensued. In his cosmic rage, not realizing the boy was Parvati's creation, Shiva severed the boy's head. When a distraught Parvati saw what had happened, her sorrow was immense. To console her, a remorseful Shiva promised to bring the boy back to life. He instructed his attendants (Ganas) to bring back the head of the first living creature they found with its head facing north. They returned with the head of a mighty elephant, which Shiva placed upon the boy's body, resurrecting him and bestowing upon him the name Ganesha, the lord of all Ganas. He was also blessed to be the first deity worshipped in any ritual, forever to be known as the remover of all obstacles.</p>
                                    <p>The festival was transformed from a private, household celebration into a grand public event by the freedom fighter Lokmanya Tilak in the late 19th century as a way to unite the people of India against British rule. Today, the festival is celebrated with immense fervor, especially in Maharashtra. Devotees bring home beautifully crafted clay idols of Ganesha, worshipping him for ten days with prayers, songs, and his favorite sweet, 'modak'. The festival culminates in the 'visarjan' (immersion) ceremony on Anant Chaturdashi, symbolizing Ganesha's journey back to his celestial abode, taking with him the misfortunes of his devotees, and promising to return the following year.</p>
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
                                     <div className="text-center mt-6">
                                        <Link href="/blog/eco-friendly-ganesh-chaturthi-guide">
                                            <Button variant="outline">View Full Eco-Friendly Guide</Button>
                                        </Link>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="shopping">
                                <h2 className="font-headline text-3xl font-bold mb-4">Ganesh Chaturthi Shopping Guide</h2>
                                <p className="mb-6 text-foreground/80 prose max-w-none">Get ready for the festival with our curated list of essential items, from beautiful idols to complete puja kits and decoration setups.</p>
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary mb-4">Complete Puja Kit</h3>
                                        <ProductCard
                                            name="Poojnam Ganesh Chaturthi Puja Samagri Kit"
                                            price="1299"
                                            link="https://www.amazon.in/Poojnam-Ganesh-Chaturthi-Premium-Samagri/dp/B0DCTGHLBX?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.4A5oBxQ0-BqwH16Kao4RiyVvs9GjgAKhY4IHwgDrggSBE2dLVbc2xgTi_cYtt0yjxrO3mBefHiC3iKiJmRse4XfklHJlEQImpjh_9Nn_Kc4.h3Mh8Cvl_dLr5HJ5oAFyn2h1JvTvBR_mCYy8AGkq7M0&dib_tag=se&keywords=ganesh+chaturthi&qid=1755159913&sprefix=ganesh+chaturthi%2Caps%2C419&sr=8-58&xpid=d_iSDzNdnJcOI&linkCode=ll1&tag=utsavs-21&linkId=eab2e672b29bfe70c59404fe43763fef&language=en_IN&ref_=as_li_ss_tl"
                                            image="https://i.postimg.cc/y8B1Y7Nq/puja-kit.jpg"
                                            description="For a hassle-free celebration, this traditional and complete puja set contains 35 sacred items needed for all your rituals and offerings at home."
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-headline text-2xl text-primary mb-4">Mandap Decoration Sets</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                             <ProductCard
                                                name="SpecialYou Decoration Setup with Curtain"
                                                price="497"
                                                link="https://www.amazon.in/Special-Curtain-Decoration-Light-Backdrop/dp/B09W5GPSL5?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUTrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-56&th=1&linkCode=ll1&tag=utsavs-21&linkId=8258f71cde5e98a1bde6e393d32d06f4&language=en_IN&ref_=as_li_ss_tl"
                                                image="https://i.postimg.cc/W12YQvC6/decor-kit-curtain.jpg"
                                                description="An easy-to-use decoration kit featuring a white backdrop curtain, green vine garlands, and lights to create a beautiful Ganpati mandap at home."
                                            />
                                             <ProductCard
                                                name="SpecialYou Decoration Setup with PVC Stand"
                                                price="716"
                                                link="https://www.amazon.in/Special-Ganpati-Decoration-Chaturthi-Backdrop/dp/B0DBHT3G3N?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.-Y7PbNd7D37SbSHOjaXt_-XgHMvdiksuaFM-GWehn8yLKnWSFdVH4Y9_RWJ5Z333gxDrzQKgTfZsBnesJovNIuPWUSFXOBPeFIBRy_nVSuAPLslUQByya9VqGsB3TCHkKVvJ9dH0rXHwzKsmXpU_XuHscu9J0lidpOFyPEJT4EmhucVFirF1ig9c9kZ5NDexugHMhZYxyXoxmMueUURqoR3hJRrjgLKo0kfXNDAKu0MJpWzvpNlnzieXVTQ4gc2dfjtPZ5JDaA1ZkOpBAsfrx3a46_vNfgJdMH-kTnNunr8.C4sViRNYGZdDdQWR9QAMrv3ACcssTxQioEALDxFNOqQ&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159913&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-88&xpid=d_iSDzNdnJcOI&th=1&linkCode=ll1&tag=utsavs-21&linkId=0770a780d9902e993ecc275c0d579796&language=en_IN&ref_=as_li_ss_tl"
                                                image="https://i.postimg.cc/t4G2q90M/decor-kit-stand.jpg"
                                                description="This all-in-one kit includes a PVC stand for the backdrop, making your home Ganpati decorations professional and effortless."
                                            />
                                        </div>
                                    </div>
                                     <div>
                                        <h3 className="font-headline text-2xl text-primary mb-4">Decorative Items</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            <ProductCard
                                                name="Decorative Floral Rangoli Mat Set"
                                                price="449"
                                                link="https://www.amazon.in/Decorative-Floral-Rangoli-Mat-Traditional/dp/B0FHJVW6LG?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUTrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-53&th=1&linkCode=ll1&tag=utsavs-21&linkId=7b912e9a3475c70741feb19c6a08cc6f&language=en_IN&ref_=as_li_ss_tl"
                                                image="https://i.postimg.cc/Zq7qQ6g0/rangoli-mat.jpg"
                                                description="Create instant, beautiful rangoli with these reusable 12-inch floral mats. Perfect for entrances and puja areas."
                                            />
                                            <ProductCard
                                                name="Lotus Wall Hanging Decor"
                                                price="440"
                                                link="https://www.amazon.in/Special-decoration-Lotus-Chaturthi-Decor-5pcs/dp/B0DDPDMR36?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUTrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-37&th=1&linkCode=ll1&tag=utsavs-21&linkId=7b933abe0334a8b0a81046af01df1681&language=en_IN&ref_=as_li_ss_tl"
                                                image="https://i.postimg.cc/yYyB4GzP/lotus-hanging.jpg"
                                                description="Set of 5 beautiful lotus wall hangings (3ft each) to create a stunning and traditional backdrop for your mandap."
                                            />
                                            <ProductCard
                                                name="Artificial Marigold Flower Garlands"
                                                price="417"
                                                link="https://www.amazon.in/Artificial-Decoration-Chaturthi-Festivals-Rajnignadha/dp/B0CQDBRHRB?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-27&th=1&linkCode=ll1&tag=utsavs-21&linkId=8461cece6ef565d706425159aa00bb7b&language=en_IN&ref_=as_li_ss_tl"
                                                image="https://i.postimg.cc/prgQxZQP/marigold-garland.jpg"
                                                description="A set of 5 beautiful, long (5ft) artificial marigold garlands to decorate doors, walls, and puja areas."
                                            />
                                        </div>
                                    </div>
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
