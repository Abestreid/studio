import { TenderCard } from '../tender-card';

const tenders = [
    {
        title: "Поставка офисной мебели для администрации г. Минска",
        location: "Минск",
        customer: "Администрация г. Минска",
        platform: "Госзакупки",
        published: "25.05.2025",
        deadline: "до 29.05 (2 дня)",
        type: "Товар",
        price: "34 500 BYN",
        status: ""
    },
    {
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
     {
        title: "Закупка канцтоваров для школы №12",
        location: "Нур-Султан",
        customer: "Школа №12",
        platform: "Госзакупки",
        published: "30.05.2025",
        deadline: "до 05.06 (6 дней)",
        type: "Товар",
        price: "150 000 KZT",
        status: ""
    },
    {
        title: "Ремонтные работы в офисном здании",
        location: "Гомель",
        customer: "ООО 'СтройМастер'",
        platform: "icetrade.by",
        published: "01.06.2025",
        deadline: "до 15.06 (14 дней)",
        type: "Услуга",
        price: "50 000 BYN",
        status: ""
    }
];

export function NewTenders() {
  return (
    <section id="realtime">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          Новые тендеры в реальном времени
        </h2>
        <div className="mt-8 max-w-4xl mx-auto space-y-4">
            {tenders.slice(0, 3).map((tender, index) => (
                <TenderCard key={index} {...tender} />
            ))}
        </div>
      </div>
    </section>
  );
}
