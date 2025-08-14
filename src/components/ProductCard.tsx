
'use client';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
    name: string;
    price: string;
    link: string;
    image: string;
    description: string;
}

export function ProductCard({ name, price, link, image, description }: ProductCardProps) {
    return (
        <Card className="flex flex-col h-full overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                    <Image src={image} alt={name} layout="fill" objectFit="cover" className="bg-muted" />
                </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
                <CardTitle className="text-base font-bold leading-snug mb-2 h-10">{name}</CardTitle>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
            <CardFooter className="p-4 flex justify-between items-center bg-secondary/30">
                <p className="font-bold text-lg text-primary">INR {price}</p>
                <Link href={link} target="_blank" rel="noopener noreferrer nofollow">
                    <Button size="sm">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
