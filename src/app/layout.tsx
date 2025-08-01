
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Golos_Text } from 'next/font/google';
import { ThemeSwitcher } from '@/components/theme-switcher';

const golos = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-golos',
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
    <html lang="ru" style={{scrollBehavior: 'smooth'}} className={cn(golos.variable)} suppressHydrationWarning>
      <head>
      </head>
      <body className="font-body antialiased bg-background">
        {children}
        <Toaster />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
