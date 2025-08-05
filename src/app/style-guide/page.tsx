
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TenderCard } from '@/components/tender-card';
import { DatePickerWithRange } from '@/components/analytics/date-range-picker';
import { TendersByMonthChart } from '@/components/analytics/tenders-by-month-chart';
import { TendersByIndustryChart } from '@/components/analytics/tenders-by-industry-chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Terminal, LogOut, UserCircle, Check, User, FileX2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { PricingCard } from '@/components/pricing-card';
import { pricingTiers, mockTender, recentWins } from '@/lib/content';
import { useToast } from '@/hooks/use-toast';

const tiers = pricingTiers;

interface ColorInfo {
    hex: string;
    rgb: string;
    hsl: string;
}

const colorVars = [
    { name: 'Background', varName: '--background', purpose: 'Основной фон приложения', className: 'bg-background' },
    { name: 'Foreground', varName: '--foreground', purpose: 'Основной цвет текста', className: 'bg-foreground' },
    { name: 'Card / Popover', varName: '--card', purpose: 'Фон для карточек', className: 'bg-card border' },
    { name: 'Primary', varName: '--primary', purpose: 'Основной акцентный цвет', className: 'bg-primary' },
    { name: 'Primary Foreground', varName: '--primary-foreground', purpose: 'Текст на фоне primary', className: 'bg-primary-foreground' },
    { name: 'Secondary', varName: '--secondary', purpose: 'Второстепенные фоны', className: 'bg-secondary' },
    { name: 'Muted Foreground', varName: '--muted-foreground', purpose: 'Приглушенный цвет текста', className: 'bg-muted-foreground' },
    { name: 'Accent / Ring', varName: '--accent', purpose: 'Цвет для акцентов', className: 'bg-accent' },
    { name: 'Accent Dark', varName: '--accent-dark', purpose: 'Акцент при наведении', className: 'bg-accent-dark' },
    { name: 'Accent Foreground', varName: '--accent-foreground', purpose: 'Текст на акцентном фоне', className: 'bg-accent-foreground' },
    { name: 'Destructive', varName: '--destructive', purpose: 'Цвет для ошибок', className: 'bg-destructive' },
    { name: 'Destructive Foreground', varName: '--destructive-foreground', purpose: 'Текст на фоне destructive', className: 'bg-destructive-foreground' },
    { name: 'Chart 1', varName: '--chart-1', purpose: 'Цвет графика 1', className: 'bg-chart-1' },
    { name: 'Chart 2', varName: '--chart-2', purpose: 'Цвет графика 2', className: 'bg-chart-2' },
    { name: 'Chart 3', varName: '--chart-3', purpose: 'Цвет графика 3', className: 'bg-chart-3' },
    { name: 'Chart 4', varName: '--chart-4', purpose: 'Цвет графика 4', className: 'bg-chart-4' },
    { name: 'Chart 5', varName: '--chart-5', purpose: 'Цвет графика 5', className: 'bg-chart-5' },
];

export default function StyleGuidePage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { toast } = useToast();
  const [theme, setTheme] = useState('tendersoft');
  const [colorValues, setColorValues] = useState<Record<string, ColorInfo>>({});

  const hslToHex = (h: number, s: number, l: number): string => {
      l /= 100;
      const a = s * Math.min(l, 1 - l) / 100;
      const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
      };
      return `#${f(0)}${f(8)}${f(4)}`;
  };

  const hslStringToValues = (hslStr: string): [number, number, number] => {
      const [h, s, l] = hslStr.trim().replace(/%/g, '').split(' ').map(Number);
      return [h, s, l];
  };

  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem('theme') || 'tendersoft';
      setTheme(currentTheme);
    };
    handleThemeChange();
    window.addEventListener('storage', handleThemeChange);
    return () => window.removeEventListener('storage', handleThemeChange);
  }, []);

  useEffect(() => {
      const fetchColors = () => {
        const computedStyle = getComputedStyle(document.documentElement);
        const newColorValues: Record<string, ColorInfo> = {};

        colorVars.forEach(v => {
            const hslStr = computedStyle.getPropertyValue(v.varName).trim();
            if (hslStr) {
                const [h, s, l] = hslStringToValues(hslStr);
                const hex = hslToHex(h,s,l);
                const rgb = `rgb(${parseInt(hex.slice(1, 3), 16)}, ${parseInt(hex.slice(3, 5), 16)}, ${parseInt(hex.slice(5, 7), 16)})`;

                newColorValues[v.varName] = {
                    hsl: `${h} ${s}% ${l}%`,
                    hex: hex,
                    rgb: rgb,
                };
            }
        });
        setColorValues(newColorValues);
      };

      // Initial fetch
      fetchColors();

      // We need to re-fetch after a short delay to ensure CSS variables have been applied after a theme switch
      const timer = setTimeout(fetchColors, 50);

      return () => clearTimeout(timer);
  }, [theme]);
  
  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
        title: 'Скопировано!',
        description: `${type}-код ${text} скопирован в буфер обмена.`,
    });
  };

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-primary border-b-2 border-accent pb-2 mb-6">{title}</h2>
      <div className="space-y-6">{children}</div>
    </div>
  );

  const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div>
        <h3 className="text-lg font-semibold text-primary/90 mb-4">{title}</h3>
        <Card>
            <CardContent className="p-6 flex flex-wrap items-end gap-6">
                {children}
            </CardContent>
        </Card>
    </div>
  );

  const ColorSwatch = ({
    name,
    className,
    varName,
    purpose,
  }: {
    name: string;
    className: string;
    varName: string;
    purpose: string;
  }) => {
    const colors = colorValues[varName] || { hex: '...', rgb: '...', hsl: '...' };

    return (
        <div className="flex items-start gap-4">
        <div className={cn('w-20 h-20 rounded-lg shadow-inner shrink-0', className)}></div>
        <div className="text-xs">
            <p className="font-bold text-sm mb-1">{name}</p>
            <p className="text-muted-foreground font-mono">{varName}</p>
            <p className="text-muted-foreground">{purpose}</p>
            <div className="mt-2 space-y-1 font-mono">
                <p className="cursor-pointer" onClick={() => handleCopy(colors.hex, 'HEX')}><strong className="font-medium">HEX:</strong> {colors.hex}</p>
                <p className="cursor-pointer" onClick={() => handleCopy(colors.rgb, 'RGB')}><strong className="font-medium">RGB:</strong> {colors.rgb}</p>
                <p className="cursor-pointer" onClick={() => handleCopy(colors.hsl, 'HSL')}><strong className="font-medium">HSL:</strong> {colors.hsl}</p>
            </div>
        </div>
        </div>
    );
  };

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary">UI Kit / Гайдбук</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Все компоненты, стили и элементы интерфейса проекта Tendersoft.
            </p>
          </div>

         <Section title="Цветовая палитра">
            <Card>
                <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
                {colorVars.map((v) => (
                    <ColorSwatch key={v.varName} {...v} />
                ))}
                </CardContent>
            </Card>
        </Section>


          {/* Typography Section */}
          <Section title="Типографика">
             <Card>
                <CardContent className="p-6 space-y-4">
                    <h1 className="text-5xl font-bold">Заголовок H1</h1>
                    <h2 className="text-4xl font-bold">Заголовок H2</h2>
                    <h3 className="text-3xl font-bold">Заголовок H3</h3>
                    <h4 className="text-2xl font-bold">Заголовок H4</h4>
                    <h5 className="text-xl font-bold">Заголовок H5</h5>
                    <h6 className="text-lg font-bold">Заголовок H6</h6>
                    <p className="text-base">
                        Это основной текст (параграф). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                    </p>
                    <p className="text-muted-foreground">
                        Это приглушенный текст (muted). Он используется для второстепенной информации.
                    </p>
                     <blockquote className="border-l-4 border-accent pl-4 py-2 my-6 italic">
                        "Это блочная цитата. Она отлично подходит для выделения ключевых мыслей или цитат."
                    </blockquote>
                </CardContent>
            </Card>
          </Section>

          {/* Components Section */}
          <Section title="Базовые компоненты">
             {/* Buttons */}
            <SubSection title="Кнопки">
                <Button>Кнопка (Default)</Button>
                <Button variant="secondary">Вторичная</Button>
                <Button variant="outline">Контурная</Button>
                <Button variant="ghost">Призрачная</Button>
                <Button variant="link">Ссылка</Button>
                <Button variant="destructive">Опасная</Button>
                <Button size="lg">Большая кнопка</Button>
                <Button size="sm">Маленькая</Button>
                <Button disabled>Отключенная</Button>
            </SubSection>

            {/* Forms */}
            <SubSection title="Элементы форм">
                <div className="w-full max-w-sm space-y-4">
                     <div className="space-y-2">
                        <Label htmlFor="input-example">Поле ввода</Label>
                        <Input id="input-example" placeholder="Введите текст..."/>
                     </div>
                     <div className="space-y-2">
                        <Label>Выпадающий список</Label>
                         <Select>
                            <SelectTrigger><SelectValue placeholder="Выберите опцию" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Опция 1</SelectItem>
                                <SelectItem value="2">Опция 2</SelectItem>
                                <SelectItem value="3">Опция 3</SelectItem>
                            </SelectContent>
                        </Select>
                     </div>
                     <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox-example"/>
                        <Label htmlFor="checkbox-example">Чекбокс</Label>
                     </div>
                      <RadioGroup defaultValue="option-one" className="flex gap-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="r1" />
                            <Label htmlFor="r1">Радио-кнопка 1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="r2" />
                            <Label htmlFor="r2">Радио-кнопка 2</Label>
                        </div>
                    </RadioGroup>
                </div>
            </SubSection>

            {/* Alerts & Badges */}
             <SubSection title="Уведомления и метки">
                <div className="space-y-4 w-full">
                    <div className="flex gap-4">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                    </div>
                     <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Обычное уведомление</AlertTitle>
                        <AlertDescription>
                            Это стандартное уведомление для пользователя.
                        </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Уведомление об ошибке</AlertTitle>
                        <AlertDescription>
                            Это уведомление используется для сообщения об ошибках.
                        </AlertDescription>
                    </Alert>
                </div>
            </SubSection>

            {/* Interactive Components */}
             <SubSection title="Интерактивные компоненты">
                 <div className="w-full max-w-lg space-y-6">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Это Аккордеон</AccordionTrigger>
                            <AccordionContent>
                                Да, это содержимое первого элемента аккордеона.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Он интерактивный?</AccordionTrigger>
                            <AccordionContent>
                                Конечно! Вы можете его раскрывать и скрывать.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                     <Tabs defaultValue="account" className="w-full">
                        <TabsList>
                            <TabsTrigger value="account">Аккаунт</TabsTrigger>
                            <TabsTrigger value="password">Пароль</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">Это содержимое вкладки "Аккаунт".</TabsContent>
                        <TabsContent value="password">Это содержимое вкладки "Пароль".</TabsContent>
                    </Tabs>

                    <div className="flex gap-4">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                <Button variant="outline">Наведите на меня</Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                <p>Это всплывающая подсказка!</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                         <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline">Показать диалог</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Это действие нельзя будет отменить. Это навсегда удалит ваши данные с наших серверов.
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogCancel>Отмена</AlertDialogCancel>
                                <AlertDialogAction>Продолжить</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </SubSection>
          </Section>
          
          <Section title="Составные компоненты и примеры">
            {/* Custom Components */}
            <SubSection title="Карточка тендера">
                <div className="w-full">
                    <TenderCard {...mockTender} />
                </div>
            </SubSection>

            {/* Header Buttons */}
            <SubSection title="Элементы шапки (Header)">
                 <div className="flex items-center gap-4">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                        <Link href="/login">Войти</Link>
                    </Button>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                        <Link href="/register">Попробовать бесплатно</Link>
                    </Button>
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
                            <DropdownMenuItem className="cursor-pointer">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Выйти</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </SubSection>

             <SubSection title="Блок для неавторизованных пользователей">
                <div className="w-full">
                    <div className="text-center bg-card border rounded-lg py-16 px-6">
                        <User className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                        <h2 className="text-2xl font-semibold text-primary mb-2">Войдите, чтобы увидеть избранное</h2>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            Чтобы добавлять тендеры в избранное и просматривать их здесь, вам необходимо войти в свой аккаунт или зарегистрироваться.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" asChild>
                                <Link href="/login">Войти</Link>
                            </Button>
                             <Button size="lg" variant="outline" asChild>
                                <Link href="/register">Зарегистрироваться</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </SubSection>

             <SubSection title="Пустое состояние списка">
                <div className="w-full">
                    <div className="text-center bg-card border rounded-lg py-16 px-6">
                        <FileX2 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                        <h2 className="text-2xl font-semibold text-primary mb-2">Список избранного пуст</h2>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            Вы еще не добавили ни одного тендера. Начните поиск, чтобы найти интересные закупки и добавьте их в избранное для удобного отслеживания.
                        </p>
                         <Button size="lg" asChild>
                            <Link href="/">Начать поиск</Link>
                        </Button>
                    </div>
                </div>
            </SubSection>
            
            {/* Analytics Components */}
            <Card>
                <CardHeader>
                    <CardTitle>Компоненты аналитики</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                    <DatePickerWithRange />
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <Card className="lg:col-span-3">
                            <CardHeader>
                                <CardTitle>Динамика тендеров</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <TendersByMonthChart />
                            </CardContent>
                        </Card>
                        <Card className="lg:col-span-2">
                             <CardHeader>
                                <CardTitle>Тендеры по отраслям</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <TendersByIndustryChart />
                            </CardContent>
                        </Card>
                    </div>
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

            <Card>
                <CardHeader>
                    <CardTitle>Карточки тарифов и переключатель</CardTitle>
                </CardHeader>
                <CardContent className="w-full space-y-8">
                     <div className="flex justify-center items-center gap-4">
                        <Label htmlFor="billing-cycle-sg" className={!isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'}>
                            Ежемесячно
                        </Label>
                        <Switch
                            id="billing-cycle-sg"
                            checked={isAnnual}
                            onCheckedChange={setIsAnnual}
                            aria-label="Переключить на годовую оплату"
                        />
                        <Label htmlFor="billing-cycle-sg" className={isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'}>
                            Ежегодно <span className="text-accent font-bold">(выгода 2 месяца!)</span>
                        </Label>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
                        {tiers.map((tier) => (
                            <PricingCard key={tier.name} tier={tier} isAnnual={isAnnual} />
                        ))}
                    </div>
                </CardContent>
            </Card>

          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
