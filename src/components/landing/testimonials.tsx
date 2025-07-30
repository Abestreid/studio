import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

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
        title: "Уведомление о проведении КП по замене компенсатора К-4; К-5",
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
]

export function Testimonials() {
  return (
    <section id="realtime">
      <div className="container mx-auto px-4 md:px-6 relative">
        <h2 className="section-title">
          Новые тендеры
        </h2>
        <Carousel opts={{
            align: "start",
            loop: true,
        }}>
            <CarouselContent className="-ml-4">
                {tenders.map((tender, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 group">
                        <div className="p-1 h-full">
                            <article className="flex flex-col md:flex-row gap-4 p-4 rounded-lg shadow-sm bg-white hover:shadow-lg transition-all duration-300 border h-full hover:border-accent hover:-translate-y-1 hover:scale-[1.015]">
                                <div className="flex flex-col flex-grow justify-between">
                                    <h3 className="font-semibold text-primary mb-2 leading-tight group-hover:text-accent transition-colors">{tender.title}</h3>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground text-sm mb-3">
                                        <span className="flex items-center gap-1.5"><i className="ph ph-map-pin"></i>{tender.location}</span>
                                        <span className="flex items-center gap-1.5"><i className="ph ph-user-circle"></i>{tender.customer}</span>
                                        <span className="flex items-center gap-1.5"><i className="ph ph-building"></i>{tender.platform}</span>
                                        <span className="flex items-center gap-1.5"><i className="ph ph-calendar"></i>{tender.published}</span>
                                        <span className="flex items-center gap-1.5"><i className="ph ph-clock"></i>{tender.deadline}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 items-center mt-auto">
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tender.type}</span>
                                        {tender.status && <span className={`px-3 py-1 text-xs font-medium rounded-full ${tender.status === 'Время истекает!' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>{tender.status}</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col items-start md:items-end justify-between flex-shrink-0 md:ml-3">
                                    <div className={`font-bold text-lg mb-2 ${tender.price === '—' ? 'text-muted-foreground' : 'text-accent'}`}>{tender.price}</div>
                                </div>
                            </article>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
