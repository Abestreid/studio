import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const platforms = [
  {
    logo: 'https://tendersoft.kz/content/images/goszakup.svg',
    title: 'Государственные закупки РК',
    description: 'Автоматическая выгрузка тендеров с портала госзакупок.',
  },
  {
    logo: 'https://tendersoft.kz/content/images/Zakup-sk.svg',
    title: 'Тендеры Самрук-Казына',
    description: 'Доступ к закупкам крупнейшего холдинга страны.',
  },
  {
    logo: '/images/mitwork-logo.svg',
    title: 'Коммерческие тендеры',
    description: 'Закупки частных предприятий и компаний.',
  },
  {
    logo: '/images/nadloc-logo.svg',
    title: 'Тендеры недропользователей',
    description: 'Закупки добывающих компаний на платформе NADLoC.',
  },
];

export function TendersByPlatform() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">
            Все тендеры Казахстана в единой системе
          </h2>
          <p className="mt-4 text-muted-foreground">
            Больше не нужно искать лоты закупок вручную — информация хранится в единой системе, которая выступает как база тендеров Казахстана с возможностью фильтрации и анализа электронных торгов.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <Card key={platform.title} className="p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 flex items-center justify-center mb-4">
                    <Image src={platform.logo} alt={platform.title} width={120} height={40} className="max-h-10 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{platform.title}</h3>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/">Поиск по площадкам</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
