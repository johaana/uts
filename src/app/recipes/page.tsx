

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
    { name: "Sheer Khurma", festival: "Eid-al-Fitr", region: "Nationwide", description: "A rich and creamy vermicelli pudding made for Eid.", link: "/recipes/sheer-khurma", image: "https://i.postimg.cc/Hk9V3k2k/sheer-kurma.jpg", hint: "vermicelli pudding" },
    { name: "Biryani", festival: "Eid-al-Fitr", region: "Nationwide", description: "Aromatic rice dish with meat or vegetables.", link: "/recipes/biryani", image: "https://i.postimg.cc/BQxh45tk/Mutton-Biryani.png", hint: "rice dish" },
    { name: "Christmas Cake", festival: "Christmas", region: "Nationwide", description: "A traditional rich fruit cake, perfect for Christmas celebrations.", link: "/recipes/christmas-cake", image: "https://i.postimg.cc/rFWd0JRW/christmas-cake.jpg", hint: "fruit cake" },
    { name: "Rum Cake", festival: "Christmas", region: "Nationwide", description: "A rich, dense cake packed with rum-soaked dried fruits and spices.", link: "/recipes/rum-cake", image: "https://i.postimg.cc/PxRHKB9x/rum-cake.webp", hint: "rum cake" },
    { name: "Kerala Roast Chicken", festival: "Christmas", region: "South", description: "A succulent roast chicken with a twist of Keralan spices.", link: "/recipes/kerala-roast-chicken", image: "https://i.postimg.cc/JnR8SJ6j/Kerala-chicken-roast.jpg", hint: "kerala roast chicken" },
    { name: "Karah Prasad", festival: "Guru Nanak Jayanti", region: "Nationwide", description: "A sacred whole wheat flour pudding served at Gurdwaras.", link: "/recipes/karah-prasad", image: "https://i.postimg.cc/zXgfBv19/karah-prasad.jpg", hint: "wheat pudding" },
    { name: "Kaju Katli", festival: "Diwali", region: "Nationwide", description: "Melt-in-the-mouth cashew and milk fudge.", link: "/recipes/kaju-katli", image: "https://i.postimg.cc/3ND3dSzg/Kaju-Katli.webp", hint: "cashew fudge" },
    { name: "Coconut Barfi", festival: "Raksha Bandhan", region: "Nationwide", description: "Simple and delicious fudge made from coconut, milk, and sugar.", link: "/recipes/coconut-barfi", image: "https://i.postimg.cc/V5QmM9c2/Coconut-Burfi.jpg", hint: "coconut fudge" },
    { name: "Haleem", festival: "Eid-al-Fitr", region: "Nationwide", description: "A rich and savory stew of meat, lentils, and pounded wheat.", link: "/recipes/haleem", image: "https://i.postimg.cc/FFYkmm9T/HALEEM.webp", hint: "meat stew" },
    { name: "Langarwali Dal", festival: "Guru Nanak Jayanti", region: "Nationwide", description: "A simple, wholesome lentil curry served in Gurdwaras.", link: "/recipes/langar-dal", image: "https://i.postimg.cc/d0qQ49TY/Langar-Wali-Dal.jpg", hint: "lentil curry" },
    { name: "Avial", festival: "Onam", region: "South", description: "A mixed vegetable stew in a coconut and yogurt gravy.", link: "/recipes/avial", image: "https://i.postimg.cc/MpJpjw6X/Aviyal.webp", hint: "vegetable stew" },
    { name: "Payasam", festival: "Onam", region: "South", description: "A traditional South Indian pudding made with milk, sugar, and rice or vermicelli.", link: "/recipes/payasam", image: "https://i.postimg.cc/59n9d7My/payasam.jpg", hint: "rice pudding" },
    { name: "Shrikhand", festival: "Gudi Padwa", region: "West", description: "Creamy strained yogurt dessert flavored with saffron and cardamom.", link: "/recipes/shrikhand", image: "https://i.postimg.cc/BbQqPD2J/shrikhand.webp", hint: "yogurt dessert" },
    { name: "Kothimbir Vadi", festival: "Gudi Padwa", region: "West", description: "Crispy, spiced cilantro fritters, a Maharashtrian favorite.", link: "/recipes/kothimbir-vadi", image: "https://i.postimg.cc/1XtQ3SZt/kothimbir-wadi1.webp", hint: "coriander fritters" },
    { name: "Pitha", festival: "Bihu", region: "Northeast", description: "Assamese rice cakes with a sweet sesame and jaggery filling.", link: "/recipes/pitha", image: "https://i.postimg.cc/PqWh6K4t/pitha.png", hint: "sesame rice cakes" },
    { name: "Laru", festival: "Bihu", region: "Northeast", description: "Traditional Assamese sweet coconut balls.", link: "/recipes/laru", image: "https://i.postimg.cc/MpjzBzff/laru.jpg", hint: "coconut ladoo" },
    { name: "Masor Tenga", festival: "Bihu", region: "Northeast", description: "A light and tangy Assamese fish curry.", link: "/recipes/fish-curry", image: "https://i.postimg.cc/6QJtLFCj/masor-tenga.webp", hint: "fish curry" },
    { name: "Khechudi", festival: "Rath Yatra", region: "East", description: "Simple rice and lentil dish, part of Jagannath's Mahaprasad.", link: "/recipes/khechudi", image: "https://i.postimg.cc/wvFzzvZZ/khechudi.jpg", hint: "rice lentils" },
    { name: "Dalma", festival: "Rath Yatra", region: "East", description: "Nutritious lentil and vegetable stew from Odisha.", link: "/recipes/dalma", image: "https://i.postimg.cc/1XjZgd9K/Dalma-jpg.webp", hint: "lentil stew" },
    { name: "Poda Pitha", festival: "Rath Yatra", region: "East", description: "Slow-cooked, baked rice cake, a favorite of Lord Jagannath.", link: "/recipes/poda-pitha", image: "https://i.postimg.cc/zXQJ3yv1/podapitha.jpg", hint: "baked rice cake" },
    { name: "Aloo Gobi", festival: "Guru Nanak Jayanti", region: "North", description: "A classic North Indian dish of potatoes and cauliflower.", link: "/recipes/aloo-gobi", image: "https://i.postimg.cc/d0qQ49TY/Langar-Wali-Dal.jpg", hint: "potato cauliflower" },
    { name: "Sakkarai Pongal", festival: "Pongal", region: "South", description: "A sweet rice and lentil pudding offered to the gods.", link: "/recipes/sakkarai-pongal", image: "https://i.postimg.cc/j2nb1MYh/sakkarai-pongal.webp", hint: "sweet rice pudding" },
    { name: "Sambar", festival: "Onam", region: "South", description: "A tangy and flavorful lentil-based vegetable stew.", link: "/recipes/sambar", image: "https://i.postimg.cc/Th86vnRv/Sambar-Recipe.jpg", hint: "lentil vegetable stew" },
    { name: "Medu Vada", festival: "Pongal", region: "South", description: "Crispy, savory donut-shaped fritters served with sambar.", link: "/recipes/medu-vada", image: "https://i.postimg.cc/BZRLnyb4/Medu-Vada.jpg", hint: "savory fritter" },
    { name: "Ven Pongal", festival: "Pongal", region: "South", description: "A savory and comforting rice and lentil dish.", link: "/recipes/ven-pongal", image: "https://i.postimg.cc/5001BxPT/Ven-Pongal.webp", hint: "savory rice pudding" },
    { name: "Tilgul", festival: "Makar Sankranti", region: "West", description: "Ladoos made from sesame seeds and jaggery.", link: "/recipes/tilgul", image: "https://i.postimg.cc/hGMcQJ0V/tilgul.webp", hint: "sesame ladoo" },
    { name: "Khichdi", festival: "Makar Sankranti", region: "Nationwide", description: "A comforting one-pot dish of rice and lentils.", link: "/recipes/khichdi", image: "https://i.postimg.cc/HkgrQybN/khichadi.webp", hint: "rice and lentils" },
    { name: "Sabudana Khichdi", festival: "Maha Shivaratri", region: "Nationwide", description: "A popular fasting dish made from tapioca pearls, potatoes, and peanuts.", link: "/recipes/sabudana-khichdi", image: "https://i.postimg.cc/3wRdZZ1y/sabudana-khichdi.jpg", hint: "tapioca pearl dish" },
    { name: "Kuttu ki Puri", festival: "Maha Shivaratri", region: "North", description: "A gluten-free, deep-fried bread made from buckwheat flour for fasting.", link: "/recipes/kuttu-ki-puri", image: "https://i.postimg.cc/RV76Chq0/kuttu-ki-puri.jpg", hint: "buckwheat bread" },
    { name: "Makhane ki Kheer", festival: "Maha Shivaratri", region: "Nationwide", description: "A creamy pudding made from fox nuts, perfect for festive fasting.", link: "/recipes/makhane-ki-kheer", image: "https://i.postimg.cc/bwLZb5xc/Makhane-ki-kheer.jpg", hint: "fox nut pudding" },
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
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="text-center mb-12">
                <h1 className="font-headline text-3xl md:text-5xl font-bold">The Utsavs Recipe Library</h1>
                <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                    Savor the authentic tastes of India. Find traditional, easy-to-follow recipes for every festival and region, from Diwali sweets to Onam feasts.
                </p>
            </div>

            <Card className="p-4 md:p-6 mb-12">
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

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredAndSortedRecipes.length > 0 ? filteredAndSortedRecipes.map((recipe) => (
                    <Card key={recipe.name} className="overflow-hidden group flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
                        <Link href={recipe.link} className="block">
                            <div className="relative h-40 md:h-56 w-full bg-black/5">
                            <Image src={recipe.image} alt={recipe.name} layout="fill" objectFit="cover" data-ai-hint={recipe.hint}/>
                             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>
                        </Link>
                        <CardHeader className="p-3 md:p-4">
                            <CardTitle className="font-headline text-lg md:text-xl">
                                <Link href={recipe.link}>{recipe.name}</Link>
                            </CardTitle>
                            <p className="text-xs md:text-sm text-primary font-semibold">{recipe.festival} | {recipe.region}</p>
                        </CardHeader>
                        <CardContent className="p-3 pt-0 md:p-4 md:pt-0 flex flex-col flex-grow">
                            <p className="text-sm text-foreground/70 flex-grow mb-3">{recipe.description}</p>
                             <Link href={recipe.link} className="mt-auto">
                                <Button variant="secondary" className="w-full h-8 text-xs md:h-9 md:text-sm">View Recipe</Button>
                            </Link>
                        </CardContent>
                    </Card>
                )) : (
                     <p className="text-center col-span-full">No recipes found matching your criteria.</p>
                )}
            </div>
        </div>
    );
}
