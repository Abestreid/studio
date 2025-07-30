
'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const featuresList = [
  {
    title: "Аналитика и автоматизация",
    list: [
      'Поиск внутри PDF / DOC-документов тендера',
      'Сохранённые фильтры и Telegram-бот',
      'REST API для интеграции с CRM / ERP',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzUzODY0NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Аналитика',
    hint: 'analytics dashboard'
  },
  {
    title: "Командная работа",
    list: [
      'Метки, статусы и распределение задач',
      'Календарь дедлайнов с экспортом .ics',
      'Обсуждение документов в одном окне',
    ],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTM4NjQ1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Командная работа',
    hint: 'team collaboration'
  },
  {
    title: "Мобильный доступ",
    list: [
      'Полный доступ с любого устройства',
      'Адаптивный интерфейс для смартфонов',
      'Push-уведомления о важных событиях',
    ],
    image: 'https://images.unsplash.com/photo-1663661746125-9189b2f8ed81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhY2Nlc3N8ZW58MHx8fHwxNzUzODY0NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Мобильный доступ',
    hint: 'mobile access'
  },
];

export function Features() {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Все инструменты в одном окне</h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full mt-12"
        >
          <CarouselContent>
            {featuresList.map((feature, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
                  <div className="md:w-1/2 lg:w-5/12">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={500}
                      height={350}
                      className="rounded-xl shadow-lg object-cover w-full h-auto"
                      data-ai-hint={feature.hint}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                    <ul className="space-y-4 list-none p-0">
                      {feature.list.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-base sm:text-lg"
                        >
                          <Check className="w-6 h-6 text-accent mr-3 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
