import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const title = 'Tiffany Halsell — Full-Stack Developer & Digital Operations Specialist';
const description =
  'Full-stack developer building digital systems that help businesses grow — Next.js, TypeScript, Shopify, APIs, SEO, and analytics.';

export const metadata: Metadata = {
  metadataBase: new URL('https://tiffanyhalsell.dev'),
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: 'https://tiffanyhalsell.dev',
    siteName: 'Tiffany Halsell',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
