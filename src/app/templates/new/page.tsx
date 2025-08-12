
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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
import {
  Search,
  Save,
  Trash2,
  Bell,
  BookOpen,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

function CreateTemplateForm() {
    const searchParams = useSearchParams();
    const country = searchParams.get('country') || 'by'; // Default to Belarus for redneT

    const isKazakhstan = country === 'kz';

    return (
        <div className="bg-background text-foreground flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow py-8 sm:py-12 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
               <div className="flex justify-between items-center mb-6">
                 <h1 className="text-2xl sm:text-3xl font-bold text-primary">
                    {isKazakhstan ? 'Новый шаблон для Казахстана' : 'Новый шаблон для Беларуси'}
                </h1>
                <Button asChild variant="outline">
                    <Link href="/templates"><ArrowLeft className="mr-2 h-4 w-4"/>К списку шаблонов</Link>
                </Button>
               </div>
              <Card>
                <CardHeader>
                  <CardTitle>Параметры поиска</CardTitle>
                  <CardDescription>Заполните поля ниже, чтобы создать новый шаблон для поиска тендеров.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* --- Row 1 --- */}
                    <div className="lg:col-span-2">
                        <Label htmlFor="subject">Предмет закупки (ключевые слова)</Label>
                        <Input id="subject" placeholder="Столы, кресла, ремонт..." />
                    </div>
                     <div>
                        <Label htmlFor="exclude_words">Исключить слова</Label>
                        <Input id="exclude_words" placeholder="Б/у, аренда..." />
                    </div>

                    {/* --- Row 2 --- */}
                    <div>
                        <Label htmlFor="procurement_id">Номер закупки</Label>
                        <Input id="procurement_id" placeholder="Введите номер..." />
                    </div>
                    <div>
                        <Label htmlFor="industry">Отрасль</Label>
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Выберите отрасль (мультивыбор)" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="it">IT и связь</SelectItem>
                                <SelectItem value="construction">Строительство</SelectItem>
                                <SelectItem value="medicine">Медицина</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div>
                        <Label htmlFor="procedure_type">Вид процедуры</Label>
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Все процедуры" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Все процедуры</SelectItem>
                                <SelectItem value="auction">Электронный аукцион</SelectItem>
                                <SelectItem value="request">Запрос ценовых предложений</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* --- Row 3 --- */}
                    <div className="flex gap-4">
                        <div>
                            <Label>Стоимость от</Label>
                            <Input type="number" placeholder="1000" />
                        </div>
                        <div>
                            <Label>Стоимость до</Label>
                            <Input type="number" placeholder="50000" />
                        </div>
                    </div>
                     <div className="flex items-center pt-6">
                        <Label className="font-semibold text-lg">{isKazakhstan ? 'KZT' : 'BYN'}</Label>
                     </div>
                      <div>
                        <Label>Источник финансирования</Label>
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Выберите источник" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="any">Любой</SelectItem>
                                <SelectItem value="gov">Государственный</SelectItem>
                                <SelectItem value="private">Частный</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    {/* --- Row 4 --- */}
                    <div className="flex gap-4">
                        <div>
                            <Label>Дата размещения (от)</Label>
                            <Input type="date" />
                        </div>
                        <div>
                            <Label>Дата размещения (до)</Label>
                            <Input type="date" />
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div>
                            <Label>Окончание приема (от)</Label>
                            <Input type="date" />
                        </div>
                        <div>
                            <Label>Окончание приема (до)</Label>
                            <Input type="date" />
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div>
                            <Label>Срок поставки (от)</Label>
                            <Input type="date" />
                        </div>
                        <div>
                            <Label>Срок поставки (до)</Label>
                            <Input type="date" />
                        </div>
                    </div>
                    
                    {/* --- Country Specific Row --- */}
                    <div className="lg:col-span-2">
                        <Label htmlFor="country_code">{isKazakhstan ? 'Код КТРУ' : 'Код ОКРБ'}</Label>
                        <div className="flex gap-2">
                             <Input id="country_code" placeholder={isKazakhstan ? 'Начните вводить код или название КТРУ' : 'Начните вводить код или название ОКРБ'} />
                             <Button variant="outline" type="button"><BookOpen className="mr-2 h-4 w-4" />Открыть справочник</Button>
                        </div>
                    </div>
                     <div>
                        <Label htmlFor="customer_id">Заказчик</Label>
                        <Input id="customer_id" placeholder={isKazakhstan ? 'Введите БИН или название' : 'Введите УНП или название'} />
                    </div>

                    {/* --- Row 5 --- */}
                     <div>
                        <Label>Местонахождение заказчика</Label>
                        <Select>
                            <SelectTrigger><SelectValue placeholder={isKazakhstan ? 'Выберите регион Казахстана' : 'Выберите регион Беларуси'} /></SelectTrigger>
                            <SelectContent>
                                {isKazakhstan ? (
                                    <>
                                        <SelectItem value="ala">Алматы</SelectItem>
                                        <SelectItem value="ast">Астана</SelectItem>
                                    </>
                                ) : (
                                    <>
                                        <SelectItem value="minsk">Минская область</SelectItem>
                                        <SelectItem value="gomel">Гомельская область</SelectItem>
                                    </>
                                )}
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="lg:col-span-2">
                        <Label>Торговая площадка</Label>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                            { (isKazakhstan ? ['goszakup.gov.kz', 'zakup.sk.kz', 'mitwork.kz', 'nadloc.kz'] : ['goszakupki.by', 'icetrade.by', 'butb.by']).map(p => (
                                <div key={p} className="flex items-center space-x-2">
                                    <Checkbox id={`platform-${p}`} />
                                    <Label htmlFor={`platform-${p}`} className="font-normal">{p}</Label>
                                </div>
                            )) }
                        </div>
                    </div>
                    
                    {/* --- Actions --- */}
                    <div className="lg:col-span-3 border-t pt-6 mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                         <div>
                            <Button variant="link" className="p-0 h-auto" type="button">
                                <Bell className="mr-2 h-4 w-4"/>Настройки шаблона и мониторинга
                            </Button>
                         </div>
                         <div className="flex items-center gap-2">
                             <Button variant="destructive" type="reset" ><Trash2 className="mr-2 h-4 w-4" />Очистить</Button>
                             <Button variant="outline" type="submit"><Search className="mr-2 h-4 w-4" />Найти</Button>
                             <Button type="submit"><Save className="mr-2 h-4 w-4" />Сохранить шаблон</Button>
                         </div>
                    </div>

                  </form>
                </CardContent>
              </Card>
            </div>
          </main>
          <Footer />
        </div>
    );
}


export default function NewTemplatePage() {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <CreateTemplateForm />
        </Suspense>
    )
}

