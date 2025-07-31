import { Bot, Filter, DatabaseZap, UserPlus, SlidersHorizontal, Bell, Search, BarChart, Users, MagnifyingGlass, Browsers, Funnel, Clock, Building } from 'lucide-react';
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
                { icon: React.createElement(Database, { className: "w-8 h-8 text-accent" }), value: '450 млрд ₸', label: 'актуальных лотов' },
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
              { icon: React.createElement(MagnifyingGlass, { weight: "regular" }), title: 'Мультиплощадочный поиск', description: 'Поиск тендеров по всем основным площадкам Казахстана. Быстро находите нужные закупки с помощью интеллектуальных фильтров.'},
              { icon: React.createElement(Browsers, { weight: "regular" }), title: 'Детализированные карточки', description: 'Вся информация о тендере в одном месте: заказчик, статус, сроки, тип закупки, цена и многое другое для быстрого анализа.'},
              { icon: React.createElement(Bell, { weight: "regular" }), title: 'Система оповещений', description: 'Получайте уведомления о новых тендерах на email и в Telegram, не пропускайте важные закупки и изменения статусов.' },
              { icon: React.createElement(ChartBar, { weight: "regular" }), title: 'Аналитика и статистика', description: 'Анализируйте рынок, отслеживайте динамику тендеров, стройте отчёты и принимайте обоснованные решения.'},
              { icon: React.createElement(Users, { weight: "regular" }), title: 'Отслеживание конкурентов', description: 'Следите за активностью конкурентов и их тендерами, чтобы быть на шаг впереди на рынке.'},
              { icon: React.createElement(Funnel, { weight: "regular" }), title: 'Гибкая фильтрация', description: 'Настраивайте фильтры по регионам, типам закупок, цене, дате и другим параметрам для максимальной релевантности.'},
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
                { icon: React.createElement(Database, { className: "w-8 h-8 text-accent" }), value: '120 млрд BYN', label: 'актуальных лотов' },
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
              { icon: React.createElement(MagnifyingGlass, { weight: "regular" }), title: 'Мультиплощадочный поиск', description: 'Поиск тендеров по всем основным площадкам Беларуси. Быстро находите нужные закупки с помощью интеллектуальных фильтров.'},
              { icon: React.createElement(Browsers, { weight: "regular" }), title: 'Детализированные карточки', description: 'Вся информация о тендере в одном месте: заказчик, статус, сроки, тип закупки, цена и многое другое для быстрого анализа.'},
              { icon: React.createElement(Bell, { weight: "regular" }), title: 'Система оповещений', description: 'Получайте уведомления о новых тендерах на email и в Telegram, не пропускайте важные закупки и изменения статусов.' },
              { icon: React.createElement(ChartBar, { weight: "regular" }), title: 'Аналитика и статистика', description: 'Анализируйте рынок, отслеживайте динамику тендеров, стройте отчёты и принимайте обоснованные решения.'},
              { icon: React.createElement(Users, { weight: "regular" }), title: 'Отслеживание конкурентов', description: 'Следите за активностью конкурентов и их тендерами, чтобы быть на шаг впереди на рынке.'},
              { icon: React.createElement(Funnel, { weight: "regular" }), title: 'Гибкая фильтрация', description: 'Настраивайте фильтры по регионам, типам закупок, цене, дате и другим параметрам для максимальной релевантности.'},
            ]
        },
        cta: {
            main: { title: "Начните выигрывать закупки уже сегодня", description: "Первый доступ — бесплатно, без карты и обязательств.", buttonText: "Получить тестовый доступ", secondaryButtonText: "Связаться с менеджером" },
            secondary: { title: "Начните получать тендеры первыми", buttonText: "Получить тестовый доступ" },
            final: { title: "Начните выигрывать закупки уже сегодня", buttonText: "Получить тестовый доступ" },
        }
    }
};
