import { Database, Clock, Users, Building } from 'lucide-react';

const stats = [
  {
    icon: <Database className="w-8 h-8 text-accent" />,
    value: '78,643',
    label: 'тендера сегодня',
  },
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    value: '15',
    label: 'лет на рынке',
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    value: '200,000+',
    label: 'пользователей',
  },
  {
    icon: <Building className="w-8 h-8 text-accent" />,
    value: '100+',
    label: 'площадок в базе',
  },
];

export function Growth() {
  return (
    <section className="bg-gradient-to-br from-[#1A2634] to-[#2C3E50] text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-white">
          Наши достижения
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
               <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 {stat.icon}
               </div>
              <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
              <p className="mt-2 text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
