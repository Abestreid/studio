import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { ThemeSwitcher } from '@/components/theme-switcher';

const golos = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-golos',
});

export const metadata: Metadata = {
  title: 'Tendersoft.kz — Автоматизированный поиск тендеров',
  description: 'Все тендеры Беларуси в одном простом окне',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" style={{scrollBehavior: 'smooth'}} className={cn(golos.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-body antialiased bg-background" suppressHydrationWarning>
        {children}
        <Toaster />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
