
import { Bot, Filter, DatabaseZap, UserPlus, SlidersHorizontal, Bell, Search, BarChart, Users, Clock, Building, Briefcase, BarChart3, BellRing, Target, Scale, ShieldCheck, HelpCircle } from 'lucide-react';
import React from 'react';

export const content = {
    tendersoft: {
        header: {
            brandName: 'Tendersoft',
            navLinks: [
                { href: '/', label: 'Тендеры Казахстана' },
                { href: '/analytics', label: 'Аналитика' },
                { href: '/favorites', label: 'Избранное' },
                { href: '/pricing', label: 'Тарифы' },
                { href: '/blog', label: 'Блог' },
                { href: '/help', label: 'Помощь' },
            ]
        },
        hero: {
            title: 'Все тендеры Казахстана на одной платформе',
            subtitle: 'Автоматический сбор закупок с 100+ площадок, персональные фильтры и аналитика шансов на победу.',
            cta: 'Попробовать бесплатно',
            secondaryCta: 'Запросить демо'
        },
        howItWorks: {
            title: 'Почему компании выбирают Tendersoft',
            items: [
                {
                    icon: React.createElement(Search, { className: "w-8 h-8" }),
                    title: 'Экономия времени',
                    description: 'Поиск и отсев лотов занимают минуты, а не часы.',
                },
                {
                    icon: React.createElement(DatabaseZap, { className: "w-8 h-8" }),
                    title: 'Полная картина рынка',
                    description: 'Государственные, квазигосударственные и частные закупки.',
                },
                {
                    icon: React.createElement(Bell, { className: "w-8 h-8" }),
                    title: 'Мгновенные уведомления',
                    description: 'Изменения в документации приходят сразу.',
                },
                {
                    icon: React.createElement(BarChart, { className: "w-8 h-8" }),
                    title: 'Глубокая аналитика',
                    description: 'Динамика конкурентов, прогнозирование цены победы.',
                },
            ]
        },
        features: {
            title: 'Все необходимые модули',
            items: [
                {
                    title: "Детальный поиск по 30+ параметрам",
                    list: [
                      'Поиск внутри PDF / DOC-документов тендера',
                      'Сохранённые фильтры и история запросов',
                      'Уведомления на Email и в Telegram-бот',
                    ],
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzUzODY0NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
                    alt: 'Аналитика',
                    hint: 'analytics dashboard'
                },
                {
                    title: "Командная работа и интеграция",
                    list: [
                      'Командный доступ и настройки прав',
                      'REST API для интеграции с CRM / ERP',
                      'Проверка контрагентов по официальным базам',
                    ],
                    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTM4NjQ1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                    alt: 'Командная работа',
                    hint: 'team collaboration'
                },
            ]
        },
        growth: {
            title: 'Наши достижения в цифрах',
            items: [
                { icon: React.createElement(Building, { className: "w-8 h-8 text-accent" }), value: '100+', label: 'площадок в базе' },
                { icon: React.createElement(Clock, { className: "w-8 h-8 text-accent" }), value: '6', label: 'лет на рынке' },
                { icon: React.createElement(Users, { className: "w-8 h-8 text-accent" }), value: '25,000+', label: 'активных пользователей' },
                { icon: React.createElement(DatabaseZap, { className: "w-8 h-8 text-accent" }), value: '450 млрд ₸', label: 'актуальных лотов' },
            ]
        },
        benefits: {
            title: 'Пять причин работать с нами',
            main: [
                { icon: React.createElement(Filter, { className: "w-8 h-8 text-accent" }), title: 'Экономия времени', description: 'Поиск и отсев лотов занимают минуты, а не часы.' },
                { icon: React.createElement(DatabaseZap, { className: "w-8 h-8 text-accent" }), title: 'Полная картина рынка', description: 'Государственные, квазигосударственные и частные закупки.' },
                { icon: React.createElement(Bell, { className: "w-8 h-8 text-accent" }), title: 'Мгновенные уведомления', description: 'Изменения в документации приходят сразу.' },
            ],
            steps: {
                title: 'Как это работает',
                items: [
                    { icon: React.createElement(UserPlus, { className: "w-8 h-8 text-accent" }), title: 'Регистрация', description: 'Регистрируйтесь и настраиваете фильтры.' },
                    { icon: React.createElement(Search, { className: "w-8 h-8 text-accent" }), title: 'Анализ', description: 'Получаете релевантные тендеры и аналитику.' },
                    { icon: React.createElement(Bell, { className: "w-8 h-8 text-accent" }), title: 'Участие', description: 'Подготавливаете заявку и отслеживаете статус в личном кабинете.' },
                ],
                buttonText: 'Зарегистрироваться бесплатно',
            }
        },
        systemFeatures: {
            title: 'Возможности системы',
            items: [
              { icon: React.createElement(Search, { className: "w-8 h-8" }), title: 'Мультиплощадочный поиск', description: 'Поиск тендеров по всем основным площадкам Казахстана. Быстро находите нужные закупки с помощью интеллектуальных фильтров.'},
              { icon: React.createElement(Briefcase, { className: "w-8 h-8" }), title: 'Детализированные карточки', description: 'Вся информация о тендере в одном месте: заказчик, статус, сроки, тип закупки, цена и многое другое для быстрого анализа.'},
              { icon: React.createElement(BellRing, { className: "w-8 h-8" }), title: 'Система оповещений', description: 'Получайте уведомления о новых тендерах на email и в Telegram, не пропускайте важные закупки и изменения статусов.' },
              { icon: React.createElement(BarChart3, { className: "w-8 h-8" }), title: 'Аналитика и статистика', description: 'Анализируйте рынок, отслеживайте динамику тендеров, стройте отчёты и принимайте обоснованные решения.'},
              { icon: React.createElement(Users, { className: "w-8 h-8" }), title: 'Отслеживание конкурентов', description: 'Следите за активностью конкурентов и их тендерами, чтобы быть на шаг впереди на рынке.'},
              { icon: React.createElement(Filter, { className: "w-8 h-8" }), title: 'Гибкая фильтрация', description: 'Настраивайте фильтры по регионам, типам закупок, цене, дате и другим параметрам для максимальной релевантности.'},
            ]
        },
        cta: {
            main: { title: "Начните выигрывать тендеры уже сегодня", description: "Первый доступ — бесплатно, без карты и обязательств.", buttonText: "Попробовать бесплатно", secondaryButtonText: "Связаться с менеджером" },
            secondary: { title: "Начните получать тендеры первыми", buttonText: "Получить 48-часовой доступ" },
            final: { title: "Начните выигрывать закупки уже сегодня", buttonText: "Попробовать бесплатно" },
        }
    },
    rednet: {
        header: {
            brandName: 'redneT',
            navLinks: [
                { href: '/', label: 'Тендеры Беларуси' },
                { href: '/analytics', label: 'Аналитика' },
                { href: '/favorites', label: 'Избранное' },
                { href: '/pricing', label: 'Тарифы' },
                { href: '/blog', label: 'Блог' },
                { href: '/help', label: 'Помощь' },
            ]
        },
        hero: {
            title: 'Госзакупки Беларуси без лишних усилий',
            subtitle: 'Раздробленные площадки, срочное реагирование, риски работы с непроверенными контрагентами — мы это решаем. Интеграция с goszakupki.by и icetrade.by.',
            cta: 'Получить тестовый доступ',
            secondaryCta: 'Запросить демо'
        },
        howItWorks: {
            title: 'Почему компании выбирают redneT',
            items: [
                { icon: React.createElement(Search, { className: "w-8 h-8" }), title: 'Экономия времени', description: 'Поиск и отсев лотов занимают минуты, а не часы.' },
                { icon: React.createElement(DatabaseZap, { className: "w-8 h-8" }), title: 'Полная картина рынка', description: 'Интеграция с goszakupki.by, icetrade.by и другими площадками.' },
                { icon: React.createElement(Bell, { className: "w-8 h-8" }), title: 'Мгновенные уведомления', description: 'Изменения в документации приходят сразу на Email и в Telegram.' },
                { icon: React.createElement(BarChart, { className: "w-8 h-8" }), title: 'Удобная аналитика', description: 'Отслеживайте активность конкурентов и принимайте взвешенные решения.'},
            ]
        },
        features: {
            title: 'Все инструменты в одном окне',
            items: [
                {
                    title: "Детальный поиск по рынку РБ",
                    list: [ 'Интеграция с goszakupki.by, icetrade.by', 'Автоматический расчёт НДС', 'Экспорт форм 2-б для участия'],
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzUzODY0NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
                    alt: 'Аналитика',
                    hint: 'analytics dashboard'
                },
                {
                    title: "Командная работа",
                    list: [ 'Метки, статусы и распределение задач', 'Календарь дедлайнов с экспортом .ics', 'Обсуждение документов в одном окне'],
                    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTM4NjQ1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                    alt: 'Командная работа',
                    hint: 'team collaboration'
                },
            ]
        },
        growth: {
            title: 'Наши достижения в цифрах',
            items: [
                { icon: React.createElement(Building, { className: "w-8 h-8 text-accent" }), value: '60+', label: 'площадок в базе' },
                { icon: React.createElement(Clock, { className: "w-8 h-8 text-accent" }), value: '15', label: 'лет на рынке' },
                { icon: React.createElement(Users, { className: "w-8 h-8 text-accent" }), value: '12,000+', label: 'пользователей' },
                { icon: React.createElement(DatabaseZap, { className: "w-8 h-8 text-accent" }), value: '120 млрд BYN', label: 'актуальных лотов' },
            ]
        },
        benefits: {
            title: 'Преимущества платформы redneT',
            main: [
                { icon: React.createElement(Bot, { className: "w-8 h-8 text-accent" }), title: 'Полная автоматизация', description: 'Тендеры обновляются ежедневно без вашего участия.'},
                { icon: React.createElement(Filter, { className: "w-8 h-8 text-accent" }), title: 'Фильтрация и исключения', description: 'Настраивайте показ только релевантных тендеров.'},
                { icon: React.createElement(DatabaseZap, { className: "w-8 h-8 text-accent" }), title: 'Интеграция данных', description: 'Доступ к тендерам с goszakupki.by и icetrade.by.'},
            ],
            steps: {
                title: 'Как это работает',
                items: [
                    { icon: React.createElement(UserPlus, { className: "w-8 h-8 text-accent" }), title: 'Регистрация', description: 'Создайте аккаунт за 1 минуту.'},
                    { icon: React.createElement(SlidersHorizontal, { className: "w-8 h-8 text-accent" }), title: 'Настройка фильтров', description: 'Выберите подходящие фильтры и ключевые слова.'},
                    { icon: React.createElement(Bell, { className: "w-8 h-8 text-accent" }), title: 'Получайте уведомления', description: 'Следите за новыми тендерами через email и Telegram.'},
                ],
                buttonText: 'Зарегистрироваться бесплатно',
            }
        },
        systemFeatures: {
            title: 'Возможности системы',
            items: [
              { icon: React.createElement(Search, { className: "w-8 h-8" }), title: 'Мультиплощадочный поиск', description: 'Поиск тендеров по всем основным площадкам Беларуси. Быстро находите нужные закупки с помощью интеллектуальных фильтров.'},
              { icon: React.createElement(Briefcase, { className: "w-8 h-8" }), title: 'Детализированные карточки', description: 'Вся информация о тендере в одном месте: заказчик, статус, сроки, тип закупки, цена и многое другое для быстрого анализа.'},
              { icon: React.createElement(BellRing, { className: "w-8 h-8" }), title: 'Система оповещений', description: 'Получайте уведомления о новых тендерах на email и в Telegram, не пропускайте важные закупки и изменения статусов.' },
              { icon: React.createElement(BarChart3, { className: "w-8 h-8" }), title: 'Аналитика и статистика', description: 'Анализируйте рынок, отслеживайте динамику тендеров, стройте отчёты и принимайте обоснованные решения.'},
              { icon: React.createElement(Users, { className: "w-8 h-8" }), title: 'Отслеживание конкурентов', description: 'Следите за активностью конкурентов и их тендерами, чтобы быть на шаг впереди на рынке.'},
              { icon: React.createElement(Filter, { className: "w-8 h-8" }), title: 'Гибкая фильтрация', description: 'Настраивайте фильтры по регионам, типам закупок, цене, дате и другим параметрам для максимальной релевантности.'},
            ]
        },
        cta: {
            main: { title: "Начните выигрывать закупки уже сегодня", description: "Первый доступ — бесплатно, без карты и обязательств.", buttonText: "Получить тестовый доступ", secondaryButtonText: "Связаться с менеджером" },
            secondary: { title: "Начните получать тендеры первыми", buttonText: "Получить тестовый доступ" },
            final: { title: "Начните выигрывать закупки уже сегодня", buttonText: "Получить тестовый доступ" },
        }
    },
    rednet2: {
        header: {
            brandName: 'redneT',
            navLinks: [
                { href: '/', label: 'Тендеры Беларуси' },
                { href: '/analytics', label: 'Аналитика' },
                { href: '/favorites', label: 'Избранное' },
                { href: '/pricing', label: 'Тарифы' },
                { href: '/blog', label: 'Блог' },
                { href: '/help', label: 'Помощь' },
            ]
        },
        hero: {
            title: 'Госзакупки Беларуси без лишних усилий',
            subtitle: 'Раздробленные площадки, срочное реагирование, риски работы с непроверенными контрагентами — мы это решаем. Интеграция с goszakupki.by и icetrade.by.',
            cta: 'Получить тестовый доступ',
            secondaryCta: 'Запросить демо'
        },
        howItWorks: {
            title: 'Почему компании выбирают redneT',
            items: [
                { icon: React.createElement(Search, { className: "w-8 h-8" }), title: 'Экономия времени', description: 'Поиск и отсев лотов занимают минуты, а не часы.' },
                { icon: React.createElement(DatabaseZap, { className: "w-8 h-8" }), title: 'Полная картина рынка', description: 'Интеграция с goszakupki.by, icetrade.by и другими площадками.' },
                { icon: React.createElement(Bell, { className: "w-8 h-8" }), title: 'Мгновенные уведомления', description: 'Изменения в документации приходят сразу на Email и в Telegram.' },
                { icon: React.createElement(BarChart, { className: "w-8 h-8" }), title: 'Удобная аналитика', description: 'Отслеживайте активность конкурентов и принимайте взвешенные решения.'},
            ]
        },
        features: {
            title: 'Все инструменты в одном окне',
            items: [
                {
                    title: "Детальный поиск по рынку РБ",
                    list: [ 'Интеграция с goszakupki.by, icetrade.by', 'Автоматический расчёт НДС', 'Экспорт форм 2-б для участия'],
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzUzODY0NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
                    alt: 'Аналитика',
                    hint: 'analytics dashboard'
                },
                {
                    title: "Командная работа",
                    list: [ 'Метки, статусы и распределение задач', 'Календарь дедлайнов с экспортом .ics', 'Обсуждение документов в одном окне'],
                    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTM4NjQ1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                    alt: 'Командная работа',
                    hint: 'team collaboration'
                },
            ]
        },
        growth: {
            title: 'Наши достижения в цифрах',
            items: [
                { icon: React.createElement(Building, { className: "w-8 h-8 text-accent" }), value: '60+', label: 'площадок в базе' },
                { icon: React.createElement(Clock, { className: "w-8 h-8 text-accent" }), value: '15', label: 'лет на рынке' },
                { icon: React.createElement(Users, { className: "w-8 h-8 text-accent" }), value: '12,000+', label: 'пользователей' },
                { icon: React.createElement(DatabaseZap, { className: "w-8 h-8 text-accent" }), value: '120 млрд BYN', label: 'актуальных лотов' },
            ]
        },
        benefits: {
            title: 'Преимущества платформы redneT',
            main: [
                { icon: React.createElement(Bot, { className: "w-8 h-8 text-accent" }), title: 'Полная автоматизация', description: 'Тендеры обновляются ежедневно без вашего участия.'},
                { icon: React.createElement(Filter, { className: "w-8 h-8 text-accent" }), title: 'Фильтрация и исключения', description: 'Настраивайте показ только релевантных тендеров.'},
                { icon: React.createElement(DatabaseZap, { className: "w-8 h-8 text-accent" }), title: 'Интеграция данных', description: 'Доступ к тендерам с goszakupki.by и icetrade.by.'},
            ],
            steps: {
                title: 'Как это работает',
                items: [
                    { icon: React.createElement(UserPlus, { className: "w-8 h-8 text-accent" }), title: 'Регистрация', description: 'Создайте аккаунт за 1 минуту.'},
                    { icon: React.createElement(SlidersHorizontal, { className: "w-8 h-8 text-accent" }), title: 'Настройка фильтров', description: 'Выберите подходящие фильтры и ключевые слова.'},
                    { icon: React.createElement(Bell, { className: "w-8 h-8 text-accent" }), title: 'Получайте уведомления', description: 'Следите за новыми тендерами через email и Telegram.'},
                ],
                buttonText: 'Зарегистрироваться бесплатно',
            }
        },
        systemFeatures: {
            title: 'Возможности системы',
            items: [
              { icon: React.createElement(Search, { className: "w-8 h-8" }), title: 'Мультиплощадочный поиск', description: 'Поиск тендеров по всем основным площадкам Беларуси. Быстро находите нужные закупки с помощью интеллектуальных фильтров.'},
              { icon: React.createElement(Briefcase, { className: "w-8 h-8" }), title: 'Детализированные карточки', description: 'Вся информация о тендере в одном месте: заказчик, статус, сроки, тип закупки, цена и многое другое для быстрого анализа.'},
              { icon: React.createElement(BellRing, { className: "w-8 h-8" }), title: 'Система оповещений', description: 'Получайте уведомления о новых тендерах на email и в Telegram, не пропускайте важные закупки и изменения статусов.' },
              { icon: React.createElement(BarChart3, { className: "w-8 h-8" }), title: 'Аналитика и статистика', description: 'Анализируйте рынок, отслеживайте динамику тендеров, стройте отчёты и принимайте обоснованные решения.'},
              { icon: React.createElement(Users, { className: "w-8 h-8" }), title: 'Отслеживание конкурентов', description: 'Следите за активностью конкурентов и их тендерами, чтобы быть на шаг впереди на рынке.'},
              { icon: React.createElement(Filter, { className: "w-8 h-8" }), title: 'Гибкая фильтрация', description: 'Настраивайте фильтры по регионам, типам закупок, цене, дате и другим параметрам для максимальной релевантности.'},
            ]
        },
        cta: {
            main: { title: "Начните выигрывать закупки уже сегодня", description: "Первый доступ — бесплатно, без карты и обязательств.", buttonText: "Получить тестовый доступ", secondaryButtonText: "Связаться с менеджером" },
            secondary: { title: "Начните получать тендеры первыми", buttonText: "Получить тестовый доступ" },
            final: { title: "Начните выигрывать закупки уже сегодня", buttonText: "Получить тестовый доступ" },
        }
    }
};

export const newTendersData = [
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
    status: "Открыт"
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

export const pricingTiers = [
  {
    name: 'Базовый',
    priceMonthly: '29 $',
    priceAnnually: '279 $',
    description: 'Для индивидуальных предпринимателей и микробизнеса, которым нужен полный доступ к тендерам.',
    features: [
      'Полный доступ ко всем тендерам',
      'Уведомления на e-mail',
      '5 сохранённых фильтров',
      '1 пользователь',
    ],
    isPopular: false,
  },
  {
    name: 'Профи',
    priceMonthly: '59 $',
    priceAnnually: '569 $',
    description: 'Для отделов закупок до 5 человек, которым нужны расширенные возможности и аналитика.',
    features: [
      'Всё из тарифа «Базовый»',
      'Уведомления в Telegram',
      'Неограниченные фильтры',
      'Сравнительный анализ конкурентов',
      'До 5 пользователей',
    ],
    isPopular: true,
  },
  {
    name: 'Бизнес',
    priceMonthly: 'Индивидуально',
    priceAnnually: 'Индивидуально',
    description: 'Для крупных департаментов закупок и тендерных подразделений с особыми требованиями.',
    features: [
      'Всё из тарифа «Профи»',
      'REST API для интеграции',
      'Расширенная аналитика',
      'Приоритетная поддержка',
      'До 20 пользователей',
    ],
    isPopular: false,
  },
];


export const mockTender = {
  id: "sample-tender-123",
  title: 'Закупка бумаги формата А4 для офисных нужд государственной организации',
  location: 'Минск',
  customer: 'Министерство образования Республики Беларусь',
  platform: 'goszakupki.by',
  published: '15.05.2024',
  deadline: 'Подача до 25.05.2024 (Осталось 8 дней)',
  type: 'Товар',
  price: '15 200 BYN',
  status: 'Открыт'
};

export const blogTags = ["госзакупки", "аналитика", "тендерная_стратегия", "оптимизация_затрат", "юридические_аспекты", "финансы"];

export const blogPostsList = [
    {
        slug: 'how-to-win-tenders',
        title: 'Как выигрывать в тендерах: 5 ключевых шагов к успеху',
        excerpt: 'Участие в тендерах может стать мощным источником дохода, но требует подготовки. В этой статье мы разберем пять основных этапов, которые помогут вам...',
        author: 'Алексей Иванов',
        date: '15 мая 2024',
        image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80',
        aiHint: 'business meeting',
        tags: ['тендерная_стратегия', 'госзакупки']
    },
    {
        slug: 'common-mistakes',
        title: 'Типичные ошибки при подаче заявок и как их избежать',
        excerpt: 'Даже опытные участники иногда допускают досадные ошибки. Узнайте, как избежать самых распространенных промахов и повысить свои шансы на победу.',
        author: 'Мария Петрова',
        date: '10 мая 2024',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
        aiHint: 'team working',
        tags: ['юридические_аспекты', 'оптимизация_затрат']
    },
     {
        slug: 'analytics-for-procurement',
        title: 'Сила данных: как аналитика помогает принимать верные решения',
        excerpt: 'Современные инструменты аналитики позволяют не просто находить тендеры, но и анализировать конкурентов, прогнозировать цены и выстраивать долгосрочную стратегию.',
        author: 'Сергей Смирнов',
        date: '22 мая 2024',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        aiHint: 'data analytics',
        tags: ['аналитика', 'тендерная_стратегия']
    },
    {
        slug: 'cost-optimization-secrets',
        title: 'Секреты оптимизации затрат: как снизить издержки',
        excerpt: 'Управление затратами — ключевой аспект успешного участия в закупках. Рассматриваем эффективные методы, которые помогут вам оставаться конкурентоспособными.',
        author: 'Елена Васильева',
        date: '18 мая 2024',
        image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80',
        aiHint: 'finance piggybank',
        tags: ['оптимизация_затрат', 'финансы']
    }
];

export const blogPostsData = {
    'how-to-win-tenders': {
        title: 'Как выигрывать в тендерах: 5 ключевых шагов к успеху',
        author: 'Алексей Иванов',
        date: '15 мая 2024',
        image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80',
        aiHint: 'business meeting',
        tags: ['тендерная_стратегия', 'госзакупки'],
        content: `
            <p class="lead mb-6">Участие в тендерах может стать мощным источником дохода для любой компании, но успех в этой сфере требует тщательной подготовки и стратегического подхода. В этой статье мы разберем пять основных этапов, которые помогут вам повысить шансы на победу.</p>
            <h3 class="font-bold text-2xl text-primary mt-8 mb-4">1. Анализ рынка и выбор ниши</h3>
            <p class="mb-4">Не стоит пытаться участвовать во всех тендерах подряд. Сконцентрируйтесь на своей нише, где у вас есть опыт, ресурсы и конкурентные преимущества. Используйте аналитические инструменты, чтобы изучить:</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>Объемы закупок в вашем сегменте.</li>
              <li>Ключевых заказчиков и их требования.</li>
              <li>Активность конкурентов и их ценовую политику.</li>
            </ul>
            <p>Это поможет вам выбирать только те закупки, где ваши шансы на победу максимальны.</p>

            <h3 class="font-bold text-2xl text-primary mt-8 mb-4">2. Тщательная подготовка документации</h3>
            <p class="mb-4">Это самый важный и трудоемкий этап. Любая ошибка в документах может стать причиной отклонения вашей заявки. Внимательно изучите все требования заказчика и убедитесь, что ваша заявка полностью им соответствует. Обратите внимание на:</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>Техническое задание и спецификации.</li>
              <li>Квалификационные требования к участникам.</li>
              <li>Сроки и порядок подачи заявки.</li>
            </ul>

             <h3 class="font-bold text-2xl text-primary mt-8 mb-4">3. Обоснованное ценообразование</h3>
            <p class="mb-4">Ваше ценовое предложение должно быть конкурентоспособным, но при этом экономически обоснованным. Не стоит демпинговать в ущерб качеству и рентабельности. Проанализируйте цены победителей в аналогичных тендерах, оцените все свои издержки и заложите разумную норму прибыли.</p>

             <h3 class="font-bold text-2xl text-primary mt-8 mb-4">4. Использование современных инструментов</h3>
            <p class="mb-4">Автоматизированные платформы для поиска и аналитики тендеров, такие как Tendersoft, могут значительно упростить вашу работу. Они помогают:</p>
             <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>Экономить время на поиске релевантных закупок.</li>
              <li>Получать уведомления о новых тендерах и изменениях в старых.</li>
              <li>Анализировать конкурентов и принимать взвешенные решения.</li>
            </ul>

             <h3 class="font-bold text-2xl text-primary mt-8 mb-4">5. Анализ результатов и постоянное улучшение</h3>
             <p>Независимо от исхода тендера, всегда анализируйте результаты. Если вы проиграли, запросите протокол и выясните причину. Это поможет вам выявить слабые места и избежать ошибок в будущем. Если выиграли — проанализируйте, что именно привело к успеху, чтобы закрепить его в следующих закупках.</p>
        `
    },
    'common-mistakes': {
        title: 'Типичные ошибки при подаче заявок и как их избежать',
        author: 'Мария Петрова',
        date: '10 мая 2024',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
        aiHint: 'team working',
        tags: ['юридические_аспекты', 'оптимизация_затрат'],
        content: `<p class="lead mb-6">Даже самые опытные участники тендеров иногда допускают досадные ошибки, которые приводят к отклонению заявки. В этой статье мы рассмотрим наиболее распространенные промахи и дадим советы, как их избежать, чтобы повысить ваши шансы на победу.</p>

<h3 class="font-bold text-2xl text-primary mt-8 mb-4">1. Невнимательное изучение документации</h3>
<p class="mb-4">Это самая частая и самая критичная ошибка. Пропуск даже одного незначительного требования, например, к формату подписи или наличию конкретной справки, может привести к автоматическому отклонению заявки. <strong>Решение:</strong> Создайте чек-лист по каждому тендеру и проверяйте по нему комплект документов перед отправкой. Назначьте ответственного сотрудника для двойной проверки.</p>

<h3 class="font-bold text-2xl text-primary mt-8 mb-4">2. Неправильное оформление документов</h3>
<p class="mb-4">Ошибки в заполнении форм, опечатки в названии компании или УНП, отсутствие печатей и подписей на всех необходимых страницах — все это формальные основания для отклонения. <strong>Решение:</strong> Используйте шаблоны для стандартных документов. Внимательно вычитывайте все заполненные формы перед подачей. Проверяйте, чтобы все страницы были пронумерованы и сшиты, если это требуется.</p>

<blockquote class="border-l-4 border-accent pl-4 py-2 my-6 italic">
  "Дьявол кроется в деталях. В мире тендеров это правило работает на 100%."
</blockquote>

<h3 class="font-bold text-2xl text-primary mt-8 mb-4">3. Пропуск сроков подачи</h3>
<p class="mb-4">Опоздание даже на одну минуту приведет к тому, что ваша заявка не будет принята к рассмотрению. <strong>Решение:</strong> Установите внутренний дедлайн на 1-2 дня раньше официального срока. Это даст вам запас времени на случай форс-мажоров. Используйте календарь и настройте несколько напоминаний.</p>

<h3 class="font-bold text-2xl text-primary mt-8 mb-4">4. Неверное ценовое предложение</h3>
<p class="mb-4">Слишком высокая цена делает вас неконкурентоспособным, а необоснованно низкая (демпинг) может вызвать подозрения у заказчика и привести к дополнительным проверкам или отклонению. <strong>Решение:</strong> Проводите анализ цен предыдущих аналогичных закупок. Тщательно рассчитывайте себестоимость, учитывая все накладные расходы, налоги и логистику.</p>

<h3 class="font-bold text-2xl text-primary mt-8 mb-4">5. Игнорирование запросов на разъяснение</h3>
<p>Если какой-то пункт в документации кажется вам неясным или двусмысленным, не стесняйтесь отправлять официальный запрос на разъяснение заказчику. Подавать заявку "на авось" — проигрышная стратегия. <strong>Решение:</strong> Внимательно изучайте документацию сразу после ее публикации, чтобы у вас было время на подготовку и отправку запросов.</p>
        `
    },
    'analytics-for-procurement': {
        title: 'Сила данных: как аналитика помогает принимать верные решения',
        author: 'Сергей Смирнов',
        date: '22 мая 2024',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        aiHint: 'data analytics',
        tags: ['аналитика', 'тендерная_стратегия'],
        content: `
            <p class="lead mb-6">В современном мире госзакупок побеждает тот, кто владеет информацией. Современные инструменты аналитики позволяют не просто находить тендеры, но и анализировать конкурентов, прогнозировать цены и выстраивать долгосрочную стратегию. Давайте разберемся, как это работает.</p>
            <h3 class="font-bold text-2xl text-primary mt-8 mb-4">1. Оценка потенциала рынка</h3>
            <p class="mb-4">Аналитика помогает понять, какие товары или услуги пользуются наибольшим спросом, какие регионы наиболее активны и какие заказчики являются крупнейшими игроками на вашем рынке. Это позволяет вам сфокусировать усилия там, где они принесут максимальный результат.</p>
            
            <h3 class="font-bold text-2xl text-primary mt-8 mb-4">2. Анализ конкурентов</h3>
            <p class="mb-4">Кто ваши основные конкуренты? В каких тендерах они участвуют и с какой ценой побеждают? Аналитические системы позволяют отслеживать активность других компаний, их средний процент снижения цены и историю побед и поражений. Эта информация бесценна для формирования собственного ценового предложения.</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>Определите "любимых" поставщиков конкретных заказчиков.</li>
              <li>Проанализируйте, в каких закупках конкуренция минимальна.</li>
              <li>Выявите ценовые стратегии конкурентов.</li>
            </ul>

             <h3 class="font-bold text-2xl text-primary mt-8 mb-4">3. Прогнозирование цены</h3>
            <p class="mb-4">Один из самых сложных вопросов — какую цену предложить. На основе исторических данных о завершенных закупках, система аналитики может спрогнозировать вероятный диапазон победной цены. Это снижает риски необоснованного демпинга и помогает вам оставаться в рамках рентабельности.</p>
        `
    },
    'cost-optimization-secrets': {
        title: 'Секреты оптимизации затрат: как снизить издержки',
        author: 'Елена Васильева',
        date: '18 мая 2024',
        image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80',
        aiHint: 'finance piggybank',
        tags: ['оптимизация_затрат', 'финансы'],
        content: `<p class="lead mb-6">Управление затратами — ключевой аспект успешного участия в закупках. Рассматриваем эффективные методы, которые помогут вам оставаться конкурентоспособными и увеличивать маржинальность контрактов.</p>
        
        <p>Даже небольшое снижение издержек может кардинально изменить вашу позицию в тендере и принести победу.</p>
        `
    },
};


export const recentWins = [
    { id: 1, title: "Поставка компьютерной техники", customer: "Министерство образования", amount: "120 000 BYN", date: "20.05.2024" },
    { id: 2, title: "Ремонт кровли административного здания", customer: "Городской исполнительный комитет", amount: "85 500 BYN", date: "18.05.2024" },
    { id: 3, title: "Закупка офисной мебели", customer: "Национальная библиотека", amount: "45 000 BYN", date: "15.05.2024" },
    { id: 4, title: "Услуги по техническому обслуживанию автомобилей", customer: "Республиканский центр олимпийской подготовки", amount: "32 000 BYN", date: "12.05.2024" },
];


export const mockApiData = {
    2024: [
      { region: 'Минская область', sum: 12500000, count: 320 },
      { region: 'Гомельская область', sum: 8900000, count: 280 },
      { region: 'Брестская область', sum: 7600000, count: 250 },
      { region: 'Витебская область', sum: 6800000, count: 220 },
      { region: 'Гродненская область', sum: 7100000, count: 240 },
      { region: 'Могилевская область', sum: 6500000, count: 210 },
    ],
    2023: [
       { region: 'Минская область', sum: 11500000, count: 310 },
       { region: 'Гомельская область', sum: 8200000, count: 270 },
       { region: 'Брестская область', sum: 7300000, count: 245 },
       { region: 'Витебская область', sum: 6500000, count: 215 },
       { region: 'Гродненская область', sum: 6900000, count: 230 },
       { region: 'Могилевская область', sum: 6100000, count: 200 },
    ],
     2022: [
       { region: 'Минская область', sum: 10800000, count: 290 },
       { region: 'Гомельская область', sum: 7800000, count: 260 },
       { region: 'Брестская область', sum: 6900000, count: 230 },
       { region: 'Витебская область', sum: 6200000, count: 205 },
       { region: 'Гродненская область', sum: 6600000, count: 220 },
       { region: 'Могилевская область', sum: 5800000, count: 190 },
    ]
};
