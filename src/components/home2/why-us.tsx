import { Button } from '@/components/ui/button';
import { CheckCircle2, Award, Clock, Search } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: <Clock className="w-6 h-6 text-accent" />,
    title: 'Экономия времени',
    description: 'Не тратьте часы на ручной поиск – автоматически находите подходящие закупки РК.',
  },
  {
    icon: <Search className="w-6 h-6 text-accent" />,
    title: 'Никаких рисков',
    description: 'Изучайте историю участия в закупках и репутацию контрагентов КЗ.',
  },
  {
    icon: <Award className="w-6 h-6 text-accent" />,
    title: 'Побеждайте чаще',
    description: 'Используйте аналитику и оценивайте шансы на победу.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-accent" />,
    title: 'Будьте первым, кто подаст заявку',
    description: 'Получайте мгновенные уведомления о новых закупках и важных изменениях.',
  },
];

export function WhyUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center max-w-4xl mx-auto">
          Преимущества автоматизации участия в тендерах с «СофтБисервис», которые оценили сотни компаний Казахстана:
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4">
              <div className="flex-shrink-0 text-green-500 mt-1">✅</div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild>
                <Link href="/pricing">Выбрать тариф</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <Link href="#">Запросить бесплатную консультацию</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
