
'use client';

import { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, RotateCcw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const allRecipes = [
    { name: "Gajar Ka Halwa", festival: "Diwali", region: "North", description: "A rich carrot pudding made with milk, sugar, and ghee.", link: "/recipes/gajar-ka-halwa", image: "https://i.postimg.cc/FHNTRfLR/gajar-halwa.jpg", hint: "carrot pudding" },
    { name: "Puran Poli", festival: "Ganesh Chaturthi", region: "West", description: "Sweet flatbread stuffed with a lentil and jaggery filling.", link: "/recipes/puran-poli", image: "https://i.postimg.cc/jj8gBsCj/puranpoli.jpg", hint: "sweet flatbread" },
    { name: "Ras Malai", festival: "Holi", region: "East", description: "Soft paneer discs soaked in sweetened, thickened milk.", link: "/recipes/ras-malai", image: "https://i.postimg.cc/d1pWt42P/Rasmalai.webp", hint: "milk sweets" },
    { name: "Modak", festival: "Ganesh Chaturthi", region: "West", description: "Steamed sweet dumplings filled with coconut and jaggery.", link: "/recipes/modak", image: "https://i.postimg.cc/ZYv7DzmT/ukadiche-modak-recipe.jpg", hint: "steamed dumplings" },
    { name: "Thekua", festival: "Chhath Puja", region: "East", description: "A traditional deep-fried cookie made from wheat flour and jaggery.", link: "/recipes/thekua", image: "https://i.postimg.cc/d1N07T3K/thekua1.webp", hint: "fried cookie" },
    { name: "Besan Ladoo", festival: "Diwali", region: "Nationwide", description: "Ball-shaped sweets made of flour, fat, and sugar.", link: "/recipes/ladoo", image: "https://i.postimg.cc/9MkWX5gm/Besan-Laddoo.webp", hint: "ladoo sweet" },
    { name: "Gujiya", festival: "Holi", region: "North", description: "Sweet deep-fried dumplings filled with khoya and dried fruits.", link: "/recipes/gujiya", image: "https://i.postimg.cc/zv9X7ZTt/Gujiya.jpg", hint: "fried dumplings" },
    { name: "Thandai", festival: "Holi", region: "North", description: "A cold drink prepared with a mixture of almonds, fennel seeds, and other spices.", link: "/recipes/thandai", image: "https://i.postimg.cc/Y04CQqLL/Thandai.webp", hint: "holi drink" },
    { name: "Sheer Khurma", festival: "Eid-al-Fitr", region: "Nationwide", description: "A rich and creamy vermicelli pudding made for Eid.", link: "/recipes/sheer-khurma", image: "https://i.postimg.cc/sQC9PHmM/sheer-khurma.jpg", hint: "vermicelli pudding" },
    { name: "Biryani", festival: "Eid-al-Fitr", region: "Nationwide", description: "Aromatic rice dish with meat or vegetables.", link: "/recipes/biryani", image: "https://i.postimg.cc/BQxh45tk/Mutton-Biryani.png", hint: "rice dish" },
    { name: "Christmas Cake", festival: "Christmas", region: "Nationwide", description: "A traditional rich fruit cake, perfect for Christmas celebrations.", link: "/recipes/christmas-cake", image: "https://i.postimg.cc/kDmD9PDV/christmas-cake.jpg", hint: "fruit cake" },
    { name: "Rum Cake", festival: "Christmas", region: "Nationwide", description: "A rich, dense cake packed with rum-soaked dried fruits and spices.", link: "/recipes/rum-cake", image: "https://i.postimg.cc/kDmD9PDV/christmas-cake.jpg", hint: "rum cake" },
    { name: "Kerala Roast Chicken", festival: "Christmas", region: "South", description: "A succulent roast chicken with a twist of Keralan spices.", link: "/recipes/kerala-roast-chicken", image: "https://i.postimg.cc/ncKMYdWy/christmas-2.jpg", hint: "kerala roast chicken" },
    { name: "Karah Prasad", festival: "Guru Nanak Jayanti", region: "Nationwide", description: "A sacred whole wheat flour pudding served at Gurdwaras.", link: "/recipes/karah-prasad", image: "https://i.postimg.cc/zXgfBv19/karah-prasad.jpg", hint: "wheat pudding" },
    { name: "Kaju Katli", festival: "Diwali", region: "Nationwide", description: "Melt-in-the-mouth cashew and milk fudge.", link: "/recipes/kaju-katli", image: "https://i.postimg.cc/3ND3dSzg/Kaju-Katli.webp", hint: "cashew fudge" },
    { name: "Coconut Barfi", festival: "Raksha Bandhan", region: "Nationwide", description: "Simple and delicious fudge made from coconut, milk, and sugar.", link: "/recipes/coconut-barfi", image: "https://i.postimg.cc/V5QmM9c2/Coconut-Burfi.jpg", hint: "coconut fudge" },
    { name: "Haleem", festival: "Eid-al-Fitr", region: "Nationwide", description: "A rich and savory stew of meat, lentils, and pounded wheat.", link: "/recipes/haleem", image: "https://i.postimg.cc/rzJCWJrp/haleem1.jpg", hint: "meat stew" },
    { name: "Langarwali Dal", festival: "Guru Nanak Jayanti", region: "Nationwide", description: "A simple, wholesome lentil curry served in Gurdwaras.", link: "/recipes/langar-dal", image: "https://i.postimg.cc/d0qQ49TY/Langar-Wali-Dal.jpg", hint: "lentil curry" },
    { name: "Avial", festival: "Onam", region: "South", description: "A mixed vegetable stew in a coconut and yogurt gravy.", link: "/recipes/avial", image: "https://i.postimg.cc/MpJpjw6X/Aviyal.webp", hint: "vegetable stew" },
    { name: "Payasam", festival: "Onam", region: "South", description: "A traditional South Indian pudding made with milk, sugar, and rice or vermicelli.", link: "/recipes/payasam", image: "https://i.postimg.cc/xj7CnHBv/payasam1.jpg", hint: "rice pudding" },
    { name: "Shrikhand", festival: "Gudi Padwa", region: "West", description: "Creamy strained yogurt dessert flavored with saffron and cardamom.", link: "/recipes/shrikhand", image: "https://i.postimg.cc/mDn7NM2s/Sweets1.jpg", hint: "yogurt dessert" },
    { name: "Kothimbir Vadi", festival: "Gudi Padwa", region: "West", description: "Crispy, spiced cilantro fritters, a Maharashtrian favorite.", link: "/recipes/kothimbir-vadi", image: "https://i.postimg.cc/jj8gBsCj/puranpoli.jpg", hint: "coriander fritters" },
    { name: "Pitha", festival: "Bihu", region: "Northeast", description: "Assamese rice cakes with a sweet sesame and jaggery filling.", link: "/recipes/pitha", image: "https://i.postimg.cc/3WM2zqgN/bihu2.png", hint: "sesame rice cakes" },
    { name: "Laru", festival: "Bihu", region: "Northeast", description: "Traditional Assamese sweet coconut balls.", link: "/recipes/laru", image: "https://i.postimg.cc/nzrvDTx2/Diwali-Sweets.jpg", hint: "coconut ladoo" },
    { name: "Masor Tenga", festival: "Bihu", region: "Northeast", description: "A light and tangy Assamese fish curry.", link: "/recipes/fish-curry", image: "https://i.postimg.cc/V669tnff/Bihu-Dance-assam.jpg", hint: "fish curry" },
    { name: "Khechudi", festival: "Rath Yatra", region: "East", description: "Simple rice and lentil dish, part of Jagannath's Mahaprasad.", link: "/recipes/khechudi", image: "https://i.postimg.cc/YSpNpMyJ/sudarshan-poojary-FZw-Bem-Sc-Rc0-unsplash.jpg", hint: "rice lentils" },
    { name: "Dalma", festival: "Rath Yatra", region: "East", description: "Nutritious lentil and vegetable stew from Odisha.", link: "/recipes/dalma", image: "https://i.postimg.cc/YSpNpMyJ/sudarshan-poojary-FZw-Bem-Sc-Rc0-unsplash.jpg", hint: "lentil stew" },
    { name: "Poda Pitha", festival: "Rath Yatra", region: "East", description: "Slow-cooked, baked rice cake, a favorite of Lord Jagannath.", link: "/recipes/poda-pitha", image: "https://i.postimg.cc/YSpNpMyJ/sudarshan-poojary-FZw-Bem-Sc-Rc0-unsplash.jpg", hint: "baked rice cake" },
];

const festivals = [...new Set(allRecipes.map(r => r.festival))].sort();
const regions = [...new Set(allRecipes.map(r => r.region))].sort();
const sortOptions = ["Name (A-Z)", "Name (Z-A)"];

export default function RecipesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFestival, setSelectedFestival] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [sortOrder, setSortOrder] = useState(sortOptions[0]);

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedFestival('all');
        setSelectedRegion('all');
        setSortOrder(sortOptions[0]);
    };

    const filteredAndSortedRecipes = useMemo(() => {
        let recipes = allRecipes.filter(recipe => {
            const nameMatch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
            const festivalMatch = selectedFestival === 'all' || recipe.festival === selectedFestival;
            const regionMatch = selectedRegion === 'all' || recipe.region === selectedRegion;
            return nameMatch && festivalMatch && regionMatch;
        });

        if (sortOrder === "Name (A-Z)") {
            recipes.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === "Name (Z-A)") {
            recipes.sort((a, b) => b.name.localeCompare(a.name));
        }
        
        return recipes;
    }, [searchTerm, selectedFestival, selectedRegion, sortOrder]);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">The Utsavopedia Recipe Library</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Savor the authentic tastes of India. Find traditional, easy-to-follow recipes for every festival and region, from Diwali sweets to Onam feasts.
                </p>
            </div>

            <Card className="p-6 mb-12">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
                    <div className="relative w-full lg:col-span-2">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            placeholder="Search for a recipe (e.g., Ladoo, Biryani...)" 
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Select value={selectedFestival} onValueChange={setSelectedFestival}>
                        <SelectTrigger>
                            <SelectValue placeholder="By Festival" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Festivals</SelectItem>
                            {festivals.map(festival => (
                                <SelectItem key={festival} value={festival}>{festival}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                        <SelectTrigger>
                            <SelectValue placeholder="By Region" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Regions</SelectItem>
                            {regions.map(region => (
                                 <SelectItem key={region} value={region}>{region}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                     <Select value={sortOrder} onValueChange={setSortOrder}>
                        <SelectTrigger>
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                             {sortOptions.map(option => (
                                <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div className="lg:col-span-full flex justify-end">
                         <Button variant="ghost" onClick={resetFilters}>
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Reset Filters
                        </Button>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredAndSortedRecipes.length > 0 ? filteredAndSortedRecipes.map((recipe) => (
                    <Card key={recipe.name} className="overflow-hidden group flex flex-col">
                        <div className="relative h-64 w-full bg-black/5 overflow-hidden">
                          <Image src={recipe.image} alt={recipe.name} layout="fill" objectFit="cover" data-ai-hint={recipe.hint} className="transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl h-14">{recipe.name}</CardTitle>
                            <p className="text-sm text-primary">{recipe.festival} | {recipe.region}</p>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-grow">
                            <p className="text-sm text-foreground/70 h-16 flex-grow">{recipe.description}</p>
                            <Link href={recipe.link}>
                                <Button variant="outline" className="mt-4 w-full">View Recipe</Button>
                            </Link>
                        </CardContent>
                    </Card>
                )) : (
                     <p className="text-center md:col-span-4">No recipes found matching your criteria.</p>
                )}
            </div>
        </div>
    );
}
