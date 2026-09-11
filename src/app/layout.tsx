import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Playfair_Display, Manrope, IBM_Plex_Mono, Newsreader } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Utsavs: Global Holiday Intelligence",
  description: "Understand the world's calendar. Structured, verified intelligence for holidays, festivals and observances.",
  other: {
    "google-adsense-account": "ca-pub-6080650236579757",
  },
};

export const viewport: Viewport = {
  themeColor: "#17151A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${manrope.variable} ${plexMono.variable} ${newsreader.variable} font-sans antialiased selection:bg-coral/20`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
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
