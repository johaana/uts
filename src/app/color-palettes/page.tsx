
import { PageLayout } from "@/components/PageLayout";

const palettes = [
    {
        theme: "Vibrant & Festive",
        name: "Marigold & Fuchsia",
        colors: {
            background: "hsl(45, 100%, 97%)",
            text: "hsl(330, 30%, 25%)",
            primary: "hsl(325, 80%, 50%)",
            accent: "hsl(35, 100%, 55%)",
        },
        hsl: {
            background: "45 100% 97%",
            text: "330 30% 25%",
            primary: "325 80% 50%",
            accent: "35 100% 55%",
        }
    },
    {
        theme: "Vibrant & Festive",
        name: "Peacock Dance",
        colors: {
            background: "hsl(180, 25%, 98%)",
            text: "hsl(200, 30%, 20%)",
            primary: "hsl(190, 70%, 40%)",
            accent: "hsl(80, 60%, 45%)",
        },
        hsl: {
            background: "180 25% 98%",
            text: "200 30% 20%",
            primary: "190 70% 40%",
            accent: "80 60% 45%",
        }
    },
    {
        theme: "Vibrant & Festive",
        name: "Rajasthani Desert",
        colors: {
            background: "hsl(30, 60%, 95%)",
            text: "hsl(25, 40%, 25%)",
            primary: "hsl(10, 80%, 50%)",
            accent: "hsl(260, 60%, 60%)",
        },
        hsl: {
            background: "30 60% 95%",
            text: "25 40% 25%",
            primary: "10 80% 50%",
            accent: "260 60% 60%",
        }
    },
    {
        theme: "Vibrant & Festive",
        name: "South Indian Silk",
        colors: {
            background: "hsl(270, 40%, 98%)",
            text: "hsl(270, 20%, 20%)",
            primary: "hsl(280, 80%, 55%)",
            accent: "hsl(160, 70%, 40%)",
        },
        hsl: {
            background: "270 40% 98%",
            text: "270 20% 20%",
            primary: "280 80% 55%",
            accent: "160 70% 40%",
        }
    },
    {
        theme: "Vibrant & Festive",
        name: "Holi Splash",
        colors: {
            background: "hsl(0, 0%, 100%)",
            text: "hsl(240, 20%, 30%)",
            primary: "hsl(340, 90%, 58%)",
            accent: "hsl(180, 85%, 40%)",
        },
        hsl: {
            background: "0 0% 100%",
            text: "240 20% 30%",
            primary: "340 90% 58%",
            accent: "180 85% 40%",
        }
    },
    {
        theme: "Earthy & Natural",
        name: "Sandalwood & Saffron",
        colors: {
            background: "hsl(40, 60%, 97%)",
            text: "hsl(30, 30%, 20%)",
            primary: "hsl(30, 70%, 50%)",
            accent: "hsl(35, 95%, 55%)",
        },
        hsl: {
            background: "40 60% 97%",
            text: "30 30% 20%",
            primary: "30 70% 50%",
            accent: "35 95% 55%",
        }
    },
    {
        theme: "Earthy & Natural",
        name: "Monsoon Earth",
        colors: {
            background: "hsl(100, 10%, 95%)",
            text: "hsl(100, 15%, 25%)",
            primary: "hsl(110, 30%, 35%)",
            accent: "hsl(210, 30%, 55%)",
        },
        hsl: {
            background: "100 10% 95%",
            text: "100 15% 25%",
            primary: "110 30% 35%",
            accent: "210 30% 55%",
        }
    },
    {
        theme: "Earthy & Natural",
        name: "Terracotta & Clay",
        colors: {
            background: "hsl(25, 30%, 96%)",
            text: "hsl(20, 25%, 20%)",
            primary: "hsl(15, 60%, 45%)",
            accent: "hsl(40, 30%, 60%)",
        },
        hsl: {
            background: "25 30% 96%",
            text: "20 25% 20%",
            primary: "15 60% 45%",
            accent: "40 30% 60%",
        }
    },
    {
        theme: "Earthy & Natural",
        name: "Spiced Chai",
        colors: {
            background: "hsl(35, 40%, 94%)",
            text: "hsl(25, 40%, 20%)",
            primary: "hsl(20, 45%, 40%)",
            accent: "hsl(160, 30%, 50%)",
        },
        hsl: {
            background: "35 40% 94%",
            text: "25 40% 20%",
            primary: "20 45% 40%",
            accent: "160 30% 50%",
        }
    },
    {
        theme: "Earthy & Natural",
        name: "Jute & Indigo",
        colors: {
            background: "hsl(45, 30%, 92%)",
            text: "hsl(220, 30%, 25%)",
            primary: "hsl(215, 40%, 40%)",
            accent: "hsl(30, 60%, 55%)",
        },
        hsl: {
            background: "45 30% 92%",
            text: "220 30% 25%",
            primary: "215 40% 40%",
            accent: "30 60% 55%",
        }
    },
    {
        theme: "Royal & Regal",
        name: "Maharaja's Ruby",
        colors: {
            background: "hsl(350, 50%, 98%)",
            text: "hsl(350, 40%, 20%)",
            primary: "hsl(345, 80%, 45%)",
            accent: "hsl(25, 80%, 60%)",
        },
        hsl: {
            background: "350 50% 98%",
            text: "350 40% 20%",
            primary: "345 80% 45%",
            accent: "25 80% 60%",
        }
    },
    {
        theme: "Royal & Regal",
        name: "Peacock Throne",
        colors: {
            background: "hsl(180, 25%, 96%)",
            text: "hsl(200, 40%, 20%)",
            primary: "hsl(210, 50%, 40%)",
            accent: "hsl(170, 50%, 45%)",
        },
        hsl: {
            background: "180 25% 96%",
            text: "200 40% 20%",
            primary: "210 50% 40%",
            accent: "170 50% 45%",
        }
    },
    {
        theme: "Royal & Regal",
        name: "Golden Howdah",
        colors: {
            background: "hsl(40, 30%, 98%)",
            text: "hsl(35, 50%, 20%)",
            primary: "hsl(45, 100%, 40%)",
            accent: "hsl(350, 60%, 55%)",
        },
        hsl: {
            background: "40 30% 98%",
            text: "35 50% 20%",
            primary: "45 100% 40%",
            accent: "350 60% 55%",
        }
    },
    {
        theme: "Royal & Regal",
        name: "Zari & Brocade",
        colors: {
            background: "hsl(50, 20%, 95%)",
            text: "hsl(30, 30%, 15%)",
            primary: "hsl(40, 80%, 35%)",
            accent: "hsl(220, 40%, 55%)",
        },
        hsl: {
            background: "50 20% 95%",
            text: "30 30% 15%",
            primary: "40 80% 35%",
            accent: "220 40% 55%",
        }
    },
    {
        theme: "Royal & Regal",
        name: "Udaipur Lake",
        colors: {
            background: "hsl(200, 40%, 97%)",
            text: "hsl(210, 30%, 22%)",
            primary: "hsl(205, 60%, 48%)",
            accent: "hsl(280, 50%, 65%)",
        },
        hsl: {
            background: "200 40% 97%",
            text: "210 30% 22%",
            primary: "205 60% 48%",
            accent: "280 50% 65%",
        }
    },
    {
        theme: "Modern & Elegant",
        name: "Indigo & Coral",
        colors: {
            background: "hsl(220, 40%, 98%)",
            text: "hsl(220, 25%, 20%)",
            primary: "hsl(225, 40%, 30%)",
            accent: "hsl(10, 80%, 60%)",
        },
        hsl: {
            background: "220 40% 98%",
            text: "220 25% 20%",
            primary: "225 40% 30%",
            accent: "10 80% 60%",
        }
    },
    {
        theme: "Modern & Elegant",
        name: "Mint & Charcoal",
        colors: {
            background: "hsl(150, 30%, 98%)",
            text: "hsl(210, 15%, 20%)",
            primary: "hsl(210, 15%, 25%)",
            accent: "hsl(150, 55%, 50%)",
        },
        hsl: {
            background: "150 30% 98%",
            text: "210 15% 20%",
            primary: "210 15% 25%",
            accent: "150 55% 50%",
        }
    },
    {
        theme: "Modern & Elegant",
        name: "Lavender & Slate",
        colors: {
            background: "hsl(250, 30%, 97%)",
            text: "hsl(240, 20%, 25%)",
            primary: "hsl(240, 30%, 45%)",
            accent: "hsl(300, 70%, 70%)",
        },
        hsl: {
            background: "250 30% 97%",
            text: "240 20% 25%",
            primary: "240 30% 45%",
            accent: "300 70% 70%",
        }
    },
    {
        theme: "Modern & Elegant",
        name: "Rosewater & Ink",
        colors: {
            background: "hsl(340, 60%, 98%)",
            text: "hsl(240, 25%, 15%)",
            primary: "hsl(240, 20%, 25%)",
            accent: "hsl(340, 80%, 65%)",
        },
        hsl: {
            background: "340 60% 98%",
            text: "240 25% 15%",
            primary: "240 20% 25%",
            accent: "340 80% 65%",
        }
    },
    {
        theme: "Modern & Elegant",
        name: "Handblock Print",
        colors: {
            background: "hsl(35, 25%, 94%)",
            text: "hsl(215, 25%, 30%)",
            primary: "hsl(215, 35%, 35%)",
            accent: "hsl(0, 50%, 50%)",
        },
        hsl: {
            background: "35 25% 94%",
            text: "215 25% 30%",
            primary: "215 35% 35%",
            accent: "0 50% 50%",
        }
    },
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
                                <button className="mt-4 px-4 py-2 text-sm font-semibold rounded-md text-white" style={{ backgroundColor: palette.colors.primary }}>
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
