import { Card } from '@/components/ui/card';
import { MagnifyingGlass, IdentificationCard, Bell, ChartBar, UserFocus, Funnel } from '@phosphor-icons/react/dist/ssr';

const features = [
  {
    icon: <MagnifyingGlass weight="regular" />,
    title: 'Мультиплощадочный поиск',
    description: 'Поиск тендеров по всем основным площадкам Казахстана и Беларуси. Быстро находите нужные закупки с помощью интеллектуальных фильтров.',
  },
  {
    icon: <IdentificationCard weight="regular" />,
    title: 'Детализированные карточки',
    description: 'Вся информация о тендере в одном месте: заказчик, статус, сроки, тип закупки, цена и многое другое для быстрого анализа.',
  },
  {
    icon: <Bell weight="regular" />,
    title: 'Система оповещений',
    description: 'Получайте уведомления о новых тендерах на email и в Telegram, не пропускайте важные закупки и изменения статусов.',
  },
  {
    icon: <ChartBar weight="regular" />,
    title: 'Аналитика и статистика',
    description: 'Анализируйте рынок, отслеживайте динамику тендеров, стройте отчёты и принимайте обоснованные решения.',
  },
  {
    icon: <UserFocus weight="regular" />,
    title: 'Отслеживание конкурентов',
    description: 'Следите за активностью конкурентов и их тендерами, чтобы быть на шаг впереди на рынке.',
  },
  {
    icon: <Funnel weight="regular" />,
    title: 'Гибкая фильтрация',
    description: 'Настраивайте фильтры по регионам, типам закупок, цене, дате и другим параметрам для максимальной релевантности.',
  },
];

export function SystemFeatures() {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          Возможности системы
        </h2>
        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 flex flex-col items-start gap-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-xl border bg-white hover:border-accent">
                <div className="rounded-full p-3 w-14 h-14 flex items-center justify-center bg-accent/10 text-accent text-3xl mb-2">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-2">{feature.title}</h5>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
