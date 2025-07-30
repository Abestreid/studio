
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search, Bell, BarChart, Users } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-8 h-8 text-accent" />,
    title: 'Умный поиск',
    description: 'Поиск по всему тексту документации и учёт опечаток - находите даже скрытые закупки.',
  },
  {
    icon: <Bell className="w-8 h-8 text-accent" />,
    title: 'Мгновенные уведомления',
    description: 'Email, Telegram, web-push - получайте ссылки на тендеры сразу после публикации.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-accent" />,
    title: 'Глубокая аналитика',
    description: 'Отраслевые дашборды, статистика заказчиков и конкурентов, обоснованные решения.',
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: 'Командная работа',
    description: 'Метки, задачи, календарь дедлайнов - вся команда работает в едином пространстве.',
  },
];

export function Features() {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-primary">
          Почему выбирают нас
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="mt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
