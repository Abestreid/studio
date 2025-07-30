
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search, List, BarChart2, Users, SlidersHorizontal, Bell } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-6 h-6 text-accent" />,
    title: 'Мультиплощадочный поиск',
    description: 'Поиск тендеров по всем основным площадкам Казахстана и Беларуси. Быстро находите нужные закупки с помощью интеллектуальных фильтров.',
  },
  {
    icon: <List className="w-6 h-6 text-accent" />,
    title: 'Детализированные карточки',
    description: 'Вся информация о тендере в одном месте: заказчик, статус, сроки, тип закупки, цена и многое другое для быстрого анализа.',
  },
  {
    icon: <Bell className="w-6 h-6 text-accent" />,
    title: 'Система оповещений',
    description: 'Получайте уведомления о новых тендерах на email и в Telegram, не пропускайте важные закупки и изменения статусов.',
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-accent" />,
    title: 'Аналитика и статистика',
    description: 'Анализируйте рынок, отслеживайте динамику тендеров, стройте отчёты и принимайте обоснованные решения.',
  },
  {
    icon: <Users className="w-6 h-6 text-accent" />,
    title: 'Отслеживание конкурентов',
    description: 'Следите за активностью конкурентов и их тендерами, чтобы быть на шаг впереди на рынке.',
  },
  {
    icon: <SlidersHorizontal className="w-6 h-6 text-accent" />,
    title: 'Гибкая фильтрация',
    description: 'Настраивайте фильтры по регионам, типам закупок, цене, дате и другим параметрам для максимальной релевантности.',
  },
];

export function SystemFeatures() {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-primary">
          Возможности системы
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-accent/10 rounded-full p-3 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="mt-1">{feature.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
