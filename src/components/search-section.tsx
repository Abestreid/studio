'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { searchTenders, type SearchState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { INDUSTRIES, REGIONS } from '@/lib/constants';
import { useEffect, useRef, useState } from 'react';
import { TenderCard } from './tender-card';
import { Skeleton } from './ui/skeleton';
import { AlertCircle, FileText, Search, ThumbsUp, TrendingUp, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const initialState: SearchState = {
  message: 'Начните поиск, чтобы увидеть результаты.',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90">
      <Search className="mr-2 h-4 w-4" />
      {pending ? 'Поиск...' : 'Найти тендеры'}
    </Button>
  );
}

export function SearchSection() {
  const [state, formAction] = useFormState(searchTenders, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const statCards = [
    { title: 'Активные тендеры', value: '12,845', icon: FileText },
    { title: 'Новые за день', value: '312', icon: TrendingUp },
    { title: 'Успешных сделок', value: '4,590', icon: ThumbsUp },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Информационная панель
        </h1>
        <p className="text-muted-foreground">
          Обзор ключевых показателей и интеллектуальный поиск тендеров.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {statCards.map((card, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-primary">
                {card.title}
              </CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Умный поиск</CardTitle>
          <CardDescription>
            Опишите, что вы ищете, и наш ИИ подберет наиболее релевантные
            варианты.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="query">Поисковый запрос</Label>
              <Textarea
                id="query"
                name="query"
                placeholder="например, «поставка офисной мебели и оргтехники в Москву для образовательного учреждения»"
                rows={3}
                required
                className="bg-card"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="industry">Отрасль</Label>
                <Select name="industry" defaultValue="Все отрасли">
                  <SelectTrigger id="industry" className="bg-card">
                    <SelectValue placeholder="Выберите отрасль" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDUSTRIES.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="region">Регион</Label>
                <Select name="region" defaultValue="Все регионы">
                  <SelectTrigger id="region" className="bg-card">
                    <SelectValue placeholder="Выберите регион" />
                  </SelectTrigger>
                  <SelectContent>
                    {REGIONS.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
               {state.error && (
                <p className="text-sm text-destructive flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" /> {state.error}
                </p>
                )}
              <div className="w-full sm:w-auto sm:ml-auto">
                 <SubmitButton />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-primary">
          Результаты поиска
        </h2>
        <ResultsDisplay state={state} />
      </div>
    </div>
  );
}

function ResultsDisplay({ state }: { state: SearchState }) {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-5 w-3/4" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (state.error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Ошибка</AlertTitle>
        <AlertDescription>{state.error}</AlertDescription>
      </Alert>
    );
  }

  if (state.message) {
     return (
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Информация</AlertTitle>
        <AlertDescription>{state.message}</AlertDescription>
      </Alert>
    );
  }

  if (state.results) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {state.results.map((result, index) => (
          <TenderCard key={index} description={result} />
        ))}
      </div>
    );
  }

  return null;
}
