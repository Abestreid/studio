
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Cta } from '@/components/landing/cta';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DatePickerWithRange } from '@/components/analytics/date-range-picker';
import { AreaChart, BarChart, DonutChart, LineChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, DollarSign, Target, Award, Percent } from 'lucide-react';
import { TendersByMonthChart } from '@/components/analytics/tenders-by-month-chart';
import { TendersByIndustryChart } from '@/components/analytics/tenders-by-industry-chart';

const kpiData = [
  {
    title: 'Общая стоимость',
    value: '2,420,387 BYN',
    change: '+11.5%',
    icon: <DollarSign className="w-6 h-6 text-muted-foreground" />,
  },
  {
    title: 'Выиграно тендеров',
    value: '38',
    change: '+18.2%',
    icon: <Award className="w-6 h-6 text-muted-foreground" />,
  },
  {
    title: 'Коэффициент побед',
    value: '24.7%',
    change: '+2.1%',
    icon: <Target className="w-6 h-6 text-muted-foreground" />,
  },
    {
    title: 'Средний чек',
    value: '63,694 BYN',
    change: '-3.2%',
    icon: <Percent className="w-6 h-6 text-muted-foreground" />,
  },
];

const recentWins = [
    { id: '1', title: 'Поставка офисной мебели', customer: 'Администрация г. Минска', amount: '34 500 BYN', date: '25.05.2025' },
    { id: '2', title: 'Ремонтные работы в офисе', customer: 'ООО "ТехноСтрой"', amount: '112,000 BYN', date: '22.05.2025' },
    { id: '3', title: 'Обслуживание кондиционеров', customer: 'Бизнес-центр "Столица"', amount: '15,800 BYN', date: '20.05.2025' },
    { id: '4', title: 'Закупка канцтоваров', customer: 'Государственный университет', amount: '8,200 BYN', date: '18.05.2025' },
    { id: '5', title: 'Разработка веб-сайта', customer: 'Частная клиника "Здоровье"', amount: '45,000 BYN', date: '15.05.2025' },
];


export default function AnalyticsPage() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 sm:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-primary">Аналитика</h1>
                    <p className="text-muted-foreground mt-1">Дашборд с ключевыми показателями по тендерам.</p>
                </div>
                <DatePickerWithRange />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {kpiData.map((kpi) => (
                    <Card key={kpi.title} className="shadow-sm hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                            {kpi.icon}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{kpi.value}</div>
                            <p className={`text-xs ${kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'} flex items-center gap-1 mt-1`}>
                                <ArrowUp className={`w-4 h-4 ${!kpi.change.startsWith('+') && 'rotate-180'}`} />
                                {kpi.change} за последний месяц
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
                <Card className="lg:col-span-3 shadow-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle>Динамика тендеров</CardTitle>
                        <CardDescription>Количество выигранных тендеров по месяцам</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TendersByMonthChart />
                    </CardContent>
                </Card>
                <Card className="lg:col-span-2 shadow-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle>Тендеры по отраслям</CardTitle>
                         <CardDescription>Распределение за выбранный период</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TendersByIndustryChart />
                    </CardContent>
                </Card>
            </div>
            
            <Card className="shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                    <CardTitle>Последние выигранные тендеры</CardTitle>
                    <CardDescription>Список последних успешных сделок.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Название тендера</TableHead>
                                <TableHead>Заказчик</TableHead>
                                <TableHead className="text-right">Сумма</TableHead>
                                <TableHead>Дата</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentWins.map((win) => (
                                <TableRow key={win.id}>
                                    <TableCell className="font-medium text-primary">{win.title}</TableCell>
                                    <TableCell className="text-muted-foreground">{win.customer}</TableCell>
                                    <TableCell className="text-right font-semibold text-accent">{win.amount}</TableCell>
                                    <TableCell className="text-muted-foreground">{win.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
      </main>
      <Cta
        title="Готовы принимать решения на основе данных?"
        description="Получите полный доступ к аналитике и начните выигрывать больше."
        buttonText="Попробовать бесплатно"
      />
      <Footer />
    </div>
  );
}
