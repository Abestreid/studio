import { Search, Bell, BarChart, Users } from 'lucide-react';

const benefits = [
  {
    icon: <i className="ph ph-magnifying-glass text-3xl"></i>,
    title: 'Умный поиск',
    description: 'Поиск по всему тексту документации и учёт опечаток — находите даже скрытые закупки.',
  },
  {
    icon: <i className="ph ph-bell text-3xl"></i>,
    title: 'Мгновенные уведомления',
    description: 'Email, Telegram, web-push — получайте свежие тендеры сразу после публикации.',
  },
  {
    icon: <i className="ph ph-chart-line text-3xl"></i>,
    title: 'Глубокая аналитика',
    description: 'Отраслевые дашборды, статистика заказчиков и конкурентов — принимайте обоснованные решения.',
  },
  {
    icon: <i className="ph ph-users text-3xl"></i>,
    title: 'Командная работа',
    description: 'Метки, задачи, календарь дедлайнов — вся команда работает в едином пространстве.',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          Почему выбирают нас
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                <div className="mx-auto bg-accent/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
