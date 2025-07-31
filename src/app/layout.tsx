import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Utsavs: Your Guide to Indian Festivals, Traditions & Recipes',
  description: 'Explore the vibrant world of Indian festivals with Utsavs. Your complete guide to dates, history, traditions, recipes, and chants for Diwali, Holi, Navratri, and more.',
  keywords: ['Indian festivals', 'Hindu festivals', 'Diwali', 'Holi', 'Navratri', 'Durga Puja', 'Ganesh Chaturthi', 'Indian culture', 'festival recipes', 'puja vidhi', 'festival calendar'],
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
        <Toaster />
      </body>
    </html>
  );
}
