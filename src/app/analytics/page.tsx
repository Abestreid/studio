
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Download, FileText, BarChart3, Users, Target } from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        icon: <Users className="w-8 h-8 text-accent mb-4" />,
        title: "Профили заказчиков и подрядчиков",
        description: "Анализируйте историю участий, побед и поражений любого участника рынка. Оценивайте надежность и выбирайте правильных партнеров."
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-accent mb-4" />,
        title: "История цен и динамика участия",
        description: "Отслеживайте, как менялись цены на аналогичные закупки в прошлом, чтобы сформировать лучшее предложение."
    },
    {
        icon: <Target className="w-8 h-8 text-accent mb-4" />,
        title: "Оценка вероятности победы",
        description: "Наш алгоритм анализирует конкурентов и заказчика, чтобы дать вам прогноз шансов на успех в конкретном тендере."
    },
];

const benefits = [
    "Сокращаете расходы, участвуя только в выгодных процедурах",
    "Планируете загрузку производства, зная календарь закупок заранее",
    "Усиливаете коммерческое предложение, опираясь на слабые места конкурентов"
];

export default function AnalyticsPage() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-secondary/30">
        <section className="py-12 sm:py-16 text-center bg-primary text-white">
            <div className="container mx-auto px-4 md:px-6">
                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Расширенная аналитика тендеров</h1>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">Принимайте решения на основе данных, а не интуиции.</p>
            </div>
        </section>

        <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="section-title">Что вы получаете</h2>
                 <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <Card key={index} className="text-center p-6 shadow-lg rounded-2xl border-t-4 border-accent">
                             {feature.icon}
                            <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-12 sm:py-16 bg-white">
             <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Как это помогает бизнесу</h2>
                        <ul className="space-y-4">
                           {benefits.map((benefit, index) => (
                             <li key={index} className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 shrink-0" />
                                <span className="text-lg text-foreground/80">{benefit}</span>
                            </li>
                           ))}
                        </ul>
                         <div className="mt-8 flex gap-4">
                            <Button size="lg">Попробовать модуль аналитики 7 дней бесплатно</Button>
                            <Button size="lg" variant="outline">Скачать пример отчета</Button>
                        </div>
                    </div>
                     <div className="bg-muted p-8 rounded-2xl shadow-inner">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-primary flex items-center gap-2"><FileText /> Пример отчета</CardTitle>
                                <CardDescription>Анализ конкурентной среды по закупке "Поставка офисных кресел"</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">На основе данных по 5 последним аналогичным тендерам.</p>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between"><span>Среднее снижение цены:</span> <span className="font-bold text-primary">12.5%</span></div>
                                    <div className="flex justify-between"><span>Ключевой конкурент:</span> <span className="font-bold text-primary">ООО "Мебель-Торг"</span></div>
                                    <div className="flex justify-between"><span>Вероятность победы:</span> <Badge variant="default" className="bg-green-100 text-green-800">Высокая</Badge></div>
                                </div>
                                <Button variant="outline" className="w-full mt-6"><Download className="mr-2 h-4 w-4"/> Скачать полный отчет в PDF</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
