
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Тендеры' },
  { href: '/analytics', label: 'Аналитика' },
  { href: '#favorites', label: 'Избранное' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#blog', label: 'Блог' },
  { href: '#help', label: 'Помощь' },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-decoration-none">
          <Image src="https://tendersoft.kz/logonavbar.svg" alt="Tendersoft Logo" width={40} height={40} />
          <span className="text-xl font-bold text-primary">Tendersoft</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-full after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Войти</Button>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Попробовать бесплатно</Button>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
                 <button
                    aria-label="Открыть меню"
                    className={cn(
                        "burger z-50 flex h-8 w-8 cursor-pointer flex-col items-center justify-center gap-1.5 transition-all",
                        isMenuOpen && "active"
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                    <span className={cn("h-0.5 w-6 rounded-full bg-foreground transition-all", isMenuOpen && "translate-y-2 rotate-45")}></span>
                    <span className={cn("h-0.5 w-6 rounded-full bg-foreground transition-all", isMenuOpen && "opacity-0")}></span>
                    <span className={cn("h-0.5 w-6 rounded-full bg-foreground transition-all", isMenuOpen && "-translate-y-2 -rotate-45")}></span>
                </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-0">
                <div className="flex h-full flex-col gap-8 p-6 pt-20">
                <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xl font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        {link.label}
                    </Link>
                    ))}
                </nav>
                <div className="mt-auto flex flex-col gap-3">
                    <Button variant="outline" className="w-full border-accent text-accent">Войти</Button>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Попробовать бесплатно</Button>
                </div>
                </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
