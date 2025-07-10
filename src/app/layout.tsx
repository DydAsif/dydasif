import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AOSProvider from '@/components/AOSProvider';
import { ChatWidget } from '@/components/chat/chat-widget';

export const metadata: Metadata = {
  title: 'Ashfakur Rahman Asif - Digital Marketing Portfolio',
  description: 'Digital Marketing Strategist & Tracking Expert specializing in GA4, Meta CAPI, and funnel automation. I make your ads track better.',
  openGraph: {
    title: 'Ashfakur Rahman Asif - Digital Marketing Portfolio',
    description: 'Digital Marketing Strategist & Tracking Expert specializing in GA4, Meta CAPI, and funnel automation.',
    images: [
      {
        url: 'https://i.ibb.co/yBMzR8nS/upscalemedia-transformed.png',
        width: 1200,
        height: 630,
        alt: 'Ashfakur Rahman Asif - Digital Marketing Portfolio',
      },
    ],
    type: 'website',
  },
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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <AOSProvider>
          {children}
        </AOSProvider>
        <ChatWidget />
        <Toaster />
      </body>
    </html>
  );
}
