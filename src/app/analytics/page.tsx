
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DatePickerWithRange } from '@/components/analytics/date-range-picker';
import { TendersByMonthChart } from '@/components/analytics/tenders-by-month-chart';
import { TendersByIndustryChart } from '@/components/analytics/tenders-by-industry-chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  FileDown,
  Filter,
  Save,
  Search,
  BookOpen,
  Map,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Image from 'next/image';

const recentWins = [
    { id: '1', title: 'Поставка офисной мебели', status: 'Завершено', openDate: '10.05.2025', closeDate: '25.05.2025', winner: 'ООО "Мебель-Про"', method: 'Электронный аукцион', initialAmount: '40 000 BYN', finalAmount: '34 500 BYN', diff: '-13.75%', platform: 'goszakupki.by', volume: '1' },
    { id: '2', title: 'Ремонтные работы в офисном здании', status: 'Подача заявок', openDate: '22.05.2025', deadline: '05.06.2025 (3 дня)', method: 'Запрос предложений', amount: '112 000 BYN', platform: 'icetrade.by', volume: '1' },
    { id: '3', title: 'Обслуживание кондиционеров', status: 'Отменено', openDate: '20.05.2025', method: 'Закупка у единственного поставщика', amount: '15 800 BYN', platform: 'butb.by', volume: '1' },
];

const kpiData = [
    { title: 'Всего закупок', value: '1,284' },
    { title: 'На общую сумму', value: '15.7 млн BYN' },
    { title: 'Количество заказчиков', value: '342' },
    { title: 'Количество участников', value: '891' },
    { title: 'Завершено закупок', value: '980' },
    { title: 'Отменено закупок', value: '112' },
];

export default function AnalyticsPage() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 sm:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-primary">Аналитика закупок</h1>
                    <p className="text-muted-foreground mt-1">Мощные инструменты для анализа и поиска тендеров.</p>
                </div>
                 <Button variant="outline" asChild>
                    <a href="/help#analytics"><BookOpen className="mr-2 h-4 w-4" />База знаний</a>
                </Button>
            </div>

            <Card className="mb-8 shadow-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary"><Filter className="w-5 h-5"/> Набор фильтров</CardTitle>
                </CardHeader>
                 <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Row 1 */}
                        <div><Label>Период</Label><DatePickerWithRange className="w-full" /></div>
                        <div><Label>Предмет закупки / слова</Label><Input placeholder="Столы, кресла, ремонт..." /></div>
                        <div><Label>Слова-исключения</Label><Input placeholder="Б/у, аренда..." /></div>

                        {/* Row 2 */}
                        <div><Label>Код ОКРБ</Label><Input placeholder="Начните вводить код или название" /></div>
                        <div>
                            <Label>Регион поставки</Label>
                             <Select>
                                <SelectTrigger><SelectValue placeholder="Выберите страну и регион" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="by">Беларусь (Все регионы)</SelectItem>
                                    <SelectItem value="by-minsk">Беларусь (Минская область)</SelectItem>
                                    <SelectItem value="ru">Россия (Все регионы)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div><Label>Заказчик</Label><Input placeholder="Начните вводить УНП или название" /></div>
                        
                        {/* Row 3 */}
                        <div className="flex gap-4">
                            <div><Label>Стоимость от</Label><Input type="number" placeholder="1000" /></div>
                            <div><Label>Стоимость до</Label><Input type="number" placeholder="50000" /></div>
                        </div>
                        <div>
                            <Label>Торговая площадка</Label>
                            <Select>
                                <SelectTrigger><SelectValue placeholder="Все площадки" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Все площадки</SelectItem>
                                    <SelectItem value="goszakupki.by">goszakupki.by</SelectItem>
                                    <SelectItem value="icetrade.by">icetrade.by</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <div>
                            <Label>Способ отбора</Label>
                            <Select>
                                <SelectTrigger><SelectValue placeholder="Все способы" /></SelectTrigger>
                                <SelectContent>
                                     <SelectItem value="all">Все способы</SelectItem>
                                    <SelectItem value="auction">Электронный аукцион</SelectItem>
                                    <SelectItem value="proposals">Запрос предложений</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-6 border-t pt-6">
                        <RadioGroup defaultValue="active" className="flex items-center gap-4">
                            <Label className="font-semibold">Статус:</Label>
                            <div className="flex items-center space-x-2"><RadioGroupItem value="active" id="s1" /><Label htmlFor="s1" className="font-normal">Подача заявок</Label></div>
                            <div className="flex items-center space-x-2"><RadioGroupItem value="completed" id="s2" /><Label htmlFor="s2" className="font-normal">Завершённые</Label></div>
                            <div className="flex items-center space-x-2"><RadioGroupItem value="canceled" id="s3" /><Label htmlFor="s3" className="font-normal">Отменённые</Label></div>
                        </RadioGroup>
                         <div className="flex items-center gap-2">
                             <Button variant="outline"><Save className="mr-2 h-4 w-4" />Сохранить фильтр</Button>
                             <Button><Search className="mr-2 h-4 w-4" />Найти</Button>
                         </div>
                    </div>
                </CardContent>
            </Card>

            <div className="mb-8">
                <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl text-primary">Графики и таблицы</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                    {kpiData.map((kpi) => (
                        <Card key={kpi.title} className="shadow-sm p-4 text-center">
                            <p className="text-sm text-muted-foreground">{kpi.title}</p>
                            <p className="text-xl font-bold text-primary">{kpi.value}</p>
                        </Card>
                    ))}
                </div>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="shadow-sm">
                        <CardHeader><CardTitle>Динамика закупок</CardTitle></CardHeader>
                        <CardContent><TendersByMonthChart /></CardContent>
                    </Card>
                     <Card className="shadow-sm">
                        <CardHeader><CardTitle>Соотношение заказчиков и участников</CardTitle></CardHeader>
                        <CardContent><TendersByIndustryChart /></CardContent>
                    </Card>
                </div>
            </div>

            <Card className="shadow-sm">
                <CardHeader className="flex flex-row justify-between items-center">
                    <div>
                        <CardTitle>Результаты поиска</CardTitle>
                        <CardDescription>Найдено закупок: {recentWins.length} на общую сумму 162 300 BYN</CardDescription>
                    </div>
                    <Button variant="outline"><FileDown className="mr-2 h-4 w-4"/>Экспорт в Excel</Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]"><Checkbox /></TableHead>
                                <TableHead>Наименование</TableHead>
                                <TableHead>Статус</TableHead>
                                <TableHead>Срок</TableHead>
                                <TableHead>Победитель</TableHead>
                                <TableHead>Стоимость</TableHead>
                                <TableHead>Экономия</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentWins.map((win) => (
                                <TableRow key={win.id}>
                                    <TableCell><Checkbox /></TableCell>
                                    <TableCell className="font-medium text-primary hover:underline cursor-pointer">{win.title}</TableCell>
                                    <TableCell>
                                        <Badge variant={win.status === 'Завершено' ? 'default' : win.status === 'Отменено' ? 'destructive' : 'secondary'}>
                                            {win.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {win.deadline ? win.deadline : win.closeDate}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">{win.winner || '—'}</TableCell>
                                    <TableCell className="font-semibold">{win.finalAmount || win.amount}</TableCell>
                                    <TableCell className={`font-semibold ${win.diff?.startsWith('-') ? 'text-green-600' : 'text-red-600'}`}>{win.diff || '—'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

             <Card className="mt-8 shadow-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary"><Map className="w-5 h-5"/> Интерактивная карта закупок</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Здесь будет интерактивная карта (как на zakup.gov.kz)</p>
                    </div>
                </CardContent>
             </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
