import { TenderCard } from '../tender-card';

const tenders = [
    {
        id: "1",
        title: "Поставка офисной мебели для администрации г. Минска",
        location: "Минск",
        customer: "Администрация г. Минска",
        platform: "Госзакупки",
        published: "25.05.2025",
        deadline: "до 29.05 (2 дня)",
        type: "Товар",
        price: "34 500 BYN",
        status: "Открыт"
    },
    {
        id: "2",
        title: "Уведомление о проведении КП по замене компенсатора К-4; К-5 на трубопроводе сетевой воды ТЭС",
        location: "Мангистауская обл.",
        customer: "Филиал ВМУ",
        platform: "Коммерческие",
        published: "29.05.2025",
        deadline: "до 10.06 (11 дней)",
        type: "Работа",
        price: "—",
        status: "Предварительное обсуждение"
    },
    {
        id: "3",
        title: "Поставка стульев",
        location: "Алматы",
        customer: "Заказчик скрыт",
        platform: "Малая закупка",
        published: "29.05.2025",
        deadline: "до 30.05 (<24ч)",
        type: "Товар",
        price: "30 310 KZT",
        status: "Время истекает!"
    },
];

export function NewTenders() {
  return (
    <section id="realtime">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          Новые тендеры в реальном времени
        </h2>
        <div className="mt-8 max-w-4xl mx-auto space-y-4">
            {tenders.map((tender, index) => (
                <TenderCard key={index} {...tender} id={tender.id || `${index}`} />
            ))}
        </div>
      </div>
    </section>
  );
}
