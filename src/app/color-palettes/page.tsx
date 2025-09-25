
'use client';

import { PageLayout } from "@/components/PageLayout";

interface Palette {
    name: string;
    vibe: string;
    background: string;
    primary: string;
    accent: string;
}

const palettes: { theme: string; options: Palette[] }[] = [
    {
        theme: "Royal & Regal",
        options: [
            { name: "Royal Velvet", vibe: "Opulent, luxurious, and grand, like a palace durbar.", background: "240 20% 98%", primary: "265 65% 35%", accent: "45 85% 60%" },
            { name: "Maharaja's Ruby", vibe: "Strong, passionate, and regal.", background: "30 50% 97%", primary: "350 70% 45%", accent: "25 80% 55%" },
            { name: "Peacock Throne", vibe: "Elegant, majestic, and uniquely Indian.", background: "180 25% 96%", primary: "210 50% 40%", accent: "170 50% 45%" },
            { name: "Jaipur Palace", vibe: "Soft, romantic, and historic.", background: "25 40% 98%", primary: "340 60% 50%", accent: "20 50% 60%" },
        ]
    },
    {
        theme: "Earthy & Natural",
        options: [
            { name: "Monsoon Morning", vibe: "Calm, fresh, and serene, like the air after rain.", background: "210 20% 98%", primary: "220 30% 35%", accent: "120 40% 55%" },
            { name: "Terracotta & Clay", vibe: "Rustic, warm, and grounded.", background: "30 30% 95%", primary: "20 60% 45%", accent: "40 30% 50%" },
            { name: "Sandalwood & Saffron", vibe: "Spiritual, pure, and aromatic.", background: "40 60% 97%", primary: "30 70% 50%", accent: "35 95% 55%" },
            { name: "Himalayan Dawn", vibe: "Crisp, clean, and spiritual.", background: "200 40% 98%", primary: "205 35% 40%", accent: "40 90% 65%" },
        ]
    },
    {
        theme: "Vibrant & Festive",
        options: [
            { name: "Marigold & Fuchsia", vibe: "Energetic, celebratory, and quintessentially festive.", background: "45 100% 97%", primary: "325 80% 50%", accent: "35 100% 55%" },
            { name: "Spice Market", vibe: "Warm, aromatic, and full of life.", background: "35 100% 96%", primary: "15 80% 45%", accent: "40 90% 50%" },
            { name: "Rajasthani Desert", vibe: "Bright, bold, and artistic.", background: "50 40% 95%", primary: "280 50% 45%", accent: "350 90% 60%" },
            { name: "Konkan Coast", vibe: "Fresh, tropical, and lively.", background: "180 30% 97%", primary: "195 70% 40%", accent: "90 60% 55%" },
        ]
    },
    {
        theme: "Modern & Elegant",
        options: [
            { name: "Indigo & Coral", vibe: "Contemporary, stylish, and artistic.", background: "220 40% 98%", primary: "225 40% 30%", accent: "10 80% 60%" },
            { name: "Teal & Copper", vibe: "Sophisticated, rich, and modern.", background: "180 15% 96%", primary: "180 40% 30%", accent: "25 70% 55%" },
            { name: "Charcoal & Mint", vibe: "Clean, sleek, and refreshing.", background: "0 0% 97%", primary: "210 15% 20%", accent: "150 50% 60%" },
            { name: "Slate & Marigold", vibe: "Dramatic, high-contrast, and modern.", background: "220 10% 97%", primary: "220 25% 25%", accent: "40 95% 55%" },
        ]
    },
    {
        theme: "Unique & Artistic",
        options: [
            { name: "Handblock Print", vibe: "Artsy, organic, and traditional.", background: "35 25% 94%", primary: "215 35% 35%", accent: "0 50% 50%" },
            { name: "Vintage Bollywood", vibe: "Nostalgic, cinematic, and dramatic.", background: "45 30% 93%", primary: "25 40% 25%", accent: "180 50% 40%" },
            { name: "Painted Toy", vibe: "Playful, folk-art inspired, and bright.", background: "200 10% 95%", primary: "10 80% 55%", accent: "130 60% 50%" },
            { name: "Mughal Garden", vibe: "Delicate, intricate, and serene.", background: "100 20% 98%", primary: "140 30% 30%", accent: "330 60% 65%" },
        ]
    }
];

const Swatch = ({ hsl, className = '' }: { hsl: string; className?: string }) => (
    <div style={{ backgroundColor: `hsl(${hsl})` }} className={`w-full h-12 rounded-md shadow-inner ${className}`}></div>
);

const PaletteCard = ({ palette }: { palette: Palette }) => (
    <div className="border rounded-lg p-4 shadow-md bg-card">
        <h3 className="font-headline text-xl font-bold text-primary mb-1">{palette.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 h-10">{palette.vibe}</p>
        <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-foreground/80">
                <span>Background</span>
                <span>Primary</span>
                <span>Accent</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <Swatch hsl={palette.background} />
                <Swatch hsl={palette.primary} />
                <Swatch hsl={palette.accent} />
            </div>
        </div>
    </div>
);


export default function ColorPalettesPage() {
    return (
        <PageLayout>
             <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Color Palette Options</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                   Review the 20 different color schemes below to choose a new look and feel for the website.
                </p>
            </div>
            <div className="space-y-12">
                {palettes.map((theme) => (
                    <section key={theme.theme}>
                        <h2 className="font-headline text-3xl font-bold mb-6 text-primary border-b-2 pb-2">{theme.theme}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {theme.options.map(palette => (
                                <PaletteCard key={palette.name} palette={palette} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </PageLayout>
    );
}

