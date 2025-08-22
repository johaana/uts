
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


export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: defaultTitle,
  description: defaultDescription,
   icons: {
    icon: 'https://i.postimg.cc/mgpVBZ79/utsavs-logo.png',
    shortcut: 'https://i.postimg.cc/mgpVBZ79/utsavs-logo.png',
    apple: 'https://i.postimg.cc/mgpVBZ79/utsavs-logo.png',
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
  themeColor: "#D32F2F",
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
