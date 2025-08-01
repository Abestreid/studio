import { Button } from '@/components/ui/button';
import { FileWarning, Clock, BarChart, XCircle } from 'lucide-react';
import Link from 'next/link';

const problems = [
    {
        icon: <Clock className="w-6 h-6 text-destructive" />,
        title: 'Тратите слишком много времени',
        description: 'Ручной мониторинг закупок на разных площадках занимает часы каждый день и отвлекает от важных задач.'
    },
    {
        icon: <XCircle className="w-6 h-6 text-destructive" />,
        title: 'Пропускаете выгодные тендеры',
        description: 'Закупки публикуются на множестве сайтов и вы узнаёте о важных тендерах слишком поздно.'
    },
    {
        icon: <FileWarning className="w-6 h-6 text-destructive" />,
        title: 'Не можете вовремя реагировать на изменения',
        description: 'Если в тендерную документацию были внесены изменения или определены новые сроки подачи заявок, необходимо это отслеживать, в противном случае вы упускаете важные детали.'
    },
    {
        icon: <BarChart className="w-6 h-6 text-destructive" />,
        title: 'Сложно анализировать конкурентов',
        description: 'Нет удобных инструментов для мониторинга тендеров и оценки активности конкурентов, что мешает быстро адаптироваться к изменениям.'
    }
];

export function WhyAutomate() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="section-title">
            Больше не нужно вручную искать тендеры на всех сайтах – наш сервис делает это за вас
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Наша система автоматически собирает информацию о госзакупках в Казахстане, а также о закупках частных предприятий и организаций со всех тендерных площадок РК, мгновенно уведомляет об изменениях и помогает анализировать конкурентов. Вам поможет наш сервис, если вы сталкиваетесь со следующими сложностями при поиске тендеров:
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-5xl mx-auto">
            {problems.map((problem) => (
                <div key={problem.title} className="flex items-start gap-4">
                    <div className="text-amber-500 mt-1">🔸</div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-1">{problem.title}</h3>
                        <p className="text-muted-foreground">{problem.description}</p>
                    </div>
                </div>
            ))}
        </div>
         <div className="text-center mt-12">
            <Button size="lg" asChild>
                <Link href="/">Автоматизировать поиск тендеров</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
