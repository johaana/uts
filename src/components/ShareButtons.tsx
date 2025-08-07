
'use client';

import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Facebook, Twitter } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
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
