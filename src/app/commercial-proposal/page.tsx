
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Image from 'next/image';
import { content } from '@/lib/content';

const proposalDate = new Date().toLocaleDateString('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const tariff1 = [
    { months: 3, pricePerMonth: 45, total: 135, description: 'Поиск тендеров по всем площадкам РБ, уведомления на Email, 5 сохраненных фильтров.' },
    { months: 6, pricePerMonth: 40, total: 240, description: 'Поиск тендеров по всем площадкам РБ, уведомления на Email, 5 сохраненных фильтров.' },
    { months: 12, pricePerMonth: 35, total: 420, description: 'Поиск тендеров по всем площадкам РБ, уведомления на Email, 5 сохраненных фильтров.' },
];

const tariff2 = [
    { months: 3, pricePerMonth: 50, total: 150, description: 'Все функции тарифа "Стандарт" + выгрузка в Excel, уведомления в Telegram, безлимитные фильтры и базовая аналитика.' },
    { months: 6, pricePerMonth: 45, total: 270, description: 'Все функции тарифа "Стандарт" + выгрузка в Excel, уведомления в Telegram, безлимитные фильтры и базовая аналитика.' },
    { months: 12, pricePerMonth: 40, total: 480, description: 'Все функции тарифа "Стандарт" + выгрузка в Excel, уведомления в Telegram, безлимитные фильтры и базовая аналитика.' },
];


export default function CommercialProposalPage() {
    const theme = 'rednet'; // Hardcoded for this page style
    const logoSrc = (theme === 'rednet' || theme === 'rednet2') 
        ? '/images/logo-rednet.svg' 
        : 'https://tendersoft.kz/logonavbar.svg';
    const brandName = content[theme as keyof typeof content]?.header?.brandName || 'Tendersoft';

  return (
    <div className="bg-secondary/30 text-foreground flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow py-12 sm:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <Card className="max-w-4xl mx-auto bg-white shadow-2xl p-8 sm:p-12 md:p-16 rounded-lg">
                    {/* Header */}
                    <div className="flex justify-between items-start border-b pb-8 mb-8 border-dashed">
                        <div className="flex items-center gap-4">
                            <Image src={logoSrc} alt={`${brandName} Logo`} width={50} height={50} />
                            <div>
                                <h1 className="text-xl font-bold text-primary">{brandName}</h1>
                                <p className="text-muted-foreground text-sm">Поиск и аналитика тендеров</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <h2 className="text-2xl sm:text-3xl font-bold">Коммерческое предложение</h2>
                            <p className="text-muted-foreground mt-1">от {proposalDate}</p>
                        </div>
                    </div>

                    {/* Intro */}
                    <div className="mb-10">
                        <p className="text-lg">Уважаемые партнеры,</p>
                        <p className="text-muted-foreground mt-2">
                            Предлагаем вашему вниманию тарифные планы на использование нашей платформы для поиска, аналитики и управления тендерами в Республике Беларусь. Мы уверены, что наши решения помогут оптимизировать ваши рабочие процессы и увеличить количество побед.
                        </p>
                    </div>

                    {/* Tariff 1 */}
                    <Card className="mb-10 border-primary/20 shadow-md">
                        <CardHeader>
                            <CardTitle className="text-primary">Тариф «Стандарт»</CardTitle>
                             <CardDescription>Идеально подходит для индивидуальных специалистов и небольших компаний, которым необходим надежный инструмент для поиска тендеров.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[150px]">Срок доступа</TableHead>
                                        <TableHead>Цена за месяц (BYN)</TableHead>
                                        <TableHead>Общая стоимость (BYN)</TableHead>
                                        <TableHead>Краткое описание</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {tariff1.map((row) => (
                                        <TableRow key={row.months}>
                                            <TableCell className="font-medium">{row.months} мес.</TableCell>
                                            <TableCell>{row.pricePerMonth.toFixed(2)}</TableCell>
                                            <TableCell className="font-semibold">{row.total.toFixed(2)}</TableCell>
                                            <TableCell className="text-muted-foreground text-xs">{row.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                     {/* Tariff 2 */}
                    <Card className="mb-12 border-accent shadow-accent/20 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-primary">Тариф «Профи»</CardTitle>
                             <CardDescription>Оптимальное решение для тендерных отделов и компаний, стремящихся к максимальной эффективности и использованию аналитических инструментов.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[150px]">Срок доступа</TableHead>
                                        <TableHead>Цена за месяц (BYN)</TableHead>
                                        <TableHead>Общая стоимость (BYN)</TableHead>
                                        <TableHead>Краткое описание</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {tariff2.map((row) => (
                                        <TableRow key={row.months}>
                                            <TableCell className="font-medium">{row.months} мес.</TableCell>
                                            <TableCell>{row.pricePerMonth.toFixed(2)}</TableCell>
                                            <TableCell className="font-semibold">{row.total.toFixed(2)}</TableCell>
                                            <TableCell className="text-muted-foreground text-xs">{row.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    {/* Footer */}
                    <div className="border-t pt-8 mt-8 text-sm text-muted-foreground text-center">
                        <p>С уважением, команда {brandName}.</p>
                        <p>Если у вас возникли вопросы, свяжитесь с нами по телефону или электронной почте.</p>
                        <div className="flex justify-center gap-4 mt-4">
                           <Button variant="outline" onClick={() => window.print()}>Распечатать</Button>
                           <Button asChild>
                                <a href="/pricing">Выбрать тариф</a>
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    </div>
  );
}
