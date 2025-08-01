
'use client';

import { useState } from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  PlusCircle,
  Bell,
  BookOpen,
  HelpCircle,
  FileSearch,
  Pencil,
  Copy,
  Mail,
  Trash2,
  Power,
  FileClock
} from 'lucide-react';
import Link from 'next/link';

// Mock data for the templates table
const mockTemplates = [
  {
    id: 1,
    name: 'Строительные материалы (Минск)',
    country: 'Беларусь',
    platforms: 'goszakupki.by, icetrade.by',
    schedule: 'Ежедневно в 09:00',
    email: 'Да',
    telegram: 'Нет',
    lastSent: '28.05.2024 09:01',
    nextSent: '29.05.2024 09:00',
    status: true,
  },
  {
    id: 2,
    name: 'IT Оборудование (Алматы)',
    country: 'Казахстан',
    platforms: 'goszakup.gov.kz, zakup.sk.kz',
    schedule: 'ПН, СР, ПТ в 14:00',
    email: 'Да',
    telegram: 'Да',
    lastSent: '27.05.2024 14:00',
    nextSent: '29.05.2024 14:00',
    status: true,
  },
  {
    id: 3,
    name: 'Транспортные услуги (Все регионы)',
    country: 'Беларусь',
    platforms: 'Все',
    schedule: 'Не настроено',
    email: 'Нет',
    telegram: 'Нет',
    lastSent: '—',
    nextSent: '—',
    status: false,
  },
];

export default function TemplatesPage() {
  const [activeTab, setActiveTab] = useState('kz');
  const [templates, setTemplates] = useState(mockTemplates);

  const filteredTemplates = templates.filter(t => activeTab === 'kz' ? t.country === 'Казахстан' : t.country === 'Беларусь');

  const EmptyState = () => (
    <div className="text-center bg-card border rounded-lg py-16 px-6 mt-8">
      <FileSearch className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
      <h2 className="text-2xl font-semibold text-primary mb-2">У вас пока нет шаблонов</h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Создайте свой первый шаблон поиска, чтобы автоматически отслеживать нужные закупки.
      </p>
      <Button size="lg" asChild>
        <Link href={`/templates/new?country=${activeTab}`}>
            <PlusCircle className="mr-2 h-5 w-5"/>
            Создать шаблон
        </Link>
      </Button>
    </div>
  );

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 sm:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-xs">
              <TabsTrigger value="kz">Казахстан</TabsTrigger>
              <TabsTrigger value="by">Беларусь</TabsTrigger>
            </TabsList>
            <Card className="mt-4">
                <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <CardTitle className="text-primary">Список шаблонов</CardTitle>
                            <CardDescription>Управляйте вашими поисковыми шаблонами и настройками уведомлений.</CardDescription>
                        </div>
                         <div className="flex flex-wrap items-center gap-2">
                            <Button asChild>
                                <Link href={`/templates/new?country=${activeTab}`}><PlusCircle className="mr-2 h-4 w-4"/>Создать шаблон</Link>
                            </Button>
                            <Button variant="outline"><Bell className="mr-2 h-4 w-4"/>Настройка уведомлений</Button>
                            <Button variant="outline"><FileClock className="mr-2 h-4 w-4"/>Журнал доставки</Button>
                            <Button variant="ghost" size="icon"><HelpCircle className="h-5 w-5 text-muted-foreground"/></Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {filteredTemplates.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Название</TableHead>
                                <TableHead>Страна</TableHead>
                                <TableHead>Площадки</TableHead>
                                <TableHead>Расписание</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Telegram</TableHead>
                                <TableHead>Последняя отправка</TableHead>
                                <TableHead>Следующая отправка</TableHead>
                                <TableHead>Статус</TableHead>
                                <TableHead className="text-right">Действия</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredTemplates.map((template) => (
                                <TableRow key={template.id}>
                                    <TableCell className="font-medium text-primary">{template.name}</TableCell>
                                    <TableCell><Badge variant="outline">{template.country}</Badge></TableCell>
                                    <TableCell className="text-muted-foreground">{template.platforms}</TableCell>
                                    <TableCell className="text-muted-foreground">{template.schedule}</TableCell>
                                    <TableCell className="text-muted-foreground">{template.email}</TableCell>
                                    <TableCell className="text-muted-foreground">{template.telegram}</TableCell>
                                    <TableCell className="text-muted-foreground">{template.lastSent}</TableCell>
                                    <TableCell className="text-muted-foreground">{template.nextSent}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Switch checked={template.status} aria-label="Статус мониторинга"/>
                                            <span className="text-xs text-muted-foreground">{template.status ? 'Вкл' : 'Выкл'}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <Button variant="ghost" size="icon"><Pencil className="h-4 w-4"/></Button>
                                            <Button variant="ghost" size="icon"><Copy className="h-4 w-4"/></Button>
                                            <Button variant="ghost" size="icon"><Mail className="h-4 w-4"/></Button>
                                            <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive"/></Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <EmptyState />
                    )}
                </CardContent>
            </Card>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
