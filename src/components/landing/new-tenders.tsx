import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Badge } from "../ui/badge";
import { Clock, MapPin, Building, Calendar, UserCircle } from "lucide-react";

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

export function NewTenders() {
  return (
    <section id="realtime">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">
          Новые тендеры в реальном времени
        </h2>
        <Carousel 
            opts={{ align: "start", loop: true }} 
            className="w-full"
        >
            <CarouselContent className="-ml-4">
                {tenders.map((tender, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 group">
                        <div className="p-1 h-full">
                            <article className="flex flex-col gap-4 p-4 rounded-lg shadow-sm bg-white hover:shadow-lg transition-all duration-300 border h-full hover:border-accent hover:-translate-y-1 hover:scale-[1.015]">
                                <div className="flex flex-col flex-grow justify-between">
                                    <div>
                                        <h3 className="font-semibold text-primary mb-3 leading-tight group-hover:text-accent transition-colors text-base">{tender.title}</h3>
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground text-xs sm:text-sm mb-4">
                                            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 shrink-0"/>{tender.location}</span>
                                            <span className="flex items-center gap-1.5"><UserCircle className="w-4 h-4 shrink-0"/>{tender.customer}</span>
                                            <span className="flex items-center gap-1.5"><Building className="w-4 h-4 shrink-0"/>{tender.platform}</span>
                                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 shrink-0"/>{tender.published}</span>
                                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 shrink-0"/>{tender.deadline}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 items-center mt-auto">
                                        <Badge variant="secondary">{tender.type}</Badge>
                                        {tender.status && <Badge variant={tender.status === 'Время истекает!' ? 'destructive' : 'default'} className={tender.status !== 'Время истекает!' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : ''}>{tender.status}</Badge>}
                                    </div>
                                </div>
                                <div className="flex flex-col items-start md:items-end justify-between flex-shrink-0 md:ml-3 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-dashed -mx-4 px-4 md:px-0 md:pl-4 md:-my-4">
                                    <div className={`font-bold text-lg text-right w-full mt-auto ${tender.price === '—' ? 'text-muted-foreground' : 'text-accent'}`}>{tender.price}</div>
                                </div>
                            </article>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
