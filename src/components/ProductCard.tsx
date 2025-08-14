
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Product } from '@/lib/product-data';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    if (!product) {
        return null;
    }

    return (
        <Card className="overflow-hidden group flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl h-full">
            <div className="relative h-48 w-full bg-secondary/30">
                 <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" data-ai-hint={product.hint}/>
            </div>
            <CardContent className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-base leading-tight mb-2 flex-grow group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                    <p className="font-headline text-2xl font-bold text-primary">INR {product.price}</p>
                    <a href={product.link} target="_blank" rel="noopener noreferrer nofollow">
                        <Button size="sm">Buy Now</Button>
                    </a>
                </div>
            </CardContent>
        </Card>
    );
}
