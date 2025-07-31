import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
    { name: "Embroidered Silk Saree", category: "Attire", price: "₹4,999", image: "https://images.unsplash.com/photo-1583196827559-90d95c5549b4?q=80&w=400&h=400&fit=crop", hint: "silk saree", link: "#" },
    { name: "Hand-painted Clay Diyas (Set of 12)", category: "Decor", price: "₹499", image: "https://images.unsplash.com/photo-1542888260-1014a4561033?q=80&w=400&h=400&fit=crop", hint: "clay diyas", link: "#" },
    { name: "Kundan & Pearl Jewelry Set", category: "Jewelry", price: "₹2,499", image: "https://images.unsplash.com/photo-1616782415250-424b91f13b6c?q=80&w=400&h=400&fit=crop", hint: "kundan necklace", link: "#" },
    { name: "Men's Lucknowi Chikankari Kurta", category: "Attire", price: "₹2,299", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400&h=400&fit=crop", hint: "men kurta", link: "#" },
    { name: "Brass Puja Thali Set", category: "Decor", price: "₹1,299", image: "https://images.unsplash.com/photo-1604435924739-429948033575?q=80&w=400&h=400&fit=crop", hint: "puja thali", link: "#" },
    { name: "Bandhani Silk Dupatta", category: "Attire", price: "₹999", image: "https://images.unsplash.com/photo-1594909122845-11baa439b78f?q=80&w=400&h=400&fit=crop", hint: "colorful scarf", link: "#" },
    { name: "Antique Gold-Plated Jhumkas", category: "Jewelry", price: "₹1,299", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400&h=400&fit=crop", hint: "gold earrings", link: "#" },
    { name: "Marigold & Mango Leaf Toran", category: "Decor", price: "₹799", image: "https://images.unsplash.com/photo-1604435924739-429948033575?q=80&w=400&h=400&fit=crop", hint: "door decor", link: "#" },
    { name: "Silver-Plated Rakhi for Brother", category: "Gifts", price: "₹399", image: "https://images.unsplash.com/photo-1628045350380-4d5162a04944?q=80&w=400&h=400&fit=crop", hint: "rakhi thread", link: "#" },
    { name: "Organic Holi Gulal (Pack of 5)", category: "Gifts", price: "₹599", image: "https://images.unsplash.com/photo-1580538257844-94aa7d781d3d?q=80&w=400&h=400&fit=crop", hint: "holi colors", link: "#" },
    { name: "Eco-Friendly Ganesha Idol", category: "Decor", price: "₹1,499", image: "https://images.unsplash.com/photo-1596791834185-a7c3315a4523?q=80&w=400&h=400&fit=crop", hint: "ganesha idol", link: "#" },
    { name: "Diwali Sweets & Dry Fruits Hamper", category: "Gifts", price: "₹1,999", image: "https://images.unsplash.com/photo-1613542911293-9a572a135316?q=80&w=400&h=400&fit=crop", hint: "sweets gift box", link: "#" },
];

export default function ShopPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <ShoppingBag className="mx-auto h-16 w-16 text-primary mb-4" />
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Festive Shop</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Find the perfect attire, decor, and gifts for your celebrations. We've curated a collection of beautiful products from our affiliate partners to make your festivals even more special.
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
