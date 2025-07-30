
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { TenderCard } from '../tender-card';

const mockTenders = [
  "Поставка компьютеров и периферийного оборудования для нужд образовательных учреждений г. Минска",
  "Разработка и внедрение автоматизированной системы управления складом для логистической компании",
  "Оказание услуг по техническому обслуживанию и ремонту медицинского оборудования в учреждениях здравоохранения",
  "Строительство детского сада на 230 мест в г. Гомель",
  "Закупка продуктов питания для школьных столовых на 2024-2025 учебный год",
  "Проведение комплексного аудита финансово-хозяйственной деятельности предприятия",
];

export function Hero() {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <section className="relative bg-primary/5">
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            Все тендеры Беларуси — в одном простом окне
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Быстрый и точный поиск по всем закупкам и торговым площадкам, глубокая аналитика и
            получайте уведомления о самых интересных вам тендерах прямо в Telegram.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto mt-12 shadow-lg">
          <CardContent className="p-6">
            <form onSubmit={handleSearch}>
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Что ищем? Например, «строительство дороги в Минской области»"
                  className="flex-grow text-base h-12"
                />
                <Button type="submit" size="lg" className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Search className="mr-2 h-5 w-5" />
                  Найти
                </Button>
              </div>
              <div className="mt-4">
                <Button
                  type="button"
                  variant="link"
                  className="text-accent p-0"
                  onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                >
                  {showAdvancedSearch ? 'Скрыть расширенный поиск' : 'Расширенный поиск'}
                  {showAdvancedSearch ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>
              </div>
              {showAdvancedSearch && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 animate-accordion-down">
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Регион" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minsk">Минск</SelectItem>
                      <SelectItem value="gomel">Гомель</SelectItem>
                      <SelectItem value="brest">Брест</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Отрасль" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">IT</SelectItem>
                      <SelectItem value="construction">Строительство</SelectItem>
                      <SelectItem value="medicine">Медицина</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="button" variant="outline" className="h-12">
                    <SlidersHorizontal className="mr-2 h-5 w-5" />
                    Все фильтры
                  </Button>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
        <p className="text-center text-xs text-muted-foreground mt-4">
          Зарегистрируйтесь на 1 минуту и получите 7 дней бесплатного доступа
        </p>

        {showResults && (
           <div className="mt-12">
             <h2 className="text-3xl font-bold text-center mb-8 text-primary">Результаты поиска</h2>
             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
               {mockTenders.map((tender, index) => (
                 <TenderCard key={index} description={tender} />
               ))}
             </div>
           </div>
        )}
      </div>
    </section>
  );
}

