'use client';

import { useState, useEffect, useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Info } from 'lucide-react';
import { TenderCard } from '../tender-card';
import { searchTenders, type SearchState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { REGIONS } from '@/lib/constants';

const initialState: SearchState = {};

const stages = ["Подача заявок", "Комиссия", "Завершены", "Планируются", "Отменены"];
const tradeTypes = ["44-ФЗ", "223-ФЗ", "615 ПП РФ", "Коммерческие", "Закупки СНГ"];

export function Hero() {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const { toast } = useToast();
  const [state, formAction] = useActionState(searchTenders, initialState);

  useEffect(() => {
    if (state.error) {
      toast({
        title: 'Ошибка поиска',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section className="hero pt-12 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-left md:text-center">
          <h1 className="hero__title text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            Все тендеры Беларуси и&nbsp;Казахстана — в одном месте
          </h1>
          <p className="hero__lead mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Поиск, мониторинг, аналитика и командная работа — экономьте время и выигрывайте больше.
          </p>
        </div>

        <form action={formAction} className="mt-12 max-w-5xl mx-auto">
          <div className="search-pill">
            <i className="ph ph-magnifying-glass ml-4 mr-2 text-muted-foreground text-xl"></i>
            <Input
              name="query"
              type="text"
              placeholder="Что ищем? Например: закупка мебели, канцелярия, услуги связи"
              className="flex-grow border-none focus-visible:ring-0 text-base h-12 shadow-none bg-transparent"
            />
            <Select name="region">
              <SelectTrigger className="w-auto border-none focus:ring-0 bg-transparent shadow-none pr-8 h-12">
                <SelectValue placeholder="Место поставки" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="by">Беларусь</SelectItem>
                <SelectItem value="kz">Казахстан</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit" className="rounded-full h-10 px-6 text-base">
              <i className="ph ph-magnifying-glass mr-2"></i>
              Поиск
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full btn-expand"
              onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
              aria-expanded={showAdvancedSearch}
            >
              <i className="ph ph-sliders-horizontal text-xl" />
            </Button>
          </div>

          {showAdvancedSearch && (
            <div className="advanced-search mt-4 p-6 bg-blue-50/50 rounded-lg animate-accordion-down">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
                    <div className="md:col-span-2 lg:col-span-2">
                        <Label htmlFor="q_adv" className="text-sm font-medium">Ключевые слова</Label>
                        <Input id="q_adv" name="q_adv" placeholder="лыжи, 36.40.11.133 …" className="mt-1"/>
                        <div className="flex items-center gap-2 mt-2">
                            <Checkbox id="exact" />
                            <Label htmlFor="exact" className="text-sm font-normal">Точное соответствие</Label>
                        </div>
                    </div>
                     <div className="md:col-span-2 lg:col-span-2">
                        <Label htmlFor="exclude" className="text-sm font-medium flex items-center gap-1">
                            Исключить слова
                            <Info className="w-4 h-4 text-yellow-500" />
                        </Label>
                        <Input id="exclude" name="exclude" className="mt-1"/>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-4">
                        <Label className="text-sm font-medium mb-2 block">Этап</Label>
                         <div className="chip-group">
                            {stages.map(stage => (
                                <label key={stage}>
                                <input type="checkbox" name="stage" value={stage} className="form-check-input" defaultChecked={stage === 'Подача заявок' || stage === 'Комиссия'} />
                                <span className="form-check-label">{stage}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-4">
                        <Label className="text-sm font-medium mb-2 block">Тип торгов</Label>
                        <div className="chip-group">
                           {tradeTypes.map(type => (
                               <label key={type}>
                               <input type="checkbox" name="law" value={type} className="form-check-input" defaultChecked={type === '44-ФЗ' || type === '223-ФЗ'} />
                               <span className="form-check-label">{type}</span>
                               </label>
                           ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <Label htmlFor="regions" className="text-sm font-medium">Регион поставки</Label>
                        <Select name="regions">
                             <SelectTrigger id="regions" className="mt-1">
                                <SelectValue placeholder="Все регионы" />
                             </SelectTrigger>
                             <SelectContent>
                                {REGIONS.map(region => (
                                    <SelectItem key={region} value={region}>{region}</SelectItem>
                                ))}
                             </SelectContent>
                        </Select>
                    </div>
                    <div>
                         <Label htmlFor="price_from" className="text-sm font-medium">Цена от</Label>
                         <Input id="price_from" name="price_from" type="number" className="mt-1" />
                    </div>
                     <div>
                         <Label htmlFor="price_to" className="text-sm font-medium">Цена до</Label>
                         <Input id="price_to" name="price_to" type="number" className="mt-1"/>
                    </div>
                    <div>
                         <Label htmlFor="date_pub_from" className="text-sm font-medium">Публикация от</Label>
                         <Input id="date_pub_from" name="date_pub_from" type="date" className="mt-1"/>
                    </div>
                     <div>
                         <Label htmlFor="date_pub_to" className="text-sm font-medium">до</Label>
                         <Input id="date_pub_to" name="date_pub_to" type="date" className="mt-1"/>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-between items-center mt-4">
                        <div className="flex items-center gap-2">
                             <Checkbox id="subscribe" />
                             <Label htmlFor="subscribe" className="text-sm font-normal">Подписаться на результаты (доступно в PRO)</Label>
                        </div>
                        <div className="flex gap-2">
                             <Button type="reset" variant="outline">Сбросить</Button>
                             <Button type="submit">Поиск</Button>
                        </div>
                    </div>

                </div>
            </div>
          )}
        </form>

        {(state.results || state.message) && (
          <div className="mt-12">
            <h2 className="section-title">Результаты поиска</h2>
            {state.results && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {state.results.map((tender, index) => (
                    <TenderCard key={index} description={tender} />
                ))}
                </div>
            )}
            {state.message && <p className="text-center">{state.message}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
