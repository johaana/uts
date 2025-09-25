
import { PageLayout } from "@/components/PageLayout";

const palettes = [
    {
        theme: "Vibrant & Festive",
        name: "Jaipur Gemstone",
        colors: {
            background: "hsl(330, 30%, 98%)",
            text: "hsl(330, 20%, 20%)",
            primary: "hsl(325, 70%, 48%)",
            accent: "hsl(170, 55%, 40%)",
        },
        hsl: {
            background: "330 30% 98%",
            text: "330 20% 20%",
            primary: "325 70% 48%",
            accent: "170 55% 40%",
        }
    },
    {
        theme: "Vibrant & Festive",
        name: "Mughal Garden",
        colors: {
            background: "hsl(120, 20%, 98%)",
            text: "hsl(120, 30%, 25%)",
            primary: "hsl(145, 50%, 42%)",
            accent: "hsl(340, 70%, 65%)",
        },
        hsl: {
            background: "120 20% 98%",
            text: "120 30% 25%",
            primary: "145 50% 42%",
            accent: "340 70% 65%",
        }
    },
    {
        theme: "Vibrant & Festive",
        name: "Holi Gulal",
        colors: {
            background: "hsl(0, 0%, 100%)",
            text: "hsl(250, 40%, 20%)",
            primary: "hsl(270, 70%, 55%)",
            accent: "hsl(45, 100%, 55%)",
        },
        hsl: {
            background: "0 0% 100%",
            text: "250 40% 20%",
            primary: "270 70% 55%",
            accent: "45 100% 55%",
        }
    },
    {
        theme: "Vibrant & Festive",
        name: "Kathakali Colors",
        colors: {
            background: "hsl(35, 80%, 97%)",
            text: "hsl(15, 50%, 20%)",
            primary: "hsl(0, 80%, 50%)",
            accent: "hsl(150, 60%, 40%)",
        },
        hsl: {
            background: "35 80% 97%",
            text: "15 50% 20%",
            primary: "0 80% 50%",
            accent: "150 60% 40%",
        }
    },
    {
        theme: "Vibrant & Festive",
        name: "Bandhani Tie-Dye",
        colors: {
            background: "hsl(220, 30%, 98%)",
            text: "hsl(220, 50%, 25%)",
            primary: "hsl(210, 80%, 55%)",
            accent: "hsl(50, 100%, 60%)",
        },
        hsl: {
            background: "220 30% 98%",
            text: "220 50% 25%",
            primary: "210 80% 55%",
            accent: "50 100% 60%",
        }
    },
    {
        theme: "Earthy & Spiritual",
        name: "Ganges Clay",
        colors: {
            background: "hsl(30, 20%, 95%)",
            text: "hsl(25, 25%, 25%)",
            primary: "hsl(20, 50%, 40%)",
            accent: "hsl(190, 30%, 50%)",
        },
        hsl: {
            background: "30 20% 95%",
            text: "25 25% 25%",
            primary: "20 50% 40%",
            accent: "190 30% 50%",
        }
    },
    {
        theme: "Earthy & Spiritual",
        name: "Yogic Calm",
        colors: {
            background: "hsl(210, 25%, 97%)",
            text: "hsl(220, 20%, 30%)",
            primary: "hsl(220, 25%, 45%)",
            accent: "hsl(30, 70%, 60%)",
        },
        hsl: {
            background: "210 25% 97%",
            text: "220 20% 30%",
            primary: "220 25% 45%",
            accent: "30 70% 60%",
        }
    },
    {
        theme: "Earthy & Spiritual",
        name: "Himalayan Salt",
        colors: {
            background: "hsl(350, 40%, 98%)",
            text: "hsl(350, 20%, 30%)",
            primary: "hsl(345, 60%, 55%)",
            accent: "hsl(210, 20%, 65%)",
        },
        hsl: {
            background: "350 40% 98%",
            text: "350 20% 30%",
            primary: "345 60% 55%",
            accent: "210 20% 65%",
        }
    },
    {
        theme: "Earthy & Spiritual",
        name: "Neem & Turmeric",
        colors: {
            background: "hsl(60, 40%, 98%)",
            text: "hsl(90, 30%, 20%)",
            primary: "hsl(80, 40%, 35%)",
            accent: "hsl(45, 80%, 55%)",
        },
        hsl: {
            background: "60 40% 98%",
            text: "90 30% 20%",
            primary: "80 40% 35%",
            accent: "45 80% 55%",
        }
    },
    {
        theme: "Earthy & Spiritual",
        name: "Sacred Ash (Vibhuti)",
        colors: {
            background: "hsl(210, 15%, 96%)",
            text: "hsl(210, 10%, 25%)",
            primary: "hsl(210, 15%, 40%)",
            accent: "hsl(15, 90%, 58%)",
        },
        hsl: {
            background: "210 15% 96%",
            text: "210 10% 25%",
            primary: "210 15% 40%",
            accent: "15 90% 58%",
        }
    },
    {
        theme: "Royal & Heritage",
        name: "Mysore Silk",
        colors: {
            background: "hsl(40, 80%, 97%)",
            text: "hsl(25, 60%, 20%)",
            primary: "hsl(350, 65%, 42%)",
            accent: "hsl(45, 80%, 60%)",
        },
        hsl: {
            background: "40 80% 97%",
            text: "25 60% 20%",
            primary: "350 65% 42%",
            accent: "45 80% 60%",
        }
    },
    {
        theme: "Royal & Heritage",
        name: "Jodhpur Blue",
        colors: {
            background: "hsl(210, 40%, 98%)",
            text: "hsl(210, 40%, 20%)",
            primary: "hsl(215, 70%, 50%)",
            accent: "hsl(30, 90%, 60%)",
        },
        hsl: {
            background: "210 40% 98%",
            text: "210 40% 20%",
            primary: "215 70% 50%",
            accent: "30 90% 60%",
        }
    },
    {
        theme: "Royal & Heritage",
        name: "Emerald & Pearl",
        colors: {
            background: "hsl(0, 0%, 100%)",
            text: "hsl(150, 20%, 25%)",
            primary: "hsl(160, 60%, 35%)",
            accent: "hsl(40, 20%, 70%)",
        },
        hsl: {
            background: "0 0% 100%",
            text: "150 20% 25%",
            primary: "160 60% 35%",
            accent: "40 20% 70%",
        }
    },
    {
        theme: "Royal & Heritage",
        name: "Bronze Temple",
        colors: {
            background: "hsl(30, 40%, 96%)",
            text: "hsl(30, 40%, 15%)",
            primary: "hsl(30, 50%, 30%)",
            accent: "hsl(180, 40%, 50%)",
        },
        hsl: {
            background: "30 40% 96%",
            text: "30 40% 15%",
            primary: "30 50% 30%",
            accent: "180 40% 50%",
        }
    },
    {
        theme: "Royal & Heritage",
        name: "Rajputana Sunset",
        colors: {
            background: "hsl(20, 60%, 97%)",
            text: "hsl(25, 30%, 20%)",
            primary: "hsl(15, 75%, 48%)",
            accent: "hsl(280, 40%, 60%)",
        },
        hsl: {
            background: "20 60% 97%",
            text: "25 30% 20%",
            primary: "15 75% 48%",
            accent: "280 40% 60%",
        }
    },
    {
        theme: "Modern & Minimalist",
        name: "Modern Varanasi",
        colors: {
            background: "hsl(240, 10%, 98%)",
            text: "hsl(240, 10%, 15%)",
            primary: "hsl(220, 15%, 30%)",
            accent: "hsl(340, 100%, 65%)",
        },
        hsl: {
            background: "240 10% 98%",
            text: "240 10% 15%",
            primary: "220 15% 30%",
            accent: "340 100% 65%",
        }
    },
    {
        theme: "Modern & Minimalist",
        name: "Slate & Turmeric",
        colors: {
            background: "hsl(0, 0%, 100%)",
            text: "hsl(220, 20%, 22%)",
            primary: "hsl(220, 20%, 40%)",
            accent: "hsl(45, 95%, 55%)",
        },
        hsl: {
            background: "0 0% 100%",
            text: "220 20% 22%",
            primary: "220 20% 40%",
            accent: "45 95% 55%",
        }
    },
    {
        theme: "Modern & Minimalist",
        name: "Ink & Parchment",
        colors: {
            background: "hsl(40, 25%, 95%)",
            text: "hsl(220, 25%, 15%)",
            primary: "hsl(220, 25%, 25%)",
            accent: "hsl(10, 60%, 50%)",
        },
        hsl: {
            background: "40 25% 95%",
            text: "220 25% 15%",
            primary: "220 25% 25%",
            accent: "10 60% 50%",
        }
    },
    {
        theme: "Modern & Minimalist",
        name: "Olive & Cream",
        colors: {
            background: "hsl(50, 50%, 98%)",
            text: "hsl(80, 25%, 20%)",
            primary: "hsl(80, 30%, 35%)",
            accent: "hsl(35, 40%, 60%)",
        },
        hsl: {
            background: "50 50% 98%",
            text: "80 25% 20%",
            primary: "80 30% 35%",
            accent: "35 40% 60%",
        }
    },
    {
        theme: "Modern & Minimalist",
        name: "Charcoal & Lime",
        colors: {
            background: "hsl(0, 0%, 97%)",
            text: "hsl(0, 0%, 10%)",
            primary: "hsl(0, 0%, 25%)",
            accent: "hsl(80, 80%, 50%)",
        },
        hsl: {
            background: "0 0% 97%",
            text: "0 0% 10%",
            primary: "0 0% 25%",
            accent: "80 80% 50%",
        }
    }
];


const groupedPalettes = palettes.reduce((acc, palette) => {
    (acc[palette.theme] = acc[palette.theme] || []).push(palette);
    return acc;
}, {} as Record<string, typeof palettes>);


export default function ColorPalettesPage() {
  return (
    <PageLayout>
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Color Palette Options</h1>
            <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Here are 20 new color palette options to choose from. Each card shows how the background, text, primary, and accent colors will look together.
            </p>
        </div>

        {Object.entries(groupedPalettes).map(([theme, themePalettes]) => (
            <div key={theme} className="mb-12">
                <h2 className="font-headline text-3xl font-bold mb-6 border-b pb-2">{theme}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {themePalettes.map((palette) => (
                        <div key={palette.name} className="border rounded-lg overflow-hidden shadow-sm">
                            <div className="p-6" style={{ backgroundColor: palette.colors.background }}>
                                <h3 className="font-headline text-2xl font-bold" style={{ color: palette.colors.primary }}>{palette.name}</h3>
                                <p className="mt-2 text-sm" style={{ color: palette.colors.text }}>
                                    This is sample body text to demonstrate readability. The <a href="#" style={{ color: palette.colors.accent, fontWeight: 'bold' }}>accent color</a> is used for links.
                                </p>
                                <button className="mt-4 px-4 py-2 text-sm font-semibold rounded-md" style={{ backgroundColor: palette.colors.primary, color: 'white' }}>
                                    Primary Button
                                </button>
                            </div>
                            <div className="bg-muted p-4 text-xs text-muted-foreground border-t">
                                <div className="grid grid-cols-2 gap-2">
                                    <div><strong>BG:</strong> {palette.hsl.background}</div>
                                    <div><strong>Text:</strong> {palette.hsl.text}</div>
                                    <div><strong>Primary:</strong> {palette.hsl.primary}</div>
                                    <div><strong>Accent:</strong> {palette.hsl.accent}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </PageLayout>
  );
}
