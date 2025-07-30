'use client';

import { useActionState, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, SlidersHorizontal } from 'lucide-react';
import { TenderCard } from '../tender-card';
import { searchTenders, type SearchState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

const initialState: SearchState = {};

const tenderSources = ["goszakupki.by", "icetrade.by", "butb.by"];

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
    <section className="bg-gradient-to-br from-primary via-teal-800 to-accent pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Все тендеры Беларуси — в одном простом окне
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg md:mt-6 md:text-xl max-w-3xl mx-auto">
            Перестаньте тратить часы на поиски. Находите выгодные заказы за 3 клика и получайте уведомления о новых — прямо в Telegram.
          </p>
        </div>

        <form action={formAction} className="mt-8 max-w-4xl mx-auto md:mt-12 p-4 sm:p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border">
          <Collapsible open={showAdvancedSearch} onOpenChange={setShowAdvancedSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="md:col-span-2">
                <Input id="query" name="query" placeholder="Что ищем? место поставки, закупки, тендер" className="bg-white h-12 rounded-full"/>
              </div>

              <div className='md:col-span-2'>
                <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 transition-all duration-300", !showAdvancedSearch && 'grid-rows-[1fr_0]')} >
                  <div className='overflow-hidden'>
                     <Select name="region">
                       <SelectTrigger id="region" className="bg-white h-12 rounded-full">
                          <SelectValue placeholder="Место поставки" />
                       </SelectTrigger>
                       <SelectContent>
                          <SelectItem value="by">Беларусь</SelectItem>
                          <SelectItem value="kz">Казахстан</SelectItem>
                       </SelectContent>
                    </Select>
                  </div>

                  <CollapsibleContent asChild className="md:col-span-2">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        <div>
                            <Input id="tender_id" name="tender_id" placeholder="Введите номер закупки" className="bg-white h-12 rounded-md"/>
                        </div>
                        <div className="relative">
                            <Input id="okrb_code" name="okrb_code" placeholder="Введите код или название позиции ОКРБ" className="bg-white h-12 pr-36 rounded-md"/>
                            <Button type="button" variant="link" className="absolute right-2 top-1/2 -translate-y-1/2 h-auto text-sm">Открыть справочник</Button>
                        </div>
                        <div className="md:col-span-2">
                            <Input id="subject" name="subject" placeholder="Введите наименование предмета закупки" className="bg-white h-12 rounded-md"/>
                            <div className="flex items-center gap-4 mt-2">
                              <RadioGroup defaultValue="search_in_name" className="flex">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="exact" id="exact" />
                                        <Label htmlFor="exact" className="text-sm font-normal">Точное соответствие</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="search_in_name" id="search_in_name" />
                                        <Label htmlFor="search_in_name" className="text-sm font-normal">Искать и в названии закупки</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <Input id="exclude_words" name="exclude_words" placeholder="Укажите слова исключения" className="bg-white h-12 rounded-md"/>
                        </div>
                        <div>
                            <Input id="price_from" name="price_from" type="number" placeholder="Предельная стоимость от" className="mt-1 bg-white h-12 rounded-md" />
                        </div>
                        <div>
                            <Input id="price_to" name="price_to" type="number" placeholder="Предельная стоимость до" className="mt-1 bg-white h-12 rounded-md"/>
                        </div>
                        <div>
                            <Input id="date_pub_from" name="date_pub_from" type="date" placeholder="Дата размещения с" className="mt-1 bg-white h-12 text-muted-foreground rounded-md"/>
                        </div>
                        <div>
                            <Input id="date_pub_to" name="date_pub_to" type="date" placeholder="Дата размещения до" className="mt-1 bg-white h-12 text-muted-foreground rounded-md"/>
                        </div>
                        <div>
                            <Input id="date_end_from" name="date_end_from" type="date" placeholder="Дата окончания приема предлоджиний с" className="mt-1 bg-white h-12 text-muted-foreground rounded-md"/>
                        </div>
                        <div>
                            <Input id="date_end_to" name="date_end_to" type="date" placeholder="Дата окончания приема предлоджиний до" className="mt-1 bg-white h-12 text-muted-foreground rounded-md"/>
                        </div>
                        <div>
                            <Input id="delivery_from" name="delivery_from" type="date" placeholder="Срок поставки от" className="mt-1 bg-white h-12 text-muted-foreground rounded-md"/>
                        </div>
                        <div>
                            <Input id="delivery_to" name="delivery_to" type="date" placeholder="Срок поставки до" className="mt-1 bg-white h-12 text-muted-foreground rounded-md"/>
                        </div>
                        <div className="md:col-span-2 space-y-3">
                            <RadioGroup defaultValue="all" className="flex items-center gap-4">
                                <Label className="text-sm font-medium">Тип закупки:</Label>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="own" id="own" />
                                    <Label htmlFor="own" className="text-sm font-normal">Собственные средства</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="gov" id="gov" />
                                    <Label htmlFor="gov" className="text-sm font-normal">Государственные закупки</Label>
                                </div>
                            </RadioGroup>
                            <div className="chip-group-sm">
                                <span className="text-sm font-medium mr-2">Местонахождение заказчика:</span>
                                {tenderSources.map(source => (
                                    <label key={source}>
                                        <input type="checkbox" name="source" value={source} className="form-check-input" />
                                        <span className="form-check-label">{source}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                <Button type="submit" size="lg" className="w-full sm:w-auto h-12 text-base rounded-full flex-grow">
                  <Search className="mr-2" />
                  Поиск
                </Button>
                <CollapsibleTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="rounded-full shrink-0 w-12 h-12 border-accent text-accent hover:bg-accent/20"
                    aria-label="Настройки"
                  >
                    <SlidersHorizontal className="text-xl" />
                  </Button>
                </CollapsibleTrigger>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-6">
              Зарегистрируйтесь за 1 минуту и получите полный доступ на 7 дней бесплатно.
            </p>
          </Collapsible>
        </form>


        {(state.results || state.message) && (
          <div className="mt-12">
            <h2 className="section-title text-white">Результаты поиска</h2>
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
