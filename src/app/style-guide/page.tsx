
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
import { TenderCard } from '@/components/tender-card';
import { Terminal } from 'lucide-react';

const mockTender = {
    id: "sample-123",
    title: "Пример карточки тендера для UI Kit",
    location: "Минск",
    customer: "Пример Заказчика",
    platform: "Пример Платформы",
    published: "01.01.2025",
    deadline: "до 10.01 (9 дней)",
    type: "Услуга",
    price: "100 000 BYN",
    status: "Открыт"
};


export default function StyleGuidePage() {
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

  const ColorSwatch = ({ name, className, varName }: { name: string; className: string, varName: string }) => (
    <div className="flex items-center gap-4">
      <div className={`w-16 h-16 rounded-lg shadow-inner ${className}`}></div>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">{varName}</p>
      </div>
    </div>
  );

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

          {/* Colors Section */}
          <Section title="Цветовая палитра">
            <Card>
                <CardContent className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ColorSwatch name="Background" className="bg-background" varName="--background" />
                    <ColorSwatch name="Foreground" className="bg-foreground" varName="--foreground" />
                    <ColorSwatch name="Primary" className="bg-primary" varName="--primary" />
                    <ColorSwatch name="Secondary" className="bg-secondary" varName="--secondary" />
                    <ColorSwatch name="Accent" className="bg-accent" varName="--accent" />
                    <ColorSwatch name="Card" className="bg-card border" varName="--card" />
                    <ColorSwatch name="Muted" className="bg-muted" varName="--muted" />
                    <ColorSwatch name="Destructive" className="bg-destructive" varName="--destructive" />
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
          <Section title="Компоненты">
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
             <SubSection title="Уведомления">
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
            
            {/* Custom Components */}
            <SubSection title="Специальные компоненты">
                <div className="w-full">
                    <TenderCard {...mockTender} />
                </div>
            </SubSection>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
