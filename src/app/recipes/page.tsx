'use client';

import { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, RotateCcw, Utensils } from "lucide-react";
import Link from "next/link";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const allRecipes = [
    { name: "Meethe Chawal (Zarda Pulao)", festival: "Vasant Panchami", region: "North", description: "Fragrant sweet rice with saffron and nuts, celebrating spring's arrival.", link: "/recipes/meethe-chawal" },
    { name: "Khaja", festival: "Rath Yatra", region: "East", description: "Crispy, layered pastry sweetened with sugar syrup, an offering for Lord Jagannath.", link: "/recipes/khaja" },
    { name: "Malpua", festival: "Holi", region: "Nationwide", description: "Soft, syrupy pancakes, a rich and decadent treat for joyous occasions.", link: "/recipes/malpua" },
    { name: "Pinni", festival: "Lohri", region: "North", description: "A nutrient-dense winter sweet from Punjab, made with flour, ghee, and nuts.", link: "/recipes/pinni" },
    { name: "Ghevar", festival: "Teej", region: "North", description: "A disc-shaped, porous sweet from Rajasthan, soaked in sugar syrup.", link: "/recipes/ghevar" },
    { name: "Gajar Ka Halwa", festival: "Diwali", region: "North", description: "A rich carrot pudding made with milk, sugar, and ghee.", link: "/recipes/gajar-ka-halwa" },
    { name: "Puran Poli", festival: "Ganesh Chaturthi", region: "West", description: "Sweet flatbread stuffed with a lentil and jaggery filling.", link: "/recipes/puran-poli" },
    { name: "Ras Malai", festival: "Holi", region: "East", description: "Soft paneer discs soaked in sweetened, thickened milk.", link: "/recipes/ras-malai" },
    { name: "Modak", festival: "Ganesh Chaturthi", region: "West", description: "Steamed sweet dumplings filled with coconut and jaggery.", link: "/recipes/modak" },
    { name: "Thekua", festival: "Chhath Puja", region: "East", description: "A traditional deep-fried cookie made from wheat flour and jaggery.", link: "/recipes/thekua" },
    { name: "Besan Ladoo", festival: "Diwali", region: "Nationwide", description: "Ball-shaped sweets made of flour, fat, and sugar.", link: "/recipes/ladoo" },
    { name: "Gujiya", festival: "Holi", region: "North", description: "Sweet deep-fried dumplings filled with khoya and dried fruits.", link: "/recipes/gujiya" },
    { name: "Thandai", festival: "Holi", region: "North", description: "A cold drink prepared with a mixture of almonds, fennel seeds, and other spices.", link: "/recipes/thandai" },
    { name: "Sheer Khurma", festival: "Eid-al-Fitr", region: "Nationwide", description: "A rich and creamy vermicelli pudding made for Eid.", link: "/recipes/sheer-khurma" },
    { name: "Biryani", festival: "Eid-al-Fitr", region: "Nationwide", description: "Aromatic rice dish with meat or vegetables.", link: "/recipes/biryani" },
    { name: "Christmas Cake", festival: "Christmas", region: "Nationwide", description: "A traditional rich fruit cake, perfect for Christmas celebrations.", link: "/recipes/christmas-cake" },
    { name: "Rum Cake", festival: "Christmas", region: "Nationwide", description: "A rich, dense cake packed with rum-soaked dried fruits and spices.", link: "/recipes/rum-cake" },
    { name: "Kerala Roast Chicken", festival: "Christmas", region: "South", description: "A succulent roast chicken with a twist of Keralan spices.", link: "/recipes/kerala-roast-chicken" },
    { name: "Karah Prasad", festival: "Guru Nanak Jayanti", region: "Nationwide", description: "A sacred whole wheat flour pudding served at Gurdwaras.", link: "/recipes/karah-prasad" },
    { name: "Kaju Katli", festival: "Diwali", region: "Nationwide", description: "Melt-in-the-mouth cashew and milk fudge.", link: "/recipes/kaju-katli" },
    { name: "Coconut Barfi", festival: "Raksha Bandhan", region: "Nationwide", description: "Simple and delicious fudge made from coconut, milk, and sugar.", link: "/recipes/coconut-barfi" },
    { name: "Haleem", festival: "Eid-al-Fitr", region: "Nationwide", description: "A rich and savory stew of meat, lentils, and pounded wheat.", link: "/recipes/haleem" },
    { name: "Langarwali Dal", festival: "Guru Nanak Jayanti", region: "Nationwide", description: "A simple, wholesome lentil curry served in Gurdwaras.", link: "/recipes/langar-dal" },
    { name: "Avial", festival: "Onam", region: "South", description: "A mixed vegetable stew in a coconut and yogurt gravy.", link: "/recipes/avial" },
    { name: "Payasam", festival: "Onam", region: "South", description: "A traditional South Indian pudding made with milk, sugar, and rice or vermicelli.", link: "/recipes/payasam" },
    { name: "Shrikhand", festival: "Gudi Padwa", region: "West", description: "Creamy strained yogurt dessert flavored with saffron and cardamom.", link: "/recipes/shrikhand" },
    { name: "Kothimbir Vadi", festival: "Gudi Padwa", region: "West", description: "Crispy, spiced cilantro fritters, a Maharashtrian favorite.", link: "/recipes/kothimbir-vadi" },
    { name: "Pitha", festival: "Bihu", region: "Northeast", description: "Assamese rice cakes with a sweet sesame and jaggery filling.", link: "/recipes/pitha" },
    { name: "Laru", festival: "Bihu", region: "Northeast", description: "Traditional Assamese sweet coconut balls.", link: "/recipes/laru" },
    { name: "Masor Tenga", festival: "Bihu", region: "Northeast", description: "A light and tangy Assamese fish curry.", link: "/recipes/fish-curry" },
    { name: "Khechudi", festival: "Rath Yatra", region: "East", description: "Simple rice and lentil dish, part of Jagannath's Mahaprasad.", link: "/recipes/khechudi" },
    { name: "Dalma", festival: "Rath Yatra", region: "East", description: "Nutritious lentil and vegetable stew from Odisha.", link: "/recipes/dalma" },
    { name: "Poda Pitha", festival: "Rath Yatra", region: "East", description: "Slow-cooked, baked rice cake, a favorite of Lord Jagannath.", link: "/recipes/poda-pitha" },
    { name: "Aloo Gobi", festival: "Guru Nanak Jayanti", region: "North", description: "A classic North Indian dish of potatoes and cauliflower.", link: "/recipes/aloo-gobi" },
    { name: "Sakkarai Pongal", festival: "Pongal", region: "South", description: "A sweet rice and lentil pudding offered to the gods.", link: "/recipes/sakkarai-pongal" },
    { name: "Sambar", festival: "Onam", region: "South", description: "A tangy and flavorful lentil-based vegetable stew.", link: "/recipes/sambar" },
    { name: "Medu Vada", festival: "Pongal", region: "South", description: "Crispy, savory donut-shaped fritters served with sambar.", link: "/recipes/medu-vada" },
    { name: "Ven Pongal", festival: "Pongal", region: "South", description: "A savory and comforting rice and lentil dish.", link: "/recipes/ven-pongal" },
    { name: "Tilgul", festival: "Makar Sankranti", region: "West", description: "Ladoos made from sesame seeds and jaggery.", link: "/recipes/tilgul" },
    { name: "Khichdi", festival: "Makar Sankranti", region: "Nationwide", description: "A comforting one-pot dish of rice and lentils.", link: "/recipes/khichdi" },
    { name: "Sabudana Khichdi", festival: "Maha Shivaratri", region: "Nationwide", description: "A popular fasting dish made from tapioca pearls, potatoes, and peanuts.", link: "/recipes/sabudana-khichdi" },
    { name: "Kuttu ki Puri", festival: "Maha Shivaratri", region: "North", description: "A gluten-free, deep-fried bread made from buckwheat flour for fasting.", link: "/recipes/kuttu-ki-puri" },
    { name: "Makhane ki Kheer", festival: "Maha Shivaratri", region: "Nationwide", description: "A creamy pudding made from fox nuts, perfect for festive fasting.", link: "/recipes/makhane-ki-kheer" },
    { name: "Meethe Chawal", festival: "Vasant Panchami", region: "North", description: "A fragrant and sweet rice dish, often yellow in color.", link: "/recipes/meethe-chawal" },
    { name: "Khaja", festival: "Rath Yatra", region: "East", description: "Crispy, layered pastry sweetened with sugar syrup.", link: "/recipes/khaja" },
    { name: "Malpua", festival: "Holi", region: "Nationwide", description: "Soft, syrupy pancakes, a rich and decadent treat.", link: "/recipes/malpua" },
    { name: "Pinni", festival: "Lohri", region: "North", description: "A nutrient-dense winter sweet from Punjab.", link: "/recipes/pinni" },
    { name: "Ghevar", festival: "Teej", region: "North", description: "A disc-shaped, porous sweet from Rajasthan.", link: "/recipes/ghevar" },
].sort((a, b) => a.name.localeCompare(b.name));

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
        <div className="bg-[#F4F1E8] text-[#17151A] min-h-screen font-sans">
            <Header />
            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="text-left mb-16 space-y-6 max-w-4xl">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#E94368]">SACRED FLAVORS</span>
                        <div className="h-px flex-1 bg-[#17151A]/10"></div>
                    </div>
                    <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter leading-none">The Utsavs Recipe Library</h1>
                    <p className="text-xl text-[#6D6870] font-medium leading-relaxed">
                        Savor the authentic tastes of global traditions. High-precision instructions for sacred offerings and festive feasts.
                    </p>
                </div>

                <div className="grid md:grid-cols-[1fr_3fr] gap-12">
                    <aside className="space-y-8 h-fit sticky top-32">
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#6D6870]">Search recipes</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6D6870]" />
                                <Input 
                                    placeholder="Search library..." 
                                    className="pl-10 bg-white/50 border-[#17151A]/10"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                         <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#6D6870]">Festival</label>
                            <Select value={selectedFestival} onValueChange={setSelectedFestival}>
                                <SelectTrigger className="bg-white/50 border-[#17151A]/10">
                                    <SelectValue placeholder="All Festivals" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Festivals</SelectItem>
                                    {festivals.map(festival => (
                                        <SelectItem key={festival} value={festival}>{festival}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button variant="ghost" onClick={resetFilters} className="w-full text-[#6D6870] hover:text-[#17151A] text-xs font-bold uppercase tracking-widest pt-4 border-t border-[#17151A]/10">
                            <RotateCcw className="mr-2 h-3 w-3" /> Reset Filters
                        </Button>
                    </aside>

                    <main className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {filteredAndSortedRecipes.length > 0 ? filteredAndSortedRecipes.map((recipe) => (
                            <Link href={recipe.link} key={recipe.name} className="group">
                                <Card className="h-full bg-white border-[#17151A]/5 hover:border-[#17151A]/20 hover:shadow-lg transition-all duration-500 rounded-sm">
                                    <CardHeader className="p-8 pb-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">
                                                {recipe.festival}
                                            </Badge>
                                        </div>
                                        <CardTitle className="font-headline text-2xl font-bold group-hover:text-[#E94368] transition-colors leading-tight">
                                            {recipe.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-8 pt-0">
                                        <p className="text-sm text-[#6D6870] font-medium leading-relaxed mb-6">{recipe.description}</p>
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-[#17151A] uppercase tracking-widest">
                                            View Recipe →
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        )) : (
                            <div className="col-span-full py-24 text-center border-2 border-dashed border-[#17151A]/10 rounded-lg">
                                <p className="text-[#6D6870] italic">No recipes found matching your criteria.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}
