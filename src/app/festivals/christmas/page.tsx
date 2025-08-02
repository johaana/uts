import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Christmas Cake", link: "/recipes/christmas-cake" },
    { name: "Roast Chicken", link: "/recipes/roast-chicken" },
    { name: "Gingerbread Cookies", link: "/recipes/gingerbread-cookies" },
]

export default function ChristmasPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                 <Image src="https://i.postimg.cc/ncKMYdWy/christmas-2.jpg" alt="Christmas Decorations" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="christmas decor" />
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Christmas</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">Celebrating Peace, Joy, and Goodwill</p>
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
                                <TabsTrigger value="prayers" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Prayers & Carols</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Story of Christmas</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Christmas, celebrated by billions around the world on December 25th, is an annual festival commemorating the birth of Jesus Christ. For Christians, it is a central event in the liturgical year, a time of deep religious significance and joy. The story, as told in the Gospels of Luke and Matthew, begins with a young woman named Mary being visited by the angel Gabriel, who told her she would conceive a son by the Holy Spirit, whom she was to name Jesus. Mary and her husband Joseph traveled to Bethlehem, and with no room at the inn, they found shelter in a stable, where Jesus was born.</p>
                                            <p>This humble birth is at the core of the Christmas message: the arrival of a savior who represents hope, peace, and God's love for humanity. Shepherds, guided by an angel, and Wise Men from the East, following a star, came to worship the newborn king, bearing gifts. Today, Christmas has evolved into a global cultural phenomenon, celebrated even by many non-Christians. It is a time for family gatherings, gift-giving, feasting, and spreading a message of goodwill and peace among all people, transcending religious and cultural boundaries.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/RZMhP75N/christmas1.jpg" alt="Nativity Scene" width={400} height={600} className="rounded-lg shadow-lg" data-ai-hint="nativity scene"/>
                                    </div>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Christmas</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Decorate a Christmas Tree</h4>
                                            <p className="text-foreground/80">An evergreen tree is brought into the home and decorated with lights, ornaments, and a star, symbolizing everlasting life and the star of Bethlehem.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Midnight Mass</h4>
                                            <p className="text-foreground/80">Many Christians attend a special church service on Christmas Eve to celebrate the birth of Jesus.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Exchange Gifts</h4>
                                            <p className="text-foreground/80">Inspired by the gifts of the Wise Men, friends and family exchange presents as a sign of love and appreciation.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Christmas Feast</h2>
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
                            </TabsContent>

                             <TabsContent value="prayers">
                                <h2 className="font-headline text-3xl font-bold mb-4">Songs and Prayers of the Season</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>The Lord's Prayer</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="prose prose-sm max-w-none text-foreground/80">
                                                <p className="italic">Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Silent Night</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Silent night, holy night, All is calm, all is bright..."</p>
                                            <p className="mt-2 text-foreground/80">One of the most beloved Christmas carols, "Silent Night" beautifully captures the peace and serenity of the night Jesus was born.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Joy to the World</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Joy to the world, the Lord is come! Let earth receive her King..."</p>
                                            <p className="mt-2 text-foreground/80">A jubilant hymn celebrating the arrival of Jesus and the joy he brings to the world.</p>
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
