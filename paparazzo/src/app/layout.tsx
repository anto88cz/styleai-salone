import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://paparazzoparrucchieri.it'),
  title: {
    default: 'Paparazzo Parrucchieri | Nanoplastia, Extensions, Color Correction - Catanzaro',
    template: '%s | Paparazzo Parrucchieri Catanzaro',
  },
  description:
    'Salone di lusso a Catanzaro specializzato in Nanoplastia, Hair Extensions e Color Correction. Tecnica, personalizzazione ed esperienza su misura. Prenota ora!',
  keywords: [
    'parrucchieri catanzaro',
    'hair extensions catanzaro',
    'nanoplastia catanzaro',
    'color correction catanzaro',
    'salone lusso catanzaro',
    'parrucchiere catanzaro centro',
  ],
  authors: [{ name: 'Paparazzo Parrucchieri' }],
  creator: 'Paparazzo Parrucchieri',
  publisher: 'Paparazzo Parrucchieri',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://paparazzoparrucchieri.it',
    siteName: 'Paparazzo Parrucchieri',
    title: 'Paparazzo Parrucchieri | Salone di Lusso a Catanzaro',
    description:
      'Salone specializzato in Nanoplastia, Hair Extensions e Color Correction. Lusso e tecnica per i tuoi capelli.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paparazzo Parrucchieri Catanzaro',
    description: 'Nanoplastia, Hair Extensions, Color Correction. Prenota ora!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white font-sans text-gray-900 antialiased">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
