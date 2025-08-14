
'use client';

import { ProductCard } from './ProductCard';
import type { Product } from '@/lib/product-data';

interface ShoppingGuideProps {
    products: Product[];
    title?: string;
}

export function ShoppingGuide({ products, title = "Complete Your Celebration" }: ShoppingGuideProps) {
    if (!products || products.length === 0) {
        return null;
    }
    
    return (
        <div className="mt-12 pt-8 border-t border-dashed bg-secondary/30 -mx-6 md:-mx-10 px-6 md:px-10 py-8 rounded-lg">
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-6 text-primary">{title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <p className="text-xs text-center text-muted-foreground mt-6">As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
    );
}
