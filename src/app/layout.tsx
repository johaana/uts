
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
    icon: `data:image/svg+xml;base64,${btoa(`
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="76.8" fill="#F8E7E7"/>
      <path d="M128 204.8C134.4 179.2 153.6 160 172.8 160C192 160 204.8 172.8 204.8 192C204.8 211.2 192 224 172.8 224C153.6 224 134.4 243.2 128 268.8M384 204.8C377.6 179.2 358.4 160 339.2 160C319.999 160 307.2 172.8 307.2 192C307.2 211.2 319.999 224 339.2 224C358.4 224 377.6 243.2 384 268.8" stroke="#793937" stroke-width="19.2"/>
      <path d="M172.8 160C179.2 121.6 211.2 96 256 96C300.8 96 332.8 121.6 339.2 160M172.8 352C179.2 390.4 211.2 416 256 416C300.8 416 332.8 390.4 339.2 352" stroke="#793937" stroke-width="19.2" stroke-linecap="round"/>
      <path d="M128 307.2C134.4 332.8 153.6 352 172.8 352C192 352 204.8 339.2 204.8 320C204.8 300.8 192 288 172.8 288C153.6 288 134.4 268.8 128 243.2M384 307.2C377.6 332.8 358.4 352 339.2 352C319.999 352 307.2 339.2 307.2 320C307.2 300.8 319.999 288 339.2 288C358.4 288 377.6 268.8 384 243.2" stroke="#793937" stroke-width="19.2"/>
      <path d="M256 224C281.6 224 300.8 243.2 300.8 268.8C300.8 294.4 281.6 313.6 256 313.6C230.4 313.6 211.2 294.4 211.2 268.8C211.2 243.2 230.4 224 256 224Z" fill="#D32F2F" stroke="#F8E7E7" stroke-width="12.8"/>
      <path d="M256 204.8C263.467 204.8 268.8 211.433 268.8 217.6C268.8 223.767 263.467 230.4 256 230.4C248.533 230.4 243.2 223.767 243.2 217.6C243.2 211.433 248.533 204.8 256 204.8Z" fill="#F4E9E9"/>
    </svg>`)}`,
    shortcut: `data:image/svg+xml;base64,${btoa(`
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="76.8" fill="#F8E7E7"/>
      <path d="M128 204.8C134.4 179.2 153.6 160 172.8 160C192 160 204.8 172.8 204.8 192C204.8 211.2 192 224 172.8 224C153.6 224 134.4 243.2 128 268.8M384 204.8C377.6 179.2 358.4 160 339.2 160C319.999 160 307.2 172.8 307.2 192C307.2 211.2 319.999 224 339.2 224C358.4 224 377.6 243.2 384 268.8" stroke="#793937" stroke-width="19.2"/>
      <path d="M172.8 160C179.2 121.6 211.2 96 256 96C300.8 96 332.8 121.6 339.2 160M172.8 352C179.2 390.4 211.2 416 256 416C300.8 416 332.8 390.4 339.2 352" stroke="#793937" stroke-width="19.2" stroke-linecap="round"/>
      <path d="M128 307.2C134.4 332.8 153.6 352 172.8 352C192 352 204.8 339.2 204.8 320C204.8 300.8 192 288 172.8 288C153.6 288 134.4 268.8 128 243.2M384 307.2C377.6 332.8 358.4 352 339.2 352C319.999 352 307.2 339.2 307.2 320C307.2 300.8 319.999 288 339.2 288C358.4 288 377.6 268.8 384 243.2" stroke="#793937" stroke-width="19.2"/>
      <path d="M256 224C281.6 224 300.8 243.2 300.8 268.8C300.8 294.4 281.6 313.6 256 313.6C230.4 313.6 211.2 294.4 211.2 268.8C211.2 243.2 230.4 224 256 224Z" fill="#D32F2F" stroke="#F8E7E7" stroke-width="12.8"/>
      <path d="M256 204.8C263.467 204.8 268.8 211.433 268.8 217.6C268.8 223.767 263.467 230.4 256 230.4C248.533 230.4 243.2 223.767 243.2 217.6C243.2 211.433 248.533 204.8 256 204.8Z" fill="#F4E9E9"/>
    </svg>`)}`,
    apple: `data:image/svg+xml;base64,${btoa(`
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="76.8" fill="#F8E7E7"/>
      <path d="M128 204.8C134.4 179.2 153.6 160 172.8 160C192 160 204.8 172.8 204.8 192C204.8 211.2 192 224 172.8 224C153.6 224 134.4 243.2 128 268.8M384 204.8C377.6 179.2 358.4 160 339.2 160C319.999 160 307.2 172.8 307.2 192C307.2 211.2 319.999 224 339.2 224C358.4 224 377.6 243.2 384 268.8" stroke="#793937" stroke-width="19.2"/>
      <path d="M172.8 160C179.2 121.6 211.2 96 256 96C300.8 96 332.8 121.6 339.2 160M172.8 352C179.2 390.4 211.2 416 256 416C300.8 416 332.8 390.4 339.2 352" stroke="#793937" stroke-width="19.2" stroke-linecap="round"/>
      <path d="M128 307.2C134.4 332.8 153.6 352 172.8 352C192 352 204.8 339.2 204.8 320C204.8 300.8 192 288 172.8 288C153.6 288 134.4 268.8 128 243.2M384 307.2C377.6 332.8 358.4 352 339.2 352C319.999 352 307.2 339.2 307.2 320C307.2 300.8 319.999 288 339.2 288C358.4 288 377.6 268.8 384 243.2" stroke="#793937" stroke-width="19.2"/>
      <path d="M256 224C281.6 224 300.8 243.2 300.8 268.8C300.8 294.4 281.6 313.6 256 313.6C230.4 313.6 211.2 294.4 211.2 268.8C211.2 243.2 230.4 224 256 224Z" fill="#D32F2F" stroke="#F8E7E7" stroke-width="12.8"/>
      <path d="M256 204.8C263.467 204.8 268.8 211.433 268.8 217.6C268.8 223.767 263.467 230.4 256 230.4C248.533 230.4 243.2 223.767 243.2 217.6C243.2 211.433 248.533 204.8 256 204.8Z" fill="#F4E9E9"/>
    </svg>`)}`,
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
