import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Provider from '@/components/providers/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TimeZone - Премиальные часы',
  description:
    'Магазин премиальных часов. Качество, стиль и точность в каждой детали.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Provider>
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
