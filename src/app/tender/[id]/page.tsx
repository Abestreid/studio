
'use client';

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Cta } from "@/components/landing/cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Star,
  HelpCircle,
  ArrowLeft,
  CheckCircle,
  FileText,
  Download,
  Link as LinkIcon,
  MapPin,
  Briefcase,
  Building,
  Lock,
} from "lucide-react";
import { useEffect, useState } from 'react';

export default function TenderPage({ params }: { params: { id: string } }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };
    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);


  const tender = {
    id: "auc0002573978",
    title: "Многофункциональные устройства (МФУ) и принтеры",
    published: "04.06.2025",
    deadline: "08.06.2025",
    deadlineDays: 4,
    price: "34 500 BYN",
    industry: "Периферийное оборудование",
    location: "Минск",
    organizer: "Администрация г. Минска",
    platform: "goszakupki.by",
    procurementType: "Закупка из одного источника",
    procedure: "Электронная закупка",
    status: "Завершен",
    subject: "Многофункциональные устройства (МФУ) и принтеры",
    subjectCategory: "Компьютеры / оборудование > Периферийное оборудование",
    document: "zayavka-zoi_1749046027.pdf",
    customer: {
      name: 'Национальный филиал (представительство) Межгосударственной телерадиокомпании "Мир" в Республике Беларусь',
      unp: "100824385",
      address: "г. Минск, ул. Кирова, 17, 220030",
      contactPerson: "Поправко Д.И., +375173786096",
    },
    procurementInfo: {
      publishedDate: "04.06.2025",
      deadlineDate: "08.06.2025",
      totalValue: "24 259,34 BYN",
      participantRequirements: "в заявке",
      documentList: "в заявке",
    },
  };

  const PremiumPlaceholder = () => (
    <div className="bg-secondary/30 rounded-lg p-4 text-center">
      <Lock className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
      <p className="font-semibold text-primary">Доступно на тарифе «Премиум»</p>
      <Button size="sm" className="mt-2">Улучшить тариф</Button>
    </div>
  )

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 sm:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Главная</Link> /{" "}
              <Link href="/" className="hover:text-primary">Поиск</Link> /{" "}
              <span className="text-foreground">{tender.title}</span>
            </div>
            <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Назад к списку
                </Link>
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">{tender.title}</h1>
              <p className="text-muted-foreground mt-1">Номер: {tender.id}</p>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 text-sm py-1 px-3 self-start lg:self-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Открыт
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Button variant="outline"><Star className="mr-2 h-4 w-4" />В избранное</Button>
            <Button variant="outline"><FileText className="mr-2 h-4 w-4" />Подготовить заявку</Button>
            <Button variant="outline">
              Помощь<HelpCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {!isLoggedIn && (
            <div className="bg-yellow-100/60 border border-yellow-200 text-yellow-900 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                <p className="text-sm font-medium">Для просмотра всех данных и контактов зарегистрируйтесь или войдите в аккаунт.</p>
                <div className="flex gap-2">
                    <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 shrink-0"><Link href="/login">Войти</Link></Button>
                    <Button asChild variant="outline" className="border-yellow-400 text-yellow-900 shrink-0"><Link href="/register">Регистрация</Link></Button>
                </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <Card className="shadow-md">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                            <div>
                                <p className="text-muted-foreground mb-1">Опубликовано:</p>
                                <p className="font-medium">{tender.published}</p>
                            </div>
                            <div className="relative">
                                <p className="text-muted-foreground mb-1">Подача заявок до:</p>
                                <p className="font-medium">{tender.deadline}</p>
                                <Badge className="absolute top-0 right-0 bg-red-100 text-red-800 border-red-200">{tender.deadlineDays} дня</Badge>
                            </div>
                             <div>
                                <p className="text-muted-foreground mb-1">Предельная стоимость:</p>
                                <p className="font-bold text-accent text-lg">{tender.price}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground mb-1">Отрасль:</p>
                                <p className="font-medium">{tender.industry}</p>
                            </div>
                             <div className="sm:col-span-2">
                                <p className="text-muted-foreground mb-1">Площадка:</p>
                                <div className="flex items-center gap-2">
                                    <p className="font-medium">{tender.platform}</p>
                                    <LinkIcon className="w-4 h-4 text-accent cursor-pointer"/>
                                </div>
                            </div>
                           
                        </div>
                        <div className="mt-6 pt-6 border-t">
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                                <div>
                                    <p className="text-muted-foreground mb-1">Тип закупки:</p>
                                    <p className="font-medium">{tender.procurementType}</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground mb-1">Процедура:</p>
                                    <p className="font-medium">{tender.procedure}</p>
                                </div>
                                 <div>
                                    <p className="text-muted-foreground mb-1">Статус:</p>
                                    <Badge variant="outline" className="border-red-300 text-red-600">{tender.status}</Badge>
                                </div>
                             </div>
                        </div>
                         <div className="mt-6 pt-6 border-t">
                            <p className="text-muted-foreground mb-2 text-sm">Предмет закупки:</p>
                            <div className="p-3 bg-secondary/50 rounded-md text-sm">
                                 <p className="font-semibold text-primary">{tender.subject}</p>
                                 <p className="text-muted-foreground text-xs">{tender.subjectCategory}</p>
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t">
                            <p className="text-muted-foreground mb-2 text-sm">Документы:</p>
                            <div className="flex items-center justify-between p-3 border rounded-md hover:bg-secondary/30 transition-colors">
                                <div className="flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-accent"/>
                                    <span className="text-sm font-medium">{tender.document}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Download className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer"/>
                                    <LinkIcon className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer"/>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <Card className="shadow-md">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-lg text-primary mb-4">Информация о заказчике</h3>
                            {isLoggedIn ? (
                                <div className="space-y-3 text-sm">
                                    <p className="font-semibold">{tender.customer.name}</p>
                                    <div>
                                        <p className="text-muted-foreground text-xs">УНП:</p>
                                        <p>{tender.customer.unp}</p>
                                    </div>
                                     <div>
                                        <p className="text-muted-foreground text-xs">Адрес:</p>
                                        <p>{tender.customer.address}</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-xs">Контактное лицо:</p>
                                        <p>{tender.customer.contactPerson}</p>
                                    </div>
                                </div>
                            ) : <PremiumPlaceholder />}
                        </CardContent>
                    </Card>
                    <Card className="shadow-md">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-lg text-primary mb-4">Основная информация по закупке</h3>
                             {isLoggedIn ? (
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <p className="text-muted-foreground text-xs">Дата размещения приглашения:</p>
                                        <p>{tender.procurementInfo.publishedDate}</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-xs">Дата окончания приема предложений:</p>
                                        <p>{tender.procurementInfo.deadlineDate}</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-xs">Общая предельная стоимость закупки:</p>
                                        <p className="font-bold text-accent">{tender.procurementInfo.totalValue}</p>
                                    </div>
                                     <div>
                                        <p className="text-muted-foreground text-xs">Требования к участникам:</p>
                                        <p>{tender.procurementInfo.participantRequirements}</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-xs">Перечень документов:</p>
                                        <p>{tender.procurementInfo.documentList}</p>
                                    </div>
                                </div>
                            ) : <PremiumPlaceholder /> }
                        </CardContent>
                    </Card>
                </div>
            </div>
            {!isLoggedIn && (
              <div className="lg:col-span-1">
                  <div className="sticky top-24">
                      <Card className="shadow-lg border-accent">
                          <CardContent className="p-6 text-center">
                              <h3 className="text-lg font-bold text-primary mb-2">Доступ ограничен</h3>
                              <p className="text-sm text-muted-foreground mb-4">Для просмотра полной информации оформите тариф «Премиум»</p>
                              <Button className="w-full">Купить онлайн</Button>
                          </CardContent>
                      </Card>
                  </div>
              </div>
            )}
          </div>
        </div>
      </main>
      {!isLoggedIn && (
        <Cta
            title="Начните получать тендеры первыми"
            description="Поиск, мониторинг, аналитика и командная работа – экономьте время и выигрывайте больше."
            buttonText="Попробовать бесплатно"
        />
      )}
      <Footer />
    </div>
  );
}
