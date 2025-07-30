
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
import { Badge } from '@/components/ui/badge';
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
import { InteractiveMap } from '@/components/analytics/interactive-map';
import { useActionState, useEffect, useState } from 'react';
import { searchTenders, type SearchState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const initialState: SearchState = {};

export default function AnalyticsPage() {
    const [state, formAction, isPending] = useActionState(searchTenders, initialState);
    const { toast } = useToast();
    const [hasSearched, setHasSearched] = useState(false);
    
    const results = state.results || [];
    const totalSum = results.reduce((acc, tender) => {
        const price = parseFloat(tender.price.replace(/[^0-9.]/g, ''));
        return acc + (isNaN(price) ? 0 : price);
    }, 0).toLocaleString('ru-RU', { style: 'currency', currency: 'BYN' });

    useEffect(() => {
        if (state?.error) {
          toast({
            title: 'Ошибка поиска',
            description: state.error,
            variant: 'destructive',
          });
        }
      }, [state, toast]);

    const handleFormAction = (formData: FormData) => {
        setHasSearched(true);
        formAction(formData);
    }

    const getStatusVariant = (status?: string) => {
        if (status?.includes('Время истекает')) return 'destructive';
        if (status?.includes('Открыт')) return 'default';
        return 'secondary';
    }


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
            
            <form action={handleFormAction}>
                <Card className="mb-8 shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary"><Filter className="w-5 h-5"/> Набор фильтров</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Row 1 */}
                            <div><Label>Период</Label><DatePickerWithRange className="w-full" /></div>
                            <div><Label>Предмет закупки / слова</Label><Input name="query" placeholder="Столы, кресла, ремонт..." defaultValue="принтеры"/></div>
                            <div><Label>Слова-исключения</Label><Input placeholder="Б/у, аренда..." /></div>

                            {/* Row 2 */}
                            <div><Label>Код ОКРБ</Label><Input placeholder="Начните вводить код или название" /></div>
                            <div>
                                <Label>Регион поставки</Label>
                                <Select name="region">
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
                                <Button type="submit" disabled={isPending}><Search className="mr-2 h-4 w-4" />{isPending ? "Поиск..." : "Найти"}</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </form>

            {hasSearched && (
                <>
                    <div className="mb-8">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-xl text-primary">Графики и таблицы</CardTitle>
                        </CardHeader>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                           <Card className="shadow-sm p-4 text-center">
                                <p className="text-sm text-muted-foreground">Всего закупок</p>
                                <p className="text-xl font-bold text-primary">{results.length}</p>
                            </Card>
                             <Card className="shadow-sm p-4 text-center">
                                <p className="text-sm text-muted-foreground">На общую сумму</p>
                                <p className="text-xl font-bold text-primary">{totalSum}</p>
                            </Card>
                            {/* Other KPIs can be added here */}
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
                                <CardDescription>
                                    {isPending ? 'Загрузка...' : state.message ? state.message : `Найдено закупок: ${results.length} на общую сумму ${totalSum}`}
                                </CardDescription>
                            </div>
                            <Button variant="outline"><FileDown className="mr-2 h-4 w-4"/>Экспорт в Excel</Button>
                        </CardHeader>
                        <CardContent>
                             {isPending && <p>Загрузка...</p>}
                             {!isPending && results.length > 0 && (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px]"><Checkbox /></TableHead>
                                            <TableHead>Наименование</TableHead>
                                            <TableHead>Статус</TableHead>
                                            <TableHead>Срок подачи</TableHead>
                                            <TableHead>Заказчик</TableHead>
                                            <TableHead>Стоимость</TableHead>
                                            <TableHead>Площадка</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {results.map((tender) => (
                                            <TableRow key={tender.id}>
                                                <TableCell><Checkbox /></TableCell>
                                                <TableCell className="font-medium">
                                                    <Link href={`/tender/${tender.id}`} className="text-primary hover:underline">{tender.title}</Link>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant={getStatusVariant(tender.status)}>
                                                        {tender.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-muted-foreground">
                                                    {tender.deadline}
                                                </TableCell>
                                                <TableCell className="text-muted-foreground">{tender.customer}</TableCell>
                                                <TableCell className="font-semibold">{tender.price}</TableCell>
                                                <TableCell className="text-muted-foreground">{tender.platform}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                             )}
                        </CardContent>
                    </Card>
                </>
            )}

             <Card className="mt-8 shadow-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary"><Map className="w-5 h-5"/> Интерактивная карта закупок</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <InteractiveMap />
                </CardContent>
             </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
