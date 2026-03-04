import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import IntroAnimation from '@/components/ui/IntroAnimation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import StickyCallBar from '@/components/ui/StickyCallBar';
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

export const metadata: Metadata = {
  title: 'TST Kumar Consultancy',
  description: 'Heavy Vehicles Consultancy based in Salem, Tamil Nadu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans text-text-slate bg-bg-gray flex flex-col min-h-screen">
        <IntroAnimation />
        <Header />
        <main className="flex-grow pt-[84px] md:pt-[114px]">
          {children}
        </main>
        <Footer />

        {/* Global Lead Generation Features */}
        <FloatingWhatsApp />
        <StickyCallBar />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
