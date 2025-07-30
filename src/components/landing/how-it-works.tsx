import { Search, Bell, BarChart, Users } from 'lucide-react';

const benefits = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Умный поиск',
    description: 'Поиск по всему тексту документации и учёт опечаток — находите даже скрытые закупки.',
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: 'Мгновенные уведомления',
    description: 'Email, Telegram, web-push — получайте свежие тендеры сразу после публикации.',
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Глубокая аналитика',
    description: 'Отраслевые дашборды, статистика заказчиков и конкурентов — принимайте обоснованные решения.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Командная работа',
    description: 'Метки, задачи, календарь дедлайнов — вся команда работает в едином пространстве.',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          Почему выбирают Tendersoft
        </h2>
        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 border">
                <div className="mx-auto bg-accent/10 text-accent rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
