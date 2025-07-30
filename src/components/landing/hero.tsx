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
import { Info, SlidersHorizontal, Search } from 'lucide-react';
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
    <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-primary tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Все тендеры Беларуси и&nbsp;Казахстана — в одном месте
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg md:mt-6 md:text-xl max-w-3xl mx-auto">
            Поиск, мониторинг, аналитика и командная работа — экономьте время и выигрывайте больше.
          </p>
        </div>

        <form action={formAction} className="mt-8 max-w-4xl mx-auto md:mt-12">
          <div className="flex flex-col sm:flex-row items-center gap-2 p-2 rounded-full bg-white shadow-lg">
            <div className="flex-grow w-full flex items-center">
              <Search className="ml-4 mr-2 text-muted-foreground text-xl hidden sm:block" />
              <Input
                name="query"
                type="text"
                placeholder="Что ищем? Например: закупка мебели"
                className="w-full border-none focus-visible:ring-0 text-base h-12 shadow-none bg-transparent"
              />
            </div>
            <div className="w-full sm:w-auto flex items-center gap-2">
                <Select name="region">
                    <SelectTrigger className="w-full sm:w-[180px] border-none focus:ring-0 bg-transparent shadow-none pr-8 h-12 text-muted-foreground">
                        <SelectValue placeholder="Место поставки" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="by">Беларусь</SelectItem>
                        <SelectItem value="kz">Казахстан</SelectItem>
                    </SelectContent>
                </Select>
                <div className='hidden sm:block h-6 border-l border-border'></div>
                <Button type="submit" size="lg" className="rounded-full h-10 px-6 text-base w-full sm:w-auto">
                    <Search className="sm:mr-2" />
                    <span className="hidden sm:inline">Поиск</span>
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="rounded-full shrink-0"
                    onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                    aria-expanded={showAdvancedSearch}
                    >
                    <SlidersHorizontal className="text-xl" />
                </Button>
            </div>
          </div>

          {showAdvancedSearch && (
            <div className="mt-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md animate-accordion-down border">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
                    <div className="md:col-span-2">
                        <Label htmlFor="q_adv" className="text-sm font-medium">Ключевые слова</Label>
                        <Input id="q_adv" name="q_adv" placeholder="лыжи, 36.40.11.133 …" className="mt-1 bg-white"/>
                        <div className="flex items-center gap-2 mt-2">
                            <Checkbox id="exact" />
                            <Label htmlFor="exact" className="text-sm font-normal">Точное соответствие</Label>
                        </div>
                    </div>
                     <div className="md:col-span-2">
                        <Label htmlFor="exclude" className="text-sm font-medium flex items-center gap-1">
                            Исключить слова
                            <Info className="w-4 h-4 text-muted-foreground" />
                        </Label>
                        <Input id="exclude" name="exclude" className="mt-1 bg-white"/>
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
                             <SelectTrigger id="regions" className="mt-1 bg-white">
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
                         <Input id="price_from" name="price_from" type="number" className="mt-1 bg-white" />
                    </div>
                     <div>
                         <Label htmlFor="price_to" className="text-sm font-medium">Цена до</Label>
                         <Input id="price_to" name="price_to" type="number" className="mt-1 bg-white"/>
                    </div>
                    <div>
                         <Label htmlFor="date_pub_from" className="text-sm font-medium">Публикация от</Label>
                         <Input id="date_pub_from" name="date_pub_from" type="date" className="mt-1 bg-white"/>
                    </div>
                     <div>
                         <Label htmlFor="date_pub_to" className="text-sm font-medium">до</Label>
                         <Input id="date_pub_to" name="date_pub_to" type="date" className="mt-1 bg-white"/>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                        <div className="flex items-center gap-2 self-start sm:self-center">
                             <Checkbox id="subscribe" />
                             <Label htmlFor="subscribe" className="text-sm font-normal">Подписаться на результаты (PRO)</Label>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                             <Button type="reset" variant="outline" className="flex-1 sm:flex-none">Сбросить</Button>
                             <Button type="submit" className="flex-1 sm:flex-none">Поиск</Button>
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
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {state.results.map((tender, index) => (
                    <TenderCard key={index} description={tender} />
                ))}
                </div>
            )}
            {state.message && <p className="text-center text-muted-foreground">{state.message}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
