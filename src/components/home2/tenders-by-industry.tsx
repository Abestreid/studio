import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Truck, ShieldCheck, PenTool, HardHat, Wrench } from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    icon: <HardHat className="w-8 h-8 text-accent" />,
    title: 'Строительство и ремонт',
    description: 'Проекты жилых, коммерческих и промышленных объектов.',
  },
  {
    icon: <Wrench className="w-8 h-8 text-accent" />,
    title: 'Изготовление металлоконструкций',
    description: 'Заказы на производство и поставку металлоизделий.',
  },
  {
    icon: <PenTool className="w-8 h-8 text-accent" />,
    title: 'Проектирование зданий и сооружений',
    description: 'Создание архитектурных и инженерных решений.',
  },
  {
    icon: <Building className="w-8 h-8 text-accent" />,
    title: 'Выполнение работ',
    description: 'Строительство, монтаж, инженерные работы.',
  },
  {
    icon: <Truck className="w-8 h-8 text-accent" />,
    title: 'Грузоперевозки',
    description: 'Логистика, транспортные услуги, контейнерные перевозки.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: 'Охрана объектов',
    description: 'Обеспечение безопасности коммерческих и госучреждений.',
  },
];

export function TendersByIndustry() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">
            Оперативно находите тендеры в вашей сфере
          </h2>
          <p className="mt-4 text-muted-foreground">
            На платформе вы легко подберёте актуальные тендеры в интересующей вас отрасли. В нашу систему ежедневно добавляются сотни предложений от государственных и коммерческих заказчиков. Выбирайте подходящие категории и находите выгодные заказы.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Card key={industry.title} className="text-center p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{industry.title}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/">Поиск по отраслям</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
