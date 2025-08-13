
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Separator } from './ui/separator';

interface FeatureGroup {
  title: string;
  features: string[];
}

interface PricingTier {
  name: string;
  priceMonthly: string;
  priceAnnually: string;
  description: string;
  featureGroups: FeatureGroup[];
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
        'flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden h-full',
        tier.isPopular ? 'border-2 border-primary shadow-primary/20' : 'border'
      )}
    >
        {tier.isPopular && (
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider text-center py-1 px-4 rounded-full z-10">
            Популярный
            </div>
        )}

      <CardHeader className="p-6 text-center">
        <CardTitle className="text-2xl text-primary">{tier.name}</CardTitle>
        <CardDescription className="h-10 mt-1">{tier.description}</CardDescription>
      </CardHeader>
      
      <div className="text-center my-4">
        <span className="text-4xl font-bold">{isAnnual ? tier.priceAnnually : tier.priceMonthly}</span>
        {tier.name !== 'Бизнес' && <span className="text-muted-foreground">/{isAnnual ? 'год' : 'мес'}</span>}
      </div>

      <CardContent className="p-6 flex-grow">
        {tier.featureGroups.map((group, index) => (
          <div key={group.title} className={cn(index > 0 && 'mt-6')}>
            <p className="font-semibold text-sm mb-3 text-primary">{group.title}</p>
            <ul className="space-y-3 text-sm">
              {group.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
      
      <CardFooter className="p-6 mt-auto">
        <Button className="w-full" size="lg" variant={tier.isPopular ? 'default' : 'outline'}>
          Оформить
        </Button>
      </CardFooter>
    </Card>
  );
}
