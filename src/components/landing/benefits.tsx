

import { Card, CardContent } from '@/components/ui/card';
import { Bot, Filter, DatabaseZap, UserPlus, SlidersHorizontal, Bell } from 'lucide-react';
import { Button } from '../ui/button';

const benefits = [
  {
    icon: <Bot className="w-8 h-8 text-accent" />,
    title: 'Полная автоматизация',
    description: 'Тендеры обновляются ежедневно без вашего участия.',
  },
  {
    icon: <Filter className="w-8 h-8 text-accent" />,
    title: 'Фильтрация и исключения',
    description: 'Настраивайте показ только релевантных тендеров.',
  },
  {
    icon: <DatabaseZap className="w-8 h-8 text-accent" />,
    title: 'Интеграция данных',
    description: 'Доступ к тендерам с goszakup.gov.kz, zakup.sk.kz, tenders.by, icetrade.by.',
  },
];

const steps = [
  {
    icon: <UserPlus className="w-8 h-8 text-accent" />,
    title: 'Регистрация',
    description: 'Создайте аккаунт за 1 минуту.',
  },
  {
    icon: <SlidersHorizontal className="w-8 h-8 text-accent" />,
    title: 'Настройка фильтров',
    description: 'Выберите подходящие фильтры и ключевые слова.',
  },
  {
    icon: <Bell className="w-8 h-8 text-accent" />,
    title: 'Получайте уведомления',
    description: 'Следите за новыми тендерами через email и Telegram.',
  },
]


export function Benefits() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div>
            <h2 className="section-title">
              Преимущества платформы
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 p-6">
                    <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit mb-4">
                      {benefit.icon}
                    </div>
                    <h5 className="font-bold text-lg mb-2">{benefit.title}</h5>
                    <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
            <h2 className="section-title">
                Как это работает?
            </h2>
             <div className="mt-12 grid gap-8 md:grid-cols-3">
                {steps.map((step) => (
                <Card key={step.title} className="text-center bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 p-6 border-accent/20 hover:border-accent">
                    <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                        {step.icon}
                    </div>
                    <h6 className="font-semibold text-xl mb-2">{step.title}</h6>
                    <p className="text-muted-foreground">{step.description}</p>
                </Card>
                ))}
            </div>
             <div className="text-center mt-12">
                 <Button size="lg">Зарегистрироваться бесплатно</Button>
            </div>
        </div>
      </section>
    </>
  );
}
