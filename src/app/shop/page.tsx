import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
    { name: "Embroidered Silk Saree", category: "Attire", price: "₹4,999", link: "#" },
    { name: "Hand-painted Clay Diyas (Set of 12)", category: "Decor", price: "₹499", link: "#" },
    { name: "Kundan & Pearl Jewelry Set", category: "Jewelry", price: "₹2,499", link: "#" },
    { name: "Men's Lucknowi Chikankari Kurta", category: "Attire", price: "₹2,299", link: "#" },
    { name: "Brass Puja Thali Set", category: "Decor", price: "₹1,299", link: "#" },
    { name: "Bandhani Silk Dupatta", category: "Attire", price: "₹999", link: "#" },
    { name: "Antique Gold-Plated Jhumkas", category: "Jewelry", price: "₹1,299", link: "#" },
    { name: "Marigold & Mango Leaf Toran", category: "Decor", price: "₹799", link: "#" },
    { name: "Silver-Plated Rakhi for Brother", category: "Gifts", price: "₹399", link: "#" },
    { name: "Organic Holi Gulal (Pack of 5)", category: "Gifts", price: "₹599", link: "#" },
    { name: "Eco-Friendly Ganesha Idol", category: "Decor", price: "₹1,499", link: "#" },
    { name: "Diwali Sweets & Dry Fruits Hamper", category: "Gifts", price: "₹1,999", link: "#" },
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
