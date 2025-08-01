import { type Metadata } from 'next';
import { Header } from '@/components/home2/header';
import { Footer } from '@/components/landing/footer';
import { Hero } from '@/components/home2/hero';
import { WhyAutomate } from '@/components/home2/why-automate';
import { TendersByPlatform } from '@/components/home2/tenders-by-platform';
import { TendersByIndustry } from '@/components/home2/tenders-by-industry';
import { WhyUs } from '@/components/home2/why-us';
import { SystemCapabilities } from '@/components/home2/system-capabilities';
import { ContactForm } from '@/components/home2/contact-form';

export const metadata: Metadata = {
  title: 'Все тендеры Казахстана в одном сервисе | ТОО «СофтБисервис»',
  description: 'Ускорьте поиск коммерческих тендеров и госзакупок Республики Казахстан с помощью сервиса «СофтБисервис». Поиск лотов, аналитика торгов, проверка участников закупок – всё в одной системе. Регистрируйтесь и находите выгодные контракты за 2 минуты.',
};

export default function Home2Page() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyAutomate />
        <TendersByPlatform />
        <TendersByIndustry />
        <WhyUs />
        <SystemCapabilities />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
