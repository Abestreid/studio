
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, Filter, Database } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: 'Полная автоматизация',
    description: 'Тендеры обновляются автоматически без вашего участия.',
  },
  {
    icon: <Filter className="w-8 h-8 text-accent" />,
    title: 'Фильтрация и исключения',
    description: 'Настройте поиск под себя, чтобы видеть только релевантные тендеры.',
  },
  {
    icon: <Database className="w-8 h-8 text-accent" />,
    title: 'Интеграция данных',
    description: 'Доступ к тендерам с goszakupki.gov.kz, zakup.sk.kz, tenders.by, icetrade.by.',
  },
];

const steps = [
  {
    icon: <Search className="w-8 h-8 text-accent" />,
    title: 'Настройте ваш поиск',
    description: 'Укажите вашу сферу деятельности, ключевые слова и регион. Наша система запомнит ваш выбор.',
  },
  {
    icon: <Bell className="w-8 h-8 text-accent" />,
    title: 'Получайте готовую подборку',
    description: 'Изучайте на почте релевантные закупки на сайте или просто ждите уведомлений о новых заказах.',
  },
  {
    icon: <Star className="w-8 h-8 text-accent" />,
    title: 'Участвуйте и побеждайте!',
    description: 'Используйте сэкономленное время для качественной подготовки документов и побеждайте в торгах.',
  },
]

import { Search, Bell, Star } from 'lucide-react';

export function Benefits() {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6 space-y-20">
        <div>
          <h2 className="text-3xl font-bold text-center text-primary">
            Преимущества платформы
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription className="mt-2">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-primary">
                Начните выигрывать тендеры за 3 шага
            </h2>
             <div className="mt-12 grid gap-8 md:grid-cols-3">
                {steps.map((step) => (
                <Card key={step.title} className="text-center bg-card shadow-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                    <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit mb-4">
                        {step.icon}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription className="mt-2">{step.description}</CardDescription>
                    </CardHeader>
                </Card>
                ))}
            </div>
             <div className="text-center mt-8">
                 <button className="text-accent font-semibold">Зарегистрироваться бесплатно</button>
            </div>
        </div>

      </div>
    </section>
  );
}
