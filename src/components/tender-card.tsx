'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from './ui/badge';
import { Star, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TenderCardProps {
  description: string;
}

export function TenderCard({ description }: TenderCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data as AI does not provide it
  const mockData = {
    title: description.split(' ').slice(0, 5).join(' ') + '...',
    date: new Date(Date.now() - Math.random() * 10 * 24 * 60 * 60 * 1000).toLocaleDateString('ru-RU'),
    region: 'Москва',
  };

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-base font-semibold leading-tight text-primary">
            {mockData.title}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFavorite(!isFavorite)}
            className="h-8 w-8 shrink-0"
            aria-label="Добавить в избранное"
          >
            <Star
              className={cn(
                'h-5 w-5 transition-colors',
                isFavorite
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-muted-foreground'
              )}
            />
          </Button>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground pt-2">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Опубликовано: {mockData.date}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {mockData.region}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-sm line-clamp-3">
            {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge variant="secondary">IT</Badge>
        <Button variant="link" className="text-accent h-auto p-0">
          Подробнее
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
