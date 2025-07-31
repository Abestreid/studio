
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Cta } from '@/components/landing/cta';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { LifeBuoy, Book, BarChart3, Video, HelpCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const faqItems = [
  {
    value: 'terms',
    question: 'Термины и определения',
    answer: 'Здесь будет подробный глоссарий со всеми терминами, используемыми в системе: тендер, закупка, лот, электронный аукцион, запрос предложений и т.д.',
    category: 'Термины',
  },
  {
    value: 'functionality',
    question: 'Описание функционала сервиса',
    answer: 'Подробное описание каждого модуля и функции: как работает поиск, как настраивать фильтры, как пользоваться аналитикой, как управлять уведомлениями и командной работой.',
     category: 'Функции сервиса',
  },
  {
    value: 'videos',
    question: 'Видеоруководства',
    answer: 'Раздел со встроенными видеоуроками. Каждый ролик демонстрирует основной сценарий работы: от регистрации и настройки первого фильтра до выгрузки аналитического отчета и совместной работы над тендером.',
     category: 'Видео-руководства',
  },
  {
    value: 'analytics',
    question: 'Раздел «Аналитика»',
    answer: 'Модуль "Аналитика" — это ваш центр управления для глубокого анализа рынка закупок. Он позволяет отслеживать динамику по отраслям, регионам и заказчикам, анализировать активность конкурентов и выявлять тренды. Используйте более 12 гибких фильтров для построения кастомных отчетов. Результаты можно выгружать в Excel или просматривать в виде интерактивных графиков и диаграмм.',
    video: true,
     category: 'Функции сервиса',
  },
  {
    value: 'access-speed',
    question: 'Как быстро я смогу получить доступ к тендерам на металлоизделия в Казахстане?',
    answer: 'После регистрации сервис станет доступен в течение нескольких минут.',
     category: 'Вопросы и ответы',
  },
  {
    value: 'trial-access',
    question: 'Есть ли пробный доступ?',
    answer: 'Да, можно бесплатно протестировать сервис в течение 48 часов.',
     category: 'Вопросы и ответы',
  },
  {
    value: 'custom-search',
    question: 'Можно ли настроить поиск тендеров на производство металлических изделий по индивидуальным параметрам?',
    answer: 'Да, наш сервис позволяет фильтровать закупки по бюджету, региону, типу металлоконструкций и другим параметрам.',
     category: 'Вопросы и ответы',
  },
  {
    value: 'participation-help',
    question: 'Помогаете ли вы участвовать в тендерах?',
    answer: 'Мы предоставляем инструмент для поиска тендеров, но не оказываем услуги по подаче заявок.',
     category: 'Вопросы и ответы',
  },
  {
    value: 'requirements-kz',
    question: 'Что нужно, для участи в тендерах на металлоконструкции в Республике Казахстан?',
    answer: 'Каждый тендер имеет свои требования, включая квалификацию подрядчика, наличие сертифицированного оборудования и подтвержденный опыт производства. Чтобы успешно участвовать, необходимо заранее подготовить пакет документов и предложить конкурентные условия. Для быстрого поиска актуальных лотов закупок воспользуйтесь сервисом от ТОО «СофтБисервис».',
     category: 'Вопросы и ответы',
  },
];

const categories = ['Термины', 'Функции сервиса', 'Видео-руководства', 'Вопросы и ответы'];

export default function HelpPage() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Book className="w-16 h-16 mx-auto text-accent mb-4" />
            <h1 id="knowledge-base" className="text-3xl sm:text-4xl font-bold text-primary scroll-mt-20">База знаний о госзакупках и тендерных продажах</h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Вся необходимая информация для успешной работы с сервисом.
            </p>
             <div className="relative mt-8 max-w-lg mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input placeholder="Поиск по ключевым словам..." className="pl-10 h-12"/>
            </div>
          </div>
           
          <div className="flex justify-center gap-4 my-8">
            {categories.map(cat => <button key={cat} className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white shadow-sm hover:bg-accent hover:text-white">{cat}</button>)}
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible defaultValue="analytics" className="w-full bg-card p-4 sm:p-8 rounded-xl shadow-sm border">
              {faqItems.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger id={item.value} className="text-left font-semibold text-primary hover:no-underline text-base sm:text-lg scroll-mt-20">
                    <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-accent"/>
                        {item.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 text-sm sm:text-base">
                    <p>{item.answer}</p>
                    {item.video && (
                      <div className="mt-4">
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                            <div className="text-center text-gray-500">
                                <Video className="w-12 h-12 mx-auto mb-2"/>
                                <p>Короткое обучающее видео</p>
                            </div>
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Cta
        title="Не нашли ответа?"
        description="Наша служба поддержки всегда на связи, чтобы помочь вам с любыми вопросами."
        buttonText="Задать вопрос эксперту"
      />
      <Footer />
    </div>
  );
}
