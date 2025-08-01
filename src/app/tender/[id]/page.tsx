
'use client';

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Cta } from "@/components/landing/cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Star,
  ArrowLeft,
  CheckCircle,
  FileText,
  Download,
  Link as LinkIcon,
  Lock,
  Calendar,
  Clock,
  MapPin,
  Building,
} from "lucide-react";
import { useEffect, useState } from 'react';
import { allTenders, type Tender } from '@/lib/tenders';
import { useToast } from "@/hooks/use-toast";
import { useParams } from 'next/navigation';
import { cn } from "@/lib/utils";
import { getStatusVariant } from '@/lib/utils';


export default function TenderPage() {
  const params = useParams<{ id: string }>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [tender, setTender] = useState<Tender | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    const tenderId = params.id;
    const foundTender = allTenders.find(t => t.id === tenderId) || null;
    setTender(foundTender);

    if (tenderId) {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.includes(tenderId));
    }
  }, [params.id]);


  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };
    
    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);

    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  const handleToggleFavorite = () => {
    if (!isLoggedIn) {
        toast({
            title: 'Требуется авторизация',
            description: 'Чтобы добавлять тендеры в избранное, войдите в свой аккаунт.',
            variant: 'destructive',
        });
        return;
    }
    const tenderId = params.id;
    if (!tenderId) return;
    const favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = isFavorite
      ? favorites.filter((favId) => favId !== tenderId)
      : [...favorites, tenderId];
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);

    toast({
        title: !isFavorite ? 'Добавлено в избранное' : 'Удалено из избранного',
        description: tender?.title,
    });
  };

  if (!tender) {
    return (
       <div className="bg-background text-foreground flex flex-col min-h-screen">
         <Header />
         <main className="flex-grow flex items-center justify-center py-8 sm:py-12 bg-secondary/30">
            <p>Тендер не найден.</p>
         </main>
         <Footer />
       </div>
    )
  }

  const InfoRow = ({ label, children, icon, className }: { label: string, children: React.ReactNode, icon?: React.ReactNode, className?: string }) => (
    <div className={cn("flex flex-col sm:flex-row sm:items-start sm:justify-between py-3 border-b border-dashed last:border-b-0", className)}>
        <p className="text-muted-foreground w-full sm:w-1/3 shrink-0 mb-1 sm:mb-0 flex items-center gap-2">
            {icon}
            {label}
        </p>
        <div className="font-medium text-primary sm:text-right w-full sm:w-2/3">{children}</div>
    </div>
  )

  const PremiumPlaceholder = () => (
    <div className="bg-yellow-100/30 rounded-lg p-6 text-center border border-dashed border-yellow-400">
      <Lock className="w-8 h-8 mx-auto text-muted-foreground mb-3" />
      <h4 className="font-semibold text-primary mb-1">Доступ к данным ограничен</h4>
      <p className="text-sm text-muted-foreground mb-4">Полная информация о закупке и контакты заказчика доступны на тарифах «Премиум».</p>
      <Button size="sm">Купить доступ</Button>
    </div>
  )

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 sm:py-12 bg-accent/10">
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
          
          <div className="bg-card p-6 rounded-xl shadow-md mb-8">
             <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div>
                    <Badge variant={getStatusVariant(tender.status)} className="text-sm py-1 px-3 self-start lg:self-center mb-2 bg-green-100/80 text-green-700 border-green-200">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {tender.status}
                    </Badge>
                    <h1 className="text-2xl sm:text-3xl font-bold text-primary">{tender.title}</h1>
                    <p className="text-muted-foreground mt-1">Номер: {tender.id}</p>
                </div>
                <div className="flex items-center gap-2 flex-wrap shrink-0">
                     <Button variant="outline" onClick={handleToggleFavorite}>
                        <Star className={cn("mr-2 h-4 w-4", isFavorite && "fill-current text-yellow-500")} />
                        {isFavorite ? 'В избранном' : 'В избранное'}
                    </Button>
                    <Button variant="outline"><FileText className="mr-2 h-4 w-4" />Подготовить заявку</Button>
                </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="text-primary">Основные данные</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                       <InfoRow label="Опубликовано" icon={<Calendar className="w-4 h-4"/>}>{tender.published}</InfoRow>
                       <InfoRow label="Подача заявок до" icon={<Clock className="w-4 h-4"/>}>
                           <div className="flex items-center justify-end gap-2">
                                {tender.deadline}
                                {tender.deadlineDays && <Badge variant="destructive">Время истекает!</Badge>}
                           </div>
                       </InfoRow>
                       <InfoRow label="Предельная стоимость" icon={<div className="w-4 h-4"/>}>
                            <span className="font-bold text-accent text-lg">{tender.price}</span>
                       </InfoRow>
                       <InfoRow label="Отрасль" icon={<div className="w-4 h-4"/>}>{tender.industry}</InfoRow>
                       <InfoRow label="Город" icon={<MapPin className="w-4 h-4"/>}>{tender.location}</InfoRow>
                       <InfoRow label="Площадка" icon={<Building className="w-4 h-4"/>}>
                           {tender.operator ? (
                                <Link href={tender.operator.siteUrl} target="_blank" className="text-accent hover:underline flex items-center gap-2 justify-end">
                                    {tender.platform} <LinkIcon className="w-4 h-4"/>
                                </Link>
                           ) : tender.platform}
                       </InfoRow>
                       <InfoRow label="Процедура" icon={<div className="w-4 h-4"/>}>{tender.procurementType}</InfoRow>
                    </CardContent>
                </Card>

                 <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="text-primary">Сведения о заказчике</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                        {isLoggedIn && tender.customerDetails ? (
                            <>
                                <InfoRow label="Наименование организации">{tender.customerDetails.name}</InfoRow>
                                <InfoRow label="УНП организации">{tender.customerDetails.unp}</InfoRow>
                                <InfoRow label="Место нахождения">{tender.customerDetails.address}</InfoRow>
                                <InfoRow label="Контакты">{tender.customerDetails.contactPerson}</InfoRow>
                            </>
                        ) : <PremiumPlaceholder />}
                    </CardContent>
                </Card>
                
                 <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="text-primary">Документы</CardTitle>
                    </CardHeader>
                    <CardContent>
                         {isLoggedIn && tender.document ? (
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
                        ) : <PremiumPlaceholder />}
                    </CardContent>
                </Card>
            </div>
            
            <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                     {!isLoggedIn && (
                        <Card className="shadow-lg border-accent">
                            <CardContent className="p-6 text-center">
                                <h3 className="text-lg font-bold text-primary mb-2">Разблокируйте все данные</h3>
                                <p className="text-sm text-muted-foreground mb-4">Получите полный доступ к контактам, документам и аналитике, оформив подписку.</p>
                                <Button className="w-full">Купить доступ</Button>
                            </CardContent>
                        </Card>
                     )}
                     {!isLoggedIn && (
                         <Cta
                            className="!py-8 !bg-primary"
                            title="Начните получать тендеры первыми"
                            description="Поиск, мониторинг, аналитика и командная работа — экономьте время и выигрывайте больше."
                            buttonText="Попробовать бесплатно"
                        />
                    )}
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
