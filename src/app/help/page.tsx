
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
import { LifeBuoy } from 'lucide-react';

const faqItems = [
  {
    question: 'Как начать пользоваться платформой?',
    answer: 'Для начала работы просто зарегистрируйтесь, создав аккаунт. После этого вы получите доступ к поиску тендеров и основным функциям. Для получения полного доступа ко всем инструментам, включая аналитику и неограниченные фильтры, выберите один из наших тарифных планов.',
  },
  {
    question: 'Какие источники тендеров вы используете?',
    answer: 'Мы агрегируем данные с десятков официальных и коммерческих площадок, включая goszakupki.by, icetrade.by, butb.by и многие другие. Наша база постоянно обновляется, чтобы вы получали самую актуальную информацию.',
  },
  {
    question: 'Как работают уведомления?',
    answer: 'Вы можете настроить фильтры по ключевым словам, регионам и отраслям. Как только в системе появится новый тендер, соответствующий вашим критериям, мы немедленно отправим вам уведомление на Email и/или в Telegram, в зависимости от вашего тарифного плана.',
  },
  {
    question: 'Могу ли я работать на платформе вместе с коллегами?',
    answer: 'Да! Тарифные планы "Профи" и "Бизнес" включают возможность командной работы. Вы можете приглашать коллег, распределять задачи, оставлять комментарии и совместно отслеживать статусы тендеров.',
  },
  {
    question: 'Можно ли отменить подписку в любое время?',
    answer: 'Да, вы можете отменить подписку в любой момент в вашем личном кабинете. Доступ к функциям сохранится до конца оплаченного периода. Никаких скрытых платежей или обязательств.',
  },
   {
    question: 'Предоставляете ли вы API для интеграции?',
    answer: 'Да, для клиентов на тарифе "Бизнес" мы предоставляем REST API, которое позволяет интегрировать нашу базу тендеров с вашими внутренними системами, такими как CRM или ERP, для полной автоматизации рабочих процессов.',
  },
];

export default function HelpPage() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <LifeBuoy className="w-16 h-16 mx-auto text-accent mb-4" />
            <h1 className="text-3xl sm:text-4xl font-bold text-primary">Центр помощи</h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Нашли ответ на свой вопрос? Если нет, наша команда поддержки всегда готова помочь.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full bg-card p-4 sm:p-8 rounded-xl shadow-sm border">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline text-base sm:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 text-sm sm:text-base">
                    {item.answer}
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
        buttonText="Связаться с нами"
      />
      <Footer />
    </div>
  );
}
