
'use client';

import { useActionState, useEffect, useState, useId, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, SlidersHorizontal, Trash2, X } from 'lucide-react';
import { TenderCard } from '../tender-card';
import { searchTenders, type SearchState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { content } from '@/lib/content';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { OkrbTree } from '../okrb-tree';


const initialState: SearchState = {};

const tenderSources = [
    "goszakupki.by", "icetrade.by", "butb.by", "a-100development.by", 
    "becloud.by", "vitoperator.by", "zakupki.minsktrans.by", "polymir.by", 
    "mgcn.by", "naftan.by"
];

export function Hero() {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState(searchTenders, initialState);
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState('tendersoft');

  const [selectedOkrb, setSelectedOkrb] = useState<string[]>([]);
  const [isOkrbTreeVisible, setIsOkrbTreeVisible] = useState(false);
  const okrbWrapperRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleStorageChange = () => {
      const currentTheme = localStorage.getItem('theme') || 'tendersoft';
      setTheme(currentTheme);
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };
    
    handleStorageChange();
    window.addEventListener('storage', handleStorageChange);

    const handleClickOutside = (event: MouseEvent) => {
      if (okrbWrapperRef.current && !okrbWrapperRef.current.contains(event.target as Node)) {
        setIsOkrbTreeVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        window.removeEventListener('storage', handleStorageChange);
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  useEffect(() => {
    if (state.error) {
      toast({
        title: 'Ошибка поиска',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);
  
  const handleFormAction = (formData: FormData) => {
    if (formData.get('query')) {
      setHasSearched(true);
    } else {
      setHasSearched(false);
    }
    formAction(formData);
  }

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value === '') {
      setHasSearched(false);
      (formAction as any)();
    }
  }
  
  const handleRemoveOkrb = (codeToRemove: string) => {
    setSelectedOkrb(prev => prev.filter(code => code !== codeToRemove));
  };

  const handleClearOkrb = () => {
      setSelectedOkrb([]);
  }

  const hasResults = hasSearched && state.results && state.results.length > 0;
  const noResultsMessage = hasSearched && state.message;
  
  const heroContent = content[theme as keyof typeof content].hero;

  const heroTitle = isLoggedIn ? "Добро пожаловать, user01!" : heroContent.title;
  const heroSubtitle = isLoggedIn ? "Найдите свой следующий контракт или просмотрите сохраненные фильтры." : heroContent.subtitle;
  
  const heroBackgroundClass = (theme === 'rednet' || theme === 'rednet2') 
    ? "bg-gradient-to-r from-primary-darken-1 to-primary"
    : "bg-gradient-to-r from-primary-darken-1 to-primary";


  return (
    <section className={cn("pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20", heroBackgroundClass)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {heroTitle}
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg md:mt-6 md:text-xl max-w-3xl mx-auto">
            {heroSubtitle}
          </p>
        </div>

        <form ref={formRef} action={handleFormAction} className="mt-8 max-w-4xl mx-auto md:mt-12 p-4 sm:p-6 bg-card backdrop-blur-sm rounded-lg shadow-2xl border">
          <Collapsible open={showAdvancedSearch} onOpenChange={setShowAdvancedSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="md:col-span-2">
                <Input id={`${formId}-query`} name="query" placeholder="Что ищем? место поставки, закупки, тендер" className="bg-background h-12" onChange={handleQueryChange}/>
              </div>

              <div className="md:col-span-2">
                 <Select name="region">
                    <SelectTrigger id={`${formId}-region`} className="bg-background h-12">
                    <SelectValue placeholder="Место поставки" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Все регионы">Все регионы</SelectItem>
                        <SelectItem value="by">Беларусь</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              <CollapsibleContent asChild className="md:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                       <div className="md:col-span-2">
                          <Input id={`${formId}-tender_unp`} name="tender_unp" placeholder="Введите номер УНП" className="bg-background h-12"/>
                      </div>
                      <div className="md:col-span-2">
                          <Input id={`${formId}-tender_id`} name="tender_id" placeholder="Введите номер закупки" className="bg-background h-12"/>
                      </div>
                       <div className="md:col-span-2 space-y-2" ref={okrbWrapperRef}>
                            <div className="relative">
                                <Input 
                                    id={`${formId}-okrb_code`} 
                                    name="okrb_code" 
                                    placeholder="Введите код или название позиции ОКРБ" 
                                    className="bg-background h-12 pr-10"
                                    onFocus={() => setIsOkrbTreeVisible(true)}
                                    value={selectedOkrb.join(', ')}
                                    readOnly
                                />
                                {selectedOkrb.length > 0 && (
                                    <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8" onClick={handleClearOkrb}>
                                        <Trash2 className="w-4 h-4 text-destructive"/>
                                    </Button>
                                )}
                            </div>
                             {selectedOkrb.length > 0 && (
                                <div className="p-2 border rounded-lg bg-secondary/30 flex flex-wrap gap-2">
                                    {selectedOkrb.map(code => (
                                        <Badge key={code} variant="secondary" className="pl-2 pr-1 rounded-md">
                                            {code}
                                            <button onClick={() => handleRemoveOkrb(code)} className="ml-1.5 rounded-full hover:bg-muted-foreground/20 p-0.5">
                                                <X className="w-3 h-3"/>
                                            </button>
                                        </Badge>
                                    ))}
                                </div>
                            )}
                            {isOkrbTreeVisible && (
                                <div className="border rounded-lg shadow-lg bg-white p-2 absolute z-10 w-[calc(100%-3rem)] max-w-4xl">
                                    <OkrbTree selectedIds={selectedOkrb} onSelectionChange={setSelectedOkrb}/>
                                </div>
                            )}
                      </div>
                      <div className="md:col-span-2">
                          <Input id={`${formId}-subject`} name="subject" placeholder="Введите наименование предмета закупки" className="bg-background h-12"/>
                          <div className="flex items-center gap-4 mt-2 justify-center">
                            <RadioGroup defaultValue="search_in_name" name="subject_match_type" className="flex">
                                  <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="exact" id={`${formId}-exact`} />
                                      <Label htmlFor={`${formId}-exact`} className="text-sm font-normal">Точное соответствие</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="search_in_name" id={`${formId}-search_in_name`} />
                                      <Label htmlFor={`${formId}-search_in_name`} className="text-sm font-normal">Искать и в названии закупки</Label>
                                  </div>
                              </RadioGroup>
                          </div>
                      </div>
                      <div className="md:col-span-2">
                          <Input id={`${formId}-exclude_words`} name="exclude_words" placeholder="Укажите слова исключения" className="bg-background h-12"/>
                      </div>
                      <div>
                        <Label htmlFor={`${formId}-price_from`}>Предельная стоимость от</Label>
                        <Input id={`${formId}-price_from`} name="price_from" type="number" className="bg-background h-12" />
                      </div>
                      <div>
                        <Label htmlFor={`${formId}-price_to`}>Предельная стоимость до</Label>
                        <Input id={`${formId}-price_to`} name="price_to" type="number" className="bg-background h-12"/>
                      </div>
                      <div>
                        <Label htmlFor={`${formId}-date_pub_from`}>Дата размещения с</Label>
                        <Input id={`${formId}-date_pub_from`} name="date_pub_from" type="date" className="bg-background h-12 text-muted-foreground"/>
                      </div>
                      <div>
                        <Label htmlFor={`${formId}-date_pub_to`}>Дата размещения до</Label>
                        <Input id={`${formId}-date_pub_to`} name="date_pub_to" type="date" className="bg-background h-12 text-muted-foreground"/>
                      </div>
                      <div>
                        <Label htmlFor={`${formId}-date_end_from`}>Дата оконания приема предлоджиний с</Label>
                        <Input id={`${formId}-date_end_from`} name="date_end_from" type="date" className="bg-background h-12 text-muted-foreground"/>
                      </div>
                      <div>
                        <Label htmlFor={`${formId}-date_end_to`}>Дата оконания приема предлоджиний до</Label>
                        <Input id={`${formId}-date_end_to`} name="date_end_to" type="date" className="bg-background h-12 text-muted-foreground"/>
                      </div>
                       <div>
                        <Label htmlFor={`${formId}-delivery_from`}>Срок поставки от</Label>
                        <Input id={`${formId}-delivery_from`} name="delivery_from" type="date" className="bg-background h-12 text-muted-foreground"/>
                      </div>
                      <div>
                        <Label htmlFor={`${formId}-delivery_to`}>Срок поставки до</Label>
                        <Input id={`${formId}-delivery_to`} name="delivery_to" type="date" className="bg-background h-12 text-muted-foreground"/>
                      </div>
                      <div className="md:col-span-2 space-y-3 mt-4">
                          <RadioGroup defaultValue="all" name="funding_type" className="flex items-center gap-4 justify-center">
                              <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="own" id={`${formId}-own`} />
                                  <Label htmlFor={`${formId}-own`} className="text-sm font-normal">Собственные средства</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="gov" id={`${formId}-gov`} />
                                  <Label htmlFor={`${formId}-gov`} className="text-sm font-normal">Государственные закупки</Label>
                              </div>
                          </RadioGroup>
                           <div className="space-y-2">
                                <Label className="text-sm font-medium text-center block">Выберите площадки</Label>
                                <div className="chip-group justify-center">
                                    {tenderSources.map(source => (
                                        <div key={source}>
                                            <input type="checkbox" id={`${formId}-${source}`} name="source" value={source} className="form-check-input"/>
                                            <label htmlFor={`${formId}-${source}`} className="form-check-label">
                                                {source}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                      </div>
                  </div>
              </CollapsibleContent>

              <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                 <Button type="submit" size="lg" className="w-full sm:w-auto h-12 text-base flex-grow" disabled={isPending}>
                  <Search className="mr-2" />
                  {isPending ? 'Поиск...' : heroContent.cta}
                </Button>
                <CollapsibleTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="shrink-0 w-12 h-12 border-primary text-primary hover:bg-primary/20"
                    aria-label="Настройки"
                  >
                    <SlidersHorizontal className="text-xl" />
                  </Button>
                </CollapsibleTrigger>
              </div>
            </div>
            {!isLoggedIn && (
                <p className="text-center text-xs text-muted-foreground mt-6">
                Зарегистрируйтесь за 1 минуту и получите полный доступ на 7 дней бесплатно.
                </p>
            )}
          </Collapsible>
        </form>

        <div className="mt-12 max-w-4xl mx-auto min-h-[200px]">
            {isPending && (
                 <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="p-4 rounded-lg shadow-sm bg-white border border-gray-200 animate-pulse">
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 text-xs sm:text-sm mb-3">
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {hasResults && (
                 <div className="space-y-4">
                     {state.results.map((tender) => (
                        <TenderCard key={tender.id} {...tender} />
                     ))}
                 </div>
            )}
             {noResultsMessage && <p className="text-center text-white bg-black/20 p-4 rounded-lg">{state.message}</p>}
        </div>

      </div>
    </section>
  );
}
