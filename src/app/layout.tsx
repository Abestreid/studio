
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { ThemeSwitcher } from '@/components/theme-switcher';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Tendersoft — Платформа для поиска и аналитики тендеров',
  description: 'Автоматизированный поиск, аналитика и уведомления по тендерам и госзакупкам в Казахстане и Беларуси.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" style={{scrollBehavior: 'smooth'}} className={cn(inter.variable)} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-body antialiased bg-background">
        {children}
        <Toaster />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
