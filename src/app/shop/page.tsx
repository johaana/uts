import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
    { name: "Embroidered Silk Saree", category: "Attire", price: "₹4,999", image: "https://placehold.co/400x400.png", hint: "silk saree", link: "#" },
    { name: "Hand-painted Clay Diyas", category: "Decor", price: "₹499", image: "https://placehold.co/400x400.png", hint: "clay diyas", link: "#" },
    { name: "Kundan Jewelry Set", category: "Jewelry", price: "₹2,499", image: "https://placehold.co/400x400.png", hint: "kundan necklace", link: "#" },
    { name: "Men's Silk Kurta", category: "Attire", price: "₹1,999", image: "https://placehold.co/400x400.png", hint: "men kurta", link: "#" },
    { name: "Puja Thali Set", category: "Decor", price: "₹899", image: "https://placehold.co/400x400.png", hint: "puja thali", link: "#" },
    { name: "Bandhani Dupatta", category: "Attire", price: "₹799", image: "https://placehold.co/400x400.png", hint: "colorful scarf", link: "#" },
    { name: "Temple Jhumkas", category: "Jewelry", price: "₹1,299", image: "https://placehold.co/400x400.png", hint: "gold earrings", link: "#" },
    { name: "Toran Door Hanging", category: "Decor", price: "₹599", image: "https://placehold.co/400x400.png", hint: "door decor", link: "#" },
];

export default function ShopPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <ShoppingBag className="mx-auto h-16 w-16 text-primary mb-4" />
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Festive Shop</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Find the perfect attire, decor, and gifts for your celebrations. We've curated a collection of beautiful products from our affiliate partners.
                </p>
            </div>
            
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                <Button variant="outline" size="lg">All</Button>
                <Button variant="outline" size="lg">Attire</Button>
                <Button variant="outline" size="lg">Decor</Button>
                <Button variant="outline" size="lg">Jewelry</Button>
                <Button variant="outline" size="lg">Gifts</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <Card key={product.name} className="overflow-hidden group">
                        <Image src={product.image} alt={product.name} width={400} height={400} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={product.hint} />
                        <CardHeader>
                            <p className="text-sm text-muted-foreground">{product.category}</p>
                            <CardTitle className="font-headline text-xl h-14">{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-between items-center">
                            <p className="text-lg font-bold text-primary">{product.price}</p>
                            <Link href={product.link} target="_blank" rel="noopener noreferrer">
                                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
             <p className="text-center mt-12 text-sm text-muted-foreground">As an affiliate, we may earn from qualifying purchases. This helps support Utsavs.</p>
        </div>
    );
}
