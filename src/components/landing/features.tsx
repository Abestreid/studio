import Image from 'next/image';
import { Check } from 'lucide-react';

const featuresList = [
    {
        list: [
            "Поиск внутри PDF / DOC-документов тендера",
            "Сохранённые фильтры и Telegram-бот",
            "REST API для интеграции с CRM / ERP"
        ],
        image: "https://placehold.co/500x350.png",
        alt: "Аналитика",
        hint: "analytics dashboard"
    },
    {
        list: [
            "Метки, статусы и распределение задач",
            "Календарь дедлайнов с экспортом .ics",
            "Обсуждение документов в одном окне"
        ],
        image: "https://placehold.co/500x350.png",
        alt: "Командная работа",
        hint: "team collaboration"
    }
]

export function Features() {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Все инструменты в одном окне</h2>
        <div className="space-y-12 md:space-y-20">
        {featuresList.map((feature, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
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
                    <ul className="space-y-4 list-none p-0">
                    {feature.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-base sm:text-lg">
                            <Check className="w-6 h-6 text-accent mr-3 mt-0.5 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}
