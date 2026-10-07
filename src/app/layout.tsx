import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { FirebaseClientProvider } from '@/firebase';
import Script from 'next/script';
import { CrispProvider } from '@/components/CrispProvider';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-headline',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

const siteTitle = "Going Abroad in 2026? Check Holidays First — Utsavs";
const siteDescription = "Free lookup of festivals, public holidays, closures, and working days across 92+ countries. Plan your travel, study, or business dates with confidence.";
const previewImage = "https://i.postimg.cc/bwJWCywk/Accessories-for-Airport-Travel.jpg";

export const metadata: Metadata = {
  metadataBase: new URL('https://utsavs.com'),
  title: siteTitle,
  description: siteDescription,
  applicationName: 'Utsavs',
  appleWebApp: {
    title: 'Utsavs',
    statusBarStyle: 'default',
    capable: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    siteName: 'Utsavs Global Intelligence',
    images: [{
      url: previewImage,
      width: 1200,
      height: 630,
      alt: 'Utsavs Global Holiday Intelligence',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [previewImage],
  }
};

export const viewport: Viewport = {
  themeColor: "#0F1428",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} font-sans antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4KFQ8L5SKW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4KFQ8L5SKW');
          `}
        </Script>
        {/* Crisp Chat */}
        <Script id="crisp-chat" strategy="afterInteractive">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="bddbc2df-e9be-4055-8157-00aa2a196901";
            (function(){
              d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
        <FirebaseClientProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              disableTransitionOnChange
            >
            <div className="flex min-h-screen flex-col">
              <CrispProvider />
              {children}
            </div>
            <Toaster />
          </ThemeProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
