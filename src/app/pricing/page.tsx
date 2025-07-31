'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Cta } from '@/components/landing/cta';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { PricingCard } from '@/components/pricing-card';
import { pricingTiers } from '@/lib/content';

const tiers = pricingTiers;

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
                <PricingCard key={tier.name} tier={tier} isAnnual={isAnnual} />
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
