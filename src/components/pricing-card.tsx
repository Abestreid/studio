'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  priceMonthly: string;
  priceAnnually: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
  isAnnual: boolean;
}

export function PricingCard({ tier, isAnnual }: PricingCardProps) {
  return (
    <Card
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
  );
}
