import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.shortName}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  icons: {
    icon: '/Slogo.png',
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  themeColor: '#050505',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';
import SpotlightBackground from '@/components/SpotlightBackground';

// ... imports ...

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-text antialiased">
        <div className="absolute inset-0 -z-10 bg-grid-lines opacity-40" aria-hidden />
        <SpotlightBackground />
        <Navbar />
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
