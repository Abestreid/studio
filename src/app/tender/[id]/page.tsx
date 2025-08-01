
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
  DollarSign,
  ClipboardList,
  User,
  Phone,
  Mail,
  LocateFixed,
} from "lucide-react";
import { useEffect, useState } from 'react';
import { fetchTenders, type Tender, type TenderLot, type TenderDocument } from '@/lib/tenders';
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
    const loadTender = async () => {
      const tenders = await fetchTenders();
      const foundTender = tenders.find(t => t.id === params.id) || null;
      setTender(foundTender);

      if (params.id) {
          const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
          setIsFavorite(favorites.includes(params.id));
      }
    };
    loadTender();
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
        <div className="text-muted-foreground w-full sm:w-1/3 shrink-0 mb-1 sm:mb-0 flex items-center gap-2">
            {icon}
            {label}
        </div>
        <div className="font-medium text-primary sm:text-right w-full sm:w-2/3">{(children === '' || children === null || children === undefined) ? '-' : children}</div>
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
                <Link href="/"> {/* This should link back to a search results page or similar */}
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Назад к списку
                </Link>
            </Button>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-md mb-8">
             <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div>
                    <Badge variant={getStatusVariant(tender.status || '')} className="text-sm py-1 px-3 self-start lg:self-center mb-2 bg-green-100/80 text-green-700 border-green-200">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {tender.status || 'Статус не указан'}
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
                       <InfoRow label="Наименование закупки" icon={<ClipboardList className="w-4 h-4" />}>{tender.title}</InfoRow>
                       <InfoRow label="Отрасль" icon={<Building className="w-4 h-4" />}>{tender.industry}</InfoRow>
                       <InfoRow label="Начало контракта" icon={<Calendar className="w-4 h-4" />}>{tender.startDate}</InfoRow>
                       <InfoRow label="Окончание контракта" icon={<Calendar className="w-4 h-4" />}>{tender.endDate}</InfoRow>
                       <InfoRow label="Итоговая стоимость" icon={<DollarSign className="w-4 h-4" />}>{tender.priceTotal} BYN</InfoRow>
                       <InfoRow label="Город" icon={<MapPin className="w-4 h-4" />}>{tender.city}</InfoRow>
                       <InfoRow label="Область" icon={<LocateFixed className="w-4 h-4" />}>{tender.oblast}</InfoRow>
                       <InfoRow label="Площадка" icon={<Building className="w-4 h-4" />}>
                           <Link href={tender.url} target="_blank" className="text-accent hover:underline flex items-center gap-2 justify-end">
                                {tender.source} <LinkIcon className="w-4 h-4"/>
                            </Link>
                       </InfoRow>
                    </CardContent>
                </Card>

                {tender.lots && tender.lots.length > 0 && (
                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle className="text-primary">Лоты</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {tender.lots.map((lot: TenderLot, index: number) => (
                                <div key={index} className="mb-4 pb-4 border-b border-dashed last:border-b-0 last:mb-0 last:pb-0">
                                    <h3 className="font-semibold text-base mb-2">Лот {lot.lotNumber}: {lot.subject}</h3>
                                    <InfoRow label="Количество"> {lot.quantity}</InfoRow>
                                    <InfoRow label="Стоимость"> {lot.cost}</InfoRow>
                                    <InfoRow label="Статус"> {lot.status}</InfoRow>
                                    {lot.rangeTime && <InfoRow label="Период подачи/действия">{lot.rangeTime}</InfoRow>}
                                    {lot.speakTime && <InfoRow label="Дата переговоров">{lot.speakTime}</InfoRow>}
                                    {lot.deliveryPlace && <InfoRow label="Место поставки">{lot.deliveryPlace}</InfoRow>}
                                    {lot.fullAddress && <InfoRow label="Полный адрес">{lot.fullAddress}</InfoRow>}
                                    {lot.paymentTerm && <InfoRow label="Условия оплаты">{lot.paymentTerm}</InfoRow>}
                                    {lot.termDelivery && <InfoRow label="Срок поставки">{lot.termDelivery}</InfoRow>}
                                    {lot.sourceOfFinancing && <InfoRow label="Источник финансирования">{lot.sourceOfFinancing}</InfoRow>}
                                    {lot.calculationMethod && <InfoRow label="Метод расчета">{lot.calculationMethod}</InfoRow>}
                                    {lot.okrb && <InfoRow label="Код ОКРБ">{lot.okrb}</InfoRow>}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                )}

                 <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="text-primary">Сведения о заказчике</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                        {isLoggedIn ? (
                            <>
                                <InfoRow label="Наименование организации">{tender.customer}</InfoRow>
                                <InfoRow label="УНП организации">{tender.unp}</InfoRow>
                                {tender.orgAddress && <InfoRow label="Место нахождения">{tender.orgAddress}</InfoRow>}
                                {tender.orgContactName && <InfoRow label="Контактное лицо" icon={<User className="w-4 h-4"/>}>{tender.orgContactName}</InfoRow>}
                                {tender.orgContactPhone && <InfoRow label="Телефон" icon={<Phone className="w-4 h-4"/>}>{tender.orgContactPhone}</InfoRow>}
                                {tender.orgContactEmail && <InfoRow label="Email" icon={<Mail className="w-4 h-4"/>}>{tender.orgContactEmail}</InfoRow>}
                            </>
                        ) : <PremiumPlaceholder />}
                    </CardContent>
                </Card>
                
                {tender.documents && tender.documents.length > 0 && (
                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle className="text-primary">Документы</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {isLoggedIn ? (
                                <div className="space-y-3">
                                    {tender.documents.map((doc: TenderDocument, index: number) => (
                                        <div key={index} className="flex items-center justify-between p-3 border rounded-md hover:bg-secondary/30 transition-colors">
                                            <div className="flex items-center gap-2">
                                                <FileText className="w-5 h-5 text-accent"/>
                                                <span className="text-sm font-medium">{doc.name}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <a href={doc.url} target="_blank" rel="noopener noreferrer" title="Скачать документ">
                                                    <Download className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer"/>
                                                </a>
                                                <a href={doc.url} target="_blank" rel="noopener noreferrer" title="Открыть в новой вкладке">
                                                    <LinkIcon className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer"/>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : <PremiumPlaceholder />}
                        </CardContent>
                    </Card>
                )}

                {tender.characteristics && tender.characteristics.length > 0 && (
                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle className="text-primary">Характеристики</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                            {tender.characteristics.map((char, index) => (
                                <InfoRow key={index} label={char.name}>{char.value}</InfoRow>
                            ))}
                        </CardContent>
                    </Card>
                )}

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

