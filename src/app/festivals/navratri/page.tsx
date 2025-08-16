
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, CalendarDays, Leaf } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Navratri Festival | The Nine Nights of Divine Feminine Power | Utsavs",
  description: "Explore Navratri, the nine-night festival honoring Goddess Durga. Learn about the nine avatars, Garba and Dandiya dances, fasting, and eco-friendly celebrations.",
  openGraph: {
    title: "Navratri Festival | The Nine Nights of Divine Feminine Power | Utsavs",
    description: "Explore Navratri, the nine-night festival honoring Goddess Durga. Learn about the nine avatars, Garba and Dandiya dances, fasting, and eco-friendly celebrations.",
    images: [{ url: "https://i.postimg.cc/Zn3Rzsz8/navratri1.jpg", width: 1200, height: 630, alt: "Navratri Garba Dance" }],
  },
};


export default function NavratriPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Navratri</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">Nine Nights of Divine Feminine Power</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="nine-nights" className="py-2"><CalendarDays className="w-4 h-4 mr-2" />The Nine Nights</TabsTrigger>
                                <TabsTrigger value="culture" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Culture & Dance</TabsTrigger>
                                <TabsTrigger value="chants" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                                <TabsTrigger value="eco-friendly" className="py-2"><Leaf className="w-4 h-4 mr-2" />Eco-Friendly</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Story of Navratri</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Navratri, which translates to 'nine nights' in Sanskrit, is a magnificent Hindu festival dedicated to the worship of the divine feminine, or Shakti. This vibrant celebration, spanning nine nights and ten days, honors the nine distinct forms of Goddess Durga and culminates in the victory of good over evil. The festival is steeped in ancient legend, most prominently the story of Goddess Durga's epic battle with the formidable buffalo demon, Mahishasura. Through intense penance, Mahishasura had obtained a boon from Lord Brahma that made him nearly invincible—no man or god could kill him. Consumed by power, he unleashed a reign of terror across the heavens and the earth.</p>
                                    <p>In a desperate plea, the gods converged their divine energies, giving rise to the magnificent, ten-armed warrior goddess, Durga. Endowed with the weapons of all the gods, she rode a lion into battle. The fierce conflict raged for nine days and nights. On the tenth day, Vijayadashami, Goddess Durga finally triumphed, slaying Mahishasura and restoring peace and order to the universe. Each night of Navratri is thus a celebration of one of her powerful avatars, from the gentle Shailaputri to the fierce Kalaratri, representing the various facets of feminine power. The festival is a period of fasting, feasting, vibrant music, and electrifying dance, most famously the Garba and Dandiya Raas, which symbolize the cyclical nature of life and the joyous victory of dharma (righteousness).</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="nine-nights">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Nine Avatars of Durga: A Day-by-Day Guide</h2>
                                <div className="space-y-8 prose max-w-none text-foreground/80">
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 1: Shailaputri - The Daughter of the Mountains</h3>
                                        <p><strong>Color:</strong> Orange. Represents energy, warmth, and exuberance.</p>
                                        <p>The first night of Navratri is dedicated to Shailaputri, which means 'Daughter of the Mountain' (Shaila = mountain, Putri = daughter). She is the incarnation of Goddess Parvati, born to Himavan, the king of the Himalayas. In this form, she holds a trident (Trishul) in one hand and a lotus in the other, riding Nandi the bull. Her worship marks the beginning of the nine-day spiritual journey, invoking her power to bring stability and strength, just like the mountains she hails from. Devotees pray to her for fortitude and for setting their spiritual discipline in motion for the days to come.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 2: Brahmacharini - The Ascetic</h3>
                                        <p><strong>Color:</strong> White. Symbolizes purity, peace, and meditation.</p>
                                        <p>The second day honors Brahmacharini, the form of Parvati when she undertook severe penance to win Lord Shiva as her husband. The name signifies a female who pursues the sacred path of spirituality. She holds a rosary (japa mala) and a water pot (kamandalu), walking barefoot. Her form is serene and blissful, representing deep meditation, devotion, and determination. Worshipping her is believed to bless devotees with immense emotional strength, mental balance, and the resolve to overcome any obstacle in their spiritual path.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 3: Chandraghanta - The Bearer of the Half-Moon Bell</h3>
                                        <p><strong>Color:</strong> Red. Represents passion, beauty, and fearlessness.</p>
                                        <p>On the third day, Goddess Durga is worshipped as Chandraghanta. After her marriage to Shiva, she adorned her forehead with a half-moon shaped like a bell (Chandra = moon, Ghanta = bell). She is depicted with ten hands holding various weapons, ready for battle, yet her face is serene and compassionate. Her worship instills bravery and courage in her devotees, and the sound of her bell is believed to drive away all evil spirits and negative energies.</p>
                                    </div>
                                     <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 4: Kushmanda - The Cosmic Creator</h3>
                                        <p><strong>Color:</strong> Royal Blue. Symbolizes health, wealth, and strength.</p>
                                        <p>The fourth form of Durga is Kushmanda. It is believed that when the universe was non-existent and darkness prevailed, she created the 'cosmic egg' (Brahmanda) with her divine smile. Her name breaks down to 'Ku' (a little), 'Ushma' (warmth), and 'Anda' (egg). She resides in the core of the sun, radiating light and energy to the entire cosmos. Worshipping her is said to improve health, bestow wealth, and grant power.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 5: Skandamata - The Mother of Skanda</h3>
                                        <p><strong>Color:</strong> Yellow. Represents happiness, brightness, and knowledge.</p>
                                        <p>On Panchami, the fifth day, Durga is revered as Skandamata, the mother of the war god Skanda (also known as Kartikeya). She is depicted holding the infant Skanda in her lap. Riding a lion, she embodies the pure, selfless love of a mother. By worshipping Skandamata, a devotee gets the added blessing of worshipping Lord Skanda as well. It is believed that she awards her devotees with salvation, power, and prosperity.</p>
                                    </div>
                                     <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 6: Katyayani - The Warrior Goddess</h3>
                                        <p><strong>Color:</strong> Green. Symbolizes new beginnings, nature, and growth.</p>
                                        <p>Katyayani is the sixth form of Durga. She was born to the great sage Kata as an answer to his prayers for a daughter who would be a goddess. It was in this fierce form that Durga eventually destroyed the demon Mahishasura. She is the warrior goddess, embodying courage and righteous anger against injustice. Unmarried girls often worship her, seeking blessings for a good husband.</p>
                                    </div>
                                     <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 7: Kalaratri - The Dark Night</h3>
                                        <p><strong>Color:</strong> Grey. Symbolizes the power to destroy evil and ignorance.</p>
                                        <p>The seventh day is dedicated to Kalaratri, the most ferocious form of Goddess Durga. Her appearance is formidable—dark skin, disheveled hair, and a fearsome posture. She is a symbol of the night and the destroyer of all darkness, demons, and negative energies. While her form is terrifying, she is also 'Shubhankari'—the giver of auspicious results. Her worship is believed to make devotees fearless and to protect them from all harm and evil.</p>
                                    </div>
                                     <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 8: Mahagauri - The Great White Goddess</h3>
                                        <p><strong>Color:</strong> Purple. Represents intellect, peace, and ambition.</p>
                                        <p>Ashtami, the eighth day, honors Mahagauri. After her intense penance as Brahmacharini, Parvati's body had turned black. Lord Shiva cleansed her with the holy water of the Ganga, and she regained her radiant white complexion. 'Maha' means great, and 'Gauri' means white. She represents purity, serenity, and the absolution of all sins. Her worship is believed to cleanse the soul and fulfill all desires. This day is also when the Kanya Pujan ceremony is often performed.</p>
                                    </div>
                                     <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 9: Siddhidatri - The Bestower of Powers</h3>
                                        <p><strong>Color:</strong> Peacock Green. Symbolizes wisdom, fulfillment, and compassion.</p>
                                        <p>The final night of Navratri is dedicated to Siddhidatri. 'Siddhi' means supernatural power or meditative ability, and 'datri' means giver. She is the bestower of all eight 'siddhis' (supernatural powers). It is believed that one side of Lord Shiva’s body is that of Goddess Siddhidatri, which is why he is also known as 'Ardhanarishvara'. By worshipping her, devotees are blessed with wisdom and spiritual enlightenment, attaining perfection and fulfillment in life.</p>
                                    </div>
                                </div>
                                <div className="not-prose my-10 bg-secondary/30 p-6 rounded-lg">
                                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Kanya Pujan Gifts on Amazon</h3>
                                     <p className="text-center text-muted-foreground mb-6">Kanya Pujan (or Kanjak), where young girls are worshipped as manifestations of the Goddess, is a key Navratri ritual. Here are some thoughtful gift ideas for the occasion.</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <ProductCard product={products.mpkStationerySet} />
                                        <ProductCard product={products.baalWaterBottleSet} />
                                        <ProductCard product={products.baalHairAccessories} />
                                        <ProductCard product={products.arkMataChunri} />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="culture">
                                <h2 className="font-headline text-3xl font-bold mb-4">Garba and Dandiya Raas</h2>
                                <div className="space-y-6 prose max-w-none text-foreground/80">
                                   <div className="flex flex-col md:flex-row gap-6">
                                        <div className="md:w-1/2">
                                            <div className="relative w-full h-64 bg-muted rounded-lg shadow-md">
                                                <Image src="https://i.postimg.cc/Zn3Rzsz8/navratri1.jpg" alt="Garba Dance" layout="fill" objectFit="cover" className="rounded-lg" data-ai-hint="garba dance"/>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2">
                                             <h3 className="font-headline text-xl font-bold mb-2">The Dance of Devotion</h3>
                                            <p>Navratri is synonymous with its electrifying traditional dances, primarily Garba and Dandiya Raas. These dances are deeply spiritual acts of communal worship.</p>
                                            <p><strong>Garba:</strong> This dance is performed in a circle around a centrally lit lamp or an image of the Goddess. The circular movement symbolizes the cyclical nature of time—from birth to life to death and rebirth.</p>
                                            <p><strong>Dandiya Raas:</strong> In this dance, men and women gracefully clash decorated bamboo sticks (dandiyas), representing a mock battle between Goddess Durga and Mahishasur.</p>
                                        </div>
                                   </div>
                                </div>
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Powerful Durga Mantras</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Durga Saptashati</CardTitle>
                                            <p className="text-sm text-muted-foreground">For Protection and Blessings</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Ya Devi Sarva-bhuteshu..."</p>
                                            <p className="mt-2 text-foreground/80">A collection of 700 verses that narrate the glory of Goddess Durga. Reciting parts of it is a common practice during Navratri to seek her protection and blessings.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Aigiri Nandini Stotram</CardTitle>
                                             <p className="text-sm text-muted-foreground">Hymn to the Divine Mother</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Aigiri nandini, nandita medini, visva vinodini, nandinute..."</p>
                                            <p className="mt-2 text-foreground/80">A highly energetic and popular hymn praising Goddess Durga as the daughter of the mountain king and the joy of the universe. It describes her fierce and victorious nature.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                             <TabsContent value="eco-friendly">
                                <h2 className="font-headline text-3xl font-bold mb-4">Celebrating a Green Navratri</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Celebrate the nine nights of divine energy with respect for nature. Here are some ways to have a sustainable Navratri.</p>
                                    <ul className="space-y-4 pl-4">
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Clay Garba Pot</h4>
                                                <p>Use a traditional, decorated earthen pot for the Garba instead of ones made from synthetic materials. This honors tradition and is eco-friendly.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Sustainable Feasting</h4>
                                                <p>Serve prasad and food on biodegradable leaf plates (pattals) or reusable utensils. Avoid single-use plastics and styrofoam to minimize waste during community feasts.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Noise-Free Celebrations</h4>
                                                <p>Keep the volume of music at Garba and Dandiya events within permissible limits to avoid noise pollution. Respect the peace and quiet of your neighborhood.</p>
                                            </div>
                                        </li>
                                         <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Conscious Fashion</h4>
                                                <p>Rent, borrow, or reuse traditional attire for the nine nights instead of buying new clothes that you might only wear once. This promotes a circular economy and reduces textile waste.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Navratri" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    
