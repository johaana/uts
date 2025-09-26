
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackToTopButton } from '@/components/BackToTopButton';
import { Playfair_Display, PT_Sans } from 'next/font/google'
import Script from 'next/script';
import { BottomNavBar } from '@/components/BottomNavBar';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-headline',
})

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
})

const defaultTitle = "Utsavs - Your Ultimate Guide to Indian Festivals, Recipes & Culture";
const defaultDescription = "Explore India's vibrant festivals with our guide to dates, traditions, and stories. Discover authentic recipes, travel tips, and celebrate the spirit of every Utsav.";
const defaultUrl = "https://utsavs.com";
const defaultOgImage = "https://i.postimg.cc/mD8h1LzB/default-preview.jpg";

const logoSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="flameGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" style="stop-color:hsl(var(--gradient-from));stop-opacity:1" />
            <stop offset="100%" style="stop-color:hsl(var(--gradient-to));stop-opacity:1" />
        </linearGradient>
    </defs>
    <path d="M160 320C160 346.509 181.491 368 208 368H304C330.509 368 352 346.509 352 320V312C352 294.327 337.673 280 320 280H192C174.327 280 160 294.327 160 312V320Z" fill="hsl(var(--accent))"/>
    <path d="M256 280C256 248.667 256 144 256 144C256 144 304 200 256 280Z" fill="url(#flameGradient)"/>
</svg>
`;

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: defaultTitle,
  description: defaultDescription,
   icons: {
    icon: `data:image/svg+xml;base64,${btoa(logoSvg)}`,
    shortcut: `data:image/svg+xml;base64,${btoa(logoSvg)}`,
    apple: `data:image/svg+xml;base64,${btoa(logoSvg)}`,
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: defaultUrl,
    siteName: 'Utsavs',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'A vibrant collage of Indian festivals',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  other: {
    "google-adsense-account": "ca-pub-6080650236579757",
  },
};

export const viewport: Viewport = {
  themeColor: "hsl(10 80% 60%)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6080650236579757"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${playfair.variable} ${ptSans.variable} font-body antialiased`}>
        <div className="flex min-h-screen flex-col pb-20 md:pb-0">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <BottomNavBar />
        <BackToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
