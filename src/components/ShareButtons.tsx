
'use client';

import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Facebook, Twitter } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z"></path>
        <path d="M16.51 14.11c-.12-.06-1.57-.78-1.82-.87s-.43-.12-.62.12-.69.87-.84 1.04-.3.18-.55.06a6.79 6.79 0 0 1-2-1.23c-.6-.83-1-1.86-.94-2.82.05-.18 0-.3-.06-.42s-.3-.69-.42-.93c-.12-.24-.24-.3-.36-.3s-.24-.06-.36 0a1 1 0 0 0-.73.85 3.3 3.3 0 0 0 .93 2.68 5.94 5.94 0 0 0 2.52 2.12c2.24.93 2.52.87 2.94.81.42-.06 1.57-.65 1.8-1.29.22-.65.22-1.21.15-1.29-.06-.12-.24-.18-.36-.24z"></path>
    </svg>
);


export function ShareButtons({ title }: { title: string }) {
    const pathname = usePathname();
    const url = `https://utsavs.com${pathname}`;

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${url}`)}`;

    return (
        <div className="flex flex-col items-center gap-4 my-8 p-6 bg-secondary/30 rounded-lg">
            <h3 className="font-headline text-xl font-bold text-primary">Share this page</h3>
            <div className="flex gap-4">
                <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Share on Facebook</span>
                    </Button>
                </a>
                <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Share on Twitter</span>
                    </Button>
                </a>
                <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                        <WhatsAppIcon />
                        <span className="sr-only">Share on WhatsApp</span>
                    </Button>
                </a>
            </div>
        </div>
    );
}
