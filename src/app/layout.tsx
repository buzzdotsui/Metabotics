import type { Metadata, Viewport } from 'next';
import { spaceGrotesk, inter, ibmPlexMono } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Metabotics — Software for the Physical World',
  description: 'Intelligent software infrastructure for industrial and metallurgical systems. From physical process to intelligent control.',
  keywords: ['industrial software', 'digital twin', 'industrial automation', 'metallurgy', 'process optimization', 'edge computing'],
  authors: [{ name: 'Metabotics' }],
  creator: 'Metabotics',
  publisher: 'Metabotics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://metabotics.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Metabotics',
    title: 'Metabotics — Software for the Physical World',
    description: 'Intelligent software infrastructure for industrial and metallurgical systems.',
    images: [
      {
        url: '/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Metabotics — Software for the Physical World',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metabotics — Software for the Physical World',
    description: 'Intelligent software infrastructure for industrial and metallurgical systems.',
    images: ['/brand/og-image.jpg'],
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
    icon: '/brand/favicon.svg',
    shortcut: '/brand/favicon.svg',
    apple: '/brand/logo.svg',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f3' },
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}