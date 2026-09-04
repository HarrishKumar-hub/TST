import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import IntroAnimation from '@/components/ui/IntroAnimation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExitIntentPopup from '@/components/ui/ExitIntentPopup';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const siteUrl = process.env.NODE_ENV === 'production' 
  ? 'https://harrishkumar-hub.github.io/TST'
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TST Kumar Lorry Consultancy | Direct Yard Tipper Dealership Sankari',
    template: '%s | TST Kumar Consultancy'
  },
  description: 'Direct owner heavy vehicle dealership in Sankari, Salem District, Tamil Nadu. Specializing in verified 6-wheel and 10-wheel tipper trucks, Ashok Leyland, Tata, and BharatBenz machinery with 100% clear RC titles.',
  keywords: [
    'TST Kumar Consultancy',
    'Sankari tipper dealer',
    'Salem heavy vehicles',
    'used tipper truck Tamil Nadu',
    'Ashok Leyland 1612 tipper',
    'Tata SK 1212 tipper',
    'BharatBenz 1217C tipper',
    'lorry consultancy Sankari',
    'direct owner tipper sale'
  ],
  authors: [{ name: 'TST Kumar Consultancy' }],
  creator: 'TST Kumar Consultancy',
  publisher: 'TST Kumar Consultancy',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: 'TST Kumar Lorry Consultancy | Direct Yard Heavy Vehicles Sankari',
    description: 'Skip the broker. Verified 6-wheel and 10-wheel tipper trucks in Sankari, Tamil Nadu with 100-Point Mechanical Inspection and clear RC titles.',
    url: siteUrl,
    siteName: 'TST Kumar Consultancy',
    images: [
      {
        url: `${siteUrl}/images/logo_text.png`,
        width: 1200,
        height: 630,
        alt: 'TST Kumar Lorry Consultancy Sankari'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TST Kumar Lorry Consultancy | Direct Yard Heavy Vehicles',
    description: 'Verified 6-wheel & 10-wheel tipper trucks in Sankari, Tamil Nadu.',
    images: [`${siteUrl}/images/logo_text.png`],
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
  icons: {
    icon: `${siteUrl}/favicon.ico`,
    apple: `${siteUrl}/images/tst-kumar-logo.svg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    'name': 'TST Kumar Lorry Consultancy',
    'image': `${siteUrl}/images/logo_text.png`,
    '@id': `${siteUrl}/#organization`,
    'url': siteUrl,
    'telephone': '+919443744349',
    'email': 'info@tstkumar.in',
    'priceRange': '₹₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Ambal Nagar, Manjakalpatti, Devanakavandanur',
      'addressLocality': 'Sankari',
      'addressRegion': 'Tamil Nadu',
      'postalCode': '637301',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 11.4789,
      'longitude': 77.8732
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'sameAs': [
      siteUrl
    ],
    'description': 'Direct owner heavy vehicle dealership in Sankari, Salem District, Tamil Nadu. Specializing in verified 6-wheel and 10-wheel tippers with clear RC titles.'
  };

  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-text-slate bg-bg-gray flex flex-col min-h-screen">
        <IntroAnimation />
        <Header />
        <main className="flex-grow pt-[84px] md:pt-[114px]">
          {children}
        </main>
        <Footer />

        {/* Global Lead Generation Features */}
        <ExitIntentPopup />
      </body>
    </html>
  );
}
