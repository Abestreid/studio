
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { UserCircle, LogOut, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';


const navLinks = [
  { href: '/', label: 'Тендеры' },
  { href: '/analytics', label: 'Аналитика' },
  { href: '/favorites', label: 'Избранное' },
  { href: '/pricing', label: 'Тарифы' },
  { href: '/blog', label: 'Блог' },
  { href: '/help', label: 'Помощь' },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [theme, setTheme] = useState('tendersoft');
    const router = useRouter();

    useEffect(() => {
        const checkLoginStatus = () => {
             const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
             setIsLoggedIn(loggedIn);
        }

        const handleThemeChange = () => {
          const currentTheme = localStorage.getItem('theme') || 'tendersoft';
          setTheme(currentTheme);
        };

        checkLoginStatus(); // Check on initial render
        handleThemeChange();


        window.addEventListener('storage', () => {
          checkLoginStatus();
          handleThemeChange();
        });
        
        // Clean up event listener
        return () => {
            window.removeEventListener('storage', () => {
              checkLoginStatus();
              handleThemeChange();
            });
        };

    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        // Dispatch storage event to notify other tabs/windows
        window.dispatchEvent(new Event('storage'));
        router.push('/');
    };

    const brandName = theme === 'rednet' ? 'redneT' : 'Tendersoft';


  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-decoration-none">
          <Image src="https://tendersoft.kz/logonavbar.svg" alt="Tendersoft Logo" width={40} height={40} />
          <span className="text-xl font-bold text-primary">{brandName}</span>
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
        <div className="hidden items-center gap-4 lg:flex">
          {isLoggedIn ? (
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                       <UserCircle className="h-6 w-6" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">user01</p>
                        <p className="text-xs leading-none text-muted-foreground">
                        user01@example.com
                        </p>
                    </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Выйти</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                    <Link href="/login">Войти</Link>
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <Link href="/register">Попробовать бесплатно</Link>
                </Button>
            </>
          )}
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
                 <Button variant="outline" size="icon" aria-label="Открыть меню">
                    <Menu className="h-6 w-6" />
                 </Button>
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
                   {isLoggedIn ? (
                        <Button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="w-full">
                           <LogOut className="mr-2 h-4 w-4" /> Выйти
                        </Button>
                   ) : (
                    <>
                        <Button variant="outline" className="w-full border-accent text-accent" asChild>
                        <Link href="/login" onClick={() => setIsMenuOpen(false)}>Войти</Link>
                        </Button>
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                        <Link href="/register" onClick={() => setIsMenuOpen(false)}>Попробовать бесплатно</Link>
                        </Button>
                    </>
                   )}
                </div>
                </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
