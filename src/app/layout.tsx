import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackToTopButton } from '@/components/BackToTopButton';
import { Playfair_Display, PT_Sans } from 'next/font/google'
import Script from 'next/script';

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

export const metadata: Metadata = {
  title: "Utsavs: Your Definitive Guide to Indian Festivals",
  description: "Your essential guide to the dates, rituals, and stories behind India's vibrant celebrations. Discover authentic recipes, explore cultural traditions, and plan your year with our comprehensive festival calendar.",
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
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <BackToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
