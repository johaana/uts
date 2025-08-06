
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackToTopButton } from '@/components/BackToTopButton';

const APP_NAME = "Utsavs";
const APP_DESCRIPTION = "Your definitive guide to Indian festivals. Explore dates, rituals, recipes, and the stories behind Diwali, Holi, Navratri, and more.";
const APP_URL = "https://utsavs.com";

export const metadata: Metadata = {
  title: {
    default: "Utsavs: Your Definitive Guide to Indian Festivals | Recipes & Traditions",
    template: "%s | Utsavs",
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  metadataBase: new URL(APP_URL),
  keywords: ['Indian festivals', 'Hindu festivals', 'Indian festival calendar', 'Diwali', 'Holi', 'Navratri', 'Durga Puja', 'Ganesh Chaturthi', 'Indian culture', 'festival recipes', 'puja vidhi', 'festival dates'],
  openGraph: {
    type: "website",
    url: APP_URL,
    title: {
      default: "Utsavs: Your Definitive Guide to Indian Festivals | Recipes & Traditions",
      template: "%s | Utsavs",
    },
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [{
      url: `${APP_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: "A collage of vibrant Indian festival images",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Utsavs: Your Definitive Guide to Indian Festivals | Recipes & Traditions",
      template: "%s | Utsavs",
    },
    description: APP_DESCRIPTION,
     images: [{
      url: `${APP_URL}/og-image.png`,
      alt: "A collage of vibrant Indian festival images",
    }],
  },
};

export const viewport: Viewport = {
  themeColor: "#2A3A8A", // Deep Indigo
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE_HERE" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_CLIENT_ID_HERE" crossOrigin="anonymous"></script>
      </head>
      <body className="font-body antialiased">
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
