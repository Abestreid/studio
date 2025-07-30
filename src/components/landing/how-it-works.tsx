
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function HowItWorks() {
  return (
    <section className="bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-primary">
          Основные функции
        </h2>
        <Tabs defaultValue="analytics" className="mt-8 max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
            <TabsTrigger value="monitoring">Мониторинг</TabsTrigger>
          </TabsList>
          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-8 items-center pt-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary">Аналитика</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span>Поиск закупки ИИ / OCR, укрупнение тендеров</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span>Сохраненные фильтры и Telegram бот</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span>REST API для интеграции с CRM / ERP</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="https://placehold.co/500x300.png"
                  alt="Аналитика"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md"
                  data-ai-hint="dashboard chart"
                />
              </div>
            </div>
          </TabsContent>
           <TabsContent value="monitoring">
            <div className="grid md:grid-cols-2 gap-8 items-center pt-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary">Мониторинг</h3>
                 <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span>Моментальное отслеживание новых тендеров</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span>Гибкая настройка уведомлений под ваши нужды</span>
                  </li>
                   <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span>Интеграция с вашими любимыми мессенджерами</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="https://placehold.co/500x300.png"
                  alt="Мониторинг"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md"
                  data-ai-hint="notifications feed"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
