import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackToTopButton } from '@/components/BackToTopButton';

const APP_NAME = "Utsavs";
const APP_DESCRIPTION = "Explore the vibrant world of Indian festivals with Utsavs. Your complete guide to dates, history, traditions, recipes, and chants for Diwali, Holi, Navratri, and more for 2025 and 2026.";
const APP_URL = "https://utsavs.com";

export const metadata: Metadata = {
  title: {
    default: "Utsavs: Your Guide to Indian Festivals, Traditions & Recipes",
    template: "%s | Utsavs",
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  metadataBase: new URL(APP_URL),
  keywords: ['Indian festivals', 'Hindu festivals', 'Diwali', 'Holi', 'Navratri', 'Durga Puja', 'Ganesh Chaturthi', 'Indian culture', 'festival recipes', 'puja vidhi', 'festival calendar 2025', 'indian festival dates'],
  openGraph: {
    type: "website",
    url: APP_URL,
    title: {
      default: "Utsavs: Your Guide to Indian Festivals, Traditions & Recipes",
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
      default: "Utsavs: Your Guide to Indian Festivals, Traditions & Recipes",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
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
