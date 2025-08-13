
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Separator } from './ui/separator';

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
        'flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden',
        tier.isPopular && 'border-2 border-primary shadow-primary/20'
      )}
    >
        {tier.isPopular && (
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider text-center py-1 px-3 rounded-bl-lg z-10">
            Популярный выбор
            </div>
        )}

      <div className="flex flex-col justify-between p-6 bg-secondary/30 md:w-1/3 text-center md:text-left">
          <CardHeader className="p-0">
            <CardTitle className="text-2xl text-primary">{tier.name}</CardTitle>
            <CardDescription className="h-10 mt-1">{tier.description}</CardDescription>
          </CardHeader>
          <div className="my-4">
            <span className="text-4xl font-bold">{isAnnual ? tier.priceAnnually : tier.priceMonthly}</span>
            {tier.name !== 'Бизнес' && <span className="text-muted-foreground">/{isAnnual ? 'год' : 'мес'}</span>}
          </div>
           <Button className="w-full" size="lg" variant={tier.isPopular ? 'default' : 'outline'}>
              Оформить
            </Button>
      </div>
      
      <CardContent className="p-6 md:w-2/3">
        <p className="font-semibold mb-4">В тариф входит:</p>
        <ul className="space-y-3 text-sm">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
