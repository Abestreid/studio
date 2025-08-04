
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
  Info,
  Banknote,
  Briefcase,
  FileBadge,
  Code2,
  Wallet,
  CalendarCheck,
  Building2,
} from "lucide-react";
import { useEffect, useState } from 'react';
import { fetchTenders, type Tender, type TenderLot, type TenderDocument } from '@/lib/tenders';
import { useToast } from "@/hooks/use-toast";
import { useParams } from 'next/navigation';
import { cn } from "@/lib/utils";
import { getStatusVariant } from '@/lib/utils';
import { Separator } from "@/components/ui/separator";

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
        <div className="text-muted-foreground w-full sm:w-2/5 shrink-0 mb-1 sm:mb-0 flex items-center gap-2">
            {icon}
            {label}
        </div>
        <div className="font-medium text-primary sm:text-right w-full sm:w-3/5">{(children === '' || children === null || children === undefined) ? '-' : children}</div>
    </div>
  )

  const LotInfoItem = ({ label, children, icon, className }: { label: string, children: React.ReactNode, icon?: React.ReactNode, className?:string }) => (
    <div className={cn("flex items-start gap-2", className)}>
        {icon && <div className="text-muted-foreground mt-0.5">{icon}</div>}
        <div className="flex-1">
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="font-medium text-primary/90 text-sm">{children}</p>
        </div>
    </div>
  )
  
   const SidebarInfoRow = ({ label, children, icon, className, contentClassName }: { label: string, children: React.ReactNode, icon?: React.ReactNode, className?:string, contentClassName?:string }) => (
    <div className={cn("flex items-start gap-3", className)}>
        {icon && <div className="text-muted-foreground mt-0.5">{icon}</div>}
        <div className="flex-1">
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className={cn("font-semibold text-primary", contentClassName)}>{children}</p>
        </div>
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
      <main className="flex-grow py-8 sm:py-12 bg-accent/5">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-8">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="text-primary flex items-center gap-2"><ClipboardList className="w-5 h-5 text-accent"/>Основные данные</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                       <InfoRow label="Наименование закупки" icon={<ClipboardList className="w-4 h-4" />}>{tender.title}</InfoRow>
                       <InfoRow label="Отрасль" icon={<Building className="w-4 h-4" />}>{tender.industry}</InfoRow>
                       <InfoRow label="Город" icon={<MapPin className="w-4 h-4" />}>{tender.city}</InfoRow>
                       <InfoRow label="Область" icon={<LocateFixed className="w-4 h-4" />}>{tender.oblast}</InfoRow>
                       <InfoRow label="Площадка" icon={<Building2 className="w-4 h-4" />}>
                           <Link href={tender.url} target="_blank" className="text-accent hover:underline flex items-center gap-2 justify-end">
                                {tender.source} <LinkIcon className="w-4 h-4"/>
                            </Link>
                       </InfoRow>
                    </CardContent>
                </Card>

                {tender.lots && tender.lots.length > 0 && (
                     <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle className="text-primary flex items-center gap-2"><Briefcase className="w-5 h-5 text-accent"/>Лоты</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {tender.lots.map((lot: TenderLot, index: number) => (
                                <div key={index} className="border rounded-xl p-4">
                                    <div className="flex justify-between items-start gap-4 mb-3">
                                        <div className="flex-grow">
                                            <h3 className="font-semibold text-base mb-2">Лот {lot.lotNumber}: {lot.subject}</h3>
                                            <Badge variant="outline" className="bg-green-100/60 border-green-300 text-green-700">{lot.status}</Badge>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <p className="font-bold text-lg text-primary">{lot.cost}</p>
                                            <p className="text-xs text-muted-foreground">{lot.quantity}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 py-4 border-y border-dashed">
                                        {lot.rangeTime && <LotInfoItem label="Период подачи/действия" icon={<Calendar className="w-4 h-4"/>}>{lot.rangeTime}</LotInfoItem>}
                                        {lot.sourceOfFinancing && <LotInfoItem label="Источник финансирования" icon={<Wallet className="w-4 h-4"/>}>{lot.sourceOfFinancing}</LotInfoItem>}
                                        {lot.speakTime && <LotInfoItem label="Дата переговоров" icon={<Clock className="w-4 h-4"/>}>{lot.speakTime}</LotInfoItem>}
                                        {lot.calculationMethod && <LotInfoItem label="Метод расчета" icon={<FileBadge className="w-4 h-4"/>}>{lot.calculationMethod}</LotInfoItem>}
                                        {lot.deliveryPlace && <LotInfoItem label="Место поставки" icon={<MapPin className="w-4 h-4"/>}>{lot.deliveryPlace}</LotInfoItem>}
                                        {lot.okrb && <LotInfoItem label="Код ОКРБ" icon={<Code2 className="w-4 h-4"/>}>{lot.okrb}</LotInfoItem>}
                                    </div>

                                    <div className="space-y-4 pt-4">
                                        {lot.paymentTerm && <LotInfoItem label="Условия оплаты" icon={<Info className="w-4 h-4"/>}>{lot.paymentTerm}</LotInfoItem>}
                                        {lot.termDelivery && <LotInfoItem label="Срок поставки" icon={<CalendarCheck className="w-4 h-4"/>}>{lot.termDelivery}</LotInfoItem>}
                                    </div>
                                </div>
                            ))}
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
            
            <div className="lg:col-span-2">
                <div className="sticky top-24 space-y-8">
                     <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle className="text-xl text-primary flex items-center gap-2"><Banknote className="w-5 h-5 text-accent"/>Ключевая информация</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div className="bg-accent/10 p-4 rounded-lg text-center">
                                <p className="text-xs text-muted-foreground">Общая стоимость</p>
                                <p className="text-xl font-bold text-primary">{tender.price}</p>
                            </div>
                           <div className="bg-secondary/40 p-4 rounded-lg">
                             <SidebarInfoRow label="Начало контракта" icon={<Calendar className="w-4 h-4" />}>
                                {tender.startDate || 'Не указано'}
                            </SidebarInfoRow>
                           </div>
                           <div className="bg-secondary/40 p-4 rounded-lg">
                             <SidebarInfoRow label="Окончание контракта" icon={<Calendar className="w-4 h-4 text-red-500" />}>
                                {tender.endDate || 'Не указано'}
                             </SidebarInfoRow>
                           </div>
                        </CardContent>
                    </Card>
                    
                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle className="text-xl text-primary flex items-center gap-2"><Building className="w-5 h-5 text-accent"/>Сведения о заказчике</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                            {isLoggedIn ? (
                                <div className="space-y-4">
                                    <SidebarInfoRow label="Наименование">{tender.customer}</SidebarInfoRow>
                                    <SidebarInfoRow label="УНП"><Badge variant="outline" className="text-sm">{tender.unp}</Badge></SidebarInfoRow>
                                    <Separator className="my-2"/>
                                    {tender.orgContactName && <SidebarInfoRow label="Контактное лицо" icon={<User className="w-4 h-4"/>}>{tender.orgContactName}</SidebarInfoRow>}
                                    {tender.orgContactPhone && <SidebarInfoRow label="Телефон" icon={<Phone className="w-4 h-4"/>}>{tender.orgContactPhone}</SidebarInfoRow>}
                                    {tender.orgAddress && <SidebarInfoRow label="Адрес" icon={<MapPin className="w-4 h-4"/>}>{tender.orgAddress}</SidebarInfoRow>}
                                    {tender.orgContactEmail &&
                                        <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                                            <Mail className="mr-2 h-4 w-4" /> Связаться с заказчиком
                                        </Button>
                                    }
                                </div>
                            ) : <PremiumPlaceholder />}
                        </CardContent>
                    </Card>
                    
                    {tender.documents && tender.documents.length > 0 && (
                        <Card className="shadow-md">
                            <CardHeader>
                                <CardTitle className="text-primary flex items-center gap-2"><FileText className="w-5 h-5 text-accent"/>Документы</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {isLoggedIn ? (
                                    <div className="space-y-3">
                                        {tender.documents.map((doc: TenderDocument, index: number) => (
                                            <a key={index} href={doc.url} target="_blank" rel="noopener noreferrer" title={doc.name}
                                                className="flex items-center justify-between p-3 border rounded-md hover:bg-secondary/30 transition-colors group">
                                                <div className="flex items-center gap-2 overflow-hidden">
                                                    <FileText className="w-5 h-5 text-accent shrink-0"/>
                                                    <span className="text-sm font-medium truncate group-hover:underline">{doc.name}</span>
                                                </div>
                                                <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary cursor-pointer shrink-0 ml-2"/>
                                            </a>
                                        ))}
                                    </div>
                                ) : <PremiumPlaceholder />}
                            </CardContent>
                        </Card>
                    )}

                     {!isLoggedIn && (
                         <div className="hidden lg:block">
                            <Cta
                                className="!py-8 !bg-primary"
                                title="Разблокируйте все данные"
                                description="Получите полный доступ к контактам, документам и аналитике, оформив подписку."
                                buttonText="Купить доступ"
                            />
                         </div>
                    )}
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );

    