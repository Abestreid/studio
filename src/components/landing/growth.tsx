
import { Briefcase, PlusCircle, Clock } from 'lucide-react';

const stats = [
  {
    icon: <Briefcase className="w-10 h-10 text-accent" />,
    value: '15,000+',
    label: 'Активных тендеров в базе прямо сейчас',
  },
  {
    icon: <PlusCircle className="w-10 h-10 text-accent" />,
    value: '250+',
    label: 'Новых ссылок со всей Беларуси добавляется ежедневно',
  },
  {
    icon: <Clock className="w-10 h-10 text-accent" />,
    value: '8 часов',
    label: 'Рабочего времени в неделю в среднем экономят наши клиенты',
  },
];

export function Growth() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center">
          Ваш инструмент для роста в цифрах
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
               <div className="mx-auto bg-primary-foreground/10 rounded-full p-4 w-fit mb-4">
                 {stat.icon}
               </div>
              <p className="text-5xl font-bold">{stat.value}</p>
              <p className="mt-2 text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
