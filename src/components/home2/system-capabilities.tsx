import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  {
    title: 'Детальный поиск и мониторинг тендеров',
    description: 'Быстрый и удобный поиск тендеров в Казахстане, настройка персональных фильтров, мгновенное получение новых закупок из разных источников: госзакупки Казахстана, коммерческие площадки.',
    features: ['Гибкие фильтры поиска', 'Персональные уведомления', 'Обновления в реальном времени'],
    cta1: 'Подробнее о поиске тендеров',
    cta2: 'Найти тендер',
    link: '#',
  },
  {
    title: 'Расширенная аналитика тендеров',
    description: 'Инструменты для глубокой аналитики тендеров в Казахстане: анализ конкурентов, оценка заказчиков, более 15 видов отчетов.',
    features: ['Анализ активности конкурентов и заказчиков', 'Точные прогнозы вероятности победы', 'Наглядные отчёты и статистика'],
    cta1: 'Подробнее об аналитике тендеров',
    cta2: 'Получить отчет',
    link: '/analytics',
  },
  {
    title: 'Проверка контрагентов',
    description: 'Актуальная информация о статусе компании, истории участия в тендерах и репутации на рынке.',
    features: ['Проверка юридического статуса контрагента', 'Доступ к истории участия в тендерах и закупках', 'Проверка наличия арбитражных дел и включения в реестр недобросовестных поставщиков'],
    cta1: 'Подробнее о проверке контрагентов',
    cta2: 'Проверить участника торгов',
    link: '#',
  },
];

export function SystemCapabilities() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center max-w-4xl mx-auto">
          Возможности нашей системы
        </h2>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {capabilities.map((cap) => (
            <Card key={cap.title} className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{cap.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{cap.description}</p>
                <ul className="space-y-2 text-sm mb-6">
                  {cap.features.map(feature => (
                    <li key={feature} className="flex items-start">
                      <span className="text-accent mr-2 mt-1">🔸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto space-y-2">
                   <Button asChild className="w-full">
                    <Link href={cap.link}>{cap.cta2}</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="#">{cap.cta1}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
