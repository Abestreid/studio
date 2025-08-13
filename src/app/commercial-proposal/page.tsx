
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { content } from '@/lib/content';
import { Check, X } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const proposalDate = new Date().toLocaleDateString('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const features = [
    { name: 'Поиск по всем площадкам РБ', standard: true, pro: true },
    { name: 'Уведомления на Email', standard: true, pro: true },
    { name: '5 сохраненных фильтров поиска', standard: true, pro: true },
    { name: 'Базовая аналитика по заказчикам', standard: true, pro: true },
    { name: 'Техническая поддержка по Email', standard: true, pro: true },
    { name: 'Доступ для 1 пользователя', standard: true, pro: true },
    { name: 'Выгрузка результатов в Excel', standard: false, pro: true },
    { name: 'Уведомления в Telegram', standard: false, pro: true },
    { name: 'Безлимитные фильтры поиска', standard: false, pro: true },
    { name: 'Расширенная аналитика и статистика', standard: false, pro: true },
    { name: 'Командный доступ до 5 пользователей', standard: false, pro: true },
    { name: 'Персональный менеджер', standard: false, pro: true },
];

const pricing = {
    standard: [
        { term: '3 месяца', pricePerMonth: 45, total: 135 },
        { term: '6 месяцев', pricePerMonth: 40, total: 240 },
        { term: '12 месяцев', pricePerMonth: 35, total: 420 },
    ],
    pro: [
        { term: '3 месяца', pricePerMonth: 50, total: 150 },
        { term: '6 месяцев', pricePerMonth: 45, total: 270 },
        { term: '12 месяцев', pricePerMonth: 40, total: 480 },
    ]
}

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
                <Card className="max-w-5xl mx-auto bg-white shadow-2xl p-8 sm:p-12 md:p-16 rounded-lg">
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
                    <div className="mb-10 text-center">
                        <p className="text-lg">Уважаемые партнеры,</p>
                        <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                            Предлагаем вашему вниманию тарифные планы на использование нашей платформы для поиска, аналитики и управления тендерами в Республике Беларусь. Мы уверены, что наши решения помогут оптимизировать ваши рабочие процессы и увеличить количество побед.
                        </p>
                    </div>

                    {/* Features Comparison Table */}
                     <div className="mb-12">
                        <h3 className="text-xl font-bold text-primary text-center mb-6">Сравнение функционала тарифов</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-2/4">Функционал</TableHead>
                                    <TableHead className="text-center">Стандарт</TableHead>
                                    <TableHead className="text-center">Профи</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {features.map((feature) => (
                                    <TableRow key={feature.name}>
                                        <TableCell className="font-medium">{feature.name}</TableCell>
                                        <TableCell className="text-center">
                                            {feature.standard ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                                        </TableCell>
                                         <TableCell className="text-center">
                                            {feature.pro ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>


                    {/* Pricing by Term */}
                     <div>
                        <h3 className="text-xl font-bold text-primary text-center mb-6">Стоимость доступа</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div>
                                <h4 className="font-semibold text-lg text-center mb-4">Тариф "Стандарт"</h4>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Срок доступа</TableHead>
                                            <TableHead>Цена в месяц (BYN)</TableHead>
                                            <TableHead className="text-right">Общая стоимость (BYN)</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {pricing.standard.map(p => (
                                            <TableRow key={p.term}>
                                                <TableCell>{p.term}</TableCell>
                                                <TableCell>{p.pricePerMonth}</TableCell>
                                                <TableCell className="text-right font-semibold">{p.total}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                             </div>
                              <div>
                                <h4 className="font-semibold text-lg text-center mb-4">Тариф "Профи"</h4>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Срок доступа</TableHead>
                                            <TableHead>Цена в месяц (BYN)</TableHead>
                                            <TableHead className="text-right">Общая стоимость (BYN)</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {pricing.pro.map(p => (
                                            <TableRow key={p.term}>
                                                <TableCell>{p.term}</TableCell>
                                                <TableCell>{p.pricePerMonth}</TableCell>
                                                <TableCell className="text-right font-semibold">{p.total}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                             </div>
                        </div>
                    </div>


                    {/* Footer */}
                    <div className="border-t pt-8 mt-12 text-sm text-muted-foreground text-center">
                        <p>С уважением, команда {brandName}.</p>
                        <p>Если у вас возникли вопросы, свяжитесь с нами по телефону или электронной почте.</p>
                        <div className="flex justify-center gap-4 mt-4">
                           <Button variant="outline" onClick={() => window.print()}>Распечатать</Button>
                           <Button asChild>
                                <a href="/pricing">Подробнее о тарифах</a>
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    </div>
  );
}
