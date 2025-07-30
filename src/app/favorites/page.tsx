
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { TenderCard } from '@/components/tender-card';
import { ListFilter, Search, FileX2 } from 'lucide-react';
import { Cta } from '@/components/landing/cta';

const favoriteTenders = [
    {
        id: "1",
        title: "Поставка офисной мебели для администрации г. Минска",
        location: "Минск",
        customer: "Администрация г. Минска",
        platform: "Госзакупки",
        published: "25.05.2025",
        deadline: "до 29.05 (2 дня)",
        type: "Товар",
        price: "34 500 BYN",
        status: "Открыт"
    },
    {
        id: "4",
        title: "Техническое обслуживание и ремонт принтеров",
        location: "Нур-Султан",
        customer: "Государственное учреждение 'Центр обслуживания населения'",
        platform: "goszakup.gov.kz",
        published: "15.06.2025",
        deadline: "до 25.06 (10 дней)",
        type: "Услуга",
        price: "500 000 KZT",
        status: ""
    },
];

const hasFavorites = favoriteTenders.length > 0;

export default function FavoritesPage() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 sm:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">Избранные тендеры</h1>
              <p className="text-muted-foreground mt-1">
                Отслеживайте самые важные закупки в одном месте.
              </p>
            </div>
          </div>
          
          {hasFavorites ? (
            <>
                <div className="flex flex-col sm:flex-row gap-4 mb-6 p-4 bg-card rounded-lg border shadow-sm">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input placeholder="Поиск по избранному..." className="pl-10"/>
                    </div>
                    <Select>
                        <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Сортировать по..." />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="deadline">Дате окончания</SelectItem>
                        <SelectItem value="published">Дате публикации</SelectItem>
                        <SelectItem value="price">Стоимости</SelectItem>
                        </SelectContent>
                    </Select>
                     <Button variant="outline" className="shrink-0">
                        <ListFilter className="mr-2 h-4 w-4" />
                        Фильтры
                    </Button>
                </div>
                <div className="space-y-4">
                    {favoriteTenders.map((tender) => (
                        <TenderCard key={tender.id} {...tender} />
                    ))}
                </div>
            </>
          ) : (
             <div className="text-center bg-card border rounded-lg py-16 px-6">
                <FileX2 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold text-primary mb-2">Список избранного пуст</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Вы еще не добавили ни одного тендера. Начните поиск, чтобы найти интересные закупки и добавьте их в избранное для удобного отслеживания.
                </p>
                <Button size="lg" asChild>
                    <a href="/">Начать поиск</a>
                </Button>
            </div>
          )}

        </div>
      </main>
      <Cta
        title="Готовы начать выигрывать?"
        description="Получите полный доступ к платформе и увеличьте свои шансы на победу."
        buttonText="Попробовать бесплатно"
      />
      <Footer />
    </div>
  );
}

