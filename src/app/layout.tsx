import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-headline',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Utsavs: Global Holiday Intelligence",
  description: "Understand the world's calendar. Structured, verified intelligence for holidays, festivals and observances.",
};

export const viewport: Viewport = {
  themeColor: "#0F1428",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} font-sans antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
