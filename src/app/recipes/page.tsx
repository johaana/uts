import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Gajar Ka Halwa", festival: "Diwali", region: "North", image: "https://images.unsplash.com/photo-1613542911293-9a572a135316?q=80&w=400&h=300&fit=crop", hint: "carrot dessert", description: "A rich carrot pudding made with milk, sugar, and ghee.", link: "/recipes/gajar-ka-halwa" },
    { name: "Puran Poli", festival: "Ganesh Chaturthi", region: "West", image: "https://images.unsplash.com/photo-1610398285863-1620d8a4a4c4?q=80&w=400&h=300&fit=crop", hint: "sweet flatbread", description: "Sweet flatbread stuffed with a lentil and jaggery filling.", link: "/recipes/puran-poli" },
    { name: "Ras Malai", festival: "Holi", region: "East", image: "https://images.unsplash.com/photo-1626803775151-621644546ac9?q=80&w=400&h=300&fit=crop", hint: "milk dessert", description: "Soft paneer discs soaked in sweetened, thickened milk.", link: "/recipes/ras-malai" },
    { name: "Modak", festival: "Ganesh Chaturthi", region: "West", image: "https://images.unsplash.com/photo-1625391029258-a53655383921?q=80&w=400&h=300&fit=crop", hint: "sweet dumpling", description: "Steamed sweet dumplings filled with coconut and jaggery.", link: "/recipes/modak" },
    { name: "Thekua", festival: "Chhath Puja", region: "East", image: "https://images.unsplash.com/photo-1604435924739-429948033575?q=80&w=400&h=300&fit=crop", hint: "wheat cookie", description: "A traditional deep-fried cookie made from wheat flour and jaggery.", link: "/recipes/thekua" },
    { name: "Ladoo", festival: "Diwali", region: "Nationwide", image: "https://images.unsplash.com/photo-1598164879222-74d324976134?q=80&w=400&h=300&fit=crop", hint: "sweet balls", description: "Ball-shaped sweets made of flour, fat, and sugar.", link: "/recipes/ladoo" },
    { name: "Gujiya", festival: "Holi", region: "North", image: "https://images.unsplash.com/photo-1617131723588-f6723467a1e3?q=80&w=400&h=300&fit=crop", hint: "sweet dumpling", description: "Sweet deep-fried dumplings filled with khoya and dried fruits.", link: "/recipes/gujiya" },
    { name: "Thandai", festival: "Holi", region: "North", image: "https://images.unsplash.com/photo-1580538257844-94aa7d781d3d?q=80&w=400&h=300&fit=crop", hint: "cold drink", description: "A cold drink prepared with a mixture of almonds, fennel seeds, and other spices.", link: "/recipes/thandai" },
    { name: "Sheer Khurma", festival: "Eid-al-Fitr", region: "Nationwide", image: "https://images.unsplash.com/photo-1620428268459-2f27918c5c79?q=80&w=400&h=300&fit=crop", hint: "vermicelli pudding", description: "A rich and creamy vermicelli pudding made for Eid.", link: "/recipes/sheer-khurma" },
    { name: "Biryani", festival: "Eid-al-Fitr", region: "Nationwide", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=400&h=300&fit=crop", hint: "spiced rice", description: "Aromatic rice dish with meat or vegetables.", link: "/recipes/biryani" },
    { name: "Christmas Cake", festival: "Christmas", region: "Nationwide", image: "https://images.unsplash.com/photo-1542826438-c2e887a03a09?q=80&w=400&h=300&fit=crop", hint: "fruit cake", description: "A rich, dense cake packed with dried fruits and spices.", link: "/recipes/christmas-cake" },
    { name: "Karah Prasad", festival: "Guru Nanak Jayanti", region: "Nationwide", image: "https://images.unsplash.com/photo-1626094309830-0d7ea26f3094?q=80&w=400&h=300&fit=crop", hint: "wheat halwa", description: "A sacred whole wheat flour pudding served at Gurdwaras.", link: "/recipes/karah-prasad" },
    { name: "Kaju Katli", festival: "Diwali", region: "Nationwide", image: "https://images.unsplash.com/photo-1574263539400-38823b2b8315?q=80&w=400&h=300&fit=crop", hint: "cashew fudge", description: "Melt-in-the-mouth cashew and milk fudge.", link: "/recipes/kaju-katli" },
    { name: "Coconut Barfi", festival: "Raksha Bandhan", region: "Nationwide", image: "https://images.unsplash.com/photo-1606550212039-9b76e2c9e7a2?q=80&w=400&h=300&fit=crop", hint: "coconut fudge", description: "Simple and delicious fudge made from coconut, milk, and sugar.", link: "/recipes/coconut-barfi" },
];

export default function RecipesPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Recipe Library</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Savor the authentic tastes of India. Find traditional recipes for every festival and region.
                </p>
            </div>

            <Card className="p-6 mb-12">
                 <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative w-full flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Search for a recipe..." className="pl-10"/>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <Select>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="By Festival" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="diwali">Diwali</SelectItem>
                                <SelectItem value="holi">Holi</SelectItem>
                                <SelectItem value="navratri">Navratri</SelectItem>
                                <SelectItem value="pongal">Pongal</SelectItem>
                                <SelectItem value="ganesh-chaturthi">Ganesh Chaturthi</SelectItem>
                                <SelectItem value="chhath-puja">Chhath Puja</SelectItem>
                                <SelectItem value="eid-al-fitr">Eid-al-Fitr</SelectItem>
                                <SelectItem value="christmas">Christmas</SelectItem>
                                <SelectItem value="guru-nanak-jayanti">Guru Nanak Jayanti</SelectItem>
                            </SelectContent>
                        </Select>
                         <Select>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="By Region" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="north">North</SelectItem>
                                <SelectItem value="south">South</SelectItem>
                                <SelectItem value="east">East</SelectItem>
                                <SelectItem value="west">West</SelectItem>
                                <SelectItem value="nationwide">Nationwide</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Filter</Button>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {recipes.map((recipe) => (
                    <Card key={recipe.name} className="overflow-hidden group">
                        <Image src={recipe.image} alt={recipe.name} width={400} height={300} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={recipe.hint} />
                        <CardHeader>
                            <CardTitle className="font-headline text-xl h-14">{recipe.name}</CardTitle>
                            <p className="text-sm text-primary">{recipe.festival} | {recipe.region}</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground/70 h-16">{recipe.description}</p>
                            <Link href={recipe.link}>
                                <Button variant="outline" className="mt-4 w-full">View Recipe</Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
