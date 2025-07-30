
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, CheckCircle, ThumbsDown, ThumbsUp } from 'lucide-react';

const beforeAfter = [
  {
    before: {
      title: 'Часы ручного поиска',
      description: 'Ежедневный мониторинг 5+ площадок, чтобы ничего не упустить.',
      icon: <AlertCircle className="w-6 h-6 text-red-500" />
    },
    after: {
      title: 'Все закупки в одной ленте',
      description: 'Мы собираем и обновляем для вас данные со всех государственных и коммерческих площадок Беларуси.',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    }
  },
  {
    before: {
      title: 'Риск пропустить выгодный заказ',
      description: 'Пропустили тендер, потому что вовремя не увидели? Теряете прибыль.',
      icon: <ThumbsDown className="w-6 h-6 text-red-500" />
    },
    after: {
      title: 'Моментальные уведомления',
      description: 'Настройте фильтр один раз и получайте уведомления о подходящих вам тендерах по Email, PUSH и в Telegram.',
      icon: <ThumbsUp className="w-6 h-6 text-green-500" />
    }
  },
  {
    before: {
      title: 'Сложный и устаревший интерфейс',
      description: 'Непонятные фильтры и таблицы, в которых легко запутаться и сделать ошибку.',
      icon: <AlertCircle className="w-6 h-6 text-red-500" />
    },
    after: {
      title: 'Интуитивный поиск, понятный каждому',
      description: 'Наш интерфейс разработан для людей, а не для роботов.',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    }
  }
];

export function Testimonials() {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-primary">
          Работа с госзакупками в РБ может быть простой
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {beforeAfter.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6 bg-red-500/10 border-b-2 border-red-500/20">
                <div className="flex items-center gap-3">
                  {item.before.icon}
                  <h3 className="font-bold text-red-700">БЫЛО</h3>
                </div>
                <h4 className="font-semibold text-lg mt-3 text-primary">{item.before.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.before.description}</p>
              </div>
              <div className="p-6 bg-green-500/10">
                <div className="flex items-center gap-3">
                  {item.after.icon}
                  <h3 className="font-bold text-green-700">СТАЛО</h3>
                </div>
                <h4 className="font-semibold text-lg mt-3 text-primary">{item.after.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.after.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
