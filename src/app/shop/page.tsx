import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
    { name: "Embroidered Silk Saree", category: "Attire", price: "₹4,999", image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=400&h=400&fit=crop", hint: "silk saree", link: "#" },
    { name: "Hand-painted Clay Diyas", category: "Decor", price: "₹499", image: "https://images.unsplash.com/photo-1542641223-45543837943a?q=80&w=400&h=400&fit=crop", hint: "clay diyas", link: "#" },
    { name: "Kundan Jewelry Set", category: "Jewelry", price: "₹2,499", image: "https://images.unsplash.com/photo-1611195869082-f5c646547a4f?q=80&w=400&h=400&fit=crop", hint: "kundan necklace", link: "#" },
    { name: "Men's Silk Kurta", category: "Attire", price: "₹1,999", image: "https://images.unsplash.com/photo-1596791859345-83e4a935b340?q=80&w=400&h=400&fit=crop", hint: "men kurta", link: "#" },
    { name: "Puja Thali Set", category: "Decor", price: "₹899", image: "https://images.unsplash.com/photo-1602937817454-b529a3980a32?q=80&w=400&h=400&fit=crop", hint: "puja thali", link: "#" },
    { name: "Bandhani Dupatta", category: "Attire", price: "₹799", image: "https://images.unsplash.com/photo-1610992383173-9afd2f00ac43?q=80&w=400&h=400&fit=crop", hint: "colorful scarf", link: "#" },
    { name: "Temple Jhumkas", category: "Jewelry", price: "₹1,299", image: "https://images.unsplash.com/photo-1588444650739-fa19685311ad?q=80&w=400&h=400&fit=crop", hint: "gold earrings", link: "#" },
    { name: "Toran Door Hanging", category: "Decor", price: "₹599", image: "https://images.unsplash.com/photo-1617112582851-a9d524a87c1d?q=80&w=400&h=400&fit=crop", hint: "door decor", link: "#" },
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
