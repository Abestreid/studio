
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { content } from '@/lib/content';
import { Check } from 'lucide-react';

const proposalDate = new Date().toLocaleDateString('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const standardFeatures = [
    'Поиск по всем площадкам РБ',
    'Уведомления на Email',
    '5 сохраненных фильтров поиска',
    'Базовая аналитика по заказчикам',
    'Доступ для 1 пользователя',
    'Техническая поддержка по Email',
];

const proFeatures = [
    'Все функции тарифа "Стандарт"',
    'Выгрузка результатов в Excel',
    'Уведомления в Telegram',
    'Безлимитные фильтры поиска',
    'Расширенная аналитика и статистика',
    'Командный доступ до 5 пользователей',
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

                    {/* Tariffs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Tariff Standard */}
                        <Card className="border-primary/20 shadow-md flex flex-col">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl text-primary">Тариф «Стандарт»</CardTitle>
                                <CardDescription>Идеально для ИП и небольших компаний</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-center mb-6">
                                    <span className="text-4xl font-bold">45 BYN</span>
                                    <span className="text-muted-foreground">/мес (при оплате за 3 мес.)</span>
                                </p>
                                <ul className="space-y-3">
                                    {standardFeatures.map(feature => (
                                        <li key={feature} className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <div className="p-6 mt-auto">
                                <Button className="w-full" variant="outline">Выбрать Стандарт</Button>
                            </div>
                        </Card>

                        {/* Tariff Pro */}
                        <Card className="border-accent shadow-accent/20 shadow-lg flex flex-col">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl text-primary">Тариф «Профи»</CardTitle>
                                <CardDescription>Для тендерных отделов и опытных команд</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-center mb-6">
                                    <span className="text-4xl font-bold">50 BYN</span>
                                    <span className="text-muted-foreground">/мес (при оплате за 3 мес.)</span>
                                </p>
                                <ul className="space-y-3">
                                    {proFeatures.map(feature => (
                                        <li key={feature} className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                             <div className="p-6 mt-auto">
                                <Button className="w-full">Выбрать Профи</Button>
                            </div>
                        </Card>
                    </div>


                    {/* Footer */}
                    <div className="border-t pt-8 mt-8 text-sm text-muted-foreground text-center">
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
