
export interface Tender {
    id: string;
    title: string;
    location: string;
    customer: string;
    platform: string;
    published: string;
    deadline: string;
    type: string;
    price: string;
    status: string;
    procurementType?: string;
    industry?: string;
    deadlineDays?: number;
    customerDetails?: {
        name: string;
        unp: string;
        address: string;
        contactPerson: string;
    };
    procurementInfo?: {
        publishedDate: string;
        deadlineDate: string;
        totalValue: string;
        participantRequirements: string;
        documentList: string;
    };
    operator?: {
        name: string;
        address: string;
        unp: string;
        contacts: string;
        site: string;
        siteUrl: string;
    };
    document?: string;
}


export const allTenders: Tender[] = [
    {
        id: "auc0002573978",
        title: "Многофункциональные устройства (МФУ) и принтеры",
        location: "Минск",
        customer: 'Национальный филиал (представительство) Межгосударственной телерадиокомпании "Мир" в Республике Беларусь',
        platform: "goszakupki.by",
        published: "04.06.2025",
        deadline: "08.06.2025",
        type: "Товар",
        price: "24 259.34 BYN",
        status: "Открыт",
        procurementType: "Закупка из одного источника (в электронном виде)",
        industry: "Компьютеры / оборудование > Периферийное оборудование",
        deadlineDays: 4,
        customerDetails: {
            name: 'Национальный филиал (представительство) Межгосударственной телерадиокомпании "Мир" в Республике Беларусь',
            unp: "100824385",
            address: "Республика Беларусь, г. Минск, 220030, г. Минск, ул. Кирова, 17",
            contactPerson: "Поправко Д.И., +375173786096",
        },
        procurementInfo: {
            publishedDate: "04.06.2025",
            deadlineDate: "08.06.2025",
            totalValue: "24 259.34 BYN",
            participantRequirements: "в заявке",
            documentList: "в заявке",
        },
        operator: {
            name: 'РУП "Национальный центр маркетинга и конъюнктуры цен"',
            address: '220030, Республика Беларусь, г. Минск, пл. Свободы, 17-1, каб. 1003',
            unp: '101223447',
            contacts: 'info@goszakupki.by',
            site: 'https://www.goszakupki.by/',
            siteUrl: 'https://goszakupki.by/'
        },
        document: "zayavka-zoi_1749046027.pdf",
    },
    {
        id: "1",
        title: "Поставка офисной мебели для администрации г. Минска",
        location: "Минск",
        customer: "Администрация г. Минска",
        platform: "Госзакупки",
        published: "25.05.2025",
        deadline: "29.05.2025",
        type: "Товар",
        price: "34 500 BYN",
        status: "Открыт",
        procurementType: "Открытый конкурс",
        industry: "Мебель и интерьер",
        deadlineDays: 2,
        customerDetails: {
            name: "Администрация города Минска",
            unp: "100589342",
            address: "Республика Беларусь, г. Минск, 220030, пр-т Независимости, 8",
            contactPerson: "Иванов И.И., +375172223344",
        },
        procurementInfo: {
            publishedDate: "25.05.2025",
            deadlineDate: "29.05.2025",
            totalValue: "34 500 BYN",
            participantRequirements: "Требуется опыт работы не менее 3 лет.",
            documentList: "Полный перечень в конкурсной документации.",
        },
        operator: {
            name: 'РУП "Национальный центр маркетинга и конъюнктуры цен"',
            address: '220030, Республика Беларусь, г. Минск, пл. Свободы, 17-1, каб. 1003',
            unp: '101223447',
            contacts: 'info@goszakupki.by',
            site: 'https://www.goszakupki.by/',
            siteUrl: 'https://goszakupki.by/'
        },
        document: "konkursnaya-dokumentatsiya-mebel.pdf",
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
     {
        id: "4",
        title: "Техническое обслуживание и ремонт принтеров",
        location: "Нур-Султан",
        customer: "Государственное учреждение 'Центр обслуживания населения'",
        platform: "goszakup.gov.kz",
        published: "15.06.2025",
        deadline: "до 25.06 (10 дней)",
        type: "Услуга",
        price: "500 000 KZT",
        status: "Открыт"
    },
];
