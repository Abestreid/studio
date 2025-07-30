import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Benefits } from '@/components/landing/benefits';
import { Cta } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';
import { Partners } from '@/components/landing/partners';
import { Testimonials } from '@/components/landing/testimonials';
import { Growth } from '@/components/landing/growth';
import { SystemFeatures } from '@/components/landing/system-features';

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Growth />
        <Partners />
        <Cta
          title="Начните выигрывать тендеры уже сегодня"
          buttonText="Попробовать бесплатно"
          secondaryButtonText="Смотреть демо"
        />
        <Benefits />
        <SystemFeatures />
        <Cta
          title="Готовы получить свой первый госконтракт?"
          description="Зарегистрируйтесь на 1 минуту и получите 7 дней бесплатного доступа ко всем функциям. Без привязки карты и обязательств"
          buttonText="Попробовать бесплатно"
        />
      </main>
      <Footer />
    </div>
  );
}
