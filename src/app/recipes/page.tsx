import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Gajar Ka Halwa", festival: "Diwali", region: "North", image: "https://images.unsplash.com/photo-1594313222146-a6f69a535742?q=80&w=400&h=300&fit=crop", hint: "carrot dessert", description: "A rich carrot pudding made with milk, sugar, and ghee." },
    { name: "Puran Poli", festival: "Ganesh Chaturthi", region: "West", image: "https://images.unsplash.com/photo-1609503255992-13a825456224?q=80&w=400&h=300&fit=crop", hint: "sweet flatbread", description: "Sweet flatbread stuffed with a lentil and jaggery filling." },
    { name: "Ras Malai", festival: "Holi", region: "East", image: "https://images.unsplash.com/photo-1626803775151-64205f63ef37?q=80&w=400&h=300&fit=crop", hint: "milk dessert", description: "Soft paneer discs soaked in sweetened, thickened milk." },
    { name: "Masala Dosa", festival: "Any", region: "South", image: "https://images.unsplash.com/photo-1668236543090-822d95a529cf?q=80&w=400&h=300&fit=crop", hint: "savory crepe", description: "A crispy crepe made from fermented rice and lentil batter, filled with spiced potatoes." },
    { name: "Litti Chokha", festival: "Chhath Puja", region: "East", image: "https://images.unsplash.com/photo-1655845026214-a95725f38a54?q=80&w=400&h=300&fit=crop", hint: "dough ball", description: "Stuffed whole wheat dough balls with a spiced gram flour filling." },
    { name: "Dhokla", festival: "Navratri", region: "West", image: "https://images.unsplash.com/photo-1608502455212-321543c0d5c0?q=80&w=400&h=300&fit=crop", hint: "savory cake", description: "A steamed, spongy, and savory cake made from fermented batter." },
    { name: "Hyderabadi Biryani", festival: "Eid", region: "South", image: "https://images.unsplash.com/photo-1563379926-36B695750385?q=80&w=400&h=300&fit=crop", hint: "rice dish", description: "A flavorful and aromatic rice dish with marinated meat or vegetables." },
    { name: "Momos", festival: "Losar", region: "Northeast", image: "https://images.unsplash.com/photo-1640719013233-3b56247963ae?q=80&w=400&h=300&fit=crop", hint: "dumpling", description: "Steamed or fried dumplings stuffed with meat or vegetables." },
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
                            <Button variant="outline" className="mt-4 w-full">View Recipe</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
