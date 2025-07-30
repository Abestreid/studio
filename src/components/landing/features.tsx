import Image from 'next/image';

const featuresList = [
    {
        list: [
            "Поиск внутри PDF / DOC-документов тендера",
            "Сохранённые фильтры и Telegram-бот",
            "REST API для интеграции с CRM / ERP"
        ],
        image: "https://placehold.co/500x320.png",
        alt: "Аналитика",
        hint: "analytics dashboard"
    },
    {
        list: [
            "Метки, статусы и распределение задач",
            "Календарь дедлайнов с экспортом .ics",
            "Обсуждение документов в одном окне"
        ],
        image: "https://placehold.co/500x320.png",
        alt: "Командная работа",
        hint: "team collaboration"
    }
]

export function Features() {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Основные функции</h2>
        <div className="space-y-16">
        {featuresList.map((feature, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                    <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={500}
                    height={320}
                    className="rounded-lg shadow-lg"
                    data-ai-hint={feature.hint}
                    />
                </div>
                <div className="md:w-1/2">
                    <ul className="space-y-4 list-none p-0">
                    {feature.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-lg relative pl-6">
                            <span className="text-accent absolute left-0 top-1">◆</span>
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
