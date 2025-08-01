
'use client';

import Link from 'next/link';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
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
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { useRouter } from 'next/navigation';

const platforms = [
    { title: "Госзакупки", href: "/tenders/goszakupki" },
    { title: "Самрук-Казына", href: "/tenders/samruk-kazyna" },
    { title: "Коммерческие тендеры", href: "/tenders/commercial" },
    { title: "Закупки недропользователей", href: "/tenders/nedropolzovateli" },
]

const industries = [
    { title: "Тендеры на строительство и ремонт", href: "/tenders/industry/construction" },
    { title: "Тендеры на изготовление металлоконструкций", href: "/tenders/industry/metal" },
    { title: "Тендеры на проектирование зданий и сооружений", href: "/tenders/industry/design" },
    { title: "Тендеры на оборудование", href: "/tenders/industry/equipment" },
    { title: "Тендеры на выполнение работ", href: "/tenders/industry/works" },
    { title: "Тендеры на обслуживание", href: "/tenders/industry/service" },
    { title: "Тендеры на оказание услуг", href: "/tenders/industry/services-provision" },
    { title: "Тендеры на грузоперевозки", href: "/tenders/industry/logistics" },
    { title: "Тендеры на охрану объектов", href: "/tenders/industry/security" },
    { title: "Тендеры на строительство дорог", href: "/tenders/industry/roads" },
    { title: "Тендеры на поставку", href: "/tenders/industry/supply" },
]

const systemFeatures = [
    { title: "Детальный поиск тендеров", href: "/features/search" },
    { title: "Расширенная аналитика", href: "/features/analytics" },
    { title: "Проверка контрагентов", href: "/features/due-diligence" },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    const handleLoginStatus = () => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
    };

    useEffect(() => {
        handleLoginStatus();
        window.addEventListener('storage', handleLoginStatus);
        return () => {
            window.removeEventListener('storage', handleLoginStatus);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        window.dispatchEvent(new Event('storage'));
        router.push('/home2');
    };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/home2" className="flex items-center gap-2 text-decoration-none">
          <Image src="https://tendersoft.kz/logonavbar.svg" alt="Tendersoft Logo" width={40} height={40} />
          <span className="text-xl font-bold text-primary">Tendersoft</span>
        </Link>
        <nav className="hidden items-center gap-2 lg:flex">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Тендеры</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="grid w-[600px] grid-cols-2 gap-x-8 gap-y-4 p-4">
                                <div>
                                    <h3 className="font-semibold text-primary mb-2">Тендеры по площадкам</h3>
                                    <ul className="space-y-1">
                                    {platforms.map((component) => (
                                        <ListItem key={component.title} href={component.href} title={component.title}/>
                                    ))}
                                    </ul>
                                </div>
                                <div>
                                     <h3 className="font-semibold text-primary mb-2">Тендеры по отраслям</h3>
                                    <ul className="space-y-1">
                                    {industries.map((component) => (
                                        <ListItem key={component.title} href={component.href} title={component.title}/>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Возможности системы</NavigationMenuTrigger>
                         <NavigationMenuContent>
                            <ul className="grid w-[300px] gap-3 p-4">
                            {systemFeatures.map((component) => (
                                <ListItem key={component.title} href={component.href} title={component.title}/>
                            ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                     <NavigationMenuItem>
                        <Link href="/about" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                О компании
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/blog" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Новости
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                     <NavigationMenuItem>
                        <Link href="/contacts" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Контакты
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
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
                <SheetTitle className="sr-only">Меню</SheetTitle>
                <SheetDescription className="sr-only">Главная навигация по сайту</SheetDescription>
                <div className="flex h-full flex-col gap-8 p-6 pt-20">
                <nav className="flex flex-col gap-4">
                    {/* Mobile menu would need a different approach, maybe an Accordion */}
                    <Link href="/home2" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-muted-foreground transition-colors hover:text-primary">Главная</Link>
                    <Link href="/features" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-muted-foreground transition-colors hover:text-primary">Возможности</Link>
                    <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-muted-foreground transition-colors hover:text-primary">О компании</Link>
                    <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-muted-foreground transition-colors hover:text-primary">Новости</Link>
                    <Link href="/contacts" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-muted-foreground transition-colors hover:text-primary">Контакты</Link>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={props.href || '#'} ref={ref} className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 focus:bg-accent/10",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
