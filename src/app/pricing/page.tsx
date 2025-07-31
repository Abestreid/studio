
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Cta } from '@/components/landing/cta';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const tiers = [
  {
    name: 'Базовый',
    priceMonthly: '29 BYN',
    priceAnnually: '290 BYN',
    description: 'Для индивидуальных предпринимателей и микробизнеса.',
    features: [
      'Полный доступ ко всем тендерам',
      'Уведомления на Email',
      'До 5 сохраненных фильтров',
    ],
    isPopular: false,
  },
  {
    name: 'Профи',
    priceMonthly: '59 BYN',
    priceAnnually: '590 BYN',
    description: 'Для отделов закупок до 5 человек.',
    features: [
      'Все возможности Базового',
      'Уведомления в Email + Telegram',
      'Неограниченные фильтры',
      'Сравнительный анализ конкурентов',
      'Командный доступ (до 5 чел.)',
    ],
    isPopular: true,
  },
  {
    name: 'Бизнес',
    priceMonthly: 'Индивидуально',
    priceAnnually: 'Индивидуально',
    description: 'Для департаментов закупок и тендерных подразделений.',
    features: [
      'Все возможности Профи',
      'Персональный менеджер',
      'Интеграция по REST API',
      'Расширенная аналитика',
      'Приоритетная поддержка',
      'Командный доступ (до 20 чел.)',
    ],
    isPopular: false,
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary">Выберите тариф, который решит задачи вашего отдела закупок</h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Прозрачные цены, без скрытых платежей.
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 my-8">
            <Label htmlFor="billing-cycle" className={!isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'}>
              Ежемесячно
            </Label>
            <Switch
              id="billing-cycle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              aria-label="Переключить на годовую оплату"
            />
            <Label htmlFor="billing-cycle" className={isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'}>
              Ежегодно <span className="text-accent font-bold">(выгода 20%!)</span>
            </Label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  'flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-2xl',
                  tier.isPopular && 'border-2 border-accent shadow-accent/20'
                )}
              >
                {tier.isPopular && (
                  <div className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider text-center py-1.5 rounded-t-xl">
                    Популярный выбор
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">{tier.name}</CardTitle>
                  <CardDescription className="px-4 h-10">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="text-center my-4">
                    <span className="text-4xl font-bold">{isAnnual ? tier.priceAnnually : tier.priceMonthly}</span>
                    {tier.name !== 'Бизнес' && <span className="text-muted-foreground">/{isAnnual ? 'год' : 'мес'}</span>}
                  </div>
                  <ul className="space-y-3 text-sm flex-grow mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                 <CardFooter>
                    <Button className="w-full" size="lg" variant={tier.isPopular ? 'default' : 'outline'}>
                        Оформить
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Cta
        title="Есть вопросы по тарифам?"
        description="Наша команда поддержки готова помочь вам выбрать лучший план для вашего бизнеса."
        buttonText="Связаться с нами"
      />
      <Footer />
    </div>
  );
}
